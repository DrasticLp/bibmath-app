/* Contient toutes les fonctions javascript pour gérer les feuilles d'exo */

var xhr = null; // Variable globale qui contient la requête. Globale pour éviter deux requêtes simultanées, pour ne pas surcharger le serveur, ou pour ne pas faire mélanger les actions...
window.onfocus=misajour; // Quand la fenêtre retrouve le focus, on met à jour la feuille d'exos si jamais on l'a changé à côté...
cree_deplacement();
// Les blocs qu'on peut déplacer
var blocs_a_deplacer;
var focus_perdu=false;

window.onblur=blur;

function blur()
{
	focus_perdu=true;
}



function cree_deplacement()
{
	blocs_a_deplacer=Sortable.create(conteneurlisteexos, { animation:500 , onEnd: function (evt)
	{ 
	  // Après un drag and drop, on remet à jour les numéros des cadres et l'ordre des exercices...
		xhr=getXMLHttpRequest();  // On crée la requête
		xhr.open("GET", "lib/deplaceelementfeuille.php?oldindex=" +evt.oldIndex+"&newindex="+evt.newIndex, true); 
				// Requête asynchrone...
   	 
		// On prépare la requête à la fonction...
		xhr.onreadystatechange = function() 
		{
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
			{
				conteneur_liste_exo=evt.item.parentNode;
				enfants = conteneur_liste_exo.children;
				indice_exo=1;
				for (var i=0; i<enfants.length;i++)
				{
					enfants[i].firstChild.value=i;  // On met à jour le numéro du cadre...
					if (enfants[i].className=="exo") // C'est un exo, on met à jour le numéro de l'exercice...
					{
						enfants[i].firstChild.nextSibling.firstChild.nextSibling.innerHTML=indice_exo;
						indice_exo++;
					}
				}
				xhr.abort();  // On peut mettre fin à la requête.
			} 
			else if (xhr.readyState == 4)
			{
				xhr.abort();
				// La requête n'a pas abouti, mais on la supprime tout de même...
			}
		}
		xhr.send(null);  // On n'oublie pas d'envoyer la requête!
	}, 
	});
}


function misajour()
{
	if (!focus_perdu) return;  // Pour le premier focus (après chargement de la page, inutile d'appeler misajour!
	  // Sinon, cela gêne le premier déplacement éventuel...
	focus_perdu=false;
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième...
		return;
	}

	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("GET", "lib/misajourfeuille.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	
	
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
				oldelt=document.getElementById("conteneurlisteexos");
				oldelt.innerHTML=xhr.responseText;
				xhr.abort();	
		
				// On dit encore à MathJax de s'occuper du nouveau texte.
				MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
		
				cree_deplacement();
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(null);

}

function monter(element)
{
	monexo=element.parentNode.parentNode;
	index=monexo.firstChild.value;  // On récupère le numéro du cadre qui est dans le champ caché.
	
	if  (index>0)  //Pas la peine de remonter un noeud s'il est déjà tout en haut!
	{
		if (xhr && xhr.readyState != 0) 
		{
			// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième...
			return;
		}
	
		xhr=getXMLHttpRequest();  // On crée la requête
   		xhr.open("GET", "lib/monteelementfeuille.php?index=" +index, true); 
   		 // Requête asynchrone...
   		 
   		 // On prépare la requête à la fonction...
   		 xhr.onreadystatechange = function() 
   		 {
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
			{
				// La requête a été effectué correctement, on peut permuter les cadres!
				monfrere=monexo.previousElementSibling;
				if (monfrere==null) monfrere=monexo.previousSibling;  // Compatibilité avec les vieux IE.
				
				monfrere.firstChild.value++;  // On augmente le numéro de cadre du frère....
				monexo.firstChild.value--;   // On diminue le numéro de ce cadre
		
				// Il faut aussi changer le numéro des exercices... 
		
				if ((monexo.className=="exo") && (monfrere.className=="exo"))
				{
					// Si l'un des deux n'est pas un exo, pas la peine de changer les numéros...
			
					// Sinon,  il faut jouer avec le dom pour retrouver là où on a écrit le numéro
					// Etonnamment, ça marche!
			
					monfrere.firstChild.nextSibling.firstChild.nextSibling.innerHTML++;
					monexo.firstChild.nextSibling.firstChild.nextSibling.innerHTML--;
				}
			
				// On échange	les deux noeuds
				monexo.parentNode.insertBefore(monexo, monfrere);
				// On peut faire cela car
				//Any node that is inserted into the DOM that is already in the DOM is first 
				// removed automatically and then inserted back so there is no need to
					// manually remove it first.
				xhr.abort();  // On peut mettre fin à la requête.
			} 
			else if (xhr.readyState == 4)
			{
   				xhr.abort();
   				// La requête n'a pas abouti, mais on la supprime tout de même...
			}
		}
		xhr.send(null);  // On n'oublie pas d'envoyer la requête!
	}
			
}

