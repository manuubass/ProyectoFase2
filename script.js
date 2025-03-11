let usuarioAutenticado = false;
let carrito=[];
let total=0;
let indiceImagen = 0;
const totalImagenes = document.querySelectorAll('.carrusel-contenido img').length / 2; // Dividir por 2 por las imágenes duplicadas
const catalogo = [
    { nombre: "AIRPODS MAX", url: "producto.html" },
    { nombre: "CUBBIT WATCH ", url: "producto.html" },
    { nombre: "JBL CHARGER 5", url: "producto.html" },
    { nombre: "OCULUS", url: "producto.html" },
    { nombre: "LAPTOP LENOVO IDEAPAD 3 ", url: "producto.html" },
    { nombre: "SAMSUNG TV CRYSTAL UHD", url: "producto.html" },
    { nombre: "PLAYSTATION PRO 5", url: "producto.html" },
    { nombre: "ALEXA ECHO 5 AMAZON", url: "producto.html" },
    { nombre: "APPLE WATCH SERIES 7", url: "producto.html" },
    { nombre: "IPHONE 16 PRO MAX 256GB", url: "producto.html" },
    { nombre: "FIRE STICK 4K", url: "producto.html" },
    { nombre: "NINTENDO SWITCH 2", url: "producto.html" },
    
    
];

function mostrarImagen(indice) {
    if (indice >= totalImagenes) {
        indiceImagen = 0; // Reiniciar al inicio
    } else if (indice < 0) {
        indiceImagen = totalImagenes - 1; // Ir a la última imagen
    } else {
        indiceImagen = indice;
    }
    const desplazamiento = -indiceImagen * 100; // Cambia el desplazamiento según el índice
    document.querySelector('.carrusel-contenido').style.transform = `translateX(${desplazamiento}%)`;
}

function cambiarImagen(direccion) {
    mostrarImagen(indiceImagen + direccion);
}

// Mover automáticamente el carrusel cada 3 segundos
setInterval(() => {
    cambiarImagen(1); // Cambia a la siguiente imagen
}, 3000); // 3000 milisegundos = 3 segundos

// Mostrar la primera imagen al cargar
mostrarImagen(indiceImagen);

// Agregar evento de clic a las imágenes
const imagenes = document.querySelectorAll('.carrusel-contenido img');
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        const url = imagen.getAttribute('data-url'); // Obtener la URL del atributo data-url
        window.location.href = 'producto.html'; // 
    });
});

 function login() {
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    // Definición de cuentas
    const cuentas = {
        'seller456': { password: 'Intro123', tipo: 'Comprador' },
        'dancabello': { password: 'J5*asdRD.s', tipo: 'Vendedor' },
        'root': { password: 'dochouse', tipo: 'Admin' }
    };

    // Validación de usuario
    if (cuentas[correo] && cuentas[correo].password === password) {
        alert(`Bienvenido, ${cuentas[correo].tipo}!`);
        // Redirigir según el tipo de cuenta
        switch (cuentas[correo].tipo) {
            case 'Comprador':
                window.location.href = 'comprador.html'; // Página del comprador
                break;
            case 'Vendedor':
                window.location.href = 'vendedor.html'; // Página del vendedor
                break;
            case 'Admin':
                window.location.href = 'admin.html'; // Página del administrador
                break;
        }
    } else {
        alert('Correo o contraseña incorrectos. Intente nuevamente.');
    }
}
function registro() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const nickname = document.getElementById('nickname').value;
    const rol = document.getElementById('rol').value;
    const correo = document.getElementById('correo').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    // Validar que todos los campos estén llenos
    if (!nombre || !apellido || !nickname || !correo || !password1 || !password2) {
        alert("Por favor, complete todos los campos.");
        return; // Salir de la función si hay campos vacíos
    }

    // Validar que las contraseñas coincidan
    if (password1 !== password2) {
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        return; // Salir de la función si las contraseñas no coinciden
    }

    // Si todo está bien, puedes proceder con el registro
    alert("Registro exitoso!");
    window.location.href = 'login.html'; // Página del comprador
    // Aquí podrías agregar el código para enviar el formulario o realizar otra acción
}
function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    document.getElementById('numeroCarrito').innerText = `🛒 ${carrito.length}`;
}

function mostrarCarrito() {
    const carritoModal = document.getElementById('carritoModal');
    const productosCarrito = document.getElementById('productosCarrito');
    productosCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        productosCarrito.innerHTML += `
            <div>
                <p>${producto.nombre} - $${producto.precio.toFixed(2)}</p>
                
            </div>
        `;
    });

    document.getElementById('totalPrecio').innerText = `Total: $${total.toFixed(2)}`;
    carritoModal.style.display = 'block';
}

function ocultarCarrito() {
    document.getElementById('carritoModal').style.display = 'none';
}



function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
    document.getElementById('productosCarrito').innerHTML = '';
    document.getElementById('totalPrecio').innerText = 'Total: \$0.00';
}

function pagar(){
    window.location.href = 'pagar.html';
    
}
function validarVendedor(usuario, contrasena) {
    const vendedor = {
        nombre: "dancabello",
        contrasena: "J5*asdRD.s"
    };

    // Verificar si el usuario y la contraseña son correctos
    if (usuario === vendedor.nombre && contrasena === vendedor.contrasena) {
        return true; // Validación exitosa
    } else {
        alert("Usuario o contraseña incorrectos.");
        return false; // Validación fallida
    }
}


