import axios from 'axios';
import { response } from 'msw/lib/types';

const Card = (article) => {
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

const card = document.createElement('div');
card.classList.add('card');

const headLine = document.createElement('div');
headLine.classList.add('title');
headLine.textContent = `${data.headline}`;
card.appendChild(headLine);

const author = document.createElement('div');
author.classList.add('author');
card.appendChild(author);

const imgContainer = document.createElement('div');
imgContainer.classList.add('img-container');
author.appendChild(imgContainer);

const authorImg = document.createElement('img');
authorImg.setAttribute('src', data.authorPhoto);
imgContainer.appendChild(authorImg);

const authorSpan = document.createElement('span');
authorSpan.textContent = `By ${data.authorName}`;
author.appendChild(authorSpan);

function ELP(event){
  console.log(event);
  console.log(`${data.headline}`)
};

card.addEventListener('click', ELP);

return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cards = document.querySelector('.cards-container');

  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) => {
      console.log(response.data.articles)
    })
    .catch((err) => {
      console.log('ERROR!')
    })
    .finally(() => {
      console.log('FINISHED!')
    })
}

export { Card, cardAppender }
