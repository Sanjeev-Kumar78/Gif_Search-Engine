var api = "2wRlIuIZQn7N6V8EhtxGOW36eJDGyTu6"
// Search Button and Enter Key
document.querySelector(".container-button").addEventListener('click', function () {
    var input = document.querySelector("input").value;
    AJAX(input);
});
document.querySelector("input").addEventListener('keydown', function (event) {
    var input = document.querySelector("input").value;
    if (event.key === 'Enter') {
        AJAX(input);
    }
});

//For Stickers

function AJAX(input) {
    var userask = prompt("Ex: Stickers or Gifs:").toLowerCase();
    if (userask == "gifs" || userask == "gif") {
    var url = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key="+api+"&limit=10";
    }
    else if (userask == "stickers" || userask == "sticker") {
        var url = "https://api.giphy.com/v1/stickers/search?q=" + input + "&api_key="+api+"&limit=10";
    }
    else {
        alert("Please enter Stickers or Gifs:");
        AJAX(input);
    }
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', function (e) {
        var data = e.target.response;
        pushToDOM(data, input,userask);
    })
};


// Push to DOM 
function pushToDOM(data,input,userask) {
    var container = document.querySelector(".container-results");
    container.innerHTML = "<h2>" + input +" "+userask+ "</h2>";
    var response = JSON.parse(data);
    response.data.forEach(function (image) {
        var src = image.images.fixed_height.url;
        container.innerHTML += "<img style='padding:2px' src=" + src + ">";
    });
};

