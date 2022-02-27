const searchInput = document.querySelector("#search");
const card = document.querySelectorAll (".col");
console.log (card);

searchInput.addEventListener ("keyup", function(event){ 
    const word = event.target.value.toLowerCase();
    console.log (word);


    card.forEach(item => {
        item.querySelector("#name").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display="none");
 
    })
})

