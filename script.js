const htmlButton = document.getElementById('htmlButton');

htmlButton.addEventListener('click', () => {
    const htmlCode = prompt('Please enter your HTML code:');
    if (htmlCode) {
        const newWindow = window.open('', '_blank');
        newWindow.document.write(htmlCode);
        newWindow.document.close();
    }
});
