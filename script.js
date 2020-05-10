let url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();
request.onload = function() {
    let apartamentos = request.response;
    dadosApart(apartamentos);
}

function dadosApart(t) {
    for (var i = 0; i < 24; i++) {
        var img = document.querySelectorAll('#foto')[i];
        img.src = t[i]['photo'];
        var destaque = document.getElementsByClassName('destaque')[i];
        destaque.innerHTML = t[i]['property_type'];
        var local = document.getElementsByClassName("local")[i];
        local.innerHTML = t[i]['name'];
        var preco = document.getElementsByClassName('preco')[i];
        preco.innerHTML = "R$ " + t[i]['price'] + ",00";
    }

}