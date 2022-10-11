addEventListener("DOMContentLoaded",()=>{
    // 5. En el programa de cocina de “Doña Anita” han dado la receta para la preparación de bizcocho especial
// de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos de cacao y un puñado de
// nueces. Si quiero prepararlos con 20 gramos de chocolate. La cantidad de gramos de harina para
// hacer el bizcocho es
document.write(`5. En el programa de cocina de “Doña Anita” han dado la receta para la preparación de bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. La cantidad de gramos de harina para hacer el bizcocho es<br>`)
let harina=100,cacao=10,Tlharina=0
let grcacao=Number(prompt("Ingrese los gramos de cacao"))
Tlharina=(harina*grcacao)/cacao
document.write(`La cantidad de harina que se necesita para hacer el bizcocho con ${grcacao} gr de cacao es de: ${Tlharina} `)
})