const adminIssueList = document.getElementById("adminIssueList");
let issues = JSON.parse(localStorage.getItem("issues"))||[];

function renderAdminIssues() {
    adminIssueList.innerHTML=" ";

    if(issues.length === 0){
        adminIssueList.innerHTML="<p> NO issues available. </p";
        return;
    }
    issues.forEach((issue, index)=> { 
        const div = document.createElement("div");
        div.className="issue-card";
        let buttons ="";
        if (issue.status==="Pending"){
            buttons =`<button onclick="startWork(${index})">Start Work</button>`;
        }
        if(issue.status==="In Progress"){
            buttons = `<button onclick="resolveIssue(${index})">Resolve</button>`;
        }

        div.innerHTML = `<h3>${issue.title}</h3>
        <p><b>Category:</b> ${issue.category}</p>
        <p><b>Location:</b> ${issue.location}</p>
        <p><b>Description:</b> ${issue.description}</p>
        <p class="status ${issue.status.replace(" ", "")}">
            Status: ${issue.status}
            </p>
            ${buttons}`;
            adminIssueList.appendChild(div);
    });
    }

function startWork(index) {

    issues[index].status="In Progress";
    localStorage.setItem("issues", JSON.stringify(issues));
    window.location.href="index.html";}
    //renderAdminIssues();

function resolveIssue(index) {
    issues[index].status="Resolved";
    localStorage.setItem("issues",JSON.stringify(issues));
    window.location.href="index.html";
    //renderAdminIssues();
}
renderAdminIssues();