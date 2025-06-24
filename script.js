document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.getElementById('title');
    const headerCursor = document.getElementById('header-cursor');
    const titleText = "[HOME]";
    let i = 0;
    
    // Type the title text one character at a time
    function typeTitle() {
        if (i < titleText.length) {
            titleElement.innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeTitle, 150); // Typing speed in milliseconds
        } else {
            // Once typing is complete, wrap in strong tags and make sure cursor is next to the title
            titleElement.innerHTML = '<strong>' + titleElement.innerHTML + '</strong>';
            headerCursor.style.display = 'inline-block';
        }
    }
    
    // Start the typing animation when the page loads
    setTimeout(typeTitle, 500);
});