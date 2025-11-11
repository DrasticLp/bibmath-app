alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 chiffre = '0123456789';


function decalage(entree,cle)
{
	lettre=alphabet.indexOf(entree);
	indice=chiffre.indexOf(cle);
    if ( (lettre==-1) || (indice==-1) ) return entree;
    else 
    {
    	lettre=(lettre+indice)%26;
    }
   return alphabet.charAt(lettre);
}

function antidecalage(entree,cle)
{
	lettre=alphabet.indexOf(entree);
	indice=chiffre.indexOf(cle);
    if ( (lettre==-1) || (indice==-1) ) return entree;
    else 
    {
    	lettre=(lettre-indice)%26;
    }
   return alphabet.charAt(lettre);
}

function coder(entree,cle)
{
 
 /* On commence par rechercher la longueur de la clé*/
 longueur=cle.length;
 entree=formate_entree(entree);
 retour="";
 for (i=0;i<entree.length;i++)
     retour+=decalage(entree.charAt(i),cle.charAt(i%longueur));
	 
 return retour;
}	

function decoder(entree,cle)
{
 /* On commence par rechercher la longueur de la clé*/
 longueur=cle.length;
 entree=formate_entree(entree);
 retour="";
 for (i=0;i<entree.length;i++)
     retour+=antidecalage(entree.charAt(i),cle.charAt(i%longueur));
 return retour;	
}