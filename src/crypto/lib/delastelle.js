var cleinitiale= [ [ "V", "B", "K", "U", "A"], ["C", "L", "X", "R", "D"], ["M","Y", "S", "F", "N"] , 
["Z","O","G","P","I"],
["H","Q","E","W","T"] ];

var cle=new Array(5);
for (var i=0;i<5;i++) 
{
	cle[i]=Array(5);
	for (var j=0;j<5;j++) cle[i][j]=cleinitiale[i][j];
}

var alphabet_polybe='12345';


function chiffrer(entree,transpo)
{
	var alphabet='ABCDEFGHIKLMNOPQRSTUVWXYZ0123456789';

	
    var substi1=new Array(25);	// Pour la première substitution...
    var substi2=new Array(25);  // Pour la deuxième substitution...
    var i,j;
    var intermed;
    var cletranspo;
    var bloc;
    var sortie;
    
    for (i=0;i<25;i++) 
    {
       substi1[i]=new Array(2);
       substi1[i][0]="";
       substi1[i][1]="";
    }

	var monentree=formate_entree_polybe(entree.value);
	
	// On commence par faire le carré de Polybe... 
	// Dans un sens...
	for (i=0;i<5;i++)
	  for (j=0;j<5;j++)
	  {
	    substi1[alphabet.indexOf(document.bifide.elements[i*5+j+1].value)][0]=alphabet_polybe.charAt(i);
	    substi1[alphabet.indexOf(document.bifide.elements[i*5+j+1].value)][1]=alphabet_polybe.charAt(j);	   
	  }
	for (var i=0;i<25;i++)
	  if (substi1[i][0].length!=1)
	  {
	  	alert("Clé de substitution invalide");
	  	return '';
	  }
	 
	// Puis dans l'autre...
	for (i=0;i<25;i++) 
      substi2[i]="";
	for (i=0;i<5;i++)
	  for (j=0;j<5;j++)
	  {
	    substi2[i*5+j]=document.bifide.elements[i*5+j+1].value;
	  }
	    
	// On vérifie la clé de transposition....
	cletranspo=Math.floor(transpo.value);
	if ( (cletranspo<3) || (cletranspo>19) || ((cletranspo%2)==0)  )
	{
		alert("Clé de transposition invalide");
		return;
	}
	
	// On rajoute des lettres nulles si nécessaire
	
	while ( (monentree.length%cletranspo)!=0) monentree+='X';
	
	// C'est parti...
	
	i=0;
	sortie="";
	bloc=new Array(2*cletranspo);
	while (i<monentree.length)
	{
		for (j=0;j<cletranspo;j++)
		{
			bloc[j]=substi1[alphabet.indexOf(monentree.charAt(i+j))][0];
			bloc[j+cletranspo]=substi1[alphabet.indexOf(monentree.charAt(i+j))][1];
		}
		// On lit les blocs un à un et on déchiffre...
		
	   for (j=0;j<cletranspo;j++)
	      sortie+=substi2[alphabet_polybe.indexOf( bloc[2*j] )*5+alphabet_polybe.indexOf(bloc[2*j+1]) ];
	        
	      
	   i=i+cletranspo;
	}
	return formate_sortie(sortie);
	
}

function dechiffrer(entree,transpo)
{
	var alphabet='ABCDEFGHIKLMNOPQRSTUVWXYZ0123456789';

	
    var substi1=new Array(25);	// Pour la première substitution...
    var substi2=new Array(25);  // Pour la deuxième substitution...
    var i,j;
    var intermed;
    var cletranspo;
    var bloc;
    var sortie;
    
    for (i=0;i<25;i++) 
    {
       substi1[i]=new Array(2);
       substi1[i][0]="";
       substi1[i][1]="";
    }

	var monentree=formate_entree_polybe(entree.value);
	
	// On commence par faire le carré de Polybe... 
	// Dans un sens...
	for (i=0;i<5;i++)
	  for (j=0;j<5;j++)
	  {
	    substi1[alphabet.indexOf(document.bifide.elements[i*5+j+1].value)][0]=alphabet_polybe.charAt(i);
	    substi1[alphabet.indexOf(document.bifide.elements[i*5+j+1].value)][1]=alphabet_polybe.charAt(j);
	   
	  }
	for (var i=0;i<25;i++)
	  if (substi1[i][0].length!=1)
	  {
	  	alert("Clé de substitution invalide");
	  	return 'ERREUR';
	  }
	 
	// Puis dans l'autre...
	for (i=0;i<25;i++) 
      substi2[i]="";
	for (i=0;i<5;i++)
	  for (j=0;j<5;j++)
	  {
	    substi2[i*5+j]=document.bifide.elements[i*5+j+1].value;
	  }
	    
	// On vérifie la clé de transposition....
	cletranspo=Math.floor(transpo.value);
	if ( (cletranspo<3) || (cletranspo>19) || ((cletranspo%2)==0)  )
	{
		alert("Clé de transposition invalide");
		return;
	}
	
	// On rajoute des lettres nulles si nécessaire
	
	while ( (monentree.length%cletranspo)!=0) monentree+='X';
	
	// C'est parti...
	
	i=0;
	sortie="";
	bloc=new Array(2*cletranspo);
	while (i<monentree.length)
	{
		for (j=0;j<cletranspo;j++)
		{
			bloc[2*j]=substi1[alphabet.indexOf(monentree.charAt(i+j))][0];
			bloc[2*j+1]=substi1[alphabet.indexOf(monentree.charAt(i+j))][1];
		}
		// On lit les blocs un à un et on déchiffre...
		
	   for (j=0;j<cletranspo;j++)
	      sortie+=substi2[alphabet_polybe.indexOf( bloc[j] )*5+alphabet_polybe.indexOf(bloc[j+cletranspo]) ];
	        
	      
	   i=i+cletranspo;
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
  	substi[i	]=alphabet.charAt(j);
  }
	for (i=0;i<5;i++)
	  for (j=0;j<5;j++)
	  {
	    document.bifide.elements[i*5+j+1].value=substi[i*5+j];
	   
	  }  
  
  	
}

