// Main JavaScript for Injectrix Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and interactions
    initializeAnimations();
    initializeSmoothScrolling();
    initializeSkillTagAnimations();
    initializeTypingEffect();
    initializeParticleEffects();
    initializeCursorTrail();
    initializeLogoClick();
    initializeMobileMenu();
    initializeDesktopMenu();
});

// Add logo click to scroll to top
function initializeLogoClick() {
    const logo = document.getElementById('logo-click');
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        logo.style.cursor = 'pointer';
    }
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    let isMenuOpen = false;
    
    if (mobileToggle && mobileDropdown) {
        mobileToggle.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                // Show menu
                mobileDropdown.classList.remove('opacity-0', 'invisible', 'translate-y-2');
                mobileDropdown.classList.add('opacity-100', 'visible', 'translate-y-0');
                mobileToggle.querySelector('i').classList.remove('fa-bars');
                mobileToggle.querySelector('i').classList.add('fa-xmark');
            } else {
                // Hide menu
                mobileDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
                mobileDropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
                mobileToggle.querySelector('i').classList.add('fa-bars');
                mobileToggle.querySelector('i').classList.remove('fa-xmark');
            }
        });
        
        // Close menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                isMenuOpen = false;
                mobileDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
                mobileDropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
                mobileToggle.querySelector('i').classList.add('fa-bars');
                mobileToggle.querySelector('i').classList.remove('fa-xmark');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (isMenuOpen && !mobileToggle.contains(event.target) && !mobileDropdown.contains(event.target)) {
                isMenuOpen = false;
                mobileDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
                mobileDropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
                mobileToggle.querySelector('i').classList.add('fa-bars');
                mobileToggle.querySelector('i').classList.remove('fa-xmark');
            }
        });
    }
}

// Initialize desktop menu functionality
function initializeDesktopMenu() {
    const desktopToggle = document.getElementById('desktop-menu-toggle');
    const desktopDropdown = document.getElementById('desktop-dropdown');
    let isDesktopMenuOpen = false;
    
    if (desktopToggle && desktopDropdown) {
        desktopToggle.addEventListener('click', function() {
            isDesktopMenuOpen = !isDesktopMenuOpen;
            
            if (isDesktopMenuOpen) {
                // Show menu
                desktopDropdown.classList.remove('opacity-0', 'invisible', 'translate-y-2');
                desktopDropdown.classList.add('opacity-100', 'visible', 'translate-y-0');
                desktopToggle.querySelector('i').classList.remove('fa-bars');
                desktopToggle.querySelector('i').classList.add('fa-xmark');
            } else {
                // Hide menu
                desktopDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
                desktopDropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
                desktopToggle.querySelector('i').classList.add('fa-bars');
                desktopToggle.querySelector('i').classList.remove('fa-xmark');
            }
        });
        
        // Close menu when clicking on a link
        const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');
        desktopNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                isDesktopMenuOpen = false;
                desktopDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
                desktopDropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
                desktopToggle.querySelector('i').classList.add('fa-bars');
                desktopToggle.querySelector('i').classList.remove('fa-xmark');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (isDesktopMenuOpen && !desktopToggle.contains(event.target) && !desktopDropdown.contains(event.target)) {
                isDesktopMenuOpen = false;
                desktopDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
                desktopDropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
                desktopToggle.querySelector('i').classList.add('fa-bars');
                desktopToggle.querySelector('i').classList.remove('fa-xmark');
            }
        });
    }
}

// Initialize fade-in animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('animate-on-scroll');
        if (index % 2 === 0) {
            section.classList.add('slide-left');
        } else {
            section.classList.add('slide-right');
        }
        observer.observe(section);
    });

    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.classList.add('animate-on-scroll', 'scale', `delay-${Math.min(index + 1, 5)}`);
        observer.observe(tag);
    });

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.classList.add('animate-on-scroll', 'scale', `delay-${Math.min(index + 1, 4)}`);
        observer.observe(link);
    });

    const cardElements = document.querySelectorAll('.bg-gray-900, .bg-gradient-to-r');
    cardElements.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        if (index % 2 === 0) {
            card.classList.add('slide-left');
        } else {
            card.classList.add('slide-right');
        }
        card.classList.add(`delay-${Math.min(index + 1, 3)}`);
        observer.observe(card);
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = 0; 
                const additionalOffset = 80; 
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - additionalOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced skill tag animations
function initializeSkillTagAnimations() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Typing effect updated for Injectrix
function initializeTypingEffect() {
    const helloElement = document.getElementById('hello-text');
    const welcomeElement = document.getElementById('welcome-text');
    
    if (!helloElement || !welcomeElement) return;
    
    const helloText = "SYSTEM ACCESS GRANTED. ";
    const welcomeText = "Welcome to Injectrix Portfolio";
    
    let helloIndex = 0;
    let welcomeIndex = 0;
    
    function typeHello() {
        if (helloIndex < helloText.length) {
            helloElement.textContent += helloText.charAt(helloIndex);
            helloIndex++;
            setTimeout(typeHello, 100); 
        } else {
            setTimeout(typeWelcome, 300);
        }
    }
    
    function typeWelcome() {
        if (welcomeIndex < welcomeText.length) {
            welcomeElement.textContent += welcomeText.charAt(welcomeIndex);
            welcomeIndex++;
            setTimeout(typeWelcome, 60); 
        }
    }
    
    setTimeout(typeHello, 500);
}

// Add loading screen updated for Ala'a
function showLoadingScreen() {
    const loader = document.createElement('div');
    loader.id = 'loading-screen';
    loader.innerHTML = `
        <div class="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div class="text-center">
                <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-red-500 mx-auto mb-4"></div>
                <p class="text-red-500 pixel-text text-xl">Initializing Injectrix Terminal...</p>
            </div>
        </div>
    `;
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.transition = 'opacity 0.5s';
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1500);
}

window.addEventListener('load', showLoadingScreen);

// Particles & Trail remain functionally identical
function initializeParticleEffects() {
    const heroBtns = document.querySelectorAll('.hero-btn');
    heroBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            createParticles(this);
        });
    });
    
    function createParticles(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#ef4444', '#7f1d1d', '#450a0a', '#ffffff']; // Red themed particles
        
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
            `;
            document.body.appendChild(particle);
            
            const angle = (i / 8) * Math.PI * 2;
            const velocity = 100 + Math.random() * 100;
            const lifetime = 1000 + Math.random() * 1000;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`, opacity: 0 }
            ], {
                duration: lifetime,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => particle.remove();
        }
    }
}

function initializeCursorTrail() {
    const trail = [];
    const trailLength = 10;
    let mouseX = 0;
    let mouseY = 0;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: #ef4444; /* Changed to Red */
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            opacity: ${1 - (i / trailLength)};
            transform: scale(${1 - (i / trailLength) * 0.5});
            transition: all 0.1s ease;
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        trail.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.left = mouseX + 'px';
                dot.style.top = mouseY + 'px';
            }, index * 20);
        });
    });
}
