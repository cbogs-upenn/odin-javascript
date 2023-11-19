const container = document.querySelector('#container');

const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const exerciseOne = document.createElement('p');
    exerciseOne.style.cssText = 'color: red;';
    exerciseOne.textContent = "Hey I'm red!";

container.appendChild(exerciseOne);

const exerciseTwo = document.createElement('h3');
    exerciseTwo.style.cssText = 'color: blue;';
    exerciseTwo.textContent = "I'm a blue h3!";

container.appendChild(exerciseTwo);


const exerciseThree = document.createElement('div');
    exerciseThree.setAttribute('class', 'pinkalert');
    exerciseThree.setAttribute('id', 'divalert');
    exerciseThree.style.cssText = 'background-color: pink; border: 1px solid black;';
    
    const exerciseThreeContent1 = document.createElement('h1');
        exerciseThreeContent1.textContent = "I'm in a div";

    const exerciseThreeContent2 = document.createElement('p');
        exerciseThreeContent2.textContent = "ME TOO!";

    exerciseThree.appendChild(exerciseThreeContent1);
    exerciseThree.appendChild(exerciseThreeContent2);

container.appendChild(exerciseThree);


// Code a button with method 2

const btn = document.querySelector('#btn'); // links it to id === btn on html

    btn.onclick = () => alert("Hello World!");


const button2 = document.querySelector('#button2');

    button2.addEventListener('click', () => {
        alert("Hello World!");
    });

    button2.addEventListener('dblclick', () => {
        alert("HELLO WORLD!!!!");
    });


