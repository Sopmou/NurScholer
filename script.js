const texts = [
    "Ihre Herzlichkeit",
    "Ihre Art zu Lieben.",
    "Ihr Lachen.",
    "Ihre süßen Grimassen.",
    "Wie sie Grummelt.",
    "Wie intensiev sie einen lieben kann.",
    "Ihr Kleidungsstil ist fresh as fck",
    "Sie ist Street-Smart.",
    "Sie ist so Geduldig!", 
    "So damn Pretty!",
    "Sie ist flexibel.",
    "Sie riecht immer gut.",
    "Sie kümmert sich um einen.",
    "Sie ist Loyal",
    "Sie kocht so damn lecker!",
    "Sie weiß, wie sie dir eine Freude macht.",
    "Sie ist sensibel",
    "Sie hat Taktgefühl",
    "Sie ist Selbstbewusst",
    "Sie ist Stark und doch so weich im inneren",
    "Sie ist schüchtern, in bestimmten Situationen",
    "Sie vergibt sehr vieles",
    "Ihre Augen sind so schön schwarz...",
    "Ihr Haar riecht immer nach Shampoo",
    "Sie ist Aufopferungsbereit",
    "Sie weiß wie man redet",
    "Sie gibt unglaublichen Comfort",
    "Sie guckt immer so süß, wenn sie in Gedanken ist"
];

let shownTexts = [];

function addText() {
    if (shownTexts.length >= texts.length) {
        alert("Alle Texte wurden bereits angezeigt!");
        return;
    }

    let text;
    do {
        text = texts[Math.floor(Math.random() * texts.length)];
    } while (shownTexts.includes(text));

    shownTexts.push(text);

    const textBox = document.createElement("div");
    textBox.className = "text-box";
    textBox.innerText = text;

    const container = document.getElementById("popup-container");
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    let position;
    let isOverlapping;
    do {
        isOverlapping = false;
        const randomX = Math.random() * (containerWidth - 150);
        const randomY = Math.random() * (containerHeight - 50);

        position = { left: randomX, top: randomY };

        // Check for overlap
        const elements = document.querySelectorAll('.text-box');
        elements.forEach(el => {
            const rect1 = el.getBoundingClientRect();
            const rect2 = {
                left: position.left,
                top: position.top,
                right: position.left + 150,
                bottom: position.top + 50
            };
            if (!(rect2.left > rect1.right ||
                  rect2.right < rect1.left ||
                  rect2.top > rect1.bottom ||
                  rect2.bottom < rect1.top)) {
                isOverlapping = true;
            }
        });
    } while (isOverlapping);

    textBox.style.left = `${position.left}px`;
    textBox.style.top = `${position.top}px`;

    container.appendChild(textBox);
    requestAnimationFrame(() => {
        textBox.style.opacity = 1;
    });
}

function addTextAndFocus() {
    addText();
    document.getElementById("popup-container").scrollIntoView({ behavior: 'smooth', block: 'center' });
}