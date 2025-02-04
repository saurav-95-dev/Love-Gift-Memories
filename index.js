function countdown(date, id) {
    const now = new Date();
    const target = new Date(date);
    const difference = target - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById(id).textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    setTimeout(() => countdown(date, id), 1000);
}

countdown('2024-12-25T00:00:00', 'christmas-timer');
countdown('2025-01-01T00:00:00', 'newyear-timer');


const nicknames = [
    { name: "Sweetheart", message: "Because you have the sweetest heart!", reason: "You always put others before yourself and bring joy to everyone around you." },
    { name: "Sunshine", message: "You light up my world!", reason: "Your smile and presence brighten even my darkest days." },
    { name: "Darling", message: "You are my dearest treasure!", reason: "You mean the world to me and make my life complete." },
    { name: "Cutie Pie", message: "Adorable in every way!", reason: "Every little thing you do makes me fall for you even more." },
    { name: "Lovebug", message: "A little bundle of love!", reason: "Your love feels warm and cuddly, like the perfect hug." },
    { name: "Angel", message: "You are my guardian angel!", reason: "You look out for me and make life heavenly with your care." },
    { name: "Buttercup", message: "Sweet and gentle!", reason: "You have a soft touch that brings me peace." },
    { name: "Honeybun", message: "Sugary sweet and loving!", reason: "You sweeten my life with your love and affection." }
];

function revealNickname() {
    const randomIndex = Math.floor(Math.random() * nicknames.length);
    const nickname = nicknames[randomIndex];

    const cardContainer = document.getElementById('nickname-card-container');

    const card = document.createElement('div');
    card.className = 'nickname-card';

    const nicknameText = document.createElement('div');
    nicknameText.className = 'nickname';
    nicknameText.textContent = nickname.name;

    const messageText = document.createElement('div');
    messageText.className = 'message';
    messageText.textContent = nickname.message;

    const reasonButton = document.createElement('button');
    reasonButton.className = 'reason-button';
    reasonButton.textContent = 'Why this nickname?';

    const reasonCard = document.createElement('div');
    reasonCard.className = 'reason-card';
    const reasonText = document.createElement('div');
    reasonText.className = 'reason-text';
    reasonText.textContent = nickname.reason;
    reasonCard.appendChild(reasonText);
    
    //Click-effect animations : 
    let button = document.querySelector(".button");
    
    button.classList.add("click-effect"); 

    // Remove class after a short delay so animation can be repeated on next click
    setTimeout(() => {
        button.classList.remove("click-effect");
    }, 200); // Adjust timing to match transition duration


    reasonButton.addEventListener('click', () => {
        reasonCard.style.display = 'block';
    });

    const newNicknameButton = document.createElement('button');
    newNicknameButton.className = 'new-nickname-button';
    newNicknameButton.textContent = 'Get Another Nickname';
    newNicknameButton.addEventListener('click', revealNickname);

    card.appendChild(nicknameText);
    card.appendChild(messageText);
    card.appendChild(reasonButton);
    card.appendChild(reasonCard);
    card.appendChild(newNicknameButton);

    cardContainer.appendChild(card);
}

function showPopup(message) {
    document.getElementById('popup-content').textContent = message;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    // Wait for the popup to be fully displayed before applying the effect
    setTimeout(() => {
        let button = document.querySelector(".popup-button");
        if (button) { // Ensure button exists before adding the class
            button.classList.add("click-effect");

            setTimeout(() => {
                button.classList.remove("click-effect");
            }, 200);
        }
    }, 100); // Small delay to ensure the button is rendered
}


function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
      // Wait for the popup to be fully displayed before applying the effect
      setTimeout(() => {
        let button = document.querySelector(".popup-button");
        if (button) { // Ensure button exists before adding the class
            button.classList.add("click-effect");

            setTimeout(() => {
                button.classList.remove("click-effect");
            }, 200);
        }
    }, 100); // Small delay to ensure the button is rendered
}

document.querySelectorAll('.song-card button').forEach(button => {
    button.addEventListener('click', function () {
        const songSrc = this.getAttribute('data-song');
        const audioPlayer = document.getElementById('audio-player');
        audioPlayer.src = songSrc;
        audioPlayer.play();
    });
});

document.querySelectorAll('.gift-button').forEach(button => {
    button.addEventListener('click', function () {
        const dishName = this.getAttribute('data-dish');
        const giftBox = document.getElementById('gift-box');
        const dishNameElement = document.getElementById('dish-name');

        dishNameElement.textContent = dishName;
        giftBox.style.display = 'block';

        // Hide gift box after 5 seconds
        setTimeout(() => {
            giftBox.style.display = 'none';
        }, 5000);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const seeMoreButton = document.querySelector(".see-more-button");

    seeMoreButton.addEventListener("click", function() {
        this.classList.add("click-effect");

        // Remove the effect after a short delay
        setTimeout(() => {
            this.classList.remove("click-effect");
        }, 200);
    });
});


