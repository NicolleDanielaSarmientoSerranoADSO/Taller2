addEventListener("DOMContentLoaded",()=>{
      //9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,
    //pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el código
    //que representen el algoritmo para solucionar este problema.
    //Al final debe entregar el nombre de la persona entrevistada en mayúscula sostenida y minunscula
    //sostenida y la edad del entrevistado.
    let nom=" ",edad=0,person=0
    person=Number(prompt("Ingrese la cantidad de personas que desea determinar su edad: "))
    let i=0
    while(i<=person){
        i++
        nom=prompt("Ingrese el nombre de la persona: ")
        edad=Number(prompt("Ingrese el año de nacimiento de la persona : "))

        let edper=(2022-edad)
        document.write(`${nom} tiene: ${edper}<br>`)
    }
})