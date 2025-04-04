document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButton = document.querySelector('.hero .cta-button');

    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function() {
            const productsSection = document.querySelector('.products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Products section not found!');
            }
        });
    }

    const connectButton = document.querySelector('.optimize .cta-button');

    if (connectButton) {
        connectButton.addEventListener('click', function() {
            alert('Connect button clicked!');
        });
    }

    const faqItems = document.querySelectorAll('.faq ul li');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});


// ............................

const productCards = document.querySelector('.product-cards');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let scrollAmount = 0;
const cardWidth = 320; 

rightArrow.addEventListener('click', () => {
    scrollAmount += cardWidth;
    productCards.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

leftArrow.addEventListener('click', () => {
    scrollAmount -= cardWidth;
    productCards.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

function toggleLike(element) {
    if (element.style.color === 'green') {
        element.style.color = 'white'; 
        element.innerHTML = '&#x2661;'; 
    } else {
        element.style.color = 'green'; 
        element.innerHTML = '&#x2665;'; 
    }
}


let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-card");

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        
        // const activeCard = document.querySelector('.testimonial-card.active');
        // const imgElement = activeCard.querySelector('.logo'); // Correct selector

        // if (activeCard) {
        //     if (imgElement) {
        //         imgElement.src = 'darcl-black.png'; // Change the src attribute
        //     }
        // }
        testimonial.classList.remove("active");

        if (i === index) {testimonial.classList.add("active")
            const activeCard = document.querySelector('.testimonial-card.active');
            const imgElement = activeCard.querySelector('.logo'); 

            if (activeCard) {
                if (imgElement) {
                    imgElement.src = 'darcl.png'; 
                }
            }
        };

    });
}

document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    showTestimonial(currentIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    showTestimonial(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}, 5000);

showTestimonial(currentIndex);


const faqItems = document.querySelectorAll('.faq-item');
// const faqTogle = document.querySelectorAll('.faq');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});