// Analyseur de fréquences de lettres, bigrammes, etc... dans les textes...

// La fonction suivante trie en fonction de l'objet valeur n'importe quel tableau, dans l'ordre décroissant...

function sortbyvaleur(a,b)
{
    return parseInt(b.valeur) - parseInt(a.valeur);
}

function lettre(texte)
{
	var lettres=new Array(26);
	var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	var i;
    var sortie='';
    
    texte=formate_stat_entree(texte);
    
    sortie+="Nombre de caractères analysés du texte : "+texte.length+"\n";


   // On commence par initialiser le tableau des lettres…
   for (i=0;i<26;i++)
       {
       	  lettres[i]=new Object;
       	  lettres[i]["nom"]=alphabet.charAt(i);
       	  lettres[i]["valeur"]=0;
       }
       
  //On le remplit!
  
  for (i=0;i<texte.length;i++)
  {
  	lettres[alphabet.indexOf(texte.charAt(i))]["valeur"]++;
  }     
       
  //On trie le tableau
  lettres.sort(sortbyvaleur);
  
       
       
   for (i=0;i<26;i++)
       {
       	  sortie+=lettres[i]["nom"]+" : "+lettres[i]["valeur"]+"--"+(Math.round(10000*lettres[i]["valeur"]/(texte.length-1))/100)+"%\n";
       }             
	
	return sortie;	
	
}

function mylettre(texte)
{
	var lettres=new Array(26);
	var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	var i;
    var sortie='';
    
    texte=formate_stat_entree(texte);
    
    sortie+="Nombre de caractères analysés du texte : "+texte.length+"\n";


   // On commence par initialiser le tableau des bigrammes...
   for (i=0;i<26;i++)
       {
       	  lettres[i]=new Object;
       	  lettres[i]["nom"]=alphabet.charAt(i);
       	  lettres[i]["valeur"]=0;
       }
       
  //On le remplit!
  
  for (i=0;i<texte.length;i++)
  {
  	lettres[alphabet.indexOf(texte.charAt(i))]["valeur"]++;
  }     
       
  //On trie le tableau
  lettres.sort(sortbyvaleur);
  
  sortie="<center><table cellspacing=0 class=\"lettrestab\">";   
  
  sortie+="<tr class=\"lettres1\">";
     
  for (i=0;i<13;i++)
   {
     sortie+="<td class=\"lettreslettres\">";
     sortie+=lettres[i]["nom"];
     sortie+="</td>";
   }
  sortie+="</tr><tr class=\"lettres2\">";
  for (i=0;i<13;i++)
   {
     sortie+="<td class=\"lettreschiffres\">";
     sortie+=(Math.round(10000*lettres[i]["valeur"]/(texte.length-1))/100)+"%</td>\n"
   }   

  sortie+="</tr><tr class=\"lettres3\">";
       	  
  for (i=13;i<26;i++)
   {
     sortie+="<td class=\"lettreslettres\">";
     sortie+=lettres[i]["nom"];
     sortie+="</td>";
   }
  sortie+="</tr><tr class=\"lettres4\">";
  for (i=13;i<26;i++)
   {
     sortie+="<td class=\"lettreschiffres\">";
     sortie+=(Math.round(10000*lettres[i]["valeur"]/(texte.length-1))/100)+"%</td>\n"
   }       	  
       	  
      
   sortie+="</tr></table></center>";       
       
  return sortie;	
}


function bigramme(texte)
{
	var bigrammes=new Array(676);
	var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	var i;
	var j;
    var sortie='';
    
    texte=formate_stat_entree(texte);
    
    sortie+="Nombre de caractères analysés du texte : "+texte.length+"\n";


   // On commence par initialiser le tableau des bigrammes...
   for (i=0;i<26;i++)
     for (j=0;j<26;j++)
       {
       	  bigrammes[i*26+j]=new Object;
       	  bigrammes[i*26+j]["nom"]=alphabet.charAt(i)+alphabet.charAt(j);
       	  bigrammes[i*26+j]["valeur"]=0;
       }
       
  //On le remplit!
  
  for (i=0;i<texte.length-1;i++)
  {
  	bigrammes[alphabet.indexOf(texte.charAt(i))*26+alphabet.indexOf(texte.charAt(i+1))]["valeur"]++;
  }     
       
  //On trie le tableau
  bigrammes.sort(sortbyvaleur);
  
       
       
   for (i=0;i<26;i++)
     for (j=0;j<26;j++)
       {
       	  sortie+=bigrammes[i*26+j]["nom"]+" : "+bigrammes[i*26+j]["valeur"]+"--"+(Math.round(10000*bigrammes[i*26+j]["valeur"]/(texte.length-1))/100)+"%\n";
       }             
	
	return sortie;	
	
}

