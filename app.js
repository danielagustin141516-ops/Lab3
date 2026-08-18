/* =========================================================
   MOTOCENTER GT
   APP.JS COMPLETO
========================================================= */


/* =========================================================
   VARIABLES
========================================================= */

const enlacesMenu =
    document.querySelectorAll(
        ".navbar a[data-seccion]"
    );

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");


/* =========================================================
   NAVEGACIÓN
========================================================= */

function mostrarSeccion(nombreSeccion) {

    const paginas =
        document.querySelectorAll(".pagina");


    paginas.forEach(function (pagina) {

        pagina.classList.remove("activa");

    });


    const pagina =
        document.getElementById(nombreSeccion);


    if (pagina) {

        pagina.classList.add("activa");

    }


    if (navbar) {

        navbar.classList.remove("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* Menú */

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            const seccion =
                enlace.dataset.seccion;

            mostrarSeccion(seccion);

        }
    );

});


/* Menú hamburguesa */

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        function () {

            navbar.classList.toggle("active");

        }
    );

}


/* =========================================================
   PRODUCTOS
========================================================= */

const productos = [

    {
        id: 1,
        nombre: "Moto Deportiva 250",
        categoria: "MOTOCICLETA",
        precio: 18500,

        imagen:
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",

        descripcion:
            "Motocicleta deportiva diseñada para ofrecer buen rendimiento tanto en ciudad como en carretera.",

        caracteristicas: [
            "Modelo: Deportiva 250",
            "Motor: 250 cc",
            "Transmisión: 6 velocidades",
            "Diseño: Deportivo",
            "Frenos: Disco",
            "Tanque: 14 litros"
        ]
    },


    {
        id: 2,
        nombre: "Moto Urbana 150",
        categoria: "MOTOCICLETA",
        precio: 12800,

        imagen:
            "https://images.unsplash.com/photo-1558980664-10ea7a40d4a7?auto=format&fit=crop&w=800&q=80",

        descripcion:
            "Motocicleta práctica, económica y cómoda para desplazamientos diarios.",

        caracteristicas: [
            "Modelo: Urbana 150",
            "Motor: 150 cc",
            "Transmisión: 5 velocidades",
            "Diseño: Urbano",
            "Arranque: Eléctrico",
            "Bajo consumo"
        ]
    },


    {
        id: 3,
        nombre: "Aceite Sintético 10W-40",
        categoria: "ACEITE",
        precio: 120,

        imagen:
            "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=800&q=80",

        descripcion:
            "Aceite sintético para ayudar a proteger el motor y mantener su rendimiento.",

        caracteristicas: [
            "Tipo: Sintético",
            "Viscosidad: 10W-40",
            "Presentación: 1 litro",
            "Protección del motor",
            "Uso: Motocicletas",
            "Buena estabilidad térmica"
        ]
    },


    {
        id: 4,
        nombre: 'Llanta Sport 17"',
        categoria: "LLANTAS",
        precio: 450,

        imagen:
            "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=800&q=80",

        descripcion:
            "Llanta deportiva diseñada para ofrecer estabilidad y buen agarre.",

        caracteristicas: [
            'Medida: 17 pulgadas',
            "Tipo: Sport",
            "Diseño: Deportivo",
            "Buen agarre",
            "Uso: Urbano",
            "Construcción resistente"
        ]
    },


    {
        id: 5,
        nombre: "Casco Integral",
        categoria: "SEGURIDAD",
        precio: 350,

        imagen:
            "https://images.unsplash.com/photo-1558980394-0c7d0c8f8e8f?auto=format&fit=crop&w=800&q=80",

        descripcion:
            "Casco integral pensado para brindar protección y comodidad.",

        caracteristicas: [
            "Tipo: Integral",
            "Visor: Transparente",
            "Interior acolchado",
            "Sistema de ventilación",
            "Cierre de seguridad",
            "Diseño deportivo"
        ]
    },


    {
        id: 6,
        nombre: "Guantes Racing",
        categoria: "ACCESORIOS",
        precio: 180,

        imagen:
            "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=80",

        descripcion:
            "Guantes para motociclista con protección para las manos.",

        caracteristicas: [
            "Tipo: Racing",
            "Protección en nudillos",
            "Material resistente",
            "Cierre ajustable",
            "Diseño deportivo",
            "Varias tallas"
        ]
    },


    {
        id: 7,
        nombre: "Chaqueta Racing",
        categoria: "ROPA",
        precio: 650,

        imagen:
            "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=800&q=80",

        descripcion:
            "Chaqueta para motociclistas con diseño deportivo.",

        caracteristicas: [
            "Tipo: Racing",
            "Diseño deportivo",
            "Protecciones internas",
            "Material resistente",
            "Cierre frontal",
            "Bolsillos laterales"
        ]
    },


    {
        id: 8,
        nombre: "Batería para Moto",
        categoria: "REPUESTOS",
        precio: 380,

        imagen:
            "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",

        descripcion:
            "Batería diseñada para proporcionar energía confiable.",

        caracteristicas: [
            "Voltaje: 12V",
            "Alto rendimiento",
            "Fácil instalación",
            "Diseño compacto",
            "Bajo mantenimiento",
            "Para motocicletas"
        ]
    }

];


