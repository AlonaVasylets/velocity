const tabsButton = document.querySelectorAll('.tab__button');
const tabsItem = document.querySelectorAll('.tab_item');

function hideTabs() {
    tabsItem.forEach(item => item.classList.add('hide'));
    tabsButton.forEach(item => item.classList.remove('active__button'));
}

function showTab(index) {
    tabsItem[index].classList.remove('hide');
    tabsButton[index].classList.add('active__button');
}

hideTabs();
showTab(1);

tabsButton.forEach((btn, index) => btn.addEventListener('click', () => {
    hideTabs();
    showTab(index);
}));


const anchors = document.querySelectorAll('.header__list a');

anchors.forEach(anc => {
    anc.addEventListener('click', function(event) {
        event.preventDefault();

        const id = anc.getAttribute('href');
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 74,
            behavior: 'smooth'
        });
    });
});