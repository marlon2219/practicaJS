class Producto {
    id = 0;
    nombre = "";
    imagen = "";
    descripcion = "";
    precio = 0;
    stock = 0


    constructor(id, nombre, imagen, descripcion, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }
    //meotodo para pintar cada elemento article con cada uno de los obj
    pintarDato(dom) {
        const article = document.createElement("article");
        article.innerHTML = `
            <figure>
            <img src="./assets/perfume1.webp" alt="">
            </figure>
            <h2>${this.nombre}</h2>
            <p>${this.descripcion}</p>
            <p>Precio: ${this.precio}€</p>
            <button onclick="addCarrito(${this.id},'${this.nombre}')" id="btnAddProducto">Agregar al Carrito</button>`;
        dom.appendChild(article);

    }



}