$('.epaule').click(function(){
$('.ptexte').hide();
var element =document.getElementById("ptexte1");
element.style.display = 'block';
console.log(this)
$('#epaule').toggle();

});



$('.coude').click(function(){
$('.ptexte').hide();
var element2 =document.getElementById("ptexte2");
element2.style.display = 'block';
$('#coude').toggle();
});

$('.poignet').click(function(){
$('.ptexte').hide();
var element3 =document.getElementById("ptexte3");
element3.style.display = 'block';
$('#poignet').toggle();
});

$('.hanche').click(function(){
$('.ptexte').hide();
var element4 =document.getElementById("ptexte4");
element4.style.display = 'block';
$('#hanche').toggle();
});

$('.genoux').click(function(){
$('.ptexte').hide();
var element5 =document.getElementById("ptexte5");
element5.style.display = 'block';
$('#genoux').toggle();
});

$('.cheville').click(function(){
$('.ptexte').hide();
var element6 =document.getElementById("ptexte6");
element6.style.display = 'block';
$('#cheville').toggle();
});