document.addEventListener("DOMContentLoaded", async function () {
  //Function to dynamically populate summary pills

  function populateSummaryPills(data) {
    const summaryPills = document.getElementsByClassName("summary__pills")[0];

    data.forEach((item) => {
      const pill = document.createElement("div");
      pill.className = `summary__pill summary__pill--${item.category.toLowerCase()}`;

      const pillItem = document.createElement("div");
      pillItem.className = "summary__pill-item";

      pillItem.innerHTML = `<img src="${item.icon}" alt="${item.category} icon"/>
      ${item.category}
      `;
      pill.appendChild(pillItem);

      const pillItemScore = document.createElement("div");
      pillItemScore.className = "summary__pill-item-score";
      pillItemScore.innerHTML = `<span>${item.score}</span> / 100`;
      pill.appendChild(pillItemScore);

      summaryPills.appendChild(pill);
    });
  }

  // Function to update the total score, result title, and description
  function updateResult(totalScore, resultTitle, resultDescription) {
    document.getElementsByClassName("result__total-score")[0].textContent =
      totalScore;
    document.getElementsByClassName("result__description-title")[0].textContent = resultTitle;
    document.getElementsByClassName("result__description-text")[0].textContent =
      resultDescription;
  }

  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    populateSummaryPills(data);
    //updateResult(50, "Good", "You scored higher than 45% of the people who have taken these tests.")
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
