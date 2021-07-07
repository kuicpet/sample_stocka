// DOM Elements
const table = document.querySelector(".table_body");
const loader = document.querySelector("#loader");


// Loader
function showLoader() {
    loader.className = "show";
    setTimeout(() => {
        loader.className = loader.className.replace("show", "");
    }, 3000);
}

// Loading animation
showLoader();

// Fetch Data
const url = "" // Endpoint
fetch(url)
    .then(response => response.json())
    .then(data => {
        const results = data;
        
        console.log(results)
         // map results
        results.map((item) => {
            // create tr element
            let tr = document.createElement("tr");

            // create html markup using string literals
            let markUp = `
            <th scope="row"></th>
            <td>${item.name} <small>(${item.symbol})</small></td>
            <td class="text-green">+${item.gain} (${item.percentage}%)</td>
            <td><button class="btn btn-green"><small>$${item.price}</small></button></td>
        `;
            tr.innerHTML += markUp;

             // append tr to table
            table.appendChild(tr);
        })
       
        

        

        

       
    });