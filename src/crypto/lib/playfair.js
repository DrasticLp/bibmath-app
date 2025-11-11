var cleinitiale1= [ [ "Q", "Y", "A", "L", "S"], ["Z", "C", "R", "X", "E"], ["F","O", "M", "W", "B"] , 
["V","I","T","G","U"],
["P","D","K","N","H"] ];


var cle1=new Array(5);
for (var i=0;i<5;i++) 
{
	cle1[i]=Array(5);
	for (var j=0;j<5;j++) cle1[i][j]=cleinitiale1[i][j];
}


function chiffrer(entree)
{
    var substi1=new Array(25);
    var alphabet='ABCDEFGHIKLMNOPQRSTUVWXYZ0123456789';

    
    for (var i=0;i<25;i++) 
    {
      substi1[i]=new Array(2);
      substi1[i][0]=-1;
      substi1[i][1]=-1;
    }  

	var monentree=formate_entree_polybe(entree.value);
	
	for (var i=0;i<5;i++)
	  for (var j=0;j<5;j++)
	  {
	    substi1[alphabet.indexOf(document.playfair.elements[i*5+j+1].value)][0]=i;
	    substi1[alphabet.indexOf(document.playfair.elements[i*5+j+1].value)][1]=j; 
	  }
	  
	for (var i=0;i<25;i++)
	  if ( (substi1[i][0]==-1) || (substi1[i][1]==-1) )
	  {
	  	alert("Clé de substitution invalide");
	  	return '';
	  }
	    
	// 
	
	var sortie="";
	var i=0;
	var increment=0;
	var premlettre,deuzlettre;
	var ligne1,ligne2,colonne1,colonne2;
	while (i<monentree.length)
	{
		// On regarde d'abord si on est à la fin...
		if (i==monentree.length-1)
		{
			// Il faut rajouter une lettre...
			if (monentree.charAt(i)!='Q') monentree+='Q';
			else monentree+='Z';
		}  // En sortant, on sait qu'il reste au moins deux lettres...
		premlettre=monentree.charAt(i);
		deuzlettre=monentree.charAt(i+1);
		if (premlettre==deuzlettre)
		{
			// On chiffre un double...
			inc=1;
			if (deuzlettre!='Q') deuzlettre='Q';
			else deuzlettre='Z';
		}
		else inc=2;
		// On a fait le boulot préliminaire, il suffit de chiffrer!
		ligne1=substi1[alphabet.indexOf(premlettre)][0];
		colonne1=substi1[alphabet.indexOf(premlettre)][1];
		ligne2=substi1[alphabet.indexOf(deuzlettre)][0];
		colonne2=substi1[alphabet.indexOf(deuzlettre)][1];
		if (ligne1==ligne2)
		{
			// Ils sont sur la même ligne!
			sortie+=document.playfair.elements[ligne1*5+(colonne1+1)%5+1].value;
			sortie+=document.playfair.elements[ligne1*5+(colonne2+1)%5+1].value;			
		}
		else
		{
			if (colonne1==colonne2)
			{
				// Ils sont sur la même colonne!
				sortie+=document.playfair.elements[((ligne1+1)%5)*5+colonne1+1].value;
			    sortie+=document.playfair.elements[((ligne2+1)%5)*5+colonne1+1].value;
			}
			else
			{
				// Pas de cas particulier!
				sortie+=document.playfair.elements[ligne1*5+colonne2+1].value;
			    sortie+=document.playfair.elements[ligne2*5+colonne1+1].value;
			}
		}
		i+=inc;
	}
	
	return formate_sortie(sortie);
}


function generer_cle_substi()
{
    var alphabet='ABCDEFGHIKLMNOPQRSTUVWXYZ0123456789';
	
	
  var substi=new Array(25);
  var coche=new Array(25);
  var i,j;
  
  for (i=0;i<25;coche[i++]=0);
  for (i=0;i<25;i++)
  {
  	j=Math.floor(Math.random()*25);
  	while (coche[j]==1)
  	{
  		if (j<24) j++; else j=0;
  	}
  	coche[j]=1;
  	substi[i]=alphabet.charAt(j);
  }
	for (i=0;i<5;i++)
	  for (j=0;j<5;j++)
	  {
	    document.playfair.elements[i*5+j+1].value=substi[i*5+j];
	   
	  }    
}