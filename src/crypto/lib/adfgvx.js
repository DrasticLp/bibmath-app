var cleinitiale= [ [ "Q", "Y", "A", "L", "S", "E"], ["Z", "C", "R", "X", "H", "0"], ["F","O", "4", "M", "8", "7"] , 
["3","I","T","G","U","K"],
["P","D","6","2","N","V"],
["1","5","J","9","W","B"] ]

var cle=new Array(6);
for (var i=0;i<6;i++) 
{
	cle[i]=Array(6);
	for (var j=0;j<6;j++) cle[i][j]=cleinitiale[i][j];
}

var adfgvx_alpha=["A", "D", "F", "G", "V", "X"];

var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var adfgvx_alphabet='ADFGVX';


function formate_entree_adfgvx(entree)  // On a un alphabet plus sophistiqué : on autorise les chiffres!
{
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

function produire_tableau_cle(cle)
{
  var tableau=new Array(cle.length);
  var pos,i,j;
  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  
  pos=0;
  
  for (j=0;j<26;j++)
  {
    for (i=0;i<cle.length;i++)
    {
    	if (cle.charAt(i)==alphabet.charAt(j)) 
    	{
    		tableau[pos]=i;
    		pos++;
    	}
    	
    }
  }
  return tableau;
}

function chiffrer_simple(entree,cle)
{
	var pos;
	var tableau;
	var sortie='';
	var j,k;
	
	
	tableau=produire_tableau_cle(cle);

	
	for (j=0;j<cle.length;j++)
	{
		for (k=0;k<entree.length/cle.length+1;k++) // On parcourt toutes les lignes correspondant à la colonne j
		  if (k*cle.length+tableau[j]<entree.length) sortie+=entree.charAt(k*cle.length+tableau[j]);  // On fait attention à ne pas dépasser...
	}
	
	return sortie;
}

function dechiffrer_simple(entree,cle)
{
	var sortie='';
	var tableau=new Array(cle.length);
	var position=produire_tableau_cle(cle);
	var nblignes;
	var j,k,pos;
	
	// On commence par repérer le nombre de lignes de chaque colonne
	// Et par initialiser le tableau...
	nblignes=Math.floor(entree.length/cle.length);
	for(j=0;j<cle.length;j++)
	{
		if (nblignes*cle.length+j<entree.length) tableau[j]=new Array(nblignes+1)
		else tableau[j]=new Array(nblignes);
	}
	
	pos=0;
	for (k=0;k<cle.length;k++)
	{
	  for (j=0;j<tableau[position[k]].length;j++)
	  {
	  	  tableau[position[k]][j]=entree.charAt(pos);
	  	  pos++;
	  }
	}
	
	for (j=0;j<nblignes;j++)
	  for (k=0;k<cle.length;k++) sortie+=tableau[k][j];
	for (k=0;k<entree.length-nblignes*cle.length;k++)
	  sortie+=tableau[k][nblignes];
	  
	return sortie;
}


function chiffrer(entree,cletranspo)
{
    var substi=new Array(36);	
    
    for (var i=0;i<36;i++) 
    substi[i]="";

	var monentree=formate_entree_adfgvx(entree.value);
	var macletranspo=formate_entree(cletranspo.value);
	
	// On commence par faire le carré de Polybe;..
	for (var i=0;i<6;i++)
	  for (var j=0;j<6;j++)
	  {
	    substi[alphabet.indexOf(document.adfgvx.elements[i*6+j+1].value)]=adfgvx_alpha[i]+adfgvx_alpha[j];
	   
	  }
	for (var i=0;i<36;i++)
	  if (substi[i].length!=2)
	  {
	  	alert("Clé de substitution invalide");
	  	return '';
	  }
	    
	// 
	
	var intermed="";
	
	for (var i=0;i<monentree.length;i++)
	  intermed+=substi[alphabet.indexOf(monentree.charAt(i))];
	
	// Puis on retourne la transposition...
	
	return formate_sortie(chiffrer_simple(intermed,macletranspo));
}

function dechiffrer(entree,cletranspo)
{
    var substi=new Array(36);	
    
    for (var i=0;i<36;i++) 
    substi[i]="";

	var monentree=formate_entree_adfgvx(entree.value);
	var macletranspo=formate_entree(cletranspo.value);
	
	var intermed=dechiffrer_simple(monentree,macletranspo);

	
	// On commence par faire le carré de Polybe;..
	for (var i=0;i<6;i++)
	  for (var j=0;j<6;j++)
	  {
	    substi[i*6+j]=document.adfgvx.elements[i*6+j+1].value;
	   
	  }
	    
	// 
	
	var sortie="";
	
	for (var i=0;i<intermed.length/2;i++)
	  sortie+=substi[adfgvx_alphabet.indexOf( intermed.charAt(2*i) )*6+adfgvx_alphabet.indexOf(intermed.charAt(2*i+1)) ];
	
	// Puis on retourne la transposition...
    return sortie;	
}

function generer_cle_substi()
{
  var substi=new Array(36);
  var coche=new Array(36);
  var i,j;
  
  for (i=0;i<36;coche[i++]=0);
  for (i=0;i<36;i++)
  {
  	j=Math.floor(Math.random()*36);
  	while (coche[j]==1)
  	{
  		if (j<35) j++; else j=0;
  	}
  	coche[j]=1;
  	substi[i	]=alphabet.charAt(j);
  }
	for (i=0;i<6;i++)
	  for (j=0;j<6;j++)
	  {
	    document.adfgvx.elements[i*6+j+1].value=substi[i*6+j];
	   
	  }  
  
  	
}