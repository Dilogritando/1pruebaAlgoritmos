/* Algoritmos definidos */

/* Promedio */
/* function getAverage(num1,num2){
    let average = (num1+num2)/2;
    console.log(average);
} */

/* Mes correspondiente */
/* function no2Month(indicator){
    let indicatorNum = parseInt(indicator);
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let placeinArray = indicatorNum-1;
    let month = months[placeinArray];
    console.log(month);
} */

/* Resultado de la operacion correspondiente !!!!!!!!!!!*/
/* function resultOperations(numONE, operator, numTWO){
    let resultMath = numONE operator numTWO;
    console.log(resultMath)
} */

/* Determinar el número mayor de los tres. */
/* function biggest(num1a,num2a,num3a){
    if (num1a>num2a, num1a>num3a){
        resultBiggest=num1a;
    } else if (num2a>num1a, num2a>num3a) {
        resultBiggest=num2a;
    } else {
        resultBiggest=num3a;
    }
    console.log(resultBiggest)
} */

/* Promedio de un estudiante a partir de sus tres notas parciales. */
function gradeAverage(grade1,grade2,grade3){
    let g1 =  parseFloat(grade1);
    let g2 =  parseFloat(grade2);
    let g3 =  parseFloat(grade3);
    let fullNum = (g1+g2+g3)/3;
    let resultGrades = fullNum.toFixed(2);
    console.log(resultGrades)
}

/* Muestre en pantalla la edad del mayor */
/* function showEldest(age1, age2){
    let age1;
    let age2;
    if (age1>age2){
        let resultEldest = age1
    } else {
        let resultEldest = age2
    }
    console.log(resultEldest)
} */

/* export default Algoritmos */