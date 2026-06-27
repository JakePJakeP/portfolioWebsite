/**
 * Portfolio — core interactions
 */
(function () {
    'use strict';

    // -------------------------------------------------------------------------
    // Page load
    // -------------------------------------------------------------------------

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        const year = document.getElementById('year');
        if (year) year.textContent = new Date().getFullYear();

        const data = window.PORTFOLIO_DATA;
        if (data?.handshakeUrl) {
            document.querySelectorAll('[data-handshake]').forEach((el) => {
                el.href = data.handshakeUrl;
            });
        }
        if (data?.resumeUrl) {
            document.querySelectorAll('[data-resume]').forEach((el) => {
                el.href = data.resumeUrl;
            });
        }

        initTerminal();
        initPreviewFallbacks();
    });

    function initPreviewFallbacks() {
        document.querySelectorAll('.project-placeholder__inner img').forEach((img) => {
            img.addEventListener('error', () => {
                const wrap = img.parentElement;
                const placeholder = img.closest('.project-placeholder');
                if (!wrap || wrap.querySelector('svg')) return;
                const label = placeholder?.querySelector('.project-placeholder__label')?.textContent?.trim() || 'Project preview';
                img.remove();
                wrap.insertAdjacentHTML('beforeend', `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}"><rect width="320" height="200" fill="#0f172a"/><text x="160" y="104" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="11" font-family="system-ui,sans-serif">${label}</text></svg>`);
            });
        });
    }

    // -------------------------------------------------------------------------
    // Mobile navigation
    // -------------------------------------------------------------------------

    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    function closeMenu() {
        navToggle?.setAttribute('aria-expanded', 'false');
        navMenu?.classList.remove('open');
    }

    navToggle?.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

    // -------------------------------------------------------------------------
    // Sticky header
    // -------------------------------------------------------------------------

    const header = document.getElementById('header');
    const updateHeader = () => header?.classList.toggle('header--scrolled', window.scrollY > 20);
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();

    // -------------------------------------------------------------------------
    // Scroll spy
    // -------------------------------------------------------------------------

    const sections = document.querySelectorAll('section[id]');
    let activeSection = 'home';

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) activeSection = entry.target.id;
        });
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.section === activeSection);
        });

        const titles = {
            home: 'Jake Pajerski | Software Engineer — CMU',
            about: 'About | Jake Pajerski',
            experience: 'Experience | Jake Pajerski',
            projects: 'Projects | Jake Pajerski',
            skills: 'Skills | Jake Pajerski',
            resume: 'Resume | Jake Pajerski',
            contact: 'Contact | Jake Pajerski',
            metrics: 'Jake Pajerski | Software Engineer — CMU',
        };
        if (titles[activeSection]) document.title = titles[activeSection];
    }, {
        rootMargin: '-96px 0px -55% 0px',
        threshold: [0, 0.1, 0.25],
    });

    sections.forEach((s) => sectionObserver.observe(s));

    // -------------------------------------------------------------------------
    // Scroll reveal
    // -------------------------------------------------------------------------

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    document.querySelectorAll('.reveal, .skill-chip, .metric-card').forEach((el) => {
        revealObserver.observe(el);
    });

    // -------------------------------------------------------------------------
    // Animated metric counters
    // -------------------------------------------------------------------------

    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.dataset.count, 10);
                const prefix = el.dataset.prefix || '';
                const suffix = el.dataset.suffix || '';
                const duration = 1800;
                const start = performance.now();

                function tick(now) {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(eased * target);
                    const plain = el.hasAttribute('data-count-plain');
                    const num = plain ? String(current) : current.toLocaleString();
                    el.textContent = prefix + num + suffix;
                    if (progress < 1) requestAnimationFrame(tick);
                }

                requestAnimationFrame(tick);
                counterObserver.unobserve(el);
            });
        },
        { threshold: 0.5 }
    );

    document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));

    // -------------------------------------------------------------------------
    // Experience expandable cards — handled by polish.js
    // -------------------------------------------------------------------------

    // -------------------------------------------------------------------------
    // Terminal typing animation
    // -------------------------------------------------------------------------

    function initTerminal() {
        const output = document.getElementById('terminal-output');
        const lines = window.PORTFOLIO_DATA?.terminalLines;
        if (!output || !lines || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            if (output && lines) {
                output.textContent = lines.map((l) => l.text).join('\n');
            }
            return;
        }

        let html = '';
        lines.forEach((line, i) => {
            setTimeout(() => {
                const isCommand = line.text.startsWith('$');
                const cls = isCommand ? 'terminal__line terminal__line--cmd' : 'terminal__line';
                html += `<span class="${cls}">${escapeHtml(line.text)}</span>\n`;
                output.innerHTML = html;
                output.scrollTop = output.scrollHeight;
            }, line.delay);
        });
    }

    function escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // -------------------------------------------------------------------------
    // Hero particle network
    // -------------------------------------------------------------------------

    const canvas = document.getElementById('hero-canvas');
    if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        let width, height;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        function createParticles() {
            const count = Math.min(Math.floor((width * height) / 35000), 40);
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1 + 0.3,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.25 + 0.05,
            }));
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(129, 140, 248, ${p.opacity})`;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.05 * (1 - dist / 140)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });
            animationId = requestAnimationFrame(draw);
        }

        resize();
        createParticles();
        draw();

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => { resize(); createParticles(); }, 200);
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) cancelAnimationFrame(animationId);
            else draw();
        });
    }
})();
