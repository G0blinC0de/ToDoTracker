// Business Logic

document.addEventListener('DOMContentLoaded', function () {
    const textForm = document.getElementById('textForm');
    const textInputField = document.getElementById('textInputField');
    const todoList = document.getElementById('todoList');
    const todoListForm = document.getElementById('todoListForm');

    function handleFormSubmission(event) {
        event.preventDefault();

        const inputValue = textInputField.value;

        if (inputValue.trim() !== '') {
            // Create a new <li> element for the to-do item
            const newListItem = document.createElement('li');

            // Create a checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            // Create a label for the checkbox
            const label = document.createElement('label');
            label.textContent = inputValue;

            // Append the checkbox and label to the <li> element
            newListItem.appendChild(checkbox);
            newListItem.appendChild(label);

            // Append the <li> element to the to-do list
            todoList.appendChild(newListItem);

            // Clear the text input field
            textInputField.value = '';

            // Add a click event listener to toggle strike-through when checkbox is clicked
            checkbox.addEventListener('change', function () {
                label.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
            });
        }
    }

    function handleClearSelection(event) {
        event.preventDefault();

        // Get all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        // Loop through checkboxes and remove the parent <li> of selected ones
        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                const listItem = checkbox.parentElement;
                listItem.remove();
            }
        });
    }

    textForm.addEventListener('submit', handleFormSubmission);
    todoListForm.addEventListener('submit', handleClearSelection);
});




// UI Logic