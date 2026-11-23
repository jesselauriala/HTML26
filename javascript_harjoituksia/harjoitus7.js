async function haeKayttajat() {
            try {
                const response = await fetch("https://dummyjson.com/users");

                if (!response.ok) {
                    throw new Error(`Virhe: ${response.status}`);
                }

                const data = await response.json();
                const userList = document.getElementById("userList");

                data.users.forEach(user => {
                    const li = document.createElement("li");
                    li.textContent = `${user.firstName} ${user.lastName} - ${user.email}`;
                    userList.appendChild(li);
                });

            } catch (error) {
                console.error("Tietojen haku epäonnistui:", error);
            }
        }

        haeKayttajat();




        