const defaultSettings = Object.freeze({});


function loadSettings() {
    try {
        const raw = localStorage.getItem("settings");

        if (raw === null) {
            return { ...defaultSettings };
        }

        const settings = JSON.parse(raw);

        if (settings === null || typeof settings !== "object" || Array.isArray(settings)) {
            throw new TypeError("Asetusten JSON-arvon pitää olla objekti.");
        }

        return settings; 
    } catch (error) {
        console.error("Lataaminen epäonnistui:", error);
        return {...defaultSettings };
    }
}