function descendre(element)
{
	monexo=element.parentNode.parentNode;
	index=monexo.firstChild.value; 
	monfrere=monexo.nextElementSibling;
	if (monfrere==null) monfrere=monexo.nextSibling;  // Compatibilité avec les vieux IE.	
	
	 // On récupère le numéro du cadre qui est dans le champ caché.
	//alert(monexo.parentNode.id);
	//lastindex=monexo.parentNode.lastChild.firstChild.value; 
	
	//alert(lastindex);
	
	if  ( (monfrere!=null) && ( (monfrere.className=="exo") || (monfrere.className=="conteneurtitre")) )  //Pas la peine de descendre un noeud s'il est déjà tout en bas!
	{
		if (xhr && xhr.readyState != 0) 
		{
			// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième...
			return;
		}
	
		xhr=getXMLHttpRequest();  // On crée la requête
   		xhr.open("GET", "lib/descendelementfeuille.php?index=" +index, true); 
   		 // Requête asynchrone...
   		 
   		 // On prépare la requête à la fonction...
   		 xhr.onreadystatechange = function() 
   		{
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
			{
				// La requête a été effectué correctement, on peut permuter les cadres!
				monfrere.firstChild.value--;  // On augmente le numéro de cadre du frère....
				monexo.firstChild.value++;   // On diminue le numéro de ce cadre
		
				// Il faut aussi changer le numéro des exercices... 
		
				if ( (monexo.className=="exo") && (monfrere.className=="exo"))
				{
					// Si l'un des deux n'est pas un exo, pas la peine de changer les numéros...
			
					// Sinon,  il faut jouer avec le dom pour retrouver là où on a écrit le numéro
					// Etonnamment, ça marche!
			
					monfrere.firstChild.nextSibling.firstChild.nextSibling.innerHTML--;
					monexo.firstChild.nextSibling.firstChild.nextSibling.innerHTML++;
				}
			
				// On échange	les deux noeuds
				monexo.parentNode.insertBefore(monfrere, monexo);
				// On peut faire cela car
				//Any node that is inserted into the DOM that is already in the DOM is first 
				// removed automatically and then inserted back so there is no need to
				// manually remove it first.
				xhr.abort();  // On peut mettre fin à la requête.
			} 
			else if (xhr.readyState == 4)
			{
   				xhr.abort();
   				// La requête n'a pas abouti, mais on la supprime tout de même...
			}
		}
		xhr.send(null);  // On n'oublie pas d'envoyer la requête!
	}		
}

function renommer(element)
{
	montitre=element.parentNode.parentNode;  // On récupère le conteneur "conteneurtitre"
	maboite=montitre.firstChild.nextElementSibling.nextElementSibling; // Le troisième fils devrait être la boite de dialogue pour renommer...
	if (maboite.style.display!="block")
	{		
		maboite.style.display="block"; 
		blocs_a_deplacer.option("disabled", true);	
	}
	else
	{
		maboite.style.display="none"; 
		blocs_a_deplacer.option("disabled", false);	
	}
}

function renommertitre(element)
{
	cadreparent=element.parentNode.parentNode;  // On récupère le conteneur "conteneurtitre"
	index=cadreparent.firstChild.value;  // Le numéro du premier enfant

	nouveautitre=element.parentNode.firstChild.nextElementSibling.value;
	cadretitre=cadreparent.firstChild.nextElementSibling;
	
	// On fait une requête au serveur!
	
	parametres="index="+index+"&nouveautitre="+nouveautitre;

		if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/renommertitre.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
	xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// La requête a abouti
			// Elle renvoie le nouveau code HTML du titre dont on a changé le nom
			// On l'affiche et on ferme la boite de dialogue renommer...
			
			cadretitre.innerHTML = xhr.responseText;		
			
			cadretitre.nextElementSibling.style.display="none";  // On cache la boite de dialogue "renommer"
			blocs_a_deplacer.option("disabled", false);	
			

				
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	xhr.send(parametres);
		

	
	
	
}

