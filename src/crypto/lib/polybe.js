function sortbyvaleur(a,b)
{
    return parseInt(b.valeur) - parseInt(a.valeur);
}

// Statistiques des binomes

function statbichiffre(texte)
{
	var i;
	var sortie="";
	var bigrammes=new Array(25);
	var alphabet='12345';
	var indice;

	
	// On initialise le tableau des bigrammes...
	for (i=0;i<5;i++)
	{
	  for (j=0;j<5;j++)
	  {
	    bigrammes[i*5+j]=new Object;
       	bigrammes[i*5+j]["valeur"]=0;   	    
       	bigrammes[i*5+j]["nom"]=alphabet.charAt(i)+alphabet.charAt(j);
	  }
	}
	

	
	texte=formate_chiffre(texte);
	
	// On compte les bigrammes...
	for (i=0;i<texte.length-1;i++)
    {
  	  bigrammes[alphabet.indexOf(texte.charAt(i))*5+alphabet.indexOf(texte.charAt(i+1))]["valeur"]++;
    }     
       
  //On trie le tableau
  bigrammes.sort(sortbyvaleur);
  
   for (i=0;i<5;i++)
     for (j=0;j<5;j++)
       {
       	  sortie+=bigrammes[i*5+j]["nom"]+" : "+bigrammes[i*5+j]["valeur"]+"--"+(Math.round(10000*bigrammes[i*5+j]["valeur"]/(texte.length-1))/100)+"%\n";
       }             
	
	return sortie;		
	
}

function statquadrichiffre(texte)
{
	var i,j,k,l;
	var sortie="";
	var quadrigrammes=new Array(625);
	var alphabet='12345';
	var indice;

	
	// On initialise le tableau des bigrammes...
	for (i=0;i<5;i++)
	{
	  for (j=0;j<5;j++)
	  {
	  	for (k=0;k<5;k++)
	  	{
	  		for (l=0;l<5;l++)
	  		{
     	      quadrigrammes[i*125+j*25+k*5+l]=new Object;
         	  quadrigrammes[i*125+j*25+k*5+l]["valeur"]=0;   	    
        	  quadrigrammes[i*125+j*25+k*5+l]["nom"]=alphabet.charAt(i)+alphabet.charAt(j)+alphabet.charAt(k)+alphabet.charAt(l);
	  		}
	    }
	  }
	}
	

	
	texte=formate_chiffre(texte);
	
	// On compte les bigrammes...
	for (i=0;i<texte.length-3;i++)
    {
  	  quadrigrammes[alphabet.indexOf(texte.charAt(i))*125+alphabet.indexOf(texte.charAt(i+1))*25+alphabet.indexOf(texte.charAt(i+2))*5+alphabet.indexOf(texte.charAt(i+3))]["valeur"]++;
    }     
       
  //On trie le tableau
  quadrigrammes.sort(sortbyvaleur);
  
	for (i=0;i<5;i++)
	{
	  for (j=0;j<5;j++)
	  {
	  	for (k=0;k<5;k++)
	  	{
	  		for (l=0;l<5;l++)
	  		{
       	        if (quadrigrammes[i*125+j*25+k*5+l]["valeur"]>0) 
       	          sortie+=quadrigrammes[i*125+j*25+k*5+l]["nom"]+" : "+quadrigrammes[i*125+j*25+k*5+l]["valeur"]+"--"+(Math.round(10000*quadrigrammes[i*125+j*25+k*5+l]["valeur"]/(texte.length-3))/100)+"%\n";
	  		}
         }
	   }
	}
	             
	
	return sortie;		
	
}	