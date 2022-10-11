addEventListener("DOMContentLoaded",()=>{
     // 21. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución,
    // por favor utilizar funciones matemáticas de Python para ello
    // d = rc((x2-x1)^2 + (y2-y1)^2)
document.write(`21. Procesos para calcular la distancia entre dos puntos...<br>`)
let rc=0,x1=0,x2=0,y1=0,y2=0,D=0
rc=Number(prompt("Ingrese el valor de rc"))
x1=Number(prompt("Ingrese el valor de x1"))
x2=Number(prompt("Ingrese el valor de x2"))
y1=Number(prompt("Ingrese el valor de y1"))
y2=Number(prompt("Ingrese el valor de y2"))
D=rc*((x2-x1)^2 + (y2-y1)^2)
document.write(`La distancia entre los dos puntos es de : ${D}`)
})