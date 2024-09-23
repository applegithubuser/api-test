const loadCountries = () => {
    fetch ('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => displaycountry(data))
}

loadCountries()

const displaycountry =(countries) =>{

    // console.log(countries);

    const ui = document.getElementById('countries')

    countries.forEach( country => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML =`
            <img class="w-full h-48 border-2" src="${country.flags.png}" alt="">
            <h3 class="text-3xl font-semibold">Name: ${country.name.common} </h3>
            <p class="my-6"> Capital: ${country.capital} </p>
            <button onclick="loadCountryByName('${country.name.common}')" class="btn btn-primary btn-outline w-full">See Details</button>
          
        `
        ui.appendChild(div)

    })

}


const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayCountryDetails(data[0]))

}

const displayCountryDetails = (country) => {
// console.log(country);

const detailsDiv = document.getElementById ('country-details');
detailsDiv.innerHTML= `
            <img class="w-120 h-80 mx-auto border border-2" src="${country.flags.png}" alt="">
            <h3 class="text-4xl font-semibold">Name: ${country.name.common} </h3>
            <p class="my-6"> Capital: ${country.capital} </p>
            <p class="my-6"> Population: ${country.population} </p>
            <p class="my-6"> Area: ${country.region} </p>
            
        `
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });        

}

