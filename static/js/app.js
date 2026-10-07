function mostrarMensaje() {

    const mensajes = [
        "✨ Tú puedes lograr grandes cosas.",
        "🚀 Sigue avanzando, vas por buen camino.",
        "💖 Cada pequeño esfuerzo cuenta.",
        "🌟 Nunca dejes de creer en ti.",
        "📚 Cada día puedes aprender algo nuevo.",
        "🎯 Sigue trabajando por tus metas."
    ];

    const numero = Math.floor(Math.random() * mensajes.length);

    document.getElementById("mensajeInicio").textContent =
        mensajes[numero];
}


function enviarFormulario(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;

    const respuesta = document.getElementById("respuesta");

    respuesta.textContent =
        "🎉 ¡Gracias " + nombre +
        "! Tu mensaje fue enviado correctamente. 💖";

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("mensajeContacto").value = "";
}

