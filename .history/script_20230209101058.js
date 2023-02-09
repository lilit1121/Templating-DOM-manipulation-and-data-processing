const main_container = document.getElementById("main_container");

(async function getCountriesDataByRegion() {
  await fetch(`https://restcountries.com/v3.1/region/${"europe"}`)
    .then((res) => res.json())
    .then((data) => (main_data = data));
  console.log(main_data);
})();


