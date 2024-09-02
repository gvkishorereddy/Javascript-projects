const api = `https://api.quotable.io/quotes/random`; // API endpoint

document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById("quote"); // Correct way to select the quote element
    const button = document.getElementById("new-quote-button"); // Button for generating new quote

    // Function to fetch and display a new quote
    async function quotegenerator() {
        try {
            const response = await fetch(api); // Fetching the data from API
            const data = await response.json(); // Parsing JSON data
            const quotetext = data[0].content; // Accessing the content of the first quote
            quoteElement.textContent = quotetext; // Updating the quote element with the new quote
        } catch (error) {
            console.error('Error fetching the quote:', error); // Logging errors, if any
            quoteElement.textContent = 'Failed to load quote. Please try again.'; // Display error message in case of failure
        }
    }

    // Call the quote generator function when the page loads
    quotegenerator();

    // Add an event listener to the button to fetch a new quote on click
    button.addEventListener('click', quotegenerator);
});
