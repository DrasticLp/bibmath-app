/* Contient toutes les fonctions javascript pour gérer le compte */

var xhr = null; // Variable globale qui contient la requête. Globale pour éviter deux requêtes simultanées, pour ne pas surcharger le serveur, ou pour ne pas faire mélanger les actions...

var isnecessairemiseajourrepertoire = false;

// Cette fonction met à jour l'affichage du compte
// Elle prend soin de continuer à garder le même type d'affichage (déplié ou compact) pour les innerrepertoire
function mettreajourcompte(newhtml)
{
	var innerelts = document.getElementsByClassName('inner');
	var mondisplay=new Array();
	var monid = new Array();
	
	// On commence par stocket dans monid les id des différents innerepertoire
	// et dans mondisplay les display correspondants...
	

	for (i=0;i<innerelts.length;i++)
	{
		elt=innerelts[i];
		id=elt.id;
		monid[i]=elt.id;
		mondisplay[i]=elt.style.display;
	}
	
	oldelt=document.getElementById("moncompte");
	oldelt.innerHTML=newhtml;
	
	// On reparcourt les nouveaux innerrepertoires
	
	var newinnerelts = document.getElementsByClassName('inner');
	
	for (j=0; j<newinnerelts.length;j++)
	{
		for (i=0;i<monid.length;i++)
		{
			if (monid[i]==newinnerelts[j].id) newinnerelts[j].style.display=mondisplay[j];
		}
	}
	
}

function misajour()
{
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième...
		return;
	}
	
	var feuilleid=document.getElementById('feuilleid').value;  // La feuille en cours!
	

	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("GET", "lib/misajourcompte.php?feuilleid="+feuilleid,false);
	xhr.send(null);
	// Pour celle-là, on fait une requête synchrone...parce qu'avec une requête asynchrone, cela ne fonctionnait pas!
  		
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
	{
		// Il faut mettre à jour le dom!
			
		mettreajourcompte(xhr.responseText);
		xhr.abort();	
	}

	else xhr.abort();
	
	// Il faut maintenant vérifier si le div de choix d'une nouvelle feuille est visible....
	// Si c'est le cas, il faut aussi le mettre à jour, au cas où il ait été modifié ailleurs....
	
}


function editer(element)
{
	var id=element.parentNode.firstChild.value;  // On récupère l'identité de la feuille
	var feuilleid=document.getElementById('feuilleid').value;
	
	if (feuilleid==id) // la feuille qu'on veut éditer est la feuille en cours!!!
	{
		console.log("tout de suite");
		document.location.href="mafeuille.php";
		
	}
	else
	{
		// On fait une requête Ajax pour changer la feuille d'exercices qui est en cours...
		
		if (xhr && xhr.readyState != 0) 
		{
			// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième...
			return;
		}
		
		xhr=getXMLHttpRequest();  // On crée la requête
		xhr.open("GET", "lib/changefeuille.php?id=" +id, false);
		xhr.send(null);
		
		// Requête synchrone...à la fin de la requête, on va demander à changer de page...
		
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// On change la page qui est affichée	
			xhr.abort();				
			document.location.href="mafeuille.php";
		}
		else xhr.abort();
	}
}

function editerquizz(id)
{
	document.location.href="monquizz.php?id="+id;
}

var origine;

function dragfeuille(ev)
{
	origine=ev.target;
	while (origine.className.indexOf('unefeuille')==-1)
		origine=origine.parentNode;
	ev.dataTransfer.setData("type","feuille");  // C'est une feuille qu'on souhaite déplacer
	ev.dataTransfer.setData("idfeuille", origine.firstChild.value);  // L'identité de la feuille.
	ev.dataTransfer.setData("idreporigine",origine.parentNode.id);  // L'id de l'innerrépertoire parent...
	
}

function dragquizz(ev)
{
	origine=ev.target;
	while (origine.className.indexOf('unquizz')==-1)
		origine=origine.parentNode;
	ev.dataTransfer.setData("type","quizz");  // C'est un quizz qu'on souhaite déplacer
	ev.dataTransfer.setData("idquizz", origine.firstChild.value);  // L'identité de la feuille.
	ev.dataTransfer.setData("idreporigine",origine.parentNode.id);  // L'id de l'innerrépertoire parent...
	
}

