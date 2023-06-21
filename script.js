
let productos = [
  { id: 2, nombre: "oversize T negra", categoria: "remeras", stock: 2, precio: 5000 },
  { id: 3, nombre: "short blanco estampado", categoria: "shorts", stock: 5, precio: 3800 },
  { id: 5, nombre: "pantalon bomber verde", categoria: "pantalones", stock: 7, precio: 9700 },
  { id: 7, nombre: "oversize T blanca", categoria: "remeras", stock: 4, precio: 5000 },
  { id: 9, nombre: "pantalon cargo negro", categoria: "pantalones", stock: 1, precio: 10000 },
  { id: 12, nombre: "musculosa summer", categoria: "remeras", stock: 3, precio: 4500 },
  { id: 15, nombre: "short negro estampado", categoria: "shorts", stock: 8, precio: 3800 },
  { id: 17, nombre: "pantalon chino gris", categoria: "pantalones", stock: 7, precio: 11000 },
]

let carrito = []

let mensaje = "Bienvenido a State of Chaos\n1 - Lista de productos\n2 - Agregar producto al carrito\n3 - Quitar productos del carrito\n4 - Listar filtrados por categoría\n5 - Listar ordenados por precio\n6 - Listar carrito\n7 - Ver total y finalizar compra\n0 - SALIR"

let opcion

do {
  opcion = Number(prompt(mensaje))

  // Opcion listar productos

  if (opcion === 1) {
    alert(listar(productos))

    // Opcion agregar productos

  } else if (opcion === 2) {
    let id = Number(prompt("Seleccione id del producto a comprar\n" + listar(productos)))
    let productoBuscado = productos.find(prod => prod.id === id)
    let posicionProductoEnCarrito = carrito.findIndex(prod => prod.id === productoBuscado.id)

    // Agregando productos al carrito

    if (posicionProductoEnCarrito === -1) {
      carrito.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precioUnitario: productoBuscado.precio,
        unidades: 1,
        subtotal: productoBuscado.precio
      })
    } else {
      carrito[posicionProductoEnCarrito].unidades++
      carrito[posicionProductoEnCarrito].subtotal = carrito[posicionProductoEnCarrito].precioUnitario * carrito[posicionProductoEnCarrito].unidades
    }


  }

  // Opcion quitar productos del carrito

  else if (opcion === 3) {
    let idEliminar = parseInt(prompt("Ingrese el ID del elemento a eliminar: \n" + listar(carrito)));

    
    let indice = -1;
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].id === idEliminar) {
        indice = i;
        break;
      }
    }
    
    if (indice !== -1) {
      carrito.splice(indice, 1);
      alert('Elemento eliminado correctamente.');
    } else {
      alert('No se encontró ningún elemento con el ID proporcionado.');
    }
  }

  // Opcion filtrar por categorias

  else if (opcion === 4) {
    let categoria = prompt("Selecciones categoria: remeras, shorts o pantalones")
    let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
    alert(listar(productosFiltrados))
  }

  // Opcion listar productos por precio

  else if (opcion === 5) {
    let precios = ""
    productos.forEach(productos => {
      precios += productos.nombre + " " + productos.precio + "\n"
    })
    alert(precios)

    // Opcion listar productos agregados al carrito

  } else if (opcion === 6) {
    if (carrito.length > 0) {
      alert(listar(carrito))
    } else {
      alert("Primero debe agregar productos al carrito")
    }
  }

  // Opcion mostrar total y finalizar compra

  else if (opcion === 7) {
    let precioFinal = carrito.reduce((acum, carrito) => acum + carrito.precioUnitario, 0)
    alert("El total a abonar es" + " " + precioFinal)
  }
} while (opcion !== 0)


//  Funcion listar

function listar(arrayAListar) {
  let listado = "ID - Nombre\n"
  arrayAListar.forEach(element => {
    listado = listado + element.id + " - " + element.nombre + "\n"
  })
  return listado
}

// Funcion ordenar 

function ordenar(arrayDeElementos) {
  return arrayDeElementos.sort((a, b) => {
    if (a.precio > b.precio) {
      return -1
    }
    if (a.precio < b.precio) {
      return 1
    }
    return 0
  })
}







