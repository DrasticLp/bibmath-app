theQuizz= {
	model: "determinist",   // Possible value : random
	generator: "primenumbers", // The function which generates a randomquizz
	level:1,                   // The level of a random quizz
	type: "immediate",   // Possible value : delayed (meaning that the answers are given at the end) -- projector
	field : "field",     // If possible, each question has an associated field
	title: "",            // The title of the quizz
	firstPage: "",        // The text on the first page
	lastPage: "",         // The text on the last page
	language: "fr",        // In french a priori
	randomizedQuestions : true,        // Randomized questions
	randomizedAnswers: true,        // False for a yes/no question
	numbermaxquestions: 0,  // 0 if you want to execute all questions of the quizz, otherwise the maximum number of questions
	timer : 15,           // Time needed for one question, or for the whole quizz. -1 is there is no limitation of time
	globaltimer : false,    // True if you want a time for the whole quizz and not for each question
	answersound:false ,     // Play a sound after each answer (good or bad)
	tictacsound:false,     // Play a sound during each question
	tictacmp3: "",
	allowFullScreenMode:true,    // Allow the quizz to be fullscreened
	autostart:false,             // Will the Quizz start automatically?
	twoColumns:false,              // Answers displayed on two columns
	options:[],                   // Options that we can set at the beginning of the quizz
	levels:[]                    // Description of the possible levels
}

// Les types de questions
// qu : question à choix unique
// qcm : question à choix multiple
// field : question avec champ à compléter
// noanswer : question sans champ réponse  (et donc on ne compte pas les points).

listofAnswers=[];

langQuizz = {
	fr : {
		next : 'Continuer',
		start : 'Démarrer',
		startFullScreen : 'Démarrer en plein écran',
		startAgain : "Recommencer",
		yourScore : "Votre score",
		validate : "Valider",
		theCorrectAnswers : "Les réponses correctes sont : ",
		changeParameters : "Changer les options",
		tableof : "Table de ",
		level : "Niveau",
		limitedtime : "Temps limité",
		unlimitedtime : "Temps illimité",
		questiontime : "Temps par question (en secondes) ",
		delayedanswer: "Correction à la fin",
		immediateanswer : "Correction après chaque question",
		field : "Réponse en ligne",
		nofield :"Pas de réponse en ligne",
		withsound : "Avec effets sonores",
		withoutsound : "Sans effets sonores",
	},
	en : {
		next: 'Next',
		start : 'Start',
		startFullScreen : 'Start in full screen mode',
		startAgain : "Start Again",
		yourScore : 'Your score',
		validate : 'OK',
		theCorrectAnswers : "The correct answers are : ",
		changeParameters : "Change parameters",
		tableof : "Table of ",
		level: "Level",
		limitedtime : "Limited time",
		unlimitedtime : "Unlimited time",
		questiontime : "Time by question (in seconds)",
		delayedanswer: "Answers at the end",
		immediateanswer : "Answers after each question",
		field:"Answer field",
		nofield:"No answer field",
		withsound : "With sound",
		withoutsound : "Without sound",
	}
}

// A general function to prepare the Quizz, the panels, and so on...

