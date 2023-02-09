const main_container = document.getElementById("main_container");
let main_data;
(async function getCountriesData() {
  await fetch(`https://restcountries.com/v3.1/region/${"europe"}`)
    .then((res) => res.json())
    .then((data) => (main_data = data));
  console.log(main_data);
})()

for(let i=0; i<main_data.length; i++){

}

