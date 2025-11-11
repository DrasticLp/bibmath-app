/* Contient toutes les fonctions javascript pour gérer les problèmes */

var xhr = null; // Variable globale qui contient la requête. Globale pour éviter deux requêtes simultanées, pour ne pas surcharger le serveur, ou pour ne pas faire mélanger les actions...

// La fonction suivante recherche le niveau choisi dans le cadre du formulaire
// de recherche par niveau

function retourneniveauchoisi(){
	var valeur = '';
	for (i=0; i<document.rechercher_niveau.niveau.length; i++) {
		if (document.rechercher_niveau.niveau[i].checked) {
			valeur = document.rechercher_niveau.niveau[i].value;
		}
	}
	return valeur;
}

// La fonction suivante recherche l'origine choisie dans le cadre du formulaire 
// de recherche par origine

function retourneoriginechoisie()
{
		var valeur = '';
	for (i=0; i<document.rechercher_origine.origine.length; i++) {
		if (document.rechercher_origine.origine[i].checked) {
			valeur = document.rechercher_origine.origine[i].value;
		}
	}
	return valeur;
}


// Retourne les niveaux et thèmes possibles une fois l'origine choisie
// Permet au formulaire d'être interactif

function afficheniveauxetthemespossibles()
{
	// On commence par rechercher le niveau sélectionné
			
	var origine=retourneoriginechoisie();
	parametres="origine="+origine;
	console.log(origine);
	
	// Il faut faire la requête xhr pour donner les thèmes possibles....
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/donne_themes_par_origine.php", false);
	
	// On lance une requête asynchrone pour pouvoir lancer l'autre ensuite....
	
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(parametres);
	
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
	{
		// On affiche ce qu'a renvoyé la requête!
		var displaythemes=document.getElementById('themesorigine');		
		displaythemes.innerHTML=xhr.responseText; //On change le texte qu'il y a l'intérieur...
	}
	if (xhr.readyState == 4)
	{
   		xhr.abort();
   		// Si c'est terminé, on termine la requête...
	}

	// Il faut faire la requête xhr pour donner les origines possibles
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/donne_niveaux_par_origine.php", false);
	
	// On lance une requête asynchrone pour pouvoir lancer l'autre ensuite....
	
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(parametres);
	
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
	{
		// On affiche ce qu'a renvoyé la requête!
		var displayniveaux=document.getElementById('niveauxorigine');
		
		displayniveaux.innerHTML="<span class='presquelien' onclick='javascript:cocherniveaux();'>[Cocher tous les niveaux]</span> - <span class='presquelien' onclick='javascript:decocherniveaux();'>[Décocher tous les niveaux]</span><div class='textesurdeuxcolonnes'>"+xhr.responseText+"</div>"; //On change le texte qu'il y a l'intérieur...
		
		//decide_affiche_niveaux();
		
	}
	if (xhr.readyState == 4)
	{
   		xhr.abort();
   		// Si c'est terminé, on termine la requête...
	}	
	
}

function afficheoriginesetthemespossibles()
{
	// On commence par rechercher le niveau sélectionné
			
	var niveau=retourneniveauchoisi();
	parametres="niveau="+niveau;
	
	// Il faut faire la requête xhr pour donner les thèmes possibles....
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/donne_themes_par_niveau.php", false);
	
	// On lance une requête asynchrone pour pouvoir lancer l'autre ensuite....
	
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(parametres);
	
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
	{
		// On affiche ce qu'a renvoyé la requête!
		var displaythemes=document.getElementById('themesniveau');
		
		displaythemes.innerHTML=xhr.responseText; //On change le texte qu'il y a l'intérieur...
	}
	if (xhr.readyState == 4)
	{
   		xhr.abort();
   		// Si c'est terminé, on termine la requête...
	}

	// Il faut faire la requête xhr pour donner les origines possibles
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/donne_origines_par_niveau.php", false);
	
	// On lance une requête asynchrone pour pouvoir lancer l'autre ensuite....
	
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(parametres);
	
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
	{
		// On affiche ce qu'a renvoyé la requête!
		var displayorigine=document.getElementById('originesniveau');
		
		displayorigine.innerHTML="<span class='presquelien' onclick='javascript:cocherorigines();'>[Cocher toutes les origines]</span> - <span class='presquelien' onclick='javascript:decocherorigines();'>[Décocher toutes les origines]</span><div class='textesurdeuxcolonnes'>"+xhr.responseText+"</div>"; //On change le texte qu'il y a l'intérieur...
		//decide_affiche_origines();
	}
	if (xhr.readyState == 4)
	{
   		xhr.abort();
   		// Si c'est terminé, on termine la requête...
	}		
}

