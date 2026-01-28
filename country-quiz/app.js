// Country Unscramble Quiz - Main Game Logic

class CountryQuiz {
    constructor() {
        this.countries = [...COUNTRIES];
        this.currentCountry = null;
        this.scrambledName = '';
        this.score = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.usedCountryIndices = [];

        // DOM Elements
        this.scrambledLetters = document.getElementById('scrambled-letters');
        this.letterCount = document.getElementById('letter-count');
        this.guessInput = document.getElementById('guess-input');
        this.submitBtn = document.getElementById('submit-btn');
        this.shuffleBtn = document.getElementById('shuffle-btn');
        this.skipBtn = document.getElementById('skip-btn');
        this.resultSection = document.getElementById('result-section');
        this.resultHeader = document.getElementById('result-header');
        this.flagImage = document.getElementById('flag-image');
        this.countryName = document.getElementById('country-name');
        this.capitalName = document.getElementById('capital-name');
        this.nextBtn = document.getElementById('next-btn');
        this.scoreDisplay = document.getElementById('score');
        this.streakDisplay = document.getElementById('streak');
        this.bestStreakDisplay = document.getElementById('best-streak');

        this.bindEvents();
        this.loadNewCountry();
    }

    bindEvents() {
        this.submitBtn.addEventListener('click', () => this.submitGuess());
        this.shuffleBtn.addEventListener('click', () => this.reshuffleLetters());
        this.skipBtn.addEventListener('click', () => this.skipCountry());
        this.nextBtn.addEventListener('click', () => this.loadNewCountry());

        this.guessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitGuess();
            }
        });
    }

    getRandomCountry() {
        // Reset if all countries have been used
        if (this.usedCountryIndices.length >= this.countries.length) {
            this.usedCountryIndices = [];
        }

        let index;
        do {
            index = Math.floor(Math.random() * this.countries.length);
        } while (this.usedCountryIndices.includes(index));

        this.usedCountryIndices.push(index);
        return this.countries[index];
    }

    scrambleWord(word) {
        // Handle multi-word country names
        const words = word.split(' ');
        const scrambledWords = words.map(w => {
            const letters = w.split('');
            // Fisher-Yates shuffle
            for (let i = letters.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [letters[i], letters[j]] = [letters[j], letters[i]];
            }
            return letters.join('');
        });

        const result = scrambledWords.join(' ');

        // If the scrambled version is the same as original, try again
        if (result.toLowerCase() === word.toLowerCase() && word.length > 2) {
            return this.scrambleWord(word);
        }

        return result;
    }

    loadNewCountry() {
        this.currentCountry = this.getRandomCountry();
        this.scrambledName = this.scrambleWord(this.currentCountry.name);

        // Reset UI
        this.resultSection.classList.remove('visible');
        this.guessInput.value = '';
        this.guessInput.disabled = false;
        this.submitBtn.disabled = false;
        this.shuffleBtn.disabled = false;
        this.skipBtn.disabled = false;
        this.guessInput.focus();

        this.renderScrambledLetters();
        this.updateLetterCount();
    }

    renderScrambledLetters() {
        this.scrambledLetters.innerHTML = '';

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

            this.scrambledLetters.appendChild(tile);
        });
    }

    updateLetterCount() {
        const letterCount = this.currentCountry.name.replace(/\s/g, '').length;
        const wordCount = this.currentCountry.name.split(' ').length;

        if (wordCount > 1) {
            const wordLengths = this.currentCountry.name.split(' ').map(w => w.length).join(', ');
            this.letterCount.textContent = `${letterCount} letters (${wordCount} words: ${wordLengths})`;
        } else {
            this.letterCount.textContent = `${letterCount} letters`;
        }
    }

    reshuffleLetters() {
        this.scrambledName = this.scrambleWord(this.currentCountry.name);
        this.renderScrambledLetters();
    }

    normalizeString(str) {
        return str.toLowerCase()
            .trim()
            .replace(/[^a-z\s]/g, '')
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
            this.guessInput.classList.add('shake');
            setTimeout(() => this.guessInput.classList.remove('shake'), 300);
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
        this.showResult(true);
    }

    handleIncorrectGuess() {
        this.streak = 0;
        this.updateScoreDisplay();
        this.showResult(false);
    }

    skipCountry() {
        this.streak = 0;
        this.updateScoreDisplay();
        this.showResult(false, true);
    }

    showResult(isCorrect, isSkipped = false) {
        // Disable inputs
        this.guessInput.disabled = true;
        this.submitBtn.disabled = true;
        this.shuffleBtn.disabled = true;
        this.skipBtn.disabled = true;

        // Set result header
        if (isCorrect) {
            this.resultHeader.textContent = '✓ Correct!';
            this.resultHeader.className = 'result-header correct';
        } else if (isSkipped) {
            this.resultHeader.textContent = 'Skipped!';
            this.resultHeader.className = 'result-header incorrect';
        } else {
            this.resultHeader.textContent = '✗ Incorrect!';
            this.resultHeader.className = 'result-header incorrect';
        }

        // Set country info
        this.flagImage.src = getFlagUrl(this.currentCountry.code);
        this.flagImage.alt = `Flag of ${this.currentCountry.name}`;
        this.countryName.textContent = this.currentCountry.name;
        this.capitalName.textContent = this.currentCountry.capital;

        // Show result section
        this.resultSection.classList.add('visible');

        // Focus next button
        this.nextBtn.focus();
    }

    updateScoreDisplay() {
        this.scoreDisplay.textContent = this.score;
        this.streakDisplay.textContent = this.streak;
        this.bestStreakDisplay.textContent = this.bestStreak;
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CountryQuiz();
});
