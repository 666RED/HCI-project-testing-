// DOM Elements

const itemContainer = document.querySelector('.item-container');

const itemArr = JSON.parse(localStorage.getItem('Item')) || [];

const createItem = ({name, price, quantity}) => {
    const container = document.createElement('div');
    const itemName = document.createElement('h1');
    const itemPrice = document.createElement('p');
    const itemQuantity = document.createElement('p');
    const addButton = document.createElement('button');

    container.classList.add('item');
    addButton.classList.add('add-button');
    itemName.classList.add('item-name');

    itemName.innerText = name;
    itemPrice.innerText = 'Price: RM ' + price;
    itemQuantity.innerText = 'Quantity: ' + quantity;
    addButton.innerText = 'Edit'

    container.append(itemName, itemPrice, itemQuantity, addButton);
    itemContainer.appendChild(container);
}

itemArr.forEach(createItem);