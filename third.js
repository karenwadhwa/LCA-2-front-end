document.addEventListener('DOMContentLoaded', () => {
    const donateForm = document.getElementById('donateForm');
    
    // Form validation
    donateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const citizenship = document.querySelector('input[name="citizen"]:checked');
        const frequency = document.querySelector('input[name="frequency"]:checked');
        const formFields = document.querySelectorAll('.form-fields input');
        
        let isValid = true;
        
        if (!citizenship || !frequency) {
            alert('Please select citizenship and donation type');
            isValid = false;
        }
        
        formFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = 'red';
                isValid = false;
            } else {
                field.style.borderColor = '#ddd';
            }
        });
        
        if (isValid) {
            alert('Thank you for your donation!');
            donateForm.reset();
        }
    });
    
    // Real-time validation
    const formInputs = document.querySelectorAll('.form-fields input');
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.style.borderColor = input.value.trim() ? '#ddd' : 'red';
        });
    });
});