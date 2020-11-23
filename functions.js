var activePage = "skills";



function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    for(var i = 0; i <= pages.length-1; i++) {
        var page = pages[i];
        var id = page.id;
        hide(id);
    }
}

var activePage = "skills";

function hide(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("pagina nu exista" , id);
    }
}

function hidePreviousPage () {
    hide(activePage);
}

function showPage (pageId) {
    hidePreviousPage();
    document.getElementById(pageId).style.display = "";
    activePage = pageId;
} 

function initMenu() {
    document.addEventListener("click", function(e){
        var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
            link.className.add("active");
        }
    });
}

initMenu();

showPage(activePage);

var skills = [
    "HTML (15)",
    "CSS (5)", 
    "JS (20)"
];

var skillsLi_tmp = [
    "<li>" + skills[0] + "</li>" +
    "<li>" + skills[1] + "</li>" +
    "<li>" + skills[2] + "</li>"
];

var skillsLi = skills.map(function(skill){
    console.info(skill);
    return "<li>" + skill + "</li>"; 
});


var ul = document.querySelector("#skills ul");
ul.innerHTML =  skillsLi.join("");
                