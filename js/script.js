// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-toggle') && !event.target.closest('.nav-menu')) {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 90, // Adjust for header height
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        
                        const icon = menuToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });
    
    // PDF Download functionality

    

    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would send the form data to a server
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }
    
    // Gallery item hover effect for mobile
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        if (window.innerWidth < 768) {
            galleryItems.forEach(item => {
                item.addEventListener('click', function() {
                    const caption = this.querySelector('.gallery-caption');
                    if (caption.style.transform === 'translateY(0px)') {
                        caption.style.transform = 'translateY(100%)';
                    } else {
                        caption.style.transform = 'translateY(0)';
                    }
                });
            });
        }
    }
    
    // Animate on scroll
    const animateElements = document.querySelectorAll('.service-card, .project-card, .plan-card, .gallery-item');
    
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        animateElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            // Check if element is in view
            if (elementBottomPosition >= windowTopPosition && elementTopPosition <= windowBottomPosition) {
                element.classList.add('animate');
            }
        });
    }
    
    // Add animate class to CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .service-card, .project-card, .plan-card, .gallery-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .service-card.animate, .project-card.animate, .plan-card.animate, .gallery-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Check elements on load and scroll
    window.addEventListener('load', checkIfInView);
    window.addEventListener('scroll', checkIfInView);

    // Brands slider auto-scroll (simple implementation)
    const brandsSlider = document.querySelector('.brands-slider');
    if (brandsSlider) {
        // Clone the first few items and append them to the end for infinite scroll effect
        const brandItems = brandsSlider.querySelectorAll('.brand-item');
        const cloneCount = Math.min(4, brandItems.length);
        
        for (let i = 0; i < cloneCount; i++) {
            const clone = brandItems[i].cloneNode(true);
            brandsSlider.appendChild(clone);
        }
        
        // Auto-scroll functionality can be added here if needed
        // This is a simple implementation and can be enhanced with proper animation
    }
});