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
    const nombreCompleto = localStorage.getItem("usuario");
    if (nombreCompleto) {
        saludoPersona.textContent = `Hola nuevamente, ${nombreCompleto}. ¡Disfruta de la galería!`;
    }

    const comidas = [
        { nombre: "Sopa Paraguaya", img: "https://frigomas.com.py/wp-content/uploads/2023/08/1569260624-muestra.jpg" },
        { nombre: "Chipa", img: "https://www.mspbs.gov.py/dependencias/portal/fotos/da201c-ChipaAlmidon.jpg" },
        { nombre: "Mbeju", img: "https://produsur.com.py/wp-content/uploads/2022/06/Mbeju-tradicional.jpg" },
        { nombre: "Vori Vori", img: "https://cocinarica.com.py/img/cocina-paraguaya/vori-vori-gallina-secundaria.jpg" },
        { nombre: "Asado", img: "https://infonegocios.info/content/images/2022/07/22/238016/conversions/costilla-cortepreferido-paraguayos-infoganaderia-medium-size.jpg" }
    ];

    const galeria = document.getElementById("galeria");
    comidas.forEach(comida => {
        const div = document.createElement("div");
        div.className = "item-galeria";
        div.innerHTML = `<img src="${comida.img}" alt="${comida.nombre}"><p>${comida.nombre}</p>`;
        galeria.appendChild(div);
    });
}

function bienvenidaPagina3() {
    const nombreCompleto = localStorage.getItem("usuario");
    if (nombreCompleto) {
        alert(`Hola ${nombreCompleto}, bienvenido a la página de operaciones matemáticas.`);
    }
}

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
