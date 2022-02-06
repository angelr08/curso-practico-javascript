function calcularMedioRango(lista) {
    const listaOrdenada = lista.sort(function(a, b) {
        return a - b;
    })
    const medioRango = (listaOrdenada[listaOrdenada.length - 1] + listaOrdenada[0]) / 2;
    return medioRango;
}

calcularMedioRango([10,14,35,2,4,7]);