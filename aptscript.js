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

function apt_search_response(response){
    let data = JSON.parse(response);
    let result = data["result"];

    let temp = "<table><tr>"
    temp += "<th>Title</th>"
    temp += "<th>Description</th>";
    temp += "<th>Bedrooms</th>"
    temp += "<th>Bathrooms</th>"
    temp += "<th>Rent</th>"
    temp += "</tr>"

    for (let i = 0; i < result.length; i++) {
        let row = result[i];

        temp += "<tr>"
        temp += "<td>" + row["title"] + "</td>";
        temp += "<td>" + row["description"] + "</td>";
        temp += "<td>" + row["bedrooms"] + "</td>";
        temp += "<td>" + row["bathrooms"] +"</td>";
        temp += "<td>" + row["rent"] + "</td>";
        temp += "</tr>"
    }


    temp += "</table>"

    if (!temp) temp += "<h1>No listings found</h1>"

    let divResults = document.getElementById("divResults");

    divResults.innerHTML = temp;

}


console.log("Script Loaded");