function mybigramme(texte)
{
	var bigrammes=new Array(676);
	var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	var i;
	var j;
    var sortie='';
    
    texte=formate_stat_entree(texte);
    
    sortie+="Nombre de caractères analysés du texte : "+texte.length+"\n";


   // On commence par initialiser le tableau des bigrammes...
   for (i=0;i<26;i++)
     for (j=0;j<26;j++)
       {
       	  bigrammes[i*26+j]=new Object;
       	  bigrammes[i*26+j]["nom"]=alphabet.charAt(i)+alphabet.charAt(j);
       	  bigrammes[i*26+j]["valeur"]=0;
       }
       
  //On le remplit!
  
  for (i=0;i<texte.length-1;i++)
  {
  	bigrammes[alphabet.indexOf(texte.charAt(i))*26+alphabet.indexOf(texte.charAt(i+1))]["valeur"]++;
  }     
       
  //On trie le tableau
  bigrammes.sort(sortbyvaleur);
  sortie="<center><table border=3 cellspacing=0><tr><td><table>";   
       
   for (i=0;i<26;i++)
   {
   	 sortie+="<tr>";
     for (j=0;j<26;j++)
       {
       	  if ((j%2)==0) sortie+="<td align=center bgcolor=#FFFFCC>";
       	  else sortie+="<td align=center bgcolor=#DDFFFF>"
       	  sortie+="<b>"+bigrammes[i*26+j]["nom"]+"</b><br>"+(Math.round(10000*bigrammes[i*26+j]["valeur"]/(texte.length-1))/100)+"%</td>\n";      
       	  if (j==12) sortie+="</tr><tr>";

       }
   	 sortie+="</tr>";
   }
   sortie+="</table></td></tr></table></center>";
  return sortie;	
	
}

function trigramme(texte)
{
	var trigrammes=new Array(17576);
	var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	var i;
	var j;
	var k;
    var sortie='';
    
    texte=formate_stat_entree(texte);
    
    sortie+="Nombre de caractères analysés du texte : "+texte.length+"\n";


   // On commence par initialiser le tableau des bigrammes...
   for (i=0;i<26;i++)
     for (j=0;j<26;j++)
       for (k=0;k<26;k++)
       {
       	  trigrammes[i*26*26+j*26+k]=new Object;
       	  trigrammes[i*26*26+j*26+k]["nom"]=alphabet.charAt(i)+alphabet.charAt(j)+alphabet.charAt(k);;
       	  trigrammes[i*26*26+j*26+k]["valeur"]=0;
       }
       
  //On le remplit!
  
  for (i=0;i<texte.length-2;i++)
  {
  	trigrammes[alphabet.indexOf(texte.charAt(i))*26*26+alphabet.indexOf(texte.charAt(i+1))*26+alphabet.indexOf(texte.charAt(i+2))]["valeur"]++;
  }     
       
  //On trie le tableau
  trigrammes.sort(sortbyvaleur);
       
       
   for (i=0;i<100;i++)

       {
       	  sortie+=trigrammes[i]["nom"]+" : "+trigrammes[i]["valeur"]+"--"+(Math.round(10000*trigrammes[i]["valeur"]/(texte.length-1))/100)+"%\n";
       }              
	
	return sortie;	
	
}

function quadrigramme(texte)
{
	var quadrigrammes=new Array(456976);
	var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	var i;
	var j;
	var k;
	var l;
    var sortie='';
    
    texte=formate_stat_entree(texte);
    
    sortie+="Nombre de caractères analysés du texte : "+texte.length+"\n";


   // On commence par initialiser le tableau des bigrammes...
   for (i=0;i<26;i++)
     for (j=0;j<26;j++)
       for (k=0;k<26;k++)
         for (l=0;l<26;l++)
         {
       	    quadrigrammes[i*26*26*26+j*26*26+k*26+l]=new Object;
       	    quadrigrammes[i*26*26*26+j*26*26+k*26+l]["nom"]=alphabet.charAt(i)+alphabet.charAt(j)+alphabet.charAt(k)+alphabet.charAt(l);
       	    quadrigrammes[i*26*26*26+j*26*26+k*26+l]["valeur"]=0;
         }
       
  //On le remplit!
  
  for (i=0;i<texte.length-3;i++)
  {
  	quadrigrammes[alphabet.indexOf(texte.charAt(i))*26*26*26+alphabet.indexOf(texte.charAt(i+1))*26*26+alphabet.indexOf(texte.charAt(i+2))*26+alphabet.indexOf(texte.charAt(i+3))]["valeur"]++;
  }     
       
  //On trie le tableau
  quadrigrammes.sort(sortbyvaleur);
       
       
   for (i=0;i<100;i++)

       {
       	  sortie+=quadrigrammes[i]["nom"]+" : "+quadrigrammes[i]["valeur"]+"--"+(Math.round(10000*quadrigrammes[i]["valeur"]/(texte.length-1))/100)+"%\n";
       }              
	
	return sortie;	
	
}

