// MAX 7X+9Y+18Z+17T
//2X+4Y+5Z+7T<42;X+Y+2Z+2T<17;X+2Y+3Z+3T<24
   /* Les divers états pour l'analyse */
    var A_CHIFLET=1;           /* Chiffre ou lettre, sans point */
    var A_CHIFLETSPOINT=2;     /* Idem, mais point déjà lu*/
    var A_CHIFLETPOINT=3;      /* Chiffre, lettre ou point */
    var A_PLUSMOINS=4;         /* Plus ou moins */
    var A_PLUSMOINSINFSUP=5;         /* Plus ou moins */ 
    var A_CHIFFIN=6;          
    var A_CHIFSPOINTFIN=7;     
    var A_CHIFPOINTFIN=8;  
    var A_CHIFLETMOINS=9;
    var A_CHIFMOINSFIN=10;

    /* Les divers codes d'erreur */
    var ERROR_MINMAX=1; 
    var ERROR_ECO_UNATTEMPTED=2;
    var ERROR_CONT_UNATTEMPTED=3;
    var ERROR_CONT_NUMBER=4;
    var ERROR_CONT_INFSUP=5;
    var ERROR_RESOL=6;

    var SUP=0;
    var INF=1;
    var NBEQS=26;

    var error;                 /* Le code d'erreur s'il y en a une */
    var cerror;               /* Le caractère erroné */

    var eqs;            // Le tableau des équations.
    // Les nbeqs premières colonnes correspondent aux variables 
    // Les nbeqs suivantes correspondent aux suivantes...
    // La dernière correspond à la fonction économique
    // La première ligne correspond à la fonction économique
    // Les nbeqs suivantes aux contraintes
    var ans;
    var totaleq=0;   // Le nombre de contraintes!
    var ismax;
    var star;

// Est-ce que le caractère est un chiffre?

function isDigit(n){
  return n != ' ' && !isNaN(+n);
}

function isLetter(str) {
  return str.length === 1 && str.match(/[A-Z]/i);
}

function stocke(nombre,c,weq)
{
	var ligne=c.charCodeAt(0)-65;
	if (nombre.length===0)
	{
		eqs[weq][ligne]=eqs[weq][ligne]- 1;
		return;
	}
	if (nombre=="-")
	{
		eqs[weq][ligne]=eqs[weq][ligne]+ 1;
		return;		
	}
	eqs[weq][ligne]=eqs[weq][ligne]- parseFloat(nombre);
}

function stocke_contrainte(nombre,c,weq)
{
	var ligne=c.charCodeAt(0)-65;
	if (nombre.length===0)
	{
		eqs[weq][ligne]=eqs[weq][ligne]+ 1;
		return;
	}
	if (nombre=="-")
	{
		eqs[weq][ligne]=eqs[weq][ligne]- 1;
		return;		
	}
	eqs[weq][ligne]=eqs[weq][ligne]+ parseFloat(nombre);
}


    
   function Clear_tableau()
    {
    	var i;
    	var j;
	eqs = new Array(NBEQS+1);
	for (i=0;i<=NBEQS;i++) 
	{
		eqs[i]=new Array(2*NBEQS+1);
		for (j=0;j<=2*NBEQS;j++) eqs[i][j]=0;
	}
	ans = new Array(NBEQS+1);
	for (i=0;i<NBEQS;i++)
		ans[i]=0;
	star= new Array(NBEQS);
	for (i=0;i<NBEQS;star[i++]=false);
	/*  Peut-être faudra-t-il tout mettre à zéro à la main */
    }

    function affiche_erreur()
    {
	var ch="";
	
	switch (error)
	    {
	    case ERROR_MINMAX :
		ch="Mot-clé MIN ou MAX attendu.";
		break;
	    case ERROR_ECO_UNATTEMPTED :
		ch="Caractère "+cerror+" inattendu dans la fonction économique";
		break;		
	    case ERROR_CONT_NUMBER :
		ch="Nombre attendu dans la partie droite des contraintes.";
		break;
	    case ERROR_CONT_UNATTEMPTED :
		ch="Caractère "+cerror+" inattendu dans les contraintes";
		break;		
	    case ERROR_CONT_INFSUP :
		ch="Caractère > ou < attendu dans les contraintes.";
		break;
	    case ERROR_RESOL : 
		ch = "Une erreur est survenue pendant la résolution.";
		break;
	    default : 
		ch="Erreur pendant la résolution.";
		break;
	    }
	    return ch;
    }

    /* On analyse la fonction économique, et on crée la première ligne du tableau.... */

    function anal_fonc(fonction)
    {
	var index=0,longu;
	var bon=true;
	var ch=fonction;
	var ch2;
	var nombre="";       /* Chaine destinée à stocker un nombre */
	var c;
	
	longu=ch.length;

	ch=ch.toUpperCase();  /* On met tout en majuscules! */
	ch=ch.trim(); /* On mange les blancs en début de texte ...*/
	
	/* On s'atend à min ou max !*/
	ch2=ch.substring(index,index+3);
	if  (ch2=="MAX")
	    {
		/* Le cas le plus courant, c'est bon */
		ismax=true;
	    }
	else
	    {
		if (ch2=="MIN")
		    {
			/* Encore bon */
			ismax=false;
		    }
		else
		    {
			bon=false;
			error=ERROR_MINMAX;
			return false;
		    }
	    }
	index=index+3;
	/* On parcourt la chaine de bout en bout, et on repère tout ! */
	
	var etat=A_CHIFLETMOINS;
	while ( (index<longu) && bon)
	    {
		c=ch.charAt(index);
		if (c!=' ')       /* On vire les blancs!*/
		switch (etat)
		    {
		    case A_CHIFLETMOINS :
			
			if (isDigit(c))
			    {
				nombre=nombre+c;
				etat=A_CHIFLETPOINT;
			    }
			else if (isLetter(c))
			    {
				var d;   // On stocke dans le tableau
				stocke(nombre,c,NBEQS);
				nombre="";
				etat=A_PLUSMOINS;
			    }
			else if (c=='-')
			    {
				nombre=nombre+c;
				etat=A_CHIFLET;
			    }
			else
			    {
				bon=false;
				error=ERROR_ECO_UNATTEMPTED;
				cerror=c;
			    }
			break;

		    case A_CHIFLET: 
			if (isDigit(c))
			    {
				nombre=nombre+c;
				etat=A_CHIFLETPOINT;
			    }
			else if (isLetter(c))
			    {
			    	stocke(nombre,c,NBEQS);
			    	nombre="";
				etat=A_PLUSMOINS;
			    }
			else 
			    {
				bon=false;
				error=ERROR_ECO_UNATTEMPTED;
				cerror=c;
			    }
			break;
		    case A_CHIFLETSPOINT:
			if (isDigit(c))
			    {
				nombre=nombre+c;
				etat=A_CHIFLETSPOINT;
			    }
			else if (isLetter(c))
			    {
			    	ligne=c.charCodeAt(0)-65;
				eqs[NBEQS][ligne]=eqs[NBEQS][ligne]- parseFloat(nombre);
				nombre ="";
				etat=A_PLUSMOINS;
			    }
			else 
			    {
				bon=false;
				error=ERROR_ECO_UNATTEMPTED;
				cerror=c;
			    }
			break;	
		    case A_CHIFLETPOINT:
			if  (isDigit(c))
			    {
				nombre=nombre+c;
				etat=A_CHIFLETPOINT;
			    }
			else if (c=='.')
			    {
				nombre=nombre+c;
				etat=A_CHIFLETSPOINT;
			    }
			else if (isLetter(c))
			    {
			    	ligne=c.charCodeAt(0)-65;
				eqs[NBEQS][ligne]=eqs[NBEQS][ligne]- parseFloat(nombre);
				nombre ="";
				etat=A_PLUSMOINS;
			    }
			else 
			    {
				bon=false;
				error=ERROR_ECO_UNATTEMPTED;
				cerror=c;
			    }
			break;
		    case A_PLUSMOINS :
			if (c=='-')
			    {
				nombre=nombre+c;
				etat=A_CHIFLET;
			    }
			else if (c=='+')
			    {
				etat=A_CHIFLET;
			    }
			else bon=false;
		    
		    }
	    
		index++;
	    }
	
	/* Il faut encore mettre le +1 au bout !*/
	eqs[NBEQS][2*NBEQS]=1;
	
	return bon;
    }
    
    

    /* On analyse les contraintes ! */

    function anal_cont(contraintes)
    {
    	
	var jetons=contraintes.split(";");
	var index=0,longu,weq=0,ineg;
	var bon=true;
	var ch;
	var nombre="";       /* Chaine destinée à stocker un nombre */
	var c;
	
	while ( weq<Math.min(NBEQS,jetons.length))
	    {
		ineg=-1;
		ch=jetons[weq];
		index=0;
		nombre="";
		longu=ch.length;
		ch=ch.toUpperCase();  /* On met tout en majuscules! */
		var etat=A_CHIFLETMOINS;
		while ( (index<longu) && bon)
		    {
			c=ch.charAt(index);

			if (c!=' ')       /* On vire les blancs!*/
			    switch (etat)
				{
				case A_CHIFLETMOINS: 
				    if (isDigit(c))
					{
					    nombre=nombre+c;
					    etat=A_CHIFLETPOINT;
					}
				    else if (isLetter(c))
					{
					    stocke_contrainte(nombre,c,weq);
					    nombre=""; // On purge nombre
					    etat=A_PLUSMOINSINFSUP;
					}
				    else if (c=='-')
					{
					    nombre=nombre+c;
					    etat=A_CHIFLET;
					}
				    else
					{
					    bon=false;
					    error=ERROR_CONT_UNATTEMPTED;
					    cerror=c;
					}
				    break;
				case A_CHIFLET: 
				    if (isDigit(c))
					{
					    nombre=nombre+c;
					    etat=A_CHIFLETPOINT;
					}
				    else if (isLetter(c))
					{
					    stocke_contrainte(nombre,c,weq);
					    nombre=""; // On purge nombre
					    etat=A_PLUSMOINSINFSUP;
					}
				    else 
					{
					    bon=false;
					    error=ERROR_CONT_UNATTEMPTED;
					    cerror=c;
					}
				    break;
				case A_CHIFLETSPOINT:
				    
				    if (isDigit(c))
					{
					    nombre=nombre+c;
					    etat=A_CHIFLETSPOINT;
					}
				    else if (isLetter(c))
					{
					    
					    stocke_contrainte(nombre,c,weq);
					    nombre=""; // On purge nombre
					    etat=A_PLUSMOINSINFSUP;
					}
				    else 
					{
					    bon=false;
					    error=ERROR_CONT_UNATTEMPTED;
					    cerror=c;
					}
				    break;	
				case A_CHIFLETPOINT:
				    if  (isDigit(c))
					{
					    nombre=nombre+c;
					    etat=A_CHIFLETPOINT;
					}
				    else if (c=='.')
					{
					    nombre=nombre+c;
					    etat=A_CHIFLETSPOINT;
					}
				    else if (isLetter(c))
					{
					    stocke_contrainte(nombre,c,weq);
					    
					    nombre=""; // On purge nombre
					    etat=A_PLUSMOINSINFSUP;
					}
				    else 
					{
					    bon=false;
					    error=ERROR_CONT_UNATTEMPTED;
					    cerror=c;
					}
				    break;
				case A_PLUSMOINSINFSUP :
				    if (c=='-')
					{
					    nombre=nombre+c;
					    etat=A_CHIFLET;
					}
				    else if (c=='+')
					{
					    etat=A_CHIFLET;
					}
				    else if (c=='>')
					{
					    ineg=SUP;
					    etat=A_CHIFMOINSFIN;
					}
				    else if (c=='<')
					{
					    ineg=INF;
					    etat=A_CHIFMOINSFIN;
					}
				    else 
					{
					    bon=false;
					    error=ERROR_CONT_UNATTEMPTED;
					    cerror=c;
					}
				    break;
				    
				case A_CHIFFIN: 
				    if (isDigit(c))
					{
					    nombre=nombre+c;
					    etat=A_CHIFPOINTFIN;
					}				   
				    else 
					{
					    bon=false;
					    error=ERROR_CONT_UNATTEMPTED;
					    cerror=c;
					}
				    break;
				case A_CHIFMOINSFIN: 
				    if (isDigit(c))
					{
					    nombre=nombre+c;
					    etat=A_CHIFPOINTFIN;
					}	
				    else if (c=='-')
					{
					    nombre=nombre+c;
					    etat=A_CHIFFIN;
					}
				    else 
					{
					    bon=false;
					    error=ERROR_CONT_UNATTEMPTED;
					    cerror=c;
					}
				    break;
				case A_CHIFSPOINTFIN:
				    
				    if (isDigit(c))
					{
					    nombre=nombre+c;
					    etat=A_CHIFSPOINTFIN;
					}
				    
				    else 
					{
					    bon=false;
					    error=ERROR_CONT_UNATTEMPTED;
					    cerror=c;
					}
				    break;	
				case A_CHIFPOINTFIN:
				    if  (isDigit(c))
					{
					    nombre=nombre+c;
					    etat=A_CHIFPOINTFIN;
					}
				    else if (c=='.')
					{
					    nombre=nombre+c;
					    etat=A_CHIFSPOINTFIN;
					}
				    
				    else 
					{
					    bon=false;
					    error=ERROR_CONT_UNATTEMPTED;
					    cerror=c;
					}
				    break;
				}   
			index++;
		    }
		/*On stocke le dernier nombre dans la colonne ANS */
		if (bon)
		    {
			ans[weq]=parseFloat(nombre);
			if (isNaN(ans[weq]))
			{
			    error=ERROR_CONT_NUMBER;
			    bon=false;
			}
		    
			/* Il faut encore créer la variable "slack" */
			switch (ineg)
			    {
				
			    case SUP:
				eqs[weq][NBEQS+weq]=-1;
				break;
			    case INF:
				eqs[weq][NBEQS+weq]=1;
				break;
			    default:
				bon=false;
				cerror=ERROR_CONT_INFSUP;
			    }
			if ( (ans[weq]/eqs[weq][NBEQS+weq])<0) star[weq]=true;

		    }
		weq++;
	    }
	if (ismax===false)                     /* On minimise !*/
	    {
	    	var i,j;
		for (i=0;i<weq;i++)
		    {			
			for (j=0;j<=2*NBEQS;j++)
			    eqs[i][j]=-eqs[i][j];
			ans[i]=-ans[i];
		    }
		for (j=0;j<NBEQS;j++)
		    eqs[NBEQS][j]=-eqs[NBEQS][j];
		ans[NBEQS]=-ans[NBEQS];
	    }
	totaleq=jetons.length;
	return bon;
    }    

    function resol()
    {
	var bon=true;
	var done=false;
	var col=0,ligne=0;
	var memory,mult=0;
	var i,j;
	
	/* Première partie : enlever les étoiles */
	for (var ql=0;ql<=totaleq;ql++)
	    if (star[ql])
		
		{
		    ligne=0;
		    col=0;
		    memory=0;
		    done=true;
		    // Etape 1 :repérer la colonne du pivot!
		    for (j=0;j<2*NBEQS+1;j++)
			{
			    if (eqs[ql][j]>memory)
			    {
				done=false;
				memory=eqs[ql][j];
				col=j;
			    }
			}
		    // Etape 2 : repérer la colonne!
		    if (!done)
			{
			    memory=Number.POSITIVE_INFINITY;
			    done=true;
			    bon=false;
			    for (i=0;i<=totaleq;i++)
				if ( (eqs[i][col]>0) && ( (ans[i]/eqs[i][col])<memory) )
				    {
					done=false;
					bon=true;
					ligne=i;
					memory=ans[i]/eqs[i][col];
				    }
			}
		    // Etape 3 : pivoter!
		    if (!done)
			{
			    for (i=0;i<=totaleq;i++)
				{
				    if (i!=ligne)
					{					
					    mult=-eqs[i][col]/eqs[ligne][col];
					    for (j=0;j<=2*NBEQS;j++)
						{
						    eqs[i][j]=eqs[i][j]+mult*eqs[ligne][j];
						}
					    ans[i]=ans[i]+mult*ans[ligne];
					}
				    
				}
			    mult=-eqs[NBEQS][col]/eqs[ligne][col];
			    for (j=0;j<=2*NBEQS;j++)
				eqs[NBEQS][j]=eqs[NBEQS][j]+mult*eqs[ligne][j];
			    ans[NBEQS]=ans[NBEQS]+mult*ans[ligne];
			    
			    
			    
			}
		  
		}		
    
	/* L'algorithme normal */
	done=false;
    ans[NBEQS]=0;
	
	while (!done)
	    {
          console.log("Dernière ligne : "+eqs[NBEQS]);
          console.log("Ans dernière ligne : "+ans[NBEQS]);
          console.log("Contrainte 1 : "+eqs[0]);
          console.log("Ans 1 : "+ans[0]);
          console.log("Contrainte 2 : "+eqs[1]);
          console.log("Ans 2 : "+ans[1]);
         console.log("Contrainte 3 : "+eqs[2]);
         console.log("Ans 3 : "+ans[2]);
		ligne=0;
		col=0;
		memory=0;
		done=true;
		// Etape 1 :repérer la colonne du pivot!
		for (j=0;j<2*NBEQS+1;j++)
		    {
			if (eqs[NBEQS][j]<memory)
			    {
				done=false;
				memory=eqs[NBEQS][j];
				col=j;
			    }
		    }
		// Etape 2 : repérer la ligne!
		if (!done)
		    {
			memory=Number.POSITIVE_INFINITY;
			done=true;
			bon=false;
			for (i=0;i<=totaleq;i++)
			{
			    if ( (eqs[i][col]>0) && ( (ans[i]/eqs[i][col])<memory) )
				 {
				     done=false;
				     bon=true;
				     ligne=i;
				     memory=ans[i]/eqs[i][col];
				 }
				}
		    }
		// Etape 3 : pivoter!
		if (!done)
		    {
			for (i=0;i<=totaleq;i++)
			    {
				if (i!=ligne)
				    {					
					mult=-eqs[i][col]/eqs[ligne][col];
					for (j=0;j<=2*NBEQS;j++)
					    {
						eqs[i][j]=eqs[i][j]+mult*eqs[ligne][j];
					    }
					ans[i]=ans[i]+mult*ans[ligne];
				    }
				
			    }
			mult=-eqs[NBEQS][col]/eqs[ligne][col];
			for (j=0;j<=2*NBEQS;j++)
			    eqs[NBEQS][j]=eqs[NBEQS][j]+mult*eqs[ligne][j];
			ans[NBEQS]=ans[NBEQS]+mult*ans[ligne];

				

		    }
		
	    }		

		     
	return true;
    }
    
    // Fournit la solution basique!
    function affiche_sol()
    {
    var ch="La valeur optimale de la fonction est "+ans[NBEQS]+".\n";
	ch+="Elle est obtenue pour les valeurs : \n";
	var i=0;
	var mem=0;

	for (var j=0;j<NBEQS;j++)
	    {
          if (eqs[NBEQS][j]===0)
            {
           i=0;
		while (i<=totaleq)
		    {
			if (eqs[i][j]===0) i++;
			else 
			    {
				c=String.fromCharCode(65+j);
				ch=ch+c+"="+(ans[i]/eqs[i][j])+"\n";
				i=totaleq+1;
			    }
		    }
            }
	    }
	ch=ch+"Les autres variables sont nulles.";

	return(ch);
    }    
	
  function calcul(fonction,contraintes)
    {
	var bon;

	bon=true;

	Clear_tableau();

	bon=bon&&anal_fonc(fonction);
	console.log(eqs[NBEQS]);

	if (!bon) return affiche_erreur();
	else 
	    {
		bon=anal_cont(contraintes);
		if (!bon) return affiche_erreur();
	    }
	bon=bon&&resol();
	if (bon) return affiche_sol();
	else 
	    {
		error=ERROR_RESOL;
		return affiche_erreur();
	    }
    }

console.log(calcul("MAX 7X + 9Y + 18Z + 17W","2X+4Y+5Z +7W<42; X + Y + 2Z + 2W < 17; X + 2Y + 3Z + 3W < 24"));
