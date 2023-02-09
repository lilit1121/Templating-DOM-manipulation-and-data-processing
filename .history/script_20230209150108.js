const main_container = document.getElementById("main_container");
const page_item = document.querySelectorAll(".page-item");
let countriesData;
let sliceStart = 0;
let currentPage = 1;


console.log(window.location.pathname.slice(1).split(''));


page_item.forEach((el) => {
  el.addEventListener("click", (event) => {
    changePage(event);
  });
});

function changePage(e) {
  if (e.target.innerText === "Next" && sliceStart < 10) {
    sliceStart += 5;
    currentPage = (sliceStart - 5) / 5 + 2;
  } else if (e.target.innerText === "Previous" && sliceStart > 0) {
    sliceStart -= 5;
    currentPage = (sliceStart + 5) / 5;
  } else if (
    e.target.innerText === "1" ||
    e.target.innerText === "2" ||
    e.target.innerText === "3"
  ) {
    currentPage = +e.target.innerText;
    sliceStart = (+e.target.innerText - 1) * 5;
  }
  page_item.forEach((el) => {
    el.classList.remove("active");
    el.classList.remove("disabled");
    if (currentPage === +el.innerText) el.classList.add("active");
    else if (currentPage === 1 && el.innerText === "Previous")
      el.classList.add("disabled");
    else if (currentPage === 3 && el.innerText === "Next")
      el.classList.add("disabled");
  });
  showCountrys(countriesData, sliceStart);
}

function showCountrys(countriesData, sliceStart) {
  let countrys = countriesData.slice(sliceStart, sliceStart + 5);
  main_container.innerHTML = "";
  for (let i = 0; i < countrys.length; i++) {
    main_container.innerHTML += `<div id="main_container" class="col">
    <div class="card shadow-sm"> 
      <img src=${countrys[i].flags.png} />
      <div class="card-body">  
        <h4>
          Country: ${countrys[i].name.official}
        </h4>   
        <h5>
          Country: ${countrys[i].capital ? countrys[i].capital[0] : undefined}
        </h5> 
        <p class="card-text">
          <small
            >Population: ${countrys[i].population}</small
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
// europe africa americas oceania asia
(async function getCountriesDataByRegion() {
  await fetch(`https://restcountries.com/v3.1/region/${"europe"}`)
    .then((res) => res.json())
    .then((data) => {
      countriesData = data.slice(0, 15);
      showCountrys(countriesData, sliceStart);
    });
})();
