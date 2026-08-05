/**
 * Case study modal content & interactions
 * Factual content aligned with Jake_Pajerski_Main_Resume.pdf
 */
(function () {
    'use strict';

    const CASE_STUDIES = {
        nemacolin: {
            title: 'Nemacolin IT Resource Application',
            type: 'Internal Application',
            problem: 'Nemacolin needed an internal application to centralize IT resources, links, and documentation for 20+ administrators with clear access controls.',
            solution: 'Designed and built an internal Ruby on Rails 8 application with bcrypt authentication, CanCanCan role-based access control, normalized PostgreSQL modeling, audit trails, and full-text search using pg_search.',
            architecture: 'Ruby on Rails 8 application backed by PostgreSQL, with role-based authorization (Admin, Manager, Editor, Viewer), soft deletion, audit trails, RSpec test coverage, and GitHub Actions running tests, Brakeman, and bundler-audit before deployment to a restricted internal Linux server.',
            stack: ['Ruby on Rails 8', 'PostgreSQL', 'CanCanCan', 'RSpec', 'FactoryBot', 'SimpleCov', 'GitHub Actions', 'Brakeman', 'bundler-audit', 'Linux', 'systemd'],
            features: ['IT resource centralization', 'bcrypt authentication', 'RBAC with CanCanCan', 'Per-record visibility controls', 'Normalized PostgreSQL schema', 'Soft deletion', 'Audit trails', 'Full-text search (pg_search)', 'CI security checks', 'Internal Linux deployment'],
            challenges: [
                'Modeling a normalized PostgreSQL schema with foreign keys, indexes, soft deletion, and audit trails',
                'Implementing Admin, Manager, Editor, and Viewer roles with per-record visibility controls',
                'Maintaining 100% line coverage across 800+ RSpec examples while adding security checks in CI',
            ],
            lessons: [
                'Authentication and authorization should be designed with the data model, not added later',
                'Automated tests, Brakeman, and bundler-audit in GitHub Actions catch issues before internal deployment',
                'Internal applications still need clear role boundaries for administrators',
            ],
            learned: 'Pairing RBAC, audit trails, RSpec coverage, and GitHub Actions security checks before Linux deployment keeps internal apps safer to ship.',
            future: [
                'Continue expanding IT resource workflows for administrators',
                'Refine search and audit reporting based on operator feedback',
            ],
            github: null,
            privateRepo: true,
            demo: null,
        },
        onlyodds: {
            title: 'OnlyOdds',
            type: 'Mobile Application',
            problem: 'Users needed a mobile application to create prediction markets, place predictions, and follow live market updates.',
            solution: 'Built a React Native and Supabase application with authentication, real-time database subscriptions, client-side caching, and conflict-resolution logic.',
            architecture: 'React Native client with Supabase authentication and real-time database subscriptions, including client-side caching and conflict-resolution logic for live market updates.',
            stack: ['React Native', 'Supabase', 'JavaScript'],
            features: ['Prediction market creation', 'Placing predictions', 'Live market updates', 'Supabase authentication', 'Real-time database subscriptions', 'Client-side caching', 'Conflict-resolution logic'],
            challenges: [
                'Keeping market state consistent under concurrent live updates',
                'Implementing conflict-resolution logic with client-side caching',
                'Delivering 10+ features on a React Native and Supabase stack',
            ],
            lessons: [
                'Real-time subscriptions require explicit conflict-resolution strategies',
                'Client-side caching improves responsiveness but must stay consistent with live data',
                'Feature scope grows quickly once authentication and live updates are in place',
            ],
            learned: 'Real-time subscriptions and client-side conflict-resolution logic are central when markets update concurrently.',
            future: [
                'Continue expanding prediction-market features',
                'Refine live update and caching behavior based on usage',
            ],
            github: null,
            privateRepo: true,
            demo: 'https://apps.apple.com/us/app/onlyodds/id6754545089',
            demoLabel: 'App Store',
        },
            title: 'Pins & Pieces',
            type: 'Algorithm + Image Processing',
            problem: 'Users needed an outfit recommendation engine that could turn wardrobe photos into structured garment data and generate combinations under clothing constraints.',
            solution: 'Built a Python outfit recommendation engine using image processing, automated garment tagging, and a custom backtracking algorithm to generate combinations under user-defined clothing constraints.',
            architecture: 'Python image-processing pipeline that converts wardrobe photos into structured garment attributes, then applies a custom backtracking algorithm for constrained outfit generation.',
            stack: ['Python', 'Image Processing', 'Backtracking Algorithms'],
            features: ['Image processing pipeline', 'Automated garment tagging', 'Structured garment attributes', 'Custom backtracking algorithm', 'Constraint-based outfit generation'],
            challenges: [
                'Converting wardrobe photos into structured garment attributes',
                'Encoding user-defined clothing constraints for recommendation generation',
                'Generating valid outfit combinations with a custom backtracking algorithm',
            ],
            lessons: [
                'Structured garment attributes make constraint-based recommendation practical',
                'Image-processing quality directly affects tagging usefulness',
                'Backtracking is a clear fit for combinatorial outfit constraints',
            ],
            learned: 'Converting wardrobe photos into structured garment attributes makes constraint-based outfit generation practical.',
            future: [
                'Improve tagging accuracy across varied photo inputs',
                'Expand constraint types for recommendation generation',
            ],
            github: null,
            privateRepo: true,
            demo: 'https://youtu.be/gAw29Cg-sfU',
        },
        portfolio: {
            title: 'Personal Portfolio',
            type: 'Web Development',
            problem: 'I needed a personal site that presents my CMU background, experience, and projects clearly for Summer 2027 software engineering recruiting.',
            solution: 'Built this portfolio with semantic HTML, a CSS design system, and vanilla JavaScript for navigation, case studies, and accessibility.',
            architecture: 'Static site with modular CSS, Intersection Observer animations, and a case study modal system without framework dependencies.',
            stack: ['HTML', 'CSS', 'JavaScript'],
            features: ['Scroll-triggered animations', 'Case study modals', 'Animated metrics', 'Responsive layout', 'Accessibility support', 'SEO metadata'],
            challenges: [
                'Keeping content aligned with the resume while preserving the existing design',
                'Balancing animation with reduced-motion accessibility',
                'Structuring content for recruiters and accessibility requirements',
            ],
            lessons: [
                'Resume-aligned content is more important than decorative claims',
                'Semantic HTML improves accessibility and SEO together',
                'A clear information hierarchy helps recruiters scan quickly',
            ],
            learned: 'Content hierarchy and intentional UX matter more than visual effects — recruiters engage with clarity before polish.',
            future: [
                'Keep project and experience content synced with resume updates',
                'Continue accessibility and performance improvements',
            ],
            github: 'https://github.com/JakePJakeP/portfolioWebsite',
            demo: '#home',
        },
        duquesne: {
            title: 'Duquesne Incline Website',
            type: 'Informational Web',
            problem: 'Pittsburgh\'s historic Duquesne Incline needed a responsive informational site for visitors.',
            solution: 'Built a responsive informational website with semantic HTML, modern CSS layout, and interactive JavaScript elements.',
            architecture: 'Multi-page static site with responsive CSS Grid and Flexbox layouts and progressive enhancement.',
            stack: ['HTML', 'CSS', 'JavaScript'],
            features: ['Responsive layout', 'Historical content', 'Visitor information', 'Image gallery'],
            challenges: [
                'Organizing dense historical content into scannable mobile-friendly sections',
                'Keeping load times reasonable with image-heavy content',
                'Creating clear navigation across content pages',
            ],
            lessons: [
                'Information architecture matters as much as visual design for content-heavy sites',
                'Responsive images and lazy loading help photography-rich pages',
                'Semantic HTML supports accessibility and SEO',
            ],
            learned: 'Information architecture is as critical as visual design — scannable structure keeps dense content accessible on mobile.',
            future: [
                'Interactive map integration',
                'Real-time operating status if an API becomes available',
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
            data.github
                ? `<a href="${data.github}" class="btn btn--ghost btn--sm" target="_blank" rel="noopener noreferrer">GitHub</a>`
                : data.privateRepo
                    ? `<span class="btn btn--ghost btn--sm" aria-disabled="true">Private Repository</span>`
                    : '',
            data.demo
                ? data.demo.startsWith('#')
                    ? `<a href="${data.demo}" class="btn btn--ghost btn--sm">${data.demoLabel || 'Live Demo'}</a>`
                    : `<a href="${data.demo}" class="btn btn--ghost btn--sm" target="_blank" rel="noopener noreferrer">${data.demoLabel || 'Live Demo'}</a>`
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
