function produirecle(cle)
{
	var text=cle.value;
	
	text=stripVowelAccent(text);
	text=text.toUpperCase();
	
	// On prépare la clé en la mettant en majuscules…
	
	 var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	  var i;
	
	
	 // On supprime tous les caractères incodables de la cle du message...
 
  for (i=0; i<text.length;)
  {
    if ( (alphabet.indexOf(text.charAt(i)) == -1) && (text.charAt(i)!=' ') )
    {
      text=text.replace(text.charAt(i),'');
    }
    else i++;
  }
  
  
  var macle=new Array();
  var pos=1;
  var lettre;
  var sortie='';
  var ou;
  
  for (i=0;i<26;i++) macle[i]=new Array();

  // On commence par initialiser…
  
  if (alphabet.indexOf(text.charAt(0)) != -1) 
  {
  	lettre=alphabet.indexOf(text.charAt(0));
  	ou=macle[lettre].length;
  	macle[lettre][ou]=1;
  	sortie+=pos;

  	pos++;
  }
  
  // On continue...

  for(i=0;i<text.length-1;i++)
  {
  	sortie+=text.charAt(i);
  	if ( (text.charAt(i)==' ') && (alphabet.indexOf(text.charAt(i+1)) != -1) )
  	{
  	lettre=alphabet.indexOf(text.charAt(i+1));
  	ou=macle[lettre].length;
  	macle[lettre][ou]=pos;
  	sortie+=pos;		
  	pos++;  
  	}
  	
  	


  	
  }
  
  sortie+=text.charAt(i);  
  document.livre.cle.value=sortie;
  
    
  return macle;
}

function chiffrer(entree,cle)
{
    var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	var macle=produirecle(cle);
	var text;
	var sortie='';
	var lettre;
	var pos;
	
	text=formate_entree(entree.value);
	
	for (var i=0;i<text.length;i++)
	{
		if (alphabet.indexOf(text.charAt(i)) != -1)
		{
		  lettre=alphabet.indexOf(text.charAt(i));
		  if (macle[lettre].length>0)
		  {
		  	pos=Math.floor(Math.random()*macle[lettre].length);
		  	sortie=sortie+macle[lettre][pos]+' ';
		  }	  	
		}
	}
	
	return sortie;
}

function produirecleinverse(cle)
{
	var text=cle.value;
	
	text=stripVowelAccent(text);
	text=text.toUpperCase();
	
	// On prépare la clé en la mettant en majuscules…
	
	 var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	  var i;
	
	
	 // On supprime tous les caractères incodables de la cle du message...
 
  for (i=0; i<text.length;)
  {
    if ( (alphabet.indexOf(text.charAt(i)) == -1) && (text.charAt(i)!=' ') )
    {
      text=text.replace(text.charAt(i),'');
    }
    else i++;
  }
  
  
  var macle=new Array();
  var pos=1;
  var lettre;
  var sortie='';
  
  

  // On commence par initialiser…
  
  if (alphabet.indexOf(text.charAt(0)) != -1) 
  {
  	lettre=text.charAt(0);
  	macle[pos]=lettre;
  	sortie+=pos;
  	pos++;
  }
  
  // On continue...

  for(i=0;i<text.length-1;i++)
  {
  	sortie+=text.charAt(i);
  	if ( (text.charAt(i)==' ') && (alphabet.indexOf(text.charAt(i+1)) != -1) )
  	{
  	lettre=text.charAt(i+1);
  	macle[pos]=lettre;
  	sortie+=pos;
  	pos++;
  	}
  }
  
  sortie+=text.charAt(i);  
  document.livre.cle.value=sortie;
  return macle;
}

function dechiffrer(entree,cle)
{
	var text=entree.value;
	
	var macle=produirecleinverse(cle);
	var sortie='';
	var nombre='';
	
	for (var i=0;i<text.length;i++)
	{
		if (text.charAt(i)!=' ')
		  nombre=nombre+text.charAt(i);
		else
		  {
		  	result=parseInt(nombre);
		  	nombre='';
		  	if ( (result>=0) && (macle.length>result) ) sortie+=macle[result];
		  }
	}
	return sortie;
}