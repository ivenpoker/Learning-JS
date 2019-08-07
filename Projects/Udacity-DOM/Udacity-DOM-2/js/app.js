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

let sectionNames = [];                          // Global store for section names.
let generatedNavigationListElements = [];       // Store for dynamically generated list items.
let pageScrolling = false;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * Finds all section in document (at call time) and returns
 * an array of 'data-nav' attribute values in the 'section'
 * element.
 * @returns {[]}
 */
let getAllSectionDataNavAttributeValue = () => {
    let values = [];
    let sections = document.getElementsByTagName('section');

    // for each section, we get the 'data-nav' attribute value
    // store it in the 'values' array.
    for (let i = 0; i < sections.length; i++) {
        values.push(sections[i].getAttribute('data-nav'));
    }
    return values;
};

/**
 * Creates a new list element.
 * @param listData Text that should be include in the created list (i.e text node)
 * @param sectionToReferTo  Since, list will contain <a> element, this will refer the value of 'href'
 * @returns {HTMLLIElement} Newly created list DOM element.
 */
let createListDOMElement = (listData, sectionToReferTo) => {
    let newListDOMElement = document.createElement("li");
    let newAnchorElementForNewList = document.createElement("a");

    // Now lets's add an ID to the list this list, so It can be distinguished from others
    newListDOMElement.setAttribute('id', "li" + sectionToReferTo.toString());

    // Let this new anchor element be 'class' attribute be registered as
    // a 'menu__link'

    newAnchorElementForNewList.setAttribute("class", "menu__link");

    // // Let the new anchor element refer to the section
    // // in DOM passed when calling this function
    //
    // newAnchorElementForNewList.setAttribute("href", sectionToReferTo);

    // New text (text node) to be associated with the newly created anchor element.

    let anchorTextNode = document.createTextNode(listData);

    // Insert the anchor text (node) as a child of '<a>' element.

    newAnchorElementForNewList.appendChild(anchorTextNode);

    // Insert the anchor element as a child of the list item.

    newListDOMElement.appendChild(newAnchorElementForNewList);

    return newListDOMElement;  // return created <li> element.

};

let trimSpacesAtSidesAndInBetween = (val) => {
    let temp = val.trim().toString().split(' '); // create array if there are spaces in string.
    let finalString = "";

    for (let i = 0; i < temp.length; i++)
        finalString += temp[i];

    return finalString;
};

let insertDOMElementsAsChildOfAnotherDOMElementIdentifiedByID = (domElements, idOfParent) => {
    let parent = document.getElementById(idOfParent);
    for (let i = 0; i < domElements.length; i++)
        parent.appendChild(domElements[i]);
};

let linkupNavigationListItemsToSections = (listItems) => {
    let sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) {
        let currentSectionID = sections[i].getAttribute("id");

        // Let this current <li>'s <a> element 'href' attribute references
        // the current section's id
        listItems[i].getElementsByTagName("a")[0].setAttribute("href", "#" + currentSectionID);
    }
};

let registerClickEventForListAnchorElement = (anchorElement) => {
    anchorElement.addEventListener('click', () => {
        let ind = findAnchorIndexInNavigationMenuListItems(anchorElement.getAttribute('href'));
        if (ind !== -1) {
            activateSection(ind);
        }
    });
};

/**
 * Locates a target <li> element in the array @generatedNavigationListElements and
 * set it's <a> element as active, at the same time locating the previous 'active' anchor
 * element, removing the class 'active' from it.
 *
 * @param targetListInd Index of target list (<li>) item in @generatedNavigationListElements
 */
let activateSection = (targetListInd) => {

    // Find list item in @generatedNavigationListElements and add 'active' to its class attribute.
    // At the same time, while processing list items in menu, if we come across a list item
    // whose is not at the desired index and has class 'active', we remove it.

    for (let i = 0; i < generatedNavigationListElements.length; i++) {
        let currAnchorItem = generatedNavigationListElements[i].getElementsByTagName('a')[0];

        // If index is found...

        if (i === targetListInd) {

            // If this current anchor element doesn't have 'active' as
            // value in its class data, we add it, else we just ignore it.

            if (!currAnchorItem.classList.contains('active')) {
                currAnchorItem.classList.add('active');
            }
        } else {

            // At this point, this index wasn't the target one.
            // If this anchor element is currently 'active', we just
            // remove it, else we leave it.

            if (currAnchorItem.classList.contains('active'))
                currAnchorItem.classList.remove('active');
        }
    }

};

/**
 * Finds the index of an anchor element in @generatedNavigationListElements, that is,
 * at what position it occurs in array.
 * @param anchorHrefValue Key to find.
 * @returns {number} Index if found else -1.
 */
let findAnchorIndexInNavigationMenuListItems = (anchorHrefValue) => {
    let ind = -1;
    for (let i = 0; i < generatedNavigationListElements.length; i++) {
        let currAnchor = generatedNavigationListElements[i].getElementsByTagName('a')[0];
        if (currAnchor.getAttribute('href') === anchorHrefValue.toString()) {
            ind = i;
            break;
        }
    }
    return ind;
};

