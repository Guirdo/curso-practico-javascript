//Codigo del cuadrado
const perimetroCuadrado = (lado) => lado * 4

const areaCuadrado = (lado) => lado * lado

const perimetroTriangulo = (lado1,lado2,lado3)=> lado1 + lado2 + lado3

const areaTriangulo = (base,altura) => (base*altura) / 2

const diametroCirculo = (radio) => radio*2

const PI = Math.PI

const perimetroCirculo = (radio) => diametroCirculo(radio)*PI

const areaCirculo = (radio) => radio**2 * PI

const calcularPerimetroCuadrado = () => {
    const ladoCuadrado = document.getElementById('ladoCuadrado').value

    const perimetro = perimetroCuadrado(ladoCuadrado)
    alert(perimetro)
}

const calcularAreaCuadrado = () => {
    const ladoCuadrado = document.getElementById('ladoCuadrado').value

    const area = areaCuadrado(ladoCuadrado)
    alert(area)
}