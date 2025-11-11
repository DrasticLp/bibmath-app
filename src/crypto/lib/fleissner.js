var cleinitiale= [ [ 0,1,0,1,0,1], [0,0,0,0,1,0], [0,0,1,0,0,0], [0,1,0,0,1,0], [0,0,0,0,0,1], [0,0,0,1,0,0] ];

var cle=new Array(6);
for (var i=0;i<6;i++) 
{
	cle[i]=Array(6);
	for (var j=0;j<6;j++) cle[i][j]=cleinitiale[i][j];
}

// La fonction suivante tourne la clé de 90°

function tournecle(macle)
{
	var ncle=new Array(6);
	var i;
	
	for (i=0;i<6;i++) ncle[i]=new Array(6);
	
	for (i=0;i<6;i++)
	  for (j=0;j<6;j++)
	    ncle[j][5-i]=macle[i][j];
	    
	return ncle;	
}

function ajoutecle(cle1,cle2)
{
	var i,j;
	var ncle=new Array(6);
	
	for (i=0;i<6;i++)
	{
		ncle[i]=new Array(6);
    	for (j=0;j<6;j++) ncle[i][j]=cle1[i][j]+cle2[i][j];
	}
	
	return ncle;
}
	
	

function chiffrer(entree)
{
  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  var monentree;
  var i,j;
  var doublecle=new Array(6);
  var clevalide=new Array(6); 
  var sortie,lettre;
  var k;
  var x,y;
  var tableau=new Array(6);
  var fin;
  
  monentree=formate_entree(entree.value);
  
  // On commence par fabriquer la clé et voir si elle est valide...
  for (i=0;i<6;i++)
  {
  	doublecle[i]=new Array(6);
  	clevalide[i]=new Array(6);
  	tableau[i]=new Array(6);
	for (j=0;j<6;j++)
	  {
	    if (document.fleissner.elements[i*6+j+1].checked) cle[i][j]=1; else cle[i][j]=0;
	    clevalide[i][j]=cle[i][j];
	    doublecle[i][j]=cle[i][j];
	  }
  }
  for (j=0;j<3;j++)
  {
  	doublecle=tournecle(doublecle);
    clevalide=ajoutecle(clevalide,doublecle);
  }
  for (i=0;i<6;i++)
    for (j=0;j<6;j++)
    {
    	if (clevalide[i][j]!=1) 
    	{
    		alert ("Grille invalide");
    		return("Erreur");
    	}
    }
    
  
  // On est parti!
  
  i=0;
  sortie="";
  while (i<monentree.length)
  {
  	doublecle=cle;
  	for (k=0;k<4;k++)
  	{
  		x=0;
  		y=-1;
  		// On cherche la ligne et la colonne suivante libre...
  		for (j=0;j<9;j++)
  		{  			
  		  fin=0;
  		  y++;
  		  if (y==6)
  		  {
  		  	y=0;
  		  	x++;
  		  }
  		  if  (x==6) fin=1;
  	  	  while (fin==0) 
  		  {
  		  	if (doublecle[x][y]==0)
  		  	{
  		  	  y++;
  		  	  if (y==6)
  		  	  {
  		  	  	y=0;
  		  	  	x++;
  		  	  }
  		  	  if (x==6) fin=1;
  		    }
  		    else fin=1;
  		   }
  		   if (x<6)
  		   {  
		    	if (i<monentree.length)
  			    lettre=monentree.charAt(i); else lettre=alphabet.charAt(Math.floor(Math.random()*25));
  			    tableau[x][y]=lettre;  
  		    }
  		    i++;  
  		  }
  		doublecle=tournecle(doublecle);

  	}
  	// On ajoute au message...
  	for (x=0;x<6;x++) 
  		for (y=0;y<6;y++)
  			sortie+=tableau[x][y];
  }
  
  return formate_sortie(sortie);
}

