//All code wrapped in event listener for domcontentloaded
document.addEventListener('DOMContentLoaded', function() {
    
    // variable getting element by class name
    const descBtn = document.getElementsByClassName('showDescButton');
    
    // for loop for the button 
    for (let i = 0; i < descBtn.length; i++) {
        //event listener for the button click
        descBtn[i].addEventListener('click', function() {
            // Will apply to the next element in the same tree level, which would be the description for each project
            const projectDesc = descBtn[i].nextElementSibling;
            
            // If description is showing, button will say hide description. 
            if (projectDesc.style.display === 'none') {
                projectDesc.style.display = 'block'; 
                descBtn[i].textContent = 'Hide Description'; 
            // If description is hidden, button will say show description
            } else {
                projectDesc.style.display = 'none';
                descBtn[i].textContent = 'Show Description'; 
            }
        });
    }


});