function hide(id) {
    // document.getElementById('skills').style.display = 'none';
    var el = document.getElementById(id);
    console.info("hide:" + id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("pagina nu exista" , id)
    }
}

function hideAllPages() {
    hide ("home");
    hide ("skills");
    hide ("projects");
    hide ("languages");
}

function showHome() {
    hideAllPages(); 
    /*hide ("skills");
    hide ("projects");
    hide ("languages"); */
    document.getElementById('home').style.display = '';
} 

function showSkills() {
    hideAllPages(); 
    document.getElementById('skills').style.display = ''; 
}

function showProjects() {
    hideAllPages();
    document.getElementById('projects').style.display = '';
}

function showLanguages() {
    hideAllPages();
    document.getElementById('languages').style.display = '';
}



/* document.getElementById('projects').style.display = "none"; */