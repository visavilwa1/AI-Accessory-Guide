function generateGuide(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector('#user-instructions');
    let tips = getStaticTips(instructionsInput.value);

    let quoteElement = document.querySelector("#quote");

    quoteElement.innerHTML = `<div class="generating">⌛ Generating tips on how to wear ${instructionsInput.value}</div>`;

    setTimeout(() => {
        quoteElement.innerHTML = ''; 
=
        new Typewriter("#quote", {
            strings: tips,
            autoStart: true,
            delay: 60,
            cursor: "",
        });
    }, 1000);
}

function getStaticTips(instruction) {
    
    return [
        `Tip 1: Wear ${instruction} confidently.`,
        `Tip 2: Consider the occasion when choosing ${instruction}.`,
        `Tip 3: Mix and match ${instruction} for a stylish look.`,
    ];
}

document.getElementById("quote-generator-form").addEventListener("submit", generateGuide);
