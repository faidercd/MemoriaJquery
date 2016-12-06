var x;
x=$(document);
x.ready(cargaaletaria);


var vectorimagen=[];
valor1=0;
valor2=0;
xv1="";
xv2="";
turno=0;


function cargaaletaria(){
	for (i=0;i<10;i++){
		vectorimagen[i]=i+".jpg";
		
	}
k=0;
for (i=10;i<20;i++)
{
	vectorimagen[i]=k+".jpg";
	k++;
}

var aux="";

for (i=0;i<20;i++)
{
	var aletorio= Math.round(Math.random()*19);

	aux= vectorimagen[i];
	vectorimagen[i]=vectorimagen[aletorio];
	vectorimagen[aletorio]=aux;
}
var j=1;
for(i=0;i<20;i++){
	var z=$("#"+j+'a');
	z.attr("src",vectorimagen[i]);
	j++
}

ocultarimgs();
puntero();
}



function ocultarimgs(){
	for (i=1;i<21;i++){
	var x=$("#"+i+"a");
	x.hide("fast");
}
}

function puntero(){
	
	var uno=$("#1");
	uno.click(function(){
	 clicEn(1)
  	});

	var dos=$("#2");
	dos.click(function(){
	 clicEn(2)
  	});

  	var tres=$("#3");
	tres.click(function(){
	 clicEn(3)
  	});

  	var cuatro=$("#4");
	cuatro.click(function(){
	 clicEn(4)
  	});

  	var cinco=$("#5");
	cinco.click(function(){
	 clicEn(5)
  	});

  	var seis=$("#6");
	seis.click(function(){
	 clicEn(6)
  	});

  	var siete=$("#7");
	siete.click(function(){
	 clicEn(7)
  	});

	var ocho=$("#8");
	ocho.click(function(){
	 clicEn(8)
  	});

  	var nueve=$("#9");
	nueve.click(function(){
	clicEn(9)
  	});
 
 	var diez=$("#10");
	diez.click(function(){
	 clicEn(10)
  	});

	var once=$("#11");
	once.click(function(){
	 clicEn(11)
  	});

  	var doce=$("#12");
	doce.click(function(){
	 clicEn(12)
  	});

  	var trece=$("#13");
	trece.click(function(){
	 clicEn(13)
  	});

  	var catorce=$("#14");
	catorce.click(function(){
	 clicEn(14)
  	});

  	var quince=$("#15");
	quince.click(function(){
	 clicEn(15)
  	});

  	var dieciseis=$("#16");
	dieciseis.click(function(){
	 clicEn(16)
  	});

  	var diecisiete=$("#17");
	diecisiete.click(function(){
	 clicEn(17)
  	});

	var dieciocho=$("#18");
	dieciocho.click(function(){
	 clicEn(18)
  	});

  	var diecinueve=$("#19");
	diecinueve.click(function(){
	clicEn(19)
  	});

  	var veinte=$("#20");
	veinte.click(function(){
	 clicEn(20)
  	});
}

function clicEn(valor){
var x=$("#"+valor+"a")
x.show("slow");

if (turno==0){
	valor1=x.attr("src");
	turno=1;
	xv1=x;
}
else{
	valor2=x.attr("src");
	turno=0;
	xv2=x;
	//comparacion

	if (valor1!=valor2){
	xv1.hide("slow");
	xv2.hide("slow");
	}
}

}