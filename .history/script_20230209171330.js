const main_container = document.getElementById("main_container");
const content_section = document.getElementById("content_section");
const page_item = document.querySelectorAll(".page-item");
const loadding = document.getElementById("loadding");
const error = document.getElementById("error");
let countriesData;
let sliceStart = 0;
let currentPage = 1;

page_item.forEach((el) =>
  el.addEventListener("click", (event) => changePage(event))
);

function changePage(e) {
  if (e.target.classList.contains("disabled")) return;
  if (e.target.innerText === "Next") {
    sliceStart += 5;
    currentPage++;
  } else if (e.target.innerText === "Previous") {
    sliceStart -= 5;
    currentPage--;
  } else {
    currentPage = +e.target.innerText;
    sliceStart = (+e.target.innerText - 1) * 5;
  }
  setClasses();
  showCountrys(countriesData, sliceStart);
}

function setClasses() {
  page_item.forEach((el) => {
    el.classList.remove("active", "disabled");
    if (currentPage === +el.innerText) el.classList.add("active");
    else if (
      (currentPage === 1 || currentPage === 3) &&
      (el.innerText === "Previous" || el.innerText === "Next")
    )
      el.classList.add("disabled");
  });
}

function showCountrys(countriesData, sliceStart) {
  let countrys = countriesData.slice(sliceStart, sliceStart + 5);
  content_section.innerHTML = "";
  for (let i = 0; i < countrys.length; i++) {
    content_section.innerHTML += `<div id="content_section" class="col">
    <div class="card shadow-sm"> 
    <div>
      <img src=${countrys[i].flags.png} />
      </div>
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
        
      </div>
    </div>
    </div>  `;
  }
}

(async function getCountriesDataByRegion() {
  loadding.style.display = "contents";
  main_container.style.display = "none";
  await fetch(
    `https://restcountries.com/v3.1/region/${
      window.location.pathname.slice(1).split(".")[0]
    }`
  )
    .then((res) => res.json())
    .then((data) => {
      countriesData = data.slice(0, 15);
      showCountrys(countriesData, sliceStart);
      main_container.style.display = "block";
    })
    .catch(() => (error.style.display = "flex"))
    .finally(() => (loadding.style.display = "none"));
})();
