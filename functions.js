function hide(id) {
    // document.getElementById('skills').style.display = 'none';
    var el = document.getElementById(id);
    console.info(el);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("pagina nu exista" , id);
    }
}

// function hideAllPages() {
//     hide ("home");
//     hide ("skills");
//     hide ("projects");
//     hide ("languages");

// } 

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    console.log(pages.length);

    //for(initializare; conditie; post action-execute)
    for(var i = 0; i <= pages.length-1; i++) {
        var page = pages[i];
        var id = page.id;
        console.info("i=", i,"id=", id, page);
        hide(id);
    }
    
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



// document.getElementById('projects').style.display = "none"; */