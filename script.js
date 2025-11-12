// script.js

function bienvenidaPagina1() {
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const apellido = prompt("Ahora ingresa tu apellido:");
    const saludo = document.getElementById("saludo");

    if (nombre && apellido) {
        saludo.textContent = `¡Bienvenido/a ${nombre} ${apellido}!`;
        localStorage.setItem("usuario", `${nombre} ${apellido}`);
    } else {
        saludo.textContent = "¡Bienvenido/a a la página!";
    }
}

function bienvenidaPagina2() {
    const saludoPersona = document.getElementById("saludoPersona");
    const edadMensaje = document.getElementById("edadMensaje");
    const nombreCompleto = localStorage.getItem("usuario");

    if (nombreCompleto) {
        saludoPersona.textContent = `Hola ${nombreCompleto}, ¡bienvenido a la galería!`;
    }

    const edad = parseInt(prompt("¿Cuántos años tienes?"));
    if (!isNaN(edad)) {
        if (edad >= 20) {
            edadMensaje.textContent = `Tienes ${edad} años, eres mayor de 20. ¡Qué madurez!`;
        } else {
            edadMensaje.textContent = `Tienes ${edad} años, ¡eres muy joven!`;
        }
        localStorage.setItem("edad", edad);
    }

    // ✅ Lista de comidas típicas paraguayas
    const comidas = [
        { nombre: "Sopa Paraguaya", img: "https://img-global.cpcdn.com/recipes/c31c8e6b6c93dbc5/680x781cq80/sopa-paraguaya-paraguay-foto-principal.jpg" },
        { nombre: "Chipa", img: "https://www.mspbs.gov.py/dependencias/portal/fotos/da201c-ChipaAlmidon.jpg" },
        { nombre: "Mbeju", img: "https://produsur.com.py/wp-content/uploads/2022/06/Mbeju-tradicional.jpg" },
        { nombre: "Vori Vori", img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Vor%C3%AD_vor%C3%AD_paraguay.jpg" },
        { nombre: "Asado", img: "https://infonegocios.info/content/images/2022/07/22/238016/conversions/costilla-cortepreferido-paraguayos-infoganaderia-medium-size.jpg" }
    ];

    // ✅ Inserta las imágenes en el contenedor
    const galeria = document.getElementById("galeria");

    // Limpia el contenido anterior si hubiera algo
    galeria.innerHTML = "";

    comidas.forEach(comida => {
        const div = document.createElement("div");
        div.classList.add("item-galeria");

        const img = document.createElement("img");
        img.src = comida.img;
        img.alt = comida.nombre;

        const p = document.createElement("p");
        p.textContent = comida.nombre;

        div.appendChild(img);
        div.appendChild(p);
        galeria.appendChild(div);
    });
}

function bienvenidaPagina3() {
    const nombreCompleto = localStorage.getItem("usuario");
    const edad = localStorage.getItem("edad");

    if (nombreCompleto) {
        alert(`Hola ${nombreCompleto}, bienvenido a la página de operaciones matemáticas.${edad ? " Tienes " + edad + " años." : ""}`);
    }
}

// === FUNCIONES MATEMÁTICAS ===
function multiplicacion() {
    const a = parseFloat(prompt("Ingresa el primer número:"));
    const b = parseFloat(prompt("Ingresa el segundo número:"));
    alert(`El resultado de ${a} × ${b} = ${a * b}`);
}

function exponente() {
    const n = parseFloat(prompt("Ingresa un número:"));
    alert(`El resultado de ${n}² = ${n ** 2}`);
}

function resta() {
    const a = parseFloat(prompt("Ingresa el primer número:"));
    const b = parseFloat(prompt("Ingresa el segundo número:"));
    alert(`El resultado de ${a} - ${b} = ${a - b}`);
}