function dropfeuille(ev)     // Pour déposer une feuille ou bien un quizz
{
	var feuilleid=document.getElementById('feuilleid').value;  // La feuille en cours!
	
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième...
		return;
	}	

	
	ev.preventDefault();
	var type=ev.dataTransfer.getData("type");
	var idreporigine=ev.dataTransfer.getData("idreporigine");
	destination=ev.target;
	//console.log("La destionation est "+destination.id+"-"+destination.className);
	while (destination.className.indexOf('repertoire') == -1) 
	{
		 // Cette boucle permet de remonter jusqu'à la zone de drop parente
			destination = destination.parentNode;
			//console.log("On parcourt "+destination.className);
	}
	var idrepertoire=destination.firstChild.value;
	if (type=="feuille")
	{
		var idfeuille=ev.dataTransfer.getData("idfeuille");

			
			//console.log("On droppe "+idfeuille+" dans "+idrepertoire);
			
			// On prévient la base de données qu'on a fait un déplacement
			
		xhr=getXMLHttpRequest();  // On crée la requête
		xhr.open("GET", "lib/deplacefeuille.php?id=" +idfeuille+"&repertoire="+idrepertoire+"&feuilleid="+feuilleid, false);
		xhr.send(null);
		
		// Requête synchrone...
		// Elle nous renvoie le nouveau truc...
		// Il faudrait faire en sorte de mettre à jour mon compte en préservant les répertoires ouverts...
	}
	else
	{
		var idquizz=ev.dataTransfer.getData("idquizz");
		
		xhr=getXMLHttpRequest();  // On crée la requête
		xhr.open("GET", "lib/deplacequizz.php?id=" +idquizz+"&repertoire="+idrepertoire, false);
		xhr.send(null);	}
   	
   	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
	{

		
		mettreajourcompte(xhr.responseText);
		xhr.abort();
	}
	else xhr.abort();	  	
    
   	// On fait la miseajour du compte
    	
}


function allowdropfeuille(ev,id)
{
	ev.preventDefault();
	elt=document.getElementById("repertoire"+id);
	elt.className="repertoireover";
}

function leavedropfeuille(ev,id)
{
	ev.preventDefault();
	console.log(id);
	elt=document.getElementById("repertoire"+id);
	elt.className="repertoire";
}

function supprimer_rep(idrepertoire)
{
	// On commence par vérifier si le répertoire est vide ou non
	var nodeinnerrepertoire=document.getElementById("innerrepertoire"+idrepertoire);
	var parametres="id="+idrepertoire+"&truc=tot";
	
	if (nodeinnerrepertoire.firstChild.nodeType==1)
	{
		continuer=confirm("Le répertoire n'est pas vide. Sa suppression entraînera la suppression de toutes les feuilles et de tous les quizz qu'il contient. Souhaitez-vous continuer?");
	}
	else continuer=1;
	
	if (continuer)
	{
		if (xhr && xhr.readyState != 0) 
		{
		// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième...
			return;
		}	
		// On fait un appel Ajax pour supprimer le répertoire...
		xhr=getXMLHttpRequest();  // On crée la requête
		
   		xhr.open("POST", "lib/supprimerepertoire.php", true); 
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   		
   		 // Requête asynchrone...
   		 
   		 // On prépare la requête à la fonction...
   		xhr.onreadystatechange = function() 
   		{
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
			{	
				isnecessairemiseajourrepertoire=true;
						
				var noderepertoire=document.getElementById('repertoire'+idrepertoire);
				noderepertoire.style.display="none";
				// On fait disparaitre le répertoire...
				// Pas besoin de faire appel à ajax pour cela...
				xhr.abort();  // On peut mettre fin à la requête.
			} 
			else if (xhr.readyState == 4)
			{
   				xhr.abort();
   				// La requête n'a pas abouti, mais on la supprime tout de même...
			}
		}
		xhr.send(parametres);  // On n'oublie pas d'envoyer la requête!			
	}
}

function afficher_renommer_rep(idrepertoire)
{
	var node=document.getElementById('nomrep'+idrepertoire);
	
	node.style.display="block";
}

