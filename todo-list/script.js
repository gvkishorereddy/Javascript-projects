const todoDiv = document.getElementById('todo');

function addwork() {
    const input = document.getElementById("input");
    var inputValue = input.value;
    if (inputValue.length > 0) {
        // Create a new 'div' element for the work item
        var newDiv = document.createElement('div');
        newDiv.className = 'works';
        newDiv.textContent = inputValue;

        // Create a new button element for removing the work item
        const newButton = document.createElement('button');
        newButton.textContent = 'X';
        newButton.onclick = function() {
            newDiv.remove();
        };

        // Append the button to the new 'div'
        newDiv.appendChild(newButton);

        // Append the new 'div' to the 'todo' div
        todoDiv.appendChild(newDiv);

        // Clear the input field after adding the work item
        input.value = '';
    }
}
