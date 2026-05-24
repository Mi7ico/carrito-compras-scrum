const carrito = [];

function mostrarProductos() {
const contenedor = document.getElementById("lista-productos");

productos.forEach(producto => {
    const item = document.createElement("div");

    item.innerHTML = `
    <p>
        <strong>${producto.nombre}</strong> - $${producto.precio.toFixed(2)}
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    </p>
    `;

    contenedor.appendChild(item);
});
}

function agregarAlCarrito(idProducto) {
const productoSeleccionado = productos.find(producto => producto.id === idProducto);

if (productoSeleccionado) {
    carrito.push(productoSeleccionado);
    mostrarCarrito();
}
}

function mostrarCarrito() {
const contenedorCarrito = document.getElementById("carrito");
const totalTexto = document.getElementById("total");

contenedorCarrito.innerHTML = "";

carrito.forEach(producto => {
    const item = document.createElement("p");
    item.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
    contenedorCarrito.appendChild(item);
});

const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);
totalTexto.textContent = `Total: $${total.toFixed(2)}`;
}

mostrarProductos();