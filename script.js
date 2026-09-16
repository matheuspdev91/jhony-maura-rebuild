document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================
   ANIME.JS — EVENT PAGES MOTION SYSTEM
   ========================================================== */

    const animeAnimate =
        window.anime &&
            typeof window.anime.animate === 'function'
            ? window.anime.animate
            : null;


    if (
        animeAnimate &&
        !window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches
    ) {

        /* ======================================================
           CONFIGURAÇÃO GLOBAL
           ====================================================== */

        const MOTION = {
            fast: 450,
            medium: 750,
            slow: 1100,

            ease: 'out(4)',
            cinematic: 'out(3)',

            stagger: 90
        };


        /* ======================================================
           HERO
           ====================================================== */

        const eventHero =
            document.querySelector(
                '.event-hero-motion'
            );


        if (eventHero) {

            const eyebrow =
                eventHero.querySelector(
                    '.hero-eyebrow, .section-eyebrow'
                );

            const heading =
                eventHero.querySelector(
                    'h1, .hero-title'
                );

            const copy =
                eventHero.querySelector(
                    '.hero-subtitle, .hero-description, p'
                );

            const media =
                eventHero.querySelector(
                    'img, video'
                );


            /*
             * IMAGEM / VÍDEO
             */

            if (media) {

                animeAnimate(media, {

                    opacity: [0, 1],

                    scale: [1.035, 1],

                    translateY: [18, 0],

                    duration: 1500,

                    ease: MOTION.cinematic

                });

            }


            /*
             * EYEBROW
             */

            if (eyebrow) {

                animeAnimate(eyebrow, {

                    opacity: [0, 1],

                    translateX: [-24, 0],

                    duration: MOTION.medium,

                    delay: 250,

                    ease: MOTION.ease

                });

            }


            /*
             * TÍTULO
             */

            if (heading) {

                animeAnimate(heading, {

                    opacity: [0, 1],

                    translateY: [55, 0],

                    duration: MOTION.slow,

                    delay: 380,

                    ease: MOTION.cinematic

                });

            }


            /*
             * DESCRIÇÃO
             */

            if (copy) {

                animeAnimate(copy, {

                    opacity: [0, 1],

                    translateY: [25, 0],

                    duration: MOTION.medium,

                    delay: 650,

                    ease: MOTION.ease

                });

            }

        }


        /* ======================================================
           SCROLL REVEAL
           ====================================================== */

        const animatedSections =
            document.querySelectorAll(
                '.scene:not(.scene--hero)'
            );


        const motionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const section =
                            entry.target;


                        /*
                         * HEADER
                         */

                        const eyebrow =
                            section.querySelector(
                                '.section-eyebrow'
                            );

                        const heading =
                            section.querySelector(
                                '.section-title, h2'
                            );

                        const copy =
                            section.querySelector(
                                '.section-subtitle'
                            );


                        /*
                         * EYEBROW
                         */

                        if (eyebrow) {

                            animeAnimate(
                                eyebrow,
                                {

                                    opacity: [0, 1],

                                    translateY: [
                                        18,
                                        0
                                    ],

                                    duration:
                                        MOTION.medium,

                                    ease:
                                        MOTION.ease

                                }
                            );

                        }


                        /*
                         * TÍTULO
                         */

                        if (heading) {

                            animeAnimate(
                                heading,
                                {

                                    opacity: [0, 1],

                                    translateY: [
                                        45,
                                        0
                                    ],

                                    duration:
                                        MOTION.slow,

                                    delay: 100,

                                    ease:
                                        MOTION.cinematic

                                }
                            );

                        }


                        /*
                         * TEXTO
                         */

                        if (copy) {

                            animeAnimate(
                                copy,
                                {

                                    opacity: [0, 1],

                                    translateY: [
                                        25,
                                        0
                                    ],

                                    duration:
                                        MOTION.medium,

                                    delay: 250,

                                    ease:
                                        MOTION.ease

                                }
                            );

                        }


                        /*
                         * ELEMENTOS DA SEÇÃO
                         */

                        const items =
                            section.querySelectorAll(
                                '.structure-card, ' +
                                '.pillar-item, ' +
                                '.premium-card, ' +
                                '.phase-card, ' +
                                '.gallery-item, ' +
                                '.event-media__frame'
                            );


                        if (items.length) {

                            animeAnimate(
                                items,
                                {

                                    opacity: [0, 1],

                                    translateY: [
                                        35,
                                        0
                                    ],

                                    delay: anime.stagger(
                                        MOTION.stagger,
                                        {
                                            start: 300
                                        }
                                    ),

                                    duration:
                                        MOTION.medium,

                                    ease:
                                        MOTION.ease

                                }
                            );

                        }


                        /*
                         * IMAGENS
                         */

                        const images =
                            section.querySelectorAll(
                                '.motion-image, ' +
                                '.motion-media img, ' +
                                '.event-media__frame img'
                            );


                        if (images.length) {

                            animeAnimate(
                                images,
                                {

                                    opacity: [0, 1],

                                    translateY: [
                                        35,
                                        0
                                    ],

                                    scale: [
                                        1.025,
                                        1
                                    ],

                                    duration:
                                        MOTION.slow,

                                    delay: 180,

                                    ease:
                                        MOTION.cinematic

                                }
                            );

                        }


                        /*
                         * NÃO REPETIR
                         */

                        motionObserver.unobserve(
                            section
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        '0px 0px -80px 0px'
                }
            );


        animatedSections.forEach(
            section =>
                motionObserver.observe(section)
        );


        /* ======================================================
           HOVER — IMAGENS
           ====================================================== */

        const motionImages =
            document.querySelectorAll(
                '.motion-media, .event-media__frame'
            );


        motionImages.forEach(
            container => {

                const image =
                    container.querySelector(
                        'img'
                    );

                if (!image) return;


                container.addEventListener(
                    'mouseenter',
                    () => {

                        animeAnimate(
                            image,
                            {

                                scale: 1.025,

                                duration: 700,

                                ease: 'out(3)'

                            }
                        );

                    }
                );


                container.addEventListener(
                    'mouseleave',
                    () => {

                        animeAnimate(
                            image,
                            {

                                scale: 1,

                                duration: 800,

                                ease: 'out(3)'

                            }
                        );

                    }
                );

            }
        );


        /* ======================================================
           BOTÕES / CTA
           ====================================================== */

        const ctas =
            document.querySelectorAll(
                '.btn-primary, .btn-pill-red'
            );


        ctas.forEach(
            button => {

                button.addEventListener(
                    'mouseenter',
                    () => {

                        animeAnimate(
                            button,
                            {

                                translateX: 4,

                                duration: 250,

                                ease: 'out(3)'

                            }
                        );

                    }
                );


                button.addEventListener(
                    'mouseleave',
                    () => {

                        animeAnimate(
                            button,
                            {

                                translateX: 0,

                                duration: 350,

                                ease: 'out(3)'

                            }
                        );

                    }
                );

            }
        );

    }

    /* ==========================================================
       MOBILE MENU TOGGLE
       ========================================================== */

    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuToggle && mobileNav) {

        menuToggle.addEventListener('click', () => {

            const isExpanded =
                menuToggle.getAttribute('aria-expanded') === 'true';

            menuToggle.setAttribute(
                'aria-expanded',
                !isExpanded
            );

            mobileNav.classList.toggle('is-open');

            mobileNav.setAttribute(
                'aria-hidden',
                isExpanded
            );

        });

    }


    /* ==========================================================
       CINEMATIC REVEAL OBSERVER
       ========================================================== */

    const revealElements =
        document.querySelectorAll('.reveal-up, .clip-reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            'is-revealed'
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            revealOptions
        );


    revealElements.forEach(
        el => revealObserver.observe(el)
    );


    /* ==========================================================
       SUBTLE PARALLAX
       ========================================================== */

    const parallaxElements =
        document.querySelectorAll('.js-parallax');

    if (
        parallaxElements.length > 0 &&
        window.matchMedia(
            '(prefers-reduced-motion: no-preference)'
        ).matches
    ) {

        let ticking = false;

        window.addEventListener(
            'scroll',
            () => {

                if (!ticking) {

                    window.requestAnimationFrame(() => {

                        const scrolled =
                            window.pageYOffset;

                        parallaxElements.forEach(el => {

                            const speed =
                                el.getAttribute('data-speed') || 0.1;

                            const rect =
                                el.getBoundingClientRect();

                            const elementTop =
                                rect.top + scrolled;

                            const offset =
                                (scrolled - elementTop) * speed;

                            el.style.transform =
                                `translateY(${offset}px)`;

                        });

                        ticking = false;

                    });

                    ticking = true;

                }

            },
            { passive: true }
        );

    }


    /* ==========================================================
       EXPERIENCE — CARROSSEL CINEMATOGRÁFICO
       Mantém o layout 3D existente e adiciona apenas:
       - setas
       - autoplay
       - navegação por indicadores/teclado
       - pausa no hover
       ========================================================== */

    const carousel = document.querySelector('.js-simple-carousel');

    if (carousel) {
        const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
        const indicators = Array.from(
            carousel.querySelectorAll('.js-carousel-indicators .indicator')
        );

        if (slides.length >= 2) {
            let activeIndex = 0;
            let autoplayTimer = null;
            let isAnimating = false;
            let isPaused = false;

            const AUTOPLAY_DELAY = 5000;
            const ANIMATION_DURATION = 900;

            /* As setas fazem parte do componente e não exigem alteração no HTML. */
            const createArrow = (type, label, symbol) => {
                let button = carousel.querySelector(`.carousel-arrow--${type}`);

                if (!button) {
                    button = document.createElement('button');
                    button.type = 'button';
                    button.className = `carousel-arrow carousel-arrow--${type}`;
                    button.setAttribute('aria-label', label);
                    button.innerHTML = `<span aria-hidden="true">${symbol}</span>`;
                    carousel.appendChild(button);
                }

                return button;
            };

            const prevButton = createArrow('prev', 'Imagem anterior', '‹');
            const nextButton = createArrow('next', 'Próxima imagem', '›');

            const normalize = index =>
                (index + slides.length) % slides.length;

            const setStateClasses = index => {
                slides.forEach((slide, i) => {
                    slide.classList.remove('is-left', 'is-center', 'is-right');

                    const relative = (i - index + slides.length) % slides.length;

                    if (relative === 0) {
                        slide.classList.add('is-center');
                        slide.style.opacity = '';
                        slide.style.visibility = '';
                    } else if (relative === 1) {
                        slide.classList.add('is-right');
                        slide.style.opacity = '';
                        slide.style.visibility = '';
                    } else if (relative === slides.length - 1) {
                        slide.classList.add('is-left');
                        slide.style.opacity = '';
                        slide.style.visibility = '';
                    } else {
                        slide.style.opacity = '0';
                        slide.style.visibility = 'hidden';
                    }
                });

                indicators.forEach((indicator, i) => {
                    const active = i === index;
                    indicator.classList.toggle('active', active);
                    indicator.setAttribute('aria-current', active ? 'true' : 'false');
                });
            };

            const applyInitialState = () => {
                slides.forEach(slide => {
                    slide.style.transition = '';
                    slide.style.opacity = '';
                    slide.style.visibility = '';
                    slide.style.transform = '';
                    slide.style.zIndex = '';
                });

                setStateClasses(activeIndex);
            };

            const goToSlide = (targetIndex, direction = 1) => {
                targetIndex = normalize(targetIndex);

                if (targetIndex === activeIndex || isAnimating) return;

                isAnimating = true;

                const oldIndex = activeIndex;
                const oldSlide = slides[oldIndex];
                const newSlide = slides[targetIndex];

                const sideIn = direction > 0
                    ? 'translate(-50%, -50%) translateX(58%) scale(.82) rotate(7deg)'
                    : 'translate(-50%, -50%) translateX(-58%) scale(.82) rotate(-7deg)';

                const sideOut = direction > 0
                    ? 'translate(-50%, -50%) translateX(-58%) scale(.82) rotate(-7deg)'
                    : 'translate(-50%, -50%) translateX(58%) scale(.82) rotate(7deg)';

                /* Novo slide entra pela lateral; o atual sai para o lado oposto. */
                newSlide.classList.remove('is-left', 'is-center', 'is-right');
                oldSlide.classList.remove('is-left', 'is-center', 'is-right');

                newSlide.style.visibility = 'visible';
                newSlide.style.opacity = '.78';
                newSlide.style.zIndex = '5';
                newSlide.style.transition = 'none';
                newSlide.style.transform = sideIn;

                oldSlide.style.visibility = 'visible';
                oldSlide.style.opacity = '1';
                oldSlide.style.zIndex = '6';
                oldSlide.style.transition = 'none';
                oldSlide.style.transform = 'translate(-50%, -50%) translateX(0) scale(1) rotate(0deg)';

                void newSlide.offsetWidth;

                requestAnimationFrame(() => {
                    const easing = 'cubic-bezier(.22,1,.36,1)';
                    newSlide.style.transition = `transform ${ANIMATION_DURATION}ms ${easing}, opacity ${ANIMATION_DURATION}ms ease`;
                    oldSlide.style.transition = `transform ${ANIMATION_DURATION}ms ${easing}, opacity ${ANIMATION_DURATION}ms ease`;

                    newSlide.style.transform = 'translate(-50%, -50%) translateX(0) scale(1) rotate(0deg)';
                    newSlide.style.opacity = '1';

                    oldSlide.style.transform = sideOut;
                    oldSlide.style.opacity = '.78';
                });

                activeIndex = targetIndex;
                indicators.forEach((indicator, i) => {
                    indicator.classList.toggle('active', i === activeIndex);
                    indicator.setAttribute('aria-current', i === activeIndex ? 'true' : 'false');
                });

                window.setTimeout(() => {
                    slides.forEach(slide => {
                        slide.style.transition = '';
                        slide.style.opacity = '';
                        slide.style.visibility = '';
                        slide.style.transform = '';
                        slide.style.zIndex = '';
                    });

                    setStateClasses(activeIndex);
                    isAnimating = false;
                }, ANIMATION_DURATION + 40);
            };

            const nextSlide = () =>
                goToSlide(activeIndex + 1, 1);

            const previousSlide = () =>
                goToSlide(activeIndex - 1, -1);

            const stopAutoplay = () => {
                if (autoplayTimer !== null) {
                    window.clearInterval(autoplayTimer);
                    autoplayTimer = null;
                }
            };

            const startAutoplay = () => {
                stopAutoplay();

                if (
                    isPaused ||
                    window.matchMedia('(prefers-reduced-motion: reduce)').matches
                ) return;

                autoplayTimer = window.setInterval(nextSlide, AUTOPLAY_DELAY);
            };

            const resetAutoplay = () => {
                startAutoplay();
            };

            prevButton.addEventListener('click', () => {
                previousSlide();
                resetAutoplay();
            });

            nextButton.addEventListener('click', () => {
                nextSlide();
                resetAutoplay();
            });

            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    if (index === activeIndex || isAnimating) return;

                    let difference = index - activeIndex;
                    if (difference > slides.length / 2) difference -= slides.length;
                    if (difference < -slides.length / 2) difference += slides.length;

                    goToSlide(index, difference >= 0 ? 1 : -1);
                    resetAutoplay();
                });
            });

            carousel.addEventListener('mouseenter', () => {
                isPaused = true;
                stopAutoplay();
            });

            carousel.addEventListener('mouseleave', () => {
                isPaused = false;
                startAutoplay();
            });

            carousel.setAttribute('tabindex', '0');
            carousel.addEventListener('keydown', event => {
                if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    nextSlide();
                    resetAutoplay();
                } else if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    previousSlide();
                    resetAutoplay();
                }
            });

            applyInitialState();
            startAutoplay();
        }
    }

});

/* ==========================================================
   FAQ — ACCORDION
   ========================================================== */
const faqAccordions = document.querySelectorAll('.js-accordion');

faqAccordions.forEach(accordion => {
    const faqItems = accordion.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (!question) return;

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Fecha os outros itens do mesmo FAQ.
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('is-open');

                const otherQuestion =
                    otherItem.querySelector('.faq-question');

                if (otherQuestion) {
                    otherQuestion.setAttribute(
                        'aria-expanded',
                        'false'
                    );
                }
            });

            // Abre o item clicado quando ele estava fechado.
            if (!isOpen) {
                item.classList.add('is-open');

                question.setAttribute(
                    'aria-expanded',
                    'true'
                );
            }
        });
    });
});