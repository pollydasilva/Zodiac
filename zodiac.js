$('select').change(function(){
    console.log($(this).val())
})

$('button').click(function(event){
    // previene el comportamiento por defecto que traen los botones
    event.preventDefault()

var option = $("select").val()

if(option == "Ari"){
    zodiacText = Ari
}else if(option == "Tau"){
    zodiacText = Esc
}else if(option == "Gem"){
    zodiacText = Gem
}else if(option == "Can"){
    zodiacText = Vir
}else if(option == "Leo"){
    zodiacText = Leo
}else if(option == "Vir"){
    zodiacText = Can
}else if(option == "Lib"){
    zodiacText = Gem
}else if(option == "Esc"){
    zodiacText = Esc
}else if(option == "Sag"){
    zodiacText = Sag
}else if(option == "Cap"){
    zodiacText = Cap
}else if(option == "Acu"){
    zodiacText = Acu
}else if(option == 'Pis'){
    zodiacText = Pis
}


    $('#result').text(zodiacText)
    $('#myModal').modal()

})

    var Lib = "Algún mensaje positivo para alegrar el día de Libra"
    var Esc = "Algún mensaje positivo para alegrar el día de Escorpión "
    var Sag = "Algún mensaje positivo para alegrar el día Sagitatio"
    var Vir = "Algún mensaje positivo para alegrar el día de Virgo"
    var Leo = "Algún mensaje positivo para alegrar el día de Leo"
    var Can = "Algún mensaje positivo para alegrar el día de Cáncer"
    var Gem = "Algún mensaje positivo para alegrar el día de Géminis"
    var Tau = "Algún mensaje positivo para alegrar el día de Tauro"
    var Ari = "Algún mensaje positivo para alegrar el día de Aries"
    var Cap = "Algún mensaje positivo para alegrar el día de Capricornio"
    var Acu = "Algún mensaje positivo para alegrar el día de Acuario"
    var Pis = "Algún mensaje positivo para alegrar el día de Piscis"