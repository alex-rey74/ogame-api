module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: xhr.responseXML.documentElement.nodeName
        };
    }

    xhr.onerror = function(){
        context.res = {
            body: "The XML document is unavailable"
        };
    }

    xhr.open("GET", "https://s167-fr.ogame.gameforge.com/api/players.xml");
    xhr.responseType = "document";
    xhr.send();
}