/*
Je pense que la fonction n'a plus d'utilité depuis la nouvelle gestion des onglets..

function affiche_origines_niveaux_themes()
{
	
	// Il faut faire la requête xhr pour donner les thèmes possibles....
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/donne_tous_themes.php", false);
	
	// On lance une requête asynchrone pour pouvoir lancer l'autre ensuite....
	
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(null);
	
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
	{
		// On affiche ce qu'a renvoyé la requête!
		var displaythemes=document.getElementById('themes');
		displaythemes.innerHTML=xhr.responseText; //On change le texte qu'il y a l'intérieur...
	}
	if (xhr.readyState == 4)
	{
   		xhr.abort();
   		// Si c'est terminé, on termine la requête...
	}

	// Il faut faire la requête xhr pour donner les origines possibles
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/donne_tous_origines.php", false);
	
	// On lance une requête asynchrone pour pouvoir lancer l'autre ensuite....
	
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(null);
	
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
	{
		// On affiche ce qu'a renvoyé la requête!
		var displayorigine=document.getElementById('origines');
		
		displayorigine.innerHTML="<span class='presquelien' onclick='javascript:cocherorigines();'>[Cocher toutes les origines]</span> - <span class='presquelien' onclick='javascript:decocherorigines();'>[Décocher toutes les origines]</span><div class='textesurdeuxcolonnes'>"+xhr.responseText+"</div>"; //On change le texte qu'il y a l'intérieur...
	}
	if (xhr.readyState == 4)
	{
   		xhr.abort();
   		// Si c'est terminé, on termine la requête...
	}	

	// Il faut faire la requête xhr pour donner les origines possibles
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/donne_tous_niveaux.php", false);
	
	// On lance une requête asynchrone pour pouvoir lancer l'autre ensuite....
	
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(null);
	
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
	{
		// On affiche ce qu'a renvoyé la requête!
		var displayniveaux=document.getElementById('niveaux');
		
		displayniveaux.innerHTML="<span class='presquelien' onclick='javascript:cocherniveaux();'>[Cocher tous les niveaux]</span> - <span class='presquelien' onclick='javascript:decocherniveaux();'>[Décocher tous les niveaux]</span><div class='textesurdeuxcolonnes'>"+xhr.responseText+"</div>"; //On change le texte qu'il y a l'intérieur...		
	}
	if (xhr.readyState == 4)
	{
   		xhr.abort();
   		// Si c'est terminé, on termine la requête...
	}		
	
}
 */

function cocherthemes()
{
	var i;
	var themes=document.getElementsByName('themes[]');
	for (i=0;i< themes.length;i++)
    	{
		themes[i].checked=true;
       	}
}

function decocherthemes()
{
	var i;
	var themes=document.getElementsByName('themes[]');
	for (i=0;i< themes.length;i++)
    	{
		themes[i].checked=false;
       	}
}

function cocherannees()
{
	var i;
	var annees=document.getElementsByName('annees[]');
	for (i=0;i< annees.length;i++)
    	{
		annees[i].checked=true;
       	}
}

function decocherannees()
{
	var i;
	var annees=document.getElementsByName('annees[]');
	for (i=0;i< annees.length;i++)
    	{
		annees[i].checked=false;
       	}
}

function cocherniveaux()
{
	var i;
	var niveaux=document.getElementsByName('niveaux[]');
	for (i=0;i< niveaux.length;i++)
    	{
		niveaux[i].checked=true;
       	}
}

function decocherniveaux()
{
	var i;
	var niveaux=document.getElementsByName('niveaux[]');
	for (i=0;i< niveaux.length;i++)
    	{
		niveaux[i].checked=false;
       	}
}

function cocherorigines()
{
	var i;
	var origines=document.getElementsByName('origines[]');
	for (i=0;i< origines.length;i++)
    	{
		origines[i].checked=true;
       	}
}

function decocherorigines()
{
	var i;
	var origines=document.getElementsByName('origines[]');
	for (i=0;i< origines.length;i++)
    	{
		origines[i].checked=false;
       	}
}

// Des variables globales pour gérer les onglets...
/*
var eltniveau,eltorigine,eltcomplete,elttype;
var eltchoixorigine,eltchoixorigines,eltchoixniveau,eltchoixniveaux;

function recherche_elements()
{
	eltniveau=document.getElementById('rech_niveau');
	eltorigine=document.getElementById('rech_origine');
	eltcomplete=document.getElementById('rech_complete');
	elttype=document.getElementById('typeform');
	eltchoixorigine=document.getElementById('choixorigine');
	eltchoixorigines=document.getElementById('choixorigines');
	eltchoixniveau=document.getElementById('choixniveau');
	eltchoixniveaux=document.getElementById('choixniveaux');
}

function sel_rech_niveau()
{
	recherche_elements();
	eltniveau.className='sousongletselected';
	eltorigine.className='sousonglet';
	eltcomplete.className='sousonglet';
	elttype.value="niveau";
	eltchoixniveau.className="choixvisible";
	eltchoixniveaux.className="choixinvisible";
	eltchoixorigine.className="choixinvisible";
	decide_affiche_origines();
}

function sel_rech_origine()
{
	recherche_elements();
	eltniveau.className='sousonglet';
	eltorigine.className='sousongletselected';
	eltcomplete.className='sousonglet';
	elttype.value="origine";
	eltchoixniveau.className="choixinvisible";
	decide_affiche_niveaux();
	eltchoixorigine.className="choixvisible";
	eltchoixorigines.className="choixinvisible";
	
}

function sel_rech_complete()
{
	recherche_elements();
	eltniveau.className='sousonglet';
	eltorigine.className='sousonglet';
	eltcomplete.className='sousongletselected';
	elttype.value="total";	
	
	affiche_origines_niveaux_themes();
	
	eltchoixniveau.className="choixinvisible";
	eltchoixniveaux.className="choixvisible";
	eltchoixorigine.className="choixinvisible";
	eltchoixorigines.className="choixvisible";
}

function decide_affiche_niveaux()
{
	// On vérifie si c'est nécessaire d'afficher les niveaux....
	
	var elt=document.getElementById('choixniveaux');


	
	if (document.getElementsByName('niveaux[]').length<2)
	{
		elt.className="choixinvisible";
	}
	else elt.className="choixvisible";
}

*/
