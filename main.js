/*==================== LOADING ANIMATION ====================*/
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
            setTimeout(() => {
                loading.remove();
            }, 500);
        }, 1000);
    }
});

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== PORTFOLIO GRID ====================*/
// Portfolio grid is now handled by CSS Grid
// No JavaScript needed for static grid layout

/*==================== PROJECT FILTERS ====================*/
const filterButtons = document.querySelectorAll('.portfolio__filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio__content');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
                item.classList.add('fade-in-up');
            } else {
                item.style.display = 'none';
            }
        });
    });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK THEME TOGGLE ====================*/
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update toggle button icon
        themeToggle.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
    });
    
    // Set initial icon
    themeToggle.innerHTML = currentTheme === 'light' ? '🌙' : '☀️';
}

/*==================== TYPING ANIMATION ====================*/
// Check if Typed.js is loaded
if (typeof Typed !== 'undefined') {
    const typed = new Typed('.home__title-color', {
        strings: ['Andres Bateca', 'Desarrollador Django', 'Backend Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
// Check if ScrollReveal is loaded
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    /*SCROLL HOME*/
    sr.reveal('.home__title',{}) 
    sr.reveal('.home__subtitle',{delay: 400}) 
    sr.reveal('.home__description',{delay: 600}) 
    sr.reveal('.home__buttons',{delay: 800}) 
    sr.reveal('.home__img',{delay: 1000})
    sr.reveal('.home__social-icon',{ interval: 200}) 

    /*SCROLL ABOUT*/
    // sr.reveal('.about__img',{}) // Comentado para evitar movimiento
    sr.reveal('.about__data',{delay: 400})

    /*SCROLL SKILLS*/
    sr.reveal('.skills__content',{interval: 200}) 

    /*SCROLL PORTFOLIO*/
    sr.reveal('.portfolio__img',{interval: 200}) 

    /*SCROLL CONTACT*/
    sr.reveal('.contact__data',{})
    sr.reveal('.contact__form',{delay: 400})
}

/*==================== CONTACT FORM ====================*/
const contactForm = document.querySelector('.contact__form'),
      contactName = document.querySelector('#name'),
      contactEmail = document.querySelector('#email'),
      contactProject = document.querySelector('#project'),
      contactMessage = document.querySelector('#message')

const sendEmail = (e) => {
    e.preventDefault()
    
    // Check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === ''){
        // Add and remove color
        contactForm.classList.remove('color-green')
        contactForm.classList.add('color-red')
        
        // Show message
        showNotification('Por favor, completa todos los campos obligatorios ❌', 'error');
    } else {
        // Create mailto link with form data
        const subject = `Nuevo mensaje de ${contactName.value} desde tu portafolio`;
        const body = `
Nombre: ${contactName.value}
Email: ${contactEmail.value}
Proyecto: ${contactProject.value || 'No especificado'}

Mensaje:
${contactMessage.value}
        `;
        
        // Open default email client
        const mailtoLink = `mailto:andres-bateca@hotmail.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
        
        contactForm.classList.add('color-green')
        contactForm.classList.remove('color-red')
        
        // Show success message
        showNotification('Redirigiendo a tu cliente de email... ✅', 'success');
        
        // Clear form fields
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
        contactMessage.value = ''
        
        // Remove success styling after 3 seconds
        setTimeout(() => {
            contactForm.classList.remove('color-green')
        }, 3000)
    }
}

contactForm.addEventListener('submit', sendEmail)

/*==================== NOTIFICATION SYSTEM ====================*/
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <span class="notification__message">${message}</span>
            <button class="notification__close">×</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00C851' : type === 'error' ? '#ff4444' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

/*==================== SMOOTH SCROLLING ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*==================== ANIMATION ON SCROLL ====================*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.section__title, .section__subtitle, .about__data, .skills__content, .portfolio__content, .contact__information, .contact__form');
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

/*==================== SKILLS ANIMATION ====================*/
function animateSkills() {
    const skillBars = document.querySelectorAll('.skills__percentage');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Animate skills when section is visible
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

/*==================== PARALLAX EFFECT ====================*/
// Comentado para evitar movimiento de la imagen
/*
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.home__blob, .about__img-pic');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
*/

/*==================== FORM VALIDATION ====================*/
const formInputs = document.querySelectorAll('.contact__input');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    });
    
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateField(input);
        }
    });
});

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('id');
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Validation rules
    if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.classList.add('error');
            showNotification('Por favor, ingresa un email válido', 'error');
        }
    }
    
    if (fieldName === 'name' && value.length < 2) {
        field.classList.add('error');
        showNotification('El nombre debe tener al menos 2 caracteres', 'error');
    }
    
    if (fieldName === 'message' && value.length < 10) {
        field.classList.add('error');
        showNotification('El mensaje debe tener al menos 10 caracteres', 'error');
    }
}

/*==================== COPY TO CLIPBOARD ====================*/
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copiado al portapapeles ✅', 'success');
    }).catch(() => {
        showNotification('Error al copiar al portapapeles', 'error');
    });
}

// Add copy functionality to contact information
document.addEventListener('DOMContentLoaded', () => {
    const contactInfo = document.querySelectorAll('.contact__subtitle');
    
    contactInfo.forEach(info => {
        if (info.textContent.includes('@') || info.textContent.includes('+')) {
            info.style.cursor = 'pointer';
            info.title = 'Click para copiar';
            
            info.addEventListener('click', () => {
                copyToClipboard(info.textContent);
            });
        }
    });
});

/*==================== PERFORMANCE OPTIMIZATION ====================*/
// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

/*==================== KEYBOARD NAVIGATION ====================*/
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
        }
    }
    
    // Ctrl/Cmd + K to focus search (if you add a search feature)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Add search functionality here
    }
});

/*==================== SERVICE WORKER FOR PWA ====================*/
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Acordeón Educación
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    // Cierra todos
    document.querySelectorAll('.accordion-header').forEach(h => h.setAttribute('aria-expanded', 'false'));
    document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
    // Si no estaba abierto, abre este
    if (!expanded) {
      this.setAttribute('aria-expanded', 'true');
      this.nextElementSibling.classList.add('open');
    }
  });
});