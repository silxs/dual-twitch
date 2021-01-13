function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

(function () {
    "use strict";
    var items_size = "100%";

    /*
    if (getURLParameter("s3") != null || getURLParameter("s4") != null) {
        items_size = "50%";
    }
    */

    var s1 = (getURLParameter("s1") != null ? getURLParameter("s1") : "silxs");
    var s2 = (getURLParameter("s2") != null ? getURLParameter("s2") : "silxs");
    var s3 = (getURLParameter("s3") != null ? getURLParameter("s3") : "silxs");
    var s4 = (getURLParameter("s4") != null ? getURLParameter("s4") : "silxs");

    var chat1 = null;
    var player1 = null;
    var chat2 = null;
    var player2 = null;
    var chat3 = null;
    var player3 = null;
    var chat4 = null;
    var player4 = null;

    var chatTitle1 = null;
    var chatTitle2 = null;
    var chatTitle3 = null;
    var chatTitle4 = null;

    chatTitle1 = document.createElement("p");
    chat1 = document.createElement("iframe");

    chatTitle1.setAttribute("align", "center");
    chatTitle1.setAttribute("class", "chat-top-stream-title");
    chatTitle1.innerHTML = s1;

    chat1.setAttribute("frameborder", "0");
    chat1.setAttribute("scrolling", "no");
    chat1.setAttribute("height", items_size);
    chat1.setAttribute("width", "100%");
    chat1.setAttribute("src", "https://www.twitch.tv/embed/" + s1 + "/chat?parent=silxs.github.io&darkpopout");

    document.getElementById('chat1').appendChild(chatTitle1);
    document.getElementById('chat1').appendChild(chat1);

    chatTitle2 = chatTitle1.cloneNode(true);
    chat2 = chat1.cloneNode(true);


    chatTitle2.innerHTML = s2;
    chat2.setAttribute("src", "https://www.twitch.tv/embed/" + s2 + "/chat?parent=silxs.github.io&darkpopout");
    chat2.setAttribute("height", items_size);

    document.getElementById('chat2').appendChild(chatTitle2);
    document.getElementById('chat2').appendChild(chat2);


    player1 = document.createElement("iframe");
    player1.setAttribute("frameborder", "0");
    player1.setAttribute("allowfullscreen", "true");
    player1.setAttribute("scrolling", "no");
    player1.setAttribute("height", "50%");
    player1.setAttribute("width", items_size);
    player1.setAttribute("style", "float: left;");
    player1.setAttribute("muted", true);
    player1.setAttribute("src", "https://player.twitch.tv/?channel=" + s1 + "&parent=silxs.github.io&muted=yes");
    document.getElementById('players').appendChild(player1);

    player2 = player1.cloneNode(true);
    player2.setAttribute("src", "https://player.twitch.tv/?channel=" + s2 + "&parent=silxs.github.io&muted=yes");
    player2.setAttribute("width", items_size);
    player2.setAttribute("style", "float: right;");
    document.getElementById('players').appendChild(player2);

    /*
    if (getURLParameter("s3") != null) {
        chatTitle3 = chatTitle1.cloneNode(true);
        chat3 = chat1.cloneNode(true);

        chatTitle3.innerHTML  = s3;
        chat3.setAttribute("src", "https://www.twitch.tv/embed/" + s3 + "/chat?darkpopout");
        document.getElementById('chat1').appendChild(chat3);

        player3 = player1.cloneNode(true);
        player3.setAttribute("src", "https://player.twitch.tv/?channel=" + s3 + "&muted=yes");

        document.getElementById('chat3').appendChild(chatTitle3);
        document.getElementById('chat3').appendChild(chat3);
    }
    if (getURLParameter("s4") != null) {
        chatTitle4 = chatTitle1.cloneNode(true);
        chat4 = chat1.cloneNode(true);

        chatTitle4.innerHTML  = s3;
        chat4.setAttribute("src", "https://www.twitch.tv/embed/" + s4 + "/chat?darkpopout");
        document.getElementById('chat2').appendChild(chat4);

        player4 = player2.cloneNode(true);
        player4.setAttribute("src", "https://player.twitch.tv/?channel=" + s4 + "&muted=yes");

        document.getElementById('chat4').appendChild(chatTitle4);
        document.getElementById('chat4').appendChild(chat4);
    }
    */

})();
