$(document).ready(function(){

        let text = document.getElementById("heading-1").innerHTML; 
        document.getElementById("heading-1").innerHTML = text.replace("Voyager Cruises", "Welcome to Voyager Cruises, your adventure across the  seven seas.");

        // When the accordion is clicked, toggle info
        $("#ac-1").click(function(){
        $("#collapse1").collapse('toggle');
        });
        $("#ac-2").click(function(){
        $("#collapse2").collapse('toggle');
        });
        $("#ac-3").click(function(){
        $("#collapse3").collapse('toggle');
        });

});