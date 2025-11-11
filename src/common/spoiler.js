
function showAll(idinner,idimage)
{
    var inner = document.getElementById(idinner);  // On affiche, ou pas, le contenu….
    var image = document.getElementById(idimage);

    if (inner.style.display == "none")
    {
        inner.style.display = "";
        image.setAttribute("src","../img/flechebas.png");
    }
    else
    {
        inner.style.display = "none";
        image.setAttribute("src","../img/flechedroite.png");          
    }
}


function showInner(idinner)
{
    var inner=document.getElementById(idinner);
    if (inner.style.display!="block")
    {
        inner.style.display="block";
    }
    else
    {
        inner.style.display="none";
    }
}
    