function prepareQuizz(quizz)
{
		// We get the options from quizz
	
	for ( var id in quizz)
	{
		theQuizz[id]=quizz[id];
	}
	

	goodsound = new Howl({
			src: ['../lib/goodsound.mp3']
		});
	badsound = new Howl({
			src: ['../lib/badsound.mp3']
		});
	
	myLangQuizz = langQuizz[theQuizz.language];
	
	// We create the element that we have to produce!
	
	quizzDiv = document.getElementById("bibmathQuizz");   // Div of the Quizz
	
	
	quizzDiv.innerHTML = "<div><div id=titleQuizz></div><div id='introQuizz'></div><div id='panelQuizz'></div><div id='endQuizz'></div></div>";
	
	introQuizzDiv= document.getElementById('introQuizz');
	panelQuizzDiv= document.getElementById('panelQuizz');
	endQuizzDiv=document.getElementById('endQuizz');
	titleQuizzDiv=document.getElementById('titleQuizz');	
	
	contentPanelQuizzDiv=document.createElement("div");
	contentPanelQuizzDiv.id="contentPanelQuizz";
	panelQuizzDiv.appendChild(contentPanelQuizzDiv);
	
	timerQuizzDiv=document.createElement("div");
	timerQuizzDiv.id="timerQuizz";
	panelQuizzDiv.appendChild(timerQuizzDiv);
	timerQuizzDiv.innerHTML="<div id='countdown'></div>";
	
	textQuizzDiv = document.createElement("div");
	textQuizzDiv.id="textQuizz";
	contentPanelQuizzDiv.appendChild(textQuizzDiv);
	
	answersQuizzDiv = document.createElement("div");
	answersQuizzDiv.id="answersQuizz";
	contentPanelQuizzDiv.appendChild(answersQuizzDiv);

	correctionQuizzDiv = document.createElement("div");
	correctionQuizzDiv.id="correctionQuizz";
	contentPanelQuizzDiv.appendChild(correctionQuizzDiv);	
	
	bottomQuizzDiv=document.createElement("div");
	bottomQuizzDiv.id="bottomQuizz";

	buttonNext=document.createElement("BUTTON");
	buttonNext.innerHTML=myLangQuizz.next;
	buttonNext.className="validationbutton";
	buttonNext.addEventListener("click",displayNextQuestion,false);
	buttonNext.id="buttonnext";
	buttonNext.hidden=true;
	
	validationButtonQcm=document.createElement("BUTTON");
	validationButtonQcm.className="validationbutton";
	validationButtonQcm.innerHTML=myLangQuizz.validate;
	validationButtonQcm.id="validatebuttonQcm";
	validationButtonQcm.addEventListener("click",checkAnswers,false);
	validationButtonQcm.hidden=true;
	bottomQuizzDiv.appendChild(validationButtonQcm);
	
	validationButtonField=document.createElement("BUTTON");
	validationButtonField.className="validationbutton";
	validationButtonField.innerHTML=myLangQuizz.validate;
	validationButtonField.id="validatebuttonField";
	validationButtonField.addEventListener("click",checkAnswerField,false);
	validationButtonField.hidden=true;	
	bottomQuizzDiv.appendChild(validationButtonField); 
	
	validationButtonDelayed=document.createElement("BUTTON");
	validationButtonDelayed.className="validationbutton";
	validationButtonDelayed.innerHTML=myLangQuizz.validate;
	validationButtonDelayed.id="validatebuttonDelayed";
	validationButtonDelayed.addEventListener("click",gotoNextQuestionDelayed,false);
	validationButtonDelayed.hidden=true;
	bottomQuizzDiv.appendChild(validationButtonDelayed);

	


	bottomQuizzDiv.appendChild(buttonNext);
	progressBarQuizzDiv = document.createElement("div");
	progressBarQuizzDiv.id="progressBarQuizz";
	bottomQuizzDiv.appendChild(progressBarQuizzDiv);	
	
	quizzDiv.appendChild(bottomQuizzDiv);	
	
	if ( (theQuizz.model=="random") && (theQuizz.title=="") ) // We choose the title of the RandomQuizz!
	{
		theQuizz.title=getRandomTitle(theQuizz.generator,theQuizz.language);
	}
	titleQuizzDiv.append(document.createTextNode(theQuizz.title));
	document.title="Quizz - "+theQuizz.title;
	
	// We create a countdown, whatever the value of the timer could be...

	
	countdown=$("#countdown").countdown360({
			radius      : 60.5,
			strokeWidth : 15,
			fillStyle   : '#b1d9bf',
			strokeStyle : ' #007718 ',
			// fontSize    : 50,
			seconds: theQuizz.timer,	
			fontColor   : '#FFFFFF',
			autostart: false,
			smooth: true,
			label: ['seconde','secondes'],
			startOverAfterAdding: false,
			onComplete  : function () { endofTime() }
		});
	
}

// Display a form to choose the options

function startQuizz(quizz)
{
	prepareQuizz(quizz);
	startandrestartQuizz();
}

