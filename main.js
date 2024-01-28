function displayQuote(response) {
    new Typewriter("#quote", {
        strings: response.data.answer,
        autoStart: true,
        delay: 60,
        cursor: "",
    });
}

function generateQuote(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector('#user-instructions');
    let apiKey = "57t510363ca64d76cf8d437ao0eea1eb";

    let context =
        "You are a book quote expert and you love to get inspired by your favorite book quotes. Your mission is to generate a quote from any book in basic HTML. Make sure to follow the User instructions. Make sure to always specify the book and the author in the end.";
    let prompt = `User instructions are: Generate a book quote about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let quoteElement = document.querySelector("#quote");

    quoteElement.innerHTML = `<div class="generating">⌛ Generating a book quote about ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(displayQuote);
}

function displayMyQuote() {
    let quote = `
        IT'S TIME
        <br />
        That one decision you are too afraid to make
        <br/>
        could be the very thing that sets you free
        <br/>
        in the best possible way.
        <br/>
        | Everything you will ever need by Charlotte Freeman
    `;

    new Typewriter("#quote", {
        strings: quote,
        autoStart: true,
        delay: 1,
    });
}

let bookQuoteElement = document.querySelector("#quote-generator-form");
bookQuoteElement.addEventListener("submit", generateQuote);
displayMyQuote();
// displayMyQuote();
