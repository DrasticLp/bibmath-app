var nbcrans = [
  47,
  53,
  59,
  61,
  64,
  65,
  67,
  69,
  71,
  73
]; // Le nombre de crans de chaque roue
/* On définit et on initialise les roues! */
var roues = new Array(10);
for (i = 0; i < 10; i++)
{
  roues[i] = new Array(nbcrans[i]);
  for (j = 0; j < nbcrans[i]; roues[i][j++] = Math.floor(Math.random() * 2));
}
var positionroues = 1; /* La positionroues des roues */
/*Le contexte graphique */
var canvas = document.querySelector('#canvas-gschreiber');
var context = canvas.getContext('2d');
var HAUTEURROUE = 80;
var LARGEURROUE = 20;
var ECARTROUE = 10;
var DEBUTHAUT = 40;
var DECALAGEROUE2 = 170;
var DECALAGEINTERRUPTEUR = 320;
var HAUTEURINTERRUPTEUR = 20;
var COULEURPLEINE = 'red';
var COULEURLEGERE = 'lightgrey';
var XTEXTE1=150;
var YTEXTE1=20;
var XTEXTE2=200;
var YTEXTE2=140;
var XTEXTE3=100;
var YTEXTE3=200;
var YTEXTE4=460;
var XTEXTE4=80;

var couleurinterrup=new Array(5);
couleurinterrup[0]="red";
couleurinterrup[1]="blue";
couleurinterrup[2]="brown";
couleurinterrup[3]="magenta";
couleurinterrup[4]="forestgreen";

function dessine()
{
	var centrex = canvas.width / 2;
  context.clearRect(0, 0, canvas.width, canvas.height);
  // On commence par dessiner les cinq premières roues
  for (i = 0; i < 5; i++)
  {
    context.strokeStyle='black';
    context.beginPath();
    context.moveTo(centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - LARGEURROUE / 2, DEBUTHAUT);
    context.lineTo(centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - LARGEURROUE / 2, DEBUTHAUT + HAUTEURROUE);
    context.lineTo(centrex + (i - 2) * (LARGEURROUE + ECARTROUE) + LARGEURROUE / 2, DEBUTHAUT + HAUTEURROUE);
    context.lineTo(centrex + (i - 2) * (LARGEURROUE + ECARTROUE) + LARGEURROUE / 2, DEBUTHAUT);
    context.lineTo(centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - LARGEURROUE / 2, DEBUTHAUT);
    context.stroke();
    context.closePath();
    context.font = '18px Helvetica';
    context.fillStyle = COULEURPLEINE;
    context.fillText(roues[i][positionroues % nbcrans[i]], centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - 4, DEBUTHAUT + HAUTEURROUE / 2 + 4);
    context.fillStyle = COULEURLEGERE;
    context.fillText(roues[i][(positionroues - 1) % nbcrans[i]], centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - 4, DEBUTHAUT + HAUTEURROUE / 5 + 4);
    context.fillText(roues[i][(positionroues + 1) % nbcrans[i]], centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - 4, DEBUTHAUT + 4 * HAUTEURROUE / 5 + 4);
  } // On dessine les 5 roues suivantes

  for (i = 0; i < 5; i++)
  {
    context.strokeStyle='black';    
    context.beginPath();
    context.moveTo(centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - LARGEURROUE / 2, DECALAGEROUE2 + DEBUTHAUT);
    context.lineTo(centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - LARGEURROUE / 2, DECALAGEROUE2 + DEBUTHAUT + HAUTEURROUE);
    context.lineTo(centrex + (i - 2) * (LARGEURROUE + ECARTROUE) + LARGEURROUE / 2, DECALAGEROUE2 + DEBUTHAUT + HAUTEURROUE);
    context.lineTo(centrex + (i - 2) * (LARGEURROUE + ECARTROUE) + LARGEURROUE / 2, DECALAGEROUE2 + DEBUTHAUT);
    context.lineTo(centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - LARGEURROUE / 2, DECALAGEROUE2 + DEBUTHAUT);
    context.stroke();
    context.closePath();
    context.font = '18px Helvetica';
    context.fillStyle = couleurinterrup[i];
    context.fillText(roues[i + 5][positionroues % nbcrans[i + 5]], centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - 4, DECALAGEROUE2 + DEBUTHAUT + HAUTEURROUE / 2 + 4);
    context.fillStyle = COULEURLEGERE;
    context.fillText(roues[i + 5][(positionroues - 1) % nbcrans[i + 5]], centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - 4, DECALAGEROUE2 + DEBUTHAUT + HAUTEURROUE / 5 + 4);
    context.fillText(roues[i + 5][(positionroues + 1) % nbcrans[i + 5]], centrex + (i - 2) * (LARGEURROUE + ECARTROUE) - 4, DECALAGEROUE2 + DEBUTHAUT + 4 * HAUTEURROUE / 5 + 4);
  }
  
  // On dessine le circuit des permutations

  for (i = 0; i < 5; i++)
  {
    k=4-i; // Symétrie
    for (j = 0; j < 5; j++)
    {
      if ((k != j) && (j != k+ 1) && (j != k - 4))
      {
        // Dans ce cas, on descend juste une ligne droite
        context.strokeStyle = 'black';
        context.beginPath();
        context.moveTo(centrex + (j - 2) * (LARGEURROUE + ECARTROUE), DECALAGEINTERRUPTEUR + i * HAUTEURINTERRUPTEUR);
        context.lineTo(centrex + (j - 2) * (LARGEURROUE + ECARTROUE) , DECALAGEINTERRUPTEUR + (i + 1) * HAUTEURINTERRUPTEUR);
        context.stroke();
        context.closePath();
      }
    }    // On étudie ensuite les interrupteurs ouverts ou fermés

    if (k == 4)
    {
      j = 0;
    } 
    else
    {
      j = k + 1;
    }
    if (roues[5 + i][positionroues % nbcrans[5 + i]] == 1)
    {
      // Il faut faire un trait rouge entre les deux circuits
      context.strokeStyle = couleurinterrup[i];
      context.beginPath();
      context.moveTo(centrex + (k - 2) * (LARGEURROUE + ECARTROUE), DECALAGEINTERRUPTEUR + i * HAUTEURINTERRUPTEUR);
      context.lineTo(centrex + (j - 2) * (LARGEURROUE + ECARTROUE), DECALAGEINTERRUPTEUR + (i + 1) * HAUTEURINTERRUPTEUR);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(centrex + (j - 2) * (LARGEURROUE + ECARTROUE) , DECALAGEINTERRUPTEUR + i * HAUTEURINTERRUPTEUR);
      context.lineTo(centrex + (k - 2) * (LARGEURROUE + ECARTROUE) , DECALAGEINTERRUPTEUR + (i + 1) * HAUTEURINTERRUPTEUR);
      context.stroke();
      context.closePath();
    } 
    else          
    {
      // On se contente d'un trait droit!
      context.strokeStyle = couleurinterrup[i];
      context.beginPath();
      context.moveTo(centrex + (k - 2) * (LARGEURROUE + ECARTROUE) , DECALAGEINTERRUPTEUR + i * HAUTEURINTERRUPTEUR);
      context.lineTo(centrex + (k - 2) * (LARGEURROUE + ECARTROUE) , DECALAGEINTERRUPTEUR + (i + 1) * HAUTEURINTERRUPTEUR);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(centrex + (j - 2) * (LARGEURROUE + ECARTROUE) , DECALAGEINTERRUPTEUR + i * HAUTEURINTERRUPTEUR);
      context.lineTo(centrex + (j - 2) * (LARGEURROUE + ECARTROUE), DECALAGEINTERRUPTEUR + (i + 1) * HAUTEURINTERRUPTEUR);
      context.stroke();
      context.closePath();
    }
  }
}

