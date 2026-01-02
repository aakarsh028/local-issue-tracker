const issueListDiv = 
document.getElementById("issueList");

let issues = JSON.parse(localStorage.getItem("issues")) || [];

function displayIssues() {
if(!issueListDiv) return;

issues = JSON.parse(localStorage.getItem("issues")) || [];

  issueListDiv.innerHTML = "";

  if (issues.length === 0) {
    issueListDiv.innerHTML = "<p>No issues reported yet.</p>";
    return;
  }

  issues.forEach(issue => {
    const div = document.createElement("div");
    div.className = "issue-card";

    div.innerHTML = `
      <h3>${issue.title}</h3>
      <p><b>Category:</b> ${issue.category}</p>
      <p><b>Location:</b> ${issue.location}</p>
      <p class="status ${issue.status.replace(" ", "")}">
        Status: ${issue.status}
      </p>
    `;

    issueListDiv.appendChild(div);
  });
}

displayIssues();

const form = document.getElementById("issueForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newIssue = {
      id: Date.now(),
      title: document.getElementById("title").value,
      category: document.getElementById("category").value,
      location: document.getElementById("location").value,
      description: document.getElementById("description").value,
      status: "Pending"
    };

    issues.push(newIssue);
    localStorage.setItem("issues", JSON.stringify(issues));

    setTimeout(() => {

    window.location.replace("index.html");
  },200);
});
}

setInterval(displayIssues, 1000);