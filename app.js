const newWords = document.getElementById('new-words');
const myButton = document.getElementById('my-button');
const newName = document.getElementById('newName');
const colors = document.getElementById('colors');

const secondButton = document.getElementById('second-button');
const thirdButton = document.getElementById('third-button');

myButton.addEventListener('click', () => {
    colors.style.background ='green';
    newName.textContent = newWords.value;
    newWords.value = '';
});
secondButton.addEventListener('click', () => {
    colors.style.background ='pink';
    newName.textContent = newWords.value;
    newWords.value = '';
});
thirdButton.addEventListener('click', () => {
    colors.style.background ='blue';
    newName.textContent = newWords.value;
    newWords.value = '';
});