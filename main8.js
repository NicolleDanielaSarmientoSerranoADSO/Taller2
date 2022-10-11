addEventListener("DOMContentLoaded",()=>{
       //     8. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que
    // se cobra por m2 y realiza el código que representa el algoritmo que le permite ir mejorando
    // presupuestos para cada cliente.
    document.write(`8. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. `) 
    let m2=0,precio=0
    m2=Number(prompt("Ingrese el precio a pintar en m2: "))
    precio=Number(prompt("Ingrese el precio por m2: "))
    let total=(m2*precio)
    document.write(`El total en pesos colombianos es de: ${total}`)
})