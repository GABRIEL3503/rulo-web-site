// Manejo del menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Destacar sección activa
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});
// Script para la funcionalidad de "Seguir leyendo"
document.addEventListener('DOMContentLoaded', function() {
    const btnLeerMas = document.getElementById('leer-mas');
    const textoOculto = document.getElementById('mas-texto');
    
    btnLeerMas.addEventListener('click', function() {
        textoOculto.style.display = textoOculto.style.display === 'none' ? 'block' : 'none';
        btnLeerMas.textContent = textoOculto.style.display === 'none' ? 'Seguir leyendo...' : 'Leer menos';
    });
});


function nextStep(step) {
    const currentStep = document.querySelectorAll('.form-step')[step - 1];
    const nextStep = document.querySelectorAll('.form-step')[step];
    
    let isValid = true;
    
    // Validaciones
    if (currentStep.querySelector('textarea[name="consulta"]')) {
        const consulta = currentStep.querySelector('textarea[name="consulta"]');
        if (!consulta.value.trim()) {
            consulta.nextElementSibling.textContent = "El campo de consulta no debe estar vacío.";
            consulta.nextElementSibling.style.display = 'block';
            isValid = false;
        } else {
            consulta.nextElementSibling.style.display = 'none';
        }
    }
  
    if (currentStep.querySelector('input[name="telefono"]')) {
        const telefono = currentStep.querySelector('input[name="telefono"]');
        const telefonoRegex = /^[0-9]+$/;
        if (!telefonoRegex.test(telefono.value)) {
            telefono.nextElementSibling.textContent = "El campo de teléfono solo debe contener números.";
            telefono.nextElementSibling.style.display = 'block';
            isValid = false;
        } else {
            telefono.nextElementSibling.style.display = 'none';
        }
    }
  
    if (currentStep.querySelector('input[name="email"]')) {
        const email = currentStep.querySelector('input[name="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            email.nextElementSibling.textContent = "Por favor, ingresa un correo electrónico válido.";
            email.nextElementSibling.style.display = 'block';
            isValid = false;
        } else {
            email.nextElementSibling.style.display = 'none';
        }
    }
  
    if (isValid) {
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
    }
  }
  
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const form = event.target;
    const consulta = form.querySelector('textarea[name="consulta"]');
    const telefono = form.querySelector('input[name="telefono"]');
    const email = form.querySelector('input[name="email"]');
  
    // Limpiar mensajes de error
    form.querySelectorAll('.error-message').forEach(span => {
        span.style.display = 'none';
    });
  
    let isValid = true;
  
    // Validaciones
    if (!consulta.value.trim()) {
        consulta.nextElementSibling.textContent = "El campo de consulta no debe estar vacío.";
        consulta.nextElementSibling.style.display = 'block';
        isValid = false;
    }
  
    const telefonoRegex = /^[0-9]+$/;
    if (!telefonoRegex.test(telefono.value)) {
        telefono.nextElementSibling.textContent = "El campo de teléfono solo debe contener números.";
        telefono.nextElementSibling.style.display = 'block';
        isValid = false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.nextElementSibling.textContent = "Por favor, ingresa un correo electrónico válido.";
        email.nextElementSibling.style.display = 'block';
        isValid = false;
    }
  
    if (!isValid) {
        return;
    }
  
    const formData = new FormData(form);
  
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('popup').classList.add('active');
            setTimeout(() => {
                document.getElementById('popup').classList.remove('active');
                document.querySelectorAll('.form-step').forEach((step) => {
                    step.classList.remove('active');
                });
                document.querySelectorAll('.form-step')[0].classList.add('active');
                form.reset();
            }, 8000);
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                }
            });
        }
    }).catch(error => {
        alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
    });
  });
  

  window.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 });

    timelineItems.forEach((item) => {
      observer.observe(item);
    });
  });
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});