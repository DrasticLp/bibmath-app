var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Les 25 roues


var roues=['ABCEIGDJFVUYMHTQKZOLRXSPWN','ACDEHFIJKTLMOUVYGZNPQXRWSB',
'ADKOMJUBGEPHSCZINXFYQRTVWL','AEDCBIFGJHLKMRUOQVPTNWYXZS','AFNQUKDOPITJBRHCYSLWEMZVXG','AGPOCIXLURNDYZHWBJSQFKVMET',
'AHXJEZBNIKPVROGSYDULCFMQTW','AIHPJOBWKCVFZLQERYNSUMGTDX','AJDSKQOIVTZEFHGYUNLPMBXWCR','AKELBDFJGHONMTPRQSVZUXYWIC',
'ALTMSXVQPNOHUWDIZYCGKRFBEJ',
'AMNFLHQGCUJTBYPZKXISRDVEWO',
'ANCJILDHBMKGXUZTSWQYVORPFE',
'AODWPKJVIUQHZCTXBLEGNYRSMF',
'APBVHIYKSGUENTCXOWFQDRLJZM',
'AQJNUBTGIMWZRVLXCSHDEOKFPY',
'ARMYOFTHEUSZJXDPCWGQIBKLNV',
'ASMDCNEQBOZPLGVJRKYTFUIWXH',
'ATOJYLFXNGWHVCMIRBSEKUPDZQ',
'AUTRZXQLYIOVBPESNHJWMDGFCK',
'AVNKHRGOXEYBFSJMUDQCLZWTIP',
'AWVSFDLIEBHKNRJQZGMXPUCOTY',
'AXKWREVDTUFOYHMLSIQNJCPGBZ',
'AYJPXMVKBQWUGLOSTECHNZFRID',
'AZDNBUHYFWJLVGRCQMPSOEXTKI'];

// La position des 25 roues

var posroues=new Array(25);
var i;
for (i=0;i<25;i++) posroues[i]=0;

var canvas;
var context;

var COULEURFOND1='rgb(118,21,21)';
var COULEURFOND2='rgb(212,106,106)';
var HAUTEUR=20;
var LARGEURCYLINDRE=20;

// L'animation
var anim;
var montexte;
var rouecourante;


window.onload = function()
{
   
canvas = document.getElementById('canvas-jefferson');
context = canvas.getContext('2d');
context.font = '18px Helvetica';
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
	context.fillRect(0,canvas.height-2*HAUTEUR,25*LARGEURCYLINDRE,HAUTEUR);
	context.fillStyle='white';
  
	for (i=0;i<25;i++)
	{
		context.fillRect(i*LARGEURCYLINDRE,canvas.height-2*HAUTEUR,1,HAUTEUR);
		context.fillText(roues[i][posroues[i]],i*LARGEURCYLINDRE+LARGEURCYLINDRE/2,canvas.height-2*HAUTEUR+2);
	}
	// On dessine ensuite la deuxième ligne
	context.fillStyle=COULEURFOND2;
	context.fillRect(0,canvas.height-1*HAUTEUR,25*LARGEURCYLINDRE,HAUTEUR);
	context.fillStyle='white';
	
	for (i=0;i<25;i++)
	{
		context.fillRect(i*LARGEURCYLINDRE,canvas.height-1*HAUTEUR,1,HAUTEUR);
		context.fillText(roues[i][(posroues[i]+1)%26],i*LARGEURCYLINDRE+LARGEURCYLINDRE/2,canvas.height-1*HAUTEUR+2);
	}
}

function animation()
{
	if (roues[rouecourante][posroues[rouecourante]]!=montexte.charAt(rouecourante))
	{
		posroues[rouecourante]=(posroues[rouecourante]+1)%26;
	}
	else
	{
		rouecourante++;
		if ((rouecourante>=25) || (rouecourante>=montexte.length) ) 
		{
			console.log("arret");
			clearInterval(anim);
		}
	}
	dessine();
}


function chiffrer(texte)
{
	clearInterval(anim);
	montexte=formate_entree(texte);
	rouecourante=0;
	for (i=0;i<25;i++) posroues[i]=0;

	
	anim=setInterval(animation,100);
}



