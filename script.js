/**
 * JHONY & MAURA — OFFICIAL SCRIPTS
 * Vanilla JavaScript (Interações, Animações e Conversão)
 */

document.addEventListener("DOMContentLoaded", () => {
    initHeaderScroll();
    initMobileNav();
    initScrollReveal();
    initBookingForm();
});

/**
 * 1. HEADER SCROLL STATE
 * Adiciona classe .scrolled ao descer a página para ativar o blur e fundo escuro.
 */
function initHeaderScroll() {
    const header = document.getElementById("site-header");
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
}

/**
 * 2. MOBILE NAVIGATION DRAWER
 * Controla abertura, fechamento e acessibilidade do menu mobile.
 */
function initMobileNav() {
    const toggleBtn = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    if (!toggleBtn || !mobileNav) return;

    function openMenu() {
        toggleBtn.classList.add("active");
        mobileNav.classList.add("open");
        toggleBtn.setAttribute("aria-expanded", "true");
        mobileNav.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        toggleBtn.classList.remove("active");
        mobileNav.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
        mobileNav.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    toggleBtn.addEventListener("click", () => {
        const isOpen = mobileNav.classList.contains("open");
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Fechar ao clicar em qualquer link do menu
    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // Fechar com a tecla Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileNav.classList.contains("open")) {
            closeMenu();
            toggleBtn.focus();
        }
    });
}

/**
 * 3. INTERSECTION OBSERVER (REVEAL ANIMATIONS)
 * Revela suavemente elementos marcados com .fade-up conforme entram na tela.
 */
function initScrollReveal() {
    const fadeElements = document.querySelectorAll(".fade-up");
    if (!fadeElements.length) return;

    if (!("IntersectionObserver" in window)) {
        // Fallback para navegadores sem suporte
        fadeElements.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            rootMargin: "0px 0px -50px 0px",
            threshold: 0.1,
        }
    );

    fadeElements.forEach((el) => observer.observe(el));
}

/**
 * 4. BOOKING FORM & WHATSAPP INTEGRATION
 * Valida os dados da consulta e gera link direto para WhatsApp com mensagem personalizada.
 */
function initBookingForm() {
    const form = document.getElementById("booking-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("client-name")?.value.trim() || "";
        const whatsapp = document.getElementById("client-whatsapp")?.value.trim() || "";
        const date = document.getElementById("event-date")?.value || "";
        const city = document.getElementById("event-city")?.value.trim() || "";
        const type = document.getElementById("event-type")?.value || "";
        const notes = document.getElementById("event-notes")?.value.trim() || "";

        // Formatação legível da data
        let formattedDate = date;
        if (date) {
            const parts = date.split("-");
            if (parts.length === 3) {
                formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
            }
        }

        // Construção da mensagem estruturada para o WhatsApp
        let message = `Olá! Gostaria de consultar a disponibilidade da banda Jhony & Maura para meu evento:\n\n`;
        message += `👤 *Nome:* ${name}\n`;
        message += `📱 *WhatsApp:* ${whatsapp}\n`;
        message += `📅 *Data Prevista:* ${formattedDate}\n`;
        message += `📍 *Cidade/Local:* ${city}\n`;
        message += `🎉 *Tipo de Evento:* ${type}\n`;
        if (notes) {
            message += `📝 *Observações:* ${notes}\n`;
        }
        message += `\nAguardo retorno sobre valores e disponibilidade. Obrigado!`;

        // URL com a mensagem codificada
        // O link utiliza a API wa.me pronta para receber o número de produção
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

        // Abrir WhatsApp em nova aba
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
}
