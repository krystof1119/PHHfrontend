function index() {
    console.log('a');
    let reactContainer: HTMLElement = document.getElementById('react-container');
    console.log(reactContainer);
    reactContainer.innerText = 'ayy it __really__ actually works';
}

addEventListener('load', index);
