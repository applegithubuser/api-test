document.getElementById("search-button").addEventListener('click',
function (){
    //search text by click on button
    
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // console.log(searchText);

    // api fatch

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data => displayFoodsData(data?.meals))



    // clear the input
    searchInput.value=""

})

//in foods receve the array data ++ lop in array and get single data from array

const displayFoodsData = (foods) =>{
  // console.log(foods);

  if (foods == null) {
    alert("something went wrong")
    return
  }


    const ui = document.getElementById('foods-div');  //id div
    
    foods?.map((food) => {
        const div = document.createElement('div')
        div.classList.add("card")
        div.classList.add("border")

        div.innerHTML = `
            <figure>
              <img
                src="${food?.strMealThumb} "
                alt="Food" />
            </figure>
            <div class="card-body">
              <h2 class="card-title"> ${food?.strMeal} </h2>
              <p>${food?.strInstructions.slice(0.180)} </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary btn-outline w-full">See details</button>
              </div>
            </div>
            `
            ui.appendChild(div)

    })

}


