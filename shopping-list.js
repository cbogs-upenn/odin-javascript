'use strict';

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button= document.querySelector('button');

button.addEventListener('click', addItem);



function addItem(){
    
    let inputValue = input.value;
    input.value = "";

    const listItem = document.createElement('li');
    const itemSpan = document.createElement('span');
    const itemButton = document.createElement('button');

    listItem.appendChild(itemSpan);
    listItem.appendChild(itemButton);

    itemSpan.textContent = inputValue;
    itemButton.textContent = "Delete";

    list.appendChild(listItem);

    itemButton.addEventListener('click', () => {
        listItem.remove();
    });

    input.focus();
}