(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}());

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModal = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
});

window.onclick = closeModal;

document.getElementById("confirmButton").onclick = function() {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const comment = document.getElementById("comment").value;

    alert(`You successfully sent a donation of ${amount} from ${name} with comment: "${comment}"!`);

    document.getElementById("modal").style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById('email').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailAddress = document.getElementById('email__alert').value;
    alert(`You successfully send message to ${emailAddress}!`);
});

let animals = ['deer', 'squirrel', 'bird'];

const animalCards = {
    deer: `
        <div class="animal__card">
            <figure class="animal__card-deer">
                <img src="./assets/img/Deer.png" alt="Deer" class="animal__card-deer-bg">
                <h4 class="animal__card-title-deer">Deer</h4>
                <p class="animal__card-desc-deer">Naturalist investigation</p>
            </figure>
        </div>
    `,
    squirrel: `
        <div class="animal__card">
            <figure class="animal__card-squirrel">
                <img src="./assets/img/Squirrel.png" alt="Squirrel" class="animal__card-squirrel-bg">
                <h4 class="animal__card-title-squirrel">Squirrel</h4>
                <p class="animal__card-desc-squirrel">Kamikaze squirrels</p>
            </figure>
        </div>
    `,
    bird: `
        <div class="animal__card">
            <figure class="animal__card-bird">
                <img src="./assets/img/Bird.png" alt="Bird" class="animal__card-bird-bg">
                <h4 class="animal__card-title-bird">Bird</h4>
                <p class="animal__card-desc-bird">Birds Fight club</p>
            </figure>
        </div>
    `
};

function updateHTML() {
    const animalsBlock = document.getElementById('animalsBlock');
    animalsBlock.innerHTML = animals.map(animal => animalCards[animal]).join('');
}

function changeSlide(direction) {
    if (direction === 'next') {
        const firstElement = animals.shift();
        animals.push(firstElement);
    } else if (direction === 'prev') {
        const lastElement = animals.pop();
        animals.unshift(lastElement);
    }

    updateHTML();
}

updateHTML();
