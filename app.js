function actualizarLenguajes(matriz1, matriz2) {
    let combinedMatrix = matriz1.concat(matriz2);
    let languageCounts = {};


    for (let i = 0; i < combinedMatrix.length; i++) {
        let cantidad = combinedMatrix[i][0];
        let lenguaje = combinedMatrix[i][1];
        
        if (languageCounts[lenguaje] === undefined) {
            languageCounts[lenguaje] = 0;
        }

        languageCounts[lenguaje] += cantidad;
    }

    let updatedMatrix = [];
    for (let lenguaje in languageCounts) {
        updatedMatrix.push([languageCounts[lenguaje], lenguaje]);
    }

    updatedMatrix.sort((a, b) => a[0] - b[0]);


    console.log("Matriz1 =", updatedMatrix);
}


let matriz1 = [[11, "Java"], [5, "Python"], [3, "Ruby"], [9, "Go"], [10, "Php"]];
let matriz2 = [[6, "Kotlin"], [3, "Python"], [2, "Ruby"], [1, "Go"], [1, "Haskell"]];


actualizarLenguajes(matriz1, matriz2);