document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('input[type="email"]');
    const errorMessage = document.createElement('div');
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '14px';
    errorMessage.style.marginTop = '5px';
    errorMessage.style.display = 'none';
    errorMessage.textContent = 'Invalid Email Address';
    
    // Insert error message after email input
    emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling);
    
    emailInput.addEventListener('input', () => {
        const value = emailInput.value;
        if (value && !value.includes('@')) {
            emailInput.style.border = '2px solid red';
        } else {
            emailInput.style.border = '1px solid #ddd';
        }
    });

    // Add blur event to check when user leaves the input
    emailInput.addEventListener('blur', () => {
        const value = emailInput.value;
        if (value && !value.includes('@')) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    });
});
document.querySelectorAll('.donate-btn1').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'donate.html';
    });
});