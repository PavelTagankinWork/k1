const listItems1 = document.querySelectorAll('#categories1 li');

listItems1.forEach(item => {
    item.addEventListener('click', () => {
        listItems1.forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    });
});