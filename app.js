const accordion = document.querySelector('.accordion-wrapper');
const headings = accordion.querySelectorAll('.accordion__title');

for (let i = 0; i < headings.length; i++) {
  // Create a button and id for each heading and its corresponding content
  const button = document.createElement('button');
  const heading = headings[i];
  const content = heading.nextElementSibling;
  const id = `faq-panel-${i + 1}`;

  // Set aria attributes and add class
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', id);
  button.setAttribute('type', 'button');
  button.textContent = heading.textContent;
  button.classList.add('accordion__button');

  // Replace content of heading with the button
  heading.innerHTML = '';
  heading.appendChild(button);

  // Connect button to content
  content.setAttribute('id', id);
}

// Add event listener to buttons
const buttons = accordion.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded attribute
    button.setAttribute('aria-expanded', !isOpen);
  });
});

// Open first panel by default
const firstButton = accordion.querySelector('button');
firstButton.setAttribute('aria-expanded', 'true');
