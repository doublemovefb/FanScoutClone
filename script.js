const positionGroups = [
  {
    position: "Quarterbacks",
    traits: ["Arm Strength", "Accuracy", "Pocket Presence", "Decision Making", "Mobility"],
    prospects: [
      { name: "Travis Hunter", college: "Colorado", height: "6'1\"", weight: "185 lbs", year: "JR" },
      { name: "Cameron Ward", college: "Miami FL", height: "6'3\"", weight: "220 lbs", year: "RSR" },
      { name: "Shedeur Sanders", college: "Colorado", height: "6'2\"", weight: "215 lbs", year: "SR" }
    ]
  },
  {
    position: "Running Backs",
    traits: ["Vision", "Explosiveness", "Pass Blocking", "Receiving Ability", "Durability"],
    prospects: [
      { name: "Ashton Jeanty", college: "Boise State", height: "5'8\"", weight: "210 lbs", year: "JR" },
      { name: "Omarion Hampton", college: "North Carolina", height: "6'0\"", weight: "220 lbs", year: "JR" },
      { name: "TreVeyon Henderson", college: "Ohio State", height: "5'10\"", weight: "214 lbs", year: "SR" }
    ]
  }
  // Add other position groups and prospects here
];

// Dynamically populate the position groups
function populatePositions() {
  const positionsSection = document.getElementById("positions");

  positionGroups.forEach((group) => {
    const groupDiv = document.createElement("div");
    groupDiv.classList.add("position-group");

    const groupTitle = document.createElement("h3");
    groupTitle.textContent = group.position;
    groupDiv.appendChild(groupTitle);

    const traitsList = document.createElement("ul");
    group.traits.forEach((trait) => {
      const traitItem = document.createElement("li");
      traitItem.textContent = trait;
      traitsList.appendChild(traitItem);
    });
    groupDiv.appendChild(traitsList);

    const prospectsDiv = document.createElement("div");
    prospectsDiv.classList.add("prospects");
    const prospectsTitle = document.createElement("h4");
    prospectsTitle.textContent = "Prospects:";
    prospectsDiv.appendChild(prospectsTitle);

    const prospectsList = document.createElement("ul");
    group.prospects.forEach((prospect) => {
      const prospectItem = document.createElement("li");
      prospectItem.textContent = `${prospect.name} (${prospect.college}) - ${prospect.height}, ${prospect.weight}, ${prospect.year}`;
      prospectsList.appendChild(prospectItem);
    });
    prospectsDiv.appendChild(prospectsList);
    groupDiv.appendChild(prospectsDiv);

    positionsSection.appendChild(groupDiv);
  });
}

document.addEventListener("DOMContentLoaded", populatePositions);

