var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var cle,clair;

function coder(texte,cle)
{
	var ligneencours,colencours;
	
	console.log('la');
	
	//On met en forme le clair et la clé
	
	clair=formate_entree(texte);
	cle=formate_entree(cle);
	/*document.vigenere.entree.value=clair;
	document.vigenere.cle.value=cle;*/

	// On calcule le texte chiffré

	result='';
  
	for (i=0; i<clair.length; i++)
	{
		ligneencours=alphabet.indexOf(clair.charAt(i));
		colencours=alphabet.indexOf(cle.charAt(i%cle.length));
		ajout=alphabet[ (ligneencours+colencours)%26];
		result=result+ajout;
		
	}
	
	console.log('fin');
	
	return formate_sortie(result);			
}

function decoder(texte,cle)
{
	var ligneencours,colencours;
	
	
	//On met en forme le clair et la clé
	
	clair=formate_entree(texte);
	cle=formate_entree(cle);
	/*document.vigenere.sortie.value=clair;
	document.vigenere.cle.value=cle;*/

	// On calcule le texte chiffré

	result='';
  
	for (i=0; i<clair.length; i++)
	{
		ligneencours=alphabet.indexOf(clair.charAt(i));
		colencours=alphabet.indexOf(cle.charAt(i%cle.length));
		ajout=alphabet[ ((ligneencours-colencours)+26)%26];
		result=result+ajout;
		
	}
	
	return formate_sortie(result);			


}