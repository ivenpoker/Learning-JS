/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 * 
*/

// Array of sections to be processed.
let navigationBarListElements = [];               // Array for <li> element, created from names of sections.
let isPageScrolling = false;
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * Function returns an array of Strings ('data-nav' value) of the
 * sections 'scanned' when page is loaded. This should be called
 * when the page is loaded.
 */
function retrieveSections() {
    let sectionDataNav = [];
    let sections = document.getElementsByTagName('section');

    // All values of 'data-nav' for each section is
    // pushed to the array.
    for (let i = 0; i < sections.length; i++) {
        sectionDataNav.push(sections[i].getAttribute('data-nav'));
    }

    return sectionDataNav;
}

/**
 * Creates a list from a given text, to be used as text node data.
 *
 * @param listText Text to be associated with list (i.e value for the text node).
 * @param sectionReference Section to which the list item will refer to .
 * @returns {HTMLLIElement} Newly create <li> element with <code>text</code> inside.
 */
function createNavigationListElement(listText, sectionReference) {
    let listElement = document.createElement("li");     // create a new <li> element
    let aLinkElement = document.createElement("a");     // An 'a' to provide a link that could be clicked to move to specific section

    // Now let's add a reference to the section where the item will refer to.
    aLinkElement.setAttribute("href", sectionReference);
    aLinkElement.setAttribute('class', 'menu__link');

    // Now lets's add an ID to the list this list, so It can be distinguished from others
    listElement.setAttribute('id', "li" + sectionReference.toString());

    // create text to be inserted in the list.
    let listLinkTextNode = document.createTextNode(listText);

    // insert text as child of 'a' element i.e it should be like this...
    //
    //          <a href='${sectionReference}'> ${listText} </a>
    //

    aLinkElement.appendChild(listLinkTextNode);

    // Append link to the create 'li' item. This should now look like this...
    //          <li>
    //              <a href='${sectionReference}> ${listText} </a>
    //          </li>

    listElement.appendChild(aLinkElement);

    return listElement;
}

/**
 * Removes space(s) from a string. That is, if passed with "test A",
 * function will return "testA".
 * @param someStr
 * @returns {string}
 */
function removeSpaces(someStr) {
    let tmp = someStr.trim().toString().split(' ');
    let results = "";

    for (let i = 0; i < tmp.length; i++)
        results += tmp[i];

    return results;
}


/**
 * Inserts an array of navigation list elements into the DOM Element with specified ID.
 *
 * @param navigationListElements Array of list elements to insert into a DOM element with specified ID.
 * @param navigationBarListID ID of the DOM element to insert List elements as children.
 */
function insertNavigationBarListIntoDOM(navigationListElements, navigationBarListID) {
    let navElem = document.getElementById(navigationBarListID);     // we find the DOM element with specified ID.
    for (let i = 0; i < navigationListElements.length; i++)
        navElem.appendChild(navigationListElements[i]);             // insert each element as child of the DOM element with ID.
}

/**
 * Function sets a particular list item as the current one on the viewport
 * removing the others from the view port visually.
 * @param targetListIndex Index of list item to set as 'active'.
 */
function setSectionAsActive(targetListIndex) {

    // We search for list item to set as active. At the same time
    // remove the 'active' part from any other item (if it has) which
    // is not the desired index 'targetListIndex'.

    for (let i = 0; i < navigationBarListElements.length; i++) {
        let aLinkItem = navigationBarListElements[i].getElementsByTagName('a')[0];

        // If we've found the index of the anchor to set
        // as active, we set it then.

        if (i === targetListIndex) {

            // We check if the link item already is already 'active'.
            // if this is the case, we just ignore it an move on. Else
            // we set to active.
            //
            // I don't 'return' or 'break' at this point because
            // I want the to make sure that no other anchor is currently
            // 'active', i.e Anchor with ID 'i' is the only one active.

            if (!aLinkItem.classList.contains('active')) {
                aLinkItem.classList.add('active');
            }
        } else {

            // if the current anchor element is set the 'active',
            // we remove it, since it's not the 'desired' anchor
            // to be active at the moment by the caller.

            if (aLinkItem.classList.contains('active'))
                aLinkItem.classList.remove('active');
        }
    }
}

/**
 * Function will setup the 'href' attribute of each anchor element in list
 * found in the navigation menu to reference a particular section based on
 * that section's ID.
 */
function setupAnchorLinksToReferenceSections() {
    let sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) {
        let currentSectionID = sections[i].getAttribute('id');

        // now let the ith anchor element reference the ith section
        navigationBarListElements[i].getElementsByTagName('a')[0].setAttribute('href', "#" + currentSectionID);
    }

}

/**
 * Registers a click event for an anchor element
 * @param anchorElement
 */
function registerAnchorClickEvent(anchorElement) {
    anchorElement.addEventListener('click', function () {

        let ind = findAnchorIndexFromList(anchorElement.getAttribute('href'));
        if (ind !== -1) {
            setSectionAsActive(ind);
        }
    });

}

