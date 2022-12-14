// DOM Elements

const itemContainer = document.querySelector('#item-form');
const inputName = itemContainer['name'];
const inputPrice = itemContainer['price'];
const inputQuantity = itemContainer['quantity'];
const addButton = document.querySelector('.add-btn');

const itemArr = JSON.parse(localStorage.getItem('Item')) || [];

const addItem = (name, price, quantity) => {
    itemArr.push({
        name,
        price, 
        quantity
    });

    localStorage.setItem('Item', JSON.stringify(itemArr));
}

addButton.addEventListener('click', () => {
    if(inputName.value === '' || inputPrice.value === '' || inputQuantity.value === ''){
        window.alert('Please input the item detail before adding the item');
        return;
    }

    for(let i = 0; i < itemArr.length; i++){
        if(itemArr[i].name === inputName.value){
            window.alert('This item has already in the inventory');
            return;
        }
    }
    addItem(inputName.value, inputPrice.value, inputQuantity.value);
    inputName.value = '';
    inputPrice.value = '';
    inputQuantity.value = '';
});