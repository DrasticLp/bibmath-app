function chiffrer(entree)
{
    var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	
	var text=formate_entree(entree.value);
	var sortie='';
	var lettre,newlettre;
		
	
	for (var i=0;i<text.length;i++)
	{
		if (alphabet.indexOf(text.charAt(i)) != -1)
		{
		  sortie=sortie+alphabet.charAt (25-alphabet.indexOf(text.charAt(i)));  	
		}
	}
	
	return formate_sortie(sortie);
}