function renommer_rep(idrepertoire,proprietaire)
{
	var nodepanelnouveaunom=document.getElementById('nomrep'+idrepertoire);
	var nodenomrepertoire=document.getElementById('inputnomrep'+idrepertoire);
	var nomrepertoire=nodenomrepertoire.value;
	
	parametres="proprietaire="+proprietaire+"&idrepertoire="+idrepertoire+"&nomrepertoire="+nomrepertoire; 
		
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/renommerrepertoire.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// La requête a abouti
			// Elle renvoie le nouveau code HTML du répertoire dont on a changé le nom
			// On l'affiche en prenant bien soin de garder l'ouverture (ou non) du répertoire...
			/*
			nodepanelnouveaunom.style.display="none";
			
			var node=document.getElementById("repertoire"+idrepertoire);
			var nodeinnerrepertoire =document.getElementById('innerrepertoire'+idrepertoire);
			
			
			var afficher=(nodeinnerrepertoire.style.display!="none");
			
			
			node.innerHTML = xhr.responseText;		
			
			if (afficher) showAll('innerrepertoire'+idrepertoire,'imagerepertoire'+idrepertoire);		
			isnecessairemiseajourrepertoire=true;*/
			console.log('on va mettre à jour');
			xhr.abort();
			misajour();
				
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	xhr.send(parametres);
		
}

// Fonctions qui ajustent la visibilité des 4 différentes div sous le panel grosbouton
// Appelé par plein de fonctions

function setvisibilite(vnouveaurepertoire,vnouvellefeuille,vokrepertoire,vokfeuille)
{
	var divnouveaurepertoire=document.getElementById('nouveaurepertoire');
	var divnouvellefeuille=document.getElementById('nouvellefeuille');
	var divokrepertoire=document.getElementById('okrepertoire');
	var divokfeuille=document.getElementById('okfeuille');
	
	if (vnouveaurepertoire)
	{
		divnouveaurepertoire.style.display="block";
		var inputrepertoire=document.getElementById('nomnouveaurepertoire');
		inputrepertoire.focus();
	}	
	else
		divnouveaurepertoire.style.display="none";
		
	if (vnouvellefeuille)
	{
		divnouvellefeuille.style.display="block";
		var inputfeuille=document.getElementById('nomnouvellefeuille');
		inputfeuille.focus();
		
	}
	else
		divnouvellefeuille.style.display="none";

	if (vokrepertoire)
		divokrepertoire.style.display="block";
	else
		divokrepertoire.style.display="none";

	if (vokfeuille)
		divokfeuille.style.display="block";
	else
		divokfeuille.style.display="none";
}

	
	

// Fonction appelée quand on appuie sur le "gros" bouton Nouveau répertoire
// On se contente d'afficher le bon panel
function fnouveaurepertoire()
{
	setvisibilite(1,0,0,0);
}

// Fonction appelée quand on appuie sur le "gros" bouton Nouvelle feuille
function fnouvellefeuille(punid)
{
	// On fait d'abord une requête Ajax - quand c'est nécessaire - pour demander
	// la liste des répertoires
	
	if (isnecessairemiseajourrepertoire)
	{
	    	if (xhr && xhr.readyState != 0) 
		{
			// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième...
			return;
		}
		// On fait un appel Ajax pour supprimer le répertoire...
		xhr=getXMLHttpRequest();  // On crée la requête
   		xhr.open("GET", "lib/obtenirlisterepertoire.php?id=" +punid, false); 
   		 // Requête synchrone...
   		 xhr.send(null);
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// Il faut mettre à jour le dom!
			conteneur=document.getElementById("nouvellefeuille");
			conteneur.innerHTML="<div><div>Nom de la feuille : <input value=\"\"  size=\"60\" maxlength=\"80\"  id=\"nomnouvellefeuille\" type=\"text\"/></div><div id=\"listerepfeuille\">Répertoire de la feuille : "+xhr.responseText+"</div><div style=\"text-align:center\"><button class=\"boutonressource\" onclick=\"creer_feuille("+punid+")\">Créer la feuille</button></div></div>";
			
			xhr.abort();		
			// On ajuste la visibilité des panels....
			setvisibilite(0,1,0,0);
			// Il n'est plus nécessaire de faire une miseajour...
			isnecessairemiseajourrepertoire=false;
		}

		else xhr.abort();						
	}
	else setvisibilite(0,1,0,0);   // Il n'y avait rien d'autre à faire que de changer le panel...

}

// On crée un répertoire
// Son nom est donnée par le formulaire
// L'id du propriétaire est donnée par id
// On fait une requête POST car on insère des données dans la base de données

