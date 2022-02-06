let anotherBtn = document.getElementById("another")
anotherBtn.addEventListener("click", function() {
    renderPics()
})

const numPicsToGet = 1;
const box= document.getElementById("box")

// const img = document.getElementById("img")
function renderPics() {
    fetch(`https://source.unsplash.com/1600x900/?cute-animals`).then((response) => {
    box.classList.add("item")
    box.innerHTML= `<img class="cute-animals" src="${response.url}"></img>`
    document.body(box)
    })  
} 

for (let i = 0; i < numPicsToGet; i++){
    renderPics()
}