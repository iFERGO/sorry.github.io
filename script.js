let clickCount = 0;
        const container = document.getElementById('container');
        const result = document.getElementById('result');

        const frases = [
            "Estas segura?",
            "Estas completamente segua?...",
            "Pero segura segura?",
            "Por favor?",
            "Andale perdoname",
            "Deja de darle a no!"
        ];

        let randomNumberImg = 0;
        let randomNumberImgBefore = 0;
        let randomNumber = 0;
        document.getElementById('noButton').addEventListener('click', () => {
            clickCount++;
            noButton.style.filter = `blur(${clickCount / 3}px)`;

            let fontSize = parseInt(window.getComputedStyle(siButton).fontSize);
            let paddingVert = parseInt(window.getComputedStyle(siButton).paddingTop);
            let paddingHoriz = parseInt(window.getComputedStyle(siButton).paddingRight);

            siButton.style.fontSize = `${fontSize + 1}px`;
            siButton.style.padding = `${paddingVert + 1}px ${paddingHoriz + 5}px`;

            
            while (randomNumberImg == randomNumberImgBefore) {
                randomNumberImg = Math.floor(Math.random() * 10 + 1); 
            }
            randomNumberImgBefore = randomNumberImg;
            result.innerHTML = `<p>${frases[randomNumber]}</p><img src="images/${randomNumberImg}.jpg" width="200px" height="100px">`;
            if (randomNumber != 5) {
                randomNumber = randomNumber + 1;
            }
        });

        document.getElementById('siButton').addEventListener('click', () => {

            siButton.style.padding = `15px 30px`;
            siButton.style.fontSize = `18px`;

            noButton.style.filter = 'none';
            clickCount = 0;

            result.innerHTML = `<p>Sabía que dirías que sí, Te amo mi Camila preciosa ❤️</p><img src="images/happy.jpg" width="200px" height="100px">`;
            for (let i = 0; i < 300; i++) {
                createHeart();
            }
        });

        function createHeart() {
            const heart = document.createElement('div');
            const heartBlack = document.createElement('div');
            const heartPurple = document.createElement('div');

            heartBlack.className = 'heartBlack';
            heartBlack.innerHTML = '💜';

            heart.className = 'heart';
            heart.innerHTML = '❤️';
            
            document.body.appendChild(heartBlack);
            heartBlack.style.left = Math.random() * 100 + 'vw';
            heartBlack.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración entre 3-5s
            heartBlack.addEventListener('animationend', function () {
                heartBlack.remove();
            });

            document.body.appendChild(heart);
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración entre 3-5s
            heart.addEventListener('animationend', function () {
                heart.remove();
            });
        }
