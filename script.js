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
        <ul id="rb-list"></ul>
    `,
    bigboard: `
        <h1>Big Board</h1>
        <div id="big-board"></div>
    `
};
const runningBacks = [
    { name: "Ashton Jeanty", college: "Boise State", position: "RB" },
    { name: "Omarion Hampton", college: "North Carolina", position: "RB" },
    { name: "TreVeyon Henderson", college: "Ohio State", position: "RB" },
    { name: "Quinshon Judkins", college: "Ohio State", position: "RB" },
    { name: "Kaleb Johnson", college: "Iowa", position: "RB" },
    { name: "Cameron Skattebo", college: "Arizona State", position: "RB" },
    { name: "Jo'Quavious Marks", college: "USC", position: "RB" }
];

const playerProfiles = {
    "Ashton Jeanty": {
        college: "Boise State",
        position: "RB",
        height: "5'8\"",
        weight: "210 lbs",
        skills: ["Vision", "Explosiveness", "Durability", "Pass Blocking", "Receiving"]
    },
    // Add other players here
};
function loadRunningBacks() {
    const rbList = document.getElementById("rb-list");
    runningBacks.forEach(rb => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <a href="#" onclick="loadPlayerProfile('${rb.name}')">${rb.name} - ${rb.college}</a>
        `;
        rbList.appendChild(listItem);
    });
}
function loadPlayerProfile(playerName) {
    const player = playerProfiles[playerName];
    const mainContent = document.getElementById("main-content");

    const profileHTML = `
        <h1>${playerName}</h1>
        <p>College: ${player.college}</p>
        <p>Position: ${player.position}</p>
        <p>Height: ${player.height}</p>
        <p>Weight: ${player.weight}</p>
        <div class="skills">
            <h2>Skills</h2>
            ${player.skills
                .map(skill => `
                    <div>
                        <label for="${skill.replace(/\s/g, "-").toLowerCase()}">${skill}: </label>
                        <input type="range" id="${skill.replace(/\s/g, "-").toLowerCase()}" min="0" max="10" step="0.1" value="0">
                        <span id="${skill.replace(/\s/g, "-").toLowerCase()}-value">0.0</span>
                    </div>
                `)
                .join("")}
        </div>
        <button onclick="saveToBigBoard('${playerName}')">Add to Big Board</button>
    `;

    mainContent.innerHTML = profileHTML;

    // Attach slider functionality
    document.querySelectorAll("input[type='range']").forEach(slider => {
        slider.addEventListener("input", () => {
            const valueSpan = document.getElementById(`${slider.id}-value`);
            valueSpan.textContent = slider.value;
        });
    });
}
function loadPage(page) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = pages[page];

    if (page === "runningbacks") {
        loadRunningBacks();
    } else if (page === "bigboard") {
        populateBigBoard();
    }
}
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const page = link.getAttribute("data-page");
        loadPage(page);
    });
});
