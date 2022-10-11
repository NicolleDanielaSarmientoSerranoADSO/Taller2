addEventListener("DOMContentLoaded",()=>{
    // 3. Calcular la edad de una madre en el momento de dio a luz a alguno de sus hijos.
    // • Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
    // depósito.
    // • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo).
    // • Volumen = PI *(radio^2)* H (altura del depósito)
    // • El tiempo se encuentra en minutos.
    // • Normalmente se mide el volumen en litros y el tiempo en segundos.
document.write(`23.Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un depósito.<br>`)
let radio=0,altura=0,tiempo=0
    radio = Number(prompt(`Ingrese el valor del radio`))
    altura = Number(prompt(`Ingrese el valor de la altura`))
    tiempo = Number(prompt(`Ingrese el valor del tiempo`))
let volumen = (Math.PI)*(radio**2)*altura
let caudal = volumen*tiempo
document.write(`El valor del caudal  ${caudal}`)
})