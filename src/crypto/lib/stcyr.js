var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var alphabetdouble='ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';

var COULEURFOND1='rgb(118,21,21)';
var COULEURFOND2='rgb(212,106,106)';
var COULEURSURLIGNE='rgb(255,170,170)';
var HAUTEUR=13;
var LARGEURCYLINDRE=10;
var DEPART=120;

// L'animation
var anim;
var montexte;
var macle;
var lettre;
var decalage=0;
var objectif;
var tempsattente=0;



window.onload = function()
{
   
canvas = document.getElementById('canvas-stcyr');
context = canvas.getContext('2d');
context.font = '12px monospace';
context.textBaseline = "top";
context.textAlign = "center";

// Les différents paramètres

dessine();

}



function dessine()
{
	var i;	
	
	context.clearRect(0, 0, canvas.width, canvas.height); 
	// On commence par dessiner la première ligne
	context.fillStyle=COULEURFOND1;
	context.fillRect(DEPART,canvas.height-2*HAUTEUR,26*LARGEURCYLINDRE,HAUTEUR);
	// On dessine ensuite la deuxième ligne
	context.fillStyle=COULEURFOND2;
	context.fillRect(DEPART-decalage,canvas.height-1*HAUTEUR,52*LARGEURCYLINDRE,HAUTEUR);//

	// Est-ce que qqch est surligné?
  
  	if (objectif==decalage)
	{
		context.fillStyle=COULEURSURLIGNE;
		context.fillRect(DEPART,canvas.height-2*HAUTEUR,LARGEURCYLINDRE,2*HAUTEUR);
		context.fillRect(DEPART+alphabet.indexOf(montexte[lettre])*LARGEURCYLINDRE,canvas.height-2*HAUTEUR,LARGEURCYLINDRE,2*HAUTEUR);
	}
	
	// Les lettres
  
	context.fillStyle='white';
  
  
	for (i=0;i<alphabet.length;i++)
	{
		context.fillText(alphabet[i],DEPART+i*LARGEURCYLINDRE+LARGEURCYLINDRE/2,canvas.height-2*HAUTEUR+2);
	}

	
	for (i=0;i<alphabetdouble.length;i++)
	{
		context.fillText(alphabetdouble[i],DEPART+i*LARGEURCYLINDRE+LARGEURCYLINDRE/2-decalage,canvas.height-1*HAUTEUR+2);
	}
	
}

function animation()
{
	if (lettre>=montexte.length)
	{
			clearInterval(anim);
	}
	if ( (objectif==decalage) )
	{
		if (tempsattente==50) 
		{
			lettre++;
			objectif=alphabet.indexOf(macle[lettre%macle.length])*LARGEURCYLINDRE;
			tempsattente=0;
		}
		else tempsattente++;
	}
	else
	{
		if (decalage<objectif) decalage=decalage+1;
		else decalage=decalage-1;
		console.log(decalage);
		console.log(objectif);
	}
	dessine();
}


function anim_stcyr(texte,cle)
{
	console.log('test');
	clearInterval(anim);
	montexte=formate_entree(texte);
	macle=formate_entree(cle);
	
	lettre=0;
	decalage=0;
	objectif=alphabet.indexOf(macle[0])*LARGEURCYLINDRE;
	tempsattente=0;

	
	anim=setInterval(animation,20);
}



