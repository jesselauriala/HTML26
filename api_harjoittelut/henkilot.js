const henkilolista = document.getElementById("henkilolista");
const tila = document.getElementById("tila");

async function haeHenkilot() {
    try {
        const vastaus = await fetch("https://randomuser.me/api/?results=50&gender=male&nat=fi");

        if (!vastaus.ok) {
            throw new Error("Henkilöiden haku epäonnistui.");
        }

        const tiedot = await vastaus.json();
        naytaHenkilot(tiedot.results);
    } catch (virhe) {
        tila.textContent = "Henkilöiden lataaminen epäonnistui.";
        console.error(virhe);
    }
}

function naytaHenkilot(henkilot) {
    tila.textContent = `${henkilot.length} suomalaista miestä`;

    henkilolista.innerHTML = henkilot
        .map((henkilo) => {
            const nimi = `${henkilo.name.first} ${henkilo.name.last}`;

            return `
                <article class="henkilokortti">
                    <img src="${henkilo.picture.large}" alt="Kuva henkilöstä ${nimi}">
                    <div class="henkilotiedot">
                        <h2>${nimi}</h2>
                        <p>Kansallisuus:    FI  </p>
                        <p>Sähköposti: ${henkilo.email}</p>
                    </div>
                </article>
            `;
        })
        .join("");
}

haeHenkilot();
