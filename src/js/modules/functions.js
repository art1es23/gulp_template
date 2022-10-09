export function isWebP() {

    // Checking webp support
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    // Adding class '.webp' or '.no-webp' in HTML
    testWebP((support) => {
        let classname = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(classname);
    });

}
