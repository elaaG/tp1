function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function difficulté() {
    while (true) {
        let choice =prompt("Choisissez un niveau de difficulté :\n1 - Facile (1-10, 6 tentatives)\n2 - Intermédiaire (1-50, 5 tentatives)\n3 - Difficile (1-100, 4 tentatives)");

        switch (choice) {
            case "1":
                return { min: 1,
                     max: 10, 
                     attempts: 6 };
            case "2":
                return { min: 1,
                     max: 50,
                      attempts: 5 };
            case "3":
                return { min: 1,
                     max: 100,
                      attempts: 4 };
            default:
                alert("Choix invalide");
        }
    }
}

function game() {
    let D = difficulté();
    let secretNumber = getRandomNumber(D.min, D.max);
    let attemptsLeft = D.attempts;
    let found = false;

    alert(`entrer un nombre entre ${D.min} and ${D.max} Vous avez ${D.attempts} tentatives.`);

    while (attemptsLeft > 0 && !found) {
        let guess = parseInt(prompt(`Devinez le nombre (Tentatives restantes: ${attemptsLeft}):`), 10);

        if (isNaN(guess) || guess < D.min || guess > D.max) {
            alert(`Veuillez entrer un nombre entre ${D.min} et ${D.max}.`);
            continue;
        }

        attemptsLeft--;

        if (guess === secretNumber) {
            alert('Félicitations ');
            found = true;
        } else if (guess < secretNumber) {
            alert("Trop petit !");
        } else {
            alert("Trop grand !");
        }
    }

    if (!found) {
        alert(`you lost number is ${secretNumber}.`);
    }
}

game();
