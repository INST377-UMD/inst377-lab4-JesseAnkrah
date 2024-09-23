function alertMe() {
    const name = document.getElementById('name').value;
    if (name) {
        alert("Hi " + name + "!");
    }
}


function changeColor() {
        const currentColor = document.body.style.backgroundColor;

        if (currentColor === 'lightblue') {
            document.body.style.backgroundColor = 'green';
        } else {
            document.body.style.backgroundColor = 'lightblue';
        }
}

// Text Tester Section
function vldText() {
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const text = document.getElementById('textInput').value;
    if (validation.test(text)) {
        alert("Special characters are not allowed!");
    } else {
        alert("Text is valid.");
    }
}

// Add Text Section
function addText() {
    const heading = document.getElementById('heading');
    heading.innerText += " Add Text";
}