const listItems2 = document.querySelectorAll('#categories2 li');

listItems2.forEach(item => {
    item.addEventListener('click', () => {
        listItems2.forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    });
});

export default listItems2
