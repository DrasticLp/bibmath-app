// Essaie de fixer la div de menu lors d'un scrolling...
var afixer = document.getElementById("menuhaut");
var adecaler = document.getElementById("main");
var position=afixer.offsetTop;
var pubdroite = document.getElementById("pubdroite");
var positiondroite=pubdroite.offsetTop-45;
var tailleinitiale=document.getElementById("main").offsetHeight;




function scrolled(){
	var windowHeight = document.body.clientHeight,
		currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
	
	if (currentScroll>=position)
	{
		afixer.className = "fixed";
		adecaler.className = "decale";
	}
	else
	{
		afixer.className="";
		adecaler.className="";
	}
	
	if (currentScroll>=positiondroite)
	{
		marge=Math.min(currentScroll-positiondroite,tailleinitiale-800);

		pubdroite.style.marginTop = marge+"px";
	}

}

addEventListener("scroll", scrolled, false);

