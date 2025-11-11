function chiffrer_beaufort(entree,cle)
{
    var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';


	var sortie='';
	var lettre,decalage;
		
	
	for (var i=0;i<entree.length;i++)
	{
		  lettre=alphabet.indexOf(entree.charAt(i));
		  decalage=alphabet.indexOf(cle.charAt(i%cle.length));
		  sortie=sortie+alphabet.charAt ((decalage-lettre+26)%26);  	
	}
	
	return sortie;
}



	

function chiffrer(entree,cle)
{
	var monentree=formate_entree(entree);
	var macle=formate_entree(cle);
	
	return formate_sortie(chiffrer_beaufort(monentree,macle));
}