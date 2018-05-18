function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

$(document).ready (function(){;

$("#talla").click(function(){
if(cotal.style.display == "none"){
    $("#cotal").show();
	}
	else {
	$("#cotal").hide();
	}
}); 

$("#thomas").click(function(){
if(cotho.style.display == "none"){
    $("#cotho").show();
	}
	else {
	$("#cotho").hide();
	}
}); 

$("#ingrid").click(function(){
if(coing.style.display == "none"){
    $("#coing").show();
	}
	else {
	$("#coing").hide();
	}
}); 

$("#anthony").click(function(){
if(coant.style.display == "none"){
    $("#coant").show();
	}
	else {
	$("#coant").hide();
	}
}); 
});
