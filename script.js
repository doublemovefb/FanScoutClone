// Page content for each section
const pages = {
    home: `
        <h1>Welcome to FanScout Clone</h1>
        <p>Select a position group to start scouting.</p>
    `,
    quarterbacks: `
        <h1>Quarterbacks</h1>
        <div class="player-profile">
            <h2>Travis Hunter</h2>
            <p>College: Colorado</p>
            <p>Height: 6'1"</p>
            <p>Weight: 185 lbs</p>
            <div class="skills">
                <h3>Skills</h3>
                <div>
                    <label for="arm-strength">Arm Strength: </label>
                    <input type="range" id="arm-strength" min="0" max="10" step="0.1" value="0">
                    <span id="arm-strength-value">0.0</span>
                </div>
                <div>
                    <label for="accuracy">Accuracy: </label>
                    <input type="range" id="accuracy" min="0" max="10" step="0.1" value="0">
                    <span id="accuracy-value">0.0</span>
                </div>
            </div>
            <button onclick="saveToBigBoard('Travis Hunter')">Add to Big Board</button>
        </div>
    `,
    runningbacks: `
        <h1>Running Backs</h1>
        <div class="player-profile">
            <h2>Ashton Jeanty</h2>
            <p>College: Boise State</p>
            <p>Height: 5'8"</p>
            <p>Weight: 210 lbs</p>
            <div class="skills">
                <h3>Skills</h3>
                <div>
                    <label for="vision">Vision: </label>
                    <input type="range" id="vision" min="0" max="10" step="0.1" value="0">
                    <span id="vision-value">0.0</span>
                </div>
            </div>
            <button onclick="saveToBigBoard('Ashton Jeanty')">Add to Big Board</button>
        </div>
    `,
    bigboard: `
        <h1>Big Board</h1>
        <div id="big-board"></div>
    `
};

// Function to load a page dynamically
function loadPage(page) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = pages[page];

    // Populate the Big Board if on the Big Board page
    if (page === "bigboard") {
        populateBigBoard();
    }

    // Update slider values dynamically if sliders exist
    const sliders = document.querySelectorAll("input[type='range']");
    sliders.forEach(slider => {
        slider.addEventListener("input", () => {
            const valueSpan = document.getElementById(`${slider.id}-value`);
            if (valueSpan) {
                valueSpan.textContent = slider.value;
            }
        });
    });
}

// Event listener for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const page = link.getAttribute("data-page");
        loadPage(page);
    });
});

// Save player data to the Big Board
function saveToBigBoard(playerName) {
    const skills = {};
    document.querySelectorAll("input[type='range']").forEach(slider => {
        const skillName = slider.id.replace(/-/g, " ");
        skills[skillName] = slider.value;
    });

    const playerData = { name: playerName, skills };
    let bigBoard = JSON.parse(localStorage.getItem("bigBoard")) || [];
    bigBoard.push(playerData);
    localStorage.setItem("bigBoard", JSON.stringify(bigBoard));

    alert(`${playerName} has been added to your Big Board!`);
}

// Populate the Big Board
function populateBigBoard() {
    const bigBoard = JSON.parse(localStorage.getItem("bigBoard")) || [];
    const boardDiv = document.getElementById("big-board");

    if (bigBoard.length === 0) {
        boardDiv.innerHTML = "<p>No players on the Big Board yet.</p>";
        return;
    }

    bigBoard.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player");

        const playerName = document.createElement("h2");
        playerName.textContent = player.name;
        playerDiv.appendChild(playerName);

        const skillsList = document.createElement("ul");
        for (const [skill, rating] of Object.entries(player.skills)) {
            const skillItem = document.createElement("li");
            skillItem.textContent = `${skill}: ${rating}`;
            skillsList.appendChild(skillItem);
        }
        playerDiv.appendChild(skillsList);

        boardDiv.appendChild(playerDiv);
    });
}
const playerProfiles = {
    "Ashton Jeanty": {
        college: "Boise State",
        position: "RB",
        height: "5'8\"",
        weight: "210 lbs",
        skills: ["Vision", "Explosiveness", "Durability", "Pass Blocking", "Receiving"]
    },
    "Omarion Hampton": {
        college: "North Carolina",
        position: "RB",
        height: "6'0\"",
        weight: "220 lbs",
        skills: ["Vision", "Power", "Burst", "Elusiveness", "Ball Security"]
    },
    "TreVeyon Henderson": {
        college: "Ohio State",
        position: "RB",
        height: "5'10\"",
        weight: "214 lbs",
        skills: ["Vision", "Acceleration", "Agility", "Pass Protection", "Receiving"]
    },
    "Quinshon Judkins": {
        college: "Ohio State",
        position: "RB",
        height: "5'11\"",
        weight: "210 lbs",
        skills: ["Vision", "Speed", "Elusiveness", "Physicality", "Durability"]
    },
    "Kaleb Johnson": {
        college: "Iowa",
        position: "RB",
        height: "6'0\"",
        weight: "225 lbs",
        skills: ["Power", "Burst", "Vision", "Receiving", "Tackling Evasion"]
    },
    "Cameron Skattebo": {
        college: "Arizona State",
        position: "RB",
        height: "5'10\"",
        weight: "215 lbs",
        skills: ["Vision", "Elusiveness", "Pass Blocking", "Speed", "Power"]
    },
    "Jo'Quavious Marks": {
        college: "USC",
        position: "RB",
        height: "5'11\"",
        weight: "205 lbs",
        skills: ["Explosiveness", "Receiving", "Vision", "Agility", "Pass Blocking"]
    }
};

// Function to load a player's profile
function loadPlayerProfile(playerName) {
    const player = playerProfiles[playerName];
    const mainContent = document.getElementById("main-content");

    // Generate the player's profile dynamically
    let profileHTML = `
        <h1>${playerName}</h1>
        <p>College: ${player.college}</p>
        <p>Position: ${player.position}</p>
        <p>Height: ${