let locateNavigationMenuListItemByID = (navigationListMenuID) => {
    let ind = -1;
    for (let i = 0; i < generatedNavigationListElements.length; i++) {
        if (generatedNavigationListElements[i].getAttribute('id') === navigationListMenuID.toString()) {
            ind = i ;
            break;
        }
    }
    return ind;
};

/**
 * Checks if a DOM element is currently in view port.
 * @param elem DOM element to check against.
 * @returns {boolean}
 */
let isAnyPartOfElementInViewport = (elem) => {
    const rect = elem.getBoundingClientRect();

    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
};


/**
 * Whenever the mouse wheel is scrolled (by user), we locate the current section in view
 * and modify the navigation menu list items to reflect the section in view (by changing
 * color). This will hereby hint user on which section they are.
 */

let wheelEventHandler = () => {
    pageScrolling = true;           // page is scrolling.

    // when wheel is scrolled, the navigation menu bar must be visible
    let elem = document.getElementsByClassName("navbar__menu")[0];
    elem.style.display = "block";

    let currentSections = document.getElementsByTagName("section");

    for (let i = 0; i < currentSections.length; i++) {

        // Here, I use h2 (the first one if many) in each section as the determining factor
        // to find out if section is in view.

        let headingTwoElem = currentSections[i].getElementsByTagName('h2')[0];

        // If this 'h2' element is currently in 'view', we make changes to navigation menu
        // list item(s)

        if (isAnyPartOfElementInViewport(headingTwoElem)) {
            let sectionDataNav = currentSections[i].getAttribute("data-nav");
            sectionDataNav = trimSpacesAtSidesAndInBetween(sectionDataNav);

            // We obtain the corresponding ID of the navigation list, for this section
            // which is in view. Remember that, the ID of navigation list items, where
            // created by appending "li" to name of section (i.e value of attribute 'data-nav').

            let navigationMenuListID = locateNavigationMenuListItemByID("li" + sectionDataNav);

            // we now set the section as active.

            activateSection(navigationMenuListID);
            break;
        }
    }
};

let processButtonToTopOfPage = () => {
    if (document.documentElement.scrollTop > 1100 || document.body.scrollTop > 1100) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

window.onload = () => {

    // [========================= BUILD NAVIGATION MENU AND DATA AND INSERT INTO DOM ====================]

    // Obtain all section names
    sectionNames = getAllSectionDataNavAttributeValue();

    // For each section, create <li> DOM element out of section name
    // and store in Global store.

    (function () {          // avoid namespace pollution.
        let i = 0;
        while (i < sectionNames.length) {
            let currentSectionReference = trimSpacesAtSidesAndInBetween(sectionNames[i]);

            // create new <li> out of section names and store in global store.
            generatedNavigationListElements.push(createListDOMElement(sectionNames[i], currentSectionReference));
            i++;
        }
    })();

    // Insert the created navigation menu into the DOM
    insertDOMElementsAsChildOfAnotherDOMElementIdentifiedByID(generatedNavigationListElements, "navbar__list");

    // For each navigation menu list link, link it up with corresponding section.
    linkupNavigationListItemsToSections(generatedNavigationListElements);

    // Register click even on each navigation menu list link.

    (function () {
        let i = 0;
        while (i < generatedNavigationListElements.length) {
            registerClickEventForListAnchorElement(generatedNavigationListElements[i].getElementsByTagName('a')[0]);
            i++;
        }
    })();

    // [======================= HANDLE SCROLL EVENT FOR THE PAGE ======================================]

    // Since scrolling is somewhat of a generic term that encompass those triggered by browser (link smooth scrolling
    // when an <a> element is clicked with 'href' attribute linked with some part of the DOM having)
    // and that triggered when the mouse (or touchpad) wheel is 'scrolled', here I'm targeting but the
    // scrolling of wheel and not the browser initiated scrolling.

    window.addEventListener('wheel', wheelEventHandler);


    // No lets register the 'onscroll' (that which the browser initiates itself)

    window.onscroll = () => {
        processButtonToTopOfPage();
        wheelEventHandler();
    };

    // Register event which is triggered when user clicks the button to move
    // to the top of the page.

    document.getElementById("scrollToTopButton").addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        activateSection(0);   // since we're scrolling to top of page, first navigation menu item must be 'active'
    });

    // [====================== HIDING THE NAVIGATION MENU IF THE USER IS INACTIVE FOR A WHILE =========]
    window.setInterval( () => {
        if (pageScrolling === true || window.pageYOffset === 0) {
            let elem = document.getElementsByClassName("navbar__menu")[0];
            elem.style.display = "block";
            pageScrolling = false;
        } else {
            let elem = document.getElementsByClassName("navbar__menu")[0];
            elem.style.display = "none";
        }
    }, 5000);



};

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


