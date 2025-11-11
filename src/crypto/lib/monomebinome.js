function sortbyvaleur(a,b)
{
    return parseInt(b.valeur) - parseInt(a.valeur);
}


function statmonome(texte)
{
    var chiffres=new Array(10);
	var alphabet='0123456789';
	
	var i;
    var sortie='';
    
    
    texte=formate_chiffre(texte);
    
    sortie+="Nombre de caractères analysés du texte : "+texte.length+"\n";


   // On commence par initialiser le tableau des chiffres…
   for (i=0;i<10;i++)
       {
       	  chiffres[i]=new Object;
       	  chiffres[i]["nom"]=alphabet.charAt(i);
       	  chiffres[i]["valeur"]=0;
       }
       
  //On le remplit!
  
  for (i=0;i<texte.length;i++)
  {
  	chiffres[alphabet.indexOf(texte.charAt(i))]["valeur"]++;
  }     
       
  //On trie le tableau
  chiffres.sort(sortbyvaleur);
  
       
       
   for (i=0;i<10;i++)
       {
       	  sortie+=chiffres[i]["nom"]+" : "+chiffres[i]["valeur"]+"--"+(Math.round(10000*chiffres[i]["valeur"]/(texte.length-1))/100)+"%\n";
       }             
	return sortie;	
	
}	

// Eclate un texte connaissant le chiffre de ligne 1 et le chiffre de ligne 2.

function eclater(texte,chiffre1,chiffre2)
{
	var i;
	var sortie="";
	
	texte=formate_chiffre(texte);
	
	i=0;
	while (i<texte.length)
	{
		 if ( (texte.charAt(i)==chiffre1) || (texte.charAt(i)==chiffre2) )
		 {
		   sortie+=texte.substring(i,i+2)+" ";
		   i=i+2;
		 }
		 else
		 {
		 	sortie+=texte.charAt(i)+" ";
		 	i++;
		 }
	}
	
	document.forms["analyseur"].elements["tc2"].value=chiffre1;
	document.forms["analyseur"].elements["tc3"].value=chiffre2;
	
	
	return sortie;
}

// Statistiques des chiffres et binomes

function statbinome(texte,chiffre1,chiffre2)
{
	var i,j;
	var sortie="";
	var bigrammes=new Array(30);
	var alphabet='0123456789';
	var frequences='EASINTRLUODCMPVGFQHBXJYZKW  ';
	var indice;

	
	// On initialise le tableau des bigrammes...
	for (i=0;i<10;i++)
	{
	//  if ( (alphabet.charAt(i)!=chiffre1) && (alphabet.charAt(i)!=chiffre2) )
	  {
	  	{
       	  bigrammes[i]=new Object;
       	  bigrammes[i]["nom"]=alphabet.charAt(i);
       	  bigrammes[i]["valeur"]=0;
       }
	  }
	}
	
	for (i=0;i<10;i++)
	{
	  
       	  bigrammes[i+10]=new Object;
       	  bigrammes[i+10]["nom"]=chiffre1+alphabet.charAt(i);
       	  bigrammes[i+10]["valeur"]=0;   
	}
	
	for (i=0;i<10;i++)
	{
		  bigrammes[i+20]=new Object;
       	  bigrammes[i+20]["nom"]=chiffre2+alphabet.charAt(i);
       	  bigrammes[i+20]["valeur"]=0;  		
	}

	
	texte=formate_chiffre(texte);
	
	// On compte les bigrammes...
	
	i=0;
	while (i<texte.length)
	{
		 if ( (texte.charAt(i)==chiffre1) )
		 {
		   bigrammes[10+alphabet.indexOf(texte.charAt(i+1))]["valeur"]++;
		   i=i+2;
		 }
		 else
		 {
		 	if (texte.charAt(i)==chiffre2) 
		 	{
		      bigrammes[20+alphabet.indexOf(texte.charAt(i+1))]["valeur"]++;
		 	  i=i+2;
		 	}
		 	else
		 	{
		        bigrammes[alphabet.indexOf(texte.charAt(i))]["valeur"]++;
		 		i++;
		 	}
		 }
	}
	
	// On retourne le texte...
	// Et on préremplit le tableau en fonction des fréquences...
	
	bigrammes.sort(sortbyvaleur);
	
   for (i=0;i<10;i++)
   {
   	  indice="tc1"+i;
   	  document.forms["analyseur"].elements[indice].value="";
   	  indice="tc2"+i;
   	  document.forms["analyseur"].elements[indice].value="";
   	  indice="tc3"+i;
   	  document.forms["analyseur"].elements[indice].value="";     
   }
   i=0;
   while ( (i<28) && (bigrammes[i]["valeur"]>0) )
   {

       	  sortie+=bigrammes[i]["nom"]+" : "+bigrammes[i]["valeur"]+"--"+(Math.round(10000*bigrammes[i]["valeur"]/(texte.length-1))/100)+"%\n";
       	  if (bigrammes[i]["nom"].charAt(0)==chiffre1)
       	  {
       	  	indice="tc2"+bigrammes[i]["nom"].charAt(1);
       	  }
       	  else
       	  {
       	  	if (bigrammes[i]["nom"].charAt(0)==chiffre2)
       	    {
       	  	  indice="tc3"+bigrammes[i]["nom"].charAt(1);
       	    }
       	    else
       	    {
       	      indice="tc1"+bigrammes[i]["nom"].charAt(0);
       	    }
       	  }
       	  document.forms["analyseur"].elements[indice].value=frequences.charAt(i);
		  i++;
    }             
	
	return sortie;	
	
}


