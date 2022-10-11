addEventListener("DOMContentLoaded",()=>{
    // 4. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por
    // $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le
    // sobran $91000. ¿cuánto dinero tenía?
    document.write(`4. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le sobran $91000. ¿cuánto dinero tenía?<br>`)
    let hex=0,bomba=0,caja=0,sobrante=0
    hex = 11500
    bomba = 1168000
    caja = 87000
    sobrante = 91000
    let C_hex=0,C_caja=0,total=0
    C_hex = hex*5
    C_caja = caja*3
    total = sobrante+C_caja+C_hex+bomba
    document.write(`el total de dinero que tenia es de:  ${total}`);
})