/* =========================================================
   CARRITO
========================================================= */

let carrito =
    JSON.parse(
        localStorage.getItem(
            "carritoMotoCenter"
        )
    ) || [];


function formatearPrecio(precio) {

    return "Q" +
        precio.toLocaleString(
            "es-GT",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );

}


/* =========================================================
   VER PRODUCTO
========================================================= */

function verProducto(id) {

    const producto =
        productos.find(
            p => p.id === id
        );


    if (!producto) return;


    const imagen =
        document.getElementById(
            "modalImagen"
        );

    const categoria =
        document.getElementById(
            "modalCategoria"
        );

    const nombre =
        document.getElementById(
            "modalNombre"
        );

    const descripcion =
        document.getElementById(
            "modalDescripcion"
        );

    const precio =
        document.getElementById(
            "modalPrecio"
        );

    const caracteristicas =
        document.getElementById(
            "modalCaracteristicas"
        );


    if (imagen) {

        imagen.src =
            producto.imagen;

        imagen.alt =
            producto.nombre;

    }


    if (categoria) {

        categoria.textContent =
            producto.categoria;

    }


    if (nombre) {

        nombre.textContent =
            producto.nombre;

    }


    if (descripcion) {

        descripcion.textContent =
            producto.descripcion;

    }


    if (precio) {

        precio.textContent =
            formatearPrecio(
                producto.precio
            );

    }


    if (caracteristicas) {

        caracteristicas.innerHTML = "";


        producto.caracteristicas.forEach(
            caracteristica => {

                const li =
                    document.createElement("li");

                li.textContent =
                    caracteristica;

                caracteristicas.appendChild(li);

            }
        );

    }


    const boton =
        document.getElementById(
            "modalAgregar"
        );


    if (boton) {

        boton.onclick = function () {

            agregarAlCarrito(
                producto.id
            );

            cerrarModal();

        };

    }


    const modal =
        document.getElementById(
            "productoModal"
        );


    if (modal) {

        modal.classList.add("active");

    }

}


/* =========================================================
   CERRAR MODAL
========================================================= */

function cerrarModal() {

    const modal =
        document.getElementById(
            "productoModal"
        );


    if (modal) {

        modal.classList.remove("active");

    }

}


/* =========================================================
   AGREGAR AL CARRITO
========================================================= */

function agregarAlCarrito(id) {

    const producto =
        productos.find(
            p => p.id === id
        );


    if (!producto) return;


    const existente =
        carrito.find(
            item => item.id === id
        );


    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({

            id: id,

            cantidad: 1

        });

    }


    guardarCarrito();

    actualizarContador();


    alert(
        "✓ " +
        producto.nombre +
        " fue agregado al carrito."
    );

}


/* =========================================================
   GUARDAR CARRITO
========================================================= */