function creer_rep(id)
{
	var nomrep,inputrepertoire;
	
	inputrepertoire=document.getElementById("nomnouveaurepertoire");
	nomrep=encodeURIComponent(inputrepertoire.value);
	parametres="id="+id+"&nomrep="+nomrep; 
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/creerrepertoire.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// La requête a abouti
			// Elle renvoie la valeur HTML que doit prendre moncompte
			// C'est-à-dire toute la liste des exos...
			
			mettreajourcompte(xhr.responseText);	
			inputrepertoire.value="";
		
			
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(parametres);
	setvisibilite(0,0,1,0);
	
	isnecessairemiseajourrepertoire=true;
}

// Fonction appelée quand on a créé une nouvelle feuille
function creer_feuille(punid)
{
	var idrep,inputfeuille,nomfeuille;
	
	// On récupère le nom de la feuille
	
	inputfeuille=document.getElementById("nomnouvellefeuille");
	nomfeuille=encodeURIComponent(inputfeuille.value);
	
	// On récupère le répertoire de sauvegarde...
	
	var ObjListe = document.getElementById('repertoire');   // Le répertoire...
   	var SelIndex = ObjListe.selectedIndex; 
   	idrepertoire = encodeURIComponent(ObjListe.options[ObjListe.selectedIndex].value); 

	
	parametres="proprietaire="+punid+"&nomfeuille="+nomfeuille+"&idrepertoire="+idrepertoire; 
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/creerfeuille.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// La requête a abouti
			
			// Il faut modifier ce qu'il y a dans la liste des répertoires...
			
			mettreajourcompte(xhr.responseText);	
			inputfeuille.value="";
			
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(parametres);	
	
	
	setvisibilite(0,0,0,1);
}
	
	
// Appelé quand on veut supprimer une feuille
	
function supprimer_feuille(id,proprietaire,idrepertoire,nomrepertoire)
{
	parametres="id="+id+"&proprietaire="+proprietaire+"&idrepertoire="+idrepertoire+"&nomrepertoire="+nomrepertoire; 
		
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/supprimerfeuille.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// La requête a abouti
			// Elle renvoie la liste des feuilles
			// qu'il reste dans le répertoire
			// ou bien répertoire vide
			// S'il y a des bugs, on peut suggérer de faire appel à mettreajourfeuille
			var node=document.getElementById("repertoire"+idrepertoire);
			node.innerHTML = xhr.responseText;		
			showAll('innerrepertoire'+idrepertoire,'imagerepertoire'+idrepertoire);			
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(parametres);
	
}

// Appelé quand on veut dupliquer une feuille
	
function dupliquer_feuille(id,proprietaire,idrepertoire,nomrepertoire)
{
	console.log('dupliquer');
	parametres="id="+id+"&proprietaire="+proprietaire+"&idrepertoire="+idrepertoire+"&nomrepertoire="+nomrepertoire; 
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/dupliquerfeuille.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// La requête a abouti
			// Elle renvoie la liste de tous les exos du répertoire
			// où on a dupliqué la feuille...		
			var node=document.getElementById("repertoire"+idrepertoire);
			node.innerHTML = xhr.responseText;		
			showAll('innerrepertoire'+idrepertoire,'imagerepertoire'+idrepertoire);
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(parametres);
	
}

// Appelé quand on veut supprimer un quizz

function supprimer_quizz(id,proprietaire,idrepertoire,nomrepertoire)
{
	parametres="id="+id+"&proprietaire="+proprietaire+"&idrepertoire="+idrepertoire+"&nomrepertoire="+nomrepertoire; 
		
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/supprimerquizz.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// La requête a abouti
			// Elle renvoie la liste des feuilles
			// qu'il reste dans le répertoire
			// ou bien répertoire vide
			// S'il y a des bugs, on peut suggérer de faire appel à mettreajourfeuille
			var node=document.getElementById("repertoire"+idrepertoire);
			node.innerHTML = xhr.responseText;		
			showAll('innerrepertoire'+idrepertoire,'imagerepertoire'+idrepertoire);			
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(parametres);
	
}

// Appelé quand on veut dupliquer un quizz
	
function dupliquer_quizz(id,proprietaire,idrepertoire,nomrepertoire)
{
	parametres="id="+id+"&proprietaire="+proprietaire+"&idrepertoire="+idrepertoire+"&nomrepertoire="+nomrepertoire; 
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/dupliquerquizz.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// La requête a abouti
			// Elle renvoie la liste de tous les exos du répertoire
			// où on a dupliqué la feuille...	
			var node=document.getElementById("repertoire"+idrepertoire);
			node.innerHTML = xhr.responseText;		
			showAll('innerrepertoire'+idrepertoire,'imagerepertoire'+idrepertoire);
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(parametres);
	
}