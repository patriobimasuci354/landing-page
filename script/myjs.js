const imgtes1 = document.querySelector('.testimonial .imgtes1');
const imgtes2 = document.querySelector('.testimonial .imgtes2');
const imgtes3 = document.querySelector('.testimonial .imgtes3');
const imgtesall = document.querySelectorAll('.testimonial img');
const figcaption1 = document.querySelector('.testimonial .figcaption1');
const figcaption2 = document.querySelector('.testimonial .figcaption2');
const figcaption3 = document.querySelector('.testimonial .figcaption3');
const figcaption = document.querySelectorAll('.testimonial figcaption');
const quote = document.querySelectorAll('.quote');
const quote1 = document.querySelector('.quote1');
const quote2 = document.querySelector('.quote2');
const quote3 = document.querySelector('.quote3');





// function testi
const testi = (img, figcaptionclick) => {
    // Reset
    imgtesall.forEach(e => e.classList.remove('aktif'));
    figcaption.forEach(e => e.classList.add('figure-off'));
    // On
    img.classList.add('aktif');
    figcaptionclick.classList.remove('figure-off');
    figcaptionclick.classList.add('figure-on');
};

const fungsiQuote = quoteclick => {
    // Reset
    quote.forEach(e => e.classList.remove('quoteOn'))
    // On
    quoteclick.classList.add('quoteOn');
};


imgtes1.addEventListener('click', () => {
    testi(imgtes1, figcaption1);
    fungsiQuote(quote1);
});
imgtes2.addEventListener('click', () => {
    testi(imgtes2, figcaption2);
    fungsiQuote(quote2);
});
imgtes3.addEventListener('click', () => {
    testi(imgtes3, figcaption3);
    fungsiQuote(quote3);
});













