/**
 * Case study modal content & interactions
 */
(function () {
    'use strict';

    const CASE_STUDIES = {
        nemacolin: {
            title: 'Nemacolin IT Resource Dashboard',
            type: 'Enterprise Platform',
            problem: 'Nemacolin\'s IT department managed assets, licenses, tickets, and knowledge across disconnected tools — creating operational friction and visibility gaps across the resort\'s enterprise infrastructure.',
            solution: 'Designed and built a unified IT Resource Dashboard on Ruby on Rails, consolidating six operational modules into a single platform with role-based access control and comprehensive audit logging.',
            architecture: 'Monolithic Rails 7 application with Hotwire (Turbo + Stimulus) for reactive UI updates, PostgreSQL for relational data, and a modular service-oriented internal architecture separating concerns by domain.',
            stack: ['Ruby on Rails', 'PostgreSQL', 'Hotwire', 'Turbo', 'Stimulus', 'Tailwind CSS', 'JavaScript'],
            features: ['Asset Management', 'Ticketing System', 'Software Licensing', 'Knowledge Base', 'User Administration', 'Audit Logs', 'Authentication & RBAC'],
            challenges: [
                'Designing a normalized PostgreSQL schema supporting six interrelated modules without data duplication',
                'Implementing granular RBAC with audit trails across all write operations',
                'Building responsive, real-time UI updates with Hotwire without a separate JavaScript framework',
            ],
            lessons: [
                'Enterprise software demands rigorous data modeling upfront — schema changes are expensive at scale',
                'Audit logging should be architected from day one, not retrofitted',
                'Hotwire enables SPA-like experiences while keeping the simplicity of server-rendered HTML',
            ],
            learned: 'Schema design and audit logging are foundational in enterprise software — building them in from the start saves months of refactoring later.',
            future: [
                'Automated asset discovery and inventory synchronization',
                'Analytics dashboard for IT operational metrics',
                'API integrations with existing resort management systems',
            ],
            github: 'https://github.com/JakePJakeP',
            demo: null,
        },
        onlyodds: {
            title: 'OnlyOdds',
            type: 'Mobile Application',
            problem: 'Casual prediction markets lacked a mobile-native experience with real-time updates, leaving users on clunky web interfaces that couldn\'t deliver instant market synchronization.',
            solution: 'Built a React Native microprediction platform with Supabase-powered real-time sync, enabling live prediction markets, favorites, and push notifications in a mobile-first interface.',
            architecture: 'React Native client communicating with Supabase backend (PostgreSQL + real-time subscriptions + auth). Row-level security policies enforce data access, with optimistic UI updates on the client.',
            stack: ['React Native', 'Supabase', 'PostgreSQL', 'JavaScript', 'Real-time Subscriptions'],
            features: ['User Authentication', 'Live Prediction Markets', 'Real-time Synchronization', 'Favorites', 'Push Notifications', 'Mobile-first UI'],
            challenges: [
                'Managing real-time state consistency across multiple concurrent market updates',
                'Designing PostgreSQL schemas with row-level security for multi-tenant data isolation',
                'Optimizing React Native performance for smooth scrolling with live data feeds',
            ],
            lessons: [
                'Supabase dramatically accelerates MVP development for real-time applications',
                'Optimistic UI updates improve perceived performance but require careful conflict resolution',
                'Mobile-first design constraints lead to cleaner, more focused feature sets',
            ],
            learned: 'Supabase accelerates real-time MVPs, but optimistic UI updates need careful conflict resolution when markets update concurrently.',
            future: [
                'Social features and friend leaderboards',
                'Market creation by users',
                'Advanced analytics on prediction accuracy',
            ],
            github: 'https://github.com/JakePJakeP',
            demo: null,
        },
        pins: {
            title: 'Pins & Pieces',
            type: 'Algorithm + ML',
            problem: 'Choosing daily outfits from a large wardrobe is time-consuming and subjective — users needed an intelligent system to catalog clothing and generate cohesive outfit recommendations.',
            solution: 'Developed a Python wardrobe recommendation system combining image processing for automated clothing tagging with a backtracking algorithm to generate valid outfit combinations from user constraints.',
            architecture: 'Python pipeline: image ingestion → feature extraction & tagging → wardrobe graph construction → backtracking search for outfit combinations satisfying style and occasion constraints.',
            stack: ['Python', 'Image Processing', 'Backtracking Algorithms', 'Computer Vision'],
            features: ['Image Processing', 'Automated Tagging', 'Outfit Generation', 'Backtracking Algorithm', 'Wardrobe Cataloging'],
            challenges: [
                'Accurately categorizing clothing items from varied photo qualities and angles',
                'Designing a backtracking algorithm that balances style rules with computational efficiency',
                'Handling combinatorial explosion as wardrobe size grows',
            ],
            lessons: [
                'Algorithm design matters — backtracking with pruning beats brute force for combinatorial problems',
                'Image processing pipelines need robust error handling for real-world photo inputs',
                'User constraints (occasion, weather) dramatically improve recommendation relevance',
            ],
            learned: 'Backtracking with smart pruning beats brute force for combinatorial problems — algorithm choice directly impacts scalability.',
            future: [
                'ML-based style classification trained on fashion datasets',
                'Weather API integration for context-aware suggestions',
                'Mobile app with camera-based wardrobe scanning',
            ],
            github: 'https://github.com/JakePJakeP',
            demo: 'https://youtu.be/gAw29Cg-sfU',
        },
        portfolio: {
            title: 'Personal Portfolio',
            type: 'Web Development',
            problem: 'A generic portfolio template wouldn\'t differentiate me in competitive SWE internship recruiting — I needed a site that demonstrates engineering craft, not just lists projects.',
            solution: 'Engineered this portfolio from scratch with semantic HTML, a CSS design system, vanilla JavaScript, and intentional UX — optimized for performance, accessibility, and recruiter storytelling.',
            architecture: 'Static site with modular CSS custom properties, Intersection Observer for scroll animations, canvas-based particle network, and a case study modal system — zero framework dependencies.',
            stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Canvas API', 'Intersection Observer'],
            features: ['Scroll-triggered Animations', 'Case Study Modals', 'Animated Metrics', 'Terminal Simulation', 'Responsive Design', 'Accessibility (WCAG)', 'SEO Optimization'],
            challenges: [
                'Achieving premium visual polish without React or a CSS framework',
                'Balancing animation richness with performance and reduced-motion accessibility',
                'Structuring content for both human recruiters and search engine crawlers',
            ],
            lessons: [
                'Vanilla JS is underrated for portfolio sites — zero build step, instant deploys',
                'Design tokens in CSS variables enable consistent theming with minimal overhead',
                'Content hierarchy matters more than visual effects for recruiter engagement',
            ],
            learned: 'Content hierarchy and intentional UX matter more than visual effects — recruiters engage with clarity before polish.',
            future: [
                'Blog section for technical writing',
                'Dark/light mode toggle',
                'CMS integration for project updates',
            ],
            github: 'https://github.com/JakePJakeP/portfolioWebsite',
            demo: '#home',
        },
        duquesne: {
            title: 'Duquesne Incline Website',
            type: 'Informational Web',
            problem: 'Pittsburgh\'s historic Duquesne Incline deserved a modern, responsive web presence that could inform visitors about hours, history, and accessibility from any device.',
            solution: 'Built a responsive informational website with semantic HTML, modern CSS layout, and interactive JavaScript elements to showcase the landmark\'s history and visitor information.',
            architecture: 'Multi-page static site with responsive CSS Grid/Flexbox layouts, progressive enhancement, and optimized images for fast loading across devices.',
            stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
            features: ['Responsive Layout', 'Historical Content', 'Visitor Information', 'Image Gallery', 'Cross-browser Compatibility'],
            challenges: [
                'Organizing dense historical content into scannable, mobile-friendly sections',
                'Ensuring fast load times with high-resolution photography of the incline',
                'Creating intuitive navigation across multiple content pages',
            ],
            lessons: [
                'Information architecture is as important as visual design for content-heavy sites',
                'Responsive images and lazy loading are essential for photography-rich pages',
                'Semantic HTML improves both accessibility and SEO for informational sites',
            ],
            learned: 'Information architecture is as critical as visual design — scannable structure keeps dense content accessible on mobile.',
            future: [
                'Interactive map integration',
                'Real-time operating status from API',
                'Multilingual support for international tourists',
            ],
            github: 'https://github.com/JakePJakeP/duquesneInclineProject',
            demo: 'https://drive.google.com/file/d/1aARBBeQ1jDRgS1ydjG83wWFRshrZCDbb/view?usp=drive_link',
        },
    };

    const modal = document.getElementById('case-modal');
    const content = document.getElementById('case-modal-content');
    let lastFocus;

    function renderCaseStudy(data) {
        const list = (items) => items.map((i) => `<li>${i}</li>`).join('');
        const tags = data.stack.map((t) => `<span class="tag">${t}</span>`).join('');
        const actions = [
            `<a href="${data.github}" class="btn btn--ghost btn--sm" target="_blank" rel="noopener noreferrer">GitHub</a>`,
            data.demo
                ? data.demo.startsWith('#')
                    ? `<a href="${data.demo}" class="btn btn--ghost btn--sm">Live Demo</a>`
                    : `<a href="${data.demo}" class="btn btn--ghost btn--sm" target="_blank" rel="noopener noreferrer">Live Demo</a>`
                : '',
        ].join('');

        return `
            <header class="case-modal__header">
                <span class="case-study__type">${data.type}</span>
                <h2 class="case-modal__title" id="case-modal-title">${data.title}</h2>
                <div class="case-modal__actions">${actions}</div>
            </header>
            ${data.learned ? `<p class="project-learned case-modal__learned"><strong>What I learned:</strong> ${data.learned}</p>` : ''}
            <div class="case-modal__sections">
                <section class="case-modal__section">
                    <h3>Problem</h3>
                    <p>${data.problem}</p>
                </section>
                <section class="case-modal__section">
                    <h3>Solution</h3>
                    <p>${data.solution}</p>
                </section>
                <section class="case-modal__section">
                    <h3>Architecture</h3>
                    <p>${data.architecture}</p>
                </section>
                <section class="case-modal__section">
                    <h3>Tech Stack</h3>
                    <div class="tag-list">${tags}</div>
                </section>
                <section class="case-modal__section">
                    <h3>Key Features</h3>
                    <ul class="case-modal__list">${list(data.features)}</ul>
                </section>
                <section class="case-modal__section">
                    <h3>Engineering Challenges</h3>
                    <ul class="case-modal__list">${list(data.challenges)}</ul>
                </section>
                <section class="case-modal__section">
                    <h3>Lessons Learned</h3>
                    <ul class="case-modal__list">${list(data.lessons)}</ul>
                </section>
                <section class="case-modal__section">
                    <h3>Future Improvements</h3>
                    <ul class="case-modal__list">${list(data.future)}</ul>
                </section>
            </div>
        `;
    }

    function openModal(caseId) {
        const data = CASE_STUDIES[caseId];
        if (!data || !modal) return;

        lastFocus = document.activeElement;
        content.innerHTML = renderCaseStudy(data);
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => modal.classList.add('case-modal--open'));
        modal.querySelector('.case-modal__close').focus();
    }

    function closeModal() {
        if (!modal || modal.hidden) return;
        modal.classList.remove('case-modal--open');
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.hidden = true;
            content.innerHTML = '';
            lastFocus?.focus();
        }, 300);
    }

    document.querySelectorAll('.case-study__open').forEach((btn) => {
        btn.addEventListener('click', () => openModal(btn.dataset.case));
    });

    modal?.querySelectorAll('[data-close-modal]').forEach((el) => {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
})();
