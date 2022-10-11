addEventListener("DOMContentLoaded",()=>{
    // 2.Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
    // descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total
    // de la compra.
    document.write(`22. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de descuento<br>`)
    let p1=0,p2=0,p3=0,p4=0,p5=0
        p1 = Number(prompt(`Ingrese el valor del primer producto`));
        p2 = Number(prompt(`Ingrese el valor del segundo producto`))
        p3 = Number(prompt(`Ingrese el valor del tercer producto`))
        p4 = Number(prompt(`Ingrese el valor del cuarto producto`))
        p5 = Number(prompt(`Ingrese el valor del quinto producto`))
    let TP1=0,TP2=0,TP4=0,TP5=0,total=0
        TP1 =  p1-(p1*0.05)
        TP2 =  p2-(p2*0.05)
        TP4 =  p4-(p4*0.02)
        TP5 =  p5-(p5*0.02)
        total = (TP1+TP2+p3+TP4+TP5)
        document.write(`El precio final del primer proucto es de:  ${TP1}<br>`)
        document.write(`El precio final del segundo proucto es de:  ${TP2}<br>`)
        document.write(`El precio final del tercer proucto es de:  ${p3}<br>`)
        document.write(`El precio final del cuarto proucto es de:  ${TP4}<br>`)
        document.write(`El precio final del quinto proucto es de:  ${TP5}<br>`)
        document.write(`El valor final de la compra es de:  ${total}<br>`)  
})