window.$ = document.querySelector.bind(document);
const newQuoteButton = $('.new-quote');
// eslint-disable-next-line no-multi-assign
Node.prototype.on = window.on = function(name, fn) {
  this.addEventListener(name, fn);
};

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

const displayQuote = quote => {
  const quoteText = $('.quote-text');
  quoteText.textContent = quote;
};

const getQuote = () => {
  fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayQuote(data.message);
    })
    .catch(function() {
      console.log('An error occurred');
    });
};
newQuoteButton.on('click', getQuote);

getQuote();