function guardarCarrito() {

    localStorage.setItem(

        "carritoMotoCenter",

        JSON.stringify(carrito)

    );

}


/* =========================================================
   CONTADOR
========================================================= */

function actualizarContador() {

    const contador =
        document.getElementById(
            "contadorCarrito"
        );


    if (!contador) return;


    const cantidad =
        carrito.reduce(
            (total, item) =>
                total + item.cantidad,
            0
        );


    contador.textContent =
        cantidad;

}


/* =========================================================
   ABRIR CARRITO
========================================================= */

function abrirCarrito() {

    mostrarCarrito();


    const modal =
        document.getElementById(
            "carritoModal"
        );


    if (modal) {

        modal.classList.add("active");

    }

}


/* =========================================================
   CERRAR CARRITO
========================================================= */

function cerrarCarrito() {

    const modal =
        document.getElementById(
            "carritoModal"
        );


    if (modal) {

        modal.classList.remove("active");

    }

}


/* =========================================================
   MOSTRAR CARRITO
========================================================= */

function mostrarCarrito() {

    const lista =
        document.getElementById(
            "carritoLista"
        );

    const totalElemento =
        document.getElementById(
            "carritoTotal"
        );


    if (!lista) return;


    lista.innerHTML = "";


    if (carrito.length === 0) {

        lista.innerHTML = `

            <p class="sin-clientes">

                <i class="fa-solid fa-cart-shopping"></i>

                Tu carrito está vacío.

            </p>

        `;


        if (totalElemento) {

            totalElemento.textContent =
                "Q0.00";

        }

        return;

    }


    let total = 0;


    carrito.forEach(function (item) {

        const producto =
            productos.find(
                p => p.id === item.id
            );


        if (!producto) return;


        const subtotal =
            producto.precio *
            item.cantidad;


        total += subtotal;


        const elemento =
            document.createElement(
                "div"
            );


        elemento.className =
            "carrito-item";


        elemento.innerHTML = `

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
            >

            <div>

                <h4>
                    ${producto.nombre}
                </h4>

                <p>
                    ${formatearPrecio(
            producto.precio
        )}
                </p>

                <div class="cantidad-controles">

                    <button
                        onclick="cambiarCantidad(
                            ${producto.id},
                            -1
                        )"
                    >
                        -
                    </button>

                    <span>
                        ${item.cantidad}
                    </span>

                    <button
                        onclick="cambiarCantidad(
                            ${producto.id},
                            1
                        )"
                    >
                        +
                    </button>

                </div>

            </div>

            <div>

                <strong>
                    ${formatearPrecio(
            subtotal
        )}
                </strong>

                <br>

                <button
                    class="eliminar-btn"
                    onclick="eliminarDelCarrito(
                        ${producto.id}
                    )"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;


        lista.appendChild(elemento);

    });


    if (totalElemento) {

        totalElemento.textContent =
            formatearPrecio(total);

    }

}


/* =========================================================
   CAMBIAR CANTIDAD
========================================================= */

function cambiarCantidad(id, cambio) {

    const producto =
        carrito.find(
            item => item.id === id
        );


    if (!producto) return;


    producto.cantidad += cambio;


    if (producto.cantidad <= 0) {

        carrito =
            carrito.filter(
                item => item.id !== id
            );

    }


    guardarCarrito();

    actualizarContador();

    mostrarCarrito();

}


/* =========================================================
   ELIMINAR
========================================================= */

function eliminarDelCarrito(id) {

    carrito =
        carrito.filter(
            item => item.id !== id
        );


    guardarCarrito();

    actualizarContador();

    mostrarCarrito();

}


/* =========================================================
   COMPRA POR WHATSAPP
========================================================= */

function finalizarCompra() {

    if (carrito.length === 0) {

        alert(
            "Tu carrito está vacío."
        );

        return;

    }


    let mensaje =
        "Hola MotoCenter GT,%0A" +
        "Quiero realizar la siguiente compra:%0A%0A";


    let total = 0;


    carrito.forEach(function (item) {

        const producto =
            productos.find(
                p => p.id === item.id
            );


        if (!producto) return;


        const subtotal =
            producto.precio *
            item.cantidad;


        total += subtotal;


        mensaje +=
            "• " +
            producto.nombre +
            " x" +
            item.cantidad +
            " - " +
            formatearPrecio(
                subtotal
            ) +
            "%0A";

    });


    mensaje +=
        "%0A*TOTAL: " +
        formatearPrecio(total) +
        "*";


    window.open(

        "https://wa.me/50239715109?text=" +
        mensaje,

        "_blank"

    );

}


/* =========================================================
   PROMOCIÓN
========================================================= */

function mostrarPromocion() {

    alert(

        "🔥 PROMOCIÓN MOTOCENTER GT 🔥\n\n" +

        "Obtén 10% de descuento " +
        "en productos seleccionados.\n\n" +

        "Regístrate como cliente " +
        "para recibir información."

    );

}


/* =========================================================
   CLIENTES
========================================================= */

let clientes =
    JSON.parse(
        localStorage.getItem(
            "clientesMotoCenter"
        )
    ) || [];


const formulario =
    document.getElementById(
        "clienteForm"
    );


const listaClientes =
    document.getElementById(
        "listaClientes"
    );


function mostrarClientes() {

    if (!listaClientes) return;


    listaClientes.innerHTML = "";


    if (clientes.length === 0) {

        listaClientes.innerHTML = `

            <p class="sin-clientes">

                Todavía no hay clientes
                registrados.

            </p>

        `;

        return;

    }


    clientes.forEach(function (cliente) {

        const tarjeta =
            document.createElement(
                "div"
            );


        tarjeta.className =
            "cliente-card";


        tarjeta.innerHTML = `

            <strong>
                ${cliente.nombre}
            </strong>

            <small>

                <i class="fa-solid fa-envelope"></i>

                ${cliente.correo}

            </small>

            <br>

            <small>

                <i class="fa-solid fa-phone"></i>

                ${cliente.telefono}

            </small>

            <br>

            <small>

                <i class="fa-solid fa-motorcycle"></i>

                ${cliente.moto}

            </small>

        `;


        listaClientes.appendChild(
            tarjeta
        );

    });

}


if (formulario) {

    formulario.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


            const nombre =
                document.getElementById(
                    "nombre"
                ).value.trim();


            const correo =
                document.getElementById(
                    "correo"
                ).value.trim();


            const telefono =
                document.getElementById(
                    "telefono"
                ).value.trim();


            const moto =
                document.getElementById(
                    "moto"
                ).value;


            if (
                !nombre ||
                !correo ||
                !telefono ||
                !moto
            ) {

                alert(
                    "Completa todos los campos."
                );

                return;

            }


            clientes.push({

                id: Date.now(),

                nombre: nombre,

                correo: correo,

                telefono: telefono,

                moto: moto

            });


            localStorage.setItem(

                "clientesMotoCenter",

                JSON.stringify(clientes)

            );


            mostrarClientes();


            formulario.reset();


            alert(
                "✓ Cliente registrado correctamente."
            );

        }
    );

}


/* =========================================================
   CERRAR MODALES
========================================================= */

document.addEventListener(
    "click",
    function (e) {

        const productoModal =
            document.getElementById(
                "productoModal"
            );


        const carritoModal =
            document.getElementById(
                "carritoModal"
            );


        if (
            productoModal &&
            e.target === productoModal
        ) {

            cerrarModal();

        }


        if (
            carritoModal &&
            e.target === carritoModal
        ) {

            cerrarCarrito();

        }

    }
);


/* =========================================================
   TECLA ESC
========================================================= */

document.addEventListener(
    "keydown",
    function (e) {

        if (e.key === "Escape") {

            cerrarModal();

            cerrarCarrito();

        }

    }
);


/* =========================================================
   INICIALIZACIÓN
========================================================= */

mostrarClientes();

actualizarContador();

mostrarSeccion("inicio");