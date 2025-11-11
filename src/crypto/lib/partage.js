function cacher(entree,cle)
{
	var secret=parseInt(entree.value);
	var participants=parseInt(cle.value);
	var sortie;
	
	var part=new Array(participants);
	somme=0;
	
	for (var i=0;i<participants-1;i++)
	{
		part[i]=Math.floor(Math.random()*10000);
		somme+=part[i];
	}
	
	part[participants-1]=secret-somme;
	while (part[participants-1]<0) part[participants-1]+=10000;
	part[participants-1]=part[participants-1]%10000;
	
	sortie="";
	for (var i=0;i<participants;i++)
	{
		sortie+=part[i]+" ";
	}
	return (sortie);
}

function retrouver(entree,cle)
{
	var indice,indicefin,indicedebut;
	
	var participants=parseInt(cle.value);
	var text=entree.value;
	var total=0;
	var part=new Array(participants);
	
	indice=0;
	indicefin=-1;
	while (indicefin<text.length)
		{
			indicedebut=indicefin+1;
			while (text.charAt(indicedebut)==' ') indicedebut++;
			indicefin=indicedebut+1;
			fin=0;
			while (fin==0) 
			{
				if (indicefin<text.length) 
				{
					 if  (text.charAt(indicefin)==' ') fin=1;
				}
				else fin=1;
				if (fin==0) indicefin++;
			}
			part[indice]=parseInt(text.substr(indicedebut,indicefin-indicedebut));
			indice++;
		}		
		
	  for (var i=0;i<participants;i++) total+=part[i];
	  return (total%10000);
}