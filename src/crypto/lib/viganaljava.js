// Ensemble de fonctions qui tentent de décrypter automatiquement
// Un message chiffré avec le chiffre de Vigenère
// FB 2017

var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var MINCLE=1;
var MAXCLE=25;
var frequencetheo=[0.0797,0.0107,0.0347,0.0400,0.1800,0.01010,0.0104,0.0135,0.0734,0.0030,0.0007,0.0548,0.0317,0.0702,0.0527,0.0280,0.0113,0.0664,0.0772,.0728,.0574,.0117,.0006,.0045,.0031,.0004];
var frequenceprat=new Array(26);

var texte_a_analyser;
var lettreproposee=0;


function analyse_vigenere(entree)
{
	entree=formate_entree(entree);
	var sortie="";

	var maxindice=0;
    var longueurcle=1;
	var indice;
	var dec,i;
	
	var nombres,cle;
	
	var ligneencours,colencours,result="";
	
	for (i=MINCLE;i<=Math.min(MAXCLE,entree.length-1);i++)
	{
		indice=0;
		for (dec=0;dec<i;dec++)
		{
			prov=extrait(entree,i,dec);
			indice=indice+indiccoinc(prov);			
		}
		indice=indice/i;
		if (indice>maxindice) 
		{
			maxindice=indice;
			longueurcle=i;
		}
		/* Si l'indice est anormalement grand, on s'éjecte !*/
		if (indice>0.075) i=MAXCLE;
	}

	sortie=sortie+"L'indice de coïncidence maximum  a été trouvé pour la longueur "+longueurcle+", nous avons trouvé : "+maxindice+".\n";
	sortie=sortie+"On recherche les lettres de la clé. La répartition doit respecter le plus possible la répartition théorique.\n";
	
	cle="";
	for (i=0;i<longueurcle;i++)
	{
		// On calcule les fréquences des lettres chiffrées avec cette lettre de la clé.

		prov=extrait(entree,longueurcle,i);
		nombres=calculfrequences(prov);
		
		cle=cle+alphabet.charAt(optimise(nombres));
		
	    }
	
	sortie=sortie+"En analysant les fréquences, on trouve que la clé proposée est "+cle+".\n";
	
	for (i=0; i<entree.length; i++)
	{
		ligneencours=alphabet.indexOf(entree.charAt(i));
		colencours=alphabet.indexOf(cle.charAt(i%cle.length));
		ajout=alphabet[ ((ligneencours-colencours)+26)%26];
		result=result+ajout;
	}
	
	sortie=sortie+"La solution proposée est alors :\n";
	sortie=sortie+result;
	
	return sortie;
}

// La fonction suivante extraite d'une chaine une sous-chaine en prenant tous les "ecarts" caractères
// et en commençant à "depart"

function extrait(chaine,ecart,depart)
{
	console.log(chaine);
	var resultat="";
	var i=+depart;
	
	while (i<chaine.length)
	{
		resultat+=chaine.charAt(i);
		i+=ecart;
	}
	
	return resultat;
}


// Les fonctions suivantes sont consacrées au calcul de l'indice de coïncidence du texte

function indiccoinc(texte)
{
	var nombres=new Array(26);  // Le nombre de fois où chaque lettre intervient dans le texte
	var indice=0.0;
	var nb=0;
	
	// On commence par réaliser les pourcentages...
	nombres=calculnombres(texte);
	for (var i=0;i<26;i++)
	{
		indice=nombres[i]*(nombres[i]-1)+indice;
		nb=nb+nombres[i];
	}
	indice=indice/(nb*(nb-1));
	return indice;
}

    
function calculnombres(texte)
{
	var nombres=new Array(26);
	var nb,prov,j;
	
	for (var i=0;i<26;i++)
	{
		nombres[i]=0.0;
	}
	for (var i=0;i<texte.length;i++)
	{
		nombres[alphabet.indexOf(texte.charAt(i))]++;
	}	
	
	return nombres;
}

function indice_coincidences(texte,clemin,clemax)
{
	var i,indice;
	var sortie="";
	
	entree=formate_entree(texte);
	
	for (i=Math.max(clemin,2);i<=Math.min(clemax,entree.length-1);i++)
	{
		indice=0;
		for (dec=0;dec<i;dec++)
		{
			prov=extrait(entree,i,dec);
			indice=indice+indiccoinc(prov);			
		}
		indice=Math.round(indice*1000/i)/1000;
		sortie=sortie+"Pour une longueur de clé de "+i+", l'indice de coïncidence vaut "+indice+"\n";
	}
	
	return sortie;
	
}

// Les fonctions suivantes permettent de choisir la clé (une fois sa longueur connue)
// en optimisant l'écart par rapport à la fréquence théorique

function calculfrequences(texte)
{
	var nombres=calculnombres(texte);
	var i;
	
	for (i=0;i<26;i++) 
	{
		nombres[i]=nombres[i]/texte.length;
	}	
	
	return nombres;
}

function optimise(nombres)
{
   var meilleur=0;
   var mincomp=10;
   var prov;
   var i,j;
   
   for (i=0;i<26;i++)
   {
		prov=0;
		for (j=0;j<26;j++)
		{
		    prov=prov+(nombres[(j+i+26)%26]-frequencetheo[j])*(nombres[(j+i+26)%26]-frequencetheo[j]);
		}
		if (prov<mincomp)
		{
		    mincomp=prov;
		    meilleur=i;
		}
	}
	return meilleur;
}

function affichehisto()
{
	// On affiche la barre des fréquences théoriques et des fréquences pratiques...
	
	var BAS=280;
	var HAUTEURMAX=250;
	var LARGEUR=5;
	var DECALAGEX=18;
	var DOUBLEDEC=8;
	
	
	var canvas=document.getElementById('canvas-chasvig');
	var context=canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	var i;
	
	recherchemax=0;
	for (i=0;i<25;i++)
	{
		if (frequencetheo[i]>recherchemax) recherchemax=frequencetheo[i];
		if (frequenceprat[i]>recherchemax) recherchemax=frequenceprat[i];
	}
	
	var mahauteurmax=HAUTEURMAX/recherchemax;
	
	context.fillStyle="red";
	for (i=0;i<25;i++)
	{
		context.fillRect(i*DECALAGEX,BAS-frequencetheo[i]*mahauteurmax,LARGEUR,frequencetheo[i]*mahauteurmax);
	}
	
	context.fillStyle="blue";
	for (i=0;i<25;i++)
	{
		context.fillRect(i*DECALAGEX+DOUBLEDEC,BAS-frequenceprat[(i+lettreproposee)%26]*mahauteurmax,LARGEUR,frequenceprat[(i+lettreproposee)%26]*mahauteurmax);
	}	
	
}

function lanceranalyse(texte)
{
	texte_a_analyser=formate_entree(texte);
	texte_a_analyser=extrait(texte_a_analyser,parseInt(document.outilsvigenere.longueurcle.value),parseInt(document.outilsvigenere.lettre.value)-1);
	console.log(texte_a_analyser);

	frequenceprat=calculfrequences(texte_a_analyser);
	
	affichehisto();
	
}

function affichelettre()
{
	document.getElementById("valeurlettre").value=alphabet[lettreproposee];
}

function pluslettre()
{
	lettreproposee=(lettreproposee+1)%26;
	affichehisto();
	affichelettre();
}

function moinslettre()
{
	lettreproposee=(lettreproposee+25)%26;
	affichehisto();
	affichelettre();
}
	