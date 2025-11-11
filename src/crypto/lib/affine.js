function chiffrer(a,b,entree)
{
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var i=0;
  var sortie="";
  
  entree.value=formate_entree(entree.value);
  
  if ( ((a%2)==0) || ((a%13)==0) )
  {
  	alert ("Valeur de a incorrecte");
  	return 'Erreur';
  }
	 
  i=0;        
  for (i=0;i<entree.value.length;i++)
  {

      p1=alphabet.indexOf(entree.value.charAt(i));	
      sortie+=alphabet.charAt((Math.floor(a)*Math.floor(p1)+Math.floor(b))%26);
  }
  return formate_sortie(sortie);
}

function dechiffrer(a,b,entree)
{
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var i=0;
  var sortie="";
  
  entree.value=formate_entree(entree.value);
  
  if ( ((a%2)==0) || ((a%13)==0) )
  {
  	alert ("Valeur de a incorrecte");
  	return 'Erreur';
  }
  var ainv=inverse(26,Math.floor(a)%26);
  var binv=-ainv*b;
  
  i=0;        
  for (i=0;i<entree.value.length;i++)
  {

      p1=alphabet.indexOf(entree.value.charAt(i));	
      sortie+=alphabet.charAt(irem(Math.floor(ainv)*Math.floor(p1)+Math.floor(binv),26));
  }
  return sortie;
}  	
	 
	 	