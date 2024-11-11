// Mensaje de confirmación al enviar formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    alert('Gracias por contactarnos. Te responderemos pronto.');
    this.reset(); // Limpia el formulario
});

// Cambiar entre modo claro y oscuro
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