function xorchaine(a,b)
{
	if ((a==0) && (b==0)) return '0';
	if ((a==1) && (b==0)) return '1';
	if ((a==0) && (b==1)) return '1';
	return '0';
}

function chiffrer(indice)
{
	dessine(); // On efface tout, au cas où!
	var messageinitial=lettres[indice][1];
	var messageetape1='';
	context.fillStyle='black';
	context.font='18px Helvetica';
	context.fillText(lettres[indice][0]+" est codé "+messageinitial,XTEXTE1,YTEXTE1);
	// On fait la première étape de chiffrement
	for (i=0;i<5;i++)
		messageetape1=messageetape1+xorchaine(messageinitial.charAt(i),roues[i][positionroues % nbcrans[i]]);
	// On écrit l'addition et le résultat
	var cle='';
	for (i=0;i<5;i++) cle=cle+roues[i][positionroues % nbcrans[i]];
	console.log(positionroues);
	context.fillText(messageinitial,XTEXTE2,YTEXTE2);
	context.fillText('+',XTEXTE2-20,YTEXTE2+20);
	context.fillText(cle,XTEXTE2,YTEXTE2+20);
	context.strokestyle="black";
	context.beginPath();
	context.moveTo(XTEXTE2-25,YTEXTE2+25);
	context.lineTo(XTEXTE2+55,YTEXTE2+25);
	context.stroke();
	context.closePath();
	context.fillText(messageetape1,XTEXTE2,YTEXTE2+40);
	context.fillText("Après l'addition, on obtient "+messageetape1,XTEXTE3,YTEXTE3);
	// On fait la permutation, et on écrit le résultat!
	permutation=new Array(6);
	permutation[0]=new Array(5);
	for (i=0;i<5;i++) permutation[0][i]=messageetape1.charAt(i);
	for (i = 0; i < 5; i++)
	{
		permutation[i+1]=new Array();
		k=4-i; // Symétrie
		for (j = 0; j < 5; j++)
		{
		if ((k != j) && (j != k+ 1) && (j != k - 4))
			{
				permutation[i+1][j]=permutation[i][j];
			}
		}    // On étudie ensuite les interrupteurs ouverts ou fermés

		if (k == 4)
		{
			j = 0;
		} 
		else
		{
			j = k + 1;
		}	
		if (roues[5 + i][positionroues % nbcrans[5 + i]] == 1)
		{
			// Il y a échange  
			permutation[i+1][j]=permutation[i][k];
			permutation[i+1][k]=permutation[i][j];
		}
		else
		{
			// Pas d'échange
			permutation[i+1][j]=permutation[i][j];
			permutation[i+1][k]=permutation[i][k]; 
		} 	
		console.log(permutation[i+1]);
	}
	for (i=0;i<5;i++)
	{
		context.fillText(permutation[0][i],canvas.width/2 + (i - 2) * (LARGEURROUE + ECARTROUE)-5, DECALAGEINTERRUPTEUR -7);
		context.fillText(permutation[5][i],canvas.width/2 + (i - 2) * (LARGEURROUE + ECARTROUE)-5, DECALAGEINTERRUPTEUR + (6) * HAUTEURINTERRUPTEUR);
	}
	var messagefinal=permutation[5].toString();
	messagefinal=messagefinal.replace(/,/g,"");
	context.fillText("Après permutation, on obtient "+messagefinal,XTEXTE4,YTEXTE4);
}

function tourner()
{
	positionroues++;
	dessine();
}

dessine();