// Déchiffre un message chiffré avec système monome/binome...
// Les entrées sont un message + un formulaire contenant une table chiffrante
// Sous la forme tc1x, tc2x, tc3x, tc1 pour chiffre 1, tc2 pour chiffre 2...
function dechiffre_monome(texte,formulaire)
{
	var tab=new Array;
	var i,chiffre1,chiffre2;
	var sortie;
	
	chiffre1=formulaire.elements["tc2"].value;
	chiffre2=formulaire.elements["tc3"].value;
	
	for (i=0;i<10;i++) 
	{
		indice=""+i;
		tab[indice]=formulaire.elements["tc1"+i].value;
	}
	for (i=0;i<10;i++) 
	{
		indice=chiffre1+""+i;
		tab[indice]=formulaire.elements["tc2"+i].value;
	}
	for (i=0;i<10;i++)
	{
		indice=chiffre2+""+i;
		tab[indice]=formulaire.elements["tc3"+i].value;
	}
	
	texte=formate_chiffre(texte);
	sortie="";
	
	i=0;
	while (i<texte.length)
	{
		 if ( (texte.charAt(i)==chiffre1) || (texte.charAt(i)==chiffre2) )
		 {
		   sortie+=tab[texte.substring(i,i+2)];
		   i=i+2;
		 }
		 else
		 {
		 	sortie+=tab[texte.charAt(i)];
		 	i++;
		 }
	}
	return sortie;
}

// Chiffre un message chiffré avec système monome/binome...
// Les entrées sont un message + un formulaire contenant une table chiffrante
// Sous la forme tc1x, tc2x, tc3x, tc1 pour chiffre 1, tc2 pour chiffre 2...
function chiffre_monome(texte,formulaire)
{
	var tab=new Array;
	var i,chiffre1,chiffre2;
	var sortie;
	
	chiffre1=formulaire.elements["tc2"].value;
	chiffre2=formulaire.elements["tc3"].value;
	
	for (i=0;i<10;i++) 
	{
		if (formulaire.elements["tc1"+i].value!="") tab[formulaire.elements["tc1"+i].value]=i;
	}
	for (i=0;i<10;i++) 
	{
		if (formulaire.elements["tc2"+i].value!="") tab[formulaire.elements["tc2"+i].value]=chiffre1+""+i;
	}
	for (i=0;i<10;i++)
	{
		if (formulaire.elements["tc3"+i].value!="") tab[formulaire.elements["tc3"+i].value]=chiffre2+""+i;
	}
	
	texte=formate_entree(texte);
	sortie="";
	
	i=0;
	while (i<texte.length)
	{
		 sortie+=tab[texte.charAt(i)];
		 i++;
	}
	
	return formate_sortie(sortie);
}

// Constitue une table de chiffrement...

function generer_cle_substi(formulaire)
{
  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var coche=new Array(26);
  var i;
  var chiffre1, chiffre2;
  
  for (i=0;i<25;coche[i++]=0);
  
  // On commence par générer les deux chiffres....
  chiffre1=Math.floor(Math.random()*10);
  chiffre2=Math.floor(Math.random()*10);
  while (chiffre2==chiffre1)
  {
    chiffre2=Math.floor(Math.random()*10);
  }
  formulaire.elements["tc2"].value=chiffre1;
  formulaire.elements["tc3"].value=chiffre2;
	
  
  for (i=0;i<10;i++)
  {
  	if ( (i!=chiffre1) && (i!=chiffre2) )
   	{
   		j=Math.floor(Math.random()*25);
  	    while (coche[j]==1)
  	    {
  		  if (j<25) j++; else j=0;
  	    }
  	    coche[j]=1;
  	    formulaire.elements["tc1"+i].value=alphabet.charAt(j);
   	}
   	else
   	{
   		formulaire.elements["tc1"+i].value="";
   	} 	
  }
  for (i=0;i<10;i++)
  {
  	j=Math.floor(Math.random()*25);
  	while (coche[j]==1)
  	{
  		if (j<25) j++; else j=0;
  	}
  	coche[j]=1;
  	formulaire.elements["tc2"+i].value=alphabet.charAt(j);
  }
  for (i=0;i<8;i++)
  {
  	j=Math.floor(Math.random()*25);
  	while (coche[j]==1)
  	{
  		if (j<25) j++; else j=0;
  	}
  	coche[j]=1;
  	formulaire.elements["tc3"+i].value=alphabet.charAt(j);
  }  	
  
  	
}
	
	