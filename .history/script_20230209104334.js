const main_container = document.getElementById("main_container");
let sliceStart=0
function showCountrys(countriesData, sliceStart) {
  for (let i = 0; i < countriesData.length; i++) {
    main_container.innerHTML += `<div id="main_container" class="col">
    <div class="card shadow-sm"> 
      <img src=${countriesData[i].flags.png} />
      <div class="card-body">  
        <h4>
          Country: ${countriesData[i].name.official}
        </h4>   
        <h5>
          Country: ${countriesData[i].capital[0]}
        </h5> 
        <p class="card-text">
          <small
            >Population: ${countriesData[i].population}</small
          >
        </p>
        <p><a href="#">Read more &rarr;</a></p>
        <div class="d-flex justify-content-between align-items-center">
          <!-- Format date appropriately as per browser/device region format -->
          <small class="text-muted">Dec 10, 2021</small>
        </div>
      </div>
    </div>
    </div>  `;
  }
}

(async function getCountriesDataByRegion() {
  await fetch(`https://restcountries.com/v3.1/region/${"europe"}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showCountrys(data);
    });
})();
