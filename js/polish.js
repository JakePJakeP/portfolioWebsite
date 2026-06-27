/**
 * Polish layer — micro-interactions & skill ↔ project linking
 */
(function () {
    'use strict';

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Skill chip → project highlight
    const projectMap = {
        nemacolin: document.getElementById('case-nemacolin'),
        onlyodds: document.getElementById('case-onlyodds'),
        pins: document.getElementById('case-pins'),
        portfolio: document.getElementById('case-portfolio'),
        duquesne: document.getElementById('case-duquesne'),
    };

    document.querySelectorAll('.skill-chip[data-projects]').forEach((chip) => {
        const ids = chip.dataset.projects.split(',').map((s) => s.trim());

        const highlight = () => {
            ids.forEach((id) => projectMap[id]?.classList.add('case-study--highlight'));
        };
        const unhighlight = () => {
            ids.forEach((id) => projectMap[id]?.classList.remove('case-study--highlight'));
        };

        chip.addEventListener('mouseenter', highlight);
        chip.addEventListener('mouseleave', unhighlight);
        chip.addEventListener('focus', highlight);
        chip.addEventListener('blur', unhighlight);

        chip.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && ids[0] && projectMap[ids[0]]) {
                e.preventDefault();
                projectMap[ids[0]].scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
            }
        });
    });

    // Experience expand — update label & aria
    document.querySelectorAll('[data-expandable]').forEach((card) => {
        const toggle = card.querySelector('.exp-card__expand-link');
        const extra = card.querySelector('.exp-card__extra');
        if (!toggle || !extra) return;

        const textEl = toggle.querySelector('.exp-card__expand-text');

        toggle.addEventListener('click', () => {
            const open = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!open));
            card.classList.toggle('exp-card--open', !open);
            extra.hidden = open;
            if (textEl) textEl.textContent = open ? 'View case study' : 'Hide case study';
        });
    });

    // Subtle cursor glow (desktop only)
    if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
        const glow = document.createElement('div');
        glow.className = 'cursor-glow';
        glow.setAttribute('aria-hidden', 'true');
        document.body.appendChild(glow);

        let gx = 0;
        let gy = 0;
        let cx = 0;
        let cy = 0;

        document.addEventListener('mousemove', (e) => {
            gx = e.clientX;
            gy = e.clientY;
        }, { passive: true });

        function animateGlow() {
            cx += (gx - cx) * 0.08;
            cy += (gy - cy) * 0.08;
            glow.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
            requestAnimationFrame(animateGlow);
        }
        animateGlow();
    }

    // Focus trap helper for modal (enhancement in case-studies)
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('case-modal');
        if (e.key !== 'Tab' || !modal || modal.hidden) return;
        const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });
})();
