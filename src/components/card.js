// const Card = (article, { bootstrap, javascript, jquery, node, technology } ) => {
  const Card = (article ) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // console.log(bootstrap, javascript, jquery, node, technology);

  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

  headline.textContent = article.headline;
  image.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  author.appendChild(authorName);

  return card
}

// const cardMaker = ({ bootstrap, javascript, jquery, node, technology }) => {
//   console.log(language);
  // bootstrap.forEach(x) => {
  //   x.
  // }
// }
// cardMaker();

// const languages = (data) => {
//   console.log(data);
// }




import axios from 'axios';
const cardAppender = (selector) => {

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  // axios.get(`http://localhost:5000/api/articles`)
  // .then(res => {
  //   // console.log(res.data.articles);
  //   // console.log(parent);
  //   const language = Object.keys(res.data.articles);
  //   console.log(language);
  //   const data = res.data.articles;
  //   // languages(data);
  //   // cardMaker(language);
  // })
  // .catch(err => {
  //   console.log(err);
  // })
  // .finally(() => console.log("done"))

  // axios.get(`http://localhost:5000/api/articles`)
  //   .then(res => {
  //     console.log(res.data.articles.text);
  //     const languages = Object.keys(res.data.articles);
  //     // console.log(languages);
  //     languages.forEach( (x) => {
  //       // console.log(x);
  //     })

  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  //   .finally(() => console.log("done"))

  axios.get(`http://localhost:5000/api/articles`)
    .then(res => {

      const parent3 = document.querySelector(selector);
      const data = res.data.articles.javascript[0];
      parent3.appendChild(Card(data));
      
    })
    .catch(err => {
      console.log(err);
    })
    // .finally(() => console.log("done"))
}

export { Card, cardAppender }
