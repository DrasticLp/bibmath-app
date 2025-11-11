


function coder(a,b,c,d,entree)
{
	
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';	
  entree=formate_entree(entree);
  var sortie='';
  var longueur=entree.length;

  /* Si la longueur du texte à chiffrer est impaire, on ajoute un caractère */

  if (longueur%2==1)
  {
    entree += 'A';
    longueur++;
  }
 
  i=0;         /* Le caractère courant que l'on traite */
  longcod=0;   /* La longueur déjà codée */
  while (longcod<longueur) 	
  {

    p1=alphabet.indexOf(entree.charAt(longcod));	
    p2=alphabet.indexOf(entree.charAt(longcod+1));
       /* Fait le calcul, puis convertit tout cela modulo 26 */
    c1=alphabet.charAt(irem(a*p1+b*p2,26));
    c2=alphabet.charAt(irem(c*p1+d*p2,26));
    sortie += c1;
    sortie += c2;
    longcod+=2;
  }
  
  return (sortie);
}


function chiffrer(a,b,c,d,entree)
{
  var det=a*d-b*c;

  if ( ((det%2)==0) || ((det%13)==0) )
  {
  	alert ("Valeurs de a,b,c et d incorrectes");
  	return 'Erreur';
  }
  else return formate_sortie(coder(a,b,c,d,entree));  	
}

function dechiffrer(a,b,c,d,entree)
{
 var det=a*d-b*c;
 var ap,bp,cp,dp,detp;

  if ( ((det%2)==0) || ((det%13)==0) )
  {
  	alert ("Valeurs de a,b,c et d incorrectes");
  	return 'Erreur';
  }
  else
  {
  	detp=inverse(26,det);
  	ap=detp*d;
  	bp=-detp*b;
  	cp=-detp*c;
  	dp=detp*a;
  	return coder(ap,bp,cp,dp,entree);
  }
}