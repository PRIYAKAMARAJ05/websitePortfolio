var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// function toggleGallery() {
//     var gallery = document.getElementById("imageGallery");
//     gallery.style.display = gallery.style.display === "none" ? "block" : "none";
// }

function toggleGallery() {
    const familyList = document.getElementById('familyList');
    const imageGallery = document.getElementById('imageGallery');
    const showImagesButton = document.querySelector('.btn');

    if (imageGallery.style.display === 'none') {
        // Hide family list and show image gallery
        familyList.style.display = 'none';
        imageGallery.style.display = 'block';
        showImagesButton.textContent = 'Hide Images';
    } else {
        // Show family list and hide image gallery
        familyList.style.display = 'grid';
        imageGallery.style.display = 'none';
        showImagesButton.textContent = 'Show Images';
    }
}

function toggleHobby() {
    const familyList = document.getElementById('hobbyList');
    const imageGallery = document.getElementById('hobbyGallery');
    const showImagesButton = document.querySelector('.btn');

    if (imageGallery.style.display === 'none') {
        // Hide family list and show image gallery
        familyList.style.display = 'none';
        imageGallery.style.display = 'block';
        showImagesButton.textContent = 'Hide Images';
    } else {
        // Show family list and hide image gallery
        familyList.style.display = 'grid';
        imageGallery.style.display = 'none';
        showImagesButton.textContent = 'Show Images';
    }
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
document.querySelectorAll("#sidemenu li a").forEach(item => {
    item.addEventListener("click", function() {
        closeMenu();
    });
});


function toggleTheme() {
    const themeIcon = document.getElementById('themeIcon');

    if (themeIcon.classList.contains('fa-moon')) {
        // Switch to light mode
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); // Change icon to sun for light mode
    } else {
        // Switch to dark mode
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon'); // Change icon to moon for dark mode
    }
}
