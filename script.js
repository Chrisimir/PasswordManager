"use strict"

var sitesArray = document.getElementsByClassName("site");
var searchBar = document.getElementById("searchBar")

window.onload = function()
{
    var credentialElements = document.getElementsByTagName("li");
    for( var i = 0; i < credentialElements.length; i++)
    {
        credentialElements[i].addEventListener("click", function() 
        { 
            showCredentials(credentialElements[i].parentElement.parentElement.getAttribute("id"),
                             credentialElements[i].getElementsByClassName("user")[0].innerHTML); 
        });
    }

    // Starts the clipboard function
    new Clipboard('.glyphicon-paperclip');

    // Search bar listenner
    searchBar.addEventListener("keyup", makeSearch);
};

function showCredentials()
{
        window.open("https://sellercentral.amazon.es/gp/homepage.html/ref=ases_topnav?ld=SEESSOAADGog-Generic-Branded_marketplace-amazon_kwd-35886458016_b_163104701498_c",
         "_blank",
          "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=525,height=700");
        document.getElementById("credentials").innerHTML = 
        "<div class='panel panel-primary'>" +
        "<div class='panel-heading'>" +
            "<h3 class='panel-title'>Usuario</h3>" +
        "</div>" +
        "<div class='panel-body'>" +
            "<span id='userText'>UsuarioTemo</span>" +
            "<span class='glyphicon glyphicon-paperclip' data-clipboard-target='#userText' aria-hidden='true'></span>" + 
        "</div>" +
        "</div>" +
        "<div class='panel panel-danger'>" +
            "<div class='panel-heading'>" +
                "<h3 class='panel-title'>Constraseña</h3>" +
            "</div>" +
            "<div class='panel-body'>" +
                "<span id='passText'>ConstraseñaTemp</span>" +
                "<span class='glyphicon glyphicon-paperclip' data-clipboard-target='#passText' aria-hidden='true'></span>" +
            "</div>" +
        "</div>";
    }

function makeSearch()
{
    var searchText = searchBar.value.toLowerCase();
    for( var i = 0; i < sitesArray.length; i++)
    {
        if(sitesArray[i].getAttribute("id").includes(searchText))
        {
            sitesArray[i].style.display = 'block';
        }
        else
        {
            sitesArray[i].style.display = 'none';
        }
    }
}