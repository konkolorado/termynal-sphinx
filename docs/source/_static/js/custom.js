let new_termynals = [];

// When loaded onto a page, this will search for all elements of the
// termynal class and initialize them. 
function createTermynals() {
    var containers = document.getElementsByClassName("termynal")
    Array.from(containers).forEach(addTermynal);
}

// Create a new, uninitialized Termynal. Initialization will happen once it is
// viewable on the page.
function addTermynal(container) {
    const t = new Termynal(container, {
        noInit: true,
    });
    new_termynals.push(t);
}

// Initialize Termynals that are visible on the page. Once initialized, remove
// the Termynal from terminals that remain to be loaded.
function loadVisibleTermynals() {
    new_termynals = new_termynals.filter(termynal => {
        if (termynal.container.getBoundingClientRect().top - innerHeight <= 0) {
            termynal.init();
            return false;
        }
        return true;
    });
}

window.addEventListener("scroll", loadVisibleTermynals);
createTermynals();
loadVisibleTermynals();