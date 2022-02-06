function alturaIsosceles(a, b, c) {
    if(a === b || a === c || b === c) {
        if(a === b) {
            const altura = Math.sqrt((a * b) - ((c * c) / 4));
            return altura;
        } else if(a === c) {
            const altura = Math.sqrt((a * c) - ((b * b) / 4));
            return altura;
        } else if(b === c) {
            const altura = Math.sqrt((b * c) - ((a * a) / 4));
            return altura;
        }
    } else {
        console.log("El triángulo no es isósceles");
    }
}

alturaIsosceles(4, 4, 5);