/**
 * Finds the index of an anchor element from the Anchor list
 * @param anchorHrefValue
 * @returns {number}
 */
function findAnchorIndexFromList(anchorHrefValue) {
    let ind = -1;
    for (let i = 0; i < navigationBarListElements.length; i++) {
        let tempAnchor = navigationBarListElements[i].getElementsByTagName('a')[0];
        if (tempAnchor.getAttribute('href') === anchorHrefValue.toString()) {
            ind = i;
            break;
        }
    }
    return ind;
}

/**
 * Function used to change 'active' navigation list item
 * when scrolling.
 */
function distinctSectionInCurrentView() {
    isPageScrolling = true;

    // when wheel is scrolled, the navigation menu bar must be visible
    let elem = document.getElementsByClassName("navbar__menu")[0];
    elem.style.display = "block";

    let currentSections = document.getElementsByTagName("section");

    for (let i = 0; i < currentSections.length; i++) {
        // I am assuming that all sections will have a 'h2' heading.
        let h2Elem = currentSections[i].getElementsByTagName("h2")[0];  // I need just the first 'h2'

        // If this 'h2' elem in currently in 'view', we make the navigation
        if (isAnyPartOfElementInViewport(h2Elem)) {
            let sectionDataNav = currentSections[i].getAttribute("data-nav");
            sectionDataNav = removeSpaces(sectionDataNav);    // remove spaces

            // We now get corresponding ID of the navigation list, for this section
            // which is in view. Note, the ID of navigation list items, where created
            // by append 'li' to name of section (i.e value of attribute 'data-nav')

            let correspondingNavigationListID = findNavigationListByID("li" + sectionDataNav);

            setSectionAsActive(correspondingNavigationListID);
            break;

        }
    }
}

/**
 * Checks if a DOM element is in view port
 * @param el Element to check if in view port
 * @returns {boolean}
 */
function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();

    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

function findNavigationListByID(navigationListID) {
    let ind = -1;
    for (let i = 0; i < navigationBarListElements.length; i++) {
        if (navigationBarListElements[i].getAttribute('id') === navigationListID.toString()) {
            ind = i;
            break;
        }
    }
    return ind;
}

function handleButtonToTop() {
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        document.getElementById('scrollToTopButton').style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

window.onload = function () {

    // #################### BUILDING THE NAVIGATION ####################################################################

    // building the navigation bar
    let sectionNames = retrieveSections();  // retrieve all sections names (data-nav) as an array of string.

    // Create <li> items out of section names and store them.
    for (let i = 0; i < sectionNames.length; i++) {
        let newReferenceForSection = removeSpaces(sectionNames[i]);

        // create a <li> element and insert inside the array.
        navigationBarListElements.push(createNavigationListElement(sectionNames[i], newReferenceForSection));
    }
    // testing
    for (let i = 0; i < navigationBarListElements.length; i++)
        console.log(navigationBarListElements[i].innerHTML);

    // ###################### WE NOW INSERT THE MENU INTO DOM ##########################################################

    insertNavigationBarListIntoDOM(navigationBarListElements, "navbar__list");


    // ######################## FUNCTION TO SCROLL TO SPECIFIC SECTION WHEN LINK IS CLICKED CLICKED ####################

    setupAnchorLinksToReferenceSections();

    // ####################### REGISTER CLICK EVENT LISTENERS FOR ANCHORS  #############################################

    for (let i = 0; i < navigationBarListElements.length; i++) {
        // register the anchor click event
        registerAnchorClickEvent(navigationBarListElements[i].getElementsByTagName('a')[0]);
    }

    // ####################### MAKE SECTION IN VIEW PORT DISTINCT WHEN SCROLLING DOW ###################################

    window.addEventListener('wheel', distinctSectionInCurrentView);

    // ####################### SETTING UP FUNCTIONALITY FOR BUTTON TO SCROLL BACK TO UP WHEN CLICKED ###################

    window.onscroll = function () {
        handleButtonToTop();
       // distinctSectionInCurrentView();
    };

    // ###################### Registering click event for button to scroll to top of page ##############################

    document.getElementById('scrollToTopButton').addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        // Scrolling to top of page, means first navigation menu item must be set as 'active' while
        // others not set as 'active', if 'active' is present.

        setSectionAsActive(0);
    });

    // ##################### Check every 5s, if page is scrolling don't hide nav bar, else hide it #################

    window.setInterval(function () {
        if (isPageScrolling === true || window.pageYOffset === 0) {
            let elem = document.getElementsByClassName("navbar__menu")[0];
            elem.style.display = "block";
            isPageScrolling = false;
        } else {
            let elem = document.getElementsByClassName("navbar__menu")[0];
            elem.style.display = "none";
        }
    }, 5000);


};

