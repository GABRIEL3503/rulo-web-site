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