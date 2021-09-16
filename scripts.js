alert ("hola mundo!")

$("p").click(function(){
    $(this).toggle ()
    console.log (this)
})

$("button").click (function(){
    $("p").show()
})

$(".jumbotron").mouseleave(function (){
    alert ("You are hot!")
})