function mytrigramme(texte)
{
	var trigrammes=new Array(17576);
	var quadrigrammes=new Array(456976);
	var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	var i;
	var j;
	var k;
	var l;
    var sortie='';
    
    texte=formate_stat_entree(texte);
    
    sortie+="Nombre de caractères analysés du texte : "+texte.length+"\n";


   // On commence par initialiser le tableau des bigrammes...
   for (i=0;i<26;i++)
     for (j=0;j<26;j++)
       for (k=0;k<26;k++)
       {
       	  trigrammes[i*26*26+j*26+k]=new Object;
       	  trigrammes[i*26*26+j*26+k]["nom"]=alphabet.charAt(i)+alphabet.charAt(j)+alphabet.charAt(k);;
       	  trigrammes[i*26*26+j*26+k]["valeur"]=0;
       	  for (l=0;l<26;l++)
          {
       	    quadrigrammes[i*26*26*26+j*26*26+k*26+l]=new Object;
       	    quadrigrammes[i*26*26*26+j*26*26+k*26+l]["nom"]=alphabet.charAt(i)+alphabet.charAt(j)+alphabet.charAt(k)+alphabet.charAt(l);
       	    quadrigrammes[i*26*26*26+j*26*26+k*26+l]["valeur"]=0;
          }
       }
       
  //On le remplit!
  
  for (i=0;i<texte.length-3;i++)
  {
  	trigrammes[alphabet.indexOf(texte.charAt(i))*26*26+alphabet.indexOf(texte.charAt(i+1))*26+alphabet.indexOf(texte.charAt(i+2))]["valeur"]++;
  	quadrigrammes[alphabet.indexOf(texte.charAt(i))*26*26*26+alphabet.indexOf(texte.charAt(i+1))*26*26+alphabet.indexOf(texte.charAt(i+2))*26+alphabet.indexOf(texte.charAt(i+3))]["valeur"]++;
  	
  }     
       
  //On trie le tableau
  trigrammes.sort(sortbyvaleur);
  quadrigrammes.sort(sortbyvaleur);
  sortie="<center><table cellspacing=0 class=\"tableausous\"><table cellspacing=0><tr>";
  sortie+="<td colspan=4 class=\"frequencehautleft\"><center>Trigrammes</center></td><td colspan=4 class=\"frequencehautright\"><center>Quadrigrammes</center></td></tr><tr>";
       
       
   for (i=0;i<50;i++)

       {
       	  sortie+="<tr>";
       	  sortie+="<td class=\"frequence1\"><b>"+trigrammes[i]["nom"]+"</b></td>";
       	  sortie+="<td class=\"frequence2\">"+(Math.round(10000*trigrammes[i]["valeur"]/(texte.length-1))/100)+"%</td>\n";
          sortie+="<td class=\"frequence3\"><b>"+trigrammes[i+50]["nom"]+"</b></td>";
       	  sortie+="<td class=\"frequence4\">"+(Math.round(10000*trigrammes[i+50]["valeur"]/(texte.length-1))/100)+"%</td>\n";
       	  sortie+="<td class=\"frequence5\"><b>"+quadrigrammes[i]["nom"]+"</b></td>";
       	  sortie+="<td class=\"frequence6\">"+(Math.round(10000*quadrigrammes[i]["valeur"]/(texte.length-1))/100)+"%</td>\n";
          sortie+="<td class=\"frequence7\"><b>"+quadrigrammes[i+50]["nom"]+"</b></td>";
       	  sortie+="<td class=\"frequence8\">"+(Math.round(10000*quadrigrammes[i+50]["valeur"]/(texte.length-1))/100)+"%</td>\n";
       	  sortie+="</tr>";
       }              
	sortie+="</table></tr></table></center>";
	return sortie;	
	
}

// Ou est la lettre... renvoie toutes les positions d'une lettre!

function ouestlalettre(texte,lettre)
{
	var i,sortie,sortie2;
	
	texte=formate_entree(texte);
	lettre=formate_entree(lettre);
	sortie="J'ai trouvé la lettre "+lettre+" en position :\n";
	sortie2="";
	
	for (i=0;	i<texte.length;	i++)
	  if (texte.charAt(i)==lettre.charAt(0)) sortie2+=(i+1)+"\n";
	if (sortie2.length==0) return "Je n'ai pas trouvé la lettre"; else return sortie+sortie2;
}  
	