function startandrestartQuizz()
{
	
	// We display the title!
	introQuizzDiv.innerHTML="<div>"+theQuizz.firstPage+"</div>";
	
	
	// We do the formular for the introQuizzDiv
	
	
	if (theQuizz.options.length>0)
	{
		
		myFormular = document.createElement("form");
		myFormular.id="options";
		myFormular.style="margin-top:30px";
		var content="<fieldset><legend>Paramètres du Quizz</legend>";
	
		for (var i=0;i<theQuizz.options.length;i++)
		{
			switch (theQuizz.options[i])
			{
				case 'timer':
					content+='<div style="margin-top:20px">';
					content+='<div style="display:flex"><div style="flex-grow:1;flex-basis:0"> <input type="radio" id="timerno" name="timeryesno" value="yes" onclick="enableTimer()"';
					if (theQuizz.timer!=-1) content+='checked';
					content+='><label for="delayed">'+myLangQuizz.limitedtime+'</label></div>';
					content+='<div style="flex-grow:1;flex-basis:0"><input type="radio" id="timerno" name="timeryesno" value="no" onclick="disableTimer()"';
					if (theQuizz.timer==-1) content+='checked';
					content+='><label for="immediate">'+myLangQuizz.unlimitedtime+'</label></div></div>';
					content+='<div style="margin-top:5px"><label style="padding-left:5px;">'+myLangQuizz.questiontime+': </label>';
					content+='<input type="number" id="timer" name="timer" min="3" max="100" value="';
					if (theQuizz.timer!=-1)
						content+=theQuizz.timer+'"';
					else
						content+=15+'" disabled>';
					content+='</div></div>';
					break;
				case 'level':
					if (theQuizz.levels.length==0)
					{
						content+='<div style="display:flex; margin-top:20px"><div style="flex-grow:1"> <input type="radio" id="level0" name="level" value="0"';
						if (theQuizz.level==0) content+='checked';
						content+='><label for="level0">'+myLangQuizz.level+' 1</label></div>';
						content+='<div style="flex-grow:1"><input type="radio" id="level1" name="level" value="1"';
						if (theQuizz.level==1) content+='checked';
						content+='><label for="level1">'+myLangQuizz.level+' 2</label></div>';
						content+='<div style="flex-grow:1"><input type="radio" id="level2" name="level" value="2"';
						if (theQuizz.level==2) content+='checked';
						content+='><label for="level1">'+myLangQuizz.level+' 3</label></div></div>';					
						break;
					}
					else
					{
						content+='<div style="display:flex; margin-top:20px">';
						for (j=0;j<=theQuizz.levels.length-1;j++)
						{
							content+='<div style="flex-grow:1; flex-basis:0">'
							content+='<input type="radio" name="level" id="level'+j+'" value="'+j+'"';
							if (theQuizz.level==j) content+='checked';
							content+='/><label>'+theQuizz.levels[j]+'</label>';
							content+='</div>';
							if ((j%2)==1) content+='</div><div style="display:flex">';
						}
						content+='</div></div>';	
					}
					break;
				case 'type':
					content+='<div style="display:flex; margin-top:20px">';
					content+='<div style="flex-grow:1;flex-basis:0"><input type="radio" id="immediate" name="type" value="immediate"';
					if (theQuizz.type!="delayed") content+='checked';
					content+='><label for="immediate">'+myLangQuizz.immediateanswer+'</label></div>';
					content+='<div style="flex-grow:1;flex-basis:0"><input type="radio" id="delayed" name="type" value="delayed"';
					if (theQuizz.type=="delayed") content+='checked';
					content+='><label for="delayed">'+myLangQuizz.delayedanswer+'</label></div></div>';
					break;
				case 'field':
					content+='<div style="display:flex; margin-top:20px"><div style="flex-grow:1;flex-basis:0"> <input type="radio" id="field" name="field" value="field"';
					if (theQuizz.field=="field") content+='checked';
					content+='><label for="delayed">'+myLangQuizz.field+'</label></div>';
					content+='<div style="flex-grow:1;flex-basis:0"><input type="radio" id="nofield" name="field" value="nofield"';
					if (theQuizz.field!="field") content+='checked';
					content+='><label for="immediate">'+myLangQuizz.nofield+'</label></div></div>';
					break;				
				case 'sound':
					content+='<div style="display:flex; margin-top:20px"><div style="flex-grow:1;flex-basis:0"> <input type="radio" id="withsound" name="sound" value="withsound"';
					if (theQuizz.answersound==true) content+='checked';
					content+='><label for="withsound">'+myLangQuizz.withsound+'</label></div>';
					content+='<div style="flex-grow:1;flex-basis:0"><input type="radio" id="withoutsound" name="sound" value="withoutsound"';
					if (theQuizz.answersound==false) content+='checked';
					content+='><label for="withoutsound">'+myLangQuizz.withoutsound+'</label></div></div>';
					break;
				case 'table':
					content+='<div style="display:flex; margin-top:20px">';
					for (j=1;j<=9;j++)
					{
						content+='<div style="flex-grow:1; flex-basis:0">'
						content+='<input type="checkbox" name="table'+j+'"';
						if (theQuizz.table.includes(j)) content+="checked";
						content+='/>';
						content+='<label>'+myLangQuizz.tableof+j+'</label>';
						content+='</div>';
						if ((j%3)==0) content+='</div><div style="display:flex">';
					}
					content+='</div></div>';					
					break;	
				case 'choices':
					content+='<div style="display:flex; margin-top:20px">';
					for (j=0;j<=theQuizz.choices.length-1;j++)
					{
						content+='<div style="flex-grow:1; flex-basis:0">'
						content+='<input type="checkbox" name="choices'+j+'"';
						if (theQuizz.choicesint[j]) content+='checked';
						content+='/><label>'+theQuizz.choices[j]+'</label>';
						content+='</div>';
						if ((j%2)==1) content+='</div><div style="display:flex">';
					}
					content+='</div></div>';	
					break;
			}
		}
		content+="</legend>";
		myFormular.innerHTML=content;
		introQuizzDiv.appendChild(myFormular);
	}

	
	var htmlintroquizz="";
	
	if ( (screenfull.isEnabled) && (theQuizz.allowFullScreenMode) )
	{
		screenfull.on('change', () => 
		{
			if( screenfull.isFullscreen )
			{
				// If we go to fullscreen, we adapt slightly the presentation
				titleQuizzDiv.style.marginTop="25px";
				titleQuizzDiv.style.marginBottom="50px";
				quizzDiv.style.fontSize="1.3em";

				//contentPanelQuizzDiv.style.justifyContent="space-between";
				
				progressBarQuizzDiv.style.paddingBottom="15px";
				progressBarQuizzDiv.style.paddingLeft="10px";
				progressBarQuizzDiv.style.paddingRight="10px";
				//progressBarQuizzDiv.bottom="0";
			}
			else
			{
				titleQuizzDiv.style.marginTop="0px";
				titleQuizzDiv.style.marginBottom="20px";
				quizzDiv.style.fontSize="1em";
			}
			
		});		
		// We add two buttons to the IntroQuizz
		htmlintroquizz+="<div style='display: flex'><div class='panelbuttonsintro'><button onclick='firstQuestion()' class='startbutton'>"+myLangQuizz.start+"</button><button onclick='firstQuestionFullscreen()' class='startfullscreenbutton'>"+myLangQuizz.startFullScreen+"</button></div></div>";
	
	}
	else
	{
		htmlintroquizz+="<div display='flex'><div class='panelbuttonsintro'><button onclick='firstQuestion()' class='startbutton'>"+myLangQuizz.start+"</button></div></div>";		
	}
	
	var myPanelButtons=document.createElement('div');
	myPanelButtons.innerHTML=htmlintroquizz;
	introQuizzDiv.appendChild(myPanelButtons);	
		
	if (theQuizz.autostart)		
		firstQuestion()
	else
	{
		panelQuizzDiv.style.display="none";
		endQuizzDiv.style.display="none";
		introQuizzDiv.style.display="flex";
		progressBarQuizzDiv.style.display="none";
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,panelQuizzDiv]);
	}
	
}

