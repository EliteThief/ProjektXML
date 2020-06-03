console.log("123")
var dodajOpinie = document.getElementById("dodanieKlienta");
console.log(dodajOpinie)
dodajOpinie.addEventListener("click", dodanieKlienta, false)

function dodanieKlienta() {
	console.log("alala")
    var czlekImie
    var czlekNazwisko
    var czlekEmail
    var nowyKlient
    var czleki = document.getElementById('czleki')

    czlekImie = document.getElementById('czlekImieInput').value || 'anonymous'
    czlekNazwisko = document.getElementById('czlekNazwiskoInput').value || 'anonymous'
    czlekEmail = document.getElementById('czlekEmailInput').value || 'anonymous'
	 console.log(czleki,czlekEmail,czlekNazwisko)
	nowyKlient = document.createElement('div')
	nowyKlient.classList.add('czlek');
    nowyKlient.innerHTML = '<div class="czlekImie">' + czlekImie + '</div> <div class="czlekNazwisko">' + czlekNazwisko + '</div> <div class="czlekEmail">' + czlekEmail + '</div>'
    czleki.appendChild(nowyKlient);


    
}