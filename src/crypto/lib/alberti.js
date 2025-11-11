var canvas  = document.querySelector('#canvas-alberti');
var context = canvas.getContext('2d');
var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var alphadis='AWVSFDLIEBHKNRJQZGMXPUCOTY';
var cle,clair;
var position=0;
var encours;
var decalagepetitdisque=0;
var nbavpermut=4;   /* Nombre de tours avant la permutation du cylindre */
var nbiterations=20;  /* Nombre d'itérations où on décale le disque */
var tpsattente=1500;  /* Temps d'attente entre le chiffrement de deux lettres en millisecondes

   
 //   boolean marquage;   /* Est-ce que le dessin doit marquer qqch de particulier */
 //   int posmarquage;    /* Quel caractère faut-il marquer!*/
    
var COLLETDISKLARGE = "white";
var  COLFONDDISKLARGE = "rgb(212,106,106)";    
var  COLLETDISKCOURT = "white";
var  COLFONDDISKCOURT = "rgb(255,170,170)";
var  COLLETSURLIGNE = "rgba(85,0,0,1)";
var  RAYDISKLARGE=200;
var  RAYDISKCOURT=150;
var  RAYDISKULTRACOURT=100;
var  coinx=20;
var  coiny=20;
var  centrex=coinx+RAYDISKLARGE;
var  centrey=coiny+RAYDISKLARGE;
var  DECALAGE=Math.PI/13;
var  ECARTX = 25;
var  ECARTY = 12;
var  ARC=15;
var  iterations=0;
    
function dessine()
{
	var decalagex=canvas.width/30;
	var decalagey=canvas.height/30;
	var i,j;

	/* On commence par tout effacer */
	context.clearRect(0,0,canvas.width,canvas.height);
	
	
	/* On fixe la fonte */
	
	context.font = "normal 12pt Courier,monospace";					

	/* D'abord, on dessine les disques*/
	context.fillStyle=COLFONDDISKLARGE;
	context.beginPath();
	context.arc(centrex,centrey,RAYDISKLARGE,0,2*Math.PI);
	context.fill();

	context.fillStyle=COLFONDDISKCOURT;
	context.beginPath();
	context.arc(centrex,centrey,RAYDISKCOURT,0,2*Math.PI);
	context.fill();
	
	context.fillStyle="white";
	context.beginPath();
	context.arc(centrex,centrey,RAYDISKULTRACOURT,0,2*Math.PI);
	context.fill();

	/* On dessine les lettres du grand cercle
		et du petit cercle */
	context.fillStyle=COLLETDISKLARGE;
	context.textAlign="center";
	context.textBaseline="middle";
	for (i=0;i<26;i++)
	{
		context.fillText(alphabet[i],Math.cos(i*DECALAGE)*(RAYDISKLARGE-ECARTX)+centrex,Math.sin(i*DECALAGE)*(RAYDISKLARGE-ECARTX)+centrey);
	}
	context.fillStyle=COLLETDISKCOURT;
	for (i=0;i<26;i++)
	{
		context.fillText(alphadis[(i+decalagepetitdisque)%26],Math.cos(i*DECALAGE)*(RAYDISKCOURT-ECARTX)+centrex,Math.sin(i*DECALAGE)*(RAYDISKCOURT-ECARTX)+centrey);
	}
	
	if (encours==1)
	{
		// On marque la lettre qu'on est en train de chiffrer!
		context.fillStyle=COLLETSURLIGNE;
		context.beginPath();
		lettre=alphabet.indexOf(clair.charAt(iterations));
		context.arc(centrex,centrey,RAYDISKLARGE,(lettre+0.5)*DECALAGE,(lettre-0.5)*DECALAGE,true);
		context.lineTo(centrex+RAYDISKULTRACOURT*Math.cos((lettre-0.5)*DECALAGE),centrey+RAYDISKULTRACOURT*Math.sin((lettre-0.5)*DECALAGE));
		context.arc(centrex,centrey,RAYDISKULTRACOURT,(lettre-0.5)*DECALAGE,(lettre+0.5)*DECALAGE);
		context.lineTo(centrex+RAYDISKLARGE*Math.cos((lettre+0.5)*DECALAGE),centrey+RAYDISKLARGE*Math.sin((lettre+0.5)*DECALAGE));
		context.stroke();
				
		
		iterations++;
		if ( (iterations%4)==3) decalagepetitdisque++;
		rotanim=1;
		
		
	}
	
	
}

function tourne_petit_disque()
{
	context.fillStyle=COLFONDDISKCOURT;
	context.beginPath();
	context.arc(centrex,centrey,RAYDISKCOURT,0,2*Math.PI);
	context.fill();
	
	context.fillStyle="white";
	context.beginPath();
	context.arc(centrex,centrey,RAYDISKULTRACOURT,0,2*Math.PI);
	context.fill();

	context.fillStyle=COLLETDISKCOURT;
	for (i=0;i<26;i++)
	{
		context.fillText(alphadis[(i+decalagepetitdisque)%26],Math.cos((i+rotanim)*DECALAGE)*(RAYDISKCOURT-ECARTX)+centrex,Math.sin((i+rotanim)*DECALAGE)*(RAYDISKCOURT-ECARTX)+centrey);
	}	
	
	context.fillStyle=COLLETSURLIGNE;
	context.beginPath();
	lettre=alphabet.indexOf(clair.charAt(iterations-1));
	context.arc(centrex,centrey,RAYDISKLARGE,(lettre+0.5)*DECALAGE,(lettre-0.5)*DECALAGE,true);
	context.lineTo(centrex+RAYDISKULTRACOURT*Math.cos((lettre-0.5)*DECALAGE),centrey+RAYDISKULTRACOURT*Math.sin((lettre-0.5)*DECALAGE));
	context.arc(centrex,centrey,RAYDISKULTRACOURT,(lettre-0.5)*DECALAGE,(lettre+0.5)*DECALAGE);
	context.lineTo(centrex+RAYDISKLARGE*Math.cos((lettre+0.5)*DECALAGE),centrey+RAYDISKLARGE*Math.sin((lettre+0.5)*DECALAGE));
	context.stroke();
	
	rotanim=rotanim-1/nbiterations;
	console.log(rotanim);
	
}

function coder()
{
	//On met en forme le clair et la clé
	
	stop_anim();
	
	clair=formate_entree(document.alberti.entree.value);
	document.alberti.entree.value=clair;

	// On calcule le texte chiffré

	result='';
	decalagecrypto=0;
	decalagepetitdisque=0;
	encours=1;
  
	for (var i=0; i<clair.length; i++)
	{
		chiffreencours=alphabet.indexOf(clair.charAt(i));
		ajout=alphadis[ (chiffreencours+decalagecrypto)%26];
		result=result+ajout;
		
		// On lance le dessin!
		setTimeout(dessine,i*tpsattente);
		if ( (i%4)==3) 
		{
			// On fait tourner le disque
			rotanim=0;
			for (j=0;j<nbiterations;j++)
			{
				setTimeout(tourne_petit_disque,i*(tpsattente)+tpsattente/2+j*(tpsattente/2)/nbiterations);
			}
			decalagecrypto++;

		}
	}	
	
	setTimeout(stop_anim,(clair.length+1)*tpsattente);
	return(formate_sortie(result));

}

function stop_anim()
{
	encours=0;
	iterations=0;
	decalagepetitdisque=0;
	clearTimeout(dessine);
	clearTimeout(tourne_petit_disque);
}

encours=0;
dessine();



