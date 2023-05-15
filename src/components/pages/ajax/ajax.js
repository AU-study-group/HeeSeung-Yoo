const WEB = document.querySelector('.web');
const GETJSON = fetch('https://janghwanpark.github.io/ajax-data-storage/json-data/product-data/movie-data.json')
    .then(res => res.json())
    .then(data => {
        const movies = data.movies;
          movies.forEach((movie) => {
              WEB.insertAdjacentHTML('beforeend', `
              <div class="movie-content">
                <h2 class="title">${movie.title}</h2>
                <p>장르: ${movie.genre}</p>
                <p>감독: ${movie.director}</p>
                <p>개봉년도: ${movie.year}</p>
                <p>평점: ${movie.rating}</p>
                <p>DVD : ${movie.product.DVD.price}원</p>
                <p>재고: ${movie.product.DVD.stock}개</p>
                <button class="add-cart" data-id="${movie.id}">
                  <span>담기</span>
                </button>
              </div>`
          );
        })
    })
    .catch(error => console.log(error))
    