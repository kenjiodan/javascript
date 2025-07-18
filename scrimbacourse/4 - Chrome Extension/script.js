let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector(".input-btn");
const deleteBtn = document.querySelector(".delete-btn");
const tabBtn = document.querySelector(".tab-btn");
const ulEl = document.querySelector(".ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/?originalSubdomain=no"}
]

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a href="${leads[i]}" target="_blank">
            ${leads[i]}
            </a>
        </li>
        `;
        ulEl.innerHTML = listItems
    }
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currentTab = tabs[0].url;
        myLeads.push(currentTab)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        console.log(currentTab)
        console.log(myLeads)
        render(myLeads)
    });
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    location.reload()
})




// listItems = "<li>" + '<a href="' + myLeads[i] + '" target="_blank">' + myLeads[i] + "</a>" + "</li>";

// const li = document.createElement("li")
// const a = document.createElement("a")
// ulEl.appendChild(li)
// li.appendChild(a)
// a.textContent = ""