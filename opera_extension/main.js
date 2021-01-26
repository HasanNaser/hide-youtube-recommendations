
var justDoIt = function (){

    let noti_element = document.querySelector(".notification-button-style-type-default");
    (noti_element) ? noti_element.remove() : null;

    // let searchbar_element = document.querySelector("#search-form");
    // searchbar_element.style.border="5px solid red";
    // searchbar_element.style.caretColor ="red";
    // searchbar_element.parentElement.parentElement.removeAttribute("class");
    // searchbar_element.parentElement.parentElement.style.width="60%";

    if (window.location.href.indexOf("watch?v=") < 0) {
        let recommended_element = document.querySelector("#dismissable")
        let side_menu = document.querySelector("#guide-content");
        document.querySelector("#primary").style.display = "none";

        if(recommended_element){
            recommended_element.style.display = "none";
        }
        if(side_menu){
            side_menu.style.display = "none";
        }
    } else {
        let related_element = document.querySelector("#related")
        // let comments_element = document.querySelector("#comments")
        if(related_element){
            related_element.parentElement.parentElement.style.display= "none";
        }
        // if(comments_element){
        //     comments_element.style.display = "none";
        // }
    }







}


chrome.storage.local.get('youtube_reccomendation_durum', function(data) {
    if(data.youtube_reccomendation_durum === "yes")
        if (document.querySelector("#polymer-app") || document.querySelector("#masthead") || window.Polymer) {
            justDoIt()
            setInterval(function () {
                justDoIt()
            }, 400);
        }

});



