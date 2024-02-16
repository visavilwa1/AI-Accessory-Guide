function displayGuide(response) {
    new Typewriter("#quote", {
        strings: response.data.choices[0].text,
        autoStart: true,
        delay: 60,
        cursor: "",
    });
}

function generateGuide(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector('#user-instructions');
    let apiUrl = "/path";  // Replace with your actual API endpoint
    let context =
        "You are an AI accessory guide and you love to provide tips on how to wear jewelry and accessories. Your mission is to generate a guide based on user instructions. Make sure to follow the user instructions.";
    let prompt = `User instructions are: Provide tips on how to wear ${instructionsInput.value}`;

    let quoteElement = document.querySelector("#quote");

    quoteElement.innerHTML = `<div class="generating">⌛ Generating tips on how to wear ${instructionsInput.value}</div>`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ your: 'object data' }),  // Replace with your actual object data
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        displayGuide(data);  // Assuming data structure is similar to Axios response
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function displayAccessoryTips() {
    let tips = `
        Tip 1: Mix and match different types of jewelry for a stylish look.
        <br />
        Tip 2: Consider your outfit's neckline when choosing necklaces.
        <br/>
        Tip 3: Stack bracelets or bangles for a trendy and layered effect.
        <br/>
        Tip 4: Coordinate your accessories with the occasion and your personal style.
    `;

    new Typewriter("#quote", {
        strings: tips,
        autoStart: true,
        delay: 1,
    });
}

let accessoryGuideElement = document.querySelector("#quote-generator-form");
accessoryGuideElement.addEventListener("submit", generateGuide);
displayAccessoryTips();