function dechiffrer(entree)
{
  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  var monentree;
  var i,j;
  var doublecle=new Array(6);
  var clevalide=new Array(6); 
  var sortie,lettre;
  var k;
  var x,y;
  var tableau=new Array(6);
  var fin;
  
  monentree=formate_entree(entree.value);
  
  // On commence par fabriquer la clé et voir si elle est valide...
  for (i=0;i<6;i++)
  {
  	doublecle[i]=new Array(6);
  	clevalide[i]=new Array(6);
  	tableau[i]=new Array(6);
	for (j=0;j<6;j++)
	  {
	    if (document.fleissner.elements[i*6+j+1].checked) cle[i][j]=1; else cle[i][j]=0;
	    clevalide[i][j]=cle[i][j];
	    doublecle[i][j]=cle[i][j];
	  }
  }
  for (j=0;j<3;j++)
  {
  	doublecle=tournecle(doublecle);
    clevalide=ajoutecle(clevalide,doublecle);
  }
  for (i=0;i<6;i++)
    for (j=0;j<6;j++)
    {
    	if (clevalide[i][j]!=1) 
    	{
    		alert ("Grille invalide");
    		return("Erreur");
    	}
    }
    
  
  // On est parti!
  
  if (monentree.length%36!=0)
  {
  	alert("Le message ne fait pas la bonne longueur");
  	return("Erreur");
  }
  
  sortie="";
  i=0;
  while (i<monentree.length)
  {
  	// On dispose les lettres dans un tableau
  	for (j=0;j<6;j++)
  	  for (k=0;k<6;k++)
  	    tableau[j][k]=monentree.charAt(i+6*j+k);
  	// On fait passer les grilles...
  	doublecle=cle;
  	for (k=0;k<4;k++)
  	{
  		// On cherche la première case libre...
  		x=0;
  		y=-1;
  		// On cherche la ligne et la colonne suivante libre...
  		for (j=0;j<9;j++)
  		{  			
  		  fin=0;
  		  y++;
  		  if (y==6)
  		  {
  		  	y=0;
  		  	x++;
  		  }
  		  if  (x==6) fin=1;
  	  	  while (fin==0) 
  		  {
  		  	if (doublecle[x][y]==0)
  		  	{
  		  	  y++;
  		  	  if (y==6)
  		  	  {
  		  	  	y=0;
  		  	  	x++;
  		  	  }
  		  	  if (x==6) fin=1;
  		    }
  		    else fin=1;
  		   }
  		   if (x<6)
  		   {  
		    	sortie+=tableau[x][y]; 
  		    }
  		    i++;  
  		  }
  		doublecle=tournecle(doublecle);  		    
  	}
  }
  
  return sortie;
}	


function generer_cle()
{
  var ncle=new Array(6)
  var i,x,y,j,fin;
  
  for (i=0;i<6;i++)
  {
  	 ncle[i]=new Array(6);
  	 for (j=0;j<6;j++) 
  	    ncle[i][j]=0;
  }
  
  for(i=0;i<9;i++)
  {
  	x=Math.floor(Math.random()*6);
  	y=Math.floor(Math.random()*6);
  	fin=0;
  	while (fin==0)
  	{
  	  if ( (ncle[x][y]==0) && (ncle[y][5-x]==0) && (ncle[5-x][5-y]==0) && (ncle[5-y][x]==0) ) fin=1;
  	  else
  	  {
  	  	y++;
  	  	if (y>5) 
  	  	{
  	  		y=0;
  	  		x++;
  	  		if (x>5) x=0;
  	  	}
  	  }
  	}
  	ncle[x][y]=1;
  	ncle[y][5-x]=-1;
  	ncle[5-x][5-y]=-1;
  	ncle[5-y][x]=-1;
  }
  
  for (i=0;i<6;i++)
    for (j=0;j<6;j++)
	  {
	    document.fleissner.elements[i*6+j+1].checked=(ncle[i][j]==1);	   
	  }  
  
  	
}
  
  
  
  
