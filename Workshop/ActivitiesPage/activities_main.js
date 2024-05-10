document.addEventListener("DOMContentLoaded", () => {

    for (cat of categories) {
        const option = document.createElement("option");
        option.innerHTML = cat;
        catsElement.appendChild(option);
    }
    catsElement.addEventListener("change", e => {
        details.innerText = "";
        // option.innerText "Select an Activity";
        // activitiesElement.innerHTML = `<option value="">Select an Activity</option>`;
        for (let a of activities) {
            if (catsElement.value == a.category) {
                const option = document.createElement("option");
                option.innerHTML = a.name;
                activitiesElement.appendChild(option)
            }
        }
        activitiesElement.dispatchEvent(new Event("change"))
    });

    activitiesElement.addEventListener("change", e => {
        details.innerText = "";
        for (a of activities) {
            if (a.name == activitiesElement.value) {
                details.innerText = `
                Activity ID: ${a.id}
                
                ${a.description}

                Located At: ${a.location}

                Price: $${a.price.toFixed(2)}
                `;
            }
        }
    });

}); //END LOADED