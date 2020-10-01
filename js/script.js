/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Kassim Abu <kassabu2008@gmail.com>
The goal is to Exceed project expectations!
******************************************/

/***
 * The Random Quote Generator is an array of objects that contain the following:
 *  Quote - The quote itself in the form of a [String].
 *  Source - This is a [String] that contains the person who said the quote.
 *  Citation - A [String] that refers to where the quote came from.
 *  Year - A [Number] that displays the year the quote was said.
 *  Tags - This is an [String] that gives the quote a category.
 */

/*** 
 * `quotes` array. This is where the quotes will be stored when the site is viewed. 
***/

let quotes = [
  {
    quote: 'Good artists copy. Great artists steal.',
    source: 'Pablo Picasso',
    citation: '',
    year: null,
    tags:  'Motivational'
  },
  {
    quote: 'DNA is like a computer program but far, far more advanced than any software ever created.',
    source: 'Bill Gates',
    citation: 'The Road Ahead',
    year: 1995,
    tags: 'Informational, Science, Biology'
  },
  {
    quote: "Nobody can give you freedom. Nobody can give you equality or justice or anything. If you're a man, you take it.",
    source: 'Malcolm X',
    citation: "Malcolm X Speaks: Selected Speeches and Statements",
    year: 1965,
    tags: 'Motivational'
  },
  {
    quote: 'During COVID-19, the information on social media was far more reliable than the government.',
    source: 'Steven Magee',
    citation: '',
    year: 2020,
    tags: 'Informational'
  },
  {
    quote: "The mindset isn’t about seeking a result—it’s more about the process of getting to that result. It’s about the journey and the approach. It’s a way of life. I do think that it’s important, in all endeavors, to have that mentality.",
    source: 'Kobe Bryant',
    citation: 'The Mamba Mentality: How I Play',
    year: 2020,
    tags: 'Motivational'
  },
  {
    quote: "Just because something is said with the wrong attitude doesn’t mean it’s wrong information.",
    source: 'Francis Chan',
    citation: 'Letters to the Church',
    year: 2018,
    tags: 'Informational'
  },
] ;

/***
 * `getRandomQuote` function: This is a function where a random number is created and returned as an object in the quotes array.
***/
function getRandomQuote() {
   let RandomNumber = Math.floor(Math.random() * quotes.length);
   return quotes [RandomNumber];
}

/***
 * `printQuote` function
***/
// The getRandomQuote function creates a random number and displays it as an object in the quotes array.

function getRamdomQuote () {
  let i = Math.floor(Math.random() * quotes.length);
  let quote = quotes[i];
  
  if (i !== quotes[i]) {
     return quote;
  }
} 
// The printQuote function takes a quote at random and displays it.

function printQuote() {
  let randomQuote = getRandomQuote();
  let html = '';

  html += `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
  `;
  // Displays the quote and source.

  if (randomQuote.year) { //Displays year and citation
    html += `
        <span class="citation">${randomQuote.citation}</span>
        <span class="year">${randomQuote.year}</span>
      </p>
    `;
  } else if (randomQuote.tags) { //Displays citation and tags.
    html += `
        <span class="citation">${randomQuote.citation}</span>
        <span class="tags"> tags: ${randomQuote.tags}</span>
      </p>
    `;
  
  } else if (randomQuote.citation) { //Displays citation.
    html += `
        <span class="citation">${randomQuote.citation}</span>
      </p>
    `;
  }

  random_bg_color(); //This function generates a random bacground color each time a quote is generated and displayed

  return document.getElementById('quote-box').innerHTML = html;

}

function random_bg_color() { //The random background color function gennerates random numbers for the background color changes.
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 266);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
}

setInterval(printQuote, 8000); //This generates a random quote and color change every 8 seconds.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);