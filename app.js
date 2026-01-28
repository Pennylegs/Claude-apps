// NBA Quiz App - Main Game Logic

class NBAQuiz {
    constructor() {
        this.players = [...NBA_PLAYERS];
        this.currentPlayer = null;
        this.score = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.hintUsed = false;
        this.usedPlayerIndices = [];

        // DOM Elements
        this.statsGrid = document.getElementById('stats-grid');
        this.guessInput = document.getElementById('guess-input');
        this.submitBtn = document.getElementById('submit-btn');
        this.hintBtn = document.getElementById('hint-btn');
        this.skipBtn = document.getElementById('skip-btn');
        this.hintSection = document.getElementById('hint-section');
        this.feedback = document.getElementById('feedback');
        this.scoreDisplay = document.getElementById('score');
        this.streakDisplay = document.getElementById('streak');
        this.bestStreakDisplay = document.getElementById('best-streak');

        this.bindEvents();
        this.loadNewPlayer();
    }

    bindEvents() {
        this.submitBtn.addEventListener('click', () => this.submitGuess());
        this.hintBtn.addEventListener('click', () => this.showHint());
        this.skipBtn.addEventListener('click', () => this.skipPlayer());

        this.guessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitGuess();
            }
        });
    }

    getRandomPlayer() {
        // Reset if all players have been used
        if (this.usedPlayerIndices.length >= this.players.length) {
            this.usedPlayerIndices = [];
        }

        let index;
        do {
            index = Math.floor(Math.random() * this.players.length);
        } while (this.usedPlayerIndices.includes(index));

        this.usedPlayerIndices.push(index);
        return this.players[index];
    }

    loadNewPlayer() {
        this.currentPlayer = this.getRandomPlayer();
        this.hintUsed = false;
        this.hintBtn.disabled = false;
        this.hintSection.classList.remove('visible');
        this.feedback.classList.remove('visible', 'correct', 'incorrect');
        this.guessInput.value = '';
        this.guessInput.focus();

        this.renderStats();
    }

    renderStats() {
        this.statsGrid.innerHTML = '';

        for (const [label, value] of Object.entries(this.currentPlayer.stats)) {
            const statItem = document.createElement('div');
            statItem.className = 'stat-item';
            statItem.innerHTML = `
                <div class="stat-label">${label}</div>
                <div class="stat-value">${value}</div>
            `;
            this.statsGrid.appendChild(statItem);
        }
    }

    normalizeString(str) {
        return str.toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, ' ');
    }

    checkGuess(guess) {
        const normalizedGuess = this.normalizeString(guess);
        const normalizedName = this.normalizeString(this.currentPlayer.name);

        // Check exact name match
        if (normalizedGuess === normalizedName) {
            return true;
        }

        // Check aliases
        if (this.currentPlayer.aliases) {
            for (const alias of this.currentPlayer.aliases) {
                if (normalizedGuess === this.normalizeString(alias)) {
                    return true;
                }
            }
        }

        // Check if the guess contains the last name
        const nameParts = normalizedName.split(' ');
        const lastName = nameParts[nameParts.length - 1];
        if (normalizedGuess === lastName && lastName.length > 3) {
            return true;
        }

        return false;
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
            <div class="player-reveal">${this.currentPlayer.name}</div>
        `;
        this.feedback.className = 'feedback visible correct';

        this.disableInputs();

        setTimeout(() => {
            this.loadNewPlayer();
            this.enableInputs();
        }, 1500);
    }

    handleIncorrectGuess() {
        this.streak = 0;
        this.updateScoreDisplay();

        this.feedback.innerHTML = `
            <div>Incorrect! The answer was:</div>
            <div class="player-reveal">${this.currentPlayer.name}</div>
        `;
        this.feedback.className = 'feedback visible incorrect';

        this.disableInputs();

        setTimeout(() => {
            this.loadNewPlayer();
            this.enableInputs();
        }, 2000);
    }

    showHint() {
        if (this.hintUsed) return;

        this.hintUsed = true;
        this.hintBtn.disabled = true;

        this.hintSection.innerHTML = `
            <div class="hint-label">Hint:</div>
            <div class="hint-text">${this.currentPlayer.hint}</div>
        `;
        this.hintSection.classList.add('visible');
    }

    skipPlayer() {
        this.streak = 0;
        this.updateScoreDisplay();

        this.feedback.innerHTML = `
            <div>Skipped! The answer was:</div>
            <div class="player-reveal">${this.currentPlayer.name}</div>
        `;
        this.feedback.className = 'feedback visible incorrect';

        this.disableInputs();

        setTimeout(() => {
            this.loadNewPlayer();
            this.enableInputs();
        }, 2000);
    }

    updateScoreDisplay() {
        this.scoreDisplay.textContent = this.score;
        this.streakDisplay.textContent = this.streak;
        this.bestStreakDisplay.textContent = this.bestStreak;
    }

    disableInputs() {
        this.guessInput.disabled = true;
        this.submitBtn.disabled = true;
        this.hintBtn.disabled = true;
        this.skipBtn.disabled = true;
    }

    enableInputs() {
        this.guessInput.disabled = false;
        this.submitBtn.disabled = false;
        this.hintBtn.disabled = false;
        this.skipBtn.disabled = false;
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NBAQuiz();
});
