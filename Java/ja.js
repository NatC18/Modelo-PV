function username() {
    var userinput = document.getElementById('nombre');
        console.log(userinput)
}
$(document).ready(function(){
    var mujer = $(".mujer");
    var hombre = $(".hombre");
    var click_mujer = false
    var click_hombre = false
    var boton = $("#ingresar")



    $(mujer).click(function(){
        $(mujer).css("transform", "scale(1.1, 1.1)");
        $(hombre).css("transform", "scale(0.9, 0.9)");
        $(mujer).css("transition-duration", "0.5s");
        $(hombre).css("transition-duration", "0.5s");
        click_mujer = true
        click_hombre = true
    });
    $(hombre).click(function(){
        $(hombre).css("transform", "scale(1.1, 1.1)");
        $(mujer).css("transform", "scale(0.9, 0.9)");
        $(mujer).css("transition-duration", "0.5s");
        $(hombre).css("transition-duration", "0.5s");
        click_hombre = true
        click_mujer = true
    });

    
    $(hombre).hover(function(){
        if (click_mujer == false){
            $(hombre).css("transform", "scale(1.1, 1.1)");
            $(mujer).css("transform", "scale(0.9, 0.9)");
            $(hombre).css("transition-duration", "0.5s");
            $(mujer).css("transition-duration", "0.5s")};}
    


        , function(){
        if (click_mujer == false){
            $(hombre).css("transform", "scale(1, 1)");
            $(mujer).css("transform", "scale(1, 1)");
            $(hombre).css("transition-duration", "0.5s");
            $(mujer).css("transition-duration", "0.5s")};}

    );

    $(mujer).hover(function(){
        if (click_hombre == false){
            $(mujer).css("transform", "scale(1.1, 1.1)");
            $(hombre).css("transform", "scale(0.9, 0.9)");
            $(mujer).css("transition-duration", "0.5s");
            $(hombre).css("transition-duration", "0.5s")};}
    


        , function(){
        if (click_hombre == false){
            $(mujer).css("transform", "scale(1, 1)");
            $(hombre).css("transform", "scale(1, 1)");
            $(mujer).css("transition-duration", "0.5s");
            $(hombre).css("transition-duration", "0.5s")};}

    );

    $(boton).hover(function(){
            $(boton).css("background", "#fff8ef");
            $(boton).css("border", "0px");
            $(boton).css("cursor", "pointer");
            $(boton).css("transition-duration", "0.5s")}
            
 
    


        , function(){
            $(boton).css("background", "#f8e9d3");
            $(boton).css("transition-duration", "0.2s")}

    );





});
