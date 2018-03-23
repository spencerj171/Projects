const nav = document.querySelector('#main');
const dropdown = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector(".dropdown-content");
const topOfNav = nav.offsetTop;

function fixNav(){
  if(window.scrollY >= topOfNav){
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else{
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);

// Dropdown Menu

function drop() {
    dropdownContent.classList.toggle("show");
}

dropdown.addEventListener('click', drop);

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
}
