function verif_cle(macle)
{
    if ((macle<1000) || (macle>9999))
    {
    	alert("La clé doit être comprise entre 1000 et 9999");
    	return false;
    }
    else return true;
}

function inverse(chaine)
{
	var retour="";
	var i;
	
	for (i=chaine.length-1;i>=0;i--)
	  retour=retour+chaine.charAt(i);
	  
	return retour;
}

function fabriquetable(macle)
{
	var chiffres=[ "ZERO", "UN", "DEUX", "TROIS", "QUATRE", "CINQ", "SIX", "SEPT", "HUIT", "NEUF"];
	var alphabet='ABCDEFGHIKLMNOPQRSTUVWXYZ';
	var substi=new Array(25);
	var deja=new Array(25);
	var i,j;
	var chiffre;
	var colonne,ligne;
	
	for (i=0;i<25;deja[i++]=0);
	
	colonne=ligne=0;
	for (j=3;j>=0;j--)
	{
		chiffre=Math.floor(macle/Math.pow(10,j));
		for (i=0;i<chiffres[chiffre].length;i++)
		{
			if (deja[alphabet.indexOf(chiffres[chiffre].charAt(i))]==0)
			{
		        deja[alphabet.indexOf(chiffres[chiffre].charAt(i))]=1;
		        substi[colonne*5+ligne]=chiffres[chiffre].charAt(i);
		        colonne++;
		        if (colonne>=5)
		        {
		        	colonne=0;
		        	ligne++;
		        }
			}
		}
		macle=macle-chiffre*Math.pow(10,j);
	}
	// On termine la clé....
	lequel=0;
	
	while (ligne<5)
	{
		while (colonne<5)
		{
			while ( (deja[lequel]==1) && (lequel<25) ) 
				lequel++;
		    substi[colonne*5+ligne]=alphabet.charAt(lequel);
		    deja[lequel]=1;
		    colonne++;
		}
		colonne=0;
		ligne++;
	}
	return substi;
}

function fabriquetabledechiffre(macle)
{
	var chiffres=[ "ZERO", "UN", "DEUX", "TROIS", "QUATRE", "CINQ", "SIX", "SEPT", "HUIT", "NEUF"];
	var alphabet='ABCDEFGHIKLMNOPQRSTUVWXYZ';
	var substi=new Array(25);
	var deja=new Array(25);
	var i,j;
	var chiffre;
	var colonne,ligne;
	
	for (i=0;i<25;deja[i++]=0);
	
	colonne=ligne=0;
	for (j=3;j>=0;j--)
	{
		chiffre=Math.floor(macle/Math.pow(10,j));
		for (i=0;i<chiffres[chiffre].length;i++)
		{
			if (deja[alphabet.indexOf(chiffres[chiffre].charAt(i))]==0)
			{
		        deja[alphabet.indexOf(chiffres[chiffre].charAt(i))]=1;
		        substi[alphabet.indexOf(chiffres[chiffre].charAt(i))]=alphabet.charAt(5*colonne+ligne);
		        colonne++;
		        if (colonne>=5)
		        {
		        	colonne=0;
		        	ligne++;
		        }
			}
		}
		macle=macle-chiffre*Math.pow(10,j);
	}
	// On termine la clé....
	lequel=0;
	
	while (ligne<5)
	{
		while (colonne<5)
		{
			while ( (deja[lequel]==1) && (lequel<25) ) 
				lequel++;
		    substi[lequel]=alphabet.charAt(colonne*5+ligne);
		    deja[lequel]=1;
		    colonne++;
		}
		colonne=0;
		ligne++;
	}	
	return substi;
}

function faire_substi(chaine,substi)
{
	var i;
	var retour;
	var alphabet='ABCDEFGHIKLMNOPQRSTUVWXYZ';

	
	retour="";
	
	for (i=0;i<chaine.length;i++)	
	{
		retour+=substi[alphabet.indexOf(chaine.charAt(i))];
	}
	return retour;
}
		 
	


function chiffrer(entree,cle,sens)
{
    var substi;
    var alphabet='ABCDEFGHIKLMNOPQRSTUVWXYZ';
    var macle=Math.floor(cle.value);
    var retour,monbloc;
    var taillebloc=new Array(4);
    var j,iterations;
    
    if (verif_cle(macle)==false) return;
    
    // On commence par fabriquer la table de substitution
    if (sens==0) substi=fabriquetable(macle);
    else substi=fabriquetabledechiffre(macle);
    // On détermine ensuite la taille des blocs
	for (j=3;j>=0;j--)
	{
		chiffre=Math.floor(macle/Math.pow(10,j));
		taillebloc[3-j]=chiffre;
		macle=macle-chiffre*Math.pow(10,j);		
	}    
	// C'est parti!
	j=0;
	iterations=0;
	retour="";
	var chaine=formate_entree_polybe(entree.value);
	
	while (j<chaine.length)
	{
		while (chaine.length<j+taillebloc[iterations%4])
		{
			// On rajoute des nulles si nécessaire...
			chaine+='X';	
		}
		monbloc=chaine.substr(j,taillebloc[iterations%4]);
		monbloc=inverse(monbloc);
		monbloc=faire_substi(monbloc,substi);
		retour+=monbloc;
		j=j+taillebloc[iterations%4]
		iterations++;		
	}
	
	
	return formate_sortie(retour);
  
}

