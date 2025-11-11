/* Contient toutes les fonctions nécessaires pour ajouter un exo dans la feuille courante de la base de données */

  var xhr = null; // Variable globale qui contient la requête. Globale pour éviter deux requêtes simultanées, pour ne pas surcharger le serveur...

   function exofavori(id,punid,numerocadre,sens)  // sens vaut 0 si l'exercice n'est pas favori, 1 s'il l'est.
   {
		if (xhr && xhr.readyState != 0) {
			// On doit attendre que la requête ait aboutie avant d'en envoyer une deuxième....
			return;
		}

		xhr=getXMLHttpRequest();  // On crée la requête

	   	xhr.open("GET", "lib/ajoutefavori.php?utilisateur=" +punid+"&exo="+id, true);  // Requête asynchrone...
	
		
		var lien=document.getElementById("heart"+numerocadre);
		if (sens==0)
		{
			// lien.innerHTML="<img src='lib/heart-full.svg' id='imgheart"+numerocadre+"'border=0 class='imgheart'>";
			lien.innerHTML = '<span class="imgheart" id="imgheart'+numerocadre+'" style="color: rgb(var(--highlight-color))">♥</span>';

			lien.href="javascript:exofavori("+id+","+punid+","+numerocadre+",1)";
			xhr.open("GET", "lib/ajoutefavori.php?utilisateur=" +punid+"&exo="+id, true);  // Requête asynchrone...
			
		}
		else
		{
			// lien.innerHTML="<img src='lib/heart-empty.svg' id='imgheart"+numerocadre+"'border=0 class='imgheart'>";			
			lien.innerHTML = '<span class="imgheart" id="imgheart'+numerocadre+'" style="color: rgb(var(--link-color))">♡</span>';			

			lien.href="javascript:exofavori("+id+","+punid+","+numerocadre+",0)";	
			xhr.open("GET", "lib/deletefavori.php?utilisateur=" +punid+"&exo="+id, true);  // Requête asynchrone...
		}
		
		
		xhr.onreadystatechange = function() 
		{
			xhr.abort();
		};
   	
   	// On lance la requête.
   	
		xhr.send(null);
	
   	
   }