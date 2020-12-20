document.querySelector("#durum").addEventListener("click",function (){
    if (document.getElementById('durum').checked) {
        chrome.storage.local.set({
            'youtube_reccomendation_durum': "yes"
        });
        // localStorage.setItem("youtube_reccomendation_durum","yes");

    } else {
        chrome.storage.local.set({
            'youtube_reccomendation_durum': "no"
        });
        // localStorage.setItem("youtube_reccomendation_durum","no");


    }
})

chrome.storage.local.get('youtube_reccomendation_durum', function(data) {
    if(data.youtube_reccomendation_durum === "yes")
        document.querySelector("#durum").checked=true;
    else
        document.querySelector("#durum").checked=false;

});
