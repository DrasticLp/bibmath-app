function chiffrer(entree,cle)
{
    var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	var macle=formate_entree(cle);
	
	var texte=formate_entree(entree);
	var sortie='';
	var lettre,newlettre;
		
	
	for (var i=0;i<texte.length;i++)
	{
		if (alphabet.indexOf(texte.charAt(i)) != -1)
		{
		  lettre=alphabet.indexOf(texte.charAt(i));
		  if (i<macle.length)
		  {
		  	decalage=alphabet.indexOf(macle.charAt(i));
		  }
		  else
		  {
		  	decalage=alphabet.indexOf(texte.charAt(i-macle.length));
		  }
		  sortie=sortie+alphabet.charAt ((lettre+decalage)%26);  	
		}
	}
	
	return formate_sortie(sortie);
}

function dechiffrer(entree,cle)
{
    var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	var macle=formate_entree(cle);
	
	var text=formate_entree(entree);
	var sortie='';
	var lettre,newlettre;
	
	for(var i=0;i<text.length;i++)
	{
		if (alphabet.indexOf(text.charAt(i)) != -1)
		{
		  lettre=alphabet.indexOf(text.charAt(i));
		  if (i<macle.length)
		  {
		  	decalage=alphabet.indexOf(macle.charAt(i));
		  }
		  else
		  {
		  	decalage=alphabet.indexOf(sortie.charAt(i-macle.length));
		  }
		  sortie=sortie+alphabet.charAt ((lettre-decalage+26)%26);  	
		}
	}
	
	return sortie;	
}

