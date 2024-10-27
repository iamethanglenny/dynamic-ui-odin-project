export function initializeDropdowns() {
    document.querySelectorAll('.dropDownMenu').forEach(dropdown => {
        const triggerType = dropdown.getAttribute('data-trigger');
        const button = dropdown.querySelector('.dropDownBtn');

        // Toggle visibility based on trigger type
        if (triggerType === 'click') {
            button.addEventListener('click', () => toggleDropdown(dropdown));
        } 
    });
}

// Function to toggle dropdown on click
function toggleDropdown(dropdown) {
    dropdown.classList.toggle('dropdown-visible');
}