function firstQuestion()
{
	var i,j;
	console.log("lancer");
	// We select the parameters that we have choosen
	if (theQuizz.options.length>0)
	{	
		for (i=0;i<theQuizz.options.length;i++)
		{
			switch (theQuizz.options[i])
			{
				case 'type':
					var whichType = document.querySelector('input[name=type]:checked').value;
					theQuizz.type=whichType;
					break;
				case 'field':
					var whichField = document.querySelector('input[name=field]:checked').value;
					theQuizz.field=whichField;
					break;
				case 'level':
					var whichLevel = document.querySelector('input[name=level]:checked').value;
					theQuizz.level=parseInt(whichLevel);
					break;		
				case 'sound':
					var sound = document.querySelector('input[name=sound]:checked').value;
					if (sound=="withsound") 
					{
						theQuizz.answersound=true;
						theQuizz.tictacsound=true;
					}
					break;
				case 'timer':
					var whichTimer = document.querySelector('input[name=timeryesno]:checked').value;
					if (whichTimer=="no") 
						theQuizz.timer=-1;
					else
					{
						if (document.getElementById('timer').value>=3) 
							theQuizz.timer=document.getElementById('timer').value;
						
						countdown.setTime(theQuizz.timer);
					}
					break;
				case 'table':
					theQuizz.table=[];
					for (j=1;j<=9;j++)
					{
						if (eval("document.forms.options.table"+j+".checked == true")) 
							theQuizz.table.push(j);
					}
					if (theQuizz.table.length==0) theQuizz.table=[1,2,3,4,5,6,7,8,9];
					break;	
				case 'choices':
					var nbchoices=0;
					for (j=0;j<theQuizz.choices.length;j++)
					{
						if (eval("document.forms.options.choices"+j+".checked == true")) 
						{
							theQuizz.choicesint[j]=true;
							nbchoices++;
						}
						else
							theQuizz.choicesint[j]=false;
					}
					if (nbchoices==0) theQuizz.choicesint[0]=true; 
					break;
					
			}
		}
	}
	
	
	if (theQuizz.timer>=0)
	{
		timerQuizzDiv.style.display="flex";
	}
	else
	{
		timerQuizzDiv.style.display="none";
	}
	
	if (theQuizz.model=="random")
	{
		theQuizz=randomQuizz(theQuizz);
		theQuizz.randomizedQuestions=false;
		availableQuestions=theQuizz.questions.slice(0);  // We duplicate the array...
	}
	else
	{
			// On prépare la liste des questions en tenant compte des groupes
		availableQuestions=[];
		avq=[];
		for (i=0;i<10;i++) avq[i]=[];
		for (i=0;i<theQuizz.questions.length;i++)
		{
			if (typeof(theQuizz.questions[i].groupe) == 'undefined') theQuizz.questions[i].groupe=0;
			avq[theQuizz.questions[i].groupe].push(theQuizz.questions[i]);
		}
		for (i=0;i<avq[0].length;i++)
			availableQuestions.push(avq[0][i]);
		for (i=1;i<10;i++)
		{
			//if (avq[i].length>0) availableQuestions.push(avq[i][makerandommultiple(0,avq[i].lenght-1,1)]);
			if (avq[i].length>0) 
			{
				availableQuestions.push(avq[i][makerandommultiple(0,avq[i].length-1,1)]);
			}
		}
	}
	

	
	
	if (theQuizz.numbermaxquestions==0)
		numbermaxQuestions=availableQuestions.length;
	else
		numbermaxQuestions=Math.min(theQuizz.numbermaxquestions,availableQuestions.length);
	
	score=0;
	totalscore=0;
	numbercurrentQuestions=0;
	
	introQuizzDiv.style.display="none";
	panelQuizzDiv.style.display="flex";
	progressBarQuizzDiv.style.display="flex";
	endQuizzDiv.style.display="none";
	displayNextQuestion();
}

