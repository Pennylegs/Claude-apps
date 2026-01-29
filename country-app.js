// Country Unscramble Quiz - Main Game Logic

class CountryUnscrambleQuiz {
    constructor() {
        this.countries = [...COUNTRIES];
        this.currentCountry = null;
        this.scrambledName = '';
        this.score = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.round = 0;
        this.totalRounds = this.countries.length;
        this.hintUsed = false;
        this.usedIndices = [];

        // DOM Elements
        this.scrambledWord = document.getElementById('scrambled-word');
        this.continentClue = document.getElementById('continent-clue');
        this.populationClue = document.getElementById('population-clue');
        this.guessInput = document.getElementById('guess-input');
        this.submitBtn = document.getElementById('submit-btn');
        this.hintBtn = document.getElementById('hint-btn');
        this.shuffleBtn = document.getElementById('shuffle-btn');
        this.skipBtn = document.getElementById('skip-btn');
        this.hintSection = document.getElementById('hint-section');
        this.feedback = document.getElementById('feedback');
        this.funFact = document.getElementById('fun-fact');
        this.scoreDisplay = document.getElementById('score');
        this.streakDisplay = document.getElementById('streak');
        this.bestStreakDisplay = document.getElementById('best-streak');
        this.roundDisplay = document.getElementById('round');

        this.bindEvents();
        this.loadNewCountry();
    }

