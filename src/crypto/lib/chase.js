var cleinitiale= [ [ "%", "X",	"U",	"A",	"C",	"O",	"N",	"L",	"Z",	"P"],
	["Q", "B",	"Y",	"F",	"M",	"&",	"E",	"G",	"+",	"J"	],
	["$", "D",	"K",	"S",	"V",	"H",	"R",	"W",	"T",	"I"	] ];

var cle=new Array(3);
for (var i=0;i<3;i++) 
{
	cle[i]=Array(10);
	for (var j=0;j<10;j++) cle[i][j]=cleinitiale[i][j];
}

function formate_entree_chase(entree)
{
	  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ&+%$';
	  var text;
	  var i;

	// On met en majuscule
  text=	stripVowelAccent(entree);
  text=text.toUpperCase();	
  
	
	 // On supprime tous les caractères incodables du message...
 
  for (i=0; i<text.length; i++)
  {
    if (alphabet.indexOf(text.charAt(i)) == -1)
    {
      text=text.replace(text.charAt(i),'');
    }
  }
  
  return text;
  
}


function chiffrer(entree,type)
{
    var substi=new Array(30);
    var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ&+%$';

    
    for (var i=0;i<30;i++) 
    {
      substi[i]=new Array(2);
      substi[i][0]=-1;
      substi[i][1]=-1;
    }  

	var monentree=formate_entree_chase(entree.value);
	
	for (var i=0;i<3;i++)
	{
	  for (var j=0;j<9;j++)
	  {
	    substi[alphabet.indexOf(document.chase.elements[i*10+j+1].value)][0]=i;
	    substi[alphabet.indexOf(document.chase.elements[i*10+j+1].value)][1]=j+1; 
	    cle[i][j+1]=document.chase.elements[i*10+j+1].value;
	  }
	    substi[alphabet.indexOf(document.chase.elements[i*10+10].value)][0]=i;
	    substi[alphabet.indexOf(document.chase.elements[i*10+10].value)][1]=0; 	  
	    cle[i][0]=document.chase.elements[i*10+10].value;
	} 
	  
	for (var i=0;i<30;i++)
	  if ( (substi[i][0]==-1) || (substi[i][1]==-1) )
	  {
	  	alert("Clé de substitution invalide");
	  	return '';
	  }
	  
	  
	var longueur,but; // La longueur des blocs... 8 pour un chiffrement, 9 pour un déchiffrement...
	if (type==0) 
	{
		longueur=8;
		but=9;
	}
	else
	{
		 longueur=9;
		 but=8;
	}
	    
	// On commence par faire une entrée de longueur un multiple de 8...
	
	while ((monentree.length%longueur)!=0)
	{
		monentree+=alphabet.charAt(Math.floor(Math.random()*30));
	}
	
	// On procède ensuite par blocs de 8 lettres...
	
	var i=0,j=0;
	var sortie="";
	var nombre1,nombre2;
	var colonne;
	var ligne;
	var intermed;
	

	for (i=0;i<monentree.length/longueur;i++)
	{
		// On commence par fabriquer le tableau...
		nombre1=0;
		nombre2=0;
		for (j=0;j<longueur;j++)
		{
			nombre1=nombre1*10+substi[alphabet.indexOf(monentree.charAt(i*longueur+j))][0];
			nombre2=nombre2*10+substi[alphabet.indexOf(monentree.charAt(i*longueur+j))][1];
		}
		// On multiplie par 9...ou on divise si on déchiffre...
		if (type==1) 
		  nombre2=Math.floor(nombre2/9);
		  else
		  nombre2=nombre2*9;
		// On retranscrit en lettres...
		intermed="";
		for (j=0;j<but;j++)
		{
			colonne=nombre2%10;
			ligne=nombre1%10;
			if ( (ligne!=0))
			{
				intermed=cle[ligne][colonne]+intermed;
			}
			else
				intermed=cle[0][colonne]+intermed;
			nombre2=(nombre2-colonne)/10;
			nombre1=(nombre1-ligne)/10;
		}
		sortie+=intermed;
	}
	
	return formate_sortie(sortie);
}


function generer_cle_substi()
{
    var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ&+%$';
	
	
  var substi=new Array(30);
  var coche=new Array(30);
  var i,j;
  
  for (i=0;i<30;coche[i++]=0);
  for (i=0;i<30;i++)
  {
  	j=Math.floor(Math.random()*25);
  	while (coche[j]==1)
  	{
  		if (j<29) j++; else j=0;
  	}
  	coche[j]=1;
  	substi[i]=alphabet.charAt(j);
  }
	for (i=0;i<3;i++)
	  for (j=0;j<10;j++)
	  {
	    document.chase.elements[i*10+j+1].value=substi[i*10+j];
	   
	  }    
}