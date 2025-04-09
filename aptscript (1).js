function loadDoc(url, func) {
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if (xhttp.status != 200) {
            console.log("Error");
        } else {
            func(xhttp.response);
        }
    }
    xhttp.open("GET", url);
    xhttp.send();
}

function apt_search() {
    let txtSearch = document.getElementById("txtSearch").value.trim();
    let bedSort = document.getElementById("bedSort").value;
    let bathSort = document.getElementById("bathSort").value;
    let rentSort = document.getElementById("rentSort").value;

//    let values = `?bedSort=${bedSort}&bathSort=${bathSort}&rentSort=${rentSort}`
//    let url = txtSearch ? `/apts/${encodeURIComponent(txtSearch)}${values}` : `/apt/all${values}`

    let url = `/apts/${txtSearch}?rentSort=${rentSort}&bedSort=${bedSort}&bathSort=${bathSort}`;

    loadDoc(url, apt_search_response);
}

function apt_search_response(response) {
    let data = JSON.parse(response);
    let result = data["result"];

    let divResults = document.getElementById("divResults");
    divResults.innerHTML = ""; // Clear previous results

    if (result.length === 0) {
        divResults.innerHTML = "<p class='no-results'>No listings found.</p>";
        return;
    }

    for (let i = 0; i < result.length; i++) {
        let apt = result[i];

        let card = document.createElement("div");
        card.classList.add("apartment-card");
        card.style.animationDelay = `${i * 100}ms`; // Optional: stagger animation

        card.innerHTML = `
            <div class="apt-header">
                <h3>${apt["title"]}</h3>
                <p class="rent-price">$${apt["rent"].toLocaleString()}</p>
            </div>
            <p class="apt-description">${apt["description"]}</p>
            <p class="apt-details">
                <strong>Bedrooms:</strong> ${apt["bedrooms"]} |
                <strong>Bathrooms:</strong> ${apt["bathrooms"]}
            </p>
        `;

        divResults.appendChild(card);
    }
}





console.log("Script Loaded");