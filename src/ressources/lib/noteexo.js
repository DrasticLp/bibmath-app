/* Contient toutes les fonctions nécessaires pour ajouter un exo dans la feuille courante de la base de données */

  var xhr = null; // Variable globale qui contient la requête. Globale pour éviter deux requêtes simultanées, pour ne pas surcharger le serveur...

   function noteexo(id,rating)
   {
   	if (xhr && xhr.readyState != 0) {
		// On doit attendre que la requête ait abouti avant d'en envoyer une deuxième....
		return;
	}
	
	xhr=getXMLHttpRequest();  // On crée la requête
   	
   	xhr.open("GET", "lib/noteexo.php?id=" +id+"&rating="+rating,true);
   	
   	// On prépare la réponse quand la requête est terminée : affichage intermittent de Ajout Effectué...
   	
   	xhr.onreadystatechange = function() 
   	{
		if (xhr.readyState == 4)
		{
   			xhr.abort();
		}
	};
   	
   	// On lance la requête.
   	
   	xhr.send(null);
   	
   }