const content = document.querySelector(".content")
const modalBody = document.getElementById("modal-body-id")
const url = 'https://fakestoreapi.com/products'

fetchData(url)

function showProducts(data) { 
    console.log(data)
    content.innerHTML = data.map(item => `
    <div class="col-3 card-mb-5">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">
            ${item.title}
        </h5>
        <p class="card-text">$${item.price}</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${item.id}">
            Add to Cart
        </button>
    </div>
</div>
<div class="modal fade" id="${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add to Cart</h1>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div class="modal-body" id="modal-body-id">
      <div class="row">
          <div class="col-6">
              <img src="${item.image}" class="card-img-top" alt="...">
          </div>
          <div class="col-6">
              <h2>${item.title}</h2>
              <p>$${item.price}</p>
              <p>${item.description}</p>
          </div>
      </div>
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Add</button>
      </div>
    </div>
  </div>
</div>
    `).join("")
}


async function fetchData(url){
    let res = await fetch(url)
    let data = await res.json();
    let content = document.getElementById('content');
    showProducts(data);
}

