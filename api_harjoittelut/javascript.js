document.getElementById('saaLomake').addEventListener('submit', function(event) {
    event.preventDefault(); // Estää sivun latautumisen uudelleen

    const kaupunki = document.getElementById('kaupunkiInput').value;
    const apiKey = 'YOUR_API_KEY'; // Laita tähän oma RapidAPI-avaimesi
    const apiHost = 'open-weather13.p.rapidapi.com';

    // Tehdään kutsu API:lle
    fetch(`https://open-weather13.p.rapidapi.com/city/${kaupunki}/EN`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiHost
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Kaupunkia ei löytynyt tai virhe API-kutsussa');
        }
        return response.json();
    })
    .then(data => {
        naytaSaa(data);
    })
    .catch(error => {
        console.error('Virhe:', error);
        alert('Sään haku epäonnistui: ' + error.message);
    });
});

function naytaSaa(data) {
    // Esimerkki siitä, miten voit tulostaa tiedot konsoliin tai lisätä ne sivulle
    console.log(data);
    
    // Tarkistetaan onko tulos-div jo olemassa, jos ei, luodaan se
    let tulosDiv = document.getElementById('saaTulos');
    if (!tulosDiv) {
        tulosDiv = document.createElement('div');
        tulosDiv.id = 'saaTulos';
        document.querySelector('.sovellus').appendChild(tulosDiv);
    }

    // Lämpötila on API:ssa Fahrenheit-asteina oletuksena joissain vastauksissa,
    // mutta tässä API:ssa se on usein valmiiksi Celsius-muodossa tai riippuu parametreista.
    // Järvenpään haku äsken antoi lämpötilaksi n. 42°F (n. 5.6°C).
    const celsius = ((data.main.temp - 32) * 5 / 9).toFixed(1);

    tulosDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Lämpötila: ${celsius} °C</p>
        <p>Säätila: ${data.weather[0].description}</p>
        <p>Ilmankosteus: ${data.main.humidity}%</p>
    `;
}