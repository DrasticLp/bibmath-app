var canvas  = document.querySelector('#canvas-vigenere');

var context = canvas.getContext('2d');
var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var cle,clair;
var position=0;
var encours;

function dessine()
{
	var decalagex=canvas.width/30;
	var decalagey=canvas.height/30;
	var i,j;

	/* On commence par tout effacer */
	context.fillStyle="white";
	context.fillRect(0,0,canvas.width,canvas.height);
	
	if (encours==1)
	{
		/* Il faut dessiner la ligne et la colonne sélectionnés!*/
		lig=alphabet.indexOf(clair.charAt(position));
		col=alphabet.indexOf(cle.charAt(position%cle.length));
		
		context.font = "normal 12 pt Courier, monospace";
		context.fillStyle="black";
		context.fillText('Je chiffre '+clair.charAt(position)+' avec comme clé la lettre '+cle.charAt(position%cle.length),10,canvas.height-20);
		
		context.fillStyle="rgb(255,170,170)";
		context.fillRect(0,lig*decalagey+decalagey+2,26*decalagex+2*decalagex,decalagey);
		context.fillStyle="rgb(255,170,170)";
		context.fillRect(col*decalagex+2*decalagex-2,0,decalagex,26*decalagey+2*decalagey-10);
		position++;
		if (position>=clair.length) position=0;
		

		
	}
	
	/* On fixe la fonte */
	
	context.font = "normal 12pt Courier,monospace";					
	context.fillStyle="black";
	
	/* On dessine le tableau principal */
	
	
	for (i=0;i<=25;i++)
	    for (j=0;j<=25;j++)
		{
			context.fillText(alphabet[(i+j)%26],j*decalagex+2*decalagex,i*decalagey+2*decalagey);
		}
	
	/* On dessine la ligne en haut et celle sur le côté */
	context.fillStyle="rgb(128,21,21)";
	for (j=0;j<=25;j++)
	{
		context.fillText(alphabet[j],j*decalagex+2*decalagex,decalagey);
	}

	context.fillStyle="rgb(76,153,0)";
	for (i=0;i<=25;i++)
	{
		context.fillText(alphabet[i],decalagex,i*decalagey+2*decalagey);
	}
}

function coder()
{
	var ligneencours,colencours;
	
	
	//On met en forme le clair et la clé
	
	clair=formate_entree(document.vigenere.entree.value);
	cle=formate_entree(document.vigenere.cle.value);
	document.vigenere.entree.value=clair;
	document.vigenere.cle.value=cle;

	// On calcule le texte chiffré

	result='';
  
	for (i=0; i<clair.length; i++)
	{
		ligneencours=alphabet.indexOf(clair.charAt(i));
		colencours=alphabet.indexOf(cle.charAt(i%cle.length));
		ajout=alphabet[ (ligneencours+colencours)%26];
		result=result+ajout;
		
	}
	
	// On met en route l'animation

	clearInterval(dessine); // Au cas où elle n'était pas proprement arrêtée...
	
	position=0;
	encours=1;
	dessine();  // Pour ne pas qu'on attende
	setInterval(dessine,2000);  // Toutes les deux secondes!
	
	return formate_sortie(result);			

}

function stop_anim()
{
	position=0;
	encours=0;
	clearInterval(dessine);
	dessine();
}
	
encours=0;
dessine();
