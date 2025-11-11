var nul=new Array("LUNDI","TABLE","BALLON","REPERE","SEL","POIVRE","CRAYON","REGARD");

var alphabet_parcours='ABCDEFGHIJKLMNOPQRSTUVWXYZ ';

function formate_entree_parcours(entree)
{
	  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
	  var text;
	  var i;

	// On met en majuscule
  text=	stripVowelAccent(entree);
  text=text.toUpperCase();	
	
  // On supprime tous les caractères incodables du message...
 
  for (i=0; i<text.length; i++)
  {
    if (alphabet.indexOf(text.charAt(i)) == -1)
    {
      text=text.replace(text.charAt(i),'');
    }
  }
  
  return text;
  
}


function chiffrer(entree)
{
	var text;
	var nbmots;
	var debutmot;
	var tableau=new Array(5);
	var nblignes;
	var indicedebut=0;
	var indicefin=0;
	var fin;
	var i,j;
	var sortie;
	
	text=formate_entree_parcours(entree.value);
	
	// On commence par repérer le nombre de mots de la chaine...
	nbmots=0;
	debutmot=0;
	for (var i=0;i<text.length;i++)
	{
		if (text.charAt(i)==' ')
		{
			if (debutmot>0)
			{
				debutmot=0;
				nbmots++;
			}
		}
		else
		{
			debutmot++;	
		}
	}
//	if (text.charAt(text.length-1)!=' ') nbmots++;
	
	// On a repéré le nombre de mots, on peut créer le tableau...
	
	if (nbmots%5==0) nblignes=nbmots/5; else nblignes=Math.floor(nbmots/5)+1;
	
	for (var j=0;j<5;j++)
	{
		tableau[j]=new Array(nblignes);	
	}
	
	i=0;
	j=0;
	indicefin=-1;
	while (indicefin<text.length)
		{
			indicedebut=indicefin+1;
			while (text.charAt(indicedebut)==' ') indicedebut++;
			indicefin=indicedebut+1;
			fin=0;
			while (fin==0) 
			{
				if (indicefin<text.length) 
				{
					 if  (text.charAt(indicefin)==' ') fin=1;
				}
				else fin=1;
				if (fin==0) indicefin++;
			}
			tableau[j][i]=text.substr(indicedebut,indicefin-indicedebut);
			j++;
			if (j>4)
			{ 
				j=0;
				i++;
			}
		}

	
	// On ajoute éventuellement des nuls...
	if (j!=0)
	{
		while (j<5) 
		{
			tableau[j][i]=nul[Math.floor(nul.length*Math.random())];
			j++;
		}
	}
		
	
	// On relève le tableau en ajoutant les nuls...
	sortie="";
	// 1ère colonne
	for (i=nblignes-1;i>=0;i--)
	{
		sortie+=tableau[0][i]+" ";
	}
	
	sortie+=nul[Math.floor(nul.length*Math.random())]+" ";
	
	// 2ème colonne
	for (i=0;i<nblignes;i++)
	{
		sortie+=tableau[1][i]+" ";
	}

	sortie+=nul[Math.floor(nul.length*Math.random())]+" ";

	// 5ème colonne
	for (i=nblignes-1;i>=0;i--)
	{
		sortie+=tableau[4][i]+" ";
	}

	sortie+=nul[Math.floor(nul.length*Math.random())]+" ";


	// 4ème colonne
	for (i=0;i<nblignes;i++)
	{
		sortie+=tableau[3][i]+" ";
	}

	sortie+=nul[Math.floor(nul.length*Math.random())]+" ";


	// 3ème colonne
	for (i=nblignes-1;i>=0;i--)
	{
		sortie+=tableau[2][i]+" ";
	}

	sortie+=nul[Math.floor(nul.length*Math.random())]+" ";

	
	return sortie;
}

function dechiffrer(entree)
{
	var text;
	var nbmots;
	var debutmot;
	var tableau=new Array(5);
	var nblignes;
	var mots=new Array();
	var indicefin,indicedebut;
	var indice;
	var sortie;
	var i,j;

	text=formate_entree_parcours(entree.value);
	
	// On commence par repérer le nombre de mots de la chaine...
	nbmots=0;
	debutmot=0;
	for (var i=0;i<text.length;i++)
	{
		if (text.charAt(i)==' ')
		{
			if (debutmot>0)
			{
				debutmot=0;
				nbmots++;
			}
		}
		else
		{
			debutmot++;	
		}
	}
	
	// On met les mots dans le tableau...
	if ((nbmots%5)!=0)
	  {
	  	 alert("Erreur. Le nombre de mots du texte n'est pas divisible par 5");
	     return("Erreur");
	  }
	  
   nblignes=nbmots/5-1;
   mots=new Array(nblignes*5);
   
	
	for (var j=0;j<5;j++)
	{
		tableau[j]=new Array(nblignes);	
	}
	
	
	indice=0;
	quelmot=1;
	indicefin=-1;
	while (indicefin<text.length)
		{
			indicedebut=indicefin+1;
			while (text.charAt(indicedebut)==' ') indicedebut++;
			indicefin=indicedebut+1;
			fin=0;
			while (fin==0) 
			{
				if (indicefin<text.length) 
				{
					 if  (text.charAt(indicefin)==' ') fin=1;
				}
				else fin=1;
				if (fin==0) indicefin++;
			}
			if ( (quelmot%(nblignes+1))!=0)
			  {
			  	mots[indice]=text.substr(indicedebut,indicefin-indicedebut);
			  	indice++;
			  }
			quelmot++;
			
		}	
	
  // On parcourt le tableau...
  // 1ère colonne
  
  indice=0;
  
	for (i=nblignes-1;i>=0;i--)
	{
		tableau[0][i]=mots[indice++];
	}
	
	
	// 2ème colonne
	for (i=0;i<nblignes;i++)
	{
		tableau[1][i]=mots[indice++];
	}


	// 5ème colonne
	for (i=nblignes-1;i>=0;i--)
	{
		tableau[4][i]=mots[indice++];
	}



	// 4ème colonne
	for (i=0;i<nblignes;i++)
	{
		tableau[3][i]=mots[indice++];
	}



	// 3ème colonne
	for (i=nblignes-1;i>=0;i--)
	{
		tableau[2][i]=mots[indice++];
	}  	
	
	// Puis on reparcourt le tableau
	sortie="";
   for (i=0;i<nblignes;i++)
   	 for (j=0;j<5;j++)
   	   sortie+=tableau[j][i]+" ";
   	   
   return sortie;	   
	
	
}