function firstQuestionFullscreen()
{
	if (screenfull.isEnabled) 
	{
		screenfull.request(quizzDiv);
	}
	
	setTimeout(firstQuestion,500); // We take the time so that the div is fullscreened...
}


function displayNextQuestion()
{
	buttonNext.hidden=true;     // We do not show the button Next!
	
	textQuizzDiv.style.visibility="hidden";  // We do not show the question before MathJax has finished
	answersQuizzDiv.style.visibility="hidden"; 
	
	correctionQuizzDiv.innerHTML="";   // We do not show anything in the correction panel!
	
	
	if ( (availableQuestions.length==0) || (numbercurrentQuestions>=numbermaxQuestions) )
	{
		stopQuizz();  // No more questions... It is the end of the quizz
		return;
	}
	
	if ( (theQuizz.globaltimer==true) && (theQuizz.timer>=0) )
	{
		if (countdown.getTimeRemaining()<=0)
		{
			stopQuizz();   // No more time... It is the end of the Quizz
			return;
		}
	}	
	
	numbercurrentQuestions+=1;
	
	if (theQuizz.randomizedQuestions==true) 
	{
		indexQuestion=Math.floor(Math.random()*availableQuestions.length);
	}
	else
		indexQuestion=0;
	currentQuestion=availableQuestions[indexQuestion];
	availableQuestions.splice(indexQuestion, 1);    // We delete the question we have in mind!	
	
	textQuizzDiv.innerHTML="";
	
	
	if (typeof(currentQuestion.qimage) != 'undefined')
	{
		if (currentQuestion.qimage !="")
			textQuizzDiv.innerHTML+='<div class=equation><img src="images/'+currentQuestion.qimage+'" style="max-width:600px;" />';
	}
	
	switch (currentQuestion.type)
	{
		case 'qu' :
			mytext="<p>"+currentQuestion.text+"</p>";
			if (currentQuestion.svg) 
			{
				mytext+='</p><div>'+currentQuestion.svg+'</div></p>';
			}
			textQuizzDiv.innerHTML+=mytext;
			// We add children to the panel buttons.
			// The answers are displayed randomly!
			answersQuizzDiv.innerHTML="";  // We delete all childs!
			var myanswers= new Array();
			
			for (i=0;i<currentQuestion.answers.length;i++)
			{
				myanswers[i] = { text: currentQuestion.answers[i], number:i };
			}
			
			while (myanswers.length >0 )
			{
				if (theQuizz.randomizedAnswers)
					indexAnswer=Math.floor(Math.random()*myanswers.length);
				else
					indexAnswer=0;
				mybutton=document.createElement("BUTTON");
				mybutton.innerHTML=myanswers[indexAnswer].text;
				if (theQuizz.twoColumns)
					mybutton.style.width="45%";
				if (currentQuestion.correctAnswers[myanswers[indexAnswer].number]==true)
				{
					mybutton.className="goodbutton";
					mybutton.addEventListener("click", goodAnswer, false);
				}
				else
				{
					mybutton.className="badbutton";
					mybutton.addEventListener("click",badAnswer,false);
				}
				myanswers.splice(indexAnswer,1);
				answersQuizzDiv.appendChild(mybutton);
			}
			
			
			break;
		
		
		case 'qcm':
			textQuizzDiv.innerHTML+="<p>"+currentQuestion.text+"</p>";
			// We add children to the panel buttons.
			// The answers are displayed randomly!
			answersQuizzDiv.innerHTML="";  // We delete all childs!
			var myanswers= new Array();

			for (i=0;i<currentQuestion.answers.length;i++)
			{
				myanswers[i] = { text: currentQuestion.answers[i], number:i };
			}
			
			while (myanswers.length >0 )
			{
				if (theQuizz.randomizedAnswers)
					indexAnswer=Math.floor(Math.random()*myanswers.length);
				else
					indexAnswer=0;
				var mycheckbox=document.createElement("input");
				var mydiv=document.createElement('div');
				var mylabel=document.createElement('label');
				mydiv.addEventListener("click",clickDivCheckbox,false);
				mycheckbox.type='checkbox';
				mylabel.innerHTML=myanswers[indexAnswer].text;
				if (theQuizz.twoColumns)
					mydiv.style.width="45%";
				if (currentQuestion.correctAnswers[myanswers[indexAnswer].number]==true)
				{
					mycheckbox.className="goodcheckbox";
					mydiv.className="gooddiv";
				}
				else
				{
					mycheckbox.className="badcheckbox";
					mydiv.className="baddiv";
				}
				myanswers.splice(indexAnswer,1);
				mydiv.appendChild(mycheckbox);
				mydiv.appendChild(mylabel);
				answersQuizzDiv.appendChild(mydiv);
			}
			break;

			
		case 'field':
			answersQuizzDiv.innerHTML="";  // We delete all childs!
			var mytext="";
			if (currentQuestion.svg) 
			{
				mytext+='<div>'+currentQuestion.svg+'</div>';
			}
			mytext+="<p>";
			for (i=0;i<currentQuestion.beforeField.length;i++)
			{
				if (typeof(currentQuestion.linebreak) != 'undefined')  // Pour des raisons de compatibilité!
				{
					if (currentQuestion.linebreak[i]) mytext+="</p><p>";
				}
				mytext+=currentQuestion.beforeField[i];
				if (!currentQuestion.inlineField[i])
					mytext+="</p><p style='width:100%'></p><div style='margin:auto; display:flex; justify-content:center;'>";
		//		mytext+=" <input type='text' size='"+currentQuestion.fieldWidth[i]+"' id='answerField"+i+"' onkeyup='checkEnter(event)'> ";
				mytext+="<input type='text' style='width:"+(currentQuestion.fieldWidth[i]*1.2)+"em' id='answerField"+i+"' onkeyup='checkEnter(event)'> ";
				  // Ne pas mettre d'espace, par exemple pour Chasles. La largeur du champ est adaptée pour Chasles, à vérifier ailleurs!
				if (!currentQuestion.inlineField[i])
					mytext+="</div><p>"+currentQuestion.afterField[i]+"</p>";
				else
					mytext+=currentQuestion.afterField[i];
			}
			
			answersQuizzDiv.innerHTML=mytext;
			document.getElementById('answerField0').focus();
			break;
			
		case 'noanswer':
			textQuizzDiv.innerHTML+="<p>"+currentQuestion.text+"</p>";
			if (currentQuestion.svg) 
			{
				textQuizzDiv.innerHTML+='<div>'+currentQuestion.svg+'</div>';
			}
			answersQuizzDiv.innerHTML="";
						
			break;
			
	}
	
	
	makeProgressBar();

	
	// We tell to MathJax to format mathematics of the new question
	
	MathJax.Hub.Queue(["Typeset",MathJax.Hub,panelQuizzDiv]);
	
	// We start the Quizz after MathJax has done everything...
	
	MathJax.Hub.Queue(function () {
		textQuizzDiv.style.visibility="visible";
		answersQuizzDiv.style.visibility="visible";
		if (theQuizz.timer>=0)
		{
			if (theQuizz.globaltimer==true)
			{
				countdown.restart();  // We adjust the time for each question
			}
			else
			{
				countdown.reset();
				countdown.start();   // Anyway we have to start the countdown, whereas it is a local or a global countdown
			}
		}
		// After the countdown is started...
		switch (currentQuestion.type)
		{
			case 'qcm':
				validationButtonQcm.hidden=false;
				break;
			case 'noanswer':
				validationButtonDelayed.hidden=false;
				break;
			case 'field':	
				validationButtonField.hidden=false;
				break;

		}
	});
}

