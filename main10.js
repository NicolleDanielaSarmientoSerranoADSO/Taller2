addEventListener("DOMContentLoaded",()=>{
      // 10. Ingrese una frase que lo identifique como programador de Software y luego mostar esta frase
// invertido.
let frase=prompt("Ingrese una frase que lo identifique como programador de Software")
document.write(`${frase}<br>`)
let frasein = frase.split("").reverse().join("")
document.write(`La frase invertida queda : ${frasein}`)
})