/* JavaScript for Injectrux Portfolio
Theme: Space Purple / Cyber Cyan*/

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all core systems
    initializeAnimations();
    initializeSmoothScrolling();
    initializeTypingEffect();
    initializeParticleEffects();
    initializeCursorTrail();
    initializeLogoClick();
    initializeMobileMenu();
    
    // Show system initialization in console
    console.log("%c INJECTRIX SYSTEM ONLINE ", "background: #9333ea; color: #ffffff; font-weight: bold;");
});

// 1. Logo Click - Smooth Scroll to Top
function initializeLogoClick() {
    const logo = document.getElementById('logo-click');
    if (logo) {
        logo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// 2. Mobile Navigation Toggle
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    
    if (mobileToggle && mobileDropdown) {
        mobileToggle.addEventListener('click', () => {
            const isHidden = mobileDropdown.classList.contains('hidden');
            
            if (isHidden) {
                mobileDropdown.classList.remove('hidden', 'opacity-0');
                mobileDropdown.classList.add('opacity-100', 'flex');
            } else {
                mobileDropdown.classList.add('hidden', 'opacity-0');
                mobileDropdown.classList.remove('opacity-100', 'flex');
            }
            
            // Toggle Icon
            const icon = mobileToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }
}

// 3. Cyber Typing Effect
function initializeTypingEffect() {
    const helloElement = document.getElementById('hello-text');
    const welcomeElement = document.getElementById('welcome-text');
    if (!helloElement || !welcomeElement) return;

    // Add a space at the end of helloText
    const helloText = "NEBULA_PROTOCOL_INITIALIZED... ";
    const welcomeText = "Welcome to Injectrix Terminal";
    
    let hIdx = 0, wIdx = 0;

    function typeHello() {
        if (hIdx < helloText.length) {
            helloElement.textContent += helloText.charAt(hIdx++);
            setTimeout(typeHello, 80);
        } else {
            // Increase this delay from 300 to 1000 so the name stays clear
            setTimeout(typeWelcome, 1000); 
        }
    }

    function typeWelcome() {
        if (wIdx < welcomeText.length) {
            welcomeElement.textContent += welcomeText.charAt(wIdx++);
            setTimeout(typeWelcome, 50);
        }
    }
    setTimeout(typeHello, 500);
}

// 4. Space Particle Burst (On Button Hover)
function initializeParticleEffects() {
    const heroBtns = document.querySelectorAll('.hero-btn');
    const colors = ['#22d3ee', '#a855f7', '#6366f1', '#ffffff']; // Cyan, Purple, Indigo, White

    heroBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            const rect = this.getBoundingClientRect();
            for (let i = 0; i < 15; i++) {
                const p = document.createElement('div');
                p.style.cssText = `
                    position: fixed;
                    width: 3px; height: 3px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    left: ${rect.left + rect.width / 2}px;
                    top: ${rect.top + rect.height / 2}px;
                    box-shadow: 0 0 10px #22d3ee;
                `;
                document.body.appendChild(p);

                const angle = Math.random() * Math.PI * 2;
                const velocity = 60 + Math.random() * 120;

                p.animate([
                    { transform: 'translate(0, 0) scale(1.5)', opacity: 1 },
                    { transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`, opacity: 0 }
                ], { 
                    duration: 1000, 
                    easing: 'cubic-bezier(0, .9, .57, 1)' 
                }).onfinish = () => p.remove();
            }
        });
    });
}

// 5. Cyan Cursor Trail
function initializeCursorTrail() {
    const trail = [];
    const trailLength = 12;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `
            position: fixed;
            width: 4px; height: 4px;
            background: #22d3ee;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            opacity: ${1 - (i / trailLength)};
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }

    document.addEventListener('mousemove', (e) => {
        trail.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.left = (e.clientX - 2) + 'px';
                dot.style.top = (e.clientY - 2) + 'px';
                dot.style.transform = `scale(${1 - (index / trailLength)})`;
            }, index * 12);
        });
    });
}

// 6. Intersection Observer for Fade-In Effects
function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Animates once
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// 7. Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 90;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
