(function() {

    'use strict';

    var items = document.querySelectorAll(".timeline li"); /* assign list item content to a variable for easy reference */

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect(); /* returns the size of the element and its position */

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    /* function that makes hidden list items visible if they're within view, either when window is loaded or when scrolling */    
    function makeVisible() {
        for (var i = 0; i < items.length; i++) {  
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    /* add event listeners for the window object */
    window.addEventListener("load", makeVisible); /* ensures that when window is loaded, the specific function is invoked */
    window.addEventListener("scroll", makeVisible); /* ensures that when scrolling in window, the function responsible for making the hidden list items visible is invoked */

})();