function makeProgressBar()
{
	var mytext="<span style='align:left'>Question : "+numbercurrentQuestions+"/"+numbermaxQuestions+"</span>";
	if (totalscore>0)
		mytext+="<span style='align:right'>Score : "+score+"/"+totalscore+"</span>";
		
	progressBarQuizzDiv.innerHTML=mytext;
}


function gotoNextQuestionDelayed()
{
	if ( (theQuizz.timer>=0)  )
	{		
		// We stop the timer, if it is not finished
		countdown.stop();
	}
	prepareNewQuestion(0);
}
	
// Prépare une nouvelle question 
	
function prepareNewQuestion(result)
{
	
	if ( (theQuizz.timer>=0)  )
	{		
		countdown.stop();
	}
	correctionQuizzDiv.style.visibility="hidden";
	if (currentQuestion.type!="noanswer")
	{
		totalscore++;
		if (result)
		{
			correctionQuizzDiv.innerHTML=currentQuestion.goodAnswer;
			listofAnswers[numbercurrentQuestions]=currentQuestion.goodAnswer;
			
			if (theQuizz.answersound)
			{		
				goodsound.play();
			}
			score++;
		}
		else
		{
			correctionQuizzDiv.innerHTML=currentQuestion.badAnswer;
			listofAnswers[numbercurrentQuestions]=currentQuestion.badAnswer;			
			if (theQuizz.answersound)
				badsound.play();
		}
	}
	else
	{
		correctionQuizzDiv.innerHTML=currentQuestion.answer;
		listofAnswers[numbercurrentQuestions]=currentQuestion.answer;
	}
		
	
	
	
	if (theQuizz.type=="immediate")
	{
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,correctionQuizzDiv]);  // We ask MathJax to interpret properly this element!
		MathJax.Hub.Queue( function () { correctionQuizzDiv.style.visibility='visible'; });
		switch (currentQuestion.type)
		{
			case 'qu' :
				// We desactivate the buttons!
				buttons=answersQuizzDiv.childNodes; 
				for (var i=0; i<buttons.length;i++)
				{
					if (buttons[i].className=="badbutton")
					{
						buttons[i].className="badbuttonend";
					}
					else
					{
						buttons[i].className="goodbuttonend";
					}
					buttons[i].disabled=true;

				}
				break;
			case 'qcm' :
				// We desactivate everything
				dives=answersQuizzDiv.childNodes; 
				for (var i=0; i<dives.length;i++)
				{
					if ( (dives[i].className=="gooddiv") || (dives[i].className=="baddiv"))
					{
						dives[i].removeEventListener("click",clickDivCheckbox);
						checkboxes=dives[i].childNodes;
						for (var j=0;j<checkboxes.length;j++)
						{
							if (checkboxes[j].type=="checkbox")
								checkboxes[j].disabled=true;
						}	
					}
					if (dives[i].className=="gooddiv")
					{
						dives[i].className="gooddivend";
					}
					if (dives[i].className=="baddiv")
					{
						dives[i].className="baddivend";
					}				
				}
				validationButtonQcm.hidden=true;
				break;
			case 'field' :
				validationButtonField.hidden=true;
				var field;
				for (i=0;i<currentQuestion.beforeField.length;i++)
				{
					field=document.getElementById("answerField"+i);
					field.disabled=true;
				}
				break;
			case 'noanswer' :
				validationButtonDelayed.hidden=true;
				break;
		}
		// We display the button which allows to go to the next question
		buttonNext.hidden=false;
	}
	else
	{
		// We go directly to the next Question
		displayNextQuestion();
	}
	
	
	makeProgressBar();
	
}

