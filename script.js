document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.createElement("p");
    successMessage.textContent = "✅ ¡Mensaje enviado con éxito!";
    successMessage.style.color = "green";
    successMessage.style.display = "none";
    form.appendChild(successMessage);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch("contact.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            successMessage.style.display = "block";
            form.reset();
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });

    // Efecto de desplazamiento suave en la navegación
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Función para descargar el CV
    const downloadBtn = document.querySelector(".btn-cv");
    
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Evita la navegación
            const link = document.createElement("a");
            link.href = "CV/cv-Guillermo Lopez.pdf"; // Cambia la ruta si está en otra carpeta
            link.download = "cv-Guillermo Lopez.pdf"; // Nombre del archivo descargado
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    
});

