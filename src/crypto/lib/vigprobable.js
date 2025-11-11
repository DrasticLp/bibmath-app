// La fonction suivante donne la clé de Vigenère connaissant le message chiffré et le clair

// FB 2012

function givekey(chiffre,clair)
{
  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var keyalphabet='';
  var result='';
  var i;
 
  for (i=0; i<chiffre.length; i++)
  {
    indexchiffre=alphabet.indexOf(chiffre.charAt(i));
    indexclair=alphabet.indexOf(clair.charAt(i));
    difference=indexchiffre-indexclair;
    if (difference<0) difference+=26;

    result += alphabet.charAt(difference);

  }

 
  return (result);
}

// La fonction suivante donne toutes les clés possibles, compte tenu du mot probable...

function giveallkeys(entree,probable)
{
	var text;
	var motprobable;
	var i;
	var result;
	
	text=formate_entree(entree.value);
	motprobable=formate_entree(probable.value);
	result='';
	for (i=0;i <=text.length-motprobable.length;i++)
	{
		result+='A partir de la position '+(i+1)+', la clé serait : '+givekey(text.substr(i,motprobable.length),motprobable)+'\n';
	}
	

	
	return result;
	
}	
	