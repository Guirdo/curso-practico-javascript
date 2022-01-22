const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100

    return precioConDescuento
}

const manejarCalcularPrecioConDescuento = () => {
    const precio = document.getElementById('precio').value
    const descuento = document.getElementById('descuento').value

    const precioConDescuento = calcularPrecioConDescuento(precio,descuento)

    document.getElementById('resultado').innerHTML = precioConDescuento
}
