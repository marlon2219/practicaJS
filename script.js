//Boton hamburguesa para movil
const btnNav = document.getElementById("btnHamburger");
const enlacesSecundario = document.getElementById("enlacesSecundarios");


btnNav.addEventListener("click", () => {
  enlacesSecundario.classList.toggle("display")
  console.log("se puede hacer click")

})
//carrito
const carritobtnNav = document.getElementById("carrito-btn-nav");
const carritoIcon = document.getElementById("carrito-icon");
const carritoMenu = document.getElementById("carrito-menu");
const btnvaciarCarrito = document.getElementById("btnvaciarCarrito");
const btnCerrarCarrito = document.getElementById("btnCerrarCarrito");

carritoIcon.addEventListener("click", () => {
  carritoMenu.classList.toggle("hidden");
  verCarrito();

})
btnCerrarCarrito.addEventListener("click", () => {
  carritoMenu.classList.toggle("hidden");
  
})
carritobtnNav.addEventListener("click", () => {
  carritoMenu.classList.toggle("hidden");
  verCarrito();

})
btnvaciarCarrito.addEventListener("click", () => {
  console.log(carrito);
  carrito.splice(0,carrito.length)
  console.log(carrito);
  carritoMenu.classList.toggle("hidden");
  verCarrito()
  alert('carrito elminado :(');  

})

function verCarrito() {
  let total = 0;
  const listaCarrito = document.querySelector('#listaCarrito');
  const inputTotal = document.querySelector('#totalCarrito');

  listaCarrito.replaceChildren();
  carrito.forEach(producto => {
    pintarCarrito(listaCarrito, producto);
    total += producto.precio * producto.cantidad;
    
  });
  console.log(listaCarrito);
  inputTotal.textContent= ('Total: €'+parseFloat(total).toFixed(2));
}

function pintarCarrito(dom, product) {
  const botonMas = document.createElement("button");
  const botonMenos = document.createElement("button");
  const botonEliminar = document.createElement("button");

  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("btn-carrito-opciones")
  botonMas.textContent = "( + )";
  botonMas.classList.add("btn-carrito-opciones")
  botonMenos.textContent = "( - )";
  botonMenos.classList.add("btn-carrito-opciones")


  const li = document.createElement('li');
  li.textContent = `${product.nombre}  ${product.precio}€ x ${product.cantidad}`;
  li.appendChild(botonEliminar)
  li.appendChild(botonMas)
  li.appendChild(botonMenos)
  dom.appendChild(li);

  botonMenos.addEventListener('click', () => {
    restarCantidad(product.id)
  });

  botonMas.addEventListener('click', () => {
    addCarrito(product.id,product.nombre)
  });
  botonEliminar.addEventListener('click', () => {
    restarCantidad(-1)
  });
}



