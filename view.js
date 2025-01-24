const seccionProductos = document.querySelector('#productos');

function pintarProductos(list,dom){
    list.forEach(producto => producto.pintarDato(dom))
}

pintarProductos(productos,seccionProductos);

const btnAddCarrito = document.querySelector('#btnAddProducto');
console.log(btnAddCarrito);
//inicializamos el carrito
const carrito = [];

//añadimos al carrito desde la vista principal o desde el carrito
//dependiendo de la accion vamos a sumar, reestar o añadir
function addCarrito(idProd,nomProducto){    
    const producto = productos.find(prod => prod.id === idProd);
    const item = carrito.find(i => i.id === idProd);
      if (item) {
        item.cantidad++;
        //alert('Has añadido una undidad de : '+nomProducto)
        verCarrito();
      } else {
        carrito.push({ ...producto, cantidad: 1 });
        verCarrito();
        alert('Has añadido al carrito : '+nomProducto)
      }
      verCarrito();
      console.log(carrito);
}
function restarCantidad(idProd){
    
  const index = carrito.findIndex(prod => prod.id === idProd);
  const item = carrito.find(i => i.id === idProd);

  if(idProd === -1){
    carrito.splice(index,1)
    verCarrito();
  }
  if(item.cantidad > 1 ){
  item.cantidad--;
  //alert('Has quitado una unidad de : '+nomProducto)
  verCarrito()
  }else{
    carrito.splice(index,1)
    verCarrito();
    //alert('Has quitado '+item.nombre+" del carrito");

  }
    console.log(carrito);
}


