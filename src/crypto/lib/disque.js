// Disque mexicain!
var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';


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

function coderdisque(entree,cle)
{
	
  var text=formate_entree(entree.value);
  var macle=formate_entree(cle.value);
  var decalage=Array();
  
  if (macle.length!=4)
  {
  	alert("Longueur de clé invalide");
  	return '';
  }
  
  for (var i=0;i<4;i++)
    decalage[i]=alphabet.indexOf(macle.charAt(i));
    
    
  var result='';
  
  
  
  for (var i=0;i<text.length;i++)
  {
  	sortie=-1;
  	while (sortie==-1)
  	{
 	  ligne=Math.floor(Math.random()*4);
  	  sortie=((alphabet.indexOf(text.charAt(i))-decalage[ligne]+26) % 26)+1;

  	  sortie=sortie+ligne*26;
  	  if (sortie==100) sortie=0;
  	  if (sortie>100) sortie=-1;
  	}
  	if (sortie<10)
  	  result=result+"0"+sortie;
  	else
  	  result=result+sortie; 
  }	
  return formate_sortie(result);
}	

function decoderdisque(entree,cle)
{
  var text=formate_chiffre(entree.value);
  var macle=formate_entree(cle.value);
  var decalage=Array();
  
  if (macle.length!=4)
  {
  	alert("Longueur de clé invalide");
  	return '';
  }
  
  for (var i=0;i<4;i++)
    decalage[i]=alphabet.indexOf(macle.charAt(i));
    
    
  var result='';
  var ligne;	
   for (var i=0;i<text.length/2;i++)
	{
		ou=eval(text.substr(2*i,2));
  		if ( ou==0 ) ou=100;
  		ligne=Math.floor((ou-1)/26);
  		ou=ou-26*ligne;
  		result=result+alphabet.charAt((ou+decalage[ligne]-1)%26);
	}
	
	return result;
}