function goodAnswer(e)
{
	prepareNewQuestion(true);
}

function badAnswer(e)
{
	prepareNewQuestion(false);
}

// The next function is called at the end of a question with multiple choice

function checkAnswers()
{
	var valid=true;

	// We verify that all valid checkboxes are checked

	
	checkboxes=document.getElementsByClassName("goodcheckbox");
	
	
	for (var i=0;i<checkboxes.length;i++)
		valid=valid && checkboxes[i].checked;
	
	// We verify that all unvalid checkboxes are checked
	
	checkboxes=document.getElementsByClassName("badcheckbox");
	
	
	for (var i=0;i<checkboxes.length;i++)
		valid=valid && (!checkboxes[i].checked);	

	
	prepareNewQuestion(valid);
		
}

// This function is called if we validate a field question

function checkAnswerField()
{
	var i,j,validall=true,valid=false;
	
	for (i=0;i<currentQuestion.beforeField.length;i++)
	{	
		answerField=document.getElementById("answerField"+i);
		valid=false;	
		if (Array.isArray(currentQuestion.correctAnswer[i]))
		{
			for (j=0;j<currentQuestion.correctAnswer[i].length;j++)
			{
			/*	console.log("a"+currentQuestion.correctAnswer[i][j]);
				console.log("b"+answerField.value);
				console.log(valid);*/
				valid=( valid || (answerField.value==currentQuestion.correctAnswer[i][j])) && (answerField.value.length>0) ; 
				//console.log(answerField.value.length);
			}
		}
		else valid=(answerField.value==currentQuestion.correctAnswer[i]) && (answerField.value.length>0); 
		//console.log(answerField.value.length);
		validall = validall && valid;
		//console.log("i"+i);
		//console.log("all"+validall);
	}
	prepareNewQuestion(validall);
}

function checkEnter(e)
{
	if ( (e.keyCode==13) && (e.target.id=="answerField") ) 
		checkAnswerField();
}

// This function is called if the timer is finished

function endofTime()
{
	// The countdown is already stopped by countdown itself.

	// countdown.stop();
	switch (currentQuestion.type)
	{
		case 'qu':
			badAnswer();
			break;
		case 'qcm':
			checkAnswers();
			break;
		case 'field':
			checkAnswerField();
			break;
		case 'noanswer':
			//validationButtonDelayed.hidden=true;	
			prepareNewQuestion(0);
			break;
	}
}

// This function is called if a div containing a checkbox is clicked
function clickDivCheckbox(e)
{
	childs=e.target.childNodes;
	for (var i=0;i<childs.length;i++)
	{
		if (childs[i].type=="checkbox")
		{
			childs[i].checked=!childs[i].checked;
		}
	}
}
	

function stopQuizz()
{
	if (theQuizz.timer>=0) 
	{
		countdown.stop();
		countdown.reset();
	}
	
	panelQuizzDiv.style.display='none';
	endQuizzDiv.style.display='flex';
	textQuizzDiv.innerHTML="";
	progressBarQuizzDiv.style.display="none";
	answersQuizzDiv.innerHTML="";
	correctionQuizzDiv.innerHTML="";
	
	MathJax.Hub.Queue(function () {
		buttonNext.hidden=true;
		validationButtonDelayed.hidden=true;
		validationButtonField.hidden=true;
		validationButtonQcm.hidden=true;
	});
	
	var mytext="";
	
	//
	if (totalscore>0)
		mytext="<p class=untexte>"+myLangQuizz.yourScore+" : "+score+"/"+totalscore+".</p>";
	mytext+="<div>"+theQuizz.lastPage+"</div>";
	
	if (theQuizz.type=='delayed')
	{
		mytext+="<P>"+myLangQuizz.theCorrectAnswers+"</p>";
		if (theQuizz.twoColumns)
			mytext+="<div class='listanswerstwocolumns'>";
		else
			mytext+="<div class='listanswers'><ul>";
		for (var i=1;i<=Math.min(numbermaxQuestions,numbercurrentQuestions);i++)
			mytext+="<li>Q"+i+". "+listofAnswers[i]+"</li>";
		mytext+="</ul></div>";
	}
	mytext+="<div class='panelbuttonsintro'><button onclick='firstQuestion()' class='startbutton'>"+myLangQuizz.startAgain+"</button>";
	
	if (theQuizz.options.length>0)
		mytext+="<button onclick='startandrestartQuizz()' class='startbutton'>"+myLangQuizz.changeParameters+"</button>";
	
	mytext+="</div>";

	endQuizzDiv.style.visibility="hidden";
	endQuizzDiv.innerHTML=mytext;
	
	MathJax.Hub.Queue(["Typeset",MathJax.Hub,endQuizzDiv]);
	
	MathJax.Hub.Queue(function () {
		endQuizzDiv.style.visibility="visible";
		});
	
}

// Some javascript to handle the formular to choose...

function enableTimer()
{
	var timerNumber=document.getElementById('timer');
	timerNumber.disabled=false;
	
}

function disableTimer()
{
	var timerNumber=document.getElementById('timer');
	timerNumber.disabled=true;
}

