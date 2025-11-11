// Idée : retrouver un angle connaissant les sinus et les cosinus
// Trouver le sinus et le cosinus de certains angles...

// This library produces mathematical randomquizzs....
// type is a string
// options is an array

var myQuizz= {
	type: "immediate",   // Possible value : delayed (meaning that the answers are given at the end)
	title: "",            // The title of the quizz
	firstPage: "",        // The text on the first page
	lastPage: "",         // The text on the last page
	randomizedQuestions : false,        // Not necessary for a random Quizz!!
	randomizedAnswers:false,    // Not necessary for a random quizz?
	language:"fr",
	level:0,                 // If there is a level, it is limited to 0
	numbermaxquestions: 10,  // 0 if you want to execute all questions of the quizz, otherwise the maximum number of questions
	timer : 15,           // Time needed for one question, or for the whole quizz. -1 is there is no limitation of time
	globaltimer : false,    // True if you want a time for the whole quizz and not for each question
	answersound:true ,     // Play a sound after each answer (good or bad)
	tictacsound:true,     // Play a sound during each question
	tictacmp3: "",
	allowFullScreenMode:true,    // Allow the quizz to be fullscreened
	autostart:false,             // Will the Quizz start automatically?
	twoColumns:false,              // Answers displayed on two columns
}

var randomLang= {
	fr : {
		welldone : "Bravo!",
		badluck: "Dommage!",
		isit : "Est-ce que ",
		isprime : " est premier",
		isntprime : " n'est pas premier",
		decomposeintoprimenumbers : "Décomposer en produit de facteurs premiers",
		since : " car",
		is : " est ",
		isa : " est un ",
		yes : "Oui",
		no : "Non",
		therightansweris : "La bonne réponse est : ",
		compute: "Calculer ",
		pour : "pour ",
		bin : "Dans ",
		vaut : " vaut ",
		isthedigitof:" est le chiffre des ",		
		isequal : "est égal à ",
		simplify : "Simplifier",
		reduce : "Réduire",
		expand : "Développer",
		factor : "Factoriser",
		developandreduce: "Développer et réduire",
		computeandsimplify: "Calculer et simplifier",
		integerplusfraction : "Écrire comme somme d'un entier et d'une fraction irréductible comprise entre 0 et 1 : ",
		off: " de ",
		fractionfill: "Compléter par une fraction irréductible ",
		writeasadecimal: "Écrire sous forme décimale",
		writeasafraction : "Écrire sous forme d'une fraction irréductible",
		digit: ["Quel est le chiffre des unités de ","Quel est le chiffre des dizaines de ","Quel est le chiffre des centaines de ","Quel est le chiffre des milliers de ","Quel est le chiffre des dizaines de milliers de ","Quel est le chiffre des centaines de milliers de ","Quel est le chiffre des millions de ","Quel est le chiffre des dizaines de millions de ","Quel est le chiffre des centaines de millions de "],
		digitans: ["Le chiffre des unités de ","Le chiffre des dizaines de ","Le chiffre des centaines de ","Le chiffre des milliers de ","Le chiffre des dizaines de milliers de ","Le chiffre des centaines de milliers de ","Le chiffre des millions de ","Le chiffre des dizaines de millions de ","Le chiffre des centaines de millions de "],
		numberdigit: ["Combien y-a-t-il d'unités dans ","Combien y-a-t-il de dizaines dans ","Combien y-a-t-il de centaines dans ","Combien y-a-t-il de milliers dans ","Combien y-a-t-il de dizaines de milliers dans ","Combien y-a-t-il de centaines de milliers dans ","Combien y-a-t-il de millions dans ","Combien y-a-t-il de dizaines de millions dans ","Combien y-a-t-il de centaines de millions dans "],
		numberdigitans: ["Le nombre d'unités de ","Le nombre de dizaines de ","Le nombre de centaines de ","Le nombre de milliers de ","Le nombre de dizaines de milliers de ","Le nombre de centaines de milliers de ","Le nombre de millions de ","Le nombre de dizaines de millions de ","Le nombre de centaines de millions de "],
		rankdigit: ["centaine de millions", "dizaine de millions", "millions", "centaines de milliers", "dizaines de milliers", "milliers", "centaines", "dizaines", "unités"], 
		compare: "Comparer ",
		fractionfind : "Compléter la fraction pour qu'il y ait égalité :",
		fractionline : "Quelle fraction correspond au nombre sur la droite graduée?",
		fractionbox : "Quelle est la fraction d'aire colorée?",
		multiples: ["le double de ","le triple de ","le quadruple de "],
		divisors: ["la moitié de ","le tiers de ","le quart de "],
		multiple: "multiple",
		divisor: "diviseur",
		scientificwriting: "Écrire sous forme scientifique",
		onepower: "Écrire avec une puissance d'un seul nombre",
		framebyintegers: "Encadrer par deux entiers consécutifs",
		solve : "Résoudre",		
		discriminant : "Calculer le discriminant de ",
		numberofroots : "Déterminer le nombre de solutions dans $\\mathbb R$ de l'équation ",
		tworoots : "deux solutions",
		oneroot : "une solution",
		noroot : "pas de solutions",
		discriminantis : "Le discriminant du polynôme ",
		discriminantsois : "et donc l'équation ",
		admits : "admet ",
		doesnotadmit : "n'admet ",		
		findthesecondrootof : "Trouver la deuxième racine de ",
		knowingthat : "sachant que ",
		thefirstrootis : "la première racine est",
		write : "Écrire ",
		thanksto : "en fonction de ",
		and : "et ",
		decimalwriting : "Quel est l'écriture décimale de ",
		decimalwritings : ["milliers", "centaines", "dizaines", "dixièmes", "centièmes", "millièmes"],
		decimaldigits : ['milliers', 'centaines', 'dizaines', 'unités', 'dixièmes', 'centièmes', 'millièmes'],
		decimalwritingans : "L'écriture décimale de ",	
		givedecimalwriting : "Donner l'écriture décimale de ",
		givefractiondecimalwriting : "Donner l'écriture sous forme de fraction décimale de ",		
		thesolutionofthequationis : "La solution de l'équation est ",
		isasolutionof : "est une solution de ",
		decimalline : "Quel nombre décimal est représenté en rouge?",
		roundinteger : "Arrondir à l'entier le plus proche ",
		round : "Arrondir ",
		rounddecimal : ["à l'unité ","au dixième ","au centième ","au millième "],
		order : "Ranger les nombres suivants par ordre croissant",
		scale : ["Si la distance sur la carte  est ", " et l'échelle est ", " quelle est la distance réelle (en ", "Si la distance réelle est ",
		" quelle est la distance sur la carte (en "],
		upanddown : ["Un objet coûte ", " euros. Son prix augmente de "," euros. Son prix diminue de ",". Quel est son nouveau prix?"," augmenté de ", " diminué de "],
		percenttocoef : ["Augmenter un nombre de ", "Diminuer un nombre de "," %, c'est le multiplier par "],
		findimage : "Déterminer l'image de ",
		findancessors : "Déterminer le ou les antécédents de ",
		istheimageof : " est l'image de ",
		isanancessorof : " est un antécédent de ",
		trans : " se traduit en ",
		writetoabs : "Écrire sous la forme $|x-a|&lt;r$ ou $|x-a|\\leq r$ l'ensemble des réels $x$ appartenant à intervalle ",
		thepoint: "Le point ",
		belongstothecurve: " appartient-il à la courbe représentative de $f(x)=",
		discrimant:"Le discriminant de ",
		whatdiscriminant:"Quel est le discriminant de ",
		findprimitive: "Déterminer une primitive de ",
		oneprimitive: "Une primitive de ",
	},
	en : {
		welldone : "Well done!",
		badluck: "Bad luck!",
		isit : "Is ",
		isprime : " is a prime number",
		isntprime : " isn't prime",
		decomposeintoprimenumbers : "Factor as a product of prime numbers",
		since : " since",
		yes : "Yes",
		no : "No",
		is : " is ",
		isa : " is a ",
		therightansweris : "The right answer is : ",
		compute : "Compute ",
		pour : "for ",
		bin : "In ",
		vaut : " equals ",
		isthedigitof:" is the digit of ",
		isequal : "is equal to ",
		simplify : "Simplify",
		expand : "Expand",
		factor : "Factor",
		reduce : "Reduce", 
		developandreduce : "Dévelop and reduce",
		computeandsimplify : "Calculer et simplifier",
		integerplusfraction : "Write as a sum of an integer and an irreductible fraction between 0 and 1: ",
		off : " of ",
		fractionfill : "Complete by an irreductible fraction",
		writeasadecimal : "Write as a decimal number",
		writeasafraction : "Write as an irreductible fraction",
		compare : "Compare ",
		digit: ["What is the units digit of","What is the tens digit of","What is the hundreds digit of","What is the thousands digit of",
		"What is the ten thousands digit of","What is the hundred thousands digit of","What is the millions digit of",
		"What is the ten millions digit of","What is the hundred millions digit of"],
		digitans: ["The units digit of ","The tens digit of ","The hundreds digit of ","The thousands digit of ",
		"The ten thousands digit of ","The hundred thousands digit of ","The millions digit of ","The ten millions digit of ",
		"The hundred millions digit of "],
		rankdigit: ["hundred millions", "ten millions", "millions", "hundred thousands", "ten thousands", "thousands", "hundreds", "tens", "units"], 
		fractionfind : "Find the number so that there is equality :",
		fractionline : "Which fraction equals the red number?",
		fractionbox : "Which fraction equals the filled surface?",
		multiples: ["two times  ","three times ","four times "],
		divisors: ["the half of ","the third of ","the fourth of "],
		multiple: "multiple",
		divisor: "divisor",
		scientificwriting: "Give the scientific writing of",
		onepower: "Write as the power of a single number",		
		framebyintegers: "Frame by two consecutive integers",
		solve : "Solve",
		discriminant : "Compute the discriminant of ",
		numberofroots : "Determine the number of solutions of ",
		tworoots : "two solutions",
		oneroot : "one solution",
		noroot : "no solution",
		discriminantis : "The discriminant of the polynomial is ",
		discriminantsois : "and so the equation ",
		admits : "admits ",
		doesnotadmit : "admits ",	
		findthesecondrootof : "Find the second root of ",
		knowingthat : "knowing that ",
		thefirstrootis : "the first root is",
		write : "Write ",
		thanksto : "thanks to ",
		and : "and ",
		decimalwriting : "How to write ",
		decimalwritings : ["thousands", "hundreds", "tens", "tenths", "hundredths", "thousandths"],
		decimaldigits : ["thousands", "hundreds", "tens", "units", "tenths", "hundredths", "thousandths"],		
		decimalwritingans : "The writing of ",		
		givedecimalwriting : "Give the decimal writing of ",
		givefractiondecimalwriting : "Write as a decimal fraction ",		
		thesolutionofthequationis : "The solution of the equation is ",
		isasolutionof : "is a solution of ",	
		decimalline : "Which decimal number equals the red number?",
		roundinteger : "Round to the closest integer",
		round : "Round ",
		rounddecimal : ["to the unit ","to the tenth ","to the hundredth ","to the thousandth "],
		order : "Order the following numbers in increasing order",
		scale : ["If the distance on the map is ", " and the scale is ", " what is the true distance (in ", "If the true distance is ",
		 " what is the distance on the map (in "],
		upanddown : ["The price of an object is ", " euros. Its prices increases of  "," euros. Its prices decreases of  ",". What is its new price?"," increased of "," decreased of "],		 
		percenttocoef : ["Increase a number of ", "Decrease a number of "," % corresponds to multiply it by "],
		findimage : "Find the image of ", 
		findancessors : "Find the ancessor(s) of ",
		istheimageof : " is the image of ",
		isanancessorof : " is an ancessor of ",
		trans : " translates into ",
		writetoabs : "Write under the form $|x-a|&lt;r$ or $|x-a|\\leq r$ the set of real numbers $x$ belonging to the interval ",	
		thepoint: "The point ",
		belongstothecurve: " belongs to the curve of $f(x)=",
		discrimant:"The discriminant of ",
		whatdiscriminant:"What is the discriminant of ",
		findprimitive: "Find a primitive of ",
		oneprimitive: "A primitive of ",		
	}
}

var titleLang = {
	fr : {
		multipledivisor : "Multiple ou diviseur?",		
		primenumbers: "Est-il premier?",
		decomposeprimenumbers : "Décomposition en produit de facteurs premiers",
		divisibleby: "Critères de divisibilité",
		euclideandivision: "Division euclidienne",
		listofdivisors: "Diviseurs d'un entier",
		numberofdivisors: "Nombre de diviseurs",
		gcd : "Plus grand commun diviseur",
		lcm : "Plus petit commun diviseur",
		lengthconversion : "Conversion de mesures de longueurs",
		lengthwhichunit : "Quelle est la bonne unité?",
		lengthtwounits : "De deux unités vers une unité",		
		areaconversion : "Conversion de mesures d'aires",
		areawhichunit : "Quelle est la bonne unité?",
		areatwounits : "De deux unités vers une unité",
		contenanceconversion : "Conversion de mesures de contenances",
		contenancewhichunit : "Quelle est la bonne unité?",
		contenancetwounits : "De deux unités vers une unité",		
		volumeconversion : "Conversion de mesures de volumes",
		volumewhichunit : "Quelle est la bonne unité?",
		volumetwounits : "De deux unités vers une unité",		
		contenancevolume : "Conversion de mesures de contenance et de volume",
		masseconversion : "Conversion d'unités de masse",
		masswhichunit : "Quelle est la bonne unité?",
		masstwounits : "De deux unités vers une unité",		
		hourconversion: "Conversion d'unités de temps",
		percent : "Pourcentage d'un nombre",   //POURCENTAGE ET PROPORTIONNALITE
		percentupanddown : "Augmentation et diminution en pourcentage",
		percenttocoef : "Traduire par une multiplication une augmentation ou une diminution en pourcentage",
		coeftopercent : "Passer d'un coefficient multiplicatif à un pourcentage",
		scale : "Problèmes d'échelle",
		fourthproportional : "Compléter le tableau de proportionnalité",
		isitproportional : "Est-ce une situation de proportionnalité?",
		affineevaluation : "Évaluation d'une fonction affine",  // CALCUL LITTERAL
		polynomialevaluation : "Évaluation d'un polynôme",
		calculusprogram : "Expression littérale d'un programme de calcul",
		calculusprogramevaluation : "Que fait ce programme de calcul?",
		litteralsum : "Réduire une somme",
		litteralproduct : "Réduire un produit",
		litteralparenthesis : "Enlever les parenthèses",
		litteralexpandsmallproduct : "Développer les produits",
		litteralexpandproduct : "Développer les produits",
		litteralfactorcommon : "Factoriser en retrouvant le facteur commun",
		litteralfactorsmallproduct : "Factoriser", 
		litteraldevelopsumsquare : "Développer et réduire en utilisant $(a+b)^2$",
		litteralfactorsumsquare : "Factoriser en utilisant $(a+b)^2$",
		litteraldevelopdifferencesquare : "Développer et réduire en utilisant $(a-b)^2$",
		litteralfactordifferencesquare : "Factoriser en utilisant $(a-b)^2$",		
		litteraldevelopsumdifference : "Développer et réduire en utilisant $(a+b)(a-b)$",
		litteralfactorsumdifference : "Factoriser en utilisant $(a+b)(a-b)$",	
		equationfirstdegree : 'Résoudre une équation du type $ax+b=c$',
		equationfirstdegreetwo : 'Résoudre une équation du type $ax+b=cx+d$',		
		equationfirstdegreethree : 'Résoudre une équation du type $ax+b=0$',		
		equationfirstdegreefour : 'Résoudre une équation du type $ax=b$',	
		equationsolutionfirstdegree : 'Est-ce une solution?',		
		equationzeroproduct : 'Résoudre une équation produit nul',	
		equationidentity : 'Résoudre une équation du second degré grâce à une identité remarquable',
		equationfacto : 'Résoudre une équation du second degré en utilisant une factorisation',
		equationdiscriminant : "Calculer le discriminant d'un polynôme du second degré",
		equationnumberofroots : "Déterminer le nombre de solutions d'une équation du second degré",
		equationsecondroot : "Déterminer la deuxième racine",
		equationsecdegreesumproduct : "Déterminer la somme et le produit des deux racines",
		equationsecdegreeroots : "Déterminer les racines d'une équation du second degré",
		equationvariable : "Exprimer une variable en fonction des autres",
		ineqfirstdegree : "Résoudre une inéquation du premier degré",
		isitsolutionineqfd : "Est-ce une solution?",
		yesnoineq : "Vrai ou faux?",
		fractionproduct : "Produit de deux fractions", /////// FRACTIONS ////////
		fractionintegerproduct : "Produit d'un entier et d'une fraction",
		fractionsimplify : "Simplifier une fraction",
		fractionintegerplusfraction : "Écrire comme somme d'un entier et d'une fraction",
		fractionsum : "Somme et différence de fractions",
		fractionquotient : "Quotient de deux fractions",
		fractionfill : "Compléter par une fraction",
		fractiondecimal : "Écrire une fraction sous forme décimale",
		fractioncompare : "Comparer deux fractions",
		decimalfraction : "Écrire un nombre décimal comme une fraction",
		digit : "Quel est le chiffre des ... de ...?",
		numberdigit : "Quel est le nombre de ... de ...?",
		rankdigit : "Quel est le rang occupé par ce chiffre?",
		fractionfind : "Compléter pour obtenir deux fractions égales",
		fractionline : "Découvrir les fractions sur une droite graduée",
		fractionbox : "Découvrir les fractions comme partie d'une surface",
		fractionthird : "Moitié, double, tiers, triple...",
		fractionoperation: "Opérations sur les fractions",
		decimalwriting : "Donner l'écriture décimale d'un nombre",
		fractiontodecimal : "Donner l'écriture décimale d'une fraction décimale",
		decimaltofraction : "Donner l'écriture sous forme de fraction décimale d'un nombre décimal",  // Nombres décimaux
		decimalcompare : "Comparer deux nombres décimaux",
		decimaldigit : "Rang occupé par un chiffre",
		decimalline : "Découvrir les nombres décimaux sur une droite graduée",
		decimalroundinteger : "Arrondir à l'entier le plus proche",
		decimalroundgeneral : "Arrondir un nombre décimal", 
		decimalorder : "Ordonner des nombres décimaux",
		multiplicationtable : "Tables de multiplication",  ////////OPERATIONS//////////////////
		multiplicationhole : "Tables de multiplication à trou",
		tencomplement : 'Complément à 10',
		integeradd : 'Addition d\'entiers',
		integersub : 'Soustraction d\'entiers',
		integerhole : 'Addition à trou d\'entiers',
		integerdiveucli : 'Division euclidienne de deux entiers',
		decimaladd : 'Addition de nombres décimaux',
		decimalsub : 'Soustraction de nombres décimaux',
		decimalhole : 'Addition à trou de nombres décimaux',
		decimalproduct : 'Produit d\'un entier et d\'un nombre décimal',
		rightrel : 'Quelle est la bonne opération?',
		addrel: 'Addition de nombres relatifs',
		subrel : 'Soustraction de nombres relatifs',
		multrel : 'Multiplication de nombres relatifs',
		addsubrel : 'Addition et soustraction de nombres relatifs',
		toutrel : 'Opérations sur les nombres relatifs',
		squarerel: 'Carrés de relatifs',
		hourope: 'Opérations sur les durées',
		decimaltoscientific : 'Écrire un nombre décimal en écriture scientifique',  //////////////PUISSANCES////////////
		onepower: "Écrire avec une seule puissance d'un nombre",
		powertonumber: "Écrire ce nombre sans puissance",
		power10tonumber: "Écrire une puissance de 10 sous forme d'un nombre",
		powernumberto10: "Écrire un nombre sous forme d'une puissance de 10",
		powercomparescientific: "Comparer deux nombres écrits en écriture scientifique",
		deletesquareroots : 'Supprimer les racines carrées',   /////////////////RACINES CARREES///////////////////
		simplifysquareroots : 'Écrire sous la forme $a\\sqrt b$',
		squarerootapproximate : 'Encadrer une racine carrée par deux entiers consécutifs',
		squarerootonly : "Écrire comme la racine carrée d'un nombre",
		isitfunction : "Est-ce la représentation graphique d'une fonction?", ////////////FONCTIONS//////////
		functionimage : "Déterminer l'image d'un nombre par une fonction",
		functionancessors : "Déterminer le ou les antécédents d'un nombre par une fonction",
		functionimantvar : "Image ou antécédent?",
		functionpaireimpaire : "Fonction paire ou impaire?",
		functioncompare : "Comparer deux images",
		belongscurve : "Ce point appartient-il à la courbe?",
		affinecoeff: "Coefficients d'une fonction affine",
		affineantim: "Images et antécédents par une fonction affine",
		affinesigne: "Signe d'une fonction affine",
		secdegremaximum: "Maximum et minimum d'un polynôme du second degré",
		functionusualinequality : "Inégalités et fonctions usuelles",
		convexe : "Intervalles où une fonction est convexe",
		dl : "Développements limités usuels",             // Dérivation
		affineusualprimitive : "Primitives usuelles et fonctions affines", // INTEGRATION
		integrationcomposition : "Primitives et reconnaissance de formes",
		inttoineg : "Écrire l'appartenance à un intervalle sous la forme d'une inégalité",  ///////// R //////////
		inegtoint : "Écrire une inégalité sous la forme d'appartenance à un intervalle",
		inint : "Ce nombre appartient-il à l'intervalle?",
		abstoint : "Inéquations avec valeur absolue",
		abseq : "Équations avec valeur absolue",
		absfromint : "D'un intervalle à une valeur absolue",
		abswithout : "Écrire sans valeur absolue",
		intconv : "Intervalle de convergence d'une série entière",   //// SERIE ENTIERE ////
		matrixal : "Matrice d'une application linéaire", // MATRICE
		matrixalal : "Matrice d'une application linéaire",
		matrixproduct : "Produit de deux matrices",
		matrixproductcompute: "Produit de deux matrices",
		matrixdetrow: "Développement d'un déterminant",
		matrixcoef: "Calculer le coefficient manquant",
		suitearithm : "Suite arithmétique", //SUITE
		suitegeo : "Suite géométrique",
		suitegeneration : "Mode de génération d'une suite",
		serienum : "Convergence de séries",
		trigoval: "Valeurs des fonctions trigonométriques",  // TRIGO
		trigoangle : "Déterminer un angle connaissant son sinus et son cosinus",
		trigodecalageangle : "Formule de décalage d'angles",
		colineaire : "Vecteurs colinéaires?", // GEO
		milieu : "Coordonnées du milieu",
		vecteur : "Coordonnées d'un vecteur",
		determinant : "Déterminant de deux vecteurs",
		scalarproduct : "Produit scalaire de deux vecteurs",
		orthogonalvectors : "Vecteurs orthogonaux?",
		orthogonalcollinearvectors : "Vecteurs orthogonaux, colinéaires?",
		thales : "Configuration de Thalès",		
		chasles : "Relation de Chasles",
		complexesope : "Opérations sur les nombres complexes", // Complexes
		complexesexpo : "Mise sous forme exponentielle d'un nombre complexe",
		complexesopeexpo : "Opérations sur les nombres complexes",
		irregularverbs : "Verbes irréguliers en anglais" // IRREGULAR VERBS
	},
	en : {
		multipledivisor : "Multiple or divisor?",
		primenumbers: "Is it a prime number?",
		decomposeprimenumbers : 'Factor into a product of prime numbers',
		divisibleby: "Divisibility",	
		euclideandivision: "Euclidean division",	
		listofdivisors: "Divisors of an integer",
		numberofdivisors: " Number of divisors",
		gcd: "Greatest common divisor",
		lcm : "Least common multiple",
		lengthconversion : "Length conversion",
		lengthwhichunit : "What is the right unit?",
		lengthtwounits : "From two units to one unit",	
		contenanceconversion : "Volume onversion",
		contenancewhichunit : "What is the right unit?",
		contenancetwounits : "From two units to one unit",
		areaconversion : "Area conversion",		
		areatwounits : "From two units to one unit",	
		areawhichunit : "What is the right unit?",
		volumeconversion : "Volume conversion",		
		volumetwounits : "From two units to one unit",	
		volumewhichunit : "What is the right unit?",		
		contenancevolume : "Volume conversion",
		masseconversion : "Mass conversion",	
		masstwounits : "From two units to one unit",	
		masswhichunit : "What is the right unit?",		
		hourconversion: "Time units conversion",		
		percent : "Percent of a number",
		percentupanddown : "Apply a percent",
		percenttocoef : "Percent to multiplication",
		coeftopercent : "Multiplication to percent",
		scale : "Scales",
		isitproportional : "Is this a proportional situation?",
		fourthproportional : "Find the fourth proportional",		
		affineevaluation : "Evaluation of an affine function",
		polynomialevaluation : "Evaluation of a polynomial",
		litteralsum : "Simplify a sum",
		litteralproduct : "Simplify a product",
		litteralparenthesis : "Delete the parenthesis",
		litteralexpandsmallproduct : "Expand the products",
		litteralexpandproduct : "Expand the products",
		litteralfactorcommon : "Factor!",
		litteralfactorsmallproduct : "Factor!",
		litteraldevelopsumsquare : "Develop and reduce using $(a+b)^2$",		
		litteralfactorsumsquare : "Factor using $(a+b)^2$",
		litteraldevelopdifferencesquare : "Develop and reduce using $(a-b)^2$",		
		litteralfactordifferencesquare : "Factor using $(a-b)^2$",
		litteraldevelopsumdifference : "Develop and reduce using $(a+b)(a-b)$",		
		litteralfactorsumdifference : "Factor using $(a+b)(a-b)$",	
		equationfirstdegree : 'Solve $ax+b=c$',		
		equationfirstdegreetwo : 'Solve $ax+b=cx+d$',				
		equationfirstdegreethree : 'Solve $ax+b=0',
		equationfirstdegreefour : 'Solve $ax=b$',	
		equationsolutionfirstdegree : 'Is it a solution?',
		equationidentity : "Solve an equation of degree 2",
		equationzeroproduct : 'Solve $(ax+b)(cx+d)=0$',	
		equationfacto : 'Solve an equation of degree 2 by using a factorisation',		
		equationdiscriminant : "Compute the discriminant of a polynomial of degree 2",
		equationnumberofroots : "Determiner the number of roots of an equation of degree 2",
		equationsecondroot : "Find the second root",
		equationsecdegreesumproduct : "Find the sum and the product of the roots",
		equationsecdegreeroots: "Find the roots of a polynomial of degree 2",
		equationvariable : "Write a variable using the others",		
		ineqfirstdegree : "Solve an inequation",
		isitsolutionineqfd : "Is it a solution?",		
		yesnoineq : "True or false?",
		fractionproduct : "Product of two fractions", /// FRACTIONS ///
		fractionintegerproduct : "Product of an integer and a fraction",
		fractionsimplify : "Irreductible form of a fraction",
		fractionintegerplusfraction : "Write as a sum of an integer and of a fraction",
		fractionsum : "Sum and difference of two fractions",
		fractionquotient : "Quotient of two fractions",
		fractionfill: "Complete by a fraction",
		fractioncompare: "Compare two fractions",
		fractionoperation: "Sum, quotient and products of two fractions",		
		fractiondecimal : "Write a fraction as a decimal number",
		decimalfraction : "Write a decimal number as a fraction",
		decimalcompare : "Compare two decimal numbers",		
		decimalorder : "Order decimal numbers",
		digit : "What is the ... digit of ...?",
		numberdigit : "How many ... in ...?",
		rankdigit : "This digit is ...",
		decimalwriting : "How to write this number?",
		decimaltofraction : "Write as a decimal fraction a decimal number",
		decimaldigit : "This digit is ....",
		decimalline : "Discover decimal numbers",
		decimalroundinteger : "Round to the closest integer",	
		decimalroundgeneral : "Round a decimal number",
		fractiontodecimal : "Donner l'écriture décimale d'une fraction",
		fractionfind : "Find the number to get equality",
		fractionline : "Discover fractions",
		fractionbox : "Discover fractions",
		fractionthird : "Half or third",
		squarerel : 'Carrés de relatifs',
		multiplicationtable : "Multiplication tables",  //////// OPERATIONS /////////////
		multiplicationhole : "Multiplication tables with holes",
		tencomplement : "Complement to ten",
		integeradd : 'Addition of integers',
		integersub : 'Substraction of integers',
		integerhole : 'Addition with homes of integers',
		integerdiveucli : 'Division with reminder',
		decimaladd : 'Addition of decimal numbers',
		decimalsub : 'Substraction of decimal numbers',		
		decimalhole : 'Addition with holes of decimal numbers',
		decimalproduct : 'Product of an integer and of a decimal number',
		rightrel : 'What is the right operation?',		
		addrel: 'Addition of integers',
		subrel : 'Substraction of integers',
		multrel : 'Multiplication of integers',
		addsubrel : 'Addition and substraction of integers',
		toutrel : 'Operations on integers',		
		hourope: 'Opérations on durations',		
		decimaltoscientific : 'Write this decimal number in scientific writing',  //////PUISSANCES/////
		onepower: "Write as the power of a single number",
		powertonumber: "Write without an exponent",
		power10tonumber: "Write a power of 10 as a number",
		powercomparescientific: "Compare two numbers in scientific writing",
		deletesquareroots : 'Simplify the following square roots',////RACINES CARREES/////
		simplifysquareroots : 'Write under the form $a\\sqrt b$',	
		squarerootapproximate : 'Frame a square root by two consecutive integers',
		squarerootonly : "Write as the square root of an integer",
		isitfunction : "Is-it the curve of a function?",   // FONCTIONS
		functionimage : "Find the image of a real number by a function",
		functionancessors : "Find the ancessor(s) by a function",
		functionimant : "Image or ancessor?",
		functionpaireimpaire : "Odd or even function?",	
		functioncompare : "Compare two images",
		belongscurve : "Does this point belongs to the curve?",	
		affinecoeff : "Coefficients of an affine function",
		affineantim: "Images and ancessors by an affine function",
		affinesigne: "Sign of an affine function",
		secdegremaximum: "Maximum and minimum of a polynomial of degree 2",
		functionusualinequality : "Inequalities and usual functions",
		convexe : "Intervals of convexity",
		dl : "Expansion in series",             // Dérivation		
		affineusualprimitive : "Integration and affine functions", // INTEGRATION
		integrationcomposition : "Primitives and chain rule",
		inttoineg : "Write an interval as an inequalite",  ///////// R //////////
		inegtoint : "Write an inequality as an interval",
		inint : "Does this number belong to this interval?",
		abstoint : "Inequation with absolute values",
		abseq : "Equations with absolute values",	
		absfromint : "From an interval to an absolute value",		
		abswithout : "Write without an absolute value", 
		intconv : "Convergence of power series",  // POWER SERIES
		matrixal : "Matrix of a linear map", // MATRICE
		matrixalal: "Matrix of a linear map",
		matrixproduct : "Product of two matrices",
		matrixproductcompute : "Product of two matrices",
		matrixdetrow: "Computation of a determinant",
		matrixcoef: "What is the missing coefficient?",
		suitearithm : "Arithmetical sequence", //SUITE
		suitegeo : "Geometrical sequence",
		suitegeneration : "Several ways to define a sequence",
		serienum : "Convergence of séries",
		trigoval: "Values of trigonometric functions",  // TRIGO
		trigoangle : "Find an angle knowing its sine and its cosine",
		trigodecalageangle : "Change the angles of a sine or a cosine",
		colineaire : "Collinear vectors?", // GEO
		determinantvec : "Determinant of two vectors",		
		milieu : "Coordonnées du milieu",		
		vecteur : "Coordinates of a vector",		
		thales : "Thalès configuration",
		chasles : "Chasles relation",
		determinant : "Determinant of two vectors",
		scalarproduct : "Scalar product of two vectors",
		orthogonalvectors : "Orthogonal vectors?",	
		orthogonalcollinearvectors : "Orthogonal or collinear vectors?",		
		complexesope : "Complex numbers",  // Complex numbers
		complexesexpo : "Exponentiel form of a complex number",
		complexesopeexpo : "Complex numbers",
		irregularverbs : "Irregular verbs" // IRREGULAR VERBS		
	}
}

function makerandommultiple(minimum,maximum,mult)

{
	var intmin=Math.ceil(minimum/mult);
	var intmax=Math.floor(maximum/mult);
	return mult* (Math.floor(Math.random() * (intmax - intmin + 1)) + intmin);
}

function makenonzerorandommultiple(minimum,maximum,mult)
{
	var result=0;
	while (result==0)
		result=makerandommultiple(minimum,maximum,mult);
	return result;
}

function makeexclusiverandommultiple(minimum,maximum,mult,exclu)
{
	var result=exclu[0];
	while (exclu.indexOf(result)!=-1)
		result=makerandommultiple(minimum,maximum,mult);
	return result;
}

function myformatnumber(number,virg,esp)
{
	var index,retour;
	
	number=number+"";
	retour="";
	index = number.indexOf('.');
	if (index==-1) index=number.length;
	
	for (i=0;i<index;i++)
	{
		retour=retour+number.charAt(i);
		if ( ((index-i)%3==1) && ((index-i)!=1) ) retour=retour+esp;
	}
	if (index!=number.length)
	{
		retour+=virg;
		for (i=index+1;i<number.length;i++)
		{
			retour=retour+number.charAt(i);
			if ( (   ((i-index)%3)==0) && (i!=(number.length-1)) ) retour=retour+esp;
		}
	}	
	return retour;
}
	
	

function spaceformatnumber(number,lang)
{
	if (lang=="fr")
	{
		return myformatnumber(number,","," ");
	}
	else
	{
		return myformatnumber(number,".",",");
	}
	
}	
	

function formatnumber(number,lang)
{
	if (lang=="fr")
	{
		return myformatnumber(number,",","");
	}
	else
	{
		return myformatnumber(number,".","");
	}
	
}

function formatsol(sol,lang)
{
	if (sol[0]=='[') sol=sol.substr(1,sol.length-2);

	if (lang=="fr")
	{
		sol=sol+"";
		return sol.replace(/,/g,';');		
	}
	else return sol;
}

// Formate un nombre décimal suivant la langue

function formatpositivetexnumber(number,lang)
{
	var index,retour,virg,esp;
	if (lang=="fr")
	{
		virg=",\\!";
		esp="\\ ";
	}
	else
	{
		virg=".";
		esp=",\\!";
	}
	
	number=number+"";

	retour="";
	index = number.indexOf('.');
	if (index==-1) index=number.length;
	
	for (i=0;i<index;i++)
	{
		retour=retour+number.charAt(i);
		if ( ((index-i)%3==1) && ((index-i)!=1) ) retour=retour+esp;
	}
	
	if (index!=number.length)
	{
		retour+=virg;
		for (i=index+1;i<number.length;i++)
		{
			retour=retour+number.charAt(i);
			if ( ((i-index)%3==0) && (i!=(retour.length-1)) ) retour=retour+esp;
		}
	}	
	return retour;
}

function formattexnumber(number,lang)
{
	if (number>=0) return formatpositivetexnumber(number,lang);
	else return "-"+formatpositivetexnumber(Math.abs(number),lang);
}

function addparenthesis(a)
{
	if (a>=0) return a; else return '('+a+')';
}

function addparenthesistwo(a,b)
{
	if (a>=0) return b; else return '('+b+')';
}

function addparenthesisplus(a)
{
	if (a>=0) return '(+'+a+	')'; else return '('+a+')';
}
	

function supertrim(expr)
{
	return expr.replace(/ /g,'');
}

function simplifyLatexNumber(n)
{
	switch (n)
	{
		case 1: return '';
		case -1: return '-';
		default : return n;
	}
}

function addLatexNumber(n)
{
	if (n>0) return '+'+simplifyLatexNumber(n); else return simplifyLatexNumber(n);
}
		

// Génère toutes les permutations d'un tableau
function permutations(list)
{
	// Empty list has one permutation
	if (list.length == 0)
		return [[]];
		
		
	var result = [];
	
	for (var i=0; i<list.length; i++)
	{
		// Clone list (kind of)
		var copy = Object.create(list);

		// Cut one element from list
		var head = copy.splice(i, 1);
		
		// Permute rest of list
		var rest = permutations(copy);
		
		// Add head to each permutation of rest of list
		for (var j=0; j<rest.length; j++)
		{
			var next = head.concat(rest[j]);
			result.push(next);
		}
	}
	return result;
}

// A partir d'un tableau de solutions permutées, fabrique un nouveau tableau de chaines
function unsplittabsol(list)
{
	var result=[];
	for (var i=0;i<list.length;i++)
	{
		result.push('');
		for (var j=0;j<list[i].length;j++)
		{	
			if (j>0) result[i]+=';';
			result[i]+=list[i][j];
		}
	}
	return result;
}

// Réalise le tableau des réponses possibles à partir d'un ensemble de solutions
function makeTabSol(sol)
{
	var tsol=sol.split(';');
	var lsol=permutations(tsol);
	return (unsplittabsol(lsol));
}

function getRandomTitle(type,lang)
{
	return titleLang[lang][type];
}


function randomQuizz(options)
{
	for ( var id in options)
	{
		myQuizz[id]=options[id];
	}
	myRandomLang =randomLang[myQuizz.language];
	
	// Common for everything!
	
	if (!options.level) options.level=0;
	
	var questions=[];	
	
	for (var i=0;i<myQuizz.numbermaxquestions;i++)
	{
		type=makerandommultiple(0,myQuizz.generator.length-1,1);
		switch (myQuizz.generator[type])
		{
			////////////////////   ARITHMETIC
			case 'multipledivisor':
				questions[i]= randomQuizzMultipleDivisors();
				break;
			case 'divisibleby':	
				questions[i]= randomQuizzDivisibleBy();
				break;
			case 'primenumbers':
				questions[i]= randomQuizzPrimeNumbers();
				break;
			case 'decomposeprimenumbers':
				questions[i]= randomQuizzDecompositionPrimeNumbers();
				break;
			case 'euclideandivision':
				questions[i]= randomQuizzIntegerDivEucli();
				break;
			case 'listofdivisors':
				questions[i]= randomQuizzListOfDivisors();
				break;
			case 'numberofdivisors':
				questions[i]= randomQuizzNumberOfDivisors();
				break;
			case 'gcd':
				questions[i]= randomQuizzGcd();
				break;
			case 'lcm':
				questions[i]= randomQuizzLcm();
				break;				
			/////////////////////// CONVERSIONS
			case 'areaconversion':  
				questions[i]= randomQuizzAreaConversion();
				break;
			case 'areawhichunit':
				questions[i]= randomQuizzAreaWhichUnit();
				break;	
			case 'areatwounits' :
				questions[i]= randomQuizzTwoUnits([ '\\textrm{km}^2', '\\textrm{hm}^2', '\\textrm{dam}^2', '\\textrm{m}^2', '\\textrm{dm}^2', '\\textrm{cm}^2', '\\textrm{mm}^2'],2);
				break;				
			case 'lengthconversion':
				questions[i]= randomQuizzLengthConversion();
				break;
			case 'lengthwhichunit':
				questions[i]= randomQuizzLengthWhichUnit();
				break;		
			case 'lengthtwounits' :
				questions[i]= randomQuizzTwoUnits([ '\\textrm{km}', '\\textrm{hm}', '\\textrm{dam}', '\\textrm{m}', '\\textrm{dm}', '\\textrm{cm}', '\\textrm{mm}'],1);
				break;
			case 'contenanceconversion':
				questions[i]= randomQuizzContenanceConversion();
				break;
			case 'contenancewhichunit':
				questions[i]= randomQuizzContenanceWhichUnit();
				break;		
			case 'contenancetwounits' :
				questions[i]= randomQuizzTwoUnits([ '\\textrm{hl}', '\\textrm{dal}', '\\textrm{l}', '\\textrm{dl}', '\\textrm{cl}', '\\textrm{ml}'],1);
				break;	
			case 'volumeconversion':
				questions[i]= randomQuizzVolumeConversion();
				break;
			case 'volumewhichunit':
				questions[i]= randomQuizzVolumeWhichUnit();
				break;	
			case 'volumetwounits' :
				questions[i]= randomQuizzTwoUnits([ '\\textrm{km}^3', '\\textrm{hm}^3', '\\textrm{dam}^3', '\\textrm{m}^3', '\\textrm{dm}^3', '\\textrm{cm}^3', '\\textrm{mm}^3'],3);
				break;					
			case 'contenancevolume':
				questions[i]= randomQuizzMixedVolumeConversion();
				break;
			case 'masseconversion':
				questions[i]= randomQuizzMasseConversion();
				break;
			case 'masswhichunit':
				questions[i]=randomQuizzMassWhichUnit();
				break;
			case 'masstwounits':	
				if (myQuizz.level==0)
					questions[i]= randomQuizzTwoUnits([ '\\textrm{kg}', '\\textrm{hg}', '\\textrm{dag}', '\\textrm{g}', '\\textrm{dg}', '\\textrm{cg}', '\\textrm{mg}'],1);
				else
					questions[i]= randomQuizzTwoUnits([ '\\textrm{t}','\\textrm{q}','','\\textrm{kg}', '\\textrm{hg}', '\\textrm{dag}', '\\textrm{g}'],1);					
				break;				
			case 'hourconversion':
				questions[i]= randomQuizzHourConversion();
				break;
			case 'percent':  // POURCENTAGE ET PROPORTIONNALITE
				questions[i]= randomQuizzPercent();
				break;
			case 'percentupanddown':
				questions[i]= randomQuizzPercentUpandDown();
				break;		
			case 'percenttocoef':
				questions[i]= randomQuizzGeneral(randomQuizzPercentToCoef);
				break;
			case 'coeftopercent':
				questions[i]= randomQuizzGeneral(randomQuizzCoeffToPercent);
				break;
			case 'scale':
				questions[i]= randomQuizzGeneral(randomQuizzScale);
				break;
			case 'isitproportional':
				questions[i]= randomQuizzIsItProportional();
				break;
			case 'fourthproportional':
				questions[i]= randomQuizzGeneral(randomQuizzFourthProportional);
				break;			
			case 'affineevaluation':
				questions[i]= randomQuizzAffineEvaluation();
				break;
			case 'polynomialevaluation':
				questions[i]= randomQuizzPolynomialEvaluation();
				break;
			case 'calculusprogram':
				questions[i]=randomQuizzCalculusProgram();
				break;
			case 'calculusprogramevaluation':
				questions[i]=randomQuizzCalculusProgramEvaluation();
				break;				
			case 'litteralsum':
				questions[i]= randomQuizzLitteralSum();
				break;
			case 'litteralproduct':
				questions[i]= randomQuizzLitteralProduct();
				break;
			case 'litteralparenthesis':
				questions[i]= randomQuizzLitteralParenthesis();
				break;
			case 'litteralexpandproduct':
				questions[i]= randomQuizzLitteralExpandProduct();
				break;
			case 'litteralexpandsmallproduct':
				questions[i]= randomQuizzLitteralExpandSmallProduct();
				break;
			case 'litteralfactorcommon':
				questions[i]= randomQuizzLitteralFactorCommon();
				break;
			case 'litteralfactorsmallproduct':
				questions[i]= randomQuizzLitteralFactorSmallProduct();
				break;
			case 'litteraldevelopsumsquare':
				questions[i]= randomQuizzLitteralDevelopSumSquare();
				break;
			case 'litteralfactorsumsquare':
				questions[i]= randomQuizzLitteralFactorSumSquare();
				break;	
			case 'litteraldevelopdifferencesquare':
				questions[i]= randomQuizzLitteralDevelopDifferenceSquare();
				break;
			case 'litteralfactordifferencesquare':
				questions[i]= randomQuizzLitteralFactorDifferenceSquare();
				break;
			case 'litteraldevelopsumdifference':
				questions[i]= randomQuizzLitteralDevelopSumDifference();
				break;
			case 'litteralfactorsumdifference':
				questions[i]= randomQuizzLitteralFactorSumDifference();
				break;	
			case 'equationfirstdegree':
				questions[i]= randomQuizzEquationFirstDegree();
				break;
			case 'equationfirstdegreetwo':
				questions[i]= randomQuizzEquationFirstDegreeTwo();
				break;	
			case 'equationfirstdegreethree':
				questions[i]= randomQuizzEquationFirstDegreeThree();
				break;	
			case 'equationfirstdegreefour':
				questions[i]= randomQuizzEquationFirstDegreeFour();
				break;	
			case 'equationsolutionfirstdegree':
				questions[i]=randomQuizzSolutionEquationFirstDegree();
				break;
			case 'equationzeroproduct':
				questions[i]= randomQuizzEquationZeroProduct();
				break;
			case 'equationidentity':
				questions[i]= randomQuizzEquationIdentity();
				break;
			case 'equationfacto':
				questions[i]= randomQuizzEquationFacto();
				break;
			case 'equationdiscriminant':
				questions[i]= randomQuizzEquationDiscriminant();
				break;
			case 'equationnumberofroots':
				questions[i]= randomQuizzEquationNumberOfRoots();
				break;
			case 'equationsecondroot':
				questions[i]= randomQuizzEquationSecondRoot();
				break;
			case 'equationsecdegreesumproduct':
				questions[i]= randomQuizzEquationSecDegreeSumProduct();
				break;
			case 'equationsecdegreeroots':
				questions[i]= randomQuizzEquationSecDegreeRoots();
				break;
			case 'equationvariable':
				questions[i]= randomQuizzEquationVariable();
				break;
			case 'ineqfirstdegree':
				questions[i]= randomQuizzInequationFirstDegree();
				break;
			case 'isitsolutionineqfd':
				questions[i]=randomQuizzIsItSolutionIneqFD();
				break;
			case 'yesnoineq':
				questions[i]=randomQuizzYesNoIneq();
				break;
			case 'fractionproduct':  /////// FRACTIONS /////////////
				questions[i]= randomQuizzFractionProduct();
				break;
			case 'fractionintegerproduct':
				questions[i]= randomQuizzFractionIntegerProduct();
				break;
			case 'fractionsimplify':
				questions[i]= randomQuizzFractionSimplify();
				break;
			case 'fractionintegerplusfraction':
				questions[i]= randomQuizzFractionIntegerPlusFraction();
				break;
			case 'fractionsum':
				questions[i]= randomQuizzFractionSum();
				break;
			case 'fractionquotient':
				questions[i]= randomQuizzFractionQuotient();
				break
			case 'fractionoperation':
				questions[i] = randomQuizzFractionOperation();
				break;
			case 'fractionfill': 
				questions[i]= randomQuizzFractionFill();
				break;
			case 'fractiondecimal' : 
				questions[i]= randomQuizzFractionToDecimal();
				break;
			case 'decimalfraction':
				questions[i]= randomQuizzDecimalToFraction();
				break;
			case 'fractioncompare':
				questions[i]= randomQuizzFractionCompare();
				break;
			case 'fractionfind':
				questions[i]= randomQuizzFractionFind();
				break;	
			case 'fractionline':
				questions[i]= randomQuizzFractionLine();
				break;
			case 'fractionbox':
				questions[i]= randomQuizzFractionBox();
				break;
			case 'fractionthird':
				questions[i]= randomQuizzFractionThird();
				break;
			case 'digit':  // Numération
				questions[i]= randomQuizzDigit();
				break;
			case 'numberdigit':
				questions[i]= randomQuizzNumberDigit();
				break;
			case 'rankdigit':
				questions[i] = randomQuizzRankDigit();
				break;
			case 'decimalwriting':
				questions[i]= randomQuizzDecimalWriting();
				break;
			case 'fractiontodecimal':
				questions[i]= randomQuizzFractionToDecimal();
				break;
			case 'decimaltofraction':
				questions[i]= randomQuizzDecimalToFraction();
				break;			
			case 'decimalcompare':
				questions[i]= randomQuizzDecimalCompare();
				break;
			case 'decimaldigit':
				questions[i]= randomQuizzDecimalDigit();
				break;
			case 'decimalline':
				questions[i]= randomQuizzDecimalLine();
				break;
			case 'decimalroundinteger':
				questions[i]= randomQuizzDecimalRoundInteger();
				break;
			case 'decimalroundgeneral':
				questions[i]= randomQuizzDecimalRoundGeneral();
				break;	
			case 'decimalorder':
				questions[i]= randomQuizzDecimalOrder();
				break;
			case 'multiplicationtable':   //////// OPERATIONS /////////////
				questions[i]= randomQuizzMultiplicationTable();
				break;
			case 'multiplicationhole':
				questions[i]= randomQuizzMultiplicationHole();
				break;			
			case 'tencomplement':
				questions[i]= randomQuizzTenComplement();
				break;
			case 'integeradd':
				questions[i]= randomQuizzIntegerAdd();
				break;
			case 'integersub':
				questions[i]= randomQuizzIntegerSub();
				break;
			case 'integerhole':
				questions[i]= randomQuizzIntegerHole();
				break;
			case 'integerdiveucli':
				questions[i]= randomQuizzIntegerDivEucli();
				break;
			case 'decimaladd':
				questions[i]= randomQuizzDecimalAdd();
				break;
			case 'decimalsub':
				questions[i]= randomQuizzDecimalSub();
				break;				
			case 'decimalhole':
				questions[i]= randomQuizzDecimalHole();
				break;
			case 'decimalproduct':
				questions[i]= randomQuizzDecimalProduct();
				break;
			case 'rightrel':
				questions[i] = randomQuizzRightRel();
				break;
			case 'addrel':
				questions[i] = randomQuizzAddSubRelatif('+',myQuizz.level+2);
				break;
			case 'subrel':
				questions[i] = randomQuizzAddSubRelatif('-',myQuizz.level+2);
				break;
			case 'multrel':
				questions[i] = randomQuizzOpeRelatif('*',myQuizz.level+2);
				break;
			case 'addsubrel':
				questions[i] = randomQuizzAddSubRelatif(['+','-'],myQuizz.level+2);
				break;
			case 'toutrel':
				questions[i] = randomQuizzOpeRelatif(['+','-','*'],myQuizz.level+2);
				break;								
			case 'squarerel':
				questions[i]= randomQuizzGeneral(randomQuizzSquareRel);
				break;
			case 'hourope':
				questions[i]= randomQuizzHourOpe();
				break;
			case 'decimaltoscientific': /////// PUISSANCES ////////////
				questions[i]= randomQuizzDecimalToScientific();
				break;
			case 'power10tonumber':
				questions[i]=randomQuizzGeneral(randomQuizzPower10toNumber);
				break;
			case 'powernumberto10':
				questions[i]=randomQuizzGeneral(randomQuizzPowerNumberto10);
				break;
			case 'onepower':
				questions[i]= randomQuizzOnePower();
				break;			
			case 'powertonumber':
				questions[i]= randomQuizzPowerToNumber();
				break;
			case 'powercomparescientific':
				questions[i]= randomQuizzPowerCompareScientific();
				break;
			case 'deletesquareroots':   /////////// RACINES CARREES /////////////
				questions[i]= randomQuizzDeleteSquareRoots();
				break;
			case 'simplifysquareroots':
				questions[i]= randomQuizzSimplifySquareRoots();
				break;
			case 'squarerootapproximate':
				questions[i]= randomQuizzSquareRootApproximate();
				break;
			case 'squarerootonly':
				questions[i]= randomQuizzSquareRootOnly();
				break;
			case 'isitfunction': ///////////// FUNCTIONS
				questions[i]= randomQuizzIsItFunction();
				break;
			case 'functionimage':
				questions[i]= randomQuizzFunctionImage();
				break;
			case 'functionancessors':
				questions[i]= randomQuizzFunctionAncessors();
				break;
			case 'functionimant':
				questions[i]= randomQuizzFunctionImAncTab();
				break;
			case 'functionequation':
				questions[i]= randomQuizzFunctionEquation();
				break
			case 'functionpaireimpaire':
				questions[i]= randomQuizzFunctionPaireImpaire();
				break;
			case 'functioncompare':
				questions[i]= randomQuizzFunctionCompare();
				break	
			case 'belongscurve':
				questions[i]= randomQuizzBelongsCurve();
				break;
			case 'functionequationgr':
				questions[i]= randomQuizzFunctionEquationGr();
				break;
			case 'functioninequationgr':
				questions[i]= randomQuizzFunctionInequationGr();
				break;				
			case 'affinecoeff':
				questions[i]= randomQuizzAffineCoeff();
				break;
			case 'affineantim':
				questions[i]= randomQuizzAffineAntIm();
				break;
			case 'affinesigne':
				questions[i]= randomQuizzAffineSigne();
				break;
			case 'secdegremaximum':
				questions[i]= randomQuizzSecDegreMaximum();
				break;
			case 'functionusualinequality':
				questions[i]= randomQuizzFunctionUsualInequality();
				break;
			case 'convexe':
				questions[i]= randomQuizzConvexe();
				break;
			case 'dl':    //////////////Dérivation
				questions[i]= randomQuizzDl();
				break;
			case 'affineusualprimitive' :          /// Intégration 
				questions[i] = randomQuizzIntegrationAffineUsual();
				break;			
			case 'integrationcomposition' : 
				questions[i]= randomQuizzIntegrationComposition();
				break;
			case 'inttoineg' : ////////// R//////////////
				questions[i]= randomQuizzIntIneg(1);
				break;
			case 'inegtoint' :
				questions[i]= randomQuizzIntIneg(0);
				break;			
			case 'inint' : 
				questions[i]= randomQuizzInInt();
				break;
			case 'abstoint' : 
				questions[i]= randomQuizzAbstoInt();
				break;
			case 'abseq':
				questions[i]= randomQuizzAbsEq();
				break;
			case 'absfromint':
				questions[i]= randomQuizzAbsFromInt();
				break;
			case 'abswithout':
				questions[i]= randomQuizzAbsWithout();
				break;
			case 'intconv':  // SERIEN ENT
				questions[i]= randomQuizzIntConv();
				break;
			case 'matrixal': // MATRICE	
				questions[i]= randomQuizzMatrixAL();
				break;
			case 'matrixalal':
				questions[i]= randomQuizzALMatrix();
				break;
			case 'matrixproduct':
				questions[i]= randomQuizzMatrixProduct();
				break;
			case 'matrixproductcompute':
				questions[i]= randomQuizzMatrixProductCompute();
				break;
			case 'matrixdetrow':
				questions[i]= randomQuizzMatrixDetRow();
				break;
			case 'matrixcoef':
				questions[i]= randomQuizzMatrixCoef();
				break;
			case 'suitearithm': // SUITE	
				questions[i]= randomQuizzSuiteArithm();
				break;
			case 'suitegeo': 
				questions[i]= randomQuizzSuiteGeo();
				break;
			case 'suitegeneration':
				questions[i]= randomQuizzSuiteGeneration();
				break;
			case 'serienum':
				questions[i]= randomQuizzSerieNum();
				break;
			case 'trigoval':   // TRIGO
				questions[i]= randomQuizzValueFunctionTrigo();
				break;
			case 'trigoangle':   
				questions[i]= randomQuizzValueAngleTrigo();
				break;	
			case 'trigodecalageangle':   
				questions[i]= randomQuizzDecalageAngle();
				break;
			case 'colineaire':   // GEO
				questions[i]= randomQuizzColineaire();
				break;
			case 'determinant':
				questions[i]= randomQuizzDeterminant();
				break;
			case 'scalarproduct':
				questions[i]= randomQuizzScalarProduct();
				break;
			case 'orthogonalvectors' :
				questions[i]= randomQuizzOrthogonalVectors();
				break;			
			case 'orthogonalcollinearvectors' : 
				questions[i]= randomQuizzOrthogonalCollinear();
				break;
			case 'milieu':  
				questions[i]= randomQuizzMilieu();
				break;
			case 'vecteur':  
				questions[i]= randomQuizzVecteur();
				break;	
			case 'chasles':
				questions[i]= randomQuizzChasles();
				break;
			case 'thales':   
				questions[i]= randomQuizzThales();
				break;	
			case 'complexesope':  // COMPLEXES
				questions[i]= randomQuizzComplexesope();
				break;
			case 'complexesexpo':
				questions[i]= randomQuizzComplexesexpo();
				break;
			case 'complexesopeexpo':
				questions[i]= randomQuizzComplexesopeexpo();
				break;
			case 'irregularverbs':
				questions[i]= randomQuizzIrregularVerbs();
				break;
		}
		if ( (i>0) && (
		 ( (questions[i].type=="field") && (questions[i].beforeField==questions[i-1].beforeField) && 
		                                  (questions[i].afterField==questions[i-1].afterField) && (questions[i].correctAnswer==questions[i-1].correctAnswer) )
		  || 
		( ( (questions[i].type=="qu") || (questions[i].type=="noanswer") || (questions[i].type=="qcm") ) && (questions[i].text==questions[i-1].text) 
	&& (questions[i].answer==questions[i-1].answer) && (questions[i].svg==questions[i-1].svg) )
		) )
		{
			i--;  // Not two times the same question
		}
	}
	myQuizz.questions=questions;
	return myQuizz;
}

// Make a field question

function makeFieldQuestion(inlineField,fieldWidth,beforeField,afterField,correctAnswer,badAnswer,delayedAnswer)
{
	return {
				type: "field",
				inlineField: inlineField,
				fieldWidth: fieldWidth,
				beforeField: beforeField,
				afterField : afterField,
				correctAnswer:correctAnswer,
				goodAnswer: myRandomLang.welldone,
				badAnswer: myRandomLang.badluck+" "+myRandomLang.therightansweris+badAnswer,
				delayedAnswer : delayedAnswer
	}
}

function makeUnFieldQuestion(inlineField,fieldWidth,beforeField,afterField,correctAnswer,badAnswer,unfieldquestion,unfieldanswer)
{
	if (myQuizz.field=="nofield")
	return ({
		type: "noanswer",
		text: unfieldquestion,
		answer: unfieldanswer,
		})
	else
	return {
				type: "field",
				inlineField: [inlineField],
				linebreak:[false],
				fieldWidth: [fieldWidth],
				beforeField: [beforeField],
				afterField : [afterField],
				correctAnswer:[correctAnswer],
				goodAnswer: myRandomLang.welldone,
				badAnswer: myRandomLang.badluck+" "+myRandomLang.therightansweris+badAnswer,
	}
}

function makeUnFieldsQuestion(inlineField,linebreak,fieldWidth,beforeField,afterField,correctAnswer,badAnswer,unfieldquestion,unfieldanswer)
{
	if (myQuizz.field=="nofield")
	return ({
		type: "noanswer",
		text: unfieldquestion,
		answer: unfieldanswer,
		})
	else
	return {
				type: "field",
				inlineField: inlineField,
				linebreak:linebreak,
				fieldWidth: fieldWidth,
				beforeField: beforeField,
				afterField : afterField,
				correctAnswer:correctAnswer,
				goodAnswer: myRandomLang.welldone,
				badAnswer: myRandomLang.badluck+" "+myRandomLang.therightansweris+badAnswer,
	}
}

function makeUnFieldQuestionSvg(inlineField,fieldWidth,beforeField,afterField,correctAnswer,badAnswer,unfieldquestion,unfieldanswer,svg)
{
	var q=makeUnFieldQuestion(inlineField,fieldWidth,beforeField,afterField,correctAnswer,badAnswer,unfieldquestion,unfieldanswer);
	q.svg=svg;
	return q;
}


function makeFieldQuestionSvg(inlineField,fieldWidth,beforeField,afterField,correctAnswer,badAnswer,svg)
{
	return {
				type: "field",
				inlineField: [inlineField],
				linebreak:[false],
				fieldWidth: [fieldWidth],
				beforeField: [beforeField],
				afterField : [afterField],
				correctAnswer:[correctAnswer],
				goodAnswer: myRandomLang.welldone,
				badAnswer: myRandomLang.badluck+" "+myRandomLang.therightansweris+badAnswer,
				svg:svg
				}
}

// Make a QCM or QU question

function makeUnQCMQuestion(type,question,answers,correctAnswers,badAnswer,goodAns,unfieldquestion,unfieldanswer)
{
	if (myQuizz.field=="nofield")
	return {
		type: "noanswer",
		text: unfieldquestion,
		answer: unfieldanswer
		}
	else
	return {
				type: type,
				text:question,
				answers: answers,
				correctAnswers: correctAnswers,
				badAnswer: badAnswer,
				goodAnswer: goodAns
	};
}

function makeUnQCMQuestionSvg(type,question,answers,correctAnswers,badAnswer,goodAns,unfieldquestion,unfieldanswer,svg)
{
	var q=makeUnQCMQuestion(type,question,answers,correctAnswers,badAnswer,goodAns,unfieldquestion,unfieldanswer);
	q.svg=svg;
	return q;
}

// Peut être appelée par d'autres fonctions

function randomQuizzGeneral(quizzFunction)
{
	var level=myQuizz.level;
	switch (level)
	{
		case 0:
			content=quizzFunction(0);
			break;
		case 1:
			content=quizzFunction(1);
			break;
		case 2:
			content=quizzFunction(2);
			break;
	}
	myquestion=content[0];
	myanswer=content[1];
	mycheckedanswer=content[2];
	return makeUnFieldQuestion(false,20,myquestion,"",mycheckedanswer,myanswer,myquestion,myanswer);		
}	

function randomQuizzLitteralGeneral(quizzFunction,mylabel)
{

	var content=quizzFunction(myQuizz.level);
	var myquestion=content[0];
	var mytexanswer=content[1];
	var mycheckedanswer=content[2];
	var q=mylabel+" $"+myquestion+"=?$";
	return makeUnFieldQuestion(false,20,q,"",mycheckedanswer,"$"+mytexanswer+"$.",q,"$"+myquestion+"=\\color{red}{"+mytexanswer+"}$.")	
}

/******************* ARITHMETIC ***********************/

function randomQuizzMultipleDivisors()
{	
	var divisor=makenonzerorandommultiple(1,20,1);
	var coeff=1;
	while (coeff==1) coeff=makerandommultiple(0,Math.trunc(100/divisor),1);
	var multiple=coeff*divisor;

	if (Math.random()<0.5)
	{
		anstexte=multiple+myRandomLang.isa+"<span class=rougedico>"+myRandomLang.multiple+"</span> "+myRandomLang.off+divisor+".";
		if (myQuizz.field!="nofield")
		{	
			questions={
				type: "qu",
				text: multiple+myRandomLang.isa+"....."+myRandomLang.off+divisor+"?",
				answers: [myRandomLang.multiple,  myRandomLang.divisor ],
				correctAnswers: [true, false],
				badAnswer: myRandomLang.badluck+" "+anstexte,
				goodAnswer: myRandomLang.welldone+" "+anstexte
			};
		}
		else
		{
			questions={
				type: "noanswer",
				text: multiple+myRandomLang.isa+"....."+myRandomLang.off+divisor+"?",
				answer: anstexte
			}
		}
	}
	else
	{
		anstexte=divisor+myRandomLang.isa+"<span class=rougedico>"+myRandomLang.divisor+"</span> "+myRandomLang.off+multiple+".";
		if (myQuizz.field!="nofield")
		{	
			questions={
				type: "qu",
				text: divisor+myRandomLang.isa+"....."+myRandomLang.off+multiple+"?",
				answers: [myRandomLang.multiple,  myRandomLang.divisor ],
				correctAnswers: [false, true],
				badAnswer: myRandomLang.badluck+" "+anstexte,
				goodAnswer: myRandomLang.welldone+" "+anstexte
			};
		}
		else
		{
			questions={
				type: "noanswer",
				text: divisor+myRandomLang.isa+"....."+myRandomLang.off+multiple+"?",
				answer: anstexte
			}
		}	}
	return questions;
	
}

function randomQuizzDivisibleBy()
{
	var maxn=[100,500,1000]
	var a=makenonzerorandommultiple(2,maxn[myQuizz.level],1);
	var divs=[2,3,4,5,9,10,11];
	var tdivs=['par 2', 'par 3', 'par 4', 'par 5', 'par 9', 'par 10', 'par 11'];
	
	answers=[];
	correctAnswers=[];
	anstexte="";
	questionb="";
	
	for (i=0;i<divs.length;i++)
	{
		if (myQuizz.choicesint[i])
		{
			answers.push(tdivs[i]);
			questionb+=" par "+divs[i];
			if ( (a%divs[i])==0) 
			{
				correctAnswers.push(true);
				anstexte+=" par "+divs[i];
			}	
			else	
				correctAnswers.push(false);
		}
	}
	
	if (anstexte.length==0)
		anstexte="$"+a+"$ n'est pas divisible par un des nombres proposés";
	else
		anstexte="$"+a+"$ est divisible"+anstexte+".";
	question="$"+a+"$ est-il divisible ";
	questionb=question+questionb+"?";
		
	return makeUnQCMQuestion('qcm',question,answers,correctAnswers,myRandomLang.badluck+" "+anstexte,myRandomLang.welldone+" "+anstexte,questionb,anstexte);
}

// Division euclidienne

function randomQuizzEuclideanDivision()
{
	var mindividende=[11,101];
	var maxdividende=[500,5000];
	var mindiviseur=[2,10];
	var maxdiviseur=[9,49];
	var a=makerandommultiple(mindividende[myQuizz.level],maxdividende[myQuizz.level],1);
	var b=makerandommultiple(mindiviseur[myQuizz.level],maxdiviseur[myQuizz.level],1);
	q=Math.floor(a/b);
	r=a%b;
	
	question="Quels sont le quotient et le reste de $"+a+"\\div"+b+"$?";
	after="Ecrire la réponse sous la forme quotient;reste";
	correctAnswer=q+";"+r;
	anstexte="Le quotient de $"+a+"\\div"+b+"$ est $"+q+"$ et le reste est $"+r+"$.";
	
	return makeUnFieldQuestion(false,12,question,after,correctAnswer,anstexte,question,anstexte);
}

// Liste des diviseurs
function randomQuizzListOfDivisors()
{
	var maxn=[30,60,100];
	var a=makerandommultiple(2,maxn[myQuizz.level],1);
	var correctAnswer="1";
	for (i=2;i<=a;i++)
		if ((a%i)==0) correctAnswer+=";"+i;
	
	question="Quels sont les diviseurs de $"+a+"$?";
	after="Ecrire les diviseurs par ordre croissant sous la forme d1;d2;d3";
	anstexte="Les diviseurs de $"+a+"$ sont : <span class=rougedico>"+correctAnswer+"</span>";
	return makeUnFieldQuestion(false,30,question,after,correctAnswer,anstexte,question,anstexte);
}

// Nombre de diviseurs

function randomQuizzNumberOfDivisors()
{
	var maxn=[30,60,100];
	var a=makerandommultiple(2,maxn[myQuizz.level],1);
	var total=1;
	for (i=2;i<=a;i++)
		if ((a%i)==0) total++;
	
	question="Quel est le nombre de diviseurs positifs de $"+a+"$?";
	anstexte="Le nombre de diviseurs de $"+a+"$ est <span class=rougedico>"+total+"</span>.";
	return makeUnFieldQuestion(false,30,question,"",total,anstexte,question,anstexte);
}


// PGCD et PPCM

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

function randomQuizzGcd()
{
	var maxn=[30,60,100];
	var a=makerandommultiple(2,maxn[myQuizz.level],1);	
	var b=makeexclusiverandommultiple(2,maxn[myQuizz.level],1,[a]);	
	var correctAnswer=gcd(a,b);
	if (Math.random()<0.5)
	{
		// Pas trop de nombres premiers entre eux!
		while (correctAnswer==1)
		{
			a=makerandommultiple(2,maxn[myQuizz.level],1);	
			b=makeexclusiverandommultiple(2,maxn[myQuizz.level],1,[a]);	
			correctAnswer=gcd(a,b);
		}
	}
	question="Quel est le pgcd de $"+a+"$ et $"+b+"$?";
	anstexte="Le pgcd de $"+a+"$ et $"+b+"$ est <span class=rougedico>"+correctAnswer+"</span>";
	return makeUnFieldQuestion(false,30,question,'',correctAnswer,anstexte,question,anstexte);	
}

function randomQuizzLcm()
{
	var maxn=[30,60,100];
	var a=makerandommultiple(2,maxn[myQuizz.level],1);	
	var b=makeexclusiverandommultiple(2,maxn[myQuizz.level],1,[a]);	
	var correctAnswer=gcd(a,b);
	if (Math.random()<0.5)
	{
		// Pas trop de nombres premiers entre eux!
		while (correctAnswer==1)
		{
			a=makerandommultiple(2,maxn[myQuizz.level],1);	
			b=makeexclusiverandommultiple(2,maxn[myQuizz.level],1,[a]);	
			correctAnswer=gcd(a,b);
		}
	}
	correctAnswer=(a*b)/correctAnswer;
	question="Quel est le ppcm de $"+a+"$ et $"+b+"$?";
	anstexte="Le ppcm de $"+a+"$ et $"+b+"$ est <span class=rougedico>"+correctAnswer+"</span>";
	return makeUnFieldQuestion(false,30,question,'',correctAnswer,anstexte,question,anstexte);	
}

// Create a question for a prime number...
	
function randomQuizzPrimeNumbers()
{
	var factors=[[2,3,5,7], [2,3,5,7,11], [2,3,5,7,11]];      
	var primes=[ [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37] , [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79],
	[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,101, 103, 107, 109, 113] ];
	var products=[ [2],[2,3], [2,3,4]];
	
	var questions;
	var number=1;	

	if (Math.random()<0.5)
	{
		// We choose a prime number!
		number=primes[myQuizz.level][Math.floor(Math.random()*primes[myQuizz.level].length)];
		if (myQuizz.field!="nofield")
		{	
			questions={
				type: "qu",
				text: myRandomLang.isit+number+myRandomLang.isprime+"?",
				answers: [myRandomLang.yes,  myRandomLang.no ],
				correctAnswers: [true, false],
				badAnswer: myRandomLang.badluck+" "+number+myRandomLang.isprime,
				goodAnswer: myRandomLang.welldone
			};
		}
		else
		{
			questions={
				type: "noanswer",
				text: myRandomLang.isit+number+myRandomLang.isprime+"?",
				answer: number+myRandomLang.isprime+"."
			}
		}
	}
	else
	{
		// We choose a composed number
		var numberofproducts=products[myQuizz.level][Math.floor(Math.random()*products[myQuizz.level].length)];
		number=1;
		var decompo="";
		for (var j=0;j<numberofproducts;j++)
		{
			index=Math.floor(Math.random()*(factors[myQuizz.level].length));
			number=number*factors[myQuizz.level][index];
			if (j==0) 
				decompo+=factors[myQuizz.level][index];
			else
				decompo+="\\times "+factors[myQuizz.level][index];
		}
		if (myQuizz.field!="nofield")
		{
			questions={
				type: "qu",
				text: myRandomLang.isit+number+myRandomLang.isprime+"?",
				answers: [myRandomLang.yes,  myRandomLang.no ],
				correctAnswers: [false, true],
				badAnswer: myRandomLang.badluck+" "+number+myRandomLang.isntprime+myRandomLang.since+" $"+number+"="+decompo+".$",
				goodAnswer: myRandomLang.welldone	
			}				
		}
		else
		{
			questions={
				type: "noanswer",
				text: myRandomLang.isit+number+myRandomLang.isprime+"?",
				answer: number+myRandomLang.isntprime  +myRandomLang.since+" $"+number+"="+decompo+".$"
			}
		}				
	}
	
	return questions;
	
}

function randomQuizzDecompositionPrimeNumbers()
{
	var factors=[[2,2,2,2,3,3,3,5,5,7,11], [2,2,3,3,5,5,7,11,13,17], [2,2,2,3,3,3,5,5,7,7,11,13,17,19,23]];      
	var numbers=[[2,2,3,3,4], [2,3,3,3,4], [2,3,3,4,4] ];
	var maxnumber= [200,600,1000] ;
		
	var questions;
	
	mynumber=maxnumber[myQuizz.level]+1;
	
	while (mynumber>maxnumber[myQuizz.level]) 
	{
		listfactors=[]; 
		mynumber=1;
		total=numbers[myQuizz.level][Math.floor(Math.random()*numbers[myQuizz.level].length)];
		for (var j=0;j<total;j++)
		{
			listfactors[j]=factors[myQuizz.level][Math.floor(Math.random()*factors[myQuizz.level].length)];
			mynumber*=listfactors[j];	
		}
	}
	
	listfactors.sort( function(a,b) { return a-b; } );
		
	// We use Algebrite to formalize everything
				
	regroup=Algebrite.factor(mynumber).toString();
	regrouptex=regroup.replace(/\*/g,"\\times ");
	textanswer="$"+mynumber+"="+regrouptex+"$";
	
	return makeUnFieldQuestion(false,20,myRandomLang.decomposeintoprimenumbers+" "+mynumber,"",regroup,textanswer,mynumber+"=?",textanswer);
}

/************** CONVERSIONS ***********************/

function randomQuizzConversion(chiffres,virgules,steps,units,decalunit)
{	
	nbvirgules=virgules[myQuizz.level][makerandommultiple(0,virgules[myQuizz.level].length-1,1)];
	nbchiffres=chiffres[myQuizz.level][makerandommultiple(0,chiffres[myQuizz.level].length-1,1)];
	smallnumber=new Big(makenonzerorandommultiple(1,Math.pow(10,nbvirgules+nbchiffres),1));
	smallnumber=smallnumber.div(Math.pow(10,nbvirgules));
	
	mystep=steps[myQuizz.level][makerandommultiple(0,steps[myQuizz.level].length-1,1)];	
	bignumber=smallnumber.times(Math.pow(10,mystep*decalunit));
	
	indexunit=Math.floor(Math.random()*(units.length-mystep));

	if (Math.random()<0.5)
	{
		myquestion=bignumber.toString();
		myquestionunit=units[indexunit+mystep];
		myanswer=smallnumber.toString();
		myanswerunit=units[indexunit];
	}
	else
	{
		myquestion=smallnumber.toString();
		myquestionunit=units[indexunit];
		myanswer=bignumber.toString();
		myanswerunit=units[indexunit+mystep];			
	}
		
	myquestion=formattexnumber(myquestion,myQuizz.language);
	myanswertex=formattexnumber(myanswer,myQuizz.language);
	myanswer=formatnumber(myanswer,myQuizz.language);
	tanswer='$'+myquestion+'$'+' '+myquestionunit+" = "+'$\\color{red}{'+myanswertex+'}$'+' '+myanswerunit+".";
	
	return makeUnFieldQuestion(true,12, '$'+myquestion+'$'+" "+myquestionunit+" = ",myanswerunit,myanswer,tanswer,
	'$'+myquestion+'$'+' '+myquestionunit+" = ........ "+myanswerunit,tanswer);
 
}	

function randomQuizzAreaConversion()
{
	var steps=[ [1,1,2], [1,2,3], [2,3,3] ];
	var units=[ '$\\textrm{km}^2$', '$\\textrm{hm}^2$', '$\\textrm{dam}^2$', '$\\textrm{m}^2$', '$\\textrm{dm}^2$', '$\\textrm{cm}^2$', '$\\textrm{mm}^2$'];
	var decalunit=2;
	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0,1,2], [0,1,1,2,2] ];
	
	return randomQuizzConversion(chiffres,virgules,steps,units,decalunit);
}

function randomQuizzLengthConversion()
{
	var steps=[ [1,2,3], [1,2,2,3,3,4], [2,3,4] ];
	var units=[ '$\\textrm{km}$', '$\\textrm{hm}$', '$\\textrm{dam}$', '$\\textrm{m}$', '$\\textrm{dm}$', '$\\textrm{cm}$', '$\\textrm{mm}$'];
	var decalunit=1;
	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0,1,2], [0,1,1,2,2] ];
	
	return randomQuizzConversion(chiffres,virgules,steps,units,decalunit);
}

function randomQuizzContenanceConversion()
{
	var steps=[ [1,2,3], [1,2,2,3,3,4], [2,3,4] ];
	var units=[ '$\\textrm{hl}$', '$\\textrm{dal}$', '$\\textrm{l}$', '$\\textrm{dl}$', '$\\textrm{cl}$', '$\\textrm{ml}$'];
	var decalunit=1;
	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0,1,2], [0,1,1,2,2] ];
	
	return randomQuizzConversion(chiffres,virgules,steps,units,decalunit);
}

function randomQuizzVolumeConversion()
{
	var steps=[ [1,1,2], [1,2,2], [1,2,2] ];
	var units=[ '$\\textrm{km}^3$', '$\\textrm{hm}^3$', '$\\textrm{dam}^3$', '$\\textrm{m}^3$', '$\\textrm{dm}^3$', '$\\textrm{cm}^3$', '$\\textrm{mm}^3$'];
	var decalunit=3;
	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0,1,2], [0,1,1,2,2] ];
	
	return randomQuizzConversion(chiffres,virgules,steps,units,decalunit);
}

function randomQuizzWhichUnit(chiffres,virgules,steps,units,decalunit)
{	
	nbvirgules=virgules[myQuizz.level][makerandommultiple(0,virgules[myQuizz.level].length-1,1)];
	nbchiffres=chiffres[myQuizz.level][makerandommultiple(0,chiffres[myQuizz.level].length-1,1)];
	smallnumber=new Big(makenonzerorandommultiple(1,Math.pow(10,nbvirgules+nbchiffres),1));
	smallnumber=smallnumber.div(Math.pow(10,nbvirgules));
	
	mystep=steps[myQuizz.level][makerandommultiple(0,steps[myQuizz.level].length-1,1)];	
	bignumber=smallnumber.times(Math.pow(10,mystep*decalunit));
	
	indexunit=Math.floor(Math.random()*(units.length-mystep)); // The small unit
	
	bign=bignumber.toString();
	smalln=smallnumber.toString();
	
	bign=formattexnumber(bign,myQuizz.language);
	smalln=formattexnumber(smalln,myQuizz.language);	
	
	if (Math.random()<0.5)
	{
		texte="$"+bign+"\\ "+units[indexunit+mystep]+"="+smalln+"\\ ???$";
		answer="$"+bign+"\\ "+units[indexunit+mystep]+"="+smalln+'\\ \\color{red}{'+units[indexunit]+'}$';
		aunit=indexunit;
	}
	else
	{
		texte="$"+smalln+"\\ "+units[indexunit]+"="+bign+"\\ ???$";
		answer="$"+smalln+"\\ "+units[indexunit]+"="+bign+'\\ \\color{red}{'+units[indexunit+mystep]+'}$';	
		aunit=indexunit+mystep;
	}
	
	myunit=units[aunit];
	units.splice(aunit,1);
	while (units.length>3) 
	{
		i=makerandommultiple(0,units.length-1,1);
		units.splice(i,1);
	}
	units.push(myunit);
	for (i=0;i<units.length;i++)
		units[i]='$'+units[i]+'$';
	var correctAnswers = [false,false,false,true];
	var badAnswer = myRandomLang.badluck+" "+answer;
	var goodAnswer= myRandomLang.welldone;
		
	return makeUnQCMQuestion("qu",texte,units,correctAnswers,badAnswer,goodAnswer,texte,answer);

}	

function randomQuizzLengthWhichUnit()
{
	var steps=[ [1,2,3], [1,2,2,3,3,4], [2,3,4] ];
	var units=[ '\\textrm{km}', '\\textrm{hm}', '\\textrm{dam}', '\\textrm{m}', '\\textrm{dm}', '\\textrm{cm}', '\\textrm{mm}'];
	var decalunit=1;
	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0,1,2], [0,1,1,2,2] ];
	
	return randomQuizzWhichUnit(chiffres,virgules,steps,units,decalunit);
}

function randomQuizzContenanceWhichUnit()
{
	var steps=[ [1,2,3], [1,2,2,3,3,4], [2,3,4] ];
	var units=[  '\\textrm{hl}', '\\textrm{dal}', '\\textrm{l}', '\\textrm{dl}', '\\textrm{cl}', '\\textrm{ml}'];
	var decalunit=1;
	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0,1,2], [0,1,1,2,2] ];
	
	return randomQuizzWhichUnit(chiffres,virgules,steps,units,decalunit);
}

function randomQuizzAreaWhichUnit()
{
	var steps=[ [1,1,2], [1,2,3], [2,3,3] ];
	var units=[ '\\textrm{km}^2', '\\textrm{hm}^2', '\\textrm{dam}^2', '\\textrm{m}^2', '\\textrm{dm}^2', '\\textrm{cm}^2', '\\textrm{mm}^2'];
	var decalunit=2;
	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0,1,2], [0,1,1,2,2] ];
	
	return randomQuizzWhichUnit(chiffres,virgules,steps,units,decalunit);
}

function randomQuizzVolumeWhichUnit()
{
	var steps=[ [1,1,2], [1,2,2], [1,2,2] ];
	var units=[ '\\textrm{km}^3', '\\textrm{hm}^3', '\\textrm{dam}^3', '\\textrm{m}^3', '\\textrm{dm}^3', '\\textrm{cm}^3', '\\textrm{mm}^3'];
	var decalunit=3;
	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0,1,2], [0,1,1,2,2] ];
	
	return randomQuizzWhichUnit(chiffres,virgules,steps,units,decalunit);
}

function randomQuizzTwoUnits(units,decalunit)
{
	var iu,d1,d2;
	var n2,n1;
	
	
	iu=makerandommultiple(2,units.length-1,1);
	d1=makerandommultiple(0,Math.min(iu-1,2),1);
	d2=makerandommultiple(d1+1,Math.min(d1+3,iu,4),1);
	
	if ( (units[iu-d2]=='') || (units[iu-d1]=='') || (units[iu]=='') ) return randomQuizzTwoUnits(units,decalunit); // Pour gérer l'absence de deciquintal
	
	n2=makerandommultiple(1,10,1);
	if (Math.random()>0.5)
		n1=makerandommultiple(1,9,1);
	else
		n1=makerandommultiple(1,Math.pow(10,(d2-d1)*decalunit),1);
	result=n2*Math.pow(10,d2*decalunit)+n1*Math.pow(10,d1*decalunit);
	
	n1=formattexnumber(n1,myQuizz.language);
	n2=formattexnumber(n2,myQuizz.language);
	aresult=formattexnumber(result,myQuizz.language);

	qtext='$'+n2+'\\ '+units[iu-d2]+'\\ '+n1+'\\ '+units[iu-d1]+'\\  =\\ ';
	atext=qtext+'\\color{red}{'+aresult+'}\\ '+units[iu]+'$';
	
	return makeUnFieldQuestion(true,12, qtext+'$','$'+units[iu]+'$',result,atext,qtext+"???\\ "+units[iu]+'$',atext);

}

function randomQuizzMixedConversion(units1,dunits1,units2,dunits2,chiffres,virgules)
{	
	var nbvirgules,nbvchiffres,smallnumber,bignumber,i1,i2;
	var mu1,md1,mu2,md2;
	switch (makerandommultiple(0,5,1))
	{
		case 0:
		case 1:
			i1=makerandommultiple(0,units1.length-1,1);
			i2=makerandommultiple(0,units2.length-1,1);
			mu1=units1[i1];
			mu2=units2[i2];
			md1=dunits1[i1];
			md2=dunits2[i2];
			break;
		case 2:
		case 3:
			i1=makerandommultiple(0,units1.length-1,1);
			i2=makerandommultiple(0,units2.length-1,1);
			mu1=units2[i2];
			mu2=units1[i1];
			md1=dunits2[i2];
			md2=dunits1[i1];
			break;			
		case 4:
			i1=makerandommultiple(0,units1.length-1,1);
			i2=i1;
			while (i2==i1) i2=makerandommultiple(0,units1.length-1,1);
			mu1=units1[i1];
			mu2=units1[i2];
			md1=dunits1[i1];
			md2=dunits1[i2];
			break;	
		case 5:
			i1=makerandommultiple(0,units2.length-1,1);
			i2=i1;
			while (i2==i1) i2=makerandommultiple(0,units2.length-1,1);
			mu1=units2[i1];
			mu2=units2[i2];
			md1=dunits2[i1];
			md2=dunits2[i2];
			break;	
	}			
			
			
	nbvirgules=virgules[myQuizz.level][makerandommultiple(0,virgules[myQuizz.level].length-1,1)];
	nbchiffres=chiffres[myQuizz.level][makerandommultiple(0,chiffres[myQuizz.level].length-1,1)];
	smallnumber=new Big(makenonzerorandommultiple(1,Math.pow(10,nbvirgules+nbchiffres),1));
	smallnumber=smallnumber.div(Math.pow(10,nbvirgules));
	bignumber=smallnumber.times(Math.pow(10,Math.abs(md2-md1)));

	if (md2<md1)
	{
		myquestion=bignumber.toString();
		myanswer=smallnumber.toString();
	}
	else
	{
		myquestion=smallnumber.toString();
		myanswer=bignumber.toString();
	}
	
		
	myquestion=formattexnumber(myquestion,myQuizz.language);
	myanswertex=formattexnumber(myanswer,myQuizz.language);
	myanswer=formatnumber(myanswer,myQuizz.language);
	myspaceanswer=spaceformatnumber(myanswer,myQuizz.language);
	
	var qtext= '$'+myquestion+"\\ "+mu1+"\\ =";
	var atext='$'+myquestion+'\\ '+mu1+"\\ =\\ "+'\\color{red}{'+myanswertex+'\\ '+mu2+'}$';
	
	return makeUnFieldQuestion(true,12, qtext+'\\ $',"$"+mu2+"$",[myanswer,myspaceanswer],atext,qtext+"???\\ "+mu2+'$',atext);

}	

function randomQuizzMixedVolumeConversion()
{
	var units1=[ '\\textrm{m}^3', '\\textrm{dm}^3', '\\textrm{cm}^3'];
	var units2=[ '\\textrm{hl}', '\\textrm{dal}', '\\textrm{l}', '\\textrm{dl}', '\\textrm{cl}', '\\textrm{ml}'];
	var dunits1=[0,3,6];
	var dunits2=[1,2,3,4,5,6]

	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0,1,2], [0,1,1,2,2] ];
	
	return randomQuizzMixedConversion(units1,dunits1,units2,dunits2,chiffres,virgules);
}

function randomQuizzMixedMasseConversion()
{
	var units1=['\\textrm{t}', '\\textrm{q}'];
	var units2=[ '\\textrm{kg}','\\textrm{hg}', '\\textrm{dag}', '\\textrm{g}'];  
	var dunits1=[0,1];
	var dunits2=[3,4,5,6];
	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0], [0,1,1,2,2] ];
	
	return randomQuizzMixedConversion(units1,dunits1,units2,dunits2,chiffres,virgules);
}

function randomQuizzMasseConversion()
{
	if (myQuizz.level>0) return randomQuizzMixedMasseConversion();
	var steps=[ [1,2,3], [1,2,2,3,3,4], [2,3,4] ];
	var units=[ '$\\textrm{kg}$', '$\\textrm{hg}$', '$\\textrm{dag}$', '$\\textrm{g}$', '$\\textrm{dg}$', '$\\textrm{cg}$', '$\\textrm{mg}$'];
	var decalunit=1;
	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0,1,2], [0,1,1,2,2] ];
	
	return randomQuizzConversion(chiffres,virgules,steps,units,decalunit);	
}

function randomQuizzMassWhichUnit()
{
	var steps=[ [1,2,3], [1,2,2,3,3,4], [2,3,4] ];
	var units=[ '\\textrm{kg}', '\\textrm{hg}', '\\textrm{dag}', '\\textrm{g}', '\\textrm{dg}', '\\textrm{cg}', '\\textrm{mg}'];
	var decalunit=1;
	var chiffres=[ [1,2], [1,2], [1,2,2,3] ];
	var virgules=[ [0], [0,1,2], [0,1,1,2,2] ];
	
	return randomQuizzWhichUnit(chiffres,virgules,steps,units,decalunit);
}
	
	
function randomQuizzHourConversion()
{
	var nbsec,secs,h,m,s,q,a;
	var type=makerandommultiple(0,3,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,3,1);

	switch (type)
	{
		case 0:
			nbsec=makerandommultiple(100,3590,10);
			break;
		case 1:
			nbsec=makerandommultiple(100,3590,10);
			break;
		case 2:
			nbsec=makerandommultiple(100,10000,10);	
		case 3:
			nbsec=makerandommultiple(100,10000,10);	
			break;
	}
	secs=new Big(nbsec);
	h=Math.trunc(secs.div(3600));
	secs=secs.minus(h*3600);
	m=Math.trunc(secs.div(60));
	s=secs.minus(m*60);	
	switch (type)
	{
		case 0:
			q=m+"min "+s+"s = ";
			a=m+"min "+s+"s = "+nbsec+"s";
			break;
		case 1:
			q=nbsec+"s"+" = ";
			a=nbsec+"s"+" = "+m+"min "+s+"s";
			break;
		case 2:
			q=h+"h "+m+"min "+s+"s = ";
			a=h+"h "+m+"min "+s+"s = "+nbsec+"s";	
			break;
		case 3:
			q=nbsec+"s"+" = ";
			a=nbsec+"s"+" = "+h+" h "+m+"min "+s+"s";		
			break;
	}

	
	switch (type)
	{
		case 0:	
		case 2:
			return makeUnFieldQuestion(true,4,q,"s",nbsec,a,q+" ... s",a);
		case 1:
			return makeUnFieldsQuestion([true,true],[false,false],[4,4],[q,""],["min","sec"],[m,s],a,q+" ... min ... s",a);			
		case 3:
			return makeUnFieldsQuestion([true,true,true],[false,false,false],[4,4,4],[q,"",""],["h","min","sec"],[h,m,s],a,q+" ... h ... min ... s",a);
	}

}

/****************** PUISSANCES *************************************/

function randomQuizzPower10toNumber()
{
	var a=makerandommultiple(-10,10,1),ans,i;
	if (a>=0)
	{
		ans="1";
		for (i=0;i<a;i++) ans+="0";
	}
	else
	{
		ans="0.";
		for (i=1;i<-a;i++) ans+="0";
		ans+="1";
	}
	q="$10^{"+a+"}=$";
	
	return ([q, '$'+formattexnumber(ans, myQuizz.language)+'$',[formatnumber(ans,myQuizz.language),spaceformatnumber(ans,myQuizz.language)]]);
}

function randomQuizzPowerNumberto10()
{
	var a=makerandommultiple(-10,10,1),ans,i;
	if (a>=0)
	{
		ans="1";
		for (i=0;i<a;i++) ans+="0";
	}
	else
	{
		ans="0.";
		for (i=1;i<-a;i++) ans+="0";
		ans+="1";
	}
	q='$'+formattexnumber(ans, myQuizz.language)+"=10^{"+a+"}$";
	
	return ([ '$'+formattexnumber(ans, myQuizz.language)+'=10^{???}$',q,a]);
}


function randomQuizzDecimalToScientific()
{
	var type,nb1,nb2,texte,answer,bignumber,smallnumber,exposant;
	var types=[3,4,5];
	type=makerandommultiple(1,types[myQuizz.level],1);

	switch (type)
	{
		case 1:
			nb1=makerandommultiple(2,6,1);
			nb2=makerandommultiple(1,3,1);
			bignumber=new Big(makerandommultiple(Math.pow(10,nb1-1),Math.pow(10,nb1)-1,1));
			smallnumber=new Big(makerandommultiple(Math.pow(10,nb2-1),Math.pow(10,nb2)-1,1));
			smallnumber=smallnumber.div(Math.pow(10,nb2));
			bignumber=bignumber.add(smallnumber);
			texte=formattexnumber(bignumber,myQuizz.language);
			bignumber=bignumber.div(Math.pow(10,nb1-1));
			answer=formattexnumber(bignumber,myQuizz.language)+"\\times 10^{"+(nb1-1)+"}";
			break;
		case 2:
			nb1=makerandommultiple(2,4,1);
			nb2=makerandommultiple(2,4,1);
			bignumber=new Big(makerandommultiple(Math.pow(10,nb1-1),Math.pow(10,nb1)-1,1)*Math.pow(10,nb2));
			texte=formattexnumber(bignumber,myQuizz.language);
			bignumber=bignumber.div(Math.pow(10,nb1+nb2-1));
			answer=formattexnumber(bignumber,myQuizz.language)+"\\times 10^{"+(nb1+nb2-1)+"}";
			break;
		case 3:
			nb1=makerandommultiple(2,4,1);	
			nb2=makerandommultiple(1,4,1);
			bignumber=new Big(makerandommultiple(Math.pow(10,nb1-1),Math.pow(10,nb1)-1,1));
			bignumber=bignumber.div(Math.pow(10,nb1+nb2));
			texte=formattexnumber(bignumber,myQuizz.language);
			bignumber=bignumber.times(Math.pow(10,nb2+1));
			answer=formattexnumber(bignumber,myQuizz.language)+"\\times 10^{-"+(nb2+1)+"}";
			break;
		case 4:
			nb1=makerandommultiple(2,4,1);
			nb2=makerandommultiple(1,3,1);
			bignumber=new Big(makerandommultiple(Math.pow(10,nb1-1),Math.pow(10,nb1)-1,1));
			smallnumber=new Big(makerandommultiple(Math.pow(10,nb2-1),Math.pow(10,nb2)-1,1));
			smallnumber=smallnumber.div(Math.pow(10,nb2));
			bignumber=bignumber.add(smallnumber);
			exposant=makenonzerorandommultiple(-5,5,1);
			texte=formattexnumber(bignumber,myQuizz.language)+"\\times 10^{"+exposant+"}";
			bignumber=bignumber.div(Math.pow(10,nb1-1));
			answer=formattexnumber(bignumber,myQuizz.language)+"\\times 10^{"+(nb1+exposant-1)+"}";
			break;
		case 5:
			nb1=makerandommultiple(1,3,1);	
			nb2=makerandommultiple(1,3,1);
			bignumber=new Big(makerandommultiple(Math.pow(10,nb1-1),Math.pow(10,nb1)-1,1));
			bignumber=bignumber.div(Math.pow(10,nb1+nb2));
			exposant=makenonzerorandommultiple(-5,5,1);
			texte=formattexnumber(bignumber,myQuizz.language)+"\\times 10^{"+exposant+"}";;
			bignumber=bignumber.times(Math.pow(10,nb2+1));
			answer=formattexnumber(bignumber,myQuizz.language)+"\\times 10^{"+(-nb2+exposant-1)+"}";
			if ((-nb2+exposant-1)==0) answer+="="+formattexnumber(bignumber,myQuizz.language);
			break;		
	}
	return ({
			type: "noanswer",
			text: myRandomLang.scientificwriting+" $"+texte+"$",
			answer: "$"+texte+"=\\color{red}{"+answer+"}$"
	})	
	
}

function randomQuizzPowerCompareScientific()
{
	var type=makerandommultiple(0,3,1),a,b,n,m;
	a=makerandommultiple(1001,9998,1);
	n=makerandommultiple(-10,9,1);
	switch (type)
	{
		case 0:
			b=a;
			m=makerandommultiple(n+1,10,1);
			break;
		case 1:
			b=makerandommultiple(a+1,9999,1);
			m=n;
			break;
		case 2:
			b=makerandommultiple(a+1,9999,1);
			m=makerandommultiple(n,10,1);
			break;
		case 3:
			b=makerandommultiple(1,a-1,1);
			m=makerandommultiple(n+1,10,1);
			break;
	}
	ta=new Big(a);
	tb=new Big(b);
	ta=ta.div(1000);
	tb=tb.div(1000);
	sa=formattexnumber(ta,myQuizz.language)+"\\times 10^{"+n+"}";
	sb=formattexnumber(tb,myQuizz.language)+"\\times 10^{"+m+"}";
	if (Math.random()<0.5)
	{
		sol="&lt;";
		correct=[true,false];
	}
	else
	{
		sc=sa;
		sa=sb;
		sb=sc;
		sol="&gt;";
		correct=[false,true];
	}
	var q=myRandomLang.compare+" $$"+sa+"\\dots"+sb+"$$";
	return makeUnQCMQuestion("qu",q,["$&lt;$","$&gt;$"],correct,myRandomLang.badluck,myRandomLang.welldone,q,"$"+sa+"\\color{red}{"+sol+"}"+sb+"$");
}
	

function randomQuizzOnePower()
{
	var a,b,c,p,q,r,texte,answer;
	a=makerandommultiple(2,9,1);
	b=makeexclusiverandommultiple(2,9,1,[a]);
	p=makenonzerorandommultiple(3,8,1);
	q=makenonzerorandommultiple(2,p-1,1);
	r=makenonzerorandommultiple(2,5,1);
	

	if (myQuizz.level>0) 
	{
		if (Math.random()>0.75) a=-a;
		if (Math.random()>0.75) b=-b;
		if (Math.random()>0.75) p=-p;
		if (Math.random()>0.75) q=-q;	
	}
	
	if (myQuizz.level==2) mtype=8; else mtype=3;
	
	type=makerandommultiple(0,mtype,1);
	switch (type)
	{
		case 0:
			texte=addparenthesis(a);
			if (p<0) p=-p;
			for (var i=1;i<p;i++) texte=texte+"\\times "+addparenthesis(a);
			answer=addparenthesis(a)+"^"+p;
			break;
		case 1:
			texte=addparenthesis(a)+"^{"+p+"}\\times "+addparenthesis(a)+"^{"+q+"}";
			if ((p+q)==0) answer="1"; else if ( (p+q)==1) answer=a; else answer=addparenthesis(a)+"^{"+(p+q)+"}";
			break;
		case 2:
			texte="\\frac{"+addparenthesis(a)+"^{"+p+"}}{"+addparenthesis(a)+"^{"+q+"}}";
			if ((p-q)==0) answer=1; else if ( (p-q)==1) answer=a; else answer=addparenthesis(a)+"^{"+(p-q)+"}";
			break;
		case 3:
			texte=addparenthesis(a)+"^{"+p+"}\\times "+addparenthesis(b)+"^{"+p+"}";
			answer=addparenthesis(a*b)+"^{"+p+"}";
			break;		
		case 4:
			texte="\\left("+ addparenthesis(a)+"^{"+p+"}\\right)^{"+q+"}";
			answer=addparenthesis(a)+"^{"+(p*q)+"}";
			break;
		case 5:
			texte="\\frac{"+addparenthesis(a)+"^{"+p+"}\\times "+addparenthesis(a)+"^{"+q+"} }{"+addparenthesis(a)+"^{"+r+"}}";
			if ( (p+q-r)==0) answer="1"; else if ( (p+q-r)==1) anwer=a; else answer=addparenthesis(a)+"^{"+(p+q-r)+"}";
			break;
		case 6:
			texte="\\left("+addparenthesis(a)+"^{"+p+"}\\times "+addparenthesis(a)+"^{"+q+"}\\right)^{"+r+"}";
			if ( (p-q)==0) answer="1"; else if ( (p-q)==1) answer=a; else answer=addparenthesis(a)+"^{"+((p+q)*r)+"}";
			break;
		case 7:
			texte="\\frac {\\left("+addparenthesis(a)+"^{"+p+"}\\right)^{"+q+"}}{"+addparenthesis(a)+"^{"+r+"}}";
			if ( (p*q-r==0)) answer="1"; else if ((p*q-r==1)) answer=a; else answer=addparenthesis(a)+"^{"+( p*q-r)+"}";
			break;
		case 8:
			texte="\\frac{"+addparenthesis(a*b)+"^{"+p+"}}{"+addparenthesis(a)+"^{"+p+"}}";
			answer=addparenthesis(b)+"^{"+p+"}";
			break;
	}
	return ({
			type: "noanswer",
			text: myRandomLang.onepower+" $$"+texte+"$$",
			answer: "$"+texte+"=\\color{red}{"+answer+"}$"
	})	
}

function randomQuizzPowerToNumber()
{
	var a=makerandommultiple(-5,5,1);
	var maxpower;
	
	switch (Math.abs(a))
	{
		case 4:
		case 5:
			maxpower=2; 
			break;
		case 3:
			maxpower=3;
			break;
		default:
			maxpower=5;
			break;
	}
	
	var power=makerandommultiple(0,maxpower,1);
	if (a<0) nb="("+a+")"; else nb=""+a;
	
	if (Math.random()>0.5) 
	{
		texte="$"+nb+"^"+power+"=$";
		answer=Math.pow(a,power);
	}
	else
	{
		texte="$-"+nb+"^"+power+"=$";
		answer=-Math.pow(a,power);
	}
	
	return makeUnFieldQuestion(false,6,texte,"",answer,answer,texte,texte+"$"+answer+"$");		
	
}

/*********************** PROPORTIONNALITE *******************************/

function randomQuizzPercent()
{
	var factortexts=[ '5%', '10%', '20%', '25%', '50%', '75%'],q;
	var divisorfactor = [ 0.05, 0.1, 0.2, 0.25, 0.5, 0.75];
	var multiples=[ [20, 10, 5, 4, 2, 4], [20, 1, 5, 4, 1, 4], [10, 1, 5, 4, 1, 4] ];
	var maxnumber=[ [100, 100, 100, 80, 100, 80], [150, 200, 150, 100, 200, 100] , [200, 500, 200, 140, 500, 140] ];
	
	var question;
	
	indexfactor = Math.floor(Math.random()*(factortexts.length));
	mynumber= makerandommultiple ( 10, maxnumber[myQuizz.level][indexfactor], multiples[myQuizz.level][indexfactor]);		
	myanswer=new Big(mynumber);
	myanswer=myanswer.times(divisorfactor[indexfactor]);
	
	myanswer=formatnumber(myanswer,myQuizz.language);
	q=myRandomLang.compute+factortexts[indexfactor]+myRandomLang.off+mynumber+".";
	
	return makeUnFieldQuestion(false,12,q,"",myanswer.toString(),myanswer.toString(),q, factortexts[indexfactor]+" de "+mynumber+" vaut "+myanswer.toString());
			
}

function randomQuizzPercentUpandDown()
{
	var factortexts=[ '5%', '10%', '20%', '25%', '50%', '75%'];
	var divisorfactor = [ 0.05, 0.1, 0.2, 0.25, 0.5, 0.75];
	var multiples=[ [20, 10, 5, 4, 2, 4], [20, 1, 5, 4, 1, 4], [10, 1, 5, 4, 1, 4] ];
	var maxnumber=[ [100, 100, 100, 80, 100, 80], [150, 200, 150, 100, 200, 100] , [200, 500, 200, 140, 500, 140] ];
	
	var question;
	
	indexfactor = Math.floor(Math.random()*(factortexts.length));
	mynumber= new Big(makerandommultiple ( 10, maxnumber[myQuizz.level][indexfactor], multiples[myQuizz.level][indexfactor]));		
	mydec=mynumber.times(divisorfactor[indexfactor]);
	
	if (Math.random()>0.5)
	{
		question=myRandomLang.upanddown[0]+mynumber.toString()+myRandomLang.upanddown[1]+factortexts[indexfactor]+myRandomLang.upanddown[3];
		myanswer=formatnumber(mynumber.plus(mydec),myQuizz.language);
		answer=mynumber.toString()+myRandomLang.upanddown[4]+factortexts[indexfactor]+" "+myRandomLang.vaut+"$\\color{red}{"+myanswer+"}$";

	}
	else
	{
		question=myRandomLang.upanddown[0]+mynumber.toString()+myRandomLang.upanddown[2]+factortexts[indexfactor]+myRandomLang.upanddown[3];
		myanswer=formatnumber(mynumber.minus(mydec),myQuizz.language);
		answer=mynumber.toString()+myRandomLang.upanddown[5]+factortexts[indexfactor]+" "+myRandomLang.vaut+"$\\color{red}{"+myanswer+"}$";
	}
	
	return makeUnFieldQuestion(true,6,question,"euros",myanswer,answer,question,answer);
				
}

function randomQuizzPercentToCoef()
{
	var commonscale=[1,10,20,25,50,75,90,99,"0.5", "2.5", "7,5"];
	var increasescale=[100,200,250];
	
	if (Math.random()>0.5)
	{
		switch (makerandommultiple(0,2,1))
		{
			case 0:
				taux=new Big(commonscale[makerandommultiple(0,commonscale.length-1,1)]);
				break;
			case 1:
				taux=new Big(increasescale[makerandommultiple(0,increasescale.length-1,1)]);
				break;
			case 2:
				taux=new Big([makerandommultiple(1,99,1)]);
				break;
		}
		question= myRandomLang.percenttocoef[0]+formatnumber(taux.toString(),myQuizz.language)+myRandomLang.percenttocoef[2];
		answer=new Big(1);
		answer=answer.plus(taux.div(100));
	}
	else
	{
		switch (makerandommultiple(0,1,1))
		{
			case 0:
				taux=new Big(commonscale[makerandommultiple(0,commonscale.length-1,1)]);
				break;
			case 1:
				taux=new Big([makerandommultiple(1,99,1)]);
				break;
		}
		question= myRandomLang.percenttocoef[1]+formatnumber(taux.toString(),myQuizz.language)+myRandomLang.percenttocoef[2];
		answer=new Big(1);
		answer=answer.minus(taux.div(100));
	}		

	
	return [question,question+'$\\color{red}{'+formattexnumber(answer,myQuizz.language)+'}$.',formatnumber(answer,myQuizz.language)]
}

function randomQuizzCoeffToPercent()
{
	var commonscale=[1,10,20,25,50,75,90,99,"0.5", "2.5", "7.5"];
	var increasescale=[100,200,250];
	
	if (Math.random()>0.5)
	{
		switch (makerandommultiple(0,2,1))
		{
			case 0:
				taux=new Big(commonscale[makerandommultiple(0,commonscale.length-1,1)]);
				break;
			case 1:
				taux=new Big(increasescale[makerandommultiple(0,increasescale.length-1,1)]);
				break;
			case 2:
				taux=new Big([makerandommultiple(1,99,1)]);
				break;
		}
		mult=new Big(1);
		mult=mult.plus(taux.div(100));
		t="l'augmenter de "

	}
	else
	{
		switch (makerandommultiple(0,1,1))
		{
			case 0:
				taux=new Big(commonscale[makerandommultiple(0,commonscale.length-1,1)]);
				break;
			case 1:
				taux=new Big([makerandommultiple(1,99,1)]);
				break;
		}
		mult=new Big(1);
		mult=mult.minus(taux.div(100));
		t="le diminuer de ";
	}	

	question="Multiplier un nombre par "+formatnumber(mult.toString(),myQuizz.language)+" c'est "+t+"...%";
	answer= "Multiplier un nombre par "+formatnumber(mult.toString(),myQuizz.language)+" c'est <span class=rougedico>"+t+formatnumber(taux,myQuizz.language)+"%</span>."
	qanswer=formatnumber(taux,myQuizz.language);
	
	return [question,answer,qanswer]
		
}


function randomQuizzScale()
{
	var scale=[10,100,1000,10000,100000,1000000,50, 2000, 5000, 50000, 200000];
	var unit=['m','m', 'm', 'km', 'km', 'm', 'm', 'm', 'km', 'km'];
	var correc=[100,100,100,100000,100000,100000,100,100,100,100000,100000];
	var mniv=[4,7,10]
	
	var sn=new Big(makerandommultiple(1,20,1)+"."+makerandommultiple(0,9,1));
	var i=makerandommultiple(0,mniv[myQuizz.level],1);
	var bn=sn.times(scale[i]);
	bn=bn.div(correc[i]);
	
	if (Math.random()>0.5)
	{
		question=myRandomLang.scale[0]+formatnumber(sn,myQuizz.language)+" cm "+myRandomLang.scale[1]+"$\\frac{1}{"+formattexnumber(scale[i],myQuizz.language)+"}$"+myRandomLang.scale[2]+" "+unit[i]+")?";
		canswer=formatnumber(bn,myQuizz.language);
		answer=canswer+" "+unit[i];
	}
	else
	{
		question=myRandomLang.scale[3]+formatnumber(bn,myQuizz.language)+" "+unit[i]+" "+myRandomLang.scale[1]+"$\\frac{1}{"+formattexnumber(scale[i],myQuizz.language)+"}$"+myRandomLang.scale[4]+" cm)?";
		canswer=formatnumber(sn,myQuizz.language);	
		answer=canswer+" cm";
	}
	
	return [question,answer,canswer];
}

function randomQuizzFourthProportional()
{
	var coefs=[2,3,4,5,6,'0.5','0.5','1.5','1.5','0.25','2.5']
	var mniv=[4,8,10];
	
	var nb1=new Big(makerandommultiple(1,10,1));
	var nb2=new Big( (nb1*makerandommultiple(2,9,1)) );
	var i=makerandommultiple(0,mniv[myQuizz.level],1);
	var s1=nb1.times(coefs[i]);
	var s2=nb2.times(coefs[i]);
	
	if (Math.random()>0.5)
	{
		table="$$\\begin{array}{c|c|c} \\textrm{Poids (en kg)} &"+nb1.toString()+"&"+formattexnumber(s1.toString(),myQuizz.language)+"\\\\ \\textrm{Prix (en euros)}&"+nb2.toString()+"&\\color{red}{?}"+"\\end{array}$$";
		answer=formatnumber(s2.toString(),myQuizz.language);
	}
	else
	{
		table="$$\\begin{array}{c|c|c} \\textrm{Poids (en kg)} &"+nb1.toString()+"&\\color{red}{?}\\\\ \\textrm{Prix (en euros)}&"+nb2.toString()+"&"+formattexnumber(s2.toString(),myQuizz.language)+"\\end{array}$$";
		answer=formatnumber(s1.toString(),myQuizz.language);
	}		
	
	return [table,answer,answer];
}

function randomQuizzIsItProportional()
{
	
	var nb1=makerandommultiple(1,10,1);
	var nb2=nb1*makerandommultiple(2,9,1);
	var i=makerandommultiple(2,9,1);
	var s1=nb1*i;
	var s2=nb2*i;
	
	if (Math.random()>0.5)
	{
		d2=s2;
		correct=[true,false];
		ct=myRandomLang.yes;
	}
	else
	{
		d2=makeexclusiverandommultiple(s2-10,s2+10,1,[s2]);
		correct=[false,true];
		ct=myRandomLang.no;
	}	

	table="$$\\begin{array}{c|c|c} \\textrm{Nombre de stylos achetés} &"+nb1+"&"+s1+"\\\\ \\textrm{Prix (en euros)}&"+nb2+"&"+d2+"\\end{array}$$";	
	
	return makeUnQCMQuestion("qu",table,[myRandomLang.yes,  myRandomLang.no ],correct,myRandomLang.badluck,myRandomLang.welldone,table,ct);
}

/************************ CALCUL LITTERAL **************************/

function randomQuizzAffineEvaluation()
{           
	// Level 0 : coeff between -9 and 9
	// Level 1 : allow also to evaluate with x=a/b, a \in [-5,5], b\in [-5,5]
	// Level 2 : coeff integer or rational number a/b with -10\leq a\leq 10 et -7\leq b\leq 7
	
	var a,b,x,xnum,xden,anum,aden,anumber,bnumber,q,answer,answerlatex;
	
	
	switch (myQuizz.level)
	{
		case 0:
			a=0;
			while (a==0) a=makerandommultiple(-10,10,1);
			anumber=a;
			b=0;
			while (b==0) b=makerandommultiple(-10,10,1);
			bnumber=b;
			x=makerandommultiple(-10,10,1);
			break;
		case 1:
			a=0;
			while (a==0) a=makerandommultiple(-10,10,1);
			anumber=a;
			b=0;
			while (b==0) b=makerandommultiple(-10,10,1);
			bnumber=b;
			xnum=0;
			xden=0;
			xnum=makerandommultiple(-5,5,1);
			while (xden==0) xden=makerandommultiple(-5,5,1);
			x=xnum+"/"+"("+xden+")";
			break;
		case 2:
			anum=0;
			while (anum==0) anum=makerandommultiple(-10,10,1);
			aden=0;
			while (aden==0) aden=makerandommultiple(-6,6,1);				
			anumber=anum/aden;
			a=anum+"/"+"("+aden+")";
			bnum=0;
			while (bnum==0) bnum=makerandommultiple(-10,10,1);
			bden=0;
			while (bden==0) bden=makerandommultiple(-6,6,1);				
			bnumber=bnum/bden;
			b=bnum+"/"+"("+bden+")";
			xnum=0;
			xden=0;
			xnum=makerandommultiple(-5,5,1);
			while (xden==0) xden=makerandommultiple(-5,5,1);
			x=xnum+"/"+"("+xden+")";
			break;			
	}
	f=new algebra.parse(a+"*x+("+b+")");
	expression=algebra.toTex(f);
	val=new algebra.parse(""+x+"");
	answer=f.eval({x: val});
	value=algebra.toTex(val);
	q=myRandomLang.compute+"$"+expression+"$ "+myRandomLang.pour+"$x="+value+"$";
	answerlatex="$"+expression+"$ "+myRandomLang.pour+"$x="+value+"$ "+myRandomLang.isequal+"$"+algebra.toTex(answer)+"$.";

	
	return makeUnFieldQuestion(false,12,q,"",answer,answer,q,answerlatex);

}

function randomQuizzPolynomialEvaluation()
{           
	// Option 0: ax+b
	// Option 1 : ax^2+bx+c
	// Option 2 : ax^2+bc+c or (cx+d)(ex+f)
	// Option 3 : authorize polynomial of degree 3 or 4
	
	var a=0,b=0,c=0,d=0,x,q;
	var type=makerandommultiple(0,3,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,3,1);
	
	
	switch (type)
	{
		case 0:
			a=makenonzerorandommultiple(-10,10,1);
			b=makerandommultiple(-10,10,1);
			x=makenonzerorandommultiple(-5,5,1);
			mytext=(algebra.parse('('+a+')'+'x+('+b+')')).toTex();
			myresult=a*x+b;
			break;		
		case 1:
			a=makenonzerorandommultiple(-10,10,1);
			b=makerandommultiple(-10,10,1);
			c=makerandommultiple(-10,10,1);
			x=makenonzerorandommultiple(-5,5,1);
			mytext=(algebra.parse('('+a+')'+'x^2+('+b+')x+('+c+')')).toTex();
			myresult=a*x*x+b*x+c;
			break;
		case 2:
			a=makenonzerorandommultiple(-5,5,1);
			b=makenonzerorandommultiple(-5,5,1);
			c=makenonzerorandommultiple(-5,5,1);
			d=makenonzerorandommultiple(-5,5,1);
			x=makenonzerorandommultiple(-4,4,1);
			mytext='('+algebra.parse('('+a+')'+'x+('+b+')')+')('+algebra.parse('('+c+')'+'x+('+d+')')+')';
			myresult=(a*x+b)*(c*x+d);
			break;
		case 3:
			x=makenonzerorandommultiple(-3,3,1);
			while ( (a==0) && (b==0) && (c==0)) 
			{
				a=makerandommultiple(-3,3,1);
				b=makerandommultiple(-5,5,1);
				c=makerandommultiple(-5,5,1);
			}
			d=makerandommultiple(-5,5,1);
			mytext=(algebra.parse('('+a+')'+'x^3+('+b+')x^2+('+c+')x+('+d+')')).toTex();
			myresult=a*x*x*x+b*x*x+c*x+d;
			break;			
	}

	value=algebra.toTex(x);
	var q=myRandomLang.compute+"$"+mytext+"$ "+myRandomLang.pour+"$x="+value+"$";
	return makeUnFieldQuestion(false,12,q,"",myresult,myresult,q, "$"+mytext+"$ "+myRandomLang.pour+"$x="+value+"$ "+myRandomLang.isequal+"$"+myresult+"$.")

}

function makeProgramnb(c1)
{
	var choice,nb;
	var text="",formula="",formulatex="";
	
	choice=makerandommultiple(0,c1,1);
	switch (choice)
	{
		case 0:
			nb=makenonzerorandommultiple(2,10,1);
			text+=nb;
			formula+=nb;
			formulatex+=nb;
			break;
		case 2:
			text+="la moitié du nombre choisi";
			formula+="n/2";
			formulatex+="\\frac n 2";
			break;
		case 1:
			text+="le double du nombre choisi";
			formula+="2*n";
			formulatex+="2n";
			break;				
		case 3:
			text+="le carré du nombre choisi";
			formula+="n^2";
			formulatex+="n^2";
			break;		
	}
	
	return [text,formula,formulatex];
}

function makeProgrammult(c1,c2)
{
	var choice;
	choice=makerandommultiple(0,c2,1);
	prgtex+="";
	switch (choice)
	{
		case 0:
			prgtex+="Multiplier par ";
			retour=makeProgramnb(c1);
			prgtex+=retour[0];
			prgformula+="*"+retour[1];
			prgformulatex+="\\times "+retour[2];
			break;
		case 1:
			prgtex+="Diviser par ";
			nb=makenonzerorandommultiple(2,5,1);
			prgtex+=nb;
			prgformula+="/"+nb;
			if (prgformulatex[0]=="(") prgformulatex=prgformulatex.substring(1,prgformulatex.length-2);  
			prgformulatex="\\frac{"+prgformulatex+"}{"+nb+"}";
			break;
		case 2:
			prgtex+="Prendre le double";
			prgformula+="*2";
			prgformulatex+="\\times 2";
			break;
		case 3:
			prgtex+="Prendre la moitié";
			prgformula+="/2";
			if (prgformulatex[0]=="(") prgformulatex=prgformulatex.substring(1,prgformulatex.length-2);  
			prgformulatex="\\frac{"+prgformulatex+"}{2}";
			break;
		case 4:
			prgtex+="&Eacute;lever au carré";
			prgformula+="^2";
			prgformulatex+="^2";
			break;
	}	
	prgtex+="<br />";
}

function makeProgramadd(c1)
{
	if (Math.random()<0.5)	
	{
		prgtex+="Ajouter ";
		prgformula+="+";
		prgformulatex+="+";
	}
	else
	{
		prgtex+="Soustraire ";
		prgformula+="-";
		prgformulatex+="-";
	}
	retour=makeProgramnb(c1);
	prgtex+=retour[0]+"<br />";
	prgformula+=retour[1];
	prgformulatex+=retour[2];
}

function makeProgram(level)
{
	prgtex="Choisir un nombre.<br />";
	prgformula="n";
	prgformulatex="n";
	
	var c1,c2,choice,retour;
	switch (level)
	{
		case 0:
			c1=0;
			c2=0;
			break;
		case 1:
			c1=1;
			c2=3;
			break;
		case 2:
			c1=3;
			c2=4;
			break;
	}
	
	if (Math.random()<0.5)
	{  // La première étape est une addition/soustraction
		makeProgramadd(c1);
		prgformula="("+prgformula+")";
		prgformulatex="\\left ("+prgformulatex+"\\right)";
		makeProgrammult(c1,c2);
		makeProgramadd(c1);
	}
	else
	{
		// La première étape est une multiplication
		makeProgrammult(c1,c2);
		makeProgramadd(c1);
		prgformula="("+prgformula+")";
		prgformulatex="\\left ("+prgformulatex+"\\right)";
		makeProgrammult(c1,c2);
	}		
	return [prgtex,prgformula,prgformulatex];
}

function randomQuizzCalculusProgram()
{
	var retour=makeProgram(myQuizz.level);
	
	return {
		type: "noanswer",
		text: "Que fait le programme de calcul suivant appliqué au nombre $n$?<div class=citation>"+retour[0]+"</div>",  
		answer : "$"+retour[2]+"="+algebra.parse(retour[1]).toTex()+".$",
	}
}

function randomQuizzCalculusProgramEvaluation()
{
	var retour=makeProgram(myQuizz.level);
	var n;
	switch (myQuizz.level)
	{
		case 0:
			n=makerandommultiple(1,5,1);
			break;
		case 1:
		case 2:
			n=makerandommultiple(-5,5,1);
			break;
	}
	
	var f=algebra.parse(retour[1]);
	
	answer=f.eval({n: n});
	
	var q="Que fait le programme de calcul suivant appliqué au nombre $"+n+"$?<div class=citation>"+retour[0]+"</div>";
	
	answerlatex=algebra.toTex(answer);	
	
	return makeUnFieldQuestion(false,12,q,"",answer.toString(),"$"+answerlatex+"$.",q," $\\color{red}{"+answerlatex+"}$.");	

}

function makeRandomQuestionQuizzLitteralSum(type)
{
	variables=["a","b","x","y","z"];
	
	
	numbermaxofterms = [3,4,4];
	numbermaxofvariables=[1,2,2];
	numbermaxofdegree=[1,1,2];
	
	var mytext="";
	var myunparsedtext="";
	
	var numberofterms;
	
	mytype=type;
	if (type==2)
	{
		mytype=makerandommultiple(1,2,1);  // Two kinds of questions
	}
	
	switch (mytype)
	{
		case 0:	// A sum of 2 or 3 terms with one variable
			myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
			numberofterms=makerandommultiple(numbermaxofterms[type]-1,numbermaxofterms[type],1);
			numbertermswithvariables=0;

			for (var j=0;j<numberofterms;j++)
			{
				mylocaltext="";
				mylocalunparsedtext="";
				mynumber=makenonzerorandommultiple(-10,10,1);
				mylocaltext+="("+mynumber+")";
				if ( (numberofterms==2) || ( (numbertermswithvariables==0) & (j==numberofterms-1)) || (Math.random()<0.5) )
				{
					mylocaltext+="*"+myvariable;
					numbertermswithvariables++;
				}
				mylocalunparsedtext=mylocaltext;
				mylocaltext=algebra.toTex(algebra.parse(mylocaltext));
				if ( (j>0) && (mynumber>0) ) 
				{
					mylocaltext="+"+mylocaltext;
				}
				if (j>0)
					mylocalunparsedtext="+"+mylocalunparsedtext;				
				mytext+=mylocaltext;
				myunparsedtext+=mylocalunparsedtext;
			}
			break;
		case 1:   // A sum of 4 terms with one or two variables
			mytext="";
			myvariable=[ variables[ makerandommultiple(0,variables.length-1,1)],  variables[ makerandommultiple(0,variables.length-1,1)]];
			numberofterms=4;
			numbertermswithvariables=0;
			for (var j=0;j<numberofterms;j++)
			{
				mylocaltext="";
				mylocalunparsedtext="";
				
				mynumber=makenonzerorandommultiple(-10,10,1);
				mylocaltext+="("+mynumber+")";
				if ( ( (numbertermswithvariables==0) & (j==numberofterms-1)) || (Math.random()<0.5) )
				{
					mylocaltext+="*"+myvariable[makerandommultiple(0,1,1)];
					numbertermswithvariables++;
				}
				mylocalunparsedtext=mylocaltext;
				mylocaltext=algebra.toTex(algebra.parse(mylocaltext));
				if ( (j>0) && (mynumber>0) ) 
				{
					mylocaltext="+"+mylocaltext;
				}
				if (j>0)
					mylocalunparsedtext="+"+mylocalunparsedtext;
				mytext+=mylocaltext;
				myunparsedtext+=mylocalunparsedtext;
			}		
			break;	
		case 2: // A sum of 4 terms with one variable and sometimes square
			mytext="";
			myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
			numberofterms=4;
			numbertermswithvariables=0;
			for (var j=0;j<numberofterms;j++)
			{
				mylocaltext="";
				mylocalunparsedtext="";
				mynumber=makenonzerorandommultiple(-10,10,1);
				mylocaltext+="("+mynumber+")";
				if (  ( (numbertermswithvariables==0) & (j==numberofterms-1)) || (Math.random()<0.5) )
				{
					mylocaltext+="*"+myvariable;
					numbertermswithvariables++;
					if (Math.random()<0.5) // We add a square!
					{
						mylocaltext+="*"+myvariable;
					}
				}
				mylocalunparsedtext=mylocaltext;
				mylocaltext=algebra.toTex(algebra.parse(mylocaltext));
				if ( (j>0) && (mynumber>0) ) 
				{
					mylocaltext="+"+mylocaltext;
				}
				if (j>0)
					mylocalunparsedtext="+"+mylocalunparsedtext;				
				mytext+=mylocaltext;
				myunparsedtext+=mylocalunparsedtext;
			}		
			break;			
	}

	return [mytext,algebra.toTex(algebra.parse(myunparsedtext)),supertrim(algebra.parse(myunparsedtext).toString())];
}

function randomQuizzLitteralSum()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralSum,myRandomLang.reduce);
}

function makeRandomQuestionQuizzLitteralProduct(type)
{
	variables=["a","b","x","y","z"];
	
	
	var mytext="";
	var myunparsedtext="";
	
	var numberofterms;
	
	switch (type)
	{
		case 0:	// A product of 2 or 3 terms with one variable
			myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
			numberofterms=makerandommultiple(2,3,1);
			numbertermswithvariables=0;

			for (var j=0;j<numberofterms;j++)
			{
				mylocaltext="";
				mylocalunparsedtext="";
				mynumber=makenonzerorandommultiple(-10,10,1);

				mylocaltext+=mynumber;
				
				if (  (numbertermswithvariables==0) && ( (j==numberofterms-1) || (Math.random()<0.5) )	) 
				{
					mylocaltext+="*"+myvariable;
					numbertermswithvariables++;
				}
				mylocalunparsedtext=mylocaltext;
				mylocaltext=algebra.toTex(algebra.parse(mylocaltext));
				
				if (mynumber<0)
				{
					mylocaltext='('+mylocaltext+')';
					mylocalunparsedtext='('+mylocaltext+')';
				}

				if (j>0)
				{
					mylocalunparsedtext="*"+mylocalunparsedtext;
					mylocaltext="\\times "+mylocaltext;

				}					
				mytext+=mylocaltext;
				myunparsedtext+=mylocalunparsedtext;
			}
			break;
		case 1:   // A product of 3 terms with one variable and degree at most 2
		case 2:
			mytext="";
			if (type==1)
			{
				var index=makerandommultiple(0,variables.length-1,1);
				myvariable=[ variables[index],variables[index] ];
				numberofterms=3;
			}
			else
			{
				myvariable=[ variables[ makerandommultiple(0,variables.length-1,1)],  variables[ makerandommultiple(0,variables.length-1,1)]];
				numberofterms=4;
			}
			numbertermswithvariables=0;
			for (var j=0;j<numberofterms;j++)
			{
				mylocaltext="";
				mylocalunparsedtext="";
				mynumber=makenonzerorandommultiple(-10,10,1);

				mylocaltext+=mynumber;
				
				if (  ( (numbertermswithvariables==0) &&  (j==numberofterms-1)) ||  ((numbertermswithvariables<=1) && ( (Math.random()<0.5))) )
				{
					mylocaltext+="*"+myvariable[makerandommultiple(0,1,1)];
					numbertermswithvariables++;
				}
				mylocalunparsedtext=mylocaltext;
				mylocaltext=algebra.toTex(algebra.parse(mylocaltext));
				
				if (mynumber<0)
				{
					mylocaltext='('+mylocaltext+')';
					mylocalunparsedtext='('+mylocaltext+')';
				}

				if (j>0)
				{
					mylocalunparsedtext="*"+mylocalunparsedtext;
					mylocaltext="\\times "+mylocaltext;

				}					
				mytext+=mylocaltext;
				myunparsedtext+=mylocalunparsedtext;	
			}		
			break;				
	}

	return [mytext,algebra.toTex(algebra.parse(myunparsedtext)),supertrim(algebra.parse(myunparsedtext).toString())];
}

function randomQuizzLitteralProduct()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralProduct,myRandomLang.reduce);
}

function makeRandomQuestionQuizzLitteralParenthesis(type)
{
	var variables=["a","b","x","y","z"];
	
	
	var mytext="";
	var myunparsedtext="";
	var mytext2="";
	var myunparsedtext2="";
	var myvariable;
	var a=0,b=0,c=0,d=0,e=0,f=0;
	
	
	switch (type)
	{
		case 0:
			myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
				while ( (a==0) && (b==0) )
				{
					a=makerandommultiple(-10,10,1);
					b=makerandommultiple(-10,10,1);
				}
				while ( (c==0) && (d==0) )
				{
					c=makerandommultiple(-10,10,1);
					d=makerandommultiple(-10,10,1);
				}	
			myunparsedtext='( ('+a+') *'+myvariable+'+('+b+') )';
			if ( ( a!=0) && (b!=0) )
			{
				mytext='('+algebra.toTex(algebra.parse(myunparsedtext))+')';
			}
			else
			{
				mytext=algebra.toTex(algebra.parse(myunparsedtext));
			}
			if (Math.random()<0.5)
			{
				myunparsedtext+='+';
				mytext+='+';
			}
			else
			{
				myunparsedtext+='-';
				mytext+='-';				
			}
			myunparsedtext2='( ('+c+') *'+myvariable+'+('+d+') )';
			if ( ((c!=0) && (d!=0)) || (c<0) || (d<0) )
			{
				mytext2='('+algebra.toTex(algebra.parse(myunparsedtext2))+')';		
			}
			else
			{
				mytext2=algebra.toTex(algebra.parse(myunparsedtext2));	
			}
			myunparsedtext+=myunparsedtext2;
			mytext+=mytext2;
			break;
		case 1:
			myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
			a=makenonzerorandommultiple(-1,1,1);
			b=makenonzerorandommultiple(-10,10,1);
			c=makenonzerorandommultiple(-10,10,1);
			d=makenonzerorandommultiple(-10,10,1);
			e=makerandommultiple(-5,5,1);
			f=makerandommultiple(0,5,1);
			myunparsedtext='( ('+a+') *'+myvariable+'+('+b+') )';

			mytext=simplifyLatexNumber(e)+' ('+algebra.toTex(algebra.parse(myunparsedtext))+')';	
			myunparsedtext=e+'*'+myunparsedtext;
			if (Math.random()<0.5)
			{
				myunparsedtext+='+';
				mytext+='+';
			}
			else
			{
				myunparsedtext+='-';
				mytext+='-';				
			}
			myunparsedtext2='( ('+c+') *'+myvariable+'+('+d+') )';
			mytext2=simplifyLatexNumber(f)+' ('+algebra.toTex(algebra.parse(myunparsedtext2))+')';		
			myunparsedtext2=f+'*'+myunparsedtext2;
			myunparsedtext+=myunparsedtext2;
			mytext+=mytext2;
			break;	
		case 2:
			myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
			a=makenonzerorandommultiple(-1,1,1);
			b=makenonzerorandommultiple(-10,10,1);
			c=makenonzerorandommultiple(-10,10,1);
			d=makenonzerorandommultiple(-10,10,1);
			e=makenonzerorandommultiple(-5,5,1);
			f=makenonzerorandommultiple(1,5,1);
			myunparsedtext='( ('+a+') *'+myvariable+'+('+b+') )';

			if (Math.random()<0.7)
			{
				mytext=simplifyLatexNumber(e)+' ('+algebra.toTex(algebra.parse(myunparsedtext))+')';	
				myunparsedtext=e+'*'+myunparsedtext;
			}
			else
			{
				mytext=simplifyLatexNumber(e)+myvariable+' ('+algebra.toTex(algebra.parse(myunparsedtext))+')';	
				myunparsedtext=e+'*'+myvariable+'*'+myunparsedtext;
			}				
			if (Math.random()<0.5)
			{
				myunparsedtext+='+';
				mytext+='+';
			}
			else
			{
				myunparsedtext+='-';
				mytext+='-';				
			}
			myunparsedtext2='( ('+c+') *'+myvariable+'+('+d+') )';
			if (Math.random()<0.7)
			{
				mytext2=simplifyLatexNumber(f)+' ('+algebra.toTex(algebra.parse(myunparsedtext2))+')';		
				myunparsedtext2=f+'*'+myunparsedtext2;
			}
			else 
			{
				mytext2=simplifyLatexNumber(f)+myvariable+'('+algebra.toTex(algebra.parse(myunparsedtext2))+')';	
				myunparsedtext2=f+'*'+myvariable+'*'+myunparsedtext2;
			}
			myunparsedtext+=myunparsedtext2;
			mytext+=mytext2;
			break;				
	}
	
	
	return [mytext,algebra.toTex(algebra.parse(myunparsedtext)),supertrim(algebra.parse(myunparsedtext).toString())];
}
	
function randomQuizzLitteralParenthesis()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralParenthesis,myRandomLang.reduce);
}

function makeRandomQuestionQuizzLitteralExpandSmallProduct()
{
	variables=["a","b","x","y","z"];
	
	
	var mytext="",mytext2="";
	var myunparsedtext="",myunparsedtext2="";
	var myvariable=variables[ makerandommultiple(0,variables.length-1,1)];

	var a=1,b,c;
	
	while (a==1) a=makenonzerorandommultiple(-10,10,1);
	b=makenonzerorandommultiple(-10,10,1);
	c=makenonzerorandommultiple(-10,10,1);
	
	
	myunparsedtext='('+a+')';
	mytext+=simplifyLatexNumber(a);
				
	myunparsedtext2='( ('+b+') *'+myvariable+'+('+c+') )';
	mytext2='('+algebra.toTex(algebra.parse(myunparsedtext2))+')';

	return [mytext+mytext2,algebra.toTex(algebra.parse(myunparsedtext+'*'+myunparsedtext2)),supertrim(algebra.parse(myunparsedtext+'*'+myunparsedtext2).toString())];
}

function randomQuizzLitteralExpandSmallProduct()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralExpandSmallProduct,myRandomLang.developandreduce);
}

function makeRandomQuestionQuizzLitteralDevelopSumSquare()
{
	variables=["a","b","x","y","z"];
	
	
	var mytext="",mytext2="";
	var myunparsedtext="",myunparsedtext2="";
	
	var type=makerandommultiple(1,5,1);
	var a=makerandommultiple(1,5,1);
	var b=makerandommultiple(1,5,1);
	var myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
	var myvariable2=myvariable;
	while (myvariable2==myvariable) myvariable2=variables[ makerandommultiple(0,variables.length-1,1)];

	
	switch (type)
	{
		case 1:
		case 2:
		case 3:
			mytext="\\left("+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)^2";
			mytexanswer=simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+2*a*b+myvariable+"+"+(b*b);
			myanswer=[ simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+2*a*b+myvariable+"+"+(b*b),(b*b)+"+"+2*a*b+myvariable+"+"+simplifyLatexNumber(a*a)+myvariable+'^2'];
			break;
		case 4:
			mytext="\\left("+b+"+"+simplifyLatexNumber(a)+myvariable+"\\right)^2";
			mytexanswer=simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+2*a*b+myvariable+"+"+(b*b);
			myanswer=[ simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+2*a*b+myvariable+"+"+(b*b),(b*b)+"+"+2*a*b+myvariable+"+"+simplifyLatexNumber(a*a)+myvariable+'^2'];
			break;	
		case 5:
			mytext="\\left("+simplifyLatexNumber(a)+myvariable+"+"+simplifyLatexNumber(b)+myvariable2+"\\right)^2";
			mytexanswer=simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+2*a*b+myvariable+myvariable2+"+"+simplifyLatexNumber(b*b)+myvariable2+'^2';
			myanswer=[ simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+2*a*b+myvariable+myvariable2+"+"+simplifyLatexNumber(b*b)+myvariable2+'^2',simplifyLatexNumber(b*b)+myvariable2+'^2'+"+"+2*a*b+myvariable2+myvariable+"+"+simplifyLatexNumber(a*a)+myvariable+'^2',simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+2*a*b+myvariable2+myvariable+"+"+simplifyLatexNumber(b*b)+myvariable2+'^2',simplifyLatexNumber(b*b)+myvariable2+'^2'+"+"+2*a*b+myvariable+myvariable2+"+"+simplifyLatexNumber(a*a)+myvariable+'^2'];
			break;
	}
	return [mytext,mytexanswer,myanswer];
}

function randomQuizzLitteralDevelopSumSquare()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralDevelopSumSquare,myRandomLang.developandreduce);
}

function makeRandomQuestionQuizzLitteralDevelopDifferenceSquare()
{
	variables=["a","b","x","y","z"];
	
	
	var mytext="",mytext2="";
	var myunparsedtext="",myunparsedtext2="";
	
	var type=makerandommultiple(1,5,1);
	var a=makerandommultiple(1,5,1);
	var b=makerandommultiple(1,5,1);
	var myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
	var myvariable2=myvariable;
	while (myvariable2==myvariable) myvariable2=variables[ makerandommultiple(0,variables.length-1,1)];

	
	switch (type)
	{
		case 1:
		case 2:
		case 3:
			mytext="\\left("+simplifyLatexNumber(a)+myvariable+"-"+b+"\\right)^2";
			mytexanswer=simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+2*a*b+myvariable+"+"+(b*b);
			myanswer=[ simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+2*a*b+myvariable+"+"+(b*b),(b*b)+"-"+2*a*b+myvariable+"+"+simplifyLatexNumber(a*a)+myvariable+'^2'];
			break;
		case 4:
			mytext="\\left("+b+"-"+simplifyLatexNumber(a)+myvariable+"\\right)^2";
			mytexanswer=simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+2*a*b+myvariable+"+"+(b*b);
			myanswer=[ simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+2*a*b+myvariable+"+"+(b*b),(b*b)+"-"+2*a*b+myvariable+"+"+simplifyLatexNumber(a*a)+myvariable+'^2'];
			break;	
		case 5:
			mytext="\\left("+simplifyLatexNumber(a)+myvariable+"-"+simplifyLatexNumber(b)+myvariable2+"\\right)^2";
			mytexanswer=simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+2*a*b+myvariable+myvariable2+"+"+simplifyLatexNumber(b*b)+myvariable2+'^2';
			myanswer=[ simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+2*a*b+myvariable+myvariable2+"+"+simplifyLatexNumber(b*b)+myvariable2+'^2',simplifyLatexNumber(b*b)+myvariable2+'^2'+"-"+2*a*b+myvariable2+myvariable+"+"+simplifyLatexNumber(a*a)+myvariable+'^2',simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+2*a*b+myvariable2+myvariable+"+"+simplifyLatexNumber(b*b)+myvariable2+'^2',simplifyLatexNumber(b*b)+myvariable2+'^2'+"-"+2*a*b+myvariable+myvariable2+"+"+simplifyLatexNumber(a*a)+myvariable+'^2'];
			break;
	}
	return [mytext,mytexanswer,myanswer];
}

function randomQuizzLitteralDevelopDifferenceSquare()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralDevelopDifferenceSquare,myRandomLang.developandreduce);
}

function makeRandomQuestionQuizzLitteralDevelopSumDifference()
{
	variables=["a","b","x","y","z"];
	
	
	var mytext="",mytext2="";
	var myunparsedtext="",myunparsedtext2="";
	
	var type=makerandommultiple(1,6,1);
	var a=makerandommultiple(1,5,1);
	var b=makerandommultiple(1,5,1);
	var myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
	var myvariable2=myvariable;
	while (myvariable2==myvariable) myvariable2=variables[ makerandommultiple(0,variables.length-1,1)];

	
	switch (type)
	{
		case 1:
			mytext="\\left("+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)\\left("+simplifyLatexNumber(a)+myvariable+"-"+b+"\\right)";
			mytexanswer=simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+(b*b);
			myanswer=[ simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+(b*b),"-"+(b*b)+"+"+simplifyLatexNumber(a*a)+myvariable+'^2'];
			break;
		case 2:
			mytext="\\left("+simplifyLatexNumber(a)+myvariable+"-"+b+"\\right)\\left("+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)";
			mytexanswer=simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+(b*b);
			myanswer=[ simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+(b*b),"-"+(b*b)+"+"+simplifyLatexNumber(a*a)+myvariable+'^2'];
			break;	
		case 3:
			mytext="\\left("+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)\\left(-"+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)";
			mytexanswer="-"+simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+(b*b);
			myanswer=[ "-"+simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+(b*b),(b*b)+"-"+simplifyLatexNumber(a*a)+myvariable+'^2'];
			break;
		case 4:
			mytext="\\left(-"+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)\\left("+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)";
			mytexanswer="-"+simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+(b*b);
			myanswer=[ "-"+simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+(b*b),(b*b)+"-"+simplifyLatexNumber(a*a)+myvariable+'^2'];
			break;					
		case 5:
			mytext="\\left("+simplifyLatexNumber(a)+myvariable+"+"+simplifyLatexNumber(b)+myvariable2+"\\right)\\left("+simplifyLatexNumber(a)+myvariable+"-"+simplifyLatexNumber(b)+myvariable2+"\\right)";
			mytexanswer=simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+simplifyLatexNumber(b*b)+myvariable2+'^2';
			myanswer=[ simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+simplifyLatexNumber(b*b)+myvariable2+'^2',
			"-"+simplifyLatexNumber(b*b)+myvariable2+'^2'+"+"+simplifyLatexNumber(a*a)+myvariable+'^2'];
			break;
		case 6:
			mytext="\\left(-"+simplifyLatexNumber(a)+myvariable+"+"+simplifyLatexNumber(b)+myvariable2+"\\right)\\left("+simplifyLatexNumber(a)+myvariable+"+"+simplifyLatexNumber(b)+myvariable2+"\\right)";
			mytexanswer="-"+simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+simplifyLatexNumber(b*b)+myvariable2+'^2';
			myanswer=[ simplifyLatexNumber(b*b)+myvariable2+'^2'+"-"+simplifyLatexNumber(a*a)+myvariable+'^2',
			"-"+simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+simplifyLatexNumber(b*b)+myvariable2+'^2'];
			break;			
	}
	return [mytext,mytexanswer,myanswer];
}

function randomQuizzLitteralDevelopSumDifference()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralDevelopSumDifference,myRandomLang.developandreduce);
}

function makeRandomQuestionQuizzLitteralFactorSumSquare()
{
	variables=["a","b","x","y","z"];
	
	
	var mytext="",mytext2="";
	var myunparsedtext="",myunparsedtext2="";
	
	var type=makerandommultiple(1,5,1);
	var a=makerandommultiple(1,5,1);
	var b=makerandommultiple(1,5,1);
	var myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
	var myvariable2=myvariable;
	while (myvariable2==myvariable) myvariable2=variables[ makerandommultiple(0,variables.length-1,1)];

	
	switch (type)
	{
		case 1:
		case 2:
		case 3:
			mytexanswer="\\left("+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)^2";
			mytext=simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+2*a*b+myvariable+"+"+(b*b);
			myanswer=[ '('+simplifyLatexNumber(a)+myvariable+"+"+b+')^2','('+b+"+"+simplifyLatexNumber(a)+myvariable+')^2'];
			break;
		case 4:
			mytexanswer="\\left("+b+"+"+simplifyLatexNumber(a)+myvariable+"\\right)^2";
			mytext=(b*b)+"+"+2*a*b+myvariable+"+"+simplifyLatexNumber(a*a)+myvariable+'^2';
			myanswer=[ '('+simplifyLatexNumber(a)+myvariable+"+"+b+')^2','('+b+"+"+simplifyLatexNumber(a)+myvariable+')^2'];
			break;	
		case 5:
			mytexanswer="\\left("+simplifyLatexNumber(a)+myvariable+"+"+simplifyLatexNumber(b)+myvariable2+"\\right)^2";
			mytext=simplifyLatexNumber(a*a)+myvariable+'^2'+"+"+2*a*b+myvariable+myvariable2+"+"+simplifyLatexNumber(b*b)+myvariable2+'^2';
			myanswer=[ '('+simplifyLatexNumber(a)+myvariable+"+"+simplifyLatexNumber(b)+myvariable2+')^2','('+simplifyLatexNumber(b)+myvariable2+"+"+simplifyLatexNumber(a)+myvariable+')^2'];
			break;
	}
	return [mytext,mytexanswer,myanswer];
}

function randomQuizzLitteralFactorSumSquare()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralFactorSumSquare,myRandomLang.factor);
}

function makeRandomQuestionQuizzLitteralFactorDifferenceSquare()
{
	variables=["a","b","x","y","z"];
	
	
	var mytext="",mytext2="";
	var myunparsedtext="",myunparsedtext2="";
	
	var type=makerandommultiple(1,5,1);
	var a=makerandommultiple(1,5,1);
	var b=makerandommultiple(1,5,1);
	var myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
	var myvariable2=myvariable;
	while (myvariable2==myvariable) myvariable2=variables[ makerandommultiple(0,variables.length-1,1)];

	
	switch (type)
	{
		case 1:
		case 2:
		case 3:
			mytexanswer="\\left("+simplifyLatexNumber(a)+myvariable+"-"+b+"\\right)^2";
			mytext=simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+2*a*b+myvariable+"+"+(b*b);
			myanswer=[ '('+simplifyLatexNumber(a)+myvariable+"-"+b+')^2','('+b+"-"+simplifyLatexNumber(a)+myvariable+')^2'];
			break;
		case 4:
			mytexanswer="\\left("+b+"-"+simplifyLatexNumber(a)+myvariable+"\\right)^2";
			mytext=(b*b)+"-"+2*a*b+myvariable+"+"+simplifyLatexNumber(a*a)+myvariable+'^2';
			myanswer=[ '('+simplifyLatexNumber(a)+myvariable+"-"+b+')^2','('+b+"-"+simplifyLatexNumber(a)+myvariable+')^2'];
			break;	
		case 5:
			mytexanswer="\\left("+simplifyLatexNumber(a)+myvariable+"-"+simplifyLatexNumber(b)+myvariable2+"\\right)^2";
			mytext=simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+2*a*b+myvariable+myvariable2+"+"+simplifyLatexNumber(b*b)+myvariable2+'^2';
			myanswer=[ '('+simplifyLatexNumber(a)+myvariable+"-"+simplifyLatexNumber(b)+myvariable2+')^2','('+simplifyLatexNumber(b)+myvariable2+"-"+simplifyLatexNumber(a)+myvariable+')^2'];
			break;
	}
	return [mytext,mytexanswer,myanswer];
}

function randomQuizzLitteralFactorDifferenceSquare()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralFactorDifferenceSquare,myRandomLang.factor);
}

function makeRandomQuestionQuizzLitteralFactorSumDifference()
{
	var variables=["a","b","x","y","z"];
	
	
	var mytext="",mytext2="";
	var myunparsedtext="",myunparsedtext2="";
	
	var type=makerandommultiple(1,4,1);
	var a=makerandommultiple(1,5,1);
	var b=makerandommultiple(1,5,1);
	var myvariable=variables[ makerandommultiple(0,variables.length-1,1)];
	var myvariable2=myvariable;
	while (myvariable2==myvariable) myvariable2=variables[ makerandommultiple(0,variables.length-1,1)];

	
	switch (type)
	{
		case 1:
			mytexanswer="\\left("+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)\\left("+simplifyLatexNumber(a)+myvariable+"-"+b+"\\right)";
			mytext=simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+(b*b);
			myanswer=[ "("+simplifyLatexNumber(a)+myvariable+"+"+b+")("+simplifyLatexNumber(a)+myvariable+"-"+b+")","("+simplifyLatexNumber(a)+myvariable+"-"+b+")("+simplifyLatexNumber(a)+myvariable+"+"+b+")","(-"+b+"+"+simplifyLatexNumber(a)+myvariable+")("+b+"+"+simplifyLatexNumber(a)+myvariable+")","("+b+"+"+simplifyLatexNumber(a)+myvariable+")(-"+b+"+"+simplifyLatexNumber(a)+myvariable+")"];
			break;
		case 2:
			mytexanswer="\\left("+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)\\left(-"+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)";
			mytext=simplifyLatexNumber(-a*a)+myvariable+'^2'+"+"+(b*b);
			myanswer=[ "("+simplifyLatexNumber(a)+myvariable+"+"+b+")(-"+simplifyLatexNumber(a)+myvariable+"+"+b+")","(-"+simplifyLatexNumber(a)+myvariable+"+"+b+")("+simplifyLatexNumber(a)+myvariable+"+"+b+")","("+b+"+"+simplifyLatexNumber(a)+myvariable+")("+b+"-"+simplifyLatexNumber(a)+myvariable+")","("+b+"-"+simplifyLatexNumber(a)+myvariable+")("+b+"+"+simplifyLatexNumber(a)+myvariable+")"];
			break;			
		case 3:
			mytexanswer="\\left("+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)\\left(-"+simplifyLatexNumber(a)+myvariable+"+"+b+"\\right)";
			mytext=(b*b)+"-"+simplifyLatexNumber(a*a)+myvariable+'^2';
			myanswer=[ "("+simplifyLatexNumber(a)+myvariable+"+"+b+")(-"+simplifyLatexNumber(a)+myvariable+"+"+b+")","(-"+simplifyLatexNumber(a)+myvariable+"+"+b+")("+simplifyLatexNumber(a)+myvariable+"+"+b+")","("+b+"+"+simplifyLatexNumber(a)+myvariable+")("+b+"-"+simplifyLatexNumber(a)+myvariable+")","("+b+"-"+simplifyLatexNumber(a)+myvariable+")("+b+"+"+simplifyLatexNumber(a)+myvariable+")"];
			break;
		case 4:
			mytexanswer="\\left("+simplifyLatexNumber(a)+myvariable+"+"+simplifyLatexNumber(b)+myvariable2+"\\right)\\left("+simplifyLatexNumber(a)+myvariable+"-"+simplifyLatexNumber(b)+myvariable2+"\\right)";
			mytext=simplifyLatexNumber(a*a)+myvariable+'^2'+"-"+simplifyLatexNumber(b*b)+myvariable2+'^2';
			myanswer=[ "("+simplifyLatexNumber(a)+myvariable+"+"+simplifyLatexNumber(b)+myvariable2+")("+simplifyLatexNumber(a)+myvariable+"-"+simplifyLatexNumber(b)+myvariable2+")","("+simplifyLatexNumber(a)+myvariable+"-"+simplifyLatexNumber(b)+myvariable2+")("+simplifyLatexNumber(a)+myvariable+"+"+simplifyLatexNumber(b)+myvariable2+")","(-"+simplifyLatexNumber(b)+myvariable2+"+"+simplifyLatexNumber(a)+myvariable+")("+simplifyLatexNumber(b)+myvariable2+"+"+simplifyLatexNumber(a)+myvariable+")","("+simplifyLatexNumber(b)+myvariable2+"+"+simplifyLatexNumber(a)+myvariable+")(-"+simplifyLatexNumber(b)+myvariable2+"+"+simplifyLatexNumber(a)+myvariable+")"];
			break;						
	}
	return [mytext,mytexanswer,myanswer];
}

function randomQuizzLitteralFactorSumDifference()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralFactorSumDifference,myRandomLang.factor);
}


function randomQuizzLitteralFactorSmallProduct()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralExpandSmallProduct,myRandomLang.expand);
}

function makeRandomQuestionQuizzLitteralFactorSmallProduct()
{
	variables=["a","b","x","y","z"];
	
	
	var myunparsedtext="",myunparsedtext2="";
	var myvariable=variables[ makerandommultiple(0,variables.length-1,1)];

	var a=1,b,c=0,myresult,myresult2;
	var type=makerandommultiple(0,3,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,3,1);
	
	while (Math.abs(a)==1) a=makenonzerorandommultiple(-10,10,1);
	b=makenonzerorandommultiple(1,10,1);
	c=b;
	while (Algebrite.gcd(b,c)!=1) c=makenonzerorandommultiple(-10,10,1);
	d=makenonzerorandommultiple(-5,5,1);
	
	
	myunparsedtext='('+a+')';				
	if (type==0) 
	{
		myunparsedtext2='( ('+b+') *'+myvariable+'+('+c+') )';
		myresult=a+'('+simplifyLatexNumber(b)+myvariable;
		if (c<0) myresult+=c+')'; else myresult+="+"+c+")";
		myresult2=-a+'('+simplifyLatexNumber(-b)+myvariable;
		if (c>0) myresult2+=+(-c)+')'; else myresult2+="+"+(-c)+")";
	}
	else
	{
		myunparsedtext2='( ('+b+') *'+myvariable+'^2+('+c+') *'+myvariable+'+('+d+') )';
		myresult=a+'('+simplifyLatexNumber(b)+myvariable+"^2";
		if (c<0) myresult+=simplifyLatexNumber(c); else myresult+="+"+simplifyLatexNumber(c);
		myresult+=myvariable;
		if (d<0) myresult+=d+')'; else myresult+="+"+d+")";
		myresult2=-a+'('+simplifyLatexNumber(-b)+myvariable+"^2";
		if (c>0) myresult2+=simplifyLatexNumber(-c); else myresult2+="+"+simplifyLatexNumber(-c);
		myresult2+=myvariable;		
		if (d>0) myresult2+=+(-d)+')'; else myresult2+="+"+(-d)+")";
	}
	
	
	return [algebra.toTex(algebra.parse(myunparsedtext+'*'+myunparsedtext2)),myresult,[myresult,myresult2]];
	
}

function randomQuizzLitteralFactorSmallProduct()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralFactorSmallProduct,myRandomLang.factor);
}

function makeRandomQuestionQuizzLitteralExpandProduct()
{
	variables=["a","b","x","y","z"];
	
	
	var mytext="",mytext2="";
	var myunparsedtext="",myunparsedtext2="";
	var myvariable=variables[ makerandommultiple(0,variables.length-1,1)];

	
	a=makenonzerorandommultiple(-5,5,1);
	b=makenonzerorandommultiple(-10,10,1);
	c=makenonzerorandommultiple(-10,10,1);
	d=makenonzerorandommultiple(-10,10,1);
	
	myunparsedtext='( ('+a+') *'+myvariable+'+('+b+') )';
	mytext='('+algebra.toTex(algebra.parse(myunparsedtext))+')\\times ';
				
	myunparsedtext2='( ('+c+') *'+myvariable+'+('+d+') )';
	mytext2='('+algebra.toTex(algebra.parse(myunparsedtext2))+')';

	return [mytext+mytext2,algebra.toTex(algebra.parse(myunparsedtext+'*'+myunparsedtext2)),supertrim(algebra.parse(myunparsedtext+'*'+myunparsedtext2).toString())];
	
}

function randomQuizzLitteralExpandProduct()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzLitteralExpandProduct,myRandomLang.expand);
}

function randomQuizzLitteralFactorCommon()
{
	var mytext="";
	var myunparsedtext="";
	var mytext2="";
	var myunparsedtext2="";
	var myvariable;
	var a=0,b=0,c=0,d=0,e=0,f=0;	
		
	a=makenonzerorandommultiple(-10,10,1);
	b=makenonzerorandommultiple(-10,10,1);
	c=makenonzerorandommultiple(-10,10,1);
	d=makenonzerorandommultiple(-10,10,1);

	e=makenonzerorandommultiple(-10,10,1);
	f=makenonzerorandommultiple(-10,10,1);
	
	
	// Level 0 : somme avec plus ou moins
	// Level 1 : on fait la même chose avec des coefs devant...
	// Level 2 : Pour un des deux termes facteurs communs, on s'autorise de faire -...
	
	myfirstfactor= '( ('+a+') *x+('+b+') )';
	mysecondfactor= '( ('+c+') *x+('+d+') )';
	mythirdfactor='( ('+e+') *x+('+f+') )';
	
	                                                       
	myfirstterm = '('+algebra.toTex(algebra.parse(myfirstfactor))+')';	
	mysecondterm = '('+algebra.toTex(algebra.parse(mysecondfactor))+')';	
	mythirdterm = '('+algebra.toTex(algebra.parse(mythirdfactor))+')';	
	
	switch (type)
	{
		case 0:
			m1=1;
			break;
		case 1:
			if (Math.random()<0.5)
				m1=1;
			else
				m1=-1;
			break;
		case 2:
			m1=makenonzerorandommultiple(-2,2,1);

	}
	myfourthfactor=m1+"*"+mysecondfactor;
	myquestion=simplifyLatexNumber(m1);
	
	
	if (Math.random()<0.5)
		myquestion+=myfirstterm+mysecondterm;
	else
		myquestion+=mysecondterm+myfirstterm;
	
	switch (type)
	{
		case 0:
			if (Math.random()<0.5)
			{
				m2=1;
			}
			else
			{
				m2=-1;
			}
			break;
		case 1:
		case 2:
			m2=makenonzerorandommultiple(-2,2,1);
			break;
	}
	
	if (m2>0)
	{
		myquestion+="+"+simplifyLatexNumber(m2);
	}
	else
	{
		myquestion+="-"+simplifyLatexNumber(Math.abs(m2));
	}
	
	if ( (type==2) && (Math.random()<0.5))
		{
			m2=-m2;
			a=-a;
			b=-b;
			mynewfirstfactor= '( ('+a+') *x+('+b+') )';
			mynewfirstterm = '('+algebra.toTex(algebra.parse(mynewfirstfactor))+')';	
		}
		else
			mynewfirstterm=myfirstterm;
	
	
	myfourthfactor+="+("+m2+")";
	
	
	if (Math.random()<0.5)
		myquestion+=mynewfirstterm+mythirdterm;
	else
		myquestion+=mythirdterm+mynewfirstterm;
	
	myfourthfactor+=mythirdfactor;
	
	if ( ((m1*c+m2*e)==0) && ((m1*d+m2*f)==0) )
	{
		myanswer=["0","0"]; // Very rare!
	}
	else 
		if ( ((m1*c+m2*e)==0) || ( (m1*d+m2*f)==0) )
		{
			if ((m1*c+m2*e)==1)
				myanswer=[myfirstterm,myfirstterm];
			else
				myanswer=[algebra.toTex(algebra.parse(myfourthfactor))+myfirstterm,myfirstterm+algebra.toTex(algebra.parse(myfourthfactor))];
		}
		else
		{
			myanswer=[myfirstterm+'('+algebra.toTex(algebra.parse(myfourthfactor))+')','('+algebra.toTex(algebra.parse(myfourthfactor))+')'+myfirstterm];
		}
		

	var mycheckedanswer=[supertrim(myanswer[0]),supertrim(myanswer[1])];
	var q=myRandomLang.factor+" $"+myquestion+"=?$";
	return makeUnFieldQuestion(false,20,q,"",mycheckedanswer,"$"+myanswer[0]+"$.",q,"$"+myquestion+"=\\color{red}{"+myanswer[0]+"}$.")	
}

/******************** EQUATIONS **************************/

function fd(a,b,sa,sb)
{
	if (Math.random()<0.5)
		if (sb>0) return a+'+'+b;
		else if (sb<0) return a+b;
			 else return a;
	else
	{
		if (sb==0) return a;
		if (sa>0) return b+'+'+a;
			else if (sa<0) return b+a;
	}
}

function makeTermFirstDegree(type)
{
	var a,b,c,d;
	var myterm,mytexterm;
	
	switch (type)
	{
		case 0:
			a=makenonzerorandommultiple(-5,5,1);
			b=makerandommultiple(-5,5,1);
			myterm='('+a+')*x+('+b+')';
			mytexterm=fd(algebra.parse('('+a+')*x').toTex(),b,a,b);
			break;
		case 1:
			a=makenonzerorandommultiple(-5,5,1);
			b=makerandommultiple(-5,5,1);
			c=makenonzerorandommultiple(2,5,1);
			myterm='('+a+')*x+('+b+')/('+c+')';
			mytexterm=algebra.parse(myterm).toTex();
			break;
		case 2:
			a=makenonzerorandommultiple(-5,5,1);
			b=makerandommultiple(-5,5,1);
			c=makenonzerorandommultiple(2,5,1);
			d=makenonzerorandommultiple(2,5,1);			
			myterm='('+a+')/('+d+')*x+('+b+')/('+c+')';
			mytexterm=fd(algebra.parse('('+a+')/('+d+')*x').toTex(),algebra.parse('('+b+')/('+c+')').toTex(),(a/d),(b/c));
			break;
		case 3:
			a=makenonzerorandommultiple(-5,5,1);
			b=makerandommultiple(-5,5,1);
			c=makenonzerorandommultiple(2,5,1);
			myterm='(('+a+')*x+('+b+'))/('+c+')';		
			mytexterm='\\frac{'+algebra.parse('('+a+')*x+('+b+')').toTex()+'}{'+algebra.parse('('+c+')').toTex()+'}';
			break;
		case 4:
			c=makerandommultiple(-5,5,1);
			myterm='('+c+')';
			mytexterm=algebra.parse(myterm).toTex();
			break;
		case 5:
			c=makerandommultiple(-5,5,1);
			a=makenonzerorandommultiple(2,5,1);
			myterm='('+c+')/('+a+')';
			mytexterm=algebra.parse(myterm).toTex();
			break;
		case 6:
			a=makeexclusiverandommultiple(-5,5,1,[0,1]);
			myterm='('+a+')*x';
			mytexterm=algebra.parse(myterm).toTex();
			break;
		case 7:
			a=makenonzerorandommultiple(-5,5,1);
			d=makenonzerorandommultiple(2,5,1);			
			myterm='('+a+')/('+d+')*x';
			mytexterm=algebra.parse(myterm).toTex();
			break;			
	}
	return [myterm,mytexterm];
}	
			
		

function makeRandomQuestionQuizzEquationFirstDegree(type)
{
	var myequation,mytexequation,mysol,myfirstterms,mysecondterms;
	
	mtype=type;
	if (mtype==2) mtype++;
	
	level=makerandommultiple(0,mtype,1);
	
	switch (level)
	{
		case 0:
			myfirstterms=makeTermFirstDegree(0);
			mysecondterms=makeTermFirstDegree(4);			
			break;
		case 1:
			myfirstterms=makeTermFirstDegree(1);
			mysecondterms=makeTermFirstDegree(5);			
			break;
		case 2:
			myfirstterms=makeTermFirstDegree(2);
			mysecondterms=makeTermFirstDegree(5);			
			break;
		case 3: 
			myfirstterms=makeTermFirstDegree(3);
			mysecondterms=makeTermFirstDegree(4);
			break;		
	}
	myequation=myfirstterms[0]+"="+mysecondterms[0];
	mytexequation=myfirstterms[1]+"="+mysecondterms[1];
	mysol=Algebrite.run('roots('+myequation+')');
	
	return [myRandomLang.solve+" $"+mytexequation+"$",'$'+algebra.parse(mysol).toTex()+'$',supertrim(mysol)];
}

function makeRandomQuestionQuizzEquationFirstDegreeTwo(type)
{
	var myequation,mytexequation,mysol,myfirstterms,mysecondterms;
	
	mtype=type;
	if (mtype==2) mtype++;
	
	level=makerandommultiple(0,mtype,1);
	
	switch (level)
	{
		case 0:
			myfirstterms=makeTermFirstDegree(0);
			mysecondterms=makeTermFirstDegree(0);			
			break;
		case 1:
			myfirstterms=makeTermFirstDegree(1);
			mysecondterms=makeTermFirstDegree(1);			
			break;
		case 2:
			myfirstterms=makeTermFirstDegree(2);
			mysecondterms=makeTermFirstDegree(2);			
			break;
		case 3: 
			myfirstterms=makeTermFirstDegree(3);
			mysecondterms=makeTermFirstDegree(3);
			break;		
	}
	myequation=myfirstterms[0]+"="+mysecondterms[0];
	mytexequation=myfirstterms[1]+"="+mysecondterms[1];
	mysol=Algebrite.run('roots('+myequation+')');
	
	if (mysol[0]=='S') return makeRandomQuestionQuizzEquationFirstDegreeTwo(type)  // L'équation n'avait pas de solutions...ou trop de solutions!
	else return [myRandomLang.solve+" $"+mytexequation+"$",'$'+algebra.parse(mysol).toTex()+'$',supertrim(mysol)];	
}

function makeRandomQuestionQuizzEquationFirstDegreeThree(type)
{
	var myequation,mytexequation,mysol,myfirstterms,mysecondterms;
	
	level=makerandommultiple(0,type,1);
	myfirstterms=makeTermFirstDegree(level);
	

	myequation=myfirstterms[0]+"=0";
	mytexequation=myfirstterms[1]+"=0";
	mysol=Algebrite.run('roots('+myequation+')');
	
	return [myRandomLang.solve+" $"+mytexequation+"$",'$'+algebra.parse(mysol).toTex()+'$',supertrim(mysol)];	
}

function makeRandomQuestionQuizzEquationFirstDegreeFour(type)
{
	var myequation,mytexequation,mysol,myfirstterms,mysecondterms;
	
	mtype=type;
	
	level=makerandommultiple(0,mtype,1);
	
	switch (level)
	{
		case 0:
			myfirstterms=makeTermFirstDegree(6);
			mysecondterms=makeTermFirstDegree(4);			
			break;
		case 1:
			myfirstterms=makeTermFirstDegree(6);
			mysecondterms=makeTermFirstDegree(5);			
			break;
		case 2:
			myfirstterms=makeTermFirstDegree(7);
			mysecondterms=makeTermFirstDegree(5);			
			break;	
	}
	myequation=myfirstterms[0]+"="+mysecondterms[0];
	mytexequation=myfirstterms[1]+"="+mysecondterms[1];
	mysol=Algebrite.run('roots('+myequation+')');
	
	return [myRandomLang.solve+" $"+mytexequation+"$",'$'+algebra.parse(mysol).toTex()+'$',supertrim(mysol)];	
}

function randomQuizzEquationFirstDegree()
{
	return randomQuizzGeneral(makeRandomQuestionQuizzEquationFirstDegree,myRandomLang.solve);
}

function randomQuizzEquationFirstDegreeTwo()
{
	return randomQuizzGeneral(makeRandomQuestionQuizzEquationFirstDegreeTwo,myRandomLang.solve);
}

function randomQuizzEquationFirstDegreeThree()
{
	return randomQuizzGeneral(makeRandomQuestionQuizzEquationFirstDegreeThree,myRandomLang.solve);	
}

function randomQuizzEquationFirstDegreeFour()
{
	return randomQuizzGeneral(makeRandomQuestionQuizzEquationFirstDegreeFour,myRandomLang.solve);	
}

function randomQuizzSolutionEquationFirstDegree()
{
	var myequation,mytexequation,mysol,myfirstterms,mysecondterms,badsol;
	
	myfirstterms=makeTermFirstDegree(0);
	mysecondterms=makeTermFirstDegree(0);	
	myequation=myfirstterms[0]+"="+mysecondterms[0];
	mytexequation=myfirstterms[1]+"="+mysecondterms[1];
	mysol=Algebrite.run('roots('+myequation+')');



	
	if (mysol[0]=='S') return randomQuizzSolutionEquationFirstDegree();  // L'équation n'avait pas de solutions...ou trop de solutions!
	
	if (Math.random()<0.5)
	{  // On garde la solution...
		return makeUnQCMQuestion("qu","$"+algebra.parse(mysol).toTex()+"$ "+myRandomLang['isasolutionof']+"$$"+mytexequation+"?$$",[myRandomLang['yes'],myRandomLang['no']],[true,false],myRandomLang.badluck+" "+myRandomLang['thesolutionofthequationis']+"$"+algebra.parse(mysol).toTex()+"$.",myRandomLang.welldone,"$"+algebra.parse(mysol).toTex()+"$ "+myRandomLang['isasolutionof']+"$$"+mytexequation+"?$$",myRandomLang['yes']);
		
	}
	else
	{	
		type=makerandommultiple(0,3,1);
		switch (type)
		{
			case 0: 
				badsol=algebra.parse("-("+algebra.parse(mysol).toString()+')');
				break;
			case 1:
				badsol=algebra.parse("("+algebra.parse(mysol).toString()+')+1');
				break;
			case 2:
				badsol=algebra.parse("("+algebra.parse(mysol).toString()+')-1');
				break;				
			case 3:
				if (algebra.parse(mysol).toString()!="0")
					badsol=algebra.parse("1/("+algebra.parse(mysol).toString()+')');
				else
					badsol=algebra.parse('5');
				break;
		}	

		return makeUnQCMQuestion("qu","$"+badsol.toTex()+"$ "+myRandomLang['isasolutionof']+"$$"+mytexequation+"?$$",[myRandomLang['yes'],myRandomLang['no']],[false,true],myRandomLang.badluck+" "+myRandomLang['thesolutionofthequationis']+"$"+algebra.parse(mysol).toTex()+"$.",myRandomLang.welldone,"$"+badsol.toTex()+"$ "+myRandomLang['isasolutionof']+"$$"+mytexequation+"?$$",myRandomLang['no']);
			
		
	}
		
} 

function randomQuizzEquationZeroProduct()
{
	var equation,texequation,ft,st,q,ans,mysol,chanswer;

	ft=makeTermFirstDegree(0);
	st=makeTermFirstDegree(0);
	
	equation='('+ft[0]+')*('+st[0]+')';
	texequation='\\left('+ft[1]+'\\right)\\left('+st[1]+'\\right)=0';
	
	mysol=Algebrite.run('roots('+equation+')');
	mysol=formatsol(mysol,myQuizz.language);
	chanswer=makeTabSol(mysol);
	q=myRandomLang.solve+" $\\displaystyle "+texequation+"$";
	ans="$\\displaystyle\\left\\{"+	mysol+"\\right\\}$";
	
	return makeUnFieldQuestion(false,20,q+' (séparer les solutions par un ;).',"",chanswer,ans,q,ans);
	
}

function randomQuizzEquationIdentity()
{
	var equation,texequation,a,b;
	
	a=makenonzerorandommultiple(-5,5,1);	
	b=makenonzerorandommultiple(-5,5,1);
	
	type=makerandommultiple(0,2,1);
	switch (type)
	{
		case 0 :
			equation='(('+a+')*x+('+b+'))^2';
			break;
		case 1 :
			equation='(('+a+')*x-('+b+'))^2';
			break;		
		case 2 : 
			equation='(('+a+')*x+('+b+'))*(('+a+')*x-('+b+'))';
			break;
	}
	texequation=algebra.parse(equation).toTex()+'=0';
	
	mysol=Algebrite.run('roots('+equation+')');
	mysol=formatsol(mysol,myQuizz.language);

	chanswer=makeTabSol(mysol);
	q=myRandomLang.solve+" $\\displaystyle "+texequation+"$";
	ans="$\\displaystyle\\left\\{"+	mysol+"\\right\\}$";
	
	return makeUnFieldQuestion(false,20,q+' (séparer les solutions par un ;).',"",chanswer,ans,q,ans);	
	
}

function par(t)
{
	if (t.length==0) return t;
 	else return '('+t+')';
}

function randomQuizzEquationFacto()
{
	var ft,st,tt,c,equation,texequation;
	
	ft=makeTermFirstDegree(0);
	st=makeTermFirstDegree(0);
	tt=makeTermFirstDegree(0);
	c=makenonzerorandommultiple(-2,3,1);
	
	type=makerandommultiple(0,7,1);

	switch (type)
	{
		case 0 :
			equation='('+ft[0]+')*('+st[0]+')+('+ft[0]+')*('+tt[0]+')';
			texequation=par(ft[1])+par(st[1])+'+'+par(ft[1])+par(tt[1])+'';
			break;
		case 1 :
			equation='('+ft[0]+')*('+st[0]+')-('+ft[0]+')*('+tt[0]+')';
			texequation=par(ft[1])+par(st[1])+'-'+par(ft[1])+par(tt[1])+'';
			break;	
		case 2 :
			equation='('+ft[0]+')*('+st[0]+')+('+tt[0]+')*('+ft[0]+')';
			texequation=par(ft[1])+par(st[1])+'+'+par(tt[1])+par(ft[1])+'';			
			break;
		case 3 :
			equation='('+ft[0]+')*('+st[0]+')-('+tt[0]+')*('+ft[0]+')';
			texequation=par(ft[1])+par(st[1])+'-'+par(tt[1])+par(ft[1])+'';			
			break;	
		case 4 :
			equation='('+ft[0]+')*('+st[0]+')+('+c+')*('+ft[0]+')*('+tt[0]+')';
			texequation=par(ft[1])+par(st[1]);
			if (c>0) texequation=texequation+'+';
			else texequation=texequation+'-';
			texequation=texequation+simplifyLatexNumber(Math.abs(c))+par(ft[1])+par(tt[1]);		
			break;
		case 5 :
			equation='('+ft[0]+')*('+st[0]+')+('+c+')*('+ft[0]+')*('+tt[0]+')';
			texequation=par(ft[1])+par(st[1])+'+'+par(algebra.parse('('+c+')*('+	ft[0]+')').toTex())+par(tt[1])+'';		
			break;	
		case 6 :
			equation='('+ft[0]+')*('+st[0]+')+('+c+')*('+ft[0]+')*('+tt[0]+')';
			texequation=simplifyLatexNumber(c)+par(ft[1])+par(tt[1])+'+'+par(ft[1])+par(st[1]);	
			break;		
		case 7:
			equation='('+ft[0]+')*('+st[0]+')+('+c+')*('+ft[0]+')*('+tt[0]+')';
			texequation=par(algebra.parse('('+c+')*('+	ft[0]+')').toTex())+par(tt[1])+'+'+par(ft[1])+par(st[1]);		
			break;			
	}
	texequation=texequation+'=0';

	
	mysol=Algebrite.run('roots('+equation+')');
	mysol=formatsol(mysol,myQuizz.language);
	if (mysol[0]=='S') return randomQuizzEquationFacto();
	else 
	{
		chanswer=makeTabSol(mysol);
		q=myRandomLang.solve+" $\\displaystyle "+texequation+"$";
		ans="$\\displaystyle\\left\\{"+	mysol+"\\right\\}$";
	
		return makeUnFieldQuestion(false,20,q+' (séparer les solutions par un ;).',"",chanswer,ans,q,ans);		
	}		
}

function makeRandomQuizzEquationDiscriminant()
{
	var a,b,c,d;
	
	a=makenonzerorandommultiple(-5,5,1);
	b=makerandommultiple(-7,7,1);
	c=makerandommultiple(-9,9,1);
	d=b*b-4*a*c;
	polynome=algebra.parse('('+a+')'+"*x^2+("+b+")x+("+c+")");
	
	return [myRandomLang.discriminant+"$"+polynome.toTex()+"$",d,d];
	
}

function randomQuizzEquationDiscriminant()
{
	return randomQuizzGeneral(makeRandomQuizzEquationDiscriminant);
}

function randomQuizzEquationNumberOfRoots()
{
	var a,b,c,d,e;
	
	e=makerandommultiple(0,5,1);
	a=makenonzerorandommultiple(-5,5,1);

	switch (e)
	{
		case 0:
			b=makerandommultiple(-7,7,1);
			d=0;
			polynome=algebra.parse('('+a+')'+"*(x+("+b+"))^2");
			break;
		default:
			b=makerandommultiple(-7,7,1);
			c=makerandommultiple(-9,9,1);
			d=b*b-4*a*c;
			polynome=algebra.parse('('+a+')'+"*x^2+("+b+")x+("+c+")");
			break;
	}
	if (d>0) 
	{
		correctAnswers=[true,false,false];
		numberofroots=myRandomLang.tworoots;
		eventually=myRandomLang.admits;
	}
	else if (d<0) 
	{
		correctAnswers=[false,false,true];
		numberofroots=myRandomLang.noroot;
		eventually=myRandomLang.doesnotadmit;
	}		
	else 
	{
		correctAnswers=[false,true,false];
		numberofroots=myRandomLang.oneroot;
		eventually=myRandomLang.admits;
	}
	var q=myRandomLang.numberofroots+"$"+polynome.toTex()+"=0.$";
	return makeUnQCMQuestion('qu',q,[myRandomLang.tworoots,myRandomLang.oneroot,myRandomLang.noroot],correctAnswers,myRandomLang.badluck+" "+myRandomLang.discriminantis+"$"+polynome.toTex()+"$"+myRandomLang.is+"$"+d+"$ "+myRandomLang.discriminantsois+eventually+numberofroots+".",myRandomLang.welldone,q,myRandomLang.discriminantis+"$"+polynome.toTex()+"$"+myRandomLang.is+"$"+d+"$ "+myRandomLang.discriminantsois+eventually+numberofroots+".");
		
}

function makeRandomQuizzEquationSecondRoot()
{
	var a,b,c;
	
	a=makenonzerorandommultiple(-5,5,1);
	b=makerandommultiple(-5,5,1);
	c=b;
	while (c==b) c=makerandommultiple(-5,5,1);
	polynome=algebra.parse ('('+a+')*(x-('+b+'))*(x-('+c+'))');

	return [myRandomLang.findthesecondrootof+"$$"+polynome.toTex()+"$$"+myRandomLang.knowingthat+myRandomLang.thefirstrootis+" $"+b+"$",c,c];
}

function randomQuizzEquationSecondRoot()
{
	return randomQuizzGeneral(makeRandomQuizzEquationSecondRoot);
}

function randomQuizzEquationSecDegreeSumProduct()
{
	var a,b,c,d=-1,s,p;
	while (d<0) 
	{
		a=makenonzerorandommultiple(-5,5,1);
		b=makerandommultiple(-7,7,1);
		c=makerandommultiple(-9,9,1);
		d=b*b-4*a*c;
	}
	s=algebra.parse('-('+b+')/('+a+')');
	p=algebra.parse('('+c+')/('+a+')');
	polynome=algebra.parse('('+a+')'+"*x^2+("+b+")x+("+c+")");
	
	q1="On considère l'équation $$"+polynome.toTex()+"=0.$$ Quelle est la somme des racines de cette équation? ";
	q2="Quel est le produit des racines de cette équation?";
	
	ans=[ s.toString(), p.toString()];
	
	anst="La somme des racines est $"+s.toTex()+"$. Le produit des racines est $"+p.toTex()+".$";
	
	return makeUnFieldsQuestion([false,false],[true,true],[6,6],[q1,q2],["",""],ans,anst,q1+q2,anst);	
	
}

function randomQuizzEquationSecDegreeRoots()
{
	var a,b,c;
	
	a=makenonzerorandommultiple(-1,1,1);
	b=makerandommultiple(-5,5,1);
	c=b;
	while (c==b) c=makerandommultiple(-5,5,1);
	polynome=algebra.parse ('('+a+')*(x-('+b+'))*(x-('+c+'))');
	
	q1="On considère l'équation $$"+polynome.toTex()+"=0.$$ Quelles sont les racines de cette équation? ";
	q2=" et "
	
	ans=[ [b,c], [c,b] ];
	anst="Les racines sont $"+b+"$ et $"+c+"$.";
	return makeUnFieldsQuestion([true,true],[false,false],[6,6],[q1,q2],["",""],ans,anst,q1,anst);	
	
}

function randomQuizzEquationVariable()	
{
	var variables=["a","b","c","d","x","y","t","u","v"];
	
	mtype=myQuizz.level+1;
	type=(makerandommultiple(1,mtype,1))*2;
	v1=makerandommultiple(0,variables.length-1,1);
	v2=v1;
	while (v2==v1) v2=makerandommultiple(0,variables.length-1,1);
	v3=v1;
	while ((v3==v2) || (v3==v1)) v3=makerandommultiple(0,variables.length-1,1);
	v4=v1;
	while ((v4==v2) || (v4==v1) || (v4==v3) ) v4=makerandommultiple(0,variables.length-1,1);	
	switch (type)
	{
		case 1:
			a=makenonzerorandommultiple(-5,5,1);
			b=makenonzerorandommultiple(-5,5,1);
			c=1;
			fm=variables[v1];
			sm='('+a+')*'+variables[v2]+'+('+b+')*'+variables[v3];
			eq=fm+"="+algebra.parse(sm).toTex();		
			fs=variables[v2];
			ss='('+variables[v1]+'-('+b+')*'+variables[v3]+')/('+a+')';
			sol=fs+"="+algebra.parse(ss).toTex();	
			if (a<0) 
			{
				a=-a;
				b=-b;
				c=-c;
			}
			if ( ((b%a)!=0) || ((c%a)!=0) )
			{
				ss2=' ('+c+')*'+variables[v1]+'-('+b+')*'+variables[v3];
				sol = sol+"=\\frac {"+algebra.parse(ss2).toTex()+"}{"+a+"}";
			}
			sentence=myRandomLang.write+"$"+variables[v2]+"$ "+myRandomLang.thanksto+"$"+variables[v1]+"$ "+myRandomLang.and+"$"+variables[v3]+"$.";
			break;
		case 2:
			a=makenonzerorandommultiple(-5,5,1);
			b=makenonzerorandommultiple(-5,5,1);
			c=1;
			fm=variables[v1];
			sm='('+a+')*'+variables[v2]+'+('+b+')*'+variables[v3];
			eq=fm+"="+algebra.parse(sm).toTex();		
			fs=variables[v3];
			ss='('+variables[v1]+'-('+a+')*'+variables[v2]+')/('+b+')';
			sol=fs+"="+algebra.parse(ss).toTex();
			if (b<0) 
			{
				a=-a;
				b=-b;
				c=-c;
			}
			if ( ((a%b)!=0) || ((c%b)!=0))
			{
				ss2=' ('+c+')*'+variables[v1]+'-('+a+')*'+variables[v2];
				sol = sol+"=\\frac {"+algebra.parse(ss2).toTex()+"}{"+b+"}";
			}
			sentence=myRandomLang.write+"$"+variables[v3]+"$ "+myRandomLang.thanksto+"$"+variables[v1]+"$ "+myRandomLang.and+"$"+variables[v2]+"$.";		
			break;
		case 3:
			a=makenonzerorandommultiple(-5,5,1);
			sm='('+a+')*'+variables[v2]+'*'+variables[v3];
			eq=variables[v1]+"="+algebra.parse(sm).toTex();   
			if (a<0) 
			{
				a=-a;
				pref="-";
			}
			else pref="";
				
			if (Math.random()>0.5)
			{
				den=algebra.parse(variables[v3]+"*("+a+")").toTex();
				sol=variables[v2];
				sentence=myRandomLang.write+"$"+variables[v2]+"$ "+myRandomLang.thanksto+"$"+variables[v1]+"$ "+myRandomLang.and+"$"+variables[v3]+"$.";
			}		
			else
			{
				den=algebra.parse(variables[v2]+"*("+a+")").toTex();
				sol=variables[v3];
				sentence=myRandomLang.write+"$"+variables[v3]+"$ "+myRandomLang.thanksto+"$"+variables[v1]+"$ "+myRandomLang.and+"$"+variables[v2]+"$.";
			}					
			sol=sol+"="+pref+"\\frac{"+variables[v1]+"}{"+den+"}";
			break;
		case 4:
			stype=makerandommultiple(0,3,1);
			switch (stype)
			{
				case 0:
					eq=variables[v1]+"="+variables[v2]+variables[v3]+"^2";
					sol=variables[v2]+"=\\frac{"+variables[v1]+"}{"+variables[v3]+"^2}";
					sentence=myRandomLang.write+"$"+variables[v2]+"$ "+myRandomLang.thanksto+"$"+variables[v1]+"$ "+myRandomLang.and+"$"+variables[v3]+"$.";
					break;
				case 1:
					eq=variables[v1]+"="+variables[v2]+"^2"+variables[v3]+"\\textrm{ avec }"+variables[v2]+"\\geq 0";
					sol=variables[v2]+"=\\sqrt{\\frac{"+variables[v1]+"}{"+variables[v3]+"}}";
					sentence=myRandomLang.write+"$"+variables[v2]+"$ "+myRandomLang.thanksto+"$"+variables[v1]+"$ "+myRandomLang.and+"$"+variables[v3]+"$.";
					break;
				case 2:
					eq=variables[v1]+"="+variables[v2]+variables[v3]+"^2"+"\\textrm{ avec }"+variables[v3]+"\\geq 0";;
					sol=variables[v3]+"=\\sqrt{\\frac{"+variables[v1]+"}{"+variables[v2]+"}}";
					sentence=myRandomLang.write+"$"+variables[v3]+"$ "+myRandomLang.thanksto+"$"+variables[v1]+"$ "+myRandomLang.and+"$"+variables[v2]+"$.";
					break;
				case 3:
					eq=variables[v1]+"="+variables[v2]+"^2"+variables[v3];
					sol=variables[v3]+"=\\frac{"+variables[v1]+"}{"+variables[v2]+"^2}";
					sentence=myRandomLang.write+"$"+variables[v3]+"$ "+myRandomLang.thanksto+"$"+variables[v1]+"$ "+myRandomLang.and+"$"+variables[v2]+"$.";
					break;					
			}
		case 5:
			a=makerandommultiple(-5,5,1);
			sm='('+a+')*'+variables[v2]+'+'+variables[v3]+'^2';
			eq=variables[v1]+"="+algebra.parse(sm).toTex();
			ss=variables[v1]+"-"+'('+a+')*'+variables[v2];
			sol=variables[v3]+"=\\sqrt{"+algebra.parse(ss).toTex()+"}";
			sentence=myRandomLang.write+"$"+variables[v3]+"$ "+myRandomLang.thanksto+"$"+variables[v1]+"$ "+myRandomLang.and+"$"+variables[v2]+"$.";
			break;
		case 6:
			a=makerandommultiple(-5,5,1);
			sm='('+a+')*'+variables[v2]+'+'+variables[v4]+variables[v3]+'^2';
			eq=variables[v1]+"="+algebra.parse(sm).toTex();
			ss=variables[v1]+"-"+'('+a+')*'+variables[v2];
			sol=variables[v3]+"=\\sqrt{\\frac{"+algebra.parse(ss).toTex()+"}{"+variables[v4]+"}}";
			sentence=myRandomLang.write+"$"+variables[v3]+"$ "+myRandomLang.thanksto+"$"+variables[v1]+"$, $"+variables[v4]+'$ '+myRandomLang.and+"$"+variables[v2]+"$.";
			break;			
	}
	
	return ({
		type: "noanswer",
		text: sentence +" $$"+eq+".$$",
		answer: "$\\displaystyle "+sol+".$"
	})
	
}

function randomQuizzInequationFirstDegree()
{
	var a=makenonzerorandommultiple(-5,5,1),b=makerandommultiple(-5,5,1), d=makerandommultiple(-5,5,1),s=makerandommultiple(0,3,1);
	switch (myQuizz.level)
	{
		case 0:
			c=0;
			break;
		case 1:
			c=makeexclusiverandommultiple(-5,5,1,[0,a]);
			break;
	}
	var signs=["\\leq ", "&lt;", "\\geq ", "&gt;"];
	m1=algebra.parse('('+a+')x+('+b+')');
	m2=algebra.parse('('+c+')x+('+d+')');
	q='$$'+algebra.toTex(m1)+signs[s]+algebra.toTex(m2)+'$$';
	t='('+(d-b)+')'+'/'+'('+(a-c)+')';
	sol=algebra.toTex(algebra.parse(t));
	if ((a-c)<0) s=(s+2)%4;
	switch (s)
	{
		case 0:
			ans='$]-\\infty;'+sol+']$';
			break;
		case 1:
			ans='$]-\\infty;'+sol+'[$';
			break;
		case 2:
			ans='$['+sol+';+\\infty[$';		
			break;
		case 3:
			ans='$]'+sol+';+\\infty[$';
			break;			
	}
	return ({
		type: "noanswer",
		text: myRandomLang.solve+q,
		answer: ans
	})	
}

function randomQuizzIsItSolutionIneqFD()
{
	var a=makenonzerorandommultiple(-5,5,1),b=makerandommultiple(-5,5,1), d=makerandommultiple(-5,5,1),s=makerandommultiple(0,3,1);
	var signs=["\\leq ", "&lt;", "\\geq ", "&gt;"];
	switch (myQuizz.level)
	{
		case 0:
			c=0;
			break;
		case 1:
			c=makeexclusiverandommultiple(-5,5,1,[0,a]);
			break;
	}
	m1=algebra.parse('('+a+')x+('+b+')');
	m2=algebra.parse('('+c+')x+('+d+')');	
	
	myeq=m1+"="+m2;
	q=algebra.toTex(m1)+signs[s]+algebra.toTex(m2);
	
	mysol=Algebrite.run('roots('+myeq+')');
	
	if (mysol[0]=='S') return randomQuizzIsItSolution();  // L'équation n'avait pas de solutions...ou trop de solutions!
	
	if (Math.random()<0.5)
	{  
		if ( (s==0) || (s==2))
			ca=[true,false];
		else
			ca=[false,true];	
	}
	else
	{	
		e=makerandommultiple(-5,5,1);
		f=makenonzerorandommultiple(-5,5,1);
		while ( Math.abs( (a*(e/f)+b) - (c*(e/f)+d))<0.5)
		{
			e=makerandommultiple(-5,5,1);
			f=makenonzerorandommultiple(-5,5,1);
		}
		if ( ( (a*(e/f)+b) - (c*(e/f)+d)) <0) 
		{
			if ( (s<=1) ) ca=[true,false]; else ca=[false,true];
		}
		else
		{
			if ( (s>=2) ) ca=[true,false]; else ca=[false,true];
		}
		mysol='('+e+')/('+f+')';
		
	}	
	
	var q="$"+algebra.parse(mysol).toTex()+"$ "+myRandomLang['isasolutionof']+"$$"+q+"?$$";
	var ans;
	if (ca[0]) ans=myRandomLang['yes']+'!'; else ans=myRandomLang['no']+"!";
	
	return makeUnQCMQuestion('qu',q,[myRandomLang['yes'],myRandomLang['no']],ca,myRandomLang.badluck,myRandomLang.welldone,q,ans);	
	
}

function randomQuizzYesNoIneq()
{
	var a=makenonzerorandommultiple(-5,5,1),b=makerandommultiple(-5,5,1), d=makerandommultiple(-5,5,1),s=makerandommultiple(0,3,1),c=makeexclusiverandommultiple(-5,5,1,[0,a]),sp=makerandommultiple(0,1,1),mult=makeexclusiverandommultiple(-2,3,1,[0,1]),e=makenonzerorandommultiple(-3,3,1);
	var signs=["\\leq ", "&lt;", "\\geq ", "&gt;"];
	m1=algebra.parse('('+a+')x+('+b+')');
	m2=algebra.parse('('+c+')x+('+d+')');	
	
	type=makenonzerorandommultiple(0,6,1);
	switch (type)
	{
		case 0:
			q=" $$x"+signs[s]+a+"\\implies x"+signs[s]+c+"$$";
			if ( (s<2) )
				if (a<c) ca=[true,false]; else ca=[false,true];
			else if (a<c) ca=[false,true]; else ca=[true,false];
			break;
		case 1:
			q=" $$x"+signs[2*sp]+a+"\\implies x"+signs[(2*sp+1)]+b+"$$";
			if ( (sp<1) )
				if (a<b) ca=[true,false]; else ca=[false,true];
			else if (a<b) ca=[false,true]; else ca=[true,false];
			break;
		case 2:
			q=" $$x"+signs[(2*sp+1)]+a+"\\implies x"+signs[2*sp]+b+"$$";
			if ( (sp<1) )
				if (a<=b) ca=[true,false]; else ca=[false,true];
			else if (a<=b) ca=[false,true]; else ca=[true,false];
			break;		
		case 3:
			mp1=algebra.parse('('+mult+')*(('+a+')x+('+b+'))');
			mp2=algebra.parse('('+mult+')*(('+c+')x+('+d+'))');
			q="$$"+m1.toTex()+signs[s]+m2.toTex()+"\\implies "+mp1.toTex()+signs[s]+mp2.toTex()+"$$";
			if (mult>0) ca=[true,false]; else ca=[false,true];
			break;
		case 4:
			mp1=algebra.parse('('+mult+')*(('+a+')x+('+b+'))');
			mp2=algebra.parse('('+mult+')*(('+c+')x+('+d+'))');
			q="$$"+m1.toTex()+signs[s]+m2.toTex()+"\\implies "+mp1.toTex()+signs[(s+2)%4]+mp2.toTex()+"$$";
			if (mult<0) ca=[true,false]; else ca=[false,true];
			break;	
		case 5:
			mp1=algebra.parse('('+a+')x+('+(b+e)+')');
			mp2=algebra.parse('('+c+')x+('+(d+e)+')');
			q="$$"+m1.toTex()+signs[s]+m2.toTex()+"\\implies "+mp1.toTex()+signs[s]+mp2.toTex()+"$$";
			ca=[true,false];
			break;	
		case 6:
			mp1=algebra.parse('('+(a+e)+')x+('+b+')');
			mp2=algebra.parse('('+(c+e)+')x+('+d+')');
			q="$$"+m1.toTex()+signs[s]+m2.toTex()+"\\implies "+mp1.toTex()+signs[s]+mp2.toTex()+"$$";
			ca=[true,false];
			break;				
	}
	
	if (ca[0]) ans=myRandomLang['yes']+'!'; else ans=myRandomLang['no']+"!";	
	return makeUnQCMQuestion('qu',q,[myRandomLang['yes'],myRandomLang['no']],ca,myRandomLang.badluck,myRandomLang.welldone,q,ans);	
	
}

/******************* FRACTIONS **************************/


function makeRandomQuestionQuizzFractionProduct()
{
	var myfrac1="";
	var myfrac2=""
	var myunparsedfrac1="";
	var myunparsedfrac2="";
	
	var mynumbers=[0,0,0,0,0,0];
	
	for (var i=0;i<mynumbers.length;i++)
	{
		mynumbers[i]=makerandommultiple(1,11,1);
	}
	
	myunparsedfrac1="("+mynumbers[0]+"*"+mynumbers[1]+")/("+mynumbers[2]+"*"+mynumbers[3]+")";
	myunparsedfrac2="("+mynumbers[2]+"*"+mynumbers[5]+")/("+mynumbers[0]+"*"+mynumbers[4]+")";
	
	myresult=algebra.parse(myunparsedfrac1+"*"+myunparsedfrac2);
	
	myfrac1=algebra.toTex(algebra.parse(myunparsedfrac1));
	myfrac2=algebra.toTex(algebra.parse(myunparsedfrac2));
	
	return [myfrac1+"\\times"+myfrac2, algebra.toTex(myresult),supertrim(myresult.toString())];
	
}

function randomQuizzFractionProduct()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzFractionProduct,myRandomLang.computeandsimplify);	
}

function makeRandomQuestionQuizzFractionIntegerProduct(type)
{
	var myfrac1="";
	var myfrac2="";

	var myunparsedfrac1="";
	var myunparsedfrac2="";
	
	var mult,num,den;
	
	switch (type)
	{
		case 0:
			mult=makerandommultiple(2,7,1);
			num=makerandommultiple(2,20,1);
			den=makerandommultiple(1,5,1)*mult;
			break;
		case 1:
			if (Math.random()>0.5)
			{
				mult=makerandommultiple(2,7,1);
				num=makerandommultiple(2,20,1);
				den=makerandommultiple(1,5,1)*mult;
				break;
			}
		case 2:
			mult=makerandommultiple(2,11,1);
			num=makerandommultiple(2,30,1);
			den=makerandommultiple(1,9,1)*mult;
			break;
	}

	myunparsedfrac1+=mult;
	myunparsedfrac2="("+num+")/("+den+")";
	
	myresult=algebra.parse(myunparsedfrac1+"*"+myunparsedfrac2);
	
	myfrac1=algebra.toTex(algebra.parse(myunparsedfrac1));
	myfrac2="\\frac{"+num+"}{"+den+"}";
	
	return [myfrac1+"\\times"+myfrac2, algebra.toTex(myresult),supertrim(myresult.toString())];
	
}

function randomQuizzFractionIntegerProduct()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzFractionIntegerProduct,myRandomLang.computeandsimplify);	
}

function makeRandomQuestionQuizzFractionSimplify(type)
{
	var myfrac="";
	var myunparsedfrac="";
	var mynumbers=[0,0,0,0,0];
	var i,num,den;
	num=den=0;
	
	
	if (type==1)
	{
		max=9;
		if (Math.random()<0.5) type=2; else type=0;
	}
	else
	{
		max=11;
	}
	
	switch (type)
	{
		case 0:
			while (num==den)
			{
				for (i=0;i<3;i++)
					mynumbers[i]=makerandommultiple(2,9,1);
				num=mynumbers[0]*mynumbers[1];
				den=mynumbers[0]*mynumbers[2];
			}
			break;
		case 2:
			while (num==den)
			{		
				for (i=0;i<5;i++)
					mynumbers[i]=makerandommultiple(2,max,1);
				num=mynumbers[0]*mynumbers[1]*mynumbers[2];
				den=mynumbers[0]*mynumbers[3]*mynumbers[4];
			}
			break;		
	}			
			
	
	myresult=algebra.parse(num+"/"+den);
	pgcd=Algebrite.gcd(num,den).toString();
	num1=num/pgcd;
	den1=den/pgcd;
	
	return ["\\displaystyle \\frac{"+num+"}{"+den+"}","\\displaystyle \\frac{"+pgcd+"\\times"+num1+"}{"+pgcd+"\\times"+den1+"}=\\color{red}{"+ algebra.toTex(myresult)+'}',supertrim(myresult.toString())];
	
}

function randomQuizzFractionSimplify()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzFractionSimplify,myRandomLang.simplify);	
}

function makeRandomQuestionQuizzFractionIntegerPlusFraction(type)
{
	var myresult="";
	var mycheckedresult="";
	var num,den;
	
	
	if (type==1)
	{
		if (Math.random()<0.5) type=2; else type=0;
	}
	
	switch (type)
	{
		case 0:
			den=makerandommultiple(2,10,1);
			num=makerandommultiple(den+1,50,1);
			break;
		case 2:
			den=makerandommultiple(2,20,1);
			num=makerandommultiple(den+1,100,1);
			break;	
	}				
	
	if ((num % den)==0)
	{
		// Integer result!
		myresult+=num/den;
		mycheckedresult+=num/den;
	}
	else
	{
		// Non integer result;
		quotient=Math.floor(num/den);
		myresult+=quotient+"+";
		resfrac=algebra.parse("("+num+"/"+den+")-"+quotient);
		myresult+=algebra.toTex(resfrac);
		mycheckedresult+=quotient+"+"+resfrac.toString();
	}
	
	return ["\\displaystyle \\frac{"+num+"}{"+den+"}",myresult,mycheckedresult];
	
}

function randomQuizzFractionIntegerPlusFraction()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzFractionIntegerPlusFraction,myRandomLang.integerplusfraction);	
}

function makeRandomQuestionQuizzFractionSum(type)
{
	var myfrac1="";
	var myfrac2=""
	var myunparsedfrac1="";
	var myunparsedfrac2="";
	var sign;
	
	var mynumbers=[0,0,0,0,0,0,0];   
	var num1=1, den1=1, num2=1, den2=1;
	
	while ( (num1%den1==0) && (num2%den2==0))  // We do not want to add two integers!
	{		

	
		for (var i=0;i<mynumbers.length;i++)
		{
			mynumbers[i]=makerandommultiple(1,9,1);
		}
	
	
		if (type>0)
		{
			myunparsedfrac1="("+mynumbers[0]+"*"+mynumbers[1]+")/("+mynumbers[2]+"*"+mynumbers[3]+")";
			myunparsedfrac2="("+mynumbers[3]+"*"+mynumbers[4]+")/("+mynumbers[2]+"*"+mynumbers[5]+")";
		}
		else
		{
			myunparsedfrac1=mynumbers[0]+"/"+mynumbers[2];	
			myunparsedfrac2=mynumbers[3]+"/"+mynumbers[5];		
		}
	
	
		if (Math.random()<0.5)
			sign="+";
		else
			sign="-";
	
		myfrac1=algebra.parse(myunparsedfrac1);
		myfrac2=algebra.parse(myunparsedfrac2);
	
		var num1,num2,den1,den2,num1,nump2,denp1,denp2;
	
		num1=Algebrite.numerator(myunparsedfrac1);
		den1=Algebrite.denominator(myunparsedfrac1);
		num2=Algebrite.numerator(myunparsedfrac2);
		den2=Algebrite.denominator(myunparsedfrac2);


	
		if (type!=2)
		{
			myresult=algebra.parse(myunparsedfrac1+sign+myunparsedfrac2);
			lcm=Algebrite.lcm(den1,den2);
			mult1=lcm/(den1);
			mult2=lcm/(den2);
		
			if ( (mult1!=1) || (mult2!=1) )
			{
				nump1=num1*mult1;
				denp1=den1*mult1;
				nump2=num2*mult2;
				denp2=den2*mult2;
				mytexresult="\\frac{"+nump1+"}{"+denp1+"}"+sign+"\\frac{"+nump2+"}{"+denp2+"}="+myresult.toTex();
			}
			else
			{
				mytexresult=myresult.toTex();
			}
		}
		else
		{
			myresult=algebra.parse(mynumbers[6]+"*"+myunparsedfrac1+sign+myunparsedfrac2);
			mytexresult=myresult.toTex();
		}
	}
	if (type!=2)
		return [myfrac1.toTex()+sign+myfrac2.toTex(), mytexresult,supertrim(myresult.toString())];
	else
		return [mynumbers[6]+"\\times"+myfrac1.toTex()+sign+myfrac2.toTex(), algebra.toTex(myresult),supertrim(myresult.toString())];
	
}

function randomQuizzFractionSum()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzFractionSum,myRandomLang.computeandsimplify);	
}

function makeRandomQuestionQuizzFractionQuotient()
{
	var myfrac1="";
	var myfrac2="";
	var myunparsedfrac1="";
	var myunparsedfrac2="";
	
	var mynumbers=[0,0,0,0,0,0];
	
	for (var i=0;i<mynumbers.length;i++)
	{
		mynumbers[i]=makerandommultiple(1,11,1);
	}
	
	myunparsedfrac1="("+mynumbers[0]+"*"+mynumbers[1]+")/("+mynumbers[2]+"*"+mynumbers[3]+")";
	myunparsedfrac2="("+mynumbers[0]+"*"+mynumbers[4]+")/("+mynumbers[2]+"*"+mynumbers[5]+")";
	
	myresult=algebra.parse("("+myunparsedfrac1+")/("+myunparsedfrac2+")");
	
	myfrac1=algebra.toTex(algebra.parse(myunparsedfrac1));
	myfrac2=algebra.toTex(algebra.parse(myunparsedfrac2));
	
	return [myfrac1+"\\div"+myfrac2, algebra.toTex(myresult),supertrim(myresult.toString())];
	
}

function randomQuizzFractionQuotient()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzFractionQuotient,myRandomLang.computeandsimplify);	
}

function randomQuizzFractionOperation()
{
	var type=makerandommultiple(0,3,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,3,1);
	
	switch (type)
	{
		case 0: return randomQuizzFractionSum();
		case 1: return randomQuizzFractionProduct();
		case 2: return randomQuizzFractionQuotient();
		case 3: return randomQuizzFractionIntegerProduct();
	}
}

function randomQuizzFractionFill()
{
	var myfrac1="";
	var myfrac2="";
	var myfrac3="";
	var myunparsedfrac1="";
	var myunparsedfrac2="";
	var myunparsedfrac3="";	
	
	var mynumbers=[1,1,1,1],q,ans;
	
	if (myQuizz.level==0) 
		maxnumber=9;
	else
		maxnumber=11;
	
	while ((mynumbers[2]% mynumbers[3])==0)
	{
		for (var i=0;i<mynumbers.length;i++)
		{
			mynumbers[i]=makerandommultiple(2,maxnumber,1);
		}
	}

	myunparsedfrac2+="("+mynumbers[2]+")/("+mynumbers[3]+")";
	
	switch (myQuizz.level)
	{
		case 0:
			myunparsedfrac1+=mynumbers[0];
			break;
		case 1:
			if (Math.random()<0.5)
				myunparsedfrac1+=mynumbers[0];
			else
				myunparsedfrac1+="-"+mynumbers[0];
			break;
			if (Math.random()<0.5)
				myunparsedfrac2="-"+myunparsedfrac2;
			break;			
		case 2:
			if (Math.random()<0.5)
				myunparsedfrac1+="("+mynumbers[0]+")/("+mynumbers[1]+")";
			else	
				myunparsedfrac1+="("+mynumbers[0]+")/("+mynumbers[1]+")";
			if (Math.random()<0.5)
				myunparsedfrac2="-"+myunparsedfrac2;
			break;	
	}
	
	myresult=algebra.parse("("+myunparsedfrac2+")/("+myunparsedfrac1+")");
	
	myfrac1=algebra.toTex(algebra.parse(myunparsedfrac1));
	
	myfrac2=algebra.toTex(algebra.parse(myunparsedfrac2));
	
	mytexresult=algebra.toTex(myresult);
	if (mytexresult[0]=="-")
		mytexresult="\\left( "+mytexresult+"\\right)";
	
	mytexresult="\\color{red}{"+mytexresult+"}";
	
	q=myRandomLang.fractionfill+" $$"+myfrac1+"\\times \\cdots="+myfrac2+".$$";
	ans="$"+myfrac1+"\\times "+mytexresult+"="+myfrac2+"$.";
	return makeUnFieldQuestion(false,20,q,"",supertrim(myresult.toString()),ans,q,ans);	
	
}

function randomQuizzFractionCompare()
{
	var num,den,num2,den2,choice,gchoice,mult,q;
	var signs=['>','=','<'];
	var correct;
	
	den=makerandommultiple(3,20,1);
	num=den;
	mult=makerandommultiple(2,3,1);
	while (num==den)
	{
		num=makerandommultiple(3,40,1)
	}
	choice=Math.random();
	if (choice<0.34)
	{
		if (Math.random()<0.5) 
		{
			num2=num-1;
			choice=-1;
		}
		else 
		{
			num2=num+1;
			choice=+1;
		}
		den2=den;
		if ( (theQuizz.level>=1) && (Math.random()<0.5))
		{
			den2=den2*mult;
			num2=num2*mult;
		}
	}
	else if (choice<0.68)
	{
		if (Math.random()<0.5) 
		{
			den2=den-1;
			choice=+1;
		}
		else 
		{
			den2=den+1;
			choice=-1;
		}
		num2=num;
		if ( (theQuizz.level>=1) && (Math.random()<0.5))
		{
			den2=den2*mult;
			num2=num2*mult;
		}		
	}
	else
	{
		den2=den*mult;
		num2=num*mult;
		choice=0;
	}
	if (theQuizz.level==2)
	{
		if (Math.random()<0.5)
		{
			num=-num;  num2=-num2; 
			choice=-choice;
		}
	}
	switch (choice)
		{
			case -1: 
				correct=[true,false,false];
				break;
			case 0:
				correct=[false,true,false];
				break;
			case 1:
				correct=[false,false,true];
				break;
		}
	q=myRandomLang.compare+" $$\\frac{"+num+"}{"+den+"}\\cdots \\frac{"+num2+"}{"+den2+"}.$$";
	ans="$\\frac{"+num+"}{"+den+"}"+signs[choice+1]+"\\frac{"+num2+"}{"+den2+"}.$";
	return makeUnQCMQuestion('qu',q,signs,correct,myRandomLang.badluck+" "+ans,myRandomLang.welldone,q,ans);
	
}

function makeRandomQuestionQuizzFractionToDecimal()
{
	var dens=[ [2,4,5,10,100], [2,4,5,10,20,25,100], [2,4,5,10,20,25,100,1000] ];
	
	var num,den,myfrac,myresult;
	
	den=dens[myQuizz.level][makerandommultiple(0,[dens[myQuizz.level].length]-1,1)];
	num=den;
	
	while ( (num%den)==0)
		num=makerandommultiple(1,5*den,1);
	
	if ( (myQuizz.level==2) && (Math.random()<0.5)) num=-num;
		
	myfrac=algebra.parse ( '('+num+'/'+den+')');
	
	myresult=""+num/den;
	
	myresult=formattexnumber(myresult,myQuizz.language);
	
	return['\\frac{'+num+'}{'+den+'}',myresult,myresult];
	
}

function randomQuizzFractionToDecimal()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzFractionToDecimal,myRandomLang.writeasadecimal);	
}

function makeRandomQuestionQuizzDecimalToFraction()
{
	var dens=[ [2,4,5,10], [2,4,5,10,25,100], [2,4,5,10,20,25,100] ];
	
	var num,den,myfrac,myresult;
	
	den=dens[myQuizz.level][makerandommultiple(0,[dens[myQuizz.level].length]-1,1)];
	num=den;
	
	while ( (num%den)==0)
		num=makerandommultiple(1,5*den,1);
	
	if ( (myQuizz.level==2) && (Math.random()<0.5)) num=-num;
		
	myfrac=algebra.parse ( '('+num+'/'+den+')');
	
	myresult=""+num/den;
	
	myresult=formattexnumber(myresult,myQuizz.language);

	
	return[myresult,myfrac.toTex(),Algebrite.numerator(num+'/'+den)+'/'+Algebrite.denominator(num+'/'+den)];
	
}

function makeRandomQuestionQuizzFractionThird()
{
	var mult=makerandommultiple(0,2,1);
	var nombre=makerandommultiple(5,40-10*mult,1);
	var result=nombre*(mult+2);
	if (Math.random()<0.5)
	{  
		return [myRandomLang.compute+myRandomLang.multiples[mult]+nombre+".",result,result];
	}
	else
	{
		return [myRandomLang.compute+myRandomLang.divisors[mult]+result+".",nombre,nombre];
	}	
}

function randomQuizzFractionThird()
{
	return randomQuizzGeneral(makeRandomQuestionQuizzFractionThird);
}

function randomQuizzDecimalToFraction()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionQuizzDecimalToFraction,myRandomLang.writeasafraction);	
}

function randomQuizzFractionFind()
{
	var num,den,num2,mult2,mult;
	var max=[0,0,40,30,10,10,9,9,9,9];
	var choice;
	
	mult=makerandommultiple(2,9,1);
	num=makerandommultiple(2,max[mult],1);
	den=makerandommultiple(2,max[mult],1);
	num2=num*mult;
	den2=den*mult;
	
	choice=makerandommultiple(1,4,1);
	switch (choice)
	{
		case 1:          
			myanswer=num;
			mytext='\\dfrac{?}{'+den+'}=\\dfrac{'+num2+'}{'+den2+'}';
			mytrueanswer='\\dfrac{\\color{red}{'+num+'}}{'+den+'}=\\dfrac{'+num2+'}{'+den2+'}';
			break;
		case 2:
			myanswer=den;
			mytext='\\dfrac{'+num+'}{?}=\\dfrac{'+num2+'}{'+den2+'}';	
			mytrueanswer='\\dfrac{'+num+'}{\\color{red}{'+den+'}}=\\dfrac{'+num2+'}{'+den2+'}';
			break;
		case 3:
			myanswer=num2;
			mytext='\\dfrac{'+num+'}{'+den+'}=\\dfrac{?}{'+den2+'}';	
			mytrueanswer='\\dfrac{'+num+'}{'+den+'}=\\dfrac{\\color{red}{'+num2+'}}{'+den2+'}';
			break;
		case 4:
			myanswer=den2;
			mytext='\\dfrac{'+num+'}{'+den+'}=\\dfrac{'+num2+'}{?}';	
			mytrueanswer='\\dfrac{'+num+'}{'+den+'}=\\dfrac{'+num2+'}{\\color{red}{'+den2+'}}';
			break;
	}
	var q=myRandomLang.fractionfind+"$$"+mytext+".$$";
	var ans='$'+mytrueanswer+'$';
	return makeUnFieldQuestion(false,10,q,"",myanswer,ans,q,ans);		
	
	
}

function randomQuizzFractionLine()
{
	var svg='<svg viewBox="0 0 500 100" preserveAspectRatio="xMidYMid meet"><line x1=0 y1=50 x2=500 y2=50 stroke="black" stroke-width=2 />';
	var dep=20;
	var fin=480;
	var i,x,xmin,xmax;
	var umin;
	var answer;
		
	switch (myQuizz.level)
	{
		case 0:
			umin=0;
			unitmax=5;
			break;
		case 1:
			umin=-2;
			unitmax=8;
			break;
		case 2:
			umin=makerandommultiple(-3,3,1);
			unitmax=10;
			break;
	}
	
	unit=makerandommultiple(2,unitmax,1);
	
	// We draw the grid
	
	for (i=0;i<=unit*4;i++)
	{
		x=dep+i*(fin-dep)/(unit*4);
		if ( (i%unit)==0) {ymin=42; ymax=58} else {ymin=46;ymax=54;}
		svg+='<line x1='+x+' y1='+ymin+' x2='+x+' y2='+ymax+' stroke=black stroke-width=1 />';
	}
	
	// We draw the numbers	
	
	for (i=umin;i<=umin+4;i++)
	{
		x=dep+(i-umin)*(fin-dep)/4-6;
		svg+='<text x='+x+' y=75 fill=black>'+i+'</text>';
	}
	
	// Which number would we like to draw
	
	var number=unit;
	while (Algebrite.gcd(number,unit)!=1)
		number=makerandommultiple(1,4*unit-1,1);
	
	answer=algebra.parse(""+umin+"+"+number+"/"+unit);
	
	// We draw the arrow
	
	x=dep+number*(fin-dep)/(unit*4);
	xmin=x-8;
	xmax=x+8;
	svg+='<line x1='+x+' y1=20 x2='+x+' y2=50 stroke=red stroke-width="2" />';
	svg+='<line x1='+x+' y1=50 x2='+xmax+' y2=42 stroke=red stroke-width="2" />';
	svg+='<line x1='+x+' y1=50 x2='+xmin+' y2=42 stroke=red stroke-width="2" />';
	
	
	svg+='</svg>';
	
	return makeUnFieldQuestionSvg(false,10,myRandomLang.fractionline,"",answer.toString(),'$'+answer.toTex()+'$',myRandomLang.fractionline,answer.toString(),svg);		
}

function randomQuizzFractionBox()
{
	
	var svg='<svg viewBox="0 0 500 200" preserveAspectRatio="xMidYMid meet">';
	var bar,prod,prodmax,xc,yc,dep,nb,xk,yk,xk1,yk1,pix,ec=20,radius=50,col,row,i,j,k,plein=0;
	
	switch (myQuizz.level)
	{
		case 0:
			prodmax=16;
			plein=0;
			break;
		case 1:
			prodmax=20;
			plein=makerandommultiple(0,2,1);
			break;
		case 2:
			prodmax=36;
			plein=makerandommultiple(0,3,1);
			break;
	}

	
	if (Math.random()>0.5)
	{
		// It's a rectangle


		prod=prodmax+1;
		while (prod>prodmax)
		{
			col=makerandommultiple(2,6,1);
			row=makerandommultiple(2,6,1);
			prod=col*row;
		}
			
		pix=Math.min((500-plein*ec)/((plein+1)*col),150/row);
		bar=prod;
		while (Algebrite.gcd(bar,prod)!=1) 
			bar=makerandommultiple(1,prod-1,1);
		
		// We draw the rectangles
		
		for (var i=0;i<=plein;i++)
		{
			if (i<plein)
				svg+="<rect x="+(i*(col*pix+ec))+" y=0 width="+(col*pix)+" height="+(row*pix)+ " fill='#007718' stroke=black />";
			else
			{
				svg+="<rect x="+(i*(col*pix+ec))+" y=0 width="+(col*pix)+" height="+(row*pix)+ " fill=white stroke=black />";
				var k=0;
				var j=0;
				var sens=makerandommultiple(0,1,1);
				for (var l=0;l<bar;l++)
				{
					svg+="<rect x="+(i*(col*pix+ec)+(j*pix))+" y="+(k*pix)+" width="+(pix)+" height="+(pix)+ " fill='#007718' stroke=black />";		
					if (sens==0)
					{
						k++;
						if (k>=row) 
						{
							k=0;
							j++;
						}
					}
					else
					{
						j++;
						if (j>=col)
						{
							j=0;
							k++;
						}
					}
				}
			}
		
			for (var k=0;k<row;k++)
				svg+="<line x1="+(i*(col*pix+ec))+" y1="+(k*pix)+" x2= "+((i+1)*(col*pix)+i*ec)+" y2="+(k*pix)+" stroke=black />";
			for (var j=0;j<col;j++)
				svg+="<line x1="+(i*(col*pix+ec)+(j*pix))+" y1=0 x2= "+(i*(col*pix+ec)+(j*pix))+" y2="+(row*pix)+" stroke=black />";
		}
	}
	else
	{
		// It's a circle
		prod=makerandommultiple(2,prodmax/2,1);
		bar=prod;
		while (Algebrite.gcd(bar,prod)!=1) 
			bar=makerandommultiple(1,prod-1,1);
		
		
		for (i=0;i<=plein;i++)
		{
			if (i<plein)
				nb=prod;
			else
				nb=bar;
			xc=i*(2*radius+ec)+radius+ec/2;
			yc=radius+ec/2;
			
			dep=makerandommultiple(0,prod,1);
			
			for (k=dep;k<(dep+prod);k++)
			{
				xk=xc+radius*Math.cos(2*Math.PI*k/prod);
				yk=yc+radius*Math.sin(2*Math.PI*k/prod);
				xk1=xc+radius*Math.cos(2*Math.PI*(k+1)/prod);
				yk1=yc+radius*Math.sin(2*Math.PI*(k+1)/prod);
				if (k<(nb+dep))
					svg+="<path d='M"+xc+","+yc+" L"+xk+","+yk+" A"+radius+","+radius+" 0 0,1 +"+xk1+","+yk1+" Z' stroke=black fill='#007718'/>";
				else
					svg+="<path d='M"+xc+","+yc+" L"+xk+","+yk+" A"+radius+","+radius+" 0 0,1 +"+xk1+","+yk1+" Z' stroke=black fill='white'/>";
			}		
		}
	}
	
	
	answer=algebra.parse(""+plein+"+"+bar+"/"+prod);
	
	svg+='</svg>';

	return makeUnFieldQuestionSvg(false,10,myRandomLang.fractionbox,"",answer.toString(),'$'+answer.toTex()+'$',myRandomLang.fractionbox,answer.toString(),svg);		
	
}

// Numération

function randomQuizzRankDigit()
{
	var digits=["1","2","3","4","5","6","7","8","9"],nbavant,nb,i,widgit,cdigit,texte,answer;

	nbavant=(myQuizz.level+1)*3;
	var mesdigits = new Array();
	

	
	nb="";
	for (i=0;i<nbavant;i++)
	{
		c=makerandommultiple(0,digits.length-1,1);
		nb+=digits[c];
		digits.splice(c,1);
	}
	
	wdigit=makerandommultiple(-nbavant+1,0,1);
	cdigit=8+wdigit;
	
	ch=nb[nbavant+wdigit-1];

	
	texte=myRandomLang.bin+"$"+formattexnumber(nb,myQuizz.language)+"$ --&gt; "+ch+myRandomLang.isthedigitof;
	answer=myRandomLang.bin+"$"+formattexnumber(nb,myQuizz.language)+"$ --&gt; "+ch+myRandomLang.isthedigitof+" "+myRandomLang.rankdigit[cdigit];
	
	mesdigits.push(myRandomLang.rankdigit[cdigit]);
	i=j=cdigit;
	while ((i==j) || (i==cdigit) || (j==cdigit))
	{
		i=makerandommultiple((2-myQuizz.level)*3,8,1);
		j=makerandommultiple((2-myQuizz.level)*3,8,1);
	}
	mesdigits.push(myRandomLang.rankdigit[i]);
	mesdigits.push(myRandomLang.rankdigit[j]);
	
	return makeUnQCMQuestion("qu",texte,mesdigits,[true,false,false],myRandomLang.badluck+" "+answer,myRandomLang.welldone,texte,answer);			
}	


	
function randomQuizzDigit()
{
	var expo=[3,6,9],q,a;
	
	mynumber=makerandommultiple(Math.pow(10,expo[myQuizz.level]-1),Math.pow(10,expo[myQuizz.level])-1,1);
	
	var wdigit=makerandommultiple(1,expo[myQuizz.level],1);
	var digit= Math.floor(mynumber / (Math.pow(10,wdigit-1)))%10;
	q=myRandomLang.digit[wdigit-1]+"$$"+formattexnumber(mynumber,myQuizz.language)+"?$$";
	a=myRandomLang.digitans[wdigit-1]+'$'+formattexnumber(mynumber,myQuizz.language)+"$ "+myRandomLang.is+'$'+digit+'$';
	
	return makeUnFieldQuestion(false,10,q,"",digit,a,q,a);		
}

function randomQuizzNumberDigit()
{
	var expo=[3,6,9],q,a;
	
	mynumber=makerandommultiple(Math.pow(10,expo[myQuizz.level]-1),Math.pow(10,expo[myQuizz.level])-1,1);
	
	var wdigit=makerandommultiple(1,expo[myQuizz.level],1);
	var digit= Math.floor(mynumber / (Math.pow(10,wdigit-1)));
	q=myRandomLang.numberdigit[wdigit-1]+"$$"+formattexnumber(mynumber,myQuizz.language)+"?$$";
	a=myRandomLang.numberdigitans[wdigit-1]+'$'+formattexnumber(mynumber,myQuizz.language)+"$ "+myRandomLang.is+'$'+formattexnumber(digit,myQuizz.language)+'$';
	
	return makeUnFieldQuestion(false,10,q,"",digit,a,q,a);
	
}

function randomQuizzDecimalWriting()
{
	var nbs=[100,100,100,20,200,1000],nb,initial,q,a;
	
	var type=makerandommultiple(0,8,1);
	if (type>5) type=type-3;
	
	initial=makerandommultiple(1,nbs[type],1);
	nb=new Big(initial);
	
	if (type<3) nb=nb.times(Math.pow(10,3-type));
	else nb=nb.div(Math.pow(10,type-2));
	
	q=myRandomLang.decimalwriting+"$"+initial+"$ "+myRandomLang.decimalwritings[type]+"?";
	a='$'+initial+"$ "+myRandomLang.decimalwritings[type]+" $= "+formattexnumber(nb.toString(),myQuizz.language)+".$";
	
	return makeUnFieldQuestion(false,10,q,"",formatnumber(nb.toString(),myQuizz.language),a,q,a);

}

function makeQuizzDecimalAndFraction(t)
{
	var num,den,expo,nb;
	
	expo=makerandommultiple(1,3,1);
	den=Math.pow(10,expo);
	num=0;
	while ( (num%10)==0)
	{
		num=makerandommultiple(1,1000,1);
	}
	nb=new Big(num);
	nb=nb.div(den);
	if (t==0)
		return [myRandomLang.givedecimalwriting+" $\\frac{"+num+"}{"+den+"}$","$\\frac{"+num+"}{"+den+"}="+formattexnumber(nb.toString(),myQuizz.language)+"$",formatnumber(nb.toString(),myQuizz.language)];
	else
		return [myRandomLang.givefractiondecimalwriting+"$"+formattexnumber(nb.toString(),myQuizz.language)+"$","$"+formattexnumber(nb.toString(),myQuizz.language)+"=\\frac{"+num+"}{"+den+"}$",num+"/"+den];
}
		

function makeQuizzFractionToDecimal()
{
	return makeQuizzDecimalAndFraction(0);
}

function makeQuizzDecimalToFraction()
{
	return makeQuizzDecimalAndFraction(1);
}


function randomQuizzFractionToDecimal()
{
	return (randomQuizzGeneral(makeQuizzFractionToDecimal));
}

function randomQuizzDecimalToFraction()
{
	return (randomQuizzGeneral(makeQuizzDecimalToFraction));
}

function randomQuizzDecimalCompare(chiffres,virgules,steps,units,decalunit)
{	
	var type=makerandommultiple(0,6,1),nb1,nb2,n1,n2,d1,d2,correct;
	
	switch (type) 
	{
		case 0:
			n1=makerandommultiple(0,20,1);
			d1=makerandommultiple(1,99,1);
			nb1="$"+n1+",\\!"+d1+"$";
			nb2="$"+n1+",\\!"+d1+"0$";
			answer=nb1+"$\\color{red}=$"+nb2;
			correct=[false,false,true];
			break;
		case 1:
		case 4:
			n1=makerandommultiple(0,19,1);
			n2=makerandommultiple(n1+1,20,1);
			d1=makerandommultiple(1,99,1);
			d2=makerandommultiple(1,999,1);
			if (type==1)
			{
				nb1="$"+n1+",\\!"+d1+"$";
				nb2="$"+n2+",\\!"+d2+"$";
				answer=nb1+"$\\color{red}&lt;$"+nb2;
				correct=[true,false,false];
			}
			else
			{
				nb1="$"+n2+",\\!"+d2+"$";
				nb2="$"+n1+",\\!"+d1+"$";
				answer=nb1+"$\\color{red}&gt;$"+nb2;
				correct=[false,true,false];				
			}
			break;			
		case 2:
		case 5:
			n1=makerandommultiple(0,19,1);
			n2=n1;
			d1=makerandommultiple(10,98,1);
			d2=makerandommultiple((d1+1),99,1);
			if (type==2)
			{
				nb1="$"+n1+",\\!"+d1+"$";
				nb2="$"+n2+",\\!"+d2+"$";
				answer=nb1+"$\\color{red}&lt;$"+nb2;
				correct=[true,false,false];
			}
			else
			{
				nb1="$"+n2+",\\!"+d2+"$";
				nb2="$"+n1+",\\!"+d1+"$";
				answer=nb1+"$\\color{red}&gt;$"+nb2;
				correct=[false,true,false];				
			}
			break;		
		case 3:
		case 6:
			n1=makerandommultiple(0,19,1);
			n2=n1;
			d1=makerandommultiple(1,8,1);
			d2=makerandommultiple(d1+1,9,1);
			if (type==3)
			{
				nb1="$"+n1+",\\!"+d1+makerandommultiple(0,9,1)+"$";
				nb2="$"+n2+",\\!"+d2+"$";
				answer=nb1+"$\\color{red}&lt;$"+nb2;
				correct=[true,false,false];
			}
			else
			{
				nb1="$"+n2+",\\!"+d2+"$";
				nb2="$"+n1+",\\!"+d1+makerandommultiple(0,9,1)+"$";
				answer=nb1+"$\\color{red}&gt;$"+nb2;
				correct=[false,true,false];				
			}
			break;	
	}	
	
	return makeUnQCMQuestion("qu",nb1+"$\\cdots$"+nb2,["$&lt;$","$&gt;$","$=$"],correct,myRandomLang.badluck+" "+answer,myRandomLang.welldone,nb1+"$\\cdots$"+nb2,answer);
}	

function randomQuizzDecimalDigit()
{
	var digits=["1","2","3","4","5","6","7","8","9"],nbavant,nbapres,nb,i,widgit,cdigit,texte,answer;
	var mesdigits = new Array().concat(myRandomLang.decimaldigits)
	nbapres=makerandommultiple(1,3,1);
	nbavant=makerandommultiple(1,4,1);
	
	nb="";
	for (i=0;i<nbavant;i++)
	{
		c=makerandommultiple(0,digits.length-1,1);
		nb+=digits[c];
		digits.splice(c,1);
	}
	nb+='.';
	for (i=0;i<nbapres;i++)
	{
		c=makerandommultiple(0,digits.length-1,1);
		nb+=digits[c];
		digits.splice(c,1);
	}		
	
	wdigit=makerandommultiple(-nbavant+1,nbapres,1);
	cdigit=3+wdigit;
	
	if (wdigit<=0)
		ch=nb[nbavant+wdigit-1];
	else
		ch=nb[nbavant+wdigit];
	
	texte=myRandomLang.bin+formatnumber(nb,myQuizz.language)+" --&gt; "+ch+myRandomLang.isthedigitof;
	answer=myRandomLang.bin+formatnumber(nb,myQuizz.language)+" --&gt; "+ch+myRandomLang.isthedigitof+" "+mesdigits[cdigit];
	
	mydig=mesdigits[cdigit];
	mesdigits.splice(cdigit,1);
	while (mesdigits.length>3) 
	{
		i=makerandommultiple(0,mesdigits.length-1,1);
		mesdigits.splice(i,1);
	}
	mesdigits.push(mydig);
	
	return makeUnQCMQuestion("qu",texte,mesdigits,[false,false,false,true],myRandomLang.badluck+" "+answer, myRandomLang.welldone,texte,answer);
	
}	

function randomQuizzDecimalLine()
{
	var svg='<svg viewBox="0 0 500 100" preserveAspectRatio="xMidYMid meet"><line x1=0 y1=50 x2=500 y2=50 stroke="black" stroke-width=2 />';
	var dep=20;
	var fin=480;
		
	var nb=makerandommultiple(1,9,1);
	var dec1=makeexclusiverandommultiple(-5,5,1,[0,1,-1]);
	var dec2=makeexclusiverandommultiple(-5,5,1,[0,dec1]);
	
	var type=makerandommultiple(0,4,1);
		
	switch (type)
	{
		case 0:
			divi=10;
			n=new Big(nb);
			break;
		case 1:
			divi=100;
			n=new Big(nb);
			break;
		case 2:
			divi=100;
			n=new Big(nb);
			n=n.plus(0.5);
			break;
		case 3:
			divi=10;
			dec=makerandommultiple(1,9,1);
			d1=new Big(dec);
			d1=d1.div(10);
			n=new Big(nb);
			n=n.plus(d1);
			break;
		case 4:
			divi=100;
			dec=makerandommultiple(1,99,1);
			d1=new Big(dec);
			d1=d1.div(100);
			n=new Big(nb);
			n=n.plus(d1);
			break;			
	}
	nb1=new Big(dec1);
	nb1=nb1.div(divi);
	nb2=new Big(dec2);
	nb2=nb2.div(divi);
	n1=new Big(n);
	n1=n1.plus(nb1);
	n2=new Big(n);
	n2=n2.plus(nb2);	
	
	// We draw the grid
	
	unit=3;
	
	for (i=-6;i<=6;i++)
	{
		x=dep+(fin-dep)/2+i*(fin-dep)/(unit*4);
		if ( (i==0) || (i==dec1)) {ymin=42; ymax=58} else {ymin=46;ymax=54;}
		svg+='<line x1='+x+' y1='+ymin+' x2='+x+' y2='+ymax+' stroke=black stroke-width=1 />';
	}
	
	// We draw the numbers	
	
	x=dep+(fin-dep)/2+(dec1)*(fin-dep)/(unit*4)-(n1.toString().length)*6;
	svg+='<text x='+x+' y=75 fill=black>'+formatnumber(n1.toString(),myQuizz.language)+'</text>';
	x=dep+(fin-dep)/2-(n.toString().length)*6;
	svg+='<text x='+x+' y=75 fill=black>'+formatnumber(n.toString(),myQuizz.language)+'</text>';

	
	// We draw the arrow
	
	x=dep+(fin-dep)/2+dec2*(fin-dep)/(unit*4);
	xmin=x-8;
	xmax=x+8;
	svg+='<line x1='+x+' y1=20 x2='+x+' y2=50 stroke=red stroke-width="2" />';
	svg+='<line x1='+x+' y1=50 x2='+xmax+' y2=42 stroke=red stroke-width="2" />';
	svg+='<line x1='+x+' y1=50 x2='+xmin+' y2=42 stroke=red stroke-width="2" />';
	
	
	svg+='</svg>';
	
	answer=formatnumber(n2.toString(),myQuizz.language);
	
	return makeUnFieldQuestionSvg(false,10,myRandomLang.decimalline,"",answer,'$'+answer+'$',myRandomLang.decimalline,'$'+answer+'$',svg);	
	
}

function makeRandomQuizzDecimalRoundInteger()
{
	var n=makerandommultiple(0,20,1),m;
	var type=makerandommultiple(0,2,1),dec;
	switch (type)
	{
		case 0:
			dec=makeexclusiverandommultiple(1,9,1,[5]);
			if (dec>5) m=n+1; else m=n;
			break;
		case 1:
			dec=makeexclusiverandommultiple(1,99,1,[10,20,30,40,50,60,70,80,90]);
			if (dec>50) m=n+1; else m=n;
			if (dec<10) dec="0"+dec;
			break;		
		case 2:
			dec=0;
			while ((dec%10)==0) dec=makerandommultiple(1,999,1,[500]);
			if (dec>500) m=n+1; else m=n;
			if ( (dec<100))
				if (dec<10) dec="00"+dec;
				else dec="0"+10;
			break;
	}
	var nb=new Big(n+"."+dec);
	
	return [myRandomLang.roundinteger+"$"+formattexnumber(nb.toString(),myQuizz.language)+"$","$"+m+"$",m];
}

function randomQuizzDecimalRoundInteger()
{
	return randomQuizzGeneral(makeRandomQuizzDecimalRoundInteger,"");		
}

function makeRandomQuizzDecimalRoundGeneral()
{
	var dec=0,u=makerandommultiple(0,100,1);
	while ((dec%10)==0) dec=makerandommultiple(1,999,1);
	var ch="",dec2=dec,nb,type;
	while ( (dec2<100))
	{
		ch=ch+"0";
		dec2=dec2*10;
	}
	nb=new Big(u+"."+ch+dec);
	rep=new Big(nb);
	type=makerandommultiple(0,2,1);
	rep=rep.round(type);

	return [myRandomLang.round+myRandomLang.rounddecimal[type]+"$"+formattexnumber(nb.toString(),myQuizz.language)+"$","$"+formattexnumber(rep.toString(),myQuizz.language)+"$",formatnumber(rep.toString(),myQuizz.language)];

}

function randomQuizzDecimalRoundGeneral()
{
	return randomQuizzGeneral(makeRandomQuizzDecimalRoundGeneral,"");
}

function randomQuizzDecimalOrder()
{
	var n=makerandommultiple(1,9,1),nb=new Array(),i;
	if (Math.random()<0.75)
		nb[0]=(n-1)+"."+makeexclusiverandommultiple(11,99,1,[10,20,30,40,50,60,70,80,90]);
	else
		nb[0]=(n-1)+"."+makerandommultiple(1,9,1);
	switch (makerandommultiple(1,10,1))
	{
		case 1:
			nb[1]=""+n;
			break;
		case 2:
			nb[1]=n+".0"+makerandommultiple(1,9,1);
			break;
		case 3:
			nb[1]=n+"."+makerandommultiple(1,3,1);
			break;
		default:
			nb[1]=n+"."+makeexclusiverandommultiple(11,29,1,[20]);
			break;
	}
	if (Math.random()<0.75)
		nb[2]=n+"."+makeexclusiverandommultiple(31,99,1,[40,50,60,70,80,90]);
	else
		nb[2]=n+"."+makerandommultiple(3,9,1);
	switch (makerandommultiple(1,10,1))
	{
		case 1:
			nb[3]=""+(n+1);
			break;
		case 2:
			nb[3]=(n+1)+".0"+makerandommultiple(1,9,1);
			break;
		case 3:
			nb[3]=(n+1)+"."+makerandommultiple(1,3,1);
			break;
		default:
			nb[3]=(n+1)+"."+makeexclusiverandommultiple(11,29,1,[20]);
			break;
	}	
	var anb = new Array().concat(nb)

	q=myRandomLang.order+"$$";
	while ( (nb.length>0) && (q.length<100))
	{
		i=makerandommultiple(0,nb.length-1,1);
		q=q+formattexnumber(nb[i],myQuizz.language)+"\\quad\\quad";
		nb.splice(i,1);
	}
	q=q+"$$";
	
	a="$";
	for (i=0;i<anb.length;i++)
	{
		a=a+formattexnumber(anb[i],myQuizz.language);
		if (i<anb.length-1)  a=a+"&lt;";
	}
	a=a+"$";
	
	ca="";
	for (i=0;i<anb.length;i++)
	{
		ca=ca+formatnumber(anb[i],myQuizz.language);
		if (i<anb.length-1)  ca=ca+"<";
	}	
	
	return makeUnFieldQuestion(false,30,q,"",ca,a,q,a);
	
}
	


/* ******************** OPERATIONS**************************** */

function makeRandomQuestionMultiplicationTable()
{
	var i=makerandommultiple(0,myQuizz.table.length-1,1);
	var a=myQuizz.table[i];
	var b=makerandommultiple(1,9,1);
	
	return [""+a+"\\times "+b,a*b	,a*b];
}

function randomQuizzMultiplicationTable()
{
	return randomQuizzLitteralGeneral(makeRandomQuestionMultiplicationTable,"");		
}

function randomQuizzMultiplicationHole()
{
	var i=makerandommultiple(0,myQuizz.table.length-1,1);
	var a=myQuizz.table[i];
	var b=makerandommultiple(1,9,1);	
	var result=a*b;
	
	return makeUnFieldQuestion(true,4,"$"+a+"\\times$","$="+result+"$.",b,b,"$$"+a+"\\times \\cdots="+result+"$$","$"+a+"\\times \\color{red}"+b+"="+result+"$.");
	
}

function randomQuizzTenComplement()
{
	var a=makerandommultiple(1,9,1);
	
	return makeUnFieldQuestion(true,4,"$"+a+"+$","$=10$.",10-a,10-a,"$$"+a+"+\\cdots=10$$","$"+a+"+\\color{red}"+(10-a)+"=10$.");	
}

function randomQuizzIntegerAdd()
{
	var a=makerandommultiple(1,Math.pow(10,myQuizz.level+1),1);
	var b=makerandommultiple(1,Math.pow(10,myQuizz.level+1),1);
	return makeUnFieldQuestion(true,8,"$"+a+"+"+b+"=$",".",a+b,a+b,"$$"+a+"+"+b+"=???$$","$"+a+"+"+b+"=\\color{red}{"+(a+b)+"}$.");	
}

function randomQuizzIntegerSub()
{
	var a=makerandommultiple(2,Math.pow(10,myQuizz.level+1),1);
	var b=makerandommultiple(1,a-1,1);
	return makeUnFieldQuestion(true,8,"$"+a+"-"+b+"=$",".",a-b,a-b,"$$"+a+"-"+b+"=???$$","$"+a+"-"+b+"=\\color{red}{"+(a-b)+"}$.");	
}
	
function randomQuizzIntegerHole()
{
	var a=makerandommultiple(2,Math.pow(10,myQuizz.level+1),1);
	var b=makerandommultiple(1,a-1,1);
	return makeUnFieldQuestion(true,8,"$"+b+"+$","$="+a+"$.",a-b,a-b,"$$"+b+"+\\cdots="+a+"$$","$"+b+"+\\color{red}{"+(a-b)+"}="+a+"$.");	
}

function randomQuizzIntegerDivEucli()
{
	var maxdividende=[99,500],maxdiviseur=[9,20];
	var type=makerandommultiple(0,myQuizz.level,1);
	var a=makerandommultiple(10,maxdividende[type],1);
	var b=makerandommultiple(2,maxdiviseur[type],1);
	var q="Dans la division euclidenne de $"+a+"$ par $"+b+"$";
	var r="$q="+Math.trunc(a/b)+"$ et $r="+(a%b)+"$.";
	return makeUnFieldsQuestion([true,true],[false,true],[3,3],[q+'</p>le quotient vaut','le reste vaut'],['',''],[Math.trunc(a/b),a%b],r,q+', combien valent le quotient et le reste?',q+', '+r+'.');
}

function produceTwoDecimalNumbers()
{
	var apres=myQuizz.level+1;
	var avant;
	switch (myQuizz.level)
	{
		case 2: 
			avant=2;
			break;
		default:
			avant=1;
	}
	var a=makerandommultiple(1,Math.pow(10,avant+apres)-2,1);
	var b=makerandommultiple(a+1,Math.pow(10,avant+apres)-1,1);
	var iat=formattexnumber(new Big(a).div(Math.pow(10,apres)),myQuizz.language);
	var ibt=formattexnumber(new Big(b).div(Math.pow(10,apres)),myQuizz.language);
	return [a,b,iat,ibt];
}

function randomQuizzDecimalAdd()
{
	var dec=produceTwoDecimalNumbers();
	var a=dec[0], b=dec[1], iat=dec[2], ibt=dec[3];
	var ic=new Big ( b+a).div(Math.pow(10,myQuizz.level+1)),ict=formattexnumber(ic,myQuizz.language);
	
	return makeUnFieldQuestion(true,4,"$"+iat+"+"+ibt+"=$","",formatnumber(ic,myQuizz.language),"$"+ict+"$","$$"+iat+"+"+ibt+"=\\cdots$$","$"+iat+"+"+ibt+"=\\color{red}{"+ict+"}$");		

}

function randomQuizzDecimalSub()
{
	var dec=produceTwoDecimalNumbers();
	var a=dec[0], b=dec[1], iat=dec[2], ibt=dec[3];	
	var ic=new Big ( b-a).div(Math.pow(10,myQuizz.level+1)),ict=formattexnumber(ic,myQuizz.language);
	
	return makeUnFieldQuestion(true,4,"$"+ibt+"-"+iat+"=$","",formatnumber(ic,myQuizz.language),"$"+ict+"$","$$"+ibt+"-"+iat+"=\\cdots$$","$"+ibt+"-"+iat+"=\\color{red}{"+ict+"}$");		

}

function randomQuizzDecimalHole()
{
	var dec=produceTwoDecimalNumbers();
	var a=dec[0], b=dec[1], iat=dec[2], ibt=dec[3];	
	var ic=new Big ( b-a).div(Math.pow(10,myQuizz.level+1)),ict=formattexnumber(ic,myQuizz.language);
	
	return makeUnFieldQuestion(true,4,"$"+iat+"+$","$="+ibt+"$.",formatnumber(ic,myQuizz.language),"$"+ict+"$","$$"+iat+"+\\cdots="+ibt+"$$","$"+iat+"+\\color{red}{"+ict+"}="+ibt+"$");		
}

function randomQuizzDecimalProduct()
{
	var a,b,ia,ib,iat,ibt,s,ias;
	
	a=makerandommultiple(2,9,1);
	b=makerandommultiple(2,50,1);
	if (Math.random()<0.5)
	{
		ia=new Big(a);
		ib=new Big(b).div(10);
	}
	else
	{
		ia=new Big(a).div(10);
		ib=new Big(b);		
	}
	ic=new  Big(a*b).div(10);
	iat=formattexnumber(ia,myQuizz.language);
	ibt=formattexnumber(ib,myQuizz.language);
	ict=formattexnumber(ic,myQuizz.language);

	return makeUnFieldQuestion(true,4,"$"+ibt+"\\times"+iat+"=$","",formatnumber(ic,myQuizz.language),"$"+ict+"$","$$"+ibt+"\\times"+iat+"=\\cdots$$","$"+ibt+"\\times"+iat+"=\\color{red}{"+ict+"}$");		

}

function randomQuizzRightRel()
{
	var a=makeexclusiverandommultiple(-9,9,1,[0,1]);
	if (a>0) b=makerandommultiple(-9,-1,1); else b=makeexclusiverandommultiple(-9,9,1,[0,1]);
	switch (makerandommultiple(0,2,1))
	{
		case 0:
			c=a+b;
			symb='+';
			ans=[true,false,false];
			break;
		case 1:
			c=a-b;
			symb='-';
			ans=[false,true,false];
			break;
		case 2:
			c=a*b;
			symb='\\times';
			ans=[false,false,true];
			break;		
	}
	q="$$"+addparenthesis(a)+"\\ ???\\ "+addparenthesis(b)+"="+c+"$$";
	anstexte= "$"+addparenthesis(a)+"\\color{red}{"+symb+"}"+addparenthesis(b)+"="+c+"$";
	if (myQuizz.field=="nofield")
	{
		return ({
		type: "noanswer",
		text: q,
		answer:anstexte
		})
	}
	else
	{
		return ({
		type: "qu",
		text:q,
		answers: ['$+$','$-$','$\\times$'],
		correctAnswers: ans,
		badAnswer: myRandomLang.badluck+" "+anstexte,
		goodAnswer: myRandomLang.welldone+" "+anstexte
		})
	}	
}


function OneDecimalNumber()
{
	var a=makerandommultiple(-99,99,1);
	var iat=formattexnumber(new Big(a).div(10),myQuizz.language);
	return [a,iat];
}


function randomQuizzAddSubRelatif(type,nb)
{
	var a=[],b=[],sol,q,i;
	for (i=0;i<nb;i++)
	{
		a[i]=OneDecimalNumber();
	}
	sol=a[0][0];
	q=addparenthesistwo(a[0][0],a[0][1])
	for (i=0;i<nb-1;i++)
	{
		b[i]=type[makerandommultiple(0,type.length-1,1)];
		if (b[i]=="-") sol=sol-a[i+1][0];
		else sol=sol+a[i+1][0];
		q+=b[i]+addparenthesistwo(a[i+1][0],a[i+1][1]);
	}
	
	solt=formattexnumber(new Big(sol).div(10),myQuizz.language);
	soli=formatnumber(new Big(sol).div(10),myQuizz.language);
	
	return makeUnFieldQuestion(false,6,'$'+q+'=$',"",soli,'$'+solt+'$','$'+q+'=$','$'+q+'=\\color{red}{'+solt+'}$');

}

function randomQuizzOpeRelatif(type,nb)
{
	var a=[],b=[];
	for (i=0;i<nb;i++)
		a[i]=makenonzerorandommultiple(-6,6,1);
	for (i=0;i<nb-1;i++)
		b[i]=type[makerandommultiple(0,type.length-1,1)];
	q=addparenthesisplus(a[0]);
	qp=addparenthesis(a[0]);
	for (i=0;i<nb-1;i++)
	{
		q=q+b[i]+addparenthesisplus(a[i+1]);
		qp=qp+b[i]+addparenthesis(a[i+1]);
	}
	sol=algebra.parse(qp);
	solt=sol.toTex();
	solc=sol.toString();
	q=q.replace(/\*/g,'\\times');
	
	return makeUnFieldQuestion(false,6,'$'+q+'=$',"",solc,'$'+sol+'$','$'+q+'=$','$'+q+'=\\color{red}{'+sol+'}$')
}

function randomQuizzSquareRel()
{
	var a=makerandommultiple(-9,9,1),b=a*a;
	return (['$'+addparenthesis(a)+'^2=$','$'+addparenthesis(a)+'^2=\\color{red}{'+b+'}$',b]);
}
	
function randomQuizzHourOpe()
{
	var h1,h2,m1,m2,s1,s2,h,m,s;
	var inlinef,lb,bf,ca,a;
	var type=makerandommultiple(0,3,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,3,1);

	switch (type)
	{
		case 0:
			h1=makerandommultiple(1,10,1);
			h2=makerandommultiple(1,10,1);
			m1=makerandommultiple(1,59,1);
			m2=makerandommultiple(1,59,1);
			m=m1+m2;
			h=h1+h2;
			if (m>59)
			{
				m=m-60;
				h=h+1;
			}
			inlinef=[true,true];
			lb=[false,false];
			q=h1+"h "+m1+"min + "+h2+"h "+m2+"min =";
			a=q+h+"h "+m+" min";
			bf=[q,""];
			ca=[[h],[m]];
			af=["h","min"];
			fw=[3,3];
			break;
		case 1:
			h1=makerandommultiple(1,10,1);
			h2=makerandommultiple(1,10,1);
			m1=makerandommultiple(1,59,1);
			m2=makerandommultiple(1,59,1);
			s1=makerandommultiple(1,59,1);
			s2=makerandommultiple(1,59,1);			
			m=m1+m2;
			h=h1+h2;
			s=s1+s2;
			if (s>59)
			{
				s=s-60;
				m=m+1;
			}
			if (m>59)
			{
				m=m-60;
				h=h+1;
			}
			inlinef=[true,true,true];
			lb=[false,false,false];
			q=h1+"h "+m1+"min "+s1+"s + "+h2+"h "+m2+"min "+s2+"s =";
			a=q+h+"h "+m+"min "+s+"s";
			bf=[q+"<br />","",""];
			ca=[[h],[m],[s]];
			af=["h","min","s"];
			fw=[2,2,2];
			break;	
		case 2:
			h1=makerandommultiple(1,10,1);
			h2=makerandommultiple(1,10,1);
			m1=makerandommultiple(1,59,1);
			m2=makerandommultiple(1,59,1);
			m=m1+m2;
			h=h1+h2;
			if (m>59)
			{
				m=m-60;
				h=h+1;
			}
			inlinef=[true,true];
			lb=[false,false];
			q=h+"h "+m+"min - "+h2+"h "+m2+"min =";
			a=q+h1+"h "+m1+" min";
			bf=[q,""];
			ca=[[h1],[m1]];
			af=["h","min"];
			fw=[3,3];
			break;			
		case 3:
			h1=makerandommultiple(1,10,1);
			h2=makerandommultiple(1,10,1);
			m1=makerandommultiple(1,59,1);
			m2=makerandommultiple(1,59,1);
			s1=makerandommultiple(1,59,1);
			s2=makerandommultiple(1,59,1);			
			m=m1+m2;
			h=h1+h2;
			s=s1+s2;
			if (s>59)
			{
				s=s-60;
				m=m+1;
			}
			if (m>59)
			{
				m=m-60;
				h=h+1;
			}
			inlinef=[true,true,true];
			lb=[false,false,false];
			q=h+"h "+m+"min "+s+"s - "+h2+"h "+m2+"min "+s2+"s =";
			a=q+h1+"h "+m1+"min "+s1+"s";
			bf=[q+"<br />","",""];
			ca=[[h1],[m1],[s1]];
			af=["h","min","s"];
			fw=[2,2,2];
			break;				
	}
	
	return makeUnFieldsQuestion(inlinef,lb,fw,bf,af,ca,a,q+"???",a);
}
	
	

// SQUARE ROOTS 

function randomQuizzDeleteSquareRoots()
{
	var type,l=myQuizz.language,q,ans;
	
	type=makerandommultiple(0,myQuizz.level,1);
	switch (type)
	{
		case 0:
			number=makerandommultiple(1,12,1);
			bnumber=number*number;
			break;
		case 1:
			number=makerandommultiple(1,9,1);
			number=number*10;
			bnumber=number*number;
			break;
		case 2:
			n=new Big(makerandommultiple(1,9,1));
			if (Math.random()>0.5) n=n.div(100); else n=n.div(10);
			b=n.times(n);
			number=n.toString();
			bnumber=b.toString();
			break;
	}
	q="$\\sqrt{"+formattexnumber(bnumber,l)+"}=$";
	ans="$\\sqrt{"+formattexnumber(bnumber,l)+"}=\\color{red}{"+formatnumber(number,l)+"}.$";

	return makeUnFieldQuestion(true,4,q,"",formatnumber(number,l),"$"+formattexnumber(number,l)+"$",q,ans);	
}

// 

function randomQuizzSimplifySquareRoots()
{	var a=makerandommultiple(2,10,1);
	var bs= [2,3,5,6,7,10];
	var b=bs[makerandommultiple(0,bs.length-1,1)];
	return ({
			type: "noanswer",
			text: "$$\\sqrt{"+(a*a*b)+"}=?$$",
			answer: "$\\sqrt{"+(a*a*b)+"}=\\color{red}{"+a+"\\sqrt{"+b+"}}$",
			})	
}

function randomQuizzSquareRootApproximate()
{
	var a=makerandommultiple(2,12,1);
	var n=a*a+makerandommultiple(1,a-1,1);
	return ({
			type: "noanswer",
			text: myRandomLang.framebyintegers+" $\\sqrt{"+n+"}$",
			answer: "$\\color{red}{"+a+"}\\leq \\sqrt{"+n+"}\\leq \\color{red}{"+(a+1)+"}$."
			})		
}

function randomQuizzSquareRootOnly()
{
	var a=makerandommultiple(2,10,1),b=makerandommultiple(2,10,1),c,texte,answer;
	switch (makerandommultiple(0,3,1))
	{
		case 0:
			texte="$\\sqrt {"+a+"}\\times \\sqrt{"+b+"}=\\sqrt{";
			answer="$\\sqrt {"+a+"}\\times \\sqrt{"+b+"}=\\sqrt{"+(a*b)+"}$";
			ans=a*b;
			break;
		case 1:
			texte="$\\frac{\\sqrt{"+(a*b)+"}}{\\sqrt{"+b+"}}=\\sqrt{";
			answer="$\\frac{\\sqrt{"+(a*b)+"}}{\\sqrt{"+b+"}}=\\sqrt{"+a+"}$";
			ans=a;
			break;
		case 2:
			texte="$"+a+"\\sqrt"+b+"=\\sqrt{";
			answer="$"+a+"\\sqrt"+ b+"=\\sqrt{"+(a*a*b)+"}$";
			ans=a*a*b;
			break;
		case 3:
			a=makerandommultiple(2,5,1);
			c=makerandommultiple(2,5,1);
			texte="$"+a+"\\sqrt"+b+"+"+c+"\\sqrt "+b+"=\\sqrt{";
			answer="$"+a+"\\sqrt"+b+"+"+c+"\\sqrt "+b+"=\\sqrt{"+((a+c)*(a+c)*b)+"}$";
			ans=(a+c)*(a+c)*b;
	}
	return makeUnFieldQuestion(true,4,texte+"}$","",ans,answer,texte+"\\dots}$",answer);	
}

// FUNCTIONS

function svgdoAxis(minx,maxx,miny,maxy,nb)
{
	var midx=(maxx-minx)/2,midy=(maxy-miny)/2,largx=maxx-minx-20,largy=maxx-miny-20;
	var svg='<line x1='+minx+' y1=+'+midy+' x2='+maxx+' y2='+midy+' stroke="black" stroke-width=1.5 /><line x1='+midx+' y1=0 x2='+midx+' y2='+maxy+' stroke="black" stroke-width=1.5 />'
	for (i=-nb;i<=nb;i++)
	{
		if (i!=0)
		{
			svg+='<line x1='+(midx+(largx-midx)/nb*i)+' y1='+(midy-5)+' x2='+(midx+(largx-midx)/5*i)+' y2='+(midy+5)+' stroke=black stroke-width=1 />';
			svg+='<line x1='+(midx+(largx-midx)/5*i)+' y1='+miny+' x2='+(midx+(largx-midx)/5*i)+' y2='+maxy+' stroke="lightgrey" stroke-dasharray="5,10" stroke-width=1 />';
			svg+='<line x1='+minx+' y1='+(midy+(largy-midy)/5*i)+' x2='+maxx+' y2='+(midy+(largy-midy)/5*i)+' stroke="lightgrey" stroke-dasharray="5,10" stroke-width=1 />';
			if (i<=0) decx=10; else decx=5;
			svg+='<text x='+(midx+(largx-midx)/5*i-decx)+' y='+(midy+18	)+' fill=black font-size="12px">'+i+'</text>';
			svg+='<text x='+(midx-16)+' y='+((midy+(largy-midy)/5*(-i))+6)+' fill=black font-size="12px">'+i+'</text>';
		}
	}
	return svg;
}

function coordx(x,minx,maxx,nb)
{
	var midx=(maxx+minx)/2,largx=maxx-minx-20;
		
	return (midx+(largx-midx)/nb*x);
	
}

function coordy(y,miny,maxy,nb)
{
	var midy=(maxy+miny)/2,largy=maxy-miny-20;
	
	return (midy+(largy-midy)/nb*(-y));
}

function drawFunction(type,minx,maxx,miny,maxy,nb)
{
	var svg='<path d="';
	var midx=(maxx-minx)/2,midy=(maxy-miny)/2,largx=maxx-minx-20,largy=maxy-miny-20;
	var pas=0.1;
	var ant,im,s,a,b,a1,a2,x0,x1,y0,y1,lambda,eps;
	
	s=makenonzerorandommultiple(-2,2,2);
	switch (s)
	{
		case 1:
			sign="\\geq";
			break;
		case 2:
			sign="&gt;";
			break;
		case -1:
			sign="\\leq";
			break;
		case -2:
			sign="&lt;";
			break;	
	}	
	if (Math.abs(s)==2) 
	{
		crod='[';
		crog=']';
	}
	else
	{
		crod=']';
		crog='[';
	}
			
	switch (type)
	{
		case 0:  // affine
			a=makerandommultiple(-4,4,1);
			b=makerandommultiple(-2,2,1);
			lambda=3*(Math.random()+0.1)*makenonzerorandommultiple(-1,1,1);
			im=b;
			ant=[a];
			if ((s*lambda)>0) inter=crog+a+";+\\infty[";
			else inter="]-\\infty;"+a+crod;
			x=-nb-1;
			svg+=' M '+coordx(x,minx,maxx,nb)+' '+coordy((lambda*(x-a)+b),miny,maxy,nb);
			while (x<(nb+1))
			{
				svg+=' L '+coordx(x,minx,maxx,nb)+' '+coordy((lambda*(x-a)+b),miny,maxy,nb);
				x+=pas;
			}
			break;
		case 1: // Carré
			a1=makerandommultiple(-4,4,1);
			a2=makeexclusiverandommultiple(-4,4,1,[a1-1,a1+1]);
			if (a1>a2) 
			{
				sw=a1;
				a1=a2;
				a2=a1;
			}
			b=makerandommultiple(-3,3,1);
			im=b;
			eps=makenonzerorandommultiple(-3,3,1);
			if (a1==a2) 
			{
				ant=[a1]; 
				if ( (s*eps>0) ) 
				{
					if (Math.abs(s)==2) inter="]-\\infty;"+a1+"[\\cup ]"+a1+";+\\infty["; else inter="\\mathbb R"; 
				}
				else 
				{
					if (Math.abs(s)==2) inter="\\varnothing"; else inter="\\{"+a1+"\\}";
				}
			}
			else 
			{
				ant=[a1,a2];
				if ((eps*s)<0) 
				{
					inter=crog+a1+";"+a2+crod;
				}
				else
				{
					inter="]-\\infty;"+a1+crod+"\\cup"+crog+a2+";+\\infty[";
				}
			}
			x=-nb-1;
			svg+=' M '+coordx(x,minx,maxx,nb)+' '+coordy(eps*0.1*(x-a1)*(x-a2)+b,miny,maxy,nb);
			while (x<(nb+1))
			{
				svg+=' L '+coordx(x,minx,maxx,nb)+' '+coordy(0.1*eps*(x-a1)*(x-a2)+b,miny,maxy,nb);
				x+=pas;
			}	
			break;
		case 2: // Cube
			a1=makerandommultiple(-3,3,1);
			ant=[a1];
			a2=makerandommultiple(-3,3,1);
			if (a2!=a1) ant.push(a2);
			a3=makerandommultiple(-3,3,1);
			if ( (a3!=a1) && (a3!=a2)) ant.push(a3);
			ant=ant.sort((a, b) => a - b);
			b=makerandommultiple(-3,3,1);
			im=b;
			if (ant.length>1) 
				dilation=1/(Math.abs(a1-a2)+Math.abs(a1-a3)+Math.abs(a2-a3));
			else
				dilation=0.5;
			eps=makenonzerorandommultiple(-1,1,1);
			x=-nb-1;
			svg+=' M '+coordx(x,minx,maxx,nb)+' '+coordy(eps*dilation*(x-a1)*(x-a2)*(x-a3)+b,miny,maxy,nb);
			while (x<(nb+1))
			{
				svg+=' L '+coordx(x,minx,maxx,nb)+' '+coordy(eps*dilation*(x-a1)*(x-a2)*(x-a3)+b,miny,maxy,nb);
				x+=pas;
			}
			switch (ant.length)
			{
				case 1:
					if ((s*eps>0)) inter=crog+a1+";+\\infty["; else inter="]-\\infty;"+a1+crod;
					break;
				case 2:
					if (a1==a2)
					{
						if (s*eps>0) 
						{
							if (Math.abs(s)==1)
							{
								inter=crog+a3+";+\\infty[";
								if  (a1<a3) inter+="\\cup\\{"+a1+"\\}";
							}
							else
							{
								if (a1<a3) inter=crog+a3+";+\\infty[";
								else inter=crog+a3+";"+a1+crod+"\\cup"+crog+a1+";\\infty[";
							}
						}
						else 
						{
							if (Math.abs(s)==1)
							{
								inter="]-\\infty;"+a3+crod;
								if (a1>a3)  inter+="\\cup\\{"+a1+"\\}";
							}
							else
							{
								if (a1>a3) inter="]-\\infty;"+a3+crod;
								else inter="]-\\infty;"+a1+crod+"\\cup"+crog+a1+";"+a3+crod;
							}							
						}
					}
					if (a1==a3)
					{
						if (s*eps>0) 
						{
							if (Math.abs(s)==1)
							{
								inter=crog+a2+";+\\infty[";
								if  (a1<a2) inter+="\\cup\\{"+a1+"\\}";
							}
							else
							{
								if (a1<a2) inter=crog+a2+";+\\infty[";
								else inter=crog+a2+";"+a1+crod+"\\cup"+crog+a1+";\\infty[";
							}
						}
						else 
						{
							if (Math.abs(s)==1)
							{
								inter="]-\\infty;"+a2+crod;
								if (a1>a2)  inter+="\\cup\\{"+a1+"\\}";
							}
							else
							{
								if (a1>a2) inter="]-\\infty;"+a2+crod;
								else inter="]-\\infty;"+a1+crod+"\\cup"+crog+a1+";"+a2+crod;
							}							
						}
					}		
					if (a2==a3)
					{
						if (s*eps>0) 
						{
							if (Math.abs(s)==1)
							{
								inter=crog+a1+";+\\infty[";
								if  (a3<a1) inter+="\\cup\\{"+a3+"\\}";
							}
							else
							{
								if (a3<a1) inter=crog+a1+";+\\infty[";
								else inter=crog+a1+";"+a3+crod+"\\cup"+crog+a3+";\\infty[";
							}
						}
						else 
						{
							if (Math.abs(s)==1)
							{
								inter="]-\\infty;"+a1+crod;
								if (a3>a1)  inter+="\\cup\\{"+a3+"\\}";
							}
							else
							{
								if (a3>a1) inter="]-\\infty;"+a1+crod;
								else inter="]-\\infty;"+a3+crod+"\\cup"+crog+a3+";"+a1+crod;
							}							
						}
					}						
					break;
				case 3:
					if (s*eps>0) inter=crog+ant[0]+";"+ant[1]+crod+"\\cup"+crog+ant[2]+";\\infty[";
					else inter="]-\\infty;"+ant[0]+crod+"\\cup"+crog+ant[1]+";"+ant[2]+crod;
					break;
			}
			break;
		case 3: // Affine par morceaux
			y0=makerandommultiple(-nb,nb,1);
			x1=makerandommultiple(-nb+1,nb-1,1);
			y1=makerandommultiple(-nb,nb,1);
			y2=makeexclusiverandommultiple(-nb,nb,1,[y0]);
			svg+=' M '+coordx(-nb,minx,maxx,nb)+' '+coordy(y0,miny,maxy,nb)+' L '+coordx(x1,minx,maxx,nb)+' '+coordy(y1,miny,maxy,nb)+' L '+coordx(nb,minx,maxx,nb)+' '+coordy(y2,miny,maxy,nb);
			break;
		case 4: // Horizontale
			hy=makerandommultiple(miny+20,maxy+20,1);
			svg+=' M '+minx+' '+hy+' L '+maxx+' '+hy+' ';
			break;
	}
	
	svg+=' " stroke=red stroke-width=1 fill="transparent"/>';
	
	return [svg,im,ant,sign,inter];
	
}

function drawNotFunction(type,minx,maxx,miny,maxy,nb)
{
	var svg;
	var midx=(maxx-minx)/2,midy=(maxy-miny)/2,largx=maxx-minx-20,largy=maxy-miny-20;
	var pas=0.1;
	
	if (type!=0) svg='<path d="';
	
	
	switch (type)
	{
		case 0:  // Cercle
			cx=makerandommultiple((minx+midx)/2,(maxx+midx)/2,1);
			cy=makerandommultiple((miny+midy)/2,(maxy+midy)/2,1);
			rx=makerandommultiple(20,largx/4,1);
			ry=makerandommultiple(20,largy/4,1);
			svg+='<ellipse cx='+cx+' cy='+cy+' rx='+rx+' ry='+ry;
			break;
		case 1: // Carré
			a1=makerandommultiple(-3,3,1);
			a2=makeexclusiverandommultiple(-3,3,1,[a1-1,a1+1]);
			b=makerandommultiple(-3,3,1);
			eps=makenonzerorandommultiple(-3,3,1);
			y=-nb;
			svg+=' M '+coordx(eps*0.1*(y-a1)*(y-a2)+b,minx,maxx,nb)+' '+coordy(y,miny,maxy,nb);
			while (y<nb)
			{
				svg+=' L '+coordx(eps*0.1*(y-a1)*(y-a2)+b,minx,maxx,nb)+' '+coordy(y,miny,maxy,nb);
				y+=pas;
			}	
			break;
		case 2: // Cube
			a1=makerandommultiple(-3,3,1);
			a2=makerandommultiple(-3,3,1);
			a3=makeexclusiverandommultiple(-3,3,1,[a1,a2]);
			delta=Math.round(5/(Math.abs(a1-a2)+Math.abs(a1-a3)+Math.abs(a2-a3)));
			b=makerandommultiple(-delta,delta,1);
			eps=makenonzerorandommultiple(-3,3,1);
			y=-nb;
			svg+=' M '+coordx(eps*0.1*(y-a1)*(y-a2)*(y-a3)+b,minx,maxx,nb)+' '+coordy(y,miny,maxy,nb);
			while (y<nb)
			{
				svg+=' L '+coordx(eps*0.1*(y-a1)*(y-a2)*(y-a3)+b,minx,maxx,nb)+' '+coordy(y,miny,maxy,nb);
				y+=pas;
			}
			break;
		case 3: // Affine par morceaux
			y0=makerandommultiple(-nb,nb,1);
			x1=makerandommultiple(-nb+1,nb-1,1);
			y1=makerandommultiple(-nb,nb,1);
			y2=makeexclusiverandommultiple(-nb,nb,1,[y0]);
			svg+=' M '+coordx(-nb,minx,maxx,nb)+' '+coordy(y0,miny,maxy,nb)+' L '+coordx(x1,minx,maxx,nb)+' '+coordy(y1,miny,maxy,nb)+' L '+coordx(-nb,minx,maxx,nb)+' '+coordy(y2,miny,maxy,nb);
			break;
		case 4: // Verticale
			hx=makerandommultiple(minx+20,maxx+20,1);
			svg+=' M '+hx+' '+miny+' L '+hx+' '+maxy+' ';
			break;
	}
	
	svg+=' " stroke=red stroke-width=1 fill="transparent"/>';
	
	return svg;
	
	
}


function randomQuizzIsItFunction()
{
	var minx=0,maxx=400,miny=0,maxy=400;
	var svg='<svg viewBox="'+minx+' '+miny+' '+maxx+' '+maxy+'" preserveAspectRatio="xMidYMid meet">';
	
	svg+=svgdoAxis(minx,maxx,miny,maxy,5);
	
	if (Math.random()>0.5)
	{
		da=myRandomLang.yes;
		a=[true,false];
		svg+=drawFunction(makerandommultiple(0,4,1),minx,maxx,miny,maxy,5)[0];

	}
	else 
	{
		da=myRandomLang.no;
		a=[false,true];
		svg+=drawNotFunction(makerandommultiple(0,3,1),minx,maxx,miny,maxy,5);
	}
	
	svg+='</svg>';
		
	return makeUnQCMQuestionSvg("qu","",[myRandomLang.yes,  myRandomLang.no ],a,myRandomLang.badluck,myRandomLang.welldone,"",da,svg);
}

function randomQuizzFunctionImage()
{
	var minx=0,maxx=400,miny=0,maxy=400;
	var svg='<svg viewBox="'+minx+' '+miny+' '+maxx+' '+maxy+'" preserveAspectRatio="xMidYMid meet">';
	
	svg+=svgdoAxis(minx,maxx,miny,maxy,5);
	
	result=drawFunction(makerandommultiple(0,2,1),minx,maxx,miny,maxy,5);
	svg+=result[0];

	return  makeUnFieldQuestionSvg(false,5,myRandomLang.findimage+result[2][0],"",result[1],result[1],myRandomLang.findimage+result[2][0],result[1],svg)

}

// A faire!!!

function randomQuizzConvexe()
{
	var type=makerandommultiple(0,2,1); // 0 pour le graphe de f, 1 pour celui de f', 2 pour celui de f''
	var typef=makerandommultiple(0,1,1); // 0 second degré, 1 degré 2
	var minx=0,maxx=400,miny=0,maxy=400;
	var svg='<path d="';
	var midx=(maxx-minx)/2,midy=(maxy-miny)/2,largx=maxx-minx-20,largy=maxy-miny-20;
	var pas=0.1;	
	var a1,a2,a3;
	var ans;
	
	// Fonction de degré 3
				
	a1=makerandommultiple(-3,3,1);
	a2=makeexclusiverandommultiple(-3,3,1,[a1]);
	a3=makerandommultiple(-3,3,1,[a1,a2]);
	switch (type)
	{
		case 0:
			break;
		case 1:
			ans=[];
			 
			break;
		case 2:
			break;
	}
	
}

function randomQuizzFunctionAncessors()
{
	var minx=0,maxx=400,miny=0,maxy=400;
	var svg='<svg viewBox="'+minx+' '+miny+' '+maxx+' '+maxy+'" preserveAspectRatio="xMidYMid meet">',ans='';
	
	svg+=svgdoAxis(minx,maxx,miny,maxy,5);
	
	result=drawFunction(makerandommultiple(0,2,1),minx,maxx,miny,maxy,5);
	svg+=result[0];
	if (result[2].length==1) ans=result[2][0];
	else
	{
		result[2].sort(function(a, b) {  return a - b; });
		for (i=0;i<result[2].length;i++)
		{
			ans=ans+result[2][i];
			if (i<result[2].length-1) ans=ans+';';
		}
	}
	
	return makeUnFieldQuestionSvg(false,5,myRandomLang.findancessors+result[1]+ " (si plusieurs antécédents, écrivez-les par ordre croissant et séparez les par des ;)","",ans,ans,myRandomLang.findancessors+result[1],ans,svg)
}

function randomQuizzFunctionEquationGr()
{
	var minx=0,maxx=400,miny=0,maxy=400;
	var svg='<svg viewBox="'+minx+' '+miny+' '+maxx+' '+maxy+'" preserveAspectRatio="xMidYMid meet">',ans='';
	
	svg+=svgdoAxis(minx,maxx,miny,maxy,5);
	
	result=drawFunction(makerandommultiple(0,2,1),minx,maxx,miny,maxy,5);
	svg+=result[0];
	if (result[2].length==1) ans=result[2][0];
	else
	{
		result[2].sort(function(a, b) {  return a - b; });
		for (i=0;i<result[2].length;i++)
		{
			ans=ans+result[2][i];
			if (i<result[2].length-1) ans=ans+';';
		}
	}
	var ques="Déterminer graphiquement les solutions de l'équation $f(x)="+result[1]+"$";
	
	return makeUnFieldQuestionSvg(false,10,ques+ " (si plusieurs solutions, écrivez-les par ordre croissant et séparez les par des ;)","",ans,ans,ques,ans,svg)
	
}	

function randomQuizzFunctionInequationGr()
{
	var minx=0,maxx=400,miny=0,maxy=400;
	var svg='<svg viewBox="'+minx+' '+miny+' '+maxx+' '+maxy+'" preserveAspectRatio="xMidYMid meet">',ans='';
	
	svg+=svgdoAxis(minx,maxx,miny,maxy,5);
	
	result=drawFunction(makerandommultiple(0,2,1),minx,maxx,miny,maxy,5);
	svg+=result[0];
	
	ans="$"+result[4]+"$";
	
	return ({
		type: "noanswer",
		text: "Déterminer graphiquement les solutions de l'inéquation $f(x)"+result[3]+result[1]+"$",
		answer: ans,
		svg:svg
		});	
}

function randomQuizzFunctionImAncTab()
{
	var pts=[],ims=[],tab=[],ques;
	
	pts[0]=makerandommultiple(-10,10,1);
	ims[0]=makeexclusiverandommultiple(-10,10,1,pts);
	pts[1]=ims[0];
	ims[1]=makeexclusiverandommultiple(-10,10,1,[ pts[0], ims[0] ]);
	
	for (j=2;j<6;j++)
	{
		pts[j]=makeexclusiverandommultiple(-10,10,1,pts);
		ims[j]=makerandommultiple(-10,10,1);
	}
	
	switch (makerandommultiple(0,3,1))
	{
		case 0:
			ques=pts[0]+myRandomLang.istheimageof+ims[0];
			c=[false,true];
			a=myRandomLang.no;
			break;
		case 1:
			ques=ims[0]+myRandomLang.istheimageof+pts[0];
			c=[true,false];
			a=myRandomLang.yes;
			break;
		case 2:
			ques=pts[0]+myRandomLang.isanancessorof+ims[0];
			c=[true,false];
			a=myRandomLang.yes;
			break;
		case 3:
			ques=ims[0]+myRandomLang.isanancessorof+pts[0];
			c=[false,true];
			a=myRandomLang.no;
			break;	
	}

	for (j=0;j<6;j++)
	{
		tab[j]= [ pts[j], ims[j]];
	}
	tab.sort(function(a, b) {  return (a[0] - b[0]); });
	ques+="$$\\begin{array}{c|c|c|c|c|c|c}x";
	for (j=0;j<6;j++)
	{
		ques+="&"+tab[j][0];
	}
	ques+="\\\\ \\hline f(x)";
	for (j=0;j<6;j++)
	{
		ques+="&"+tab[j][1];
	}	
	ques+="\\end{array}$$";
	
	
	return makeUnQCMQuestion("qu",ques,[myRandomLang.yes,  myRandomLang.no ],c,myRandomLang.badluck,myRandomLang.welldone,ques,a);
	
}

function makeRandomTabVar(nb)
{
	var minx=0,maxx=395,miny=0,maxy=170,depx=45,depy=35,a,u,y,sol,dd;
	var svg='<svg viewBox="'+minx+' '+miny+' '+maxx+' '+maxy+'" preserveAspectRatio="xMidYMid meet">';
	svg+='<defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" /></marker></defs>';
	var xt=[],yt=[];
	
	var premier=makenonzerorandommultiple(-1,1,1);
	ecartx=(maxx-minx-20-depx)/nb;
	a=makerandommultiple(-5,5,1);
	u=makerandommultiple(-9,2,1);
	y=makerandommultiple(a-2,a+2,1);
	sol=0;
	svg+='<line x1='+(depx-5)+' y1=0 x2='+(depx-5)+' y2='+maxy+' stroke="black" stroke-width=1 />';
	svg+='<line x1=0 y1='+(depy-5)+' x2='+maxx+' y2='+(depy-5)+' stroke="black" stroke-width=1 />';
	svg+='<text x=10 y=20>x</text>';
	svg+='<text x=10 y=100>f</text>';
	if (a<0) dd=-4; else dd=1;
	svg+='<text x='+(depx+dd)+' y='+(depy+68+premier*50)+' fill=black>'+a+'</text>';
	if (u<0) dd=-4; else dd=1;
	svg+='<text x='+(depx+dd)+' y=20 fill=black>'+u+'</text>';	
	xt.push(u);
	yt.push(a);
	for (var i=1;i<=nb;i++)
	{
		if (premier>0) 
		{
			b=makerandommultiple(a+1,a+5,1);
			if ( (y>=a) && (y<b)) sol++;
		}
		else
		{
			b=makerandommultiple(a-5,a-1,1);
			if ( (y<=a) && (y>b)) sol++;
		}
		if (a<0) dd=-4; else dd=1;
		if (Math.abs(u)>9) dd=dd-5;
		svg+='<line x1='+(depx+(i-1)*ecartx+17)+' y1=+'+(depy+60+premier*50)+' x2='+(depx+(i*ecartx)-12)+' y2='+(depy+60-premier*50)+' stroke="black" stroke-width=2 marker-end="url(#arrow)"  />';
		svg+='<text x='+(depx+i*ecartx-4+dd)+' y='+(depy+68-premier*50)+' fill=black>'+b+'</text>';
		premier=-premier;
		a=b;
		if (u<0) dd=-4; else dd=1;
		if (Math.abs(u)>9) dd=dd-5;
		u=makerandommultiple(u+1,u+3,1);
		svg+='<text x='+(depx+i*ecartx-4+dd)+' y=20 fill=black>'+u+'</text>';	
		xt.push(u);	
		yt.push(a);		
	}
	if (y==a) sol++;  
	
	return [svg,sol,y,xt,yt];	
}


function randomQuizzFunctionEquation()
{

	var tv=makeRandomTabVar(makerandommultiple(2,4,1));
	
	
	q=myRandomLang.numberofroots+"$f(x)="+tv[2]+".$";

	return makeUnFieldQuestionSvg(false,5,q,"",tv[1],tv[1],q,tv[1],tv[0]);

}

function randomQuizzFunctionCompare()
{

	var tv=makeRandomTabVar(makerandommultiple(2,4,1));
	
	var x=[0,0],minx=[-1000,-1000],maxx=[1000,1000],inter=[0,0],i,j,a1,a2,ans,cans,xt,yt;
	
	xt=tv[3];
	yt=tv[4];
	x[0]=makerandommultiple(xt[0],xt[xt.length-1],1);
	x[1]=makeexclusiverandommultiple(xt[0],xt[xt.length-1],1,[x[0]]);
	
	for (i=0;i<=1;i++)
	{
		j=1;
		while (x[i]>xt[j]) j++;
		inter[i]=j;
		if (x[i]==xt[j-1]) 
		{
			minx[i]=yt[j-1];
			maxx[i]=yt[j-1];
		}
		else
		{
			if (x[i]==xt[j]) 
			{
				minx[i]=yt[j];
				maxx[i]=yt[j];
			}			      
			else
			{
				minx[i]=Math.min(yt[j-1],yt[j]);
				maxx[i]=Math.max(yt[j-1],yt[j]);
			}
		}
	}
	
	a1="$f("+x[0]+")";
	a2="f("+x[1]+')$';
	ans=[ a1+"\\geq "+a2, a1+"\\leq "+a2, a1+"="+a2, "on ne peut rien dire" ];
	
	if ( (minx[0]==maxx[0]) && (minx[1]==maxx[1]) && (minx[0]==minx[1]) )
	{
		ca=[false,false,true,false];
	}
	else
	{
		if (minx[0]>= maxx[1]) ca=[true,false,false,false];
		else
		{
			if (minx[1]>= maxx[0]) ca=[false,true,false,false];
			else
			{
				if (inter[0]==inter[1])
				{
					if ( (yt[0]<= yt[1]))
					{
						if (x[0]<=x[1]) ca=[false,true,false,false];
						else ca=[true,false,false,false];
					}
					else
					{
						if (x[0]>=x[1]) ca=[false,true,false,false];
						else ca=[true,false,false,false];
					}					
				}
				else ca=[false,false,false,true];
			}	
		}
	}
	
	i=0;
	while (!ca[i]) i++;
	
	return makeUnQCMQuestionSvg("qu","Peut-on comparer "+a1+"$ et $"+a2+"?",ans,ca,myRandomLang.badluck,myRandomLang.welldone,"Peut-on comparer "+a1+"$ et $"+a2+"?",ans[i],tv[0]);
	
}	

function functionPaireImpaire(x,a,b,c,type)
{
	switch (type)
	{
		case 0:
			return a*Math.abs(x)+b;
		case 1:
			return a*x*x*x+b*x;
		case 2:
			return a*x*x+b;
		case 3:
			return 2*c/(a*x*x+b);
		case 4:
			return (a*x*x+b*x+c);
		case 5:
			return Math.atan(a*x);
		case 6:
			return Math.sin(a*x);
		case 7:
			return a*x*x*x+b*x+c;
		case 8:
			return Math.atan(a*x)+b;
		case 9:
			return Math.cos(a*x)+b;
	}
}
	

function randomQuizzFunctionPaireImpaire()
{
	var minx=0,maxx=300,miny=0,maxy=300;
	var svg='<svg viewBox="'+minx+' '+miny+' '+maxx+' '+maxy+'" preserveAspectRatio="xMidYMid meet">',ans='';
	
	svg+=svgdoAxis(minx,maxx,miny,maxy,5);
	var a,b,c,type,nb,pas;
	a=0;b=0;c=0;type=makerandommultiple(0,9,1);nb=5;pas=0.01;
	switch (type)
	{
		case 0:
		case 1:
		case 2:
			while ( (a==0) && (b==0) ) 	
			{
				a=makerandommultiple(-1,1,1);
				b=makerandommultiple(-1,1,1);
			}
			break;
		case 3:
			a=makerandommultiple(1,3,1);
			b=makerandommultiple(1,3,1);
			c=makenonzerorandommultiple(-1,1,1);
			break;
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			a=makenonzerorandommultiple(-1,1,1);
			b=makenonzerorandommultiple(-1,1,1);
			c=makenonzerorandommultiple(-1,1,1);
			break;	
	}			
	x=-nb;
	svg+='<path d="';
	svg+=' M '+coordx(x,minx,maxx,nb)+' '+coordy(functionPaireImpaire(x,a,b,c,type),miny,maxy,nb);
	while (x<nb)
	{
		svg+=' L '+coordx(x,minx,maxx,nb)+' '+coordy(functionPaireImpaire(x,a,b,c,type),miny,maxy,nb);
		x+=pas;
	}
	
	svg+=' " stroke=red stroke-width=1 fill="transparent"/>';
	svg+='</svg>';
	
	switch (type)
	{
		case 0:
		case 2:
		case 3:
		case 9:
			c=[true,false,false];
			break;
			a="Paire";
		case 1:
		case 5:
		case 6:
			c=[false,true,false];
			a="Impaire";
			break;
		case 4:
		case 7:
		case 8:
			c=[false,false,true];
			a="Ni paire, ni impaire";
			break;
	}
			

	return makeUnQCMQuestionSvg("qu","",["Paire",  "Impaire", "Ni l'un ni l'autre" ],c,myRandomLang.badluck,myRandomLang.welldone,"",a,svg);

}

function randomQuizzBelongsCurve()
{
	var t=makerandommultiple(0,2,1),a,b,x,t,f;
	switch (t) 
	{
		case 0:
			a=makenonzerorandommultiple(-2,2,1);
			b=makerandommultiple(-4,4,1);
			x=makerandommultiple(-3,3,1);
			y=a*x+b;
			f=algebra.parse('('+a+')'+'x+('+b+')').toTex();
			break;
		case 1:
			a=makenonzerorandommultiple(-2,2,1);
			b=makerandommultiple(-2,2,1);
			c=makerandommultiple(-2,2,1);
			x=makerandommultiple(-4,4,1);
			y=a*x*x+b*x+c;
			f=algebra.parse('('+a+')'+'x^2+('+b+')x+('+c+')').toTex();
			break;
		case 2:
			a=makenonzerorandommultiple(-2,2,1);
			b=makerandommultiple(-2,2,1);
			c=makerandommultiple(-2,2,1);
			d=makerandommultiple(-2,2,1);
			x=makerandommultiple(-4,4,1);
			y=a*x*x*x+b*x*x+c*x+d;		
			f=algebra.parse('('+a+')'+'x^3+('+b+')x^2+('+c+')x+('+d+')').toTex();
			break;
	}
	t=makerandommultiple(0,2,1);
	switch (t)
	{
		case 0:
			q="("+x+";"+y+")";
			ans=[true,false];
			a=myRandomLang.yes;
			break;
		case 1:
			q="("+	y+";"+x+")";
			if (x==y) 
			{
				ans=[true,false]
				a=myRandomLang.yes;
			}
			else 
			{
				ans=[false,true];
				a=myRandomLang.no;
			}
			break;
		case 2:
			q="("+x+";"+makeexclusiverandommultiple(-10,10,1,[y])+")";
			ans=[false,true];
			a=myRandomLang.no;
			break;
	}
	var ques=myRandomLang.thepoint+q+myRandomLang.belongstothecurve+f+"$?";
	return makeUnQCMQuestion("qu",ques,[myRandomLang.yes,  myRandomLang.no ],ans,myRandomLang.badluck,myRandomLang.welldone,ques,a);
		
}

function randomQuizzAffineCoeff()
{
	var m=makenonzerorandommultiple(-2,4,1);
	var p=makenonzerorandommultiple(-5,5,1);
	var x1=makerandommultiple(-3,3,1);
	var x2=makeexclusiverandommultiple(-3,3,1,[x1]);
	var q,a,ta;
	var t=makerandommultiple(0,1,1);
	while (!myQuizz.choicesint[t]) t=makerandommultiple(0,1,1);
	if (t==1)
	{
		q="Soit $f$ la fonction affine définie par $f(x)="+algebra.toTex(algebra.parse(m+"x"))+"+p$ et vérifiant $f("+x1+")="+(m*x1+p)+"$. Que vaut $p$?";
		a=p;
		ta="$p="+p+"$";
	}
	else
	{
		q="Soit $f$ la fonction affine $f(x)=mx+p$ vérifiant $$f("+x1+")="+(m*x1+p)+"\\textrm{ et }f("+x2+")="+(m*x2+p)+".$$ Que vaut $m$?";
		a=m;
		ta="$m="+m+"$";
	}
	return makeUnFieldQuestion(false,5,q,"",a,ta,q,ta);
}

function randomQuizzAffineAntIm()
{
	var m=makenonzerorandommultiple(-2,4,1);
	var p=makenonzerorandommultiple(-5,5,1);
	var x=makerandommultiple(-3,3,1);
	var y=m*x+p;
	var q,a,ta;
	var t=makerandommultiple(0,1,1);
	while (!myQuizz.choicesint[t]) t=makerandommultiple(0,1,1);
	
	if (t==1)
	{
		q="Soit $f$ la fonction définie par $f(x)="+algebra.toTex(algebra.parse(m+"x+("+p+")"))+".$ Quelle est l'image de $"+x+"$ par $f$?";
		a=y;
		ta="L'image de $"+x+"$ par $f$ est $"+y+"$";
	}
	else
	{
	q="Soit $f$ la fonction définie par $f(x)="+algebra.toTex(algebra.parse(m+"x+("+p+")"))+".$ Quel est l'antécédent de $"+y+"$ par $f$?";
		a=x;
		ta="L'antécédent de $"+y+"$ par $f$ est $"+x+"$";
	}
	return makeUnFieldQuestion(false,5,q,"",a,ta,q,ta);
}

function randomQuizzAffineSigne()
{
	var m=makenonzerorandommultiple(-4,4,1);
	var p=makenonzerorandommultiple(-5,5,1);
	var func=algebra.toTex(algebra.parse(m+"x+("+p+")"));
	var q="Compléter le tableau de signes suivant.";
	q=q+"$$\\begin{array}{c|ccccc} x&-\\infty&&\\color{red}{???}&&+\\infty\\\\ \\hline \\\\ \\textrm{signe de }"+func+"&&\\color{blue}{???}&0&\\  \\color{green}{???}&\\end{array}$$";
	r=algebra.toTex(algebra.parse("-("+p+")/("+m+")"));
	rt=algebra.parse("-("+p+")/("+m+")").toString();
	if (m>0) 
	{
		anst="$$\\begin{array}{c|ccccc} x&-\\infty&&\\color{red}{"+r+"}&&+\\infty\\\\ \\hline \\\\ \\textrm{signe de }"+func+"&&\\color{blue}{-}&0&\\  \\color{green}{+}&\\end{array}$$";
		ans=[rt,"-","+"];
	}
	else
	{
		anst="$$\\begin{array}{c|ccccc} x&-\\infty&&\\color{red}{"+r+"}&&+\\infty\\\\ \\hline \\\\ \\textrm{signe de }"+func+"&&\\color{blue}{+}&0&\\  \\color{green}{-}&\\end{array}$$";
		ans=[rt,"+","-"];
	}
	
	return makeUnFieldsQuestion([true,true,true],[true,true,true],[4,4,4],[q+"$\\color{red}{???=}$ ","$\\color{blue}{???=}$ ","$\\color{green}{???=}$ "],["","",""],ans,anst,q,anst);		

}

function randomQuizzFunctionUsualInequalityXtoXtwo()
{
	var type=makerandommultiple(0,1,1),stype,a=makerandommultiple(1,5,1),b,q,ans;
	if (type==1)
	{
		q1="Que peut-on déduire sur $x^2$ sachant que ";
		stype=makerandommultiple(0,7,1);
		switch (stype)
		{
			case 0:
				q="x&gt;"+a;
				ans="x^2&gt;"+(a*a);
				break;
			case 1:
				q="x\\geq ;"+a;
				ans="x^2\\geq "+(a*a);
				break;
			case 2:
				q="x&lt;"+a;
				ans="x^2\\geq 0";
				break;
			case 3:
				q="x\\leq "+a;
				ans="x^2\\geq 0";
				break;
			case 4:
				q="x&gt;-"+a;
				ans="x^2\\geq 0";
				break;
			case 5:
				q="x\\geq -"+a;
				ans="x^2\\geq 0";
				break;
			case 6:
				q="x&lt;-"+a;
				ans="x^2&gt;"+(a*a);
				break;
			case 7:
				q="x\\leq -"+a;
				ans="x^2\\geq"+(a*a);
				break;	
		}
	}
	else
	{
		stype=makerandommultiple(0,2,1);
		q1="Quel est le meilleur encadrement de $x^2$ sachant que ";
		switch (stype)
		{
			case 0:
				b=makerandommultiple(-5,-1,1);
				q=b+"\\leq x\\leq  "+a;
				ans="0\\leq x^2\\leq "+Math.max((a*a),(b*b));
				break;
			case 1:
				b=makerandommultiple(a+1,Math.max(5,a+1),1);
				q=a+"\\leq x\\leq"+b;
				ans=(a*a)+"\\leq x^2\\leq "+(b*b);
				break;
			case 2:
				b=makerandommultiple(a+1,Math.max(5,a+1),1);
				q="-"+b+"\\leq x\\leq -"+a;
				ans=(a*a)+"\\leq x^2\\leq "+(b*b);
				break;
		}
	}
	ans="$$"+q+"\\implies "+ans+"$$";
	
	q=q1+'$'+q+'?$';
	return ({
		type: "noanswer",
		text: q,
		answer: ans,
		})        
}

function randomQuizzFunctionUsualInequalityXtwotoX()
{
	var type=makerandommultiple(0,1,1),stype,a=makerandommultiple(1,5,1),b,q,ans;
	if (type==1)
	{
		stype=makerandommultiple(0,7,1);
		switch (stype)
		{
			case 0:
				q="x^2&gt;"+(a*a);
				ans="]-\\infty;-"+a+"[\\cup]"+a+";+\\infty[";
				break;
			case 1:
				q="x^2\\geq "+(a*a);
				ans="]-\\infty;-"+a+"]\\cup["+a+";+\\infty[";
				break;
			case 2:
				q="x^2&lt;"+(a*a);
				ans="]-"+a+";"+a+"[";
				break;
			case 3:
				q="x^2\\leq "+(a*a);
				ans="[-"+a+";"+a+"]";
				break;
			case 4:
				q="x^2&gt;-"+(a*a);
				ans="\\mathbb R";
				break;
			case 5:
				q="x^2\\geq -"+(a*a);
				ans="\\mathbb R";
				break;
			case 6:
				q="x^2&lt;-"+(a*a);
				ans="\\varnothing";
				break;
			case 7:
				q="x^2\\leq -"+(a*a);
				ans="\\varnothing";
				break;
		}
	}
	else
	{
		stype=makerandommultiple(0,4,1);
		switch (stype)
		{
			case 0:
				b=makerandommultiple(1,5,1);
				q="-"+(b*b)+"\\leq x^2\\leq  "+(a*a);
				ans="[-"+a+";"+a+"]";
				break;
			case 1:
				b=makerandommultiple(a+1,Math.max(5,a+1),1);
				q=(a*a)+"\\leq x^2\\leq"+(b*b);
				ans="[-"+b+";-"+a+"]\\cup ["+a+";"+b+"]";
				break;
			case 2:
				b=makerandommultiple(a+1,Math.max(5,a+1),1);
				q="-"+(b*b)+"\\leq x\\leq -"+(a*a);
				ans="\\varnothing";
				break;
			case 3:
				b=makerandommultiple(a+1,Math.max(5,a+1),1);
				q=(a*a)+"&lt; x^2\\leq"+(b*b);
				ans="[-"+b+";-"+a+"[\\cup ]"+a+";"+b+"]";
				break;	
			case 4:
				b=makerandommultiple(1,5,1);
				q="-"+(b*b)+"&lt; x^2\\leq  "+(a*a);
				ans="[-"+a+";"+a+"]";
				break;				
		}
	}
	ans="L'ensemble des $x$ vérifiant $"+q+"$ est $\\mathcal S="+ans+"$";
	
	q="Quel est l'ensemble des $x$ vérifiant $"+q+"?$";
	return ({
		type: "noanswer",
		text: q,
		answer: ans,
		})        
}

function randomQuizzFunctionUsualInequalityXtoXthree()
{
	var type=makerandommultiple(0,1,1),stype,a=makerandommultiple(1,4,1),b,q,ans;
	if (type==1)
	{
		q1="Que peut-on déduire sur $x^3$ sachant que ";
		stype=makerandommultiple(0,7,1);
		switch (stype)
		{
			case 0:
				q="x&gt;"+a;
				ans="x^3&gt;"+(a*a*a);
				break;
			case 1:
				q="x\\geq "+a;
				ans="x^3\\geq "+(a*a*a);
				break;
			case 2:
				q="x&lt;"+a;
				ans="x^3&lt;"+(a*a*a);
				break;
			case 3:
				q="x\\leq "+a;
				ans="x^3\\leq "+(a*a*a);
				break;
			case 4:
				q="x&gt;-"+a;
				ans="x^3&gt;-"+(a*a*a);
				break;
			case 5:
				q="x\\geq -"+a;
				ans="x^3\\geq -"+(a*a*a);
				break;
			case 6:
				q="x&lt;-"+a;
				ans="x^3&lt;-"+(a*a*a);
				break;
			case 7:
				q="x\\leq -"+a;
				ans="x^3\\leq-"+(a*a*a);
				break;	
		}
	}
	else
	{
		q1="Quel est le meilleur encadrement de $x^3$ sachant que ";
		stype=makerandommultiple(0,2,1);
		switch (stype)
		{
			case 0:
				b=makerandommultiple(-5,-1,1);
				q=b+"\\leq x\\leq  "+a;
				ans=(b*b*b)+"\\leq x^3\\leq "+(a*a*a);
				break;
			case 1:
				b=makerandommultiple(a+1,Math.max(5,a+1),1);
				q=a+"\\leq x\\leq"+b;
				ans=(a*a*a)+"\\leq x^3\\leq "+(b*b*b);
				break;
			case 2:
				b=makerandommultiple(a+1,Math.max(5,a+1),1);
				q="-"+b+"\\leq x\\leq -"+a;
				ans="-"+(b*b*b)+"\\leq x^3\\leq -"+(a*a*a);
				break;
		}
	}
	ans="$$"+q+"\\implies "+ans+"$$";
	
	q=q1+'$'+q+'?$';
	return ({
		type: "noanswer",
		text: q,
		answer: ans,
		})        
}

function randomQuizzFunctionUsualInequalityXthreetoX()
{
	var type=makerandommultiple(0,1,1),stype,a=makerandommultiple(1,4,1),b,q,ans;
	if (type==1)
	{
		stype=makerandommultiple(0,7,1);
		switch (stype)
		{
			case 0:
				q="x^3&gt;"+(a*a*a);
				ans="]"+a+";+\\infty[";
				break;
			case 1:
				q="x^3\\geq "+(a*a*a);
				ans="["+a+";+\\infty[";
				break;
			case 2:
				q="x^3&lt;"+(a*a*a);
				ans="]-\\infty;"+a+"[";
				break;
			case 3:
				q="x^3\\leq "+(a*a*a);
				ans="]-\\infty;"+a+"]";
				break;
			case 4:
				q="x^3&gt;-"+(a*a*a);
				ans="]-"+a+";+\\infty[";
				break;
			case 5:
				q="x^3\\geq -"+(a*a*a);
				ans="[-"+a+";+\\infty[";
				break;
			case 6:
				q="x^3&lt;-"+(a*a*a);
				ans="]-\\infty;-"+a+"[";
				break;
			case 7:
				q="x^3\\leq -"+(a*a*a);
				ans="]-\\infty;-"+a+"]";
				break;
		}
	}
	else
	{
		stype=makerandommultiple(0,4,1);
		switch (stype)
		{
			case 0:
				b=makerandommultiple(1,5,1);
				q="-"+(b*b*b)+"\\leq x^3\\leq  "+(a*a*a);
				ans="[-"+b+";"+a+"]";
				break;
			case 1:
				b=makerandommultiple(a+1,Math.max(5,a+1),1);
				q=(a*a*a)+"\\leq x^3\\leq"+(b*b*b);
				ans="["+a+";"+b+"]";
				break;
			case 2:
				b=makerandommultiple(a+1,Math.max(5,a+1),1);
				q="-"+(b*b*b)+"\\leq x\\leq -"+(a*a*a);
				ans="[-"+b+";-"+a+"]";
				break;
			case 3:
				b=makerandommultiple(a+1,Math.max(5,a+1),1);
				q=(a*a*a)+"&lt; x^3\\leq"+(b*b*b);
				ans="]"+a+";"+b+"]";
				break;	
			case 4:
				b=makerandommultiple(1,5,1);
				q="-"+(b*b*b)+"\\leq  x^3&lt;  "+(a*a*a);
				ans="[-"+b+";"+a+"[";
				break;				
		}
	}
	ans="L'ensemble des $x$ vérifiant $"+q+"$ est $\\mathcal S="+ans+"$";
	
	q="Quel est l'ensemble des $x$ vérifiant $"+q+"?$";
	return ({
		type: "noanswer",
		text: q,
		answer: ans,
		})        
}

function randomQuizzFunctionUsualInequalityXtooneoverX()
{
	var type=makerandommultiple(0,1,1),stype,num,den,a,b,atex,btex,i,q,ans;
	var addterm=["1","1/2","1/3","3/2"];
	num=makerandommultiple(2,9,1);
	den=makerandommultiple(1,5,1);
	i=addterm[makerandommultiple(0,3,1)]
	a=algebra.parse(num+"/"+den);
	ainv=algebra.parse(den+"/"+num);
	b=algebra.parse(num+"/"+den+"+"+i);
	binv=algebra.parse("1/("+num+"/"+den+"+"+i+")");
	atex=a.toTex();
	btex=b.toTex();
	ainvtex=ainv.toTex();
	binvtex=binv.toTex();
	if (type==1)
	{
		stype=makerandommultiple(0,3,1);
		switch (stype)
		{
			case 0:
				q="x&gt;"+atex;
				ans="0&lt;\\frac 1x&lt;"+ainvtex;
				break;
			case 1:
				q="x\\geq "+atex;
				ans="0&lt; \\frac 1x \\leq "+ainvtex;
				break;
			case 2:
				q="x&lt; -"+atex;
				ans="-"+ainvtex+"&lt; \\frac 1x &lt; 0";
				break;
			case 3:
				q="x\\leq -"+atex;
				ans="-"+ainvtex+"\\leq \\frac 1x &lt; 0";
				break;
		}
	}
	else
	{
		stype=makerandommultiple(0,7,1);
		switch (stype)
		{
			case 0:
				q=atex+"\\leq x\\leq  "+btex;
				ans=binvtex+"\\leq \\frac 1x\\leq "+ainvtex;
				break;
			case 1:
				q="-"+btex+"\\leq x\\leq  -"+atex;
				ans="-"+ainvtex+"\\leq \\frac 1x\\leq -"+binvtex;
				break;
			case 2:
				q=atex+"&lt; x\\leq  "+btex;
				ans=binvtex+"\\leq \\frac 1x&lt; "+ainvtex;
				break;
			case 3:
				q="-"+btex+"&lt; x\\leq  -"+atex;
				ans="-"+ainvtex+"\\leq \\frac 1x&lt; -"+binvtex;
				break;		
			case 4:
				q=atex+"\\leq x&lt;  "+btex;
				ans=binvtex+"&lt; \\frac 1x\\leq "+ainvtex;
				break;
			case 5:
				q="-"+btex+"\\leq x&lt;  -"+atex;
				ans="-"+ainvtex+"&lt; \\frac 1x\\leq -"+binvtex;
				break;	
			case 6:
				q=atex+"&lt; x&lt;  "+btex;
				ans=binvtex+"&lt; \\frac 1x&lt; "+ainvtex;
				break;
			case 7:
				q="-"+btex+"&lt; x&lt;  -"+atex;
				ans="-"+ainvtex+"&lt; \\frac 1x&lt; -"+binvtex;
				break;					
		}
	}
	ans="$$"+q+"\\implies "+ans+"$$";
	
	q='Quel est le meilleur encadrement de $1/x$ sachant que $'+q+'?$';
	return ({
		type: "noanswer",
		text: q,
		answer: ans,
		})        
}

function randomQuizzFunctionUsualInequalityoneoverXtoX()
{
	var type=makerandommultiple(0,1,1),stype,num,den,a,b,atex,btex,i,q,ans;
	var addterm=["1","1/2","1/3","3/2"];
	num=makerandommultiple(2,9,1);
	den=makerandommultiple(1,5,1);
	i=addterm[makerandommultiple(0,3,1)]
	a=algebra.parse(num+"/"+den);
	ainv=algebra.parse(den+"/"+num);
	b=algebra.parse(num+"/"+den+"+"+i);
	binv=algebra.parse("1/("+num+"/"+den+"+"+i+")");
	atex=a.toTex();
	btex=b.toTex();
	ainvtex=ainv.toTex();
	binvtex=binv.toTex();
	if (type==1)
	{
		stype=makerandommultiple(0,7,1);
		switch (stype)
		{
			case 0:
				q="\\frac 1x&lt;"+atex;
				ans="]-\\infty;0[\\cup"+"]"+ainvtex+";+\\infty[";
				break;
			case 1:
				q="\\frac 1x \\leq "+atex;
				ans="]-\\infty;0[\\cup"+"["+ainvtex+";+\\infty[";
				break;
			case 2:
				q="\\frac 1x&gt;"+atex;
				ans="]0;"+ainvtex+"[";
				break;
			case 3:
				q="\\frac 1x \\geq "+atex;
				ans="]0;"+ainvtex+"]";
				break;
			case 4:
				q="\\frac 1x&lt;-"+atex;
				ans="]-"+ainvtex+";0[";
				break;
			case 5:
				q="\\frac 1x \\leq -"+atex;
				ans="[-"+ainvtex+";0[";
				break;
			case 6:
				q="\\frac 1x&gt; -"+atex;
				ans="]-\\infty;-"+ainvtex+"[\\cup]0;+\\infty[";
				break;
			case 7:
				q="\\frac 1x \\geq -"+atex;
				ans="]-\\infty;-"+ainvtex+"]\\cup]0;+\\infty[";
				break;				
		}
	}
	else
	{
		stype=makerandommultiple(0,7,1);
		switch (stype)
		{
			case 0:
				ans="["+atex+";"+btex+"]";
				q=binvtex+"\\leq \\frac 1x\\leq "+ainvtex;
				break;
			case 1:
				ans="[-"+btex+";-"+atex+"]";
				q="-"+ainvtex+"\\leq \\frac 1x\\leq -"+binvtex;
				break;
			case 2:
				ans="]"+atex+";"+btex+"]";
				q=binvtex+"\\leq \\frac 1x&lt; "+ainvtex;
				break;
			case 3:
				ans="]-"+btex+";-"+atex+"]";
				q="-"+ainvtex+"\\leq \\frac 1x&lt; -"+binvtex;
				break;		
			case 4:
				ans="["+atex+";"+btex+"[";
				q=binvtex+"&lt; \\frac 1x\\leq "+ainvtex;
				break;
			case 5:
				ans="[-"+btex+";-"+atex+"[";
				q="-"+ainvtex+"&lt; \\frac 1x\\leq -"+binvtex;
				break;	
			case 6:
				ans="]"+atex+";"+btex+"[";
				q=binvtex+"&lt; \\frac 1x&lt; "+ainvtex;
				break;
			case 7:
				ans="]-"+btex+";-"+atex+"[";
				q="-"+ainvtex+"&lt; \\frac 1x&lt; -"+binvtex;
				break;					
		}
	}
	ans="L'ensemble des $x$ vérifiant $"+q+"$ est $\\mathcal S="+ans+"$";
	
	q="Quel est l'ensemble des $x$ vérifiant $"+q+"?$";
	return ({
		type: "noanswer",
		text: q,
		answer: ans,
		})        
}


function randomQuizzFunctionUsualInequality()
{
	var type=makerandommultiple(0,5,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,5,1);
	
	switch (type)
	{
		case 0: return randomQuizzFunctionUsualInequalityXtoXtwo();
		case 1: return randomQuizzFunctionUsualInequalityXtwotoX();
		case 2: return randomQuizzFunctionUsualInequalityXtoXthree();
		case 3: return randomQuizzFunctionUsualInequalityXthreetoX();
		case 4: return randomQuizzFunctionUsualInequalityXtooneoverX();
		case 5: return randomQuizzFunctionUsualInequalityoneoverXtoX();
	}
}

// Second degré

function randomQuizzSecDegreMaximum()
{
	var a=makenonzerorandommultiple(-5,5,1);
	var b=makerandommultiple(-5,5,1);
	var c=makerandommultiple(-5,5,1);
	var alpha=algebra.parse('-('+b+')/(2*('+a+'))');
	var beta=algebra.parse(c+'-('+b+')*('+b+')/(4*('+a+'))');
	var pol=algebra.parse(a+"x^2+("+b+")x+("+c+")");
	var m;
	var q=[];
	var r=[];
	var af=[];
	var inl=[];
	var lb=[];
	var fw=[];
	
	if (a>0) m="minimum"; else m="maximum";


	qf1="Soit $f$ la fonction définie par $$f(x)="+pol.toTex()+".$$";
	anst="";
	qt="";
	
	if (myQuizz.choicesint[0]==true)
	{
		qf1+="En quel point $f$ atteint-elle son "+m+"? ";
		qt+=qf1;

		q.push(qf1);
		qf1="";
		r.push(alpha.toString());
		af.push("");
		inl.push(false);
		lb.push(true);
		fw.push(10);
		anst+="Le "+m+" de $f$ est atteint en $"+alpha.toTex()+".$ ";
	}
	
	if (myQuizz.choicesint[1]==true)
	{
		qf1+="Quelle est la valeur du "+m+" de $f$?";
		q.push(qf1);
		r.push(beta.toString());
		af.push("");
		inl.push(false);
		lb.push(true);
		fw.push(10);
		qt+=qf1;
		anst+="Le "+m+" de $f$ vaut $"+beta.toTex()+".$";
	}

	return makeUnFieldsQuestion(inl,lb,fw,q,af,r,anst,qt,anst);	
	
}	

	

// Intervalles

function randomQuizzIntIneg(type)
{
	var a=makerandommultiple(-10,6,1),b=makerandommultiple(a+1,a+6,1);
	switch (makerandommultiple(0,7,1))
	{
		case 0:      
			q='x&gt'+a;
			r='x\\in ]'+a+';+\\infty[';
			break;
		case 1:      
			q='x\\geq '+a;
			r='x\\in['+a+';+\\infty[';
			break;
		case 2:      
			q='x&lt'+a;
			r='x\\in]-\\infty;'+a+'[';
			break;
		case 3:      
			q='x\\leq '+a;
			r='x\\in]-\\infty;'+a+']';
			break;
		case 4:      
			q=a+'&lt;x&lt'+b;
			r='x\\in]'+a+';'+b+'[';
			break;
		case 5:      
			q=a+'\\leq x\\leq '+b;
			r='x\\in['+a+';'+b+']';
			break;
		case 6:      
			q=a+'&lt;x\\leq'+b;
			r='x\\in]'+a+';'+b+']';
			break;
		case 7:      
			q=a+'\\leq x&lt'+b;
			r='x\\in['+a+';'+b+'[';
			break;
	}	

	if (type==0)
	{
		q1='$'+q+'$';
		a1=q1+myRandomLang.trans+'$\\color{red}{'+r+'}$';
	}
	else
	{
		q1='$'+r+'$';
		a1=q1+myRandomLang.trans+'$\\color{red}{'+q+'}$';
	}
	return ({
		type: "noanswer",
		text: q1,
		answer: a1,
		})
	                                        
}

function randomQuizzInInt()
{
	a1=b1=a2=b2=1;
	while (Math.abs((a1/b1)-(a2/b2))<1)
	{
		a1=makerandommultiple(-10,10,1);
		a2=makerandommultiple(-10,10,1);
		if (myQuizz.level>0)
		{
			b1=makenonzerorandommultiple(1,10,1);
			b2=makenonzerorandommultiple(1,10,1);	
		}
	}
	if ( (a1/b1)>(a2/b2))
	{
		c=a1;
		d=b1;
		a1=a2;
		b1=b2;
		a2=c;
		b2=d;
	}
	type=makerandommultiple(0,3,1);
	a3=makerandommultiple(-10,10,1);
	b3=1;
	switch (type)
	{
		case 0:
			while ( (a3/b3)>(a1/b1))
			{
				a3=makerandommultiple(-10,10,1);
				if (myQuizz.level>0)
				{
					b3=makenonzerorandommultiple(1,10,1);
				}
			}
			break;
		case 1:
			while ( (a3/b3)<(a2/b2))
			{
				a3=makerandommultiple(-10,10,1);
				if (myQuizz.level>0)
				{
					b3=makenonzerorandommultiple(1,10,1);
				}
			}
			break;
		case 2:
			a3=a1;
			b3=b1;
			break;
		case 3:
			a3=a2;
			b3=b2;
			break;
		case 4:
			while ( (a3/b3)<(a1/b1+0.1) || (a3/b3)>(a2/b2-0.1))
			{
				a3=makerandommultiple(-10,10,1);
				if (myQuizz.level>0)
				{
					b3=makenonzerorandommultiple(1,10,1);
				}
			}
			break;	
	}
	x=algebra.parse(a3+'/'+b3).toTex();
	y1=algebra.parse(a1+'/'+b1).toTex();
	y2=algebra.parse(a2+'/'+b2).toTex();
	xv=a3/b3;
	y1v=a1/b1;
	y2v=a2/b2;
	
	q='$'+x+'\\in';
	r='$'+x+'\\color{red}{';
	switch (makerandommultiple(0,7,1))
	{
		case 0:      
			myint='\\left]'+y1+';+\\infty\\right[';
			rep=(xv>y1v);
			break;
		case 1:      
			myint='\\left['+y1+';+\\infty\\right[';
			rep=(xv>=y1v);
			break;
		case 2:      
			myint='\\left]-\\infty;'+y1+'\\right[';
			rep=(xv<y1v);
			break;
		case 3:      
			myint='\\left]-\\infty;'+y1+'\\right]';
			rep=(xv<=y1v);
			break;
		case 4:      
			myint='\\left]'+y1+';'+y2+'\\right[';
			rep= ( (xv>y1v) && (xv<y2v) );
			break;
		case 5:      
			myint='\\left['+y1+';'+y2+'\\right]';
			rep= ( (xv>=y1v) && (xv<=y2v) );
			break;
		case 6:      
			myint='\\left]'+y1+';'+y2+'\\right]';
			rep= ( (xv>y1v) && (xv<=y2v) );
			break;
		case 7:      
			myint='\\left['+y1+';'+y2+'\\right[';
			rep= ( (xv>=y1v) && (xv<y2v) );
			break;
	}
	q=q+myint+'?$';
	if (rep)
	{
		r+='\\in}'+myint+'$';
		ans=[true, false];
	}
	else
	{
		r+='\\notin}'+myint+'$';
		ans=[false,true];
	}	
	
	return makeUnQCMQuestion('qu',q,[myRandomLang.yes,  myRandomLang.no ],ans,myRandomLang.badluck,myRandomLang.welldone,q,r);
}

function randomQuizzAbstoInt()
{
	var a=makenonzerorandommultiple(-10,10,1),b=makerandommultiple(1,5,1),s=["\\leq","&lt;"],c=["[","]"], t=makerandommultiple(0,1,1),a1=makeexclusiverandommultiple(-10,10,1,[a]);
	q=myRandomLang.solve+" $ |x";
	if (a<0) q=q+"+"+(-a); else q=q+"-"+a;
	q=q+'|'
	q1= '|x';
	if (a1<0) q1=q1+"+"+(-a1); else q1=q1+"-"+a1;
	q1=q1+'|'
	switch (myQuizz.level)
	{
		case 0:
			q=q+s[t]+b+"$";
			ans=c[t]+(a-b)+";"+(a+b)+c[(t+1)%2];
			break;
		case 1:
			q=q+s[t]+q1+"$";
			m=formattexnumber((a+a1)/2,myQuizz.language);
			if (a<a1) ans=']-\\infty;'+m+c[(t+1)%2];
			else ans=c[t]+m+";+\\infty[";
			break;
	}
		
	return ({
			type: "noanswer",
			text: q,
			answer: "$"+ans+"$"
	})	
}

function randomQuizzAbsEq()
{
	var a=makenonzerorandommultiple(-10,10,1),b=makerandommultiple(1,5,1),a1=makeexclusiverandommultiple(-10,10,1,[a]);
	q=myRandomLang.solve+" $ |x";
	if (a<0) q=q+"+"+(-a); else q=q+"-"+a;
	q=q+'|='
	q1= '|x';
	if (a1<0) q1=q1+"+"+(-a1); else q1=q1+"-"+a1;
	q1=q1+'|'
	switch (myQuizz.level)
	{
		case 0:
			q=q+b+"$";
			ans="\\{"+(a-b)+";"+(a+b)+"\\}";
			break;
		case 1:
			q=q+q1+"$";
			m=formattexnumber((a+a1)/2,myQuizz.language);
			ans="\\{"+m+"\\}";
			break;
	}
	return ({
			type: "noanswer",
			text: q,
			answer: "$"+ans+"$"
	})		
}

function randomQuizzAbsFromInt()
{
	var a=makenonzerorandommultiple(-10,10,1),
	  b=makerandommultiple(1,5,1),
	  s=["\\leq","&lt;"],c=["[","]"],
	  sf=['<=','<'], t=makerandommultiple(0,1,1),a1=makeexclusiverandommultiple(-10,10,1,[a]);
	q=" $ |x";
	qf="|x";
	if (a<0) 
	{
		q=q+"+"+(-a);
		qf=qf+"+"+(-a);
	}
	else
	{
		q=q+"-"+a;
		qf=qf+"-"+a;
	}
	q=q+'|'+s[t]+b+"$";
	qf=qf+'|'+sf[t]+b;
	ans=c[t]+(a-b)+";"+(a+b)+c[(t+1)%2];

	return makeUnFieldQuestion(false,20,myRandomLang.writetoabs+" $"+ans+"$.","",qf,q,myRandomLang.writetoabs+" $"+ans+"$.",q);

// (inlineField,fieldWidth,beforeField,afterField,correctAnswer,badAnswer,unfieldquestion,unfieldanswer)

//	return ({
//			type: "noanswer",
//			text: myRandomLang.writetoabs+" $"+ans+"$.",
//			answer: q
//	})		
}

function randomQuizzAbsWithout()
{
	var type=makerandommultiple(-2,4,1);
	switch (type)
	{
		case -2:
		case -1:
			a=makerandommultiple(-10,10,1);
			q=a;
			ans=Math.abs(a);
			break;
		case 0:
		case 1:
			a=1;
			b=1;
			while ( (a%b)==0)
			{
				a=makenonzerorandommultiple(-10,10,1);
				b=makenonzerorandommultiple(-10,10,1);
			}
			q=algebra.parse('('+a+')/('+b+')').toTex();
			if ((a/b)>0) ans=q; else ans=algebra.parse('(-1)*('+a+')/('+b+')').toTex();
			break;
		case 2:
			a=makerandommultiple(-15,-10,1);
			q='10^{'+a+'}';
			ans=q;
			break;
		case 3:
			a=new Big(makenonzerorandommultiple(-100,100,1));
			a=a.div(10);
			b=a.abs();
			q=formattexnumber(a,myQuizz.language);
			ans=formattexnumber(b,myQuizz.language);
			break;
		case 4:
			a=makerandommultiple(2,3,1);
			b=makeexclusiverandommultiple(1,5,1,[2]);
			if (Math.random()>0.5)
			{
				q='\\sqrt{'+a+'}-'+b;
				if ((Math.sqrt(a)-b)<0) ans=b+'-\\sqrt{'+a+'}';
				else ans=q;
			}
			else
			{
				q=b+'-\\sqrt{'+a+'}';
				if ((Math.sqrt(a)-b)<0) ans=q;
				else ans='\\sqrt{'+a+'}-'+b;
			}
			break;
	}
	
	return ({
			type: "noanswer",
			text: myRandomLang.simplify+" $\\left|"+q+"\\right|$.",
			answer: "$\\left|"+q+"\\right|="+ans+"$"
	})	
}

// SERIE ENTIERE

function randomQuizzIntConv()
{
	var type=makerandommultiple(0,5,1),a=makerandommultiple(-5,5,1),b=makenonzerorandommultiple(-5,5,1);
	
	if (a==0) u="z"; 
	else if (a>0) u="(z-"+a+")";
		else u="(z+"+(-a)+")";
		
	
	switch (type)
	{
		case 0:
			t=u+"^n";
			if (b==1) t=t;
			else if (b>0) t=b+'^n'+t;
				 else t='('+b+')^n'+t;
			b=Math.abs(b);
			ans="$\\left]"+a+algebra.toTex(algebra.parse('-1/('+b+')'))+';'+a+'+'+	algebra.toTex(algebra.parse('1/('+b+')'))+"\\right[=\\color{red}{\\left]"+algebra.toTex(algebra.parse('('+a+")-1/("+b+')'))+";"+algebra.toTex(algebra.parse('('+a+")+1/("+b+')'))+"\\right[}$";
			break;
		case 1:
			t=u+"^n";
			if (b==1) t=t;
			else if (b>0) t="\\frac{"+t+"}{"+b+"^n}"
				 else t="\\frac{"+t+"}{("+b+')^n}';	
			b=Math.abs(b);
			ans="$\\left]"+a+'-'+b+';'+a+'+'+b+"\\right[=\\color{red}{\\left]"+(a-b)+";"+(a+b)+"\\right[}$";
			break;	
		case 2:
			t=u+"^{2n}";
			if (b==1) t=t;
			else if (b>0) t=b+'^n'+t;
				 else t='('+b+')^n'+t;
			b=Math.abs(b);
			if (a!=0) ans="\\left]"+a+"-\\frac 1{\\sqrt{"+b+"}};"+a+"+\\frac 1{\\sqrt{"+b+"}}\\right[";
			else ans="\\left]-\\frac 1{\\sqrt{"+b+"}};\\frac 1{\\sqrt{"+b+"}}\\right[";
			switch (b)
			{
				case 1:
					ans="$"+ans+"=\\color{red}{\\left]"+(a-1)+";"+(a+1)+"\\right[}$";
					break;
				case 4:
					ans="$"+ans+"=\\color{red}{\\left]"+algebra.toTex(algebra.parse(a+'-1/2'))+";"+algebra.toTex(algebra.parse(a+'+1/2'))+"\\right[}$";
					break;				
				case 2:
				case 3:
				case 5:
					ans="$\\color{red}{"+ans+"}$";
					break;
			}
			break;
		case 3:
			t=u+"^{2n}";
			if (b==1) t=t;
			else if (b>0) t="\\frac{"+t+"}{"+b+"^n}"
				 else t="\\frac{"+t+"}{("+b+')^n}';	
			b=Math.abs(b);
			ans="\\left]"+a+"-\\sqrt{"+b+"};"+a+"+\\sqrt{"+b+"}\\right[";
			switch (b)
			{
				case 1:
					ans="$"+ans+"=\\color{red}{\\left]"+(a-1)+";"+(a+1)+"\\right[}$";
					break;
				case 4:
					ans="$"+ans+"=\\color{red}{\\left]"+(a-2)+";"+(a+2)+"\\right[}$";
					break;				
				case 2:
				case 3:
				case 5:
					ans="$\\color{red}{"+ans+"}$";
					break;
			}
			break;	
		case 4:
			t=u+"^n";
			if (b==1) t=t;
			else if (b>0) t=b+'^n'+t;
				 else t='('+b+')^n'+t;
			t="\\frac{"+t+"}{n!}";
			b=Math.abs(b);
			ans="$\\color{red}{\\mathbb R}$";
			break;
		case 5:
			t=u+"^n";
			if (b==1) t="\\frac{"+t+"}{n!}";
			else if (b>0) t="\\frac{"+t+"}{"+b+"^nn!}"
				 else t="\\frac{"+t+"}{("+b+')^nn!}';	
			b=Math.abs(b);
			ans="$\\color{red}{\\mathbb R}$";
			break;			
	}
	 return ({
		type: "noanswer",
		text: "Quel est l'intervalle ouvert de convergence de la série entière $\\sum_{n\\geq 0}"+t+"$?",
		answer: ans
	})
}

// Matrices

function writematrix(A,n,m)
{
	var ans="\\begin{pmatrix}"
	for (i=0;i<n;i++)
	{
		for (j=0;j<m;j++) 
		{
			ans+= A[i][j];
			if (j<m-1) ans+="&"; else ans+="\\\\ ";
		}
	}
	ans+="\\end{pmatrix}";	
	return ans;
}

function makematrix(n,m)
{
	A=new Array(n);
	var t="\\begin{pmatrix}"
	for (i=0;i<n;i++)
	{
		A[i]=new Array(m);
		for (j=0;j<m;j++) 
		{
			A[i][j]=makerandommultiple(-5,5,1);
			t+= A[i][j];
			if (j<m-1) t+="&"; else t+="\\\\ ";
		}
	}
	t+="\\end{pmatrix}";	
	return [t,A];
}

function makenonzeromatrix(n,m)
{
	A=new Array(n);
	for (i=0;i<n;i++)
	{
		A[i]=new Array(m);
		for (j=0;j<m;j++) 
		{
			A[i][j]=makenonzerorandommultiple(-5,5,1);
		}
	}
	return A;
}
		

function randomQuizzMatrixProduct()
{
	var n=makerandommultiple(1,3,1), p=makerandommultiple(1,3,1), m,q;
	if (n==1) m=makerandommultiple(2,3,1); else m=makerandommultiple(1,3,1);
	if (p==1) q=makerandommultiple(2,3,1); else q=makerandommultiple(1,3,1);
	
	var A=makematrix(n,m);
	var B=makematrix(p,q);
	var answers=["$AB$", "$BA$", "Aucun des deux"];
	
	var ansi=[false,false,true];
	var t=0;
	if (m==p) 
	{
		ansi[0]=true;
		ansi[2]=false;
		t+=1;
	}
	if (q==n)
	{
		ansi[1]=true;
		ansi[2]=false;
		t+=2;
	}
	switch (t)
	{
		case 0:
			ans="Aucun produit n'est possible.";
			break;
		case 1:
			ans="Seul le produit $AB$ est possible.";
			break;
		case 2:
			ans="Seul le produit $BA$ est possible.";
			break;
		case 3:
			ans="Les deux produits sont possibles.";
			break;
	}
	
	q="Soit les matrices $A$ et $B$ suivantes : $$A="+A[0]+",\ B="+B[0]+".$$ Quels sont les produits possibles?";

	return makeUnQCMQuestion('qcm',q,answers,ansi,myRandomLang.badluck+" "+ans,myRandomLang.welldone+" "+ans,q,ans);

}

function randomQuizzMatrixProductCompute()
{
	var n=makerandommultiple(1,3,1),m,p,q;
	if (n==1) m=makerandommultiple(2,3,1); else m=makerandommultiple(1,3,1);
	if (m==1) p=makerandommultiple(2,3,1); else p=makerandommultiple(1,3,1);
	
	var A=makematrix(n,m);
	var B=makematrix(m,p);
	
	var ans="$$\\begin{pmatrix}";
	
	for (i=0;i<n;i++)
	{
		for (j=0;j<p;j++) 
		{
			var a=0;
			for (k=0;k<m;k++)
				a+=A[1][i][k]*B[1][k][j];
			ans+=a;
			if (j<p-1) ans+="&";
		}
		ans+="\\\\";
	}
	ans+="\\end{pmatrix}$$";
	
	q="Soit les matrices $A$ et $B$ suivantes : $$A="+A[0]+",\ B="+B[0]+".$$ Que vaut $AB$?";
	
	 return ({
		type: "noanswer",
		text: q,
		answer: ans
	})	
	
}

function randomQuizzMatrixCoef()
{
	if (Math.random()<0.5)
	{
		var n=makerandommultiple(1,3,1),m,p;
		if (n==1) m=makerandommultiple(2,3,1); else m=makerandommultiple(1,3,1);
		if (m==1) p=makerandommultiple(2,3,1); else p=makerandommultiple(1,3,1);
		var A=makenonzeromatrix(n,m);
		var B=makenonzeromatrix(m,p);
		
		var C="\\begin{pmatrix}";
		
		for (i=0;i<n;i++)
		{
			for (j=0;j<p;j++) 
			{
				var a=0;
				for (k=0;k<m;k++)
					a+=A[i][k]*B[k][j];
				C+=a;
				if (j<p-1) C+="&";
			}
			C+="\\\\";
		}
		C+="\\end{pmatrix}";
		var i,j,ans;
		if (Math.random()<0.5)
		{
			i=makerandommultiple(0,n-1,1);
			j=makerandommultiple(0,m-1,1);
			ans=A[i][j];
			A[i][j]='x';
		}
		else
		{
			i=makerandommultiple(0,m-1,1);
			j=makerandommultiple(0,p-1,1);
			ans=B[i][j];
			B[i][j]='x';
		}
		
		var q="Soit $$A="+writematrix(A,n,m)+",\ B="+writematrix(B,m,p)+"$$ tels que $$AB="+C+".$$ Que vaut $x$?";
	}
	else
	{
		var n=makerandommultiple(1,3,1),m,p,q;
		if (n==1) m=makerandommultiple(2,3,1); else m=makerandommultiple(1,3,1);	
		var lambda=makenonzerorandommultiple(-5,5,1);
		var A=makematrix(n,m);
		var B=makematrix(n,m);
		
		var C="\\begin{pmatrix}";
		
		for (i=0;i<n;i++)
		{
			for (j=0;j<m;j++) 
			{
				C+=lambda*A[1][i][j]+B[1][i][j];
				if (j<m-1) C+="&";
			}
			C+="\\\\";
		}
		C+="\\end{pmatrix}";
		var i,j,ans;
		i=makerandommultiple(0,n-1,1);
		j=makerandommultiple(0,m-1,1);
		ans=A[1][i][j];
		A[1][i][j]='x';
		if (lambda==1) lambda='';
		if (lambda==-1) lambda='-';
		
		var q="Soit $$A="+writematrix(A[1],n,m)+",\ B="+B[0]+"$$ tels que $$"+lambda+"A+B="+C+".$$ Que vaut $x$?";
	}
	
	return makeUnFieldQuestion(false,4,q,"",ans,ans,q,ans);
	
}

function randomQuizzMatrixDetRow()
{
	var i=makerandommultiple(0,2,1),j=makerandommultiple(0,2,1);
	var row=makerandommultiple(0,1,1),k,ans;
	A=makematrix(3,3)[1];
	if (row) 
	{
		for (k=0;k<3;k++) A[i][k]=0;
	}
	else
	{
		for (k=0;k<3;k++) A[k][j]=0;
	}
	A[i][j]=makenonzerorandommultiple(-2,2,1);
	ans=A[0][0]*(A[1][1]*A[2][2]-A[1][2]*A[2][1])-A[1][0]*(A[0][1]*A[2][2]-A[0][2]*A[2][1])+A[2][0]*(A[0][1]*A[1][2]-A[1][1]*A[0][2]);
	
	var mat="\\begin{pmatrix}";
	
	for (i=0;i<3;i++)
	{
		for (j=0;j<3;j++) 
		{
			mat+=A[i][j];
			if (j<3) mat+="&";
		}
		mat+="\\\\";
	}
	mat+="\\end{pmatrix}";
	
	qtext="Quel est le déterminant de la matrice suivante : $$"+mat+"?$$";
	
	return makeUnFieldQuestion(false,4,qtext,"",ans,ans,qtext,ans);	

}

function getmatrixal(c,l)
{
	var lig,q,vars=['x','y','z','t'];

	
	q="\\begin{eqnarray}f(";
	ans="$$\\left(\\begin{array}{"

	switch (c)
	{
		case 2:
			q=q+"x,y";
			ans+="cc";
			break;
		case 3:
			q=q+"x,y,z";
			ans+="ccc";
			break;
		case 4:
			q=q+"x,y,z,t";
			ans+="cccc";
			break;
	}
	q=q+")&=&(";
	ans+="}";
	
	for (i=0;i<l;i++)
	{
		lig="";
		if (i==2) q+="\\\\ &&\\quad ";

		for (j=0;j<c;j++)
		{	
			u=makerandommultiple(-5,5,1)
			lig=lig+'('+u+')*'+vars	[j];
			ans+=u;
			if (j<c-1) 
			{
				lig+='+';
				ans+="&";
			}
		}
		q+=algebra.toTex(algebra.parse(lig));
		if (i<l-1) 
		{
			q=q+',';
			ans+="\\\\";
		}
	}
	
	q+=")\\end{eqnarray}";
	ans+="\\end{array}\\right)$$";	
	
	return [q,ans]
}

function randomQuizzMatrixAL()
{	
	var c=makerandommultiple(2,4,1),l=makerandommultiple(2,4,1)
	
	q="Donner la matrice dans les bases canoniques de $\\mathbb R^"+c+"$ et de $\\mathbb R^"+l+"$ de l'application linéaire $f$ définie par ";
	
	r=getmatrixal(c,l);
	
	
	
	 return ({
		type: "noanswer",
		text: q+r[0],
		answer: r[1]
	})			
}

function randomQuizzALMatrix()
{
	var c=makerandommultiple(2,4,1),l=makerandommultiple(2,4,1)
	
	q="Donner l'expression analytique de l'application linéaire dont la matrice dans les bases canoniques de $\\mathbb R^"+c+"$ et de $\\mathbb R^"+l+"$ est ";
	
	r=getmatrixal(c,l);	
	
	return ({
		type: "noanswer",
		text: q+r[1],
		answer: r[0]
	})	
}

////////////////////////////////////////////
// SUITES
////////////////////////////////////////////

function randomQuizzSuiteArithm()
{
	var type=makerandommultiple(0,2,1);
	var prem=makerandommultiple(0,1,1);
	var r=makenonzerorandommultiple(-2,5,1);
	var n=makerandommultiple(5,10,1);
	var u0=makerandommultiple(-6,6,1);
	var u=u0+(n-prem)*r;
	var m=makerandommultiple(1,n-2,1);
	var v=u0+(m-prem)*r;
	var S;
	var ctext="Soit $(u_n)$ une suite arithmétique de premier terme $u_{"+prem+"}="+u0+"$ et de raison $"+r+"$.";
	var btext="Soit $(u_n)$ une suite arithmétique telle que $u_{"+m+"}="+v+"$ et $u_{"+n+"}="+u+"$.";
	var atext,qtext,a;
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,2,1);
	switch (type)
	{
		case 0:
			qtext=ctext+" Quelle est la valeur de $u_{"+n+"}$?";
			atext="$u_{"+n+"}="+u+"$";
			a=u;
			break;
		case 1:
			qtext=btext+ " Quelle est la raison de $(u_n)$?";
			atext="$r="+r+"$";
			a=r;
			break;
		case 2:
			if (Math.random()<0.5)
			{
				qtext=ctext+" Quelle est la valeur de $u_{"+prem+"}+\\cdots+u_{"+n+"}$?";
				S=(u0+u)*(n+1-prem)/2;
				atext="$u_{"+prem+"}+\\cdots+u_{"+n+"}="+S+"$.";
			}
			else
			{
				qtext=btext+" Quelle est la valeur de $u_{"+m+"}+\\cdots+u_{"+n+"}$?";
				S=(u+v)*(n-m+1)/2;
				atext="$u_{"+m+"}+\\cdots+u_{"+n+"}="+S+"$.";
			}
			a=S;
			break;
	}
	return makeUnFieldQuestion(false,4,qtext,"",a,atext,qtext,atext);
}

function randomQuizzSuiteGeo()
{
	var type=makerandommultiple(0,2,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,2,1);
	
	var prem=makerandommultiple(0,1,1);
	var r=makeexclusiverandommultiple(-2,5,1,[0,1]);
	var n=makerandommultiple(prem+1,prem+2,1);
	var u0=makenonzerorandommultiple(-6,6,1);
	if (type==2)
	{
		r=Math.abs(r);
		if (r==1) r=2;
		u0=Math.abs(u0);
	}
	var u=u0*Math.pow(r,n-prem);
	var m=n+1;
	var v=u0*Math.pow(r,m-prem);
	var S;
	var ctext="Soit $(u_n)$ une suite géométrique de premier terme $u_{"+prem+"}="+u0+"$ et de raison $"+r+"$.";
	var btext="Soit $(u_n)$ une suite géométrique telle que $u_{"+n+"}="+u+"$ et $u_{"+m+"}="+v+"$.";
	var atext,qtext;
	switch (type)
	{
		case 0:
			qtext=ctext+" Quelle est la valeur de $u_{"+n+"}$ ?";
			atext="$u_{"+n+"}="+u+"$";
			break;
		case 1:
			qtext=btext+ " Quelle est la raison de $(u_n)$ ?";
			u=r;
			atext="$r="+r+"$";
			break;
		case 2:
			var p=makerandommultiple(5,15,1);
			qtext=ctext+" Quelle est la formule donnant $$u_{"+prem+"}+\\cdots+"+"u_{"+p+"}?$$";
			a1="$\\frac{"+u0+"-"+u0+"\\times"+r+"^{"+(p+1)+"}}{1-"+r+"}$";
			a2="$\\frac{"+u0+"-"+u0+"\\times"+r+"^{"+p+"}}{1-"+r+"}$";
			a3="$("+u0+"+"+u0+"\\times"+r+"^{"+p+"})\\times \\frac{"+p+"}{2}$";
			a4="$("+u0+"+"+u0+"\\times"+r+"^{"+(p+1)+"})\\times \\frac{"+(p+1)+"}{2}$";			
			return makeUnQCMQuestion("qu",qtext,[a1,a2,a3,a4],[true,false,false,false],myRandomLang.badluck+" "+"$u_{"+prem+"}+\\cdots+"+"u_{"+p+"}=$"+a1,myRandomLang.welldone,qtext,a1)
			break;
	}
	return makeUnFieldQuestion(false,4,qtext,"",u,atext,qtext,atext);
}

function randomQuizzSuiteGeneration()
{
	var type=makerandommultiple(0,1,1),stype=makerandommultiple(0,2,1);
	var a=makenonzerorandommultiple(-2,2,1);
	var b=makenonzerorandommultiple(-2,2,1);
	var n=makenonzerorandommultiple(1,2,1);
	var u0=makerandommultiple(-3,3,1);
	var qtext,atext,ans;
	qtext="Soit $(u_n)$ la suite définie par ";
	switch (stype)
	{
		case 0:
			qtext+="$u_0="+u0+"$ et $$u_{n+1}=";
			switch (type)
			{
				case 0 : 
					qtext+=simplifyLatexNumber(a)+"u_n";
					if (b>0) 
						qtext+="+"+b+".$$"
					else 
						qtext+=b+".$$";
					ans=u0;
					for (var i=0;i<n;i++) ans=a*ans+b;
					break;
				case 1 :
					qtext+=simplifyLatexNumber(a)+"u_n^2";
					if (b>0) 
						qtext+="+"+b+".$$"
					else 
						qtext+=b+".$$";
					ans=u0;
					for (var i=0;i<n;i++) ans=a*ans*ans+b;
					break;
			}
			break;
		case 1:
			qtext+="$$u_n=";
			switch (type)
			{
				case 0 : 
					qtext+=simplifyLatexNumber(a)+"n";

					if (b>0) 
						qtext+="+"+b+".$$"
					else 
						qtext+=b+".$$";
					ans=a*n+b;
					break;
				case 1 :
					qtext+=simplifyLatexNumber(a)+"n^2";

					if (b>0) 
						qtext+="+"+b+".$$"
					else 
						qtext+=b+".$$";
					ans=a*n*n+b;
					break;
			}
			break;
		case 2:
			qtext+="$u_0="+u0+"$ et $$u_{n+1}="+simplifyLatexNumber(a)+"u_n";
			if (b>0) 
				qtext+="+"+simplifyLatexNumber(b)+"n$$";
			else
				qtext+=simplifyLatexNumber(b)+"n$$";
			ans=u0;
			for (var i=0;i<n;i++) 
			{
				ans=a*ans+b*i;
			}
			break;
	}
	qtext+="Quelle est la valeur de $u_"+n+"$ ?";
	atext="$u_"+n+"=\\color{red}{"+ans+"}$.";
	return makeUnFieldQuestion(false,4,qtext,"",ans,atext,qtext,atext);	
}

function randomQuizzSerieNum()
{
	var type=makerandommultiple(0,5,1);  //0 quotient de polynôme, 1 quotient de puissances, 2 quotient de puissances et polynômes, 3
	var a,b,ap,bp;

	switch (type)
	{
		case 0:
			a=makerandommultiple(2,5,1);
			ap=makerandommultiple(1,a-1,1);
			b=makerandommultiple(2,7,1);
			bp=makerandommultiple(1,b-1,1);
			c1=makenonzerorandommultiple(-9,9,1);
			c2=makenonzerorandommultiple(-9,9,1);
			c3=makenonzerorandommultiple(-9,9,1);
			c4=makenonzerorandommultiple(-9,9,1);
			if ( (Math.random()>0.5) || (ap==1))
				num="{"+simplifyLatexNumber(c1)+"n^{"+a+"}"+addLatexNumber(c2)+"n^{"+simplifyLatexNumber(ap)+"}}";
			else
				num="{"+simplifyLatexNumber(c2)+"n^{"+simplifyLatexNumber(ap)+"}"+addLatexNumber(c1)+"n^{"+simplifyLatexNumber(a)+"}}";
			if ( (Math.random()>0.5) || (bp==1) )
				den="{"+simplifyLatexNumber(c3)+"n^{"+b+"}"+addLatexNumber(c4)+"n^{"+simplifyLatexNumber(bp)+"}}";
			else
				den="{"+simplifyLatexNumber(c4)+"n^{"+bp+"}"+addLatexNumber(c3)+"n^{"+simplifyLatexNumber(b)+"}}";				
			if (b>(a+1)) ans=[true,false]; else ans=[false,true];
			q="\\frac"+num+den;			
			break; 
		case 1:
			a=makeexclusiverandommultiple(-5,5,1,[-1,0,1]);
			b=makeexclusiverandommultiple(-5,5,1,[-1,0,1]);
			c1=makeexclusiverandommultiple(-9,9,1,[-1,0,1]);
			c2=makeexclusiverandommultiple(-9,9,1,[-1,0,1]);
			if (Math.random()>0.5)
				num="{"+addparenthesis(a)+"^n"+addLatexNumber(c1)+"}";
			else
				num="{"+c1+"+"+addparenthesis(a)+"^n}";
			if (Math.random()>0.5)
				den="{"+addparenthesis(b)+"^n"+addLatexNumber(c2)+"}";
			else
				den="{"+c2+"+"+addparenthesis(b)+"^n}";				
			if (Math.abs(a)<Math.abs(b)) ans=[true,false]; else ans=[false,true];
			q="\\frac"+num+den;			
			break;
		case 2:
			a=makeexclusiverandommultiple(-5,5,1,[-1,0,1]);
			b=makerandommultiple(2,5,1);
			if (Math.random()>0.5)
			{
				num="{"+addparenthesis(a)+"^n}";
				den="{n^"+b+"}";
				ans=[false,true];
			}
			else
			{
				den="{"+addparenthesis(a)+"^n}";
				num="{n^"+b+"}";
				ans=[true,false];				
			}
			q="\\frac"+num+den;			
			break;
		case 3:
			a=makeexclusiverandommultiple(-5,5,1,[-1,0,1]);
			b=makeexclusiverandommultiple(-5,5,1,[-1,0,1]);
			c1=makeexclusiverandommultiple(-9,9,1,[-1,0,1]);
			c2=makeexclusiverandommultiple(-9,9,1,[-1,0,1]);
			ap=makerandommultiple(2,5,1);
			bp=makerandommultiple(2,5,1);
			if (Math.random()>0.5)
				num="{"+addparenthesis(a)+"^n"+addLatexNumber(c1)+"n^"+ap+"}";
			else
				num="{"+c1+"n^"+ap+"+"+addparenthesis(a)+"^n}";
			if (Math.random()>0.5)
				den="{"+addparenthesis(b)+"^n"+addLatexNumber(c2)+"n^"+bp+"}";
			else
				den="{"+c2+"n^"+bp+"+"+addparenthesis(b)+"^n}";				
			if (Math.abs(a)<Math.abs(b)) ans=[true,false]; else ans=[false,true];
			q="\\frac"+num+den;			
			break;	
		case 4:
			a=makeexclusiverandommultiple(-5,5,1,[-1,0,1]);
			b=makeexclusiverandommultiple(-5,5,1,[-1,0,1]);
			num="{"+addparenthesis(a)+"^{n+"+makerandommultiple(1,20,1)+"}}";
			den="{"+addparenthesis(b)+"^{2n-"+makerandommultiple(1,20,1)+"}}";
			if (Math.abs(a)<Math.abs(b)*Math.abs(b)) ans=[true,false]; else ans=[false,true];
			q="\\frac"+num+den;
			break;
		case 5:
			a=makerandommultiple(0,2,1);  
			b=makerandommultiple(0,2,1);
			c=makerandommultiple(0,3,1);
			switch (a)
			{
				case 0:
					q="";
					break;
				case 1:
					q="\\frac{1}{\\sqrt n}";
					break;
				case 2:
					q="\\frac 1n";
					break;
			}
			switch(c)
			{
				case 0: 
					q+="\\ln\\left(1+";
					break;
				case 1:
					q+="\\sin\\left(";
					break;
				case 2:
					q+="\\left(1-\\cos\\left(";
					break;
				case 3:
					q+="\\left(1-\\exp\\left(";
					break;
			}
			q+="\\frac 1{";
			switch (b)
			{
				case 0:
					q+="\\sqrt{n}";
					total=0.5;
					break;
				case 1:
					q+="n";					
					total=1;
					break;
				case 2:
					q+="n^2";
					total=2;
					break;
				default:
					total=0;
			}
			q+="}\\right)";
			if (c==2) total=total*2;
			total=total+a/2;
			if (total>1) ans=[true,false]; else ans=[false,true];
			if (c>=2) q+="\\right)";
			break;
	}
	question="La série $\\displaystyle \\sum_n"+q+"$ est-elle convergente?";
	if (ans[0]) uans="Oui!"; else uans="Non!";
	
	return makeUnQCMQuestion("qu",question,['Oui','Non'],ans,"Dommage!","Bravo!",question,uans);
	
}



//////////////////////////////////////////////////////////////
////////////////// Trigonométrie
//////////////////////////////////////////////////////////////

function randomQuizzValueFunctionTrigo()
{
	var angles=[ "0", "\\frac{\\pi}{6}", "\\frac{\\pi}{4}" , "\\frac{\\pi}{3}" , "\\frac{\\pi}{2}" , "\\frac{2\\pi}{3}", "\\frac{3\\pi}{4}","\\frac{5\\pi}{6}",
	"\\pi",	"\\frac{7\\pi}{6}","\\frac{5\\pi}{4}","\\frac{4\\pi}{3}","\\frac{3\\pi}{2}","\\frac{5\\pi}{3}","\\frac{7\\pi}{4}","\\frac{11\\pi}{6}",
    "-\\pi", "\\frac{-5\\pi}{6}","\\frac{-3\\pi}{4}","\\frac{-2\\pi}{3}","\\frac{-\\pi}{2}","\\frac{-\\pi}{3}","\\frac{-\\pi}{4}","\\frac{-\\pi}{6}"];	
    var cosinus=[ "1", "\\frac{\\sqrt 3}2", "\\frac{\\sqrt 2}2","\\frac 12", "0","-\\frac 12","-\\frac{\\sqrt 2}2","-\\frac{\\sqrt 3}2",
     "-1", "-\\frac{\\sqrt 3}2", "-\\frac{\\sqrt 2}2","-\\frac 12", "0","\\frac 12","\\frac{\\sqrt 2}2","\\frac{\\sqrt 3}2",
	 "-1", "-\\frac{\\sqrt 3}2", "-\\frac{\\sqrt 2}2","-\\frac 12", "0","\\frac 12","\\frac{\\sqrt 2}2","\\frac{\\sqrt 3}2"];
	var sinus=[  "0","\\frac 12","\\frac{\\sqrt 2}2","\\frac{\\sqrt 3}2","1", "\\frac{\\sqrt 3}2", "\\frac{\\sqrt 2}2","\\frac 12",
	"0","-\\frac 12","-\\frac{\\sqrt 2}2","-\\frac{\\sqrt 3}2","-1", "-\\frac{\\sqrt 3}2", "-\\frac{\\sqrt 2}2","-\\frac 12",
	"0","-\\frac 12","-\\frac{\\sqrt 2}2","-\\frac{\\sqrt 3}2","-1", "-\\frac{\\sqrt 3}2", "-\\frac{\\sqrt 2}2","-\\frac 12"];
	var tangente=["0","\\frac{\\sqrt 3}3","1","\\sqrt 3","\\textrm{non défini}","-\\sqrt 3","-1","-\\frac{\\sqrt 3}3",
	"0","\\frac{\\sqrt 3}3","1","\\sqrt 3","\\textrm{non défini}","-\\sqrt 3","-1","-\\frac{\\sqrt 3}3",
	"0","\\frac{\\sqrt 3}3","1","\\sqrt 3","\\textrm{non défini}","-\\sqrt 3","-1","-\\frac{\\sqrt 3}3"];
	var sols=[ "1", "\\frac{\\sqrt 3}2", "\\frac{\\sqrt 2}2","\\frac 12", "0","-\\frac 12","-\\frac{\\sqrt 2}2","-\\frac{\\sqrt 3}2"];
	var solt=["0","\\frac{\\sqrt 3}3","1","\\sqrt 3","\\textrm{non défini}","-\\sqrt 3","-1","-\\frac{\\sqrt 3}3"];
	
	var i=makerandommultiple(0,angles.length-1,1);
	var type=makerandommultiple(0,3,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,3,1);
	var q,ans,ca,pa,answers,j;
	
	switch (type)
	{
		case 0:
			q="$\\cos\\left("+angles[i]+"\\right)=";
			ans=q+cosinus[i]+"$";
			ca=cosinus[i];
			pa=sols;
			break;
		case 1:
			q="$\\sin\\left("+angles[i]+"\\right)=";
			ans=q+sinus[i]+"$";
			ca=sinus[i];
			pa=sols;
			break;
		case 2:
			q="$\\tan\\left("+angles[i]+"\\right)=";
			ans=q+tangente[i]+"$";
			ca=tangente[i];
			pa=solt;
			break;			
	}
	q=q+"$";
	answers=[ca];
	while (answers.length<4)
	{
		j=makerandommultiple(0,pa.length-1,1);
		while (answers.includes(pa[j])) j=makerandommultiple(0,pa.length-1,1);       
		answers.push(pa[j]);
	}
	for (j=0;j<4;j++)
		answers[j]="$"+answers[j]+"$";
	

	return makeUnQCMQuestion('qu',q,answers,[true,false,false,false],myRandomLang.badluck+" "+ans,myRandomLang.welldone+" "+ans,q,ans);

}

function randomQuizzValueAngleTrigo()
{
	var angles=[ "0", "\\frac{\\pi}{6}", "\\frac{\\pi}{4}" , "\\frac{\\pi}{3}" , "\\frac{\\pi}{2}" , "\\frac{2\\pi}{3}", "\\frac{3\\pi}{4}","\\frac{5\\pi}{6}",
//	"\\pi",	"\\frac{7\\pi}{6}","\\frac{5\\pi}{4}","\\frac{4\\pi}{3}","\\frac{3\\pi}{2}","\\frac{5\\pi}{3}","\\frac{7\\pi}{4}","\\frac{11\\pi}{6}",
    "\\pi", "\\frac{-5\\pi}{6}","\\frac{-3\\pi}{4}","\\frac{-2\\pi}{3}","\\frac{-\\pi}{2}","\\frac{-\\pi}{3}","\\frac{-\\pi}{4}","\\frac{-\\pi}{6}"];	
    var cosinus=[ "1", "\\frac{\\sqrt 3}2", "\\frac{\\sqrt 2}2","\\frac 12", "0","-\\frac 12","-\\frac{\\sqrt 2}2","-\\frac{\\sqrt 3}2",
//     "-1", "-\\frac{\\sqrt 3}2", "-\\frac{\\sqrt 2}2","-\\frac 12", "0","\\frac 12","\\frac{\\sqrt 2}2","\\frac{\\sqrt 3}2",
	 "-1", "-\\frac{\\sqrt 3}2", "-\\frac{\\sqrt 2}2","-\\frac 12", "0","\\frac 12","\\frac{\\sqrt 2}2","\\frac{\\sqrt 3}2"];
	var sinus=[  "0","\\frac 12","\\frac{\\sqrt 2}2","\\frac{\\sqrt 3}2","1", "\\frac{\\sqrt 3}2", "\\frac{\\sqrt 2}2","\\frac 12",
//	"0","-\\frac 12","-\\frac{\\sqrt 2}2","-\\frac{\\sqrt 3}2","-1", "-\\frac{\\sqrt 3}2", "-\\frac{\\sqrt 2}2","-\\frac 12",
	"0","-\\frac 12","-\\frac{\\sqrt 2}2","-\\frac{\\sqrt 3}2","-1", "-\\frac{\\sqrt 3}2", "-\\frac{\\sqrt 2}2","-\\frac 12"];
	
	var i=makerandommultiple(0,angles.length-1,1);
	var q,ans,ca,pa,answers,j;
	
	q="Déterminer l'unique angle $\\theta$ de $]-\\pi,\\pi]$ tel que $$\\left\\{\\begin{array}{rcl} \\cos(\\theta)&=&\\displaystyle"+cosinus[i]+"\\\\  \\sin(\\theta)&=&\\displaystyle"+sinus[i]+"  \\end{array}\\right.$$";
	
	ans="$\\displaystyle "+angles[i]+"$";
    pa=angles;
	answers=[angles[i]];
	while (answers.length<4)
	{
		j=makerandommultiple(0,pa.length-1,1);
		while (answers.includes(pa[j])) j=makerandommultiple(0,pa.length-1,1);       
		answers.push(pa[j]);
	}
	for (j=0;j<4;j++)
		answers[j]="$"+answers[j]+"$";
	

	return makeUnQCMQuestion('qu',q,answers,[true,false,false,false],myRandomLang.badluck,myRandomLang.welldone,q,ans);

}

function randomQuizzDecalageAngle()
{
	var q= ["\\cos(-x) ", "\\sin(-x)","\\cos(x+\\pi) ", "\\sin(x+\\pi)","\\cos(x+2\\pi) ", "\\sin(x+2\\pi)",
			"\\cos(\\pi-x) ", "\\sin(\\pi-x)", "\\cos\\left(\\frac\\pi2+x\\right) ", "\\sin\\left(\\frac\\pi2+x\\right)",
			 "\\cos\\left(\\frac\\pi2-x\\right) ", "\\sin\\left(\\frac\\pi2-x\\right)",
			 "\\cos\\left(x-\\frac\\pi2\\right) ", "\\sin\\left(x-\\frac\\pi2\\right)" ];
	var ta=[0,3,2,3,0,1,2,1,3,0,1,0,1,2];
	var ans=[ "$\\cos(x)$", "$\\sin x$", "$-\\cos x$", "$-\\sin(x)$"];
	var ca=[ [true,false,false,false], [false, true, false,false], [false, false , true, false], [false, false , false,true] ];
	var i=makerandommultiple(0,q.length-1,1);
	var ansu="$\\displaystyle"+q[i]+"=$"+ans[ta[i]]+".";
	return makeUnQCMQuestion('qu',"$\\displaystyle"+q[i]+"=?$",ans,ca[ta[i]], myRandomLang.badluck+' '+ansu,myRandomLang.welldone,"$\\displaystyle"+q[i]+"=?$",ansu);
}

// Géométrie

function randomQuizzColineaire()
{
	var num=[1,-1,1,-1,2,-2,3,-3,1,-1,3,-3];
	var den=[1,1,2,2,1,1,1,1,3,3,2,2];
	var xu,yu,xv,yv,i,ech,q,ans,rep;
	i=makenonzerorandommultiple(0,num.length-1,1);
	xu=makenonzerorandommultiple(-10,10,den[i]);
	yu=makenonzerorandommultiple(-10,10,den[i]);
	xv=xu/den[i]*num[i];
	yv=yu/den[i]*num[i];
	if (Math.random()>0.5)
	{
		ca=[true,false];
		rep="sont";
	}
	else
	{
		ca=[false,true];
		if (Math.random()>0.5) yv=-yv;
		else yv=makeexclusiverandommultiple(-10,10,1,[yv]);
		rep="ne sont pas";		
	}
	if (Math.random()>0.5)
	{
		ech=xu;
		xu=xv;
		xv=ech;
		ech=yu;
		yu=yv;
		yv=ech;
	}
	q="Les vecteurs $\\vec u("+xu+";"+yu+")$ et $\\vec v("+xv+";"+yv+")$ sont-ils colinéaires?";
	ans="Les vecteurs $\\vec u("+xu+";"+yu+")$ et $\\vec v("+xv+";"+yv+")$ "+rep+" colinéaires";
	return makeUnQCMQuestion('qu',q,['colinéaires','non colinéaires'],ca, myRandomLang.badluck+' '+ans,myRandomLang.welldone,q,ans);
	
}	

function randomQuizzDeterminant()
{
	var xu=makerandommultiple(-10,10,1),yu=makerandommultiple(-10,10,1),xv=makerandommultiple(-10,10,1),yv=makerandommultiple(-10,10,1);
	var det=(xu*yv)-(yu*xv);
	q="Soit $\\vec u=("+xu+";"+yu+")$ et $\\vec v("+xv+";"+yv+")$. Alors $\\det(\\vec u,\\vec v)=$";
	ans="$\\det(\\vec u,\\vec v)="+det+"$";
	return makeUnFieldQuestion(true,4,q,"",det,ans,q,ans);
	
}

function randomQuizzScalarProduct()
{
	var xu=makerandommultiple(-10,10,1),yu=makerandommultiple(-10,10,1),xv=makerandommultiple(-10,10,1),yv=makerandommultiple(-10,10,1);
	var ps=(xu*xv)+(yu*yv);
	q="Soit $\\vec u=("+xu+";"+yu+")$ et $\\vec v("+xv+";"+yv+")$. Alors $\\vec u\\cdot\\vec v=$";
	ans="$\\vec u\\cdot \\vec v="+ps+"$";
	return makeUnFieldQuestion(true,3,q,"",ps,ans,q,ans);
}

function randomQuizzOrthogonalVectors()
{
	var num=[1,-1,1,-1,2,-2,3,-3,1,-1,3,-3];
	var den=[1,1,2,2,1,1,1,1,3,3,2,2];
	var xu,yu,xv,yv,i,ech,q,ans,rep;
	i=makenonzerorandommultiple(0,num.length-1,1);
	xu=makenonzerorandommultiple(-10,10,den[i]);
	yu=makenonzerorandommultiple(-10,10,den[i]);
	xv=yu/den[i]*num[i];
	yv=-xu/den[i]*num[i];
	
	if (Math.random()>0.5)
	{
		ca=[true,false];
		rep="sont";
	}
	else
	{
		ca=[false,true];
		if (Math.random()>0.5) yv=-yv;
		else yv=makeexclusiverandommultiple(-10,10,1,[yv]);
		rep="ne sont pas";		
	}
	if (Math.random()>0.5)
	{
		ech=xu;
		xu=xv;
		xv=ech;
		ech=yu;
		yu=yv;
		yv=ech;
	}
	q="Les vecteurs $\\vec u("+xu+";"+yu+")$ et $\\vec v("+xv+";"+yv+")$ sont-ils orthogonaux?";
	ans="Les vecteurs $\\vec u("+xu+";"+yu+")$ et $\\vec v("+xv+";"+yv+")$ "+rep+" orthogonaux";
	return makeUnQCMQuestion('qu',q,['orthogonaux','non orthogonaux'],ca, myRandomLang.badluck+' '+ans,myRandomLang.welldone,q,ans);
	
}	

function randomQuizzOrthogonalCollinear()
{
	var num=[1,-1,1,-1,2,-2,3,-3,1,-1,3,-3];
	var den=[1,1,2,2,1,1,1,1,3,3,2,2];
	var xu,yu,xv,yv,i,ech,q,ans,rep;
	i=makenonzerorandommultiple(0,num.length-1,1);
	xu=makenonzerorandommultiple(-10,10,den[i]);
	yu=makenonzerorandommultiple(-10,10,den[i]);
	t=makerandommultiple(0,2,1);
	switch (t)
	{
		case 0: //  ORTHOGONAL
			xv=-yu/den[i]*num[i];
			yv=xu/den[i]*num[i];		
			ca=[true,false,false];
			rep="sont orthogonaux.";	
			break;
		case 1: // COLLINEAR
			xv=xu/den[i]*num[i];
			yv=yu/den[i]*num[i];			
			ca=[false,true,false];
			rep="sont colinéaires.";
			break;
		case 2:  // NOTHING
			switch (makenonzerorandommultiple(0,2,1))
			{
				case 0:
					xv=-yu/den[i]*num[i];
					yv=xu/den[i]*num[i];	
					break;
				case 1:
					xv=xu/den[i]*num[i];
					yv=yu/den[i]*num[i];	
					break;
				case 2:
					xv=makenonzerorandommultiple(-5,5,1);
					yv=makenonzerorandommultiple(-5,5,1);
					break;
			}
			while ( ((xu*xv+yu*yv)==0) || ( (xu*yv-xv*yu)==0) )
			{
					xv=makenonzerorandommultiple(-5,5,1);
					yv=makenonzerorandommultiple(-5,5,1);
			}
			ca=[false,false,true];
			rep="ne sont ni orthogonaux, ni colinéaires.";			
			break;
	}
	if (Math.random()>0.5)
	{
		ech=xu;
		xu=xv;
		xv=ech;
		ech=yu;
		yu=yv;
		yv=ech;
	}
	q="Les vecteurs $\\vec u("+xu+";"+yu+")$ et $\\vec v("+xv+";"+yv+")$ sont-ils";
	ans="Les vecteurs $\\vec u("+xu+";"+yu+")$ et $\\vec v("+xv+";"+yv+")$ "+rep;
	return makeUnQCMQuestion('qu',q,['orthogonaux?','colinéaires?','ni orthogonaux, ni colinéaires?'],ca, myRandomLang.badluck+' '+ans,myRandomLang.welldone,q,ans);
}


function randomQuizzMilieu()
{
	var xA,yA,xI,yI,xB,yB,xIt,yIt,type;
	
	xA=makenonzerorandommultiple(-10,10,1);
	xB=makenonzerorandommultiple(-10,10,1);
	yA=makenonzerorandommultiple(-10,10,1);
	yB=makenonzerorandommultiple(-10,10,1);
	
	if ( (xA==xB) && (yA==yB) ) return randomQuizzMilieu();
	
	xI=(xA+xB)/2;
	yI=(yA+yB)/2;
	xI=new Big ( (xA+xB)/2);
	xIt=formattexnumber(xI,myQuizz.language);
	yI=new Big ( (yA+yB)/2);
	yIt=formattexnumber(yI,myQuizz.language);
	
	var type=makerandommultiple(0,1,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,1,1);
	
	if (type==0) 
	{
		q="Soit $A("+xA+";"+yA+")$ et $B("+xB+";"+yB+")$. Quelles sont les coordonnées de $I$ le milieu de $[AB]?$";
		qp="</p><P> $I($";
		ans=[formatnumber(xI,myQuizz.language),formatnumber(yI,myQuizz.language)];
		anst="$A("+xIt+","+yIt+")$";
	}
	else
	{
		q="Soit $A("+xA+";"+yA+")$ et $I("+xIt+";"+yIt+")$. Quelles sont les coordonnées de $B$ de sorte que $I$ soit le milieu de $[AB]?$";
		qp="</p><P> $B($";
		ans=[xB,yB];
		anst="$B("+xB+","+yB+")$";		
	}
		
	return makeUnFieldsQuestion([true,true],[false,false],[4,4],[q+qp,""],[";","$)$"],ans,anst,q,anst);		
}

function randomQuizzVecteur()
{
	var xA,yA,xI,yI,xB,yB,xIt,yIt,type;
	
	xA=makenonzerorandommultiple(-10,10,1);
	xB=makenonzerorandommultiple(-10,10,1);
	yA=makenonzerorandommultiple(-10,10,1);
	yB=makenonzerorandommultiple(-10,10,1);
	
	if ( (xA==xB) && (yA==yB) ) return randomQuizzVecteur();
	
	xI=xB-xA;
	yI=yB-yA;
	
	var type=makerandommultiple(0,1,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,1,1);
	
	if (type==0) 
	{
		q="Soit $A("+xA+";"+yA+")$ et $B("+xB+";"+yB+")$. Quelles sont les coordonnées de $\\overrightarrow{AB}?$";  
		qp="</p><P> $\\overrightarrow{AB}($";
		ans=[xI,yI];
		anst="$\\overrightarrow{AB}("+xI+","+yI+")$";
	}
	else
	{
		if (Math.random()<0.5)
		{
			q="Soit $A("+xA+";"+yA+")$ et $\\overrightarrow{u}("+xI+";"+yI+")$. Quelles sont les coordonnées de $B$ de sorte que $\\overrightarrow{AB}=\\overrightarrow{u}?$";
			qp="</p><P> $B($"; 
			ans=[xB,yB];
			anst="$B("+xB+","+yB+")$";		
		}
		else
		{
			q="Soit $B("+xB+";"+yB+")$ et $\\overrightarrow{u}("+xI+";"+yI+")$. Quelles sont les coordonnées de $A$ de sorte que $\\overrightarrow{AB}=\\overrightarrow{u}?$";
			qp="</p><P> $A($"; 
			ans=[xA,yA];
			anst="$A("+xA+","+yA+")$";					
		}
	}
		
	return makeUnFieldsQuestion([true,true],[false,false],[4,4],[q+qp,""],[";","$)$"],ans,anst,q,anst);		
}

function randomQuizzChasles()
{
	var alphabet="ABCDEFGH";
	
	i=makerandommultiple(0,alphabet.length-1,1);
	j=makeexclusiverandommultiple(0,alphabet.length-1,1,[i]);
	k=makeexclusiverandommultiple(0,alphabet.length-1,1,[i,j]);
	
	inverse=makerandommultiple(0,10,1);
	if (inverse<=6)
	{
		fv=alphabet.charAt(i)+alphabet.charAt(j);
		sv=alphabet.charAt(j)+alphabet.charAt(k);
	}
	else
	{
		fv=alphabet.charAt(j)+alphabet.charAt(k);
		sv=alphabet.charAt(i)+alphabet.charAt(j);
	}
	rv=alphabet.charAt(i)+alphabet.charAt(k);
	anst="$$\\overrightarrow{"+fv+"}+\\overrightarrow{"+sv+"}=\\overrightarrow{"+rv+"}$$";

	
	
	if (myQuizz.level==0) 
	{
		t=makerandommultiple(0,5,1);
		
		switch (t)
		{
			case 0:
				bf="<span class=vecteur>";
				af=fv.charAt(1)+"</span> + <span class=vecteur>"+sv+"</span> = <span class=vecteur>"+rv+"</span>";
				answ=fv.charAt(0);
				qt="$\\overrightarrow{\\dots "+fv.charAt(1)+"}+\\overrightarrow{"+sv+"}=\\overrightarrow{"+rv+"}.$";
				break;
			case 1:
				bf="<span class=vecteur>"+fv.charAt(0);
				af="</span> + <span class=vecteur>"+sv+"</span> = <span class=vecteur>"+rv+"</span>";
				answ=fv.charAt(1);
				qt="$\\overrightarrow{"+fv.charAt(0)+"\\dots }+\\overrightarrow{"+sv+"}=\\overrightarrow{"+rv+"}.$";
				break;
			case 2:
				bf="<span class=vecteur>"+fv+"</span> + <span class=vecteur>";
				af=sv.charAt(1)+"</span> = <span class=vecteur>"+rv+"</span>";
				answ=sv.charAt(0);
				qt="$\\overrightarrow{"+fv+"}+\\overrightarrow{\\dots "+sv.charAt(1)+"}=\\overrightarrow{"+rv+"}.$";
				break;	
			case 3:
				bf="<span class=vecteur>"+fv+"</span> + <span class=vecteur>"+sv.charAt(0);
				af="</span> = <span class=vecteur>"+rv+"</span>";
				answ=sv.charAt(1);
				qt="$\\overrightarrow{"+fv+"}+\\overrightarrow{"+sv.charAt(0)+"\\dots }=\\overrightarrow{"+rv+"}.$";
				break;	
			case 4:
				bf="<span class=vecteur>"+fv+"</span> + <span class=vecteur>"+sv+"</span> = <span class=vecteur>";
				af=rv.charAt(1)+"</span>";
				answ=rv.charAt(0);
				qt="$\\overrightarrow{"+fv+"}+\\overrightarrow{"+sv+"}=\\overrightarrow{\\dots "+rv.charAt(1)+"}.$";
				break;	
			case 5:
				bf="<span class=vecteur>"+fv+"</span> + <span class=vecteur>"+sv+"</span> = <span class=vecteur>"+rv.charAt(0);
				af="</span>";
				answ=rv.charAt(1);
				qt="$\\overrightarrow{"+fv+"}+\\overrightarrow{"+sv+"}=\\overrightarrow{"+rv.charAt(0)+"\\dots }.$";
				break;					
		}
		return makeUnFieldQuestion(true,1,bf,af,answ,anst,qt,anst);
	}
	else
	{
		if (inverse>7) t=makeexclusiverandommultiple(0,11,1,[4,8,9,10,11])  // éviter deux fois la même lettre!
		else t=makerandommultiple(0,11,1);
		switch (t)
		{
			case 0:
				bf="<span class=vecteur>";
				af="</span> + <span class=vecteur>"+sv+"</span> = <span class=vecteur>"+rv+"</span>";
				answ=fv;
				qt="$\\overrightarrow{\\dots \\dots }+\\overrightarrow{"+sv+"}=\\overrightarrow{"+rv+"}.$";
				break;
			case 1:
				bf="<span class=vecteur>"+fv+"</span> + <span class=vecteur>";
				af="</span> = <span class=vecteur>"+rv+"</span>";
				answ=sv;
				qt="$\\overrightarrow{"+fv+"}+\\overrightarrow{\\dots \\dots}=\\overrightarrow{"+rv+"}.$";
				break;				
			case 2:
				bf="<span class=vecteur>"+fv+"</span> + <span class=vecteur>"+sv+"</span> = <span class=vecteur>";
				af="</span>";
				answ=rv;
				qt="$\\overrightarrow{"+fv+"}+\\overrightarrow{"+sv+"}=\\overrightarrow{\\dots "+alphabet.charAt(k)+"}.$";
				break;	
			case 3:
				bf=[ "<span class=vecteur>","<span class=vecteur>"];
				af=[ fv.charAt(1)+"</span> + ",sv.charAt(1)+"</span> = <span class=vecteur>"+rv+"</span>"];
				answ=[fv.charAt(0),sv.charAt(0)];
				qt="$\\overrightarrow{\\dots "+fv.charAt(1)+" }+\\overrightarrow{\\dots "+sv.charAt(1)+"}=\\overrightarrow{"+rv+"}.$";
				break;
			case 4:
				bf=[ "<span class=vecteur>","<span class=vecteur>"+sv.charAt(0)];
				af=[ fv.charAt(1)+"</span> + ","</span> = <span class=vecteur>"+rv+"</span>"];
				answ=[fv.charAt(0),sv.charAt(1)];
				qt="$\\overrightarrow{\\dots "+fv.charAt(1)+" }+\\overrightarrow{"+sv.charAt(0)+"\\dots }=\\overrightarrow{"+rv+"}.$";
				break;
			case 5:
				bf=[ "<span class=vecteur>","<span class=vecteur>"+sv+"</span> = <span class=vecteur>"+rv.charAt(0)];
				af=[ fv.charAt(1)+"</span> + ","</span>"];
				answ=[fv.charAt(0),rv.charAt(1)];
				qt="$\\overrightarrow{\\dots "+fv.charAt(1)+" }+\\overrightarrow{ "+sv+"}=\\overrightarrow{"+rv.charAt(0)+"\\dots}.$";
				break;	
			case 6:
				bf=[ "<span class=vecteur>"+fv.charAt(0),"<span class=vecteur>"+sv.charAt(0)];
				af=[ "</span> + ","</span> = <span class=vecteur>"+rv+"</span>"];
				answ=[fv.charAt(1),sv.charAt(1)];
				qt="$\\overrightarrow{"+fv.charAt(0)+"\\dots }+\\overrightarrow{"+sv.charAt(0)+"\\dots }=\\overrightarrow{"+rv+"}.$";
				break;	
			case 7:
				bf=[ "<span class=vecteur>"+fv.charAt(0),"<span class=vecteur>"+sv+"</span> = <span class=vecteur>"];
				af=[ "</span> + ",rv.charAt(1)+"</span>"];
				answ=[fv.charAt(1),rv.charAt(0)];
				qt="$\\overrightarrow{"+fv.charAt(0)+"\\dots }+\\overrightarrow{"+sv+"}=\\overrightarrow{\\dots "+rv.charAt(1)+"}.$";
				break;
			case 8:
				bf=[ "<span class=vecteur>"+fv.charAt(0),"<span class=vecteur>"+sv+"</span> = <span class=vecteur>"+rv.charAt(0)];
				af=[ "</span> + ","</span>"];
				answ=[fv.charAt(1),rv.charAt(1)];
				qt="$\\overrightarrow{"+fv.charAt(0)+"\\dots }+\\overrightarrow{"+sv+"}=\\overrightarrow{"+rv.charAt(0)+"\\dots }.$";
				break;	
			case 9:
				bf=[ "<span class=vecteur>"+fv+"</span> + <span class=vecteur>","<span class=vecteur>"];
				af=[ sv.charAt(1)+"</span> = ",rv.charAt(1)+"</span>"];
				answ=[sv.charAt(0),rv.charAt(0)];
				qt="$\\overrightarrow{"+fv+"}+\\overrightarrow{\\dots "+sv.charAt(1)+"}=\\overrightarrow{\\dots "+sv.charAt(1)+"}.$";
				break;	
			case 10:
				bf=[ "<span class=vecteur>"+fv+"</span> + <span class=vecteur>","<span class=vecteur>"+rv.charAt(0)];
				af=[ sv.charAt(1)+"</span> = ","</span>"];
				answ=[sv.charAt(0),rv.charAt(1)];
				qt="$\\overrightarrow{"+fv+"}+\\overrightarrow{\\dots "+sv.charAt(1)+"}=\\overrightarrow{"+rv.charAt(0)+"\\dots }.$";
				break;
			case 11:
				bf=[ "<span class=vecteur>"+fv+"</span> + <span class=vecteur>"+sv.charAt(0),"<span class=vecteur>"];
				af=[ "</span> = ",rv.charAt(1)+"</span>"];
				answ=[sv.charAt(1),rv.charAt(0)];
				qt="$\\overrightarrow{"+fv+"}+\\overrightarrow{"+sv.charAt(0)+"\\dots }=\\overrightarrow{\\dots "+rv.charAt(1)+"}.$";
				break;	
		}
		if (t<=2) return makeUnFieldQuestion(true,2,bf,af,answ,anst,qt,anst);
		else return makeUnFieldsQuestion([true,true],[false,false],[1,1],bf,af,answ,anst,qt,anst);
	}
}

function randomQuizzThales()                                                
{    
	var cotes=[ [7,3,5],[3,4,2], [7,9,4],[4,5,6], [2,3,4], [3,3,4], [4,6,8], [3,4,5] ],a,b,c,x0,x1,x2,y0,y1,y2,xp1,xp2,yp1,yp2,lambda,rot,nb=50;
	var h=400,w=400;
	var lettres= [ ['R','S','U','V','W'], ['I','J','K','L','M'],['O','P','Q','R','S'],['A','B','C','D','E']],l=makerandommultiple(0,lettres.length-1,1),cc=makerandommultiple(0,cotes.length-1,1);
	
	
	a=cotes[cc][0];
	b=cotes[cc][1];
	c=cotes[cc][2];
	
	var type=makerandommultiple(0,1,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,1,1);
	
	if (type==0) lambda=makeexclusiverandommultiple(2,4,1,[0,1]);
	else lambda=makerandommultiple(-3,-1,1);
	rot=makerandommultiple(0,359,1),

    x2=(a*a+b*b-c*c)/(2*a);
	y2=Math.sqrt(b*b-x2*x2)*nb;
	x2=x2*nb;
	x0=0*nb;
	y0=0*nb;
	x1=a*nb;
	y1=0*nb;
	
	xp1=lambda*x1;
	xp2=lambda*x2;
	yp1=lambda*y1;
	yp2=lambda*y2;
	
	minx=Math.min.apply(null,[x0,x1,x2,xp1,xp2,y0,y1,y2,yp1,yp2]);
	maxx=Math.max.apply(null,[x0,x1,x2,xp1,xp2,y0,y1,y2,yp1,yp2]);
	midx=(minx+maxx)/2;
	
	minx=midx+Math.round( (minx-midx)*1.5);
	maxx=midx+Math.round( (maxx-midx)*1.5);

	miny=minx;
	maxy=maxx;
	
	
	
	var svg='<svg width="'+w+'" height="'+h+'" viewBox="'+minx+' '+miny+' '+(maxx-minx)+' '+(maxy-miny)+'" preserveAspectRatio="xMidYMid meet">';
	svg+='<g transform="rotate('+rot+' '+Math.round((minx+maxx)/2)+' '+Math.round((minx+maxx)/2)+')">';
	svg+='<line x1='+0+' y1='+y0+' x2='+x1+' y2='+y1+' stroke=black />';
	svg+='<line x1='+x0+' y1='+y0+' x2='+x2+' y2='+y2+' stroke=black stroke-width=1 />';
	svg+='<line x1='+x2+' y1='+y2+' x2='+x1+' y2='+y1+' stroke=black stroke-width=1 />';
	svg+='<line x1='+0+' y1='+0+' x2='+xp1+' y2='+yp1+' stroke=black stroke-width=1 />';
	svg+='<line x1='+0+' y1='+0+' x2='+xp2+' y2='+yp2+' stroke=black stroke-width=1 />';
	svg+='<line x1='+xp2+' y1='+yp2+' x2='+xp1+' y2='+yp1+' stroke=black stroke-width=1 />';
	svg+='<text x='+x0+' y='+y0+' fill=black font-size="'+Math.round((maxx-minx)/20)+'" transform="rotate('+(-rot)+' '+x0+' '+y0+')">'+lettres[l][0]+'</text>';
	svg+='<text x='+x1+' y='+y1+' fill=black font-size="'+Math.round((maxx-minx)/20)+'" transform="rotate('+(-rot)+' '+x1+' '+y1+')">'+lettres[l][1]+'</text>';
	svg+='<text x='+x2+' y='+y2+' fill=black font-size="'+Math.round((maxx-minx)/20)+'" transform="rotate('+(-rot)+' '+x2+' '+y2+')">'+lettres[l][2]+'</text>';
	svg+='<text x='+xp1+' y='+yp1+' fill=black font-size="'+Math.round((maxx-minx)/20)+'" transform="rotate('+(-rot)+' '+xp1+' '+yp1+')">'+lettres[l][3]+'</text>';
	svg+='<text x='+xp2+' y='+yp2+' fill=black font-size="'+Math.round((maxx-minx)/20)+'" transform="rotate('+(-rot)+' '+xp2+' '+yp2+')">'+lettres[l][4]+'</text>';
	
	svg+='</g>';
	svg+='</svg>';
	
	type= makerandommultiple(0,7,1)
	switch (type)
	{
		case 0:
			t1=lettres[l][0]+lettres[l][1]+'='+a;
			t2=lettres[l][0]+lettres[l][2]+'='+b;
			t3=lettres[l][0]+lettres[l][3]+'='+(a*Math.abs(lambda));
			t4=lettres[l][0]+lettres[l][4];
			ans=(b*Math.abs(lambda));
			break;
		case 1:
			t1=lettres[l][0]+lettres[l][1]+'='+a;
			t2=lettres[l][0]+lettres[l][2]+'='+b;
			t3=lettres[l][0]+lettres[l][4]+'='+(b*Math.abs(lambda));
			t4=lettres[l][0]+lettres[l][3];
			ans=(a*Math.abs(lambda));
			break;		
		case 2:
			t1=lettres[l][0]+lettres[l][1]+'='+a;
			t2=lettres[l][0]+lettres[l][4]+'='+(b*Math.abs(lambda));
			t3=lettres[l][0]+lettres[l][3]+'='+(a*Math.abs(lambda));
			t4=lettres[l][0]+lettres[l][2];
			ans=b;
			break;
		case 3:
			t1=lettres[l][0]+lettres[l][3]+'='+(a*Math.abs(lambda));
			t2=lettres[l][0]+lettres[l][2]+'='+b;
			t3=lettres[l][0]+lettres[l][4]+'='+(b*Math.abs(lambda));
			t4=lettres[l][0]+lettres[l][1];
			ans=a;
			break;		
		case 4:
			t1=lettres[l][0]+lettres[l][1]+'='+a;
			t2=lettres[l][0]+lettres[l][3]+'='+(a*Math.abs(lambda));
			t3=lettres[l][1]+lettres[l][2]+'='+c;
			t4=lettres[l][3]+lettres[l][4];
			ans=(c*Math.abs(lambda));
			break;		
		case 5:
			t1=lettres[l][0]+lettres[l][1]+'='+a;
			t2=lettres[l][0]+lettres[l][3]+'='+(a*Math.abs(lambda));
			t3=lettres[l][3]+lettres[l][4]+'='+(c*Math.abs(lambda));
			t4=lettres[l][1]+lettres[l][2];
			ans=c;
			break;	
		case 6:
			t1=lettres[l][0]+lettres[l][1]+'='+a;
			t2=lettres[l][3]+lettres[l][4]+'='+(c*Math.abs(lambda));
			t3=lettres[l][1]+lettres[l][2]+'='+c;
			t4=lettres[l][0]+lettres[l][3];
			ans=(a*Math.abs(lambda));
			break;		
		case 7:
			t1=lettres[l][0]+lettres[l][3]+'='+(a*Math.abs(lambda));
			t2=lettres[l][3]+lettres[l][4]+'='+(c*Math.abs(lambda));
			t3=lettres[l][1]+lettres[l][2]+'='+c;
			t4=lettres[l][0]+lettres[l][1];
			ans=a;
			break;			
	}	
	
	q="Les points $"+lettres[l][0]+","+lettres[l][1]+","+lettres[l][3]+"$ et les points $"+lettres[l][0]+","+lettres[l][2]+","+lettres[l][4]+"$ sont alignés.";
	q+="Les droites $("+lettres[l][1]+lettres[l][2]+")$ et $("+lettres[l][3]+lettres[l][4]+")$ sont parallèles.";
	q+="On a $"+t1+"$, $"+t2+"$, $"+t3+"$, que vaut $"+t4+"$?";
	
	return makeUnFieldQuestionSvg(false,10,q,"",ans,"$"+t4+"="+ans+"$",q,"$"+t4+"="+ans+"$",svg);	

}

// Nombres complexes

function formatcomplexnumber(a,b)
{
	var sp,signe;
	if ((b==0)) return a;
	if (b>0) 
	{
		signe="+";
		sp=b;
	}
	else
	{
		signe="-";
		sp=-b;
	}
	if ( (b==1) || (b==-1)) sp=""; 
	if ((a==0)) 
	{
		if (b>2) return b+"i";
		if (b==1) return "i";
		else return signe+sp+"i";
	}
	return a+signe+sp+'i';
}


function randomQuizzComplexesope()
{
	var a=makerandommultiple(-5,5,1),b=makerandommultiple(-5,5,1),c=makerandommultiple(-5,5,1),d=makerandommultiple(-5,5,1);
	var type=makerandommultiple(0,4,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,4,1);
	
	switch (type)
	{
		case 0: // Addition!
			qf="$("+formatcomplexnumber(a,b)+")+("+formatcomplexnumber(c,d)+")=\ ";
			answ=formatcomplexnumber(a+c,b+d);
			anst=qf+answ+"$";
			qt=qf+"?$";
			break;
		case 1: // Soustraction
			qf="$("+formatcomplexnumber(a,b)+")-("+formatcomplexnumber(c,d)+")=\ ";
			answ=formatcomplexnumber(a-c,b-d);
			anst=qf+answ+"$";
			qt=qf+"?$";
			break;	
		case 2: // Produit
			qf="$("+formatcomplexnumber(a,b)+")\\times("+formatcomplexnumber(c,d)+")=\ ";
			answ=formatcomplexnumber(a*c-b*d,a*d+b*c);
			anst=qf+answ+"$";
			qt=qf+"?$";
			break;	
		case 3: // Conjugué
			qf="$\\overline{"+formatcomplexnumber(a,b)+"}=\ ";
			answ=formatcomplexnumber(a,-b);
			anst=qf+answ+"$";
			qt=qf+"?$";
			break;	
		case 4: // Inverse
			qf="$\\frac{"+formatcomplexnumber(a*c-b*d,a*d+b*c)+"}{"+formatcomplexnumber(a,b)+"}=\ ";
			answ=formatcomplexnumber(c,d);
			anst=qf+answ+"$";
			qt=qf+"?$";
			break;
	}
	return makeUnFieldQuestion(true,8,qf+"$","",answ,anst,qt,anst);
}	

function randomQuizzComplexesexpo()
{
	var uni=[ ['1','0','0',['1',''],'e^{i0}'], ['-1','0',['1',''],['1',''],'e^{i\\pi}'],
	['0','1',['1',''],'2','e^{i\\pi/2}'],['0','-1',['-1','-'],'2','e^{-i\\pi/2}'],
	['sqrt(3)/2','1/2',['','1'],'6','e^{i\\pi/6}'],['sqrt(2)/2','sqrt(2)/2',['1',''],'4','e^{i\\pi/4}'],
	['1/2','sqrt(3)/2',['1',''],'3','e^{i\\pi/3}'],
	['-1/2','sqrt(3)/2','2','3','e^{i2\\pi/3}'],
	['-sqrt(2)/2','sqrt(2)/2','3','4','e^{i3\\pi/4}'],
	['-sqrt(3)/2','1/2','5','6','e^{i5\\pi/6}' ],
		['sqrt(3)/2','-1/2',['-','-1'],'6','e^{-i\\pi/6}'],
		['sqrt(2)/2','-sqrt(2)/2',['-1','-'],'4','e^{-i\\pi/4}'],
		['1/2','-sqrt(3)/2',['-1','-'],'3','e^{-i\\pi/3}'],
	['-1/2','-sqrt(3)/2','-2','3','e^{-i2\\pi/3}'],
	['-sqrt(2)/2','-sqrt(2)/2','-3','4','e^{-i3\\pi/4}'],
	['-sqrt(3)/2','-1/2','-5','6','e^{-i5\\pi/6}' ]
	];
	
	var module=makerandommultiple(1,8,1);
	var i=makerandommultiple(0,15,1);	

	if (i<4)
	{
		var a=Algebrite.run("printlatex("+module+"*("+uni[i][0]+"+i*("+uni[i][1]+")))");
		a=a.replace('\\sqrt{-1}','\\mathrm{i}');
	}
	else
	{
		var r=Algebrite.run("printlatex("+module+"*("+uni[i][0]+"))");
		var im=Algebrite.run("printlatex("+module+"*("+uni[i][1]+"))");
		if (im.charAt(0)=="-") a=r+im; else a=r+"+"+im;
		a=a+"\\mathrm{i}";
	}
	qt="&Eacute;crire le nombre complexe suivant sous la forme $\\rho e^{i\\theta}$ avec $\\rho>0$ et $\\theta\\in ]-\\pi,\\pi]$ : $$"+a+"$$";
    qf1=qt+"$\\rho=\ $ ";
	qf2="$\\theta=\ $ ";
	qf3="$\\pi/\ $ ";
	anst="$$"+a+"=\\color{red}{"+module+uni[i][4]+"}.$$";

	return makeUnFieldsQuestion([true,true,true],[false,true,false],[1,1,1],[qf1,qf2,qf3],["","","."],[module,uni[i][2],uni[i][3]],anst,qt,anst);
	
}

function randomQuizzComplexesopeexpo()
{
	var type=makerandommultiple(0,3,1);
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,3,1);	
	if (type!=2) rho1=makerandommultiple(2,9,1); else rho1=makerandommultiple(2,5,1);
	rho2=makerandommultiple(2,9,1);
	
	var n1=makenonzerorandommultiple(2,9,1);
	var d1=makenonzerorandommultiple(-n1+1,n1-1,1);
	var n2=makenonzerorandommultiple(2,9,1);
	var d2=makenonzerorandommultiple(-n2+1,n2-1,1);
	var myunparsedfrac1="("+d1+"/"+n1+")";
	var myunparsedfrac2="("+d2+"/"+n2+")";
	
	var myfrac1=algebra.parse(myunparsedfrac1);
	var myfrac2=algebra.parse(myunparsedfrac2);
	var resultm,resulta,qa;
	var pow=makeexclusiverandommultiple(-3,3,1,[-1,0,1]);
	switch (type)
	{
		case 0:
			resultms=rho1*rho2;
			resultmt=rho1*rho2;
			resulta=[algebra.parse(myunparsedfrac1+"+"+myunparsedfrac2),algebra.parse(myunparsedfrac1+"+"+myunparsedfrac2+"+2"),algebra.parse(myunparsedfrac1+"+"+myunparsedfrac2+"-2")];
			qa=rho1+"e^{"+myfrac1.toTex()+"\\mathrm i \\pi}\\times"+rho2+"e^{"+myfrac2.toTex()+"\\mathrm i \\pi}";
			break;
		case 1:
			resultm=algebra.parse(rho1+"/"+rho2);
			resultmt=resultm.toTex();
			resultms=resultm.toString();
			resulta=[algebra.parse(myunparsedfrac1+"-"+myunparsedfrac2),algebra.parse(myunparsedfrac1+"+"+myunparsedfrac2+"+2"),algebra.parse(myunparsedfrac1+"+"+myunparsedfrac2+"-2")];
			qa="\\frac{"+rho1+" e^{"+myfrac1.toTex()+"\\mathrm i \\pi}}{"+rho2+"e^{"+myfrac2.toTex()+"\\mathrm i \\pi}}";
			break;	
		case 2:
			if (pow>0) 
			{
				resultmt=""+Math.pow(rho1,pow); 
				resultms=resultmt;
			}
			else
			{
				resultmt="\\frac{1}{"+Math.pow(rho1,-pow)+"}";
				resultms="1/"+Math.pow(rho1,-pow);
			}
			resulta=[algebra.parse(pow+"*"+myunparsedfrac1), algebra.parse(pow+"*"+myunparsedfrac1+"+2"),algebra.parse(pow+"*"+myunparsedfrac1+"-2")];
			qa="\\left("+rho1+" e^{"+myfrac1.toTex()+"\\mathrm i \\pi}\\right)^{"+pow+"}";
			break;
		case 3:
			resultmt=rho1;
			resultms=rho1;
			resulta=[algebra.parse("-"+myunparsedfrac1),algebra.parse("-"+myunparsedfrac1+"+2"),algebra.parse("-"+myunparsedfrac1+"-2")];
			qa="\\overline{"+rho1+" e^{"+myfrac1.toTex()+"\\mathrm i \\pi}}";
			
	}
	answ=resultmt+"e^{"+resulta[0].toTex()+"\\mathrm i \\pi}";	
	qt="&Eacute;crire le nombre complexe suivant sous la forme $\\rho e^{ix\\pi}$ avec $\\rho>0$ : $$"+qa+"$$";
    qf1=qt+"$\\rho=\ $ ";
	qf2="$x=\ $ ";

	
	anst="$$"+qa+"=\\color{red}{"+answ+"}$$";

	return makeUnFieldsQuestion([true,true],[false,true],[4,4],[qf1,qf2],["","."],[resultms,[resulta[0].toString(),resulta[1].toString(),resulta[2].toString()]],anst,qt,anst);	
	
}


/////////////////////////////////////////////////////////
/// DERIVATION
/////////////////////////////////////////////////////////

function randomQuizzDl()
{
	// Dans l'ordre, exp, ln, sin,cos,1/(1+x),1/(1-x),sqrt(1+x)
	var coefs=[ ['1','1','1/2','1/6','1/24'], ['0','1','-1/2','1/3','-1/4'], ['0','1','0','-1/6','0'], ['1','0','-1/2','0','1/24'], ['1','-1','1','-1','1'], ['1','1','1','1','1'],['1','1/2','-1/8'] ];
	var coefst=[ ['1','+','+\\frac 12','+\\frac 16','+\\frac1{24}'], ['','','-\\frac 12','+\\frac 13','-\\frac 14'],['','','','-\\frac 16'],['1','','-\\frac 12','+\\frac{1}{24}'],['1','-','+','-','+'],['1','+','+','+','+'],[1,'+\\frac 12','-\\frac{1}8'] ];
	var texte=['\\exp(x)', '\\ln(1+x)','\\sin(x)', '\\cos(x)', '\\frac{1}{1+x}', '\\frac1{1-x}','\\sqrt{1+x}'] ;
	var type=makerandommultiple(0,6,1);
	if (type==6) borne=makerandommultiple(1,2,1);
	else borne=makerandommultiple(1,4,1);
	q="Retrouver le coefficient manquant (on le rentrera éventuellement sous forme de fraction) $$"+texte[type]+"=";
	t="";
	for (i=0;i<borne;i++)
	{
		if (coefs[type][i]!='0')
		{
			q+=coefst[type][i];
			switch (i)
			{
				case 1:
					q+='x';
					break;
				case 0:
					break;
				default:
					q+='x^'+i;
			}
		}
	}
	if (borne>1)
		q+="+???x^"+borne+"+o(x^"+borne+")$$";
	else
		q+="+???x+o(x)$$";
	
	return makeUnFieldQuestion(true,8,q,"",coefs[type][borne],"$"+coefs[type][borne]+"$",q,"$"+coefs[type][borne]+"$");

}	

////////////////////////////////////////////////////////
/// INTEGRATION
////////////////////////////////////////////////////////

function randomQuizzIntegrationAffineUsual()
{
	var type=makerandommultiple(0,5,1),a,b=makenonzerorandommultiple(-5,5,1),c=makenonzerorandommultiple(-5,5,1);
	switch (myQuizz.level) 
	{
		case 0 : a=1; break;
		case 1 : a=makenonzerorandommultiple(1,5,1); break;
		default: a=makenonzerorandommultiple(-5,5,1); break;
	}
	while (!myQuizz.choicesint[type]) type=makerandommultiple(0,5,1);
	var affine=	 '( ('+a+') *x+('+b+') )',affinet=algebra.toTex(algebra.parse(affine));
	var q='Déterminer une primitive de la fonction suivante : $$';
	var func,prim="$";
	var before,beforep,beforeps,n;
	

	switch (c)
	{
		case 1:before=""; break;
		case -1: before="-"; break;
		default: before=c;
	}
	if (c==a) beforep="";
	else if (c==-a) beforep="-";
	else beforep=algebra.toTex(algebra.parse("("+c+")/("+a+")"));	
	if (c==a) beforeps="-";
	else if (c==-a) beforeps="";
	else beforeps=algebra.toTex(algebra.parse("-("+c+")/("+a+")"));	

	
	switch (type)
	{
		case 0: n=makerandommultiple(1,4,1);
				if (n==1) 
				{
					q+=affinet;
					prim+=algebra.toTex(algebra.parse('(('+a+')/2)x^2+('+b+')x'));
				}
				else
				{
					q+=before+'('+affinet+')^{'+n+'}';
					if (c==(a*(n+1))) beforep="";
					else if (c==-(a*(n+1))) beforep="-";
					else beforep=algebra.toTex(algebra.parse("("+c+")/("+(a*(n+1))+")"));	
					prim+=beforep+'('+affinet+')^{'+(n+1)+'}';
				}
				break;
		case 1: q+="\\frac{"+c+"}{"+affinet+"}";
				prim+=beforep+"\\ln("+affinet+")";
				break;
		case 3: q+="\\frac{"+c+"}{\\sqrt{"+affinet+"}}";
				if ((2*c)==a) beforep="";
				else if ((2*c)==-a) beforep="-";
				else beforep=algebra.toTex(algebra.parse("2*("+c+")/("+a+")"));	
				prim+=beforep+"\\sqrt{"+affinet+"}";
				break;
		case 2: q+="\\frac{"+c+"}{("+affinet+")^2}";
				if (c==a) prim+="\\frac{-1}{"+affinet+"}";
				else if (c==-a) prim+="\\frac{1}{"+affinet+"}";
				else prim+="\\frac{"+algebra.toTex(algebra.parse("-("+c+")/("+a+")"))+"}{"+affinet+"}";
				break;
		case 4: 
				q+=before+"\\exp("+affinet+")";
				prim+=beforep+"\\exp("+affinet+")";
				break;
		case 5: n=makerandommultiple(0,1,1);
				if (n==0)
				{
					q+=before+"\\cos("+affinet+")";
					prim+=beforep+"\\sin("+affinet+")";
				}
				else
				{
					q+=before+"\\sin("+affinet+")";
					prim+=beforeps+"\\cos("+affinet+")";
				}
				break;
	}

	q+="$$";
	prim+="$";

	return ({
		type: "noanswer",
		text: q,
		answer: prim,
		}) 
       
}

function randomQuizzIntegrationComposition()
{
	var type=makerandommultiple(0,5,1),type2=makerandommultiple(0,5,1),func,der,q,ans;
	//while (!myQuizz.choicesint[type]) type=makerandommultiple(0,5,1);
	//while (!myQuizz.choicesint[type2]) type2=makerandommultiple(0,5,1);
	type=1;
	//type2=5;
	
	var ok=false;
	while (!ok)
	{
		switch (type)
		{
			case 0:
				ok=true;
				break;
			case 1: 
			case 2:
				switch (type2)
				{
					case 0:
					case 1:
					case 2:
					case 4:
						break;
					default:
						ok=true;
				}
				break;
			case 3:
				switch (type2)
				{
					case 0:
					case 1:
					case 2:
					case 4:
						break;
					default:
						ok=true;
				}
				break;	
			case 4:
				if (type2!=3) ok=true;
				break;
			default:
				ok=true;
		}
		if (!ok)
		{
			type=makerandommultiple(0,5,1);
			type2=makerandommultiple(0,5,1);
		}
	}		
	
	q=myRandomLang.findprimitive;
	ans=myRandomLang.oneprimitive;
	
	
	
	// Interdire type2=4, type=4 et réciproquement, type2=0 et type=3, type2=0 et type3=1, type2=1 et type0=3, type2=1 et type=1,2,3

	switch (type)
	{
		case 0: // Polynôme
			a=makenonzerorandommultiple(0,5,1);
			b=makenonzerorandommultiple(-5,5,1);
			c=makenonzerorandommultiple(-5,5,1);
			func=algebra.toTex(algebra.parse('(('+a+'))x^2+('+b+')x+('+c+')'));
			der=algebra.toTex(algebra.parse('2*('+a+')x+('+b+')'));
			break;
		case 1: // 1/x
			if (Math.random()>0.5)
			{
				func='\\frac 1{x}';
				der='\\frac{-1}{x^2}';
			}
			else
			{
				func='\\frac{1}{x^2}';
				der='\\frac{-2}{x^3}';
			}
			break;
		case 2: // sqrt(x)
			func='\\sqrt x';
			der='\\frac1{2\\sqrt{x}}';
			break;
		case 3: // \exp(x)
			func='\\exp(x)';
			der='\\exp(x)';
			break;
		case 4: // ln(x)
			func='\\ln(x)';
			der='\\frac 1x';
			break;
		case 5: // trigo
			if (Math.random()>0.5)
			{
				func='\\sin(x)';
				der='\\cos(x)';
			}
			else
			{
				func='\\cos(x)';
				der='-\\sin(x)';
			}
	}
	
	switch (type2)
	{
		case 0 : // u' u^n
			n=makenonzerorandommultiple(1,4,1);
			if (type==0) 
			{
				if (n==1) q0='$\\left('+der+'\\right)\\left('+func+'\\right)$';
				else q0='$\\left('+der+'\\right)\\left('+func+'\\right)^'+n+'$';
			}
			else 
			{
				if (n==1) q0='$'+der+func+'$';
				else q0='$'+der+'\\left('+func+'\\right)^'+n+'$';
			}
			ans0='$\\frac{1}{'+(n+1)+'}\\left('+func+'\\right)^{'+(n+1)+'}$';
			break;
		case 1 : // u'/u^2
			q0='$\\frac{'+der+'}{\\left('+func+'\\right)^2}$';
			ans0='$\\frac {-1}{'+func+'}$';
			break;
		case 2 : // 1/sqrt x
			q0='$\\frac{'+der+'}{\\sqrt{'+func+'}}$';
			ans0='$2\\sqrt{'+func+'}$';
			break;
		case 3: // u' exp(u)
			if (type==0) q0='$\\left('+der+'\\right)';
			else q0='$'+der;
			q0+='\\exp\\left('+func+'\\right)$';
			ans0='$\\exp\\left('+func+'\\right)$';
			break;
		case 4: // u'/u
			q0='$\\frac{'+der+'}{'+func+'}$';
			ans0='$\\ln\\left('+func+'\\right)$';
			break;	
		case 5: // u' sin(u) ou u'cos(u)
			if (type==0) q0='$\\left('+der+'\\right)';
			else q0='$'+der;
			if (Math.random()>0.5)
			{
				q0+='\\sin\\left('+func+'\\right)$';
				ans0='$-\\cos\\left('+func+'\\right)$';
			}
			else
			{
				q0+='\\cos\\left('+func+'\\right)$';
				ans0='$\\sin\\left('+func+'\\right)$';				
			}
			break;			
	}
	
	q+=q0;
	ans+=q0+myRandomLang.is+ans0;


	return ({
		type: "noanswer",
		text: q,
		answer: ans,
		}) 	

}

/// Autres !!!

function randomQuizzIrregularVerbs()
{
	var iv= [ [ ["beat","beat","beaten","battre"], ["become","became","become","devenir"], ["begin", "began", "begun", "commencer"],
	["bet","bet","bet","parier"], ["bite","bit","bitten","mordre"], ["bleed","bled","bled","soigner"], ["blow","blew","blown","souffler"],
	["break","broke","broken","casser"], ["build","built","built","construire"], ["burn","burnt","burnt","brûler"], ["burst","burst","burst","éclater"],
	["buy","bought","bought","acheter"] ],
	[ ["catch", "caught", "caught", "attraper"],["choose","chose","chosen","choisir"], ["come","came", "come","venir"],
	["cost","cost","cost","coûter"], ["cut","cut","cut","couper"]	] ,
	[ ["draw","drew","drawn","dessiner"], ["drink","drank","drunk","boire"], ["drive","drove","driven","conduire"] ],
	[ ["eat","ate","eaten","manger"] ],
	[ ["fall","fell","fallen","tomber"] ,["feed","fed","fed","nourrir"],["feel","felt","felt","se sentir"], 
	["fight","fought","fought","se battre"], ["find","found","found","trouver"], ["fly","flew","flown","voler"], 
	["forget","forgot","forgotten","oublier"], ["freeze","froze","frozen","geler"] ],
	[ ["get","got","got","obtenir"], ["give","gave","given","donner"], ["go","went","gone","aller"], ["grow","grewn","grown","pousser"] ],
	[ ["hear","heard","heard","entendre"], ["hide","hid","hidden","cacher"], ["hit","hit","hit","frapper"] , 
	["hold","held","held","tenir"], ["hurt","hurt","hurt","blesser"] ],
	[ ["keep","kept","kept", "garder"], ["know","knew","known","connaître"] ],
	[ ["learn","learnt","learnt", "apprendre"], ["leave","left","left","laisser"], ["lose","lost","lost","perdre"] ],
	[ ["make","made","made","fabriquer"], ["mean","meant","meant","signifier"], ["meet","met","met","rencontrer"] ],
	[ ["pay","paid","paid","payer"], ["put","put","put","mettre"]], 
	[ ["read","read","read","lire"], ["ride","rode","ridden","aller à vélo"],
	["ring","rang","rung","sonner"], ["run","ran","run","courir"]] ,
	[ ["say","said","said","dire"], ["see","saw","seen","voir"], ["sell","sold","sold","vendre"], ["send","sent","sent","envoyer"],
	["set","set","set","poser"] , ["shake","shook","shaken","secouer"], ["shine","shone","shone","briller"], ["shoot","shot","shot","tirer"],
	["shut","shut","shut","fermer"], ["sing","sang","sung","chanter"], ["sit","sat","sat","s'asseoir"],["sleep","slept","slept","dormir"],
	["smell","smelt","smelt","sentir"], ["speak","spoke","spoken","parler"], ["spend","spent","spent","dépenser/passer"], 
	["stand","stood","stood","être debout"], ["steal","stole","stolen","voler"], ["swim","swam","swum","nager"]],
	[ ["took","take","taken","prendre"], ["teach","taught","taught","enseigner"], ["tear", "tore","torn", "déchirer"],
	["tell","told","told","dire"], ["think","thought","thought","penser"], ["throw","threw","thrown","jeter"]] ,
	[ ["understand","understood","understood","comprendre"] ],
	[ ["wake up","woke up","woken up","se réveiller"], ["wear","wore","worn","porter (vêtement)"], ["win","won","won", "gagner"], 
	["write","wrote","written","écrire"] ] ];
	var iv,lettre;
	
	
	while (!myQuizz.choicesint[lettre]) lettre=makerandommultiple(0,15,1);	
	
	l=iv[lettre];
	
	q=makerandommultiple(0,l.length-1,1);
	
	if (myQuizz.level==0)
		type=makerandommultiple(0,1,1);
	else	
		type=makerandommultiple(0,3,1);
	
	switch (type)
	{
		case 0:
			return makeUnFieldsQuestion([false,false,false],[true,true,true],[10,10,10], ["L'infinitif de ce verbe est : "+l[q][0]+".</p> Son prétérit est : ","Son participe passé est : ","Sa traduction est : "],["","",""],
	[l[q][1],l[q][2],l[q][3]],l[q][0]+ "-"+l[q][1]+"-"+l[q][2]+"-"+l[q][3]+"-","Conjuguer le verbe "+l[q][0], 
	"La bonne réponse est : "+l[q][0]+ "-"+l[q][1]+"-"+l[q][2]+"-"+l[q][3]);
			break;
		case 1:
			return makeUnFieldsQuestion([false,false,false],[true,true,true],[10,10,10], ["En français, ce verbe signifie : "+l[q][3]+".</p> En anglais, son infinif est : ","Son prétérit est : ","Son participe passé est : "],["","",""],
	[l[q][0],l[q][1],l[q][2]],l[q][0]+ "-"+l[q][1]+"-"+l[q][2]+"-"+l[q][3]+"-","Conjuguer le verbe dont la traduction française est :"+l[q][3], 
	"La bonne réponse est : "+l[q][0]+ "-"+l[q][1]+"-"+l[q][2]+"-"+l[q][3]);		
			break;
		case 2:
			return makeUnFieldsQuestion([false,false,false],[true,true,true],[10,10,10], ["Le prétérit de ce verbe est : "+l[q][1]+".</p> Son infinitif est : ","Son participe passé est : ","Sa traduction est : "],["","",""],
	[l[q][0],l[q][2],l[q][3]],l[q][0]+ "-"+l[q][1]+"-"+l[q][2]+"-"+l[q][3]+"-","Conjuguer le verbe dont le prétérit est "+l[q][1], 
	"La bonne réponse est : "+l[q][0]+ "-"+l[q][1]+"-"+l[q][2]+"-"+l[q][3]);
			break;
		case 3:
			return makeUnFieldsQuestion([false,false,false],[true,true,true],[10,10,10], ["Le participe passé de ce verbe est : "+l[q][2]+".</p> Son infinitif est : ","Son prétérit est : ","Sa traduction est : "],["","",""],
	[l[q][0],l[q][1],l[q][3]],l[q][0]+ "-"+l[q][1]+"-"+l[q][2]+"-"+l[q][3]+"-","Conjuguer le verbe dont le participe passé est "+l[q][2], 
	"La bonne réponse est : "+l[q][0]+ "-"+l[q][1]+"-"+l[q][2]+"-"+l[q][3]);
			break;
	}			
	
}