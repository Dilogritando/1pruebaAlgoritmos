/* Algoritmos definidos */

/* Promedio */
function getAverage(num1,num2){
    let average = (num1+num2)/2;
    console.log(average);
}

/* Mes correspondiente */
function no2Month(indicator){
    let indicatorNum = parseInt(indicator);
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let placeinArray = indicatorNum-1;
    let month = months[placeinArray];
    console.log(month);
}

/* Resultado de la operacion correspondiente*/
function resultOperations(numONE, operatora, numTWO){
    let a = parseInt(numONE); 
    let b = parseInt(numTWO);
    let operator = operatora.toString();
    switch (operator) {
        case '+':
            let resultSum = (a+b);
            console.log(`El resultado de la suma es ${resultSum}`);
            break;
        
        case '-':
            let resultSubs = a-b;
            console.log(`El resultado de la resta es ${resultSubs}`);
            break;
        
        case '/':
            let resultDiv = a/b;
            console.log(`El resultado de la división es ${resultDiv}`);
            break;
        
        case '*':
            let resultMult = a*b
            console.log(`El resultado de la multiplicación es ${resultMult}`);
            break;
        
        default:
          console.log(`Intenta poner dos números enteros usando cualquiera de las operaciones.`);
      }
}

/* Determinar el número mayor de los tres. */
function biggest(num1a,num2a,num3a){
    if (num1a>num2a, num1a>num3a){
        resultBiggest=num1a;
    } else if (num2a>num1a, num2a>num3a) {
        resultBiggest=num2a;
    } else {
        resultBiggest=num3a;
    }
    console.log(resultBiggest)
}

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
function showEldest(age1, age2){
    if (age1>age2){
        let resultEldest = age1;
        return resultEldest;
    } else {
        let resultEldest = age2
        return resultEldest;
    }
}

export default Algoritmos