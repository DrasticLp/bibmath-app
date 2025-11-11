var cleinitiale1= [ [ "Q", "Y", "A", "L", "S"], ["Z", "C", "R", "X", "E"], ["F","O", "M", "W", "B"] , 
["V","I","T","G","U"],
["P","D","K","N","H"] ];


var cle1=new Array(5);
for (var i=0;i<5;i++) 
{
	cle1[i]=Array(5);
	for (var j=0;j<5;j++) cle1[i][j]=cleinitiale1[i][j];
}


var cleinitiale2= [ [ "L", "W", "D", "A", "K"], ["B", "C", "G", "N", "H"], ["O","I", "X", "E", "M"] , 
["Z","U","P","Q","R"],
["S","T","V","Y","F"] ];


var cle2=new Array(5);
for (var i=0;i<5;i++) 
{
	cle2[i]=Array(5);
	for (var j=0;j<5;j++) cle2[i][j]=cleinitiale2[i][j];
}


function chiffrer(entree)
{
    var substi1=new Array(25);
    var substi2=new Array(25);
    var alphabet='ABCDEFGHIKLMNOPQRSTUVWXYZ0123456789';

    
    for (var i=0;i<25;i++) 
    {
      substi1[i]=new Array(2);
      substi1[i][0]=-1;
      substi1[i][1]=-1;
      substi2[i]=new Array(2);
      substi2[i][0]=-1;
      substi2[i][1]=-1;    
    }  

	var monentree=formate_entree_polybe(entree.value);
	if ((monentree.length%2)==1) monentree+="Z";
	
	for (var i=0;i<5;i++)
	  for (var j=0;j<5;j++)
	  {
	    substi1[alphabet.indexOf(document.quatrecarres.elements[i*5+j+1].value)][0]=i;
	    substi1[alphabet.indexOf(document.quatrecarres.elements[i*5+j+1].value)][1]=j;
	    substi2[alphabet.indexOf(document.quatrecarres.elements[i*5+j+26].value)][0]=i;
	    substi2[alphabet.indexOf(document.quatrecarres.elements[i*5+j+26].value)][1]=j;	   
	  }
	  
	for (var i=0;i<25;i++)
	  if ( (substi1[i][0]==-1) || (substi1[i][1]==-1) || (substi2[i][1]==-1) || (substi2[i][0]==-1) )
	  {
	  	alert("Clé de substitution invalide");
	  	return '';
	  }
	    
	// 
	
	var sortie="";
	
	for (var i=0;i<(monentree.length/2);i++)
	{
	  ligne1=Math.floor(alphabet.indexOf(monentree.charAt(2*i))/5);
	  colonne1=alphabet.indexOf(monentree.charAt(2*i))-5*ligne1;
	  ligne2=Math.floor(alphabet.indexOf(monentree.charAt(2*i+1))/5);
	  colonne2=alphabet.indexOf(monentree.charAt(2*i+1))-5*ligne2; 
	  sortie+=document.quatrecarres.elements[ligne1*5+colonne2+1].value;
	  sortie+=document.quatrecarres.elements[ligne2*5+colonne1+26].value;
	}	  
	
	  
	
	return formate_sortie(sortie);
}

function dechiffrer(entree)
{
    var substi1=new Array(25);
    var substi2=new Array(25);
    var alphabet='ABCDEFGHIKLMNOPQRSTUVWXYZ0123456789';

    
    for (var i=0;i<25;i++) 
    {
      substi1[i]=new Array(2);
      substi1[i][0]=-1;
      substi1[i][1]=-1;
      substi2[i]=new Array(2);
      substi2[i][0]=-1;
      substi2[i][1]=-1;    
    }  

	var monentree=formate_entree_polybe(entree.value);
	if ((monentree.length%2)==1) monentree+="Z";
	
	for (var i=0;i<5;i++)
	  for (var j=0;j<5;j++)
	  {
	    substi1[alphabet.indexOf(document.quatrecarres.elements[i*5+j+1].value)][0]=i;
	    substi1[alphabet.indexOf(document.quatrecarres.elements[i*5+j+1].value)][1]=j;
	    substi2[alphabet.indexOf(document.quatrecarres.elements[i*5+j+26].value)][0]=i;
	    substi2[alphabet.indexOf(document.quatrecarres.elements[i*5+j+26].value)][1]=j;	   
	  }
	  
	for (var i=0;i<25;i++)
	  if ( (substi1[i][0]==-1) || (substi1[i][1]==-1) || (substi2[i][1]==-1) || (substi2[i][0]==-1) )
	  {
	  	alert("Clé de substitution invalide");
	  	return '';
	  }
	    
	// 
	
	var sortie="";
	
	for (var i=0;i<(monentree.length/2);i++)
	{
	  ligne1=substi1[alphabet.indexOf(monentree.charAt(2*i))][0];
	  colonne1=substi1[alphabet.indexOf(monentree.charAt(2*i))][1];
	  ligne2=substi2[alphabet.indexOf(monentree.charAt(2*i+1))][0];
	  colonne2=substi2[alphabet.indexOf(monentree.charAt(2*i+1))][1];
	  sortie+=alphabet.charAt(5*ligne1+colonne2);
	  sortie+=alphabet.charAt(5*ligne2+colonne1);
	}	  
	
	  
	
	return sortie;
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
	    document.quatrecarres.elements[i*5+j+1].value=substi[i*5+j];
	   
	  }  
	  
  // On recommence!
  
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
	    document.quatrecarres.elements[i*5+j+26].value=substi[i*5+j];
	   
	  }  	  
  
  	
}