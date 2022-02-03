import axios from "axios";

function fetchMovies() {
  // 요청한 주소의 내용을 얻어서(get) 처리(then)
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {     // 콜백 함수
      console.log(res);
      const h1El = document.querySelector('h1');
      const imgEl = document.querySelector('img');
      h1El.textContent = res.data.Search[0].Title;
      imgEl.src = res.data.Search[0].Poster;
    });
}

fetchMovies();