function supprimer(element)
{
	monexo=element.parentNode.parentNode;
	index=monexo.firstChild.value; 
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième...
		return;
	}
	
	xhr=getXMLHttpRequest();  // On crée la requête
   	xhr.open("GET", "lib/supprimeelementfeuille.php?index=" +index, true); 
   	// Requête asynchrone...
   		 
   	// On prépare la requête à la fonction...
   	xhr.onreadystatechange = function() 
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// La requête a été effectué correctement, on peut modifer les cadres suivants!
			monfrere=monexo.nextElementSibling;
			if (monfrere==null) monfrere=monexo.nextSibling;  // Compatibilité avec les vieux IE.	
			
			while (monfrere!=null)
			{
				if ((monfrere.className=="exo") || (monfrere.className=="conteneurtitre"))
				{
					monfrere.firstChild.value--;  // On diminue le numéro du cadre
					if ( (monfrere.className=="exo") && (monexo.className=="exo") )
					{
						// Il faut en plus diminuer le numéro de l'exercice!
						monfrere.firstChild.nextSibling.firstChild.nextSibling.innerHTML--;
						// La formule est toujours aussi compliquée					
					}
				}
				
				monfrere=monfrere.nextSibling;
			}
			
			// On supprime le noeud courant
			monexo.parentNode.removeChild(monexo);
			
			xhr.abort();  // On peut mettre fin à la requête.
		} 
		else if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// La requête n'a pas abouti, mais on la supprime tout de même...
		}
	}
	xhr.send(null);  // On n'oublie pas d'envoyer la requête!
			
}

function addnewsoustitre()
{
	element=document.getElementById("newsoustitre");
	titre=element.value;
	element.value="";
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième...
		return;
		
	}
	
	xhr=getXMLHttpRequest();  // On crée la requête
   	xhr.open("GET", "lib/ajoutetitrefeuille.php?titre=" +titre, true); 
	 // Requête asynchrone...
   	 
   	 // On prépare la requête à la fonction...
   	 xhr.onreadystatechange = function() 
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// La requête a été effectué correctement, on peut ajouter le titre
				
			// On récupère le conteneur des listes d'exos et de titre...
			conteneur=document.getElementById("conteneurlisteexos");
			
			// On crée un nouvel élément du DOM 
			nouvelobjet=document.createElement("div");
			nouvelobjet.className="conteneurtitre";
			text="<input type=hidden value=\"0\" />";
			text=text+'<div class="titrepartie">'+xhr.responseText+'</div>';
			text=text+"<div style=\"display:none\" class='formulairebibmath'>Nouveau nom : <input  size=\"40\" value='"+titre+"' maxlength=\"80\"  type=\"text\"/> <button class=\"boutonressource\" onclick=\"renommertitre(this)\">Renommer</button></div></div>";

			nouvelobjet.innerHTML=text;
			
			// On ajoute ce nouvel élément en tête de conteneur			
			
			if (conteneur.hasChildNodes)
				conteneur.insertBefore(nouvelobjet,conteneur.firstChild);
			else
				conteneur.appendChild(nouvelobjet);
			
			// On décale les index de tous les autres éléments de 1.
			monfrere=nouvelobjet.nextElementSibling;
			if (monfrere==null) monfrere=nouvelobjet.nextSibling;  // Compatibilité avec les vieux IE.	
			
			while (monfrere!=null)
			{
				if ((monfrere.className=="exo") ||(monfrere.className=="conteneurtitre"))
				{
					monfrere.firstChild.value++;  // On diminue le numéro du cadre
				}				
				monfrere=monfrere.nextSibling;
			}
				
			xhr.abort();  // On peut mettre fin à la requête.
			var displayreponse=document.getElementById('conteneursoustitreajoute');
			displayreponse.style.display="block";  
			setTimeout (function( )
			{
				document.getElementById("conteneursoustitreajoute").style.display="none";
			}, 4000);
		} 
		else if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// La requête n'a pas abouti, mais on la supprime tout de même...
		}
	}
	xhr.send(null);  // On n'oublie pas d'envoyer la requête!
}

// Ajoute un sous-titre à la fin

function addnewsoustitrefin()
{
	element=document.getElementById("newsoustitre");
	titre=element.value;
	element.value="";
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième...
		return;
		
	}
	
	xhr=getXMLHttpRequest();  // On crée la requête
   	xhr.open("GET", "lib/ajoutetitrefeuillefin.php?titre=" +titre, true); 
	 // Requête asynchrone...
   	 
   	 // On prépare la requête à la fonction...
   	 xhr.onreadystatechange = function() 
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// La requête a été effectué correctement, on peut ajouter le titre
				
			// On récupère le conteneur des listes d'exos et de titre...
			conteneur=document.getElementById("conteneurlisteexos");
			
			// On recherche l'indice de là où on va rajouter le sous-titre
			monfrere=conteneur.firstChild;
			valeur=0;			
			while (monfrere!=null)
			{
				if ((monfrere.className=="exo") ||(monfrere.className=="conteneurtitre"))
				{
					valeur++;  // On augmente l'indice
				}				
				monfrere=monfrere.nextSibling;
			}
			
			// On crée un nouvel élément du DOM 
			nouvelobjet=document.createElement("div");
			nouvelobjet.className="conteneurtitre";
			text="<input type=hidden value=\""+valeur+"\" />";
			text=text+'<div class="titrepartie">'+xhr.responseText+'</div>';
			text=text+"<div style=\"display:none\" class='formulairebibmath'>Nouveau nom : <input  size=\"40\" value='"+titre+"' maxlength=\"80\"  type=\"text\"/> <button class=\"boutonressource\" onclick=\"renommertitre(this)\">Renommer</button></div></div>";
			
			nouvelobjet.innerHTML=text;
			
			// On ajoute ce nouvel élément en fin de conteneur			
			

			conteneur.appendChild(nouvelobjet);	
			xhr.abort();  // On peut mettre fin à la requête.
			var displayreponse=document.getElementById('conteneursoustitreajoute');
			displayreponse.style.display="block";  
			setTimeout (function( )
			{
				document.getElementById("conteneursoustitreajoute").style.display="none";
			}, 4000);			
		} 
		else if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// La requête n'a pas abouti, mais on la supprime tout de même...
		}
	}
	xhr.send(null);  // On n'oublie pas d'envoyer la requête!
}


// Récupère les paramètres pour sauvegarder la feuille ou produire le latex

function prepareparametres(punid)
{
		// On commence par mettre à jour les paramètres....
	var parametres;
	var nom,repertoire,titre,entete,police,istwocolumns,ispied,istete,pied,tete;
	var enteteperso;

		
	// On prépare les paramètres...
	nom=encodeURIComponent(document.getElementById("name").value); // Le nom....

	
	var ObjListe = document.getElementById('repertoire');   // Le répertoire...
   	var SelIndex = ObjListe.selectedIndex; 
   	repertoire = encodeURIComponent(ObjListe.options[ObjListe.selectedIndex].value); 
   	
   	titre=encodeURIComponent(document.getElementById("titre").value); // Le titre...
   	
   	var radioliste= document.getElementsByName('entete');  // L'entête..
   	if (radioliste[0].checked) 
   	  	entete=0;  //c'est une entête liste!
   	else
   		entete=1;  
   	
   	ObjListe = document.getElementById('points');   // La taille de la police...
   	var SelIndex = ObjListe.selectedIndex; 
   	police = encodeURIComponent(ObjListe.options[ObjListe.selectedIndex].value); 
   	
   	var radioliste= document.getElementsByName('colonnes');  // Sur deux colonnes?
   	if (radioliste[0].checked) 
   	  	istwocolumns=1;  //c'est sur deux colonnes...
   	else
   		istwocolumns=0;  
   		
  	var radioliste= document.getElementsByName('ispied');  // Pied de page?
   	if (radioliste[0].checked) 
   	  	ispied=1;  // Il faut un pied de page!
   	else
   		ispied=0;     		
   	
  	var radioliste= document.getElementsByName('istete');  // Haut de page?
   	if (radioliste[0].checked) 
   	  	istete=1;  // Il faut un haut de page!
   	else
   		istete=0;      	     
   		
   	piedfeuille = encodeURIComponent(document.getElementById("piedfeuille").value);  // Pied
   	tete = encodeURIComponent(document.getElementById("tete").value);  // Tête
   	enteteperso =  encodeURIComponent(document.getElementById("contenumonentete").value); 
   	
   	
	
	parametres="punid="+punid+"&nom="+nom+"&titre="+titre+"&repertoire="+repertoire+"&entete="+entete+"&police="+police+"&istwocolumns="+istwocolumns+"&ispied="+ispied+"&istete="+istete+"&pied="+piedfeuille+"&tete="+tete+"&enteteperso="+enteteperso;
	
	return parametres;
}

// On sauvegarde la feuille dans la base de données...
function sauverfeuille(punid)
{
	var parametres=prepareparametres(punid);
	
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/sauvefeuille.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// On affiche ce qu'a renvoyé la requête!
			var displayreponse=document.getElementById('conteneurreponse');
			
			displayreponse.innerHTML=xhr.responseText; //On change le texte qu'il y a l'intérieur...
			displayreponse.style.display="block";
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(parametres);

}

// On donne une adresse permettant de partager la feuille...

function partager()
{
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("GET", "lib/partager.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	
	
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// On affiche ce qu'a renvoyé la requête!
			var displayreponse=document.getElementById('conteneurreponse');
			
			displayreponse.innerHTML=xhr.responseText; //On change le texte qu'il y a l'intérieur...
			displayreponse.style.display="block";
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(null);


}


//On produit le Latex
//C'est en réalité le même code que sauvegarderfeuille, sauf la référence au fichier php
//Et le fait que l'on demande si on veut l'énoncé ou le corrigé...

function fairelatex(punid,type)
{
	var parametres=prepareparametres(punid);
	parametres=parametres+"&type="+type;
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/fairelatex.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	
	
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// On affiche ce qu'a renvoyé la requête!
			var displayreponse=document.getElementById('conteneurreponse');
			
			displayreponse.innerHTML=xhr.responseText; //On change le texte qu'il y a l'intérieur...
			displayreponse.style.display="block";
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(parametres);
}

function fairepdf(punid)
{
	var parametres=prepareparametres(punid);
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/fairepdf.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	
	
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// On affiche ce qu'a renvoyé la requête!
			var displayreponse=document.getElementById('conteneurreponse');
			
			displayreponse.innerHTML=xhr.responseText; //On change le texte qu'il y a l'intérieur...
			displayreponse.style.display="block";
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(parametres);
}

	
// Définir comme les préférences par défaut
// Là encore, le contenu est très proche de sauvefeuille

function definirpreference(proprietaire)
{
	var parametres=prepareparametres();
	
	parametres=parametres+"&proprietaire="+proprietaire;
	
	if (xhr && xhr.readyState != 0) 
	{
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième...
		return;
	}
	xhr=getXMLHttpRequest();  // On crée la requête
	xhr.open("POST", "lib/definirpreference.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	
	
	 xhr.onreadystatechange = function()   // Requête asynchrone
   	{
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
		{
			// On affiche ce qu'a renvoyé la requête!
			var displayreponse=document.getElementById ('conteneurreponsepreference');
			
			displayreponse.innerHTML=xhr.responseText; //On change le texte qu'il y a l'intérieur...
			displayreponse.style.display="block";
		}
		if (xhr.readyState == 4)
		{
   			xhr.abort();
   			// Si c'est terminé, on termine la requête...
		}
	}
	
	xhr.send(parametres);
	
}
		
	

// Enable et disable les champs de tête de page et de pied de page...

function enablepied()
{
	document.getElementById("piedfeuille").disabled=false;
}

function disablepied()
{
	document.getElementById("piedfeuille").disabled=true;
}

function enabletete()
{
	document.getElementById("tete").disabled=false;
}

function disabletete()
{
	document.getElementById("tete").disabled=true;
}

// Display ou non le choix de l'en-tête...

function selectentetegeneral()
{
	document.getElementById("entetegeneral").style.display="block";
	document.getElementById("enteteperso").style.display="none";
}

function selectenteteperso()
{
	document.getElementById("entetegeneral").style.display="none";
	document.getElementById("enteteperso").style.display="block";
}	