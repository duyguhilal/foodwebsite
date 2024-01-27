document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        window.location.href = this.href;
    });
});

document.querySelector('.nav-link.dropdown').addEventListener('click', function() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
});


function submitForm(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    // You can perform additional validation or send the form data to a server here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
  
    // Optionally, you can reset the form after submission
    document.getElementById('contactForm').reset();
  }
  

//tarif yazdırma

<button onclick="window.print({duplex: true})">Print (Dublex)</button>



  
//yemeği değerlendir
        function logValue(id) {
            var value = document.getElementById(id).value;
            console.log(id + ' value: ' + value);
        }
        

      
        
        function addToFavorites() {
            // Burada favorilere ekleme işlemini gerçekleştirebilirsiniz
            alert("Recipe add the favourite!");
        
        }

  
//burası çorbaların açılır penceresi icin
  

// Açılır menüdeki linklere tıklandığında sayfayı yönlendirme
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {
    window.location.href = link.href;
  });
});




//tarif arama çubuğu
var recipes = [
    { id: 'soup', name: 'Soup', path: 'soup.html' },
    { id: 'pasta', name: 'Pasta and Rice', path: 'pasta.html' },
    { id: 'sarma', name: 'Roll and Stuffed', path: 'sarma ve dolma.html' },
    { id: 'meat', name: 'Meat Meal', path: 'meat meal.html' },
    { id: 'chicken', name: 'Chicken Meal', path: 'chicken-meal.html' },
    { id: 'salad', name: 'Salad', path: 'salad.html' },
    { id: 'dessert', name: 'Dessert', path: 'dessert.html' },
    { id: 'vegetarian', name: 'Vegetarian', path: 'vegetarian.html' }
];

function searchRecipes() {
    var searchQuery = document.getElementById("search-bar").value.toLowerCase();
    var searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";

    recipes.forEach(function(recipe) {
        if (recipe.name.toLowerCase().includes(searchQuery)) {
            var resultItem = document.createElement("p");
            resultItem.textContent = recipe.name;
            resultItem.addEventListener("click", function() {
                openRecipePage(recipe.id);
            });
            searchResults.appendChild(resultItem);
        }
    });
}

function openRecipePage(recipeId) {
    var recipePage = window.open(recipeId + ".html", "_blank");
}





//favorilere kalp koyma ve ekleme











  