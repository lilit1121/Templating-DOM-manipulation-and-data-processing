const main_container = document.getElementById("main_container");
let main_data = [];
(async function getCountriesDataByRegion() {
  await fetch(`https://restcountries.com/v3.1/region/${"europe"}`)
    .then((res) => res.json())
    .then((data) => (main_data = data));
  console.log(main_data);
})();

function showCountrys(c) {
  for (let i = 0; i < main_data.length; i++) {
    main_container.innerHTML += `<div id="main_container" class="col">
    <div class="card shadow-sm"> 
      <img src="https://picsum.photos/seed/1/300/225" />
      <div class="card-body">  
        <h5>
          Five impactful tips to accelerate your enterprise’s innovative
          success today
        </h5>   
        <p class="card-text">
          <small
            >A webinar that innovation leaders shouldn’t miss. A survey of
            217 enterprise organizations found that a staggering 23% of
            innovation programs fail. Many businesses don’t provide
            innovation managers with what they need to succeed. A lack of
            resources, ballooning &#8230;</small
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
