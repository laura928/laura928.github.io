window.onload=function()
{
    var icon = document.getElementById("iconM");
    function Deploy()
    {
        document.getElementById("show-menu").classList.toggle('show-lateral');
    }
    
    icon.addEventListener("click", Deploy);
}




