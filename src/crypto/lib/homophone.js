var cleinitiale= new Array(9,12,33,47,53,67,78,92,48,81,13,41,62,1,3,45,79,14,16,24,44,46,55,57,64,74,82,87,98,10,31,6,25,23,39,50,56,65,68,32,70,73,83,88,93,15,4,26,37,51,84,22,27,18,58,59,66,71,91
,0,5,7,54,72,90,99,38,95,94,29,35,40,42,77,80,11,19,36,76,86,96,17,20,30,43,49,69,75,85,97,8,61,63,34,60,89,28,21,52,2);
var cle=new Array();

for (var i=0;i<100;i++) cle[i]=cleinitiale[i];


var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

console.log('test');

var index=new Array(0,8,9,12,16,32,33,34,35,42,43,44,49,52,59,64,67,68,74,82,89,95,96,97,98,99,100);

var letter=new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

// La fonction suivante génère une clé, en prenant le modèle initial et en effectuant 500 transpositions;

function generercle()
{
	var pos1;
	var pos2;
	var swap;
	
	// On fait les permutations.
	
	for (var i=0;i<100;i++) cle[i]=cleinitiale[i];

	for (var i=0;i<500;i++)
	{
		pos1=Math.floor(Math.random()*100);
		pos2=Math.floor(Math.random()*100);
		swap=cle[pos1];
		cle[pos1]=cle[pos2];
		cle[pos2]=swap;
	}
	
	
    for(var j=0;j<100;j++)
	{	
				if(cle[j]<10)
				{
				document.homophone.elements[1+j].value="0"+cle[j];
				}
				else
				{
				document.homophone.elements[j+1].value=cle[j];
				}
			
	}
	
	
}


// On vérifie qu'il n'y a pas de redondance dans la clé…


function verifiercle()
{
	var resultat=true;
	for (var i=0;i<100;i++)
	{
		for (var j=i+1;j<100;j++)
		{
			if (cle[i]==cle[j])
			{
				 alert('Le nombre '+cle[i]+' est utilisé deux fois');
			     resultat=false;
			}
		}
	}
	return resultat;
}

function coder()
{
	var text,result;
	
	
  text=formate_entree(document.homophone.entree.value);
  
    // On commence par refabriquer la clé…
  for(var j=0;j<100;j++)
	{	
			cle[j]=document.homophone.elements[j+1].value;
	}	
	
	// Puis on la vérifie
  
  if (verifiercle()==false) 
  {
	  return '';  // verifiercle() affiche déjà un message d'erreur si la clé n'est pas valide!
  }
    

			
  result='';
  
  for (i=0; i<text.length; i++)
  {
    j=alphabet.indexOf(text.charAt(i));
    ajout=cle[Math.floor(Math.random()*(index[j+1]-index[j])+index[j])];
	result=result+ajout;
  }
  
  return formate_sortie(result);			
}

function decoder()
{
	var text,result;
	result='';
	
	    // On commence par refabriquer la clé…
  for(var j=0;j<100;j++)
	{	
			cle[j]=document.homophone.elements[j+1].value;
	}	
	
	// Puis on la vérifie
  
  if (verifiercle()==false) return '';
	
	
	text=formate_chiffre(document.homophone.sortie.value);
	for (i=0;i<text.length/2;i++)
	{
		ou=eval(text.substr(2*i,2));
		if ( (ou>=0) && (ou<100) )
		for(var j=0;j<26;j++)
	    {
	  	  for(var k=index[j];k<index[j+1];k++)
	   	  {
		  	 if(cle[k]==ou)
			 {
			 	result=result+alphabet.charAt(j);
			 }
		  }
	
	     }
	}
	return result;
}	