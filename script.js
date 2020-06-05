console.log("ABC")
var dodajOpinie = document.getElementById("dodanieKlienta");
dodajOpinie.addEventListener("click", dodanieKlienta)

var dodajNapoj = document.getElementById("napoje");
dodajNapoj.addEventListener("click", dodanieNapoju)

var dodajPrzekaske = document.getElementById("przekaski");
dodajPrzekaske.addEventListener("click", dodaniePrzekaski)

var pracownicy = document.getElementById('pracownicy');
pracownicy.addEventListener("click", edytujImiePracownika)

var sortowaniePoImieniu = document.getElementById('sortujPoImieniu');
sortowaniePoImieniu.addEventListener("click", sortujPoImieniu)

var sortowaniePoNazwisku = document.getElementById('sortujPoNazwisku');
sortowaniePoNazwisku.addEventListener("click", sortujPoNazwisku)



function dodanieKlienta() {
    var czlekImie = document.getElementById('czlekImieInput').value || 'Anonimowy'
    var czlekNazwisko = document.getElementById('czlekNazwiskoInput').value || 'Anonimowy'
    var czlekEmail = document.getElementById('czlekEmailInput').value || 'anonimowy@anonimowy.pl'
    var nowyKlient = document.createElement('div')
    var czleki = document.getElementById('czleki')

	nowyKlient.classList.add('czlek');
    nowyKlient.innerHTML = '<div class="czlekImie">Imie: ' + czlekImie + '</div> <div class="czlekNazwisko">Nazwisko:' + czlekNazwisko + '</div> <div class="czlekEmail">Email: ' + czlekEmail + '</div>'
    czleki.appendChild(nowyKlient)
}

function dodanieNapoju(event) {
	console.log(event)
    // gdy klikam na cokolwiek inne niz ikonke dodania, nie wykonuje funkcji
    if (!event.target.matches('.dodaj')) return
    // dodaje cyferke w liczniku
    event.target.previousElementSibling.innerHTML++    
}

function dodaniePrzekaski(event) {
    // gdy klikam na cokolwiek inne niz ikonke dodania, nie wykonuje funkcji
    if (!event.target.matches('.dodaj')) return
    // dodaje cyferke w liczniku
    event.target.previousElementSibling.innerHTML++    
}

function edytujImiePracownika(event) {
    //gdy klikam na ikonke edycji
    if (event.target.matches('.edytuj')) {
        // ukryj ikonke edycji
        event.target.classList.add('hidden')
        // ukryj imie
        event.target.previousElementSibling.children[0].classList.add('hidden')
        // pokaz input
        event.target.previousElementSibling.children[1].classList.remove('hidden') 
        // pokaz ikonke potwierdzenia
        event.target.nextSibling.classList.remove('hidden')  
    }
    // gdy klikam na ikonke potwierdzenia
    if(event.target.matches('.potwierdz')) {
        // podstaw nowe imie
        event.target.previousElementSibling.previousElementSibling.children[0].innerHTML = event.target.previousElementSibling.previousElementSibling.children[1].value || "Anonimowy"
        // ukryj ikonke potwierdzenia
        event.target.classList.add('hidden')
        // pokaz ikonke edycji
        event.target.previousElementSibling.classList.remove('hidden')
        // pokaz imie
        event.target.previousElementSibling.previousElementSibling.children[0].classList.remove('hidden')
        // ukryj input
        event.target.previousElementSibling.previousElementSibling.children[1].classList.add('hidden')
    }
}

function sortujPoImieniu() {
    var aktorzy = document.getElementsByClassName('persona')
    console.log(aktorzy)
    var lista = [];
    for(var i = 0; i < aktorzy.length; i++) { 
        lista[i] = aktorzy[i];
    }
    lista.sort(function(a, b) {
        var nameA = a.innerHTML.toUpperCase();
        var nameB = b.innerHTML.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;    
    });
    var rezultat = "";
    for (var i = 0; i < lista.length; i++) { 
        rezultat += lista[i].parentNode.outerHTML;
    }
    document.getElementById('aktorzy').innerHTML = rezultat;

}

function sortujPoNazwisku() {
    var aktorzy = document.getElementsByClassName('persona')
    var lista = [];
    for(var i = 0; i < aktorzy.length; i++) { 
        lista[i] = aktorzy[i];
    }
    lista.sort(function(a, b) {
        var nameA = a.innerHTML.split(' ')[1].toUpperCase();
        console.log(nameA)
        var nameB = b.innerHTML.split(' ')[1].toUpperCase();
        console.log(nameB)
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;    
    });
    console.log(lista)
    var rezultat = "";
    for (var i = 0; i < lista.length; i++) { 
        rezultat += lista[i].parentNode.outerHTML;
    }
    document.getElementById('aktorzy').innerHTML = rezultat;

}