document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const arrow = question.querySelector('.faq-arrow');

            // Toggle the 'active' class on the question to rotate the arrow
            question.classList.toggle('active');

            // Toggle the display of the answer
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                // Remove padding when collapsing
                answer.style.padding = '0 1.5rem';
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                // Add padding when expanding
                answer.style.padding = '0 1.5rem 1.5rem 1.5rem';
            }
        });
    });
});