    bindEvents() {
        this.submitBtn.addEventListener('click', () => this.submitGuess());
        this.hintBtn.addEventListener('click', () => this.showHint());
        this.shuffleBtn.addEventListener('click', () => this.reshuffleLetters());
        this.skipBtn.addEventListener('click', () => this.skipCountry());

        this.guessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitGuess();
            }
        });
    }

    scrambleWord(word) {
        // Scramble each word in the name separately to preserve spaces
        return word.split(' ').map(part => {
            const letters = part.split('');
            // Fisher-Yates shuffle
            for (let i = letters.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [letters[i], letters[j]] = [letters[j], letters[i]];
            }
            // Make sure it's actually scrambled (not the same as original)
            if (letters.join('') === part && part.length > 1) {
                [letters[0], letters[letters.length - 1]] = [letters[letters.length - 1], letters[0]];
            }
            return letters.join('');
        }).join(' ');
    }

    getRandomCountry() {
        if (this.usedIndices.length >= this.countries.length) {
            this.usedIndices = [];
        }

        let index;
        do {
            index = Math.floor(Math.random() * this.countries.length);
        } while (this.usedIndices.includes(index));

        this.usedIndices.push(index);
        return this.countries[index];
    }

    loadNewCountry() {
        this.currentCountry = this.getRandomCountry();
        this.scrambledName = this.scrambleWord(this.currentCountry.name);
        this.hintUsed = false;
        this.hintBtn.disabled = false;
        this.hintSection.classList.remove('visible');
        this.feedback.classList.remove('visible', 'correct', 'incorrect');
        this.funFact.classList.remove('visible');
        this.guessInput.value = '';
        this.guessInput.focus();
        this.round++;

        this.renderScrambledWord();
        this.renderClues();
        this.updateScoreDisplay();
    }

    renderScrambledWord() {
        this.scrambledWord.innerHTML = '';

        const letters = this.scrambledName.split('');
        letters.forEach((letter, index) => {
            const tile = document.createElement('div');
            if (letter === ' ') {
                tile.className = 'letter-tile space';
            } else {
                tile.className = 'letter-tile';
                tile.textContent = letter;
                tile.style.animationDelay = `${index * 0.05}s`;
            }
            this.scrambledWord.appendChild(tile);
        });
    }

    renderClues() {
        this.continentClue.textContent = this.currentCountry.continent;
        this.populationClue.textContent = this.currentCountry.population;
    }

    normalizeString(str) {
        return str.toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, ' ');
    }

    checkGuess(guess) {
        const normalizedGuess = this.normalizeString(guess);
        const normalizedName = this.normalizeString(this.currentCountry.name);
        return normalizedGuess === normalizedName;
    }

    submitGuess() {
        const guess = this.guessInput.value.trim();

        if (!guess) {
            this.guessInput.focus();
            return;
        }

        const isCorrect = this.checkGuess(guess);

        if (isCorrect) {
            this.handleCorrectGuess();
        } else {
            this.handleIncorrectGuess();
        }
    }

    handleCorrectGuess() {
        this.score++;
        this.streak++;

        if (this.streak > this.bestStreak) {
            this.bestStreak = this.streak;
        }

        this.updateScoreDisplay();

        this.feedback.innerHTML = `
            <div>Correct!</div>
            <div class="country-reveal">${this.currentCountry.name}</div>
        `;
        this.feedback.className = 'feedback visible correct';

        this.funFact.innerHTML = `
            <div class="fact-label">Fun Fact</div>
            <div class="fact-text">${this.currentCountry.funFact}</div>
        `;
        this.funFact.classList.add('visible');

        this.revealLetters();
        this.disableInputs();

        setTimeout(() => {
            this.loadNewCountry();
            this.enableInputs();
        }, 2500);
    }

    handleIncorrectGuess() {
        this.streak = 0;
        this.updateScoreDisplay();

        this.feedback.innerHTML = `
            <div>Incorrect! The answer was:</div>
            <div class="country-reveal">${this.currentCountry.name}</div>
        `;
        this.feedback.className = 'feedback visible incorrect';

        this.funFact.innerHTML = `
            <div class="fact-label">Fun Fact</div>
            <div class="fact-text">${this.currentCountry.funFact}</div>
        `;
        this.funFact.classList.add('visible');

        this.revealLetters();
        this.disableInputs();

        setTimeout(() => {
            this.loadNewCountry();
            this.enableInputs();
        }, 2500);
    }

    revealLetters() {
        this.scrambledWord.innerHTML = '';
        const letters = this.currentCountry.name.split('');
        letters.forEach((letter, index) => {
            const tile = document.createElement('div');
            if (letter === ' ') {
                tile.className = 'letter-tile space';
            } else {
                tile.className = 'letter-tile';
                tile.textContent = letter;
                tile.style.background = 'rgba(74, 222, 128, 0.35)';
                tile.style.borderColor = 'rgba(74, 222, 128, 0.7)';
                tile.style.animationDelay = `${index * 0.04}s`;
            }
            this.scrambledWord.appendChild(tile);
        });
    }

    showHint() {
        if (this.hintUsed) return;

        this.hintUsed = true;
        this.hintBtn.disabled = true;

        this.hintSection.innerHTML = `
            <div class="hint-label">Hint:</div>
            <div class="hint-text">${this.currentCountry.hint}</div>
        `;
        this.hintSection.classList.add('visible');
    }

    reshuffleLetters() {
        this.scrambledName = this.scrambleWord(this.currentCountry.name);
        this.renderScrambledWord();
    }

    skipCountry() {
        this.streak = 0;
        this.updateScoreDisplay();

        this.feedback.innerHTML = `
            <div>Skipped! The answer was:</div>
            <div class="country-reveal">${this.currentCountry.name}</div>
        `;
        this.feedback.className = 'feedback visible incorrect';

        this.revealLetters();
        this.disableInputs();

        setTimeout(() => {
            this.loadNewCountry();
            this.enableInputs();
        }, 2000);
    }

    updateScoreDisplay() {
        this.scoreDisplay.textContent = this.score;
        this.streakDisplay.textContent = this.streak;
        this.bestStreakDisplay.textContent = this.bestStreak;
        this.roundDisplay.textContent = this.round;
    }

    disableInputs() {
        this.guessInput.disabled = true;
        this.submitBtn.disabled = true;
        this.hintBtn.disabled = true;
        this.shuffleBtn.disabled = true;
        this.skipBtn.disabled = true;
    }

    enableInputs() {
        this.guessInput.disabled = false;
        this.submitBtn.disabled = false;
        this.hintBtn.disabled = false;
        this.shuffleBtn.disabled = false;
        this.skipBtn.disabled = false;
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CountryUnscrambleQuiz();
});
