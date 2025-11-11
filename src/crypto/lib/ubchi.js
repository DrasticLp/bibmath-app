// Retourne un tableau dont l'indice i 
// donne la position dans la clé
// du i-ème caractère par ordre alphabétique

function produire_tableau_cle(cle)
{
  var tableau=new Array(cle.length);
  var pos,i,j;
  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  
  pos=0;
  
  for (j=0;j<26;j++)
  {
    for (i=0;i<cle.length;i++)
    {
    	if (cle.charAt(i)==alphabet.charAt(j)) 
    	{
    		tableau[pos]=i;
    		pos++;
    	}
    	
    }
  }
  return tableau;
}

function chiffrer_simple(entree,cle)
{
	var pos;
	var tableau;
	var sortie='';
	var j,k;
	
	
	tableau=produire_tableau_cle(cle);

	
	for (j=0;j<cle.length;j++)
	{
		for (k=0;k<entree.length/cle.length+1;k++) // On parcourt toutes les lignes correspondant à la colonne j
		  if (k*cle.length+tableau[j]<entree.length) sortie+=entree.charAt(k*cle.length+tableau[j]);  // On fait attention à ne pas dépasser...
	}
	
	return sortie;
}

function dechiffrer_simple(entree,cle)
{
	var sortie='';
	var tableau=new Array(cle.length);
	var position=produire_tableau_cle(cle);
	var nblignes;
	var j,k,pos;
	
	// On commence par repérer le nombre de lignes de chaque colonne
	// Et par initialiser le tableau...
	nblignes=Math.floor(entree.length/cle.length);
	for(j=0;j<cle.length;j++)
	{
		if (nblignes*cle.length+j<entree.length) tableau[j]=new Array(nblignes+1)
		else tableau[j]=new Array(nblignes);
	}
	
	pos=0;
	for (k=0;k<cle.length;k++)
	{
	  for (j=0;j<tableau[position[k]].length;j++)
	  {
	  	  tableau[position[k]][j]=entree.charAt(pos);
	  	  pos++;
	  }
	}
	
	for (j=0;j<nblignes;j++)
	  for (k=0;k<cle.length;k++) sortie+=tableau[k][j];
	for (k=0;k<entree.length-nblignes*cle.length;k++)
	  sortie+=tableau[k][nblignes];
	  
	return sortie;
}
	
	

function chiffrer(entree,cle)
{
	var monentree=formate_entree(entree.value);
	var macle=formate_entree(cle.value);
	
	var intermed=chiffrer_simple(monentree,macle);
	return formate_sortie(chiffrer_simple(intermed,macle));
}

	
	
	
function dechiffrer(entree,cle)
{
    var monentree=formate_entree(entree.value);
	var macle=formate_entree(cle.value);
	
	var intermed=dechiffrer_simple(monentree,macle);
	return (dechiffrer_simple(intermed,macle));
}