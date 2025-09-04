var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}


if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}

else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

else{
    localStorage.setItem("theme", "light");
}

// story section
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.stories-list');
    const prevBtn  = document.querySelector('.arrow.prev');
    const nextBtn  = document.querySelector('.arrow.next');
    const card     = document.querySelector('.story-item');
    const style    = getComputedStyle(card);
    const scrollAmt = card.offsetWidth + parseInt(style.marginRight);

    prevBtn.addEventListener('click', () =>
      carousel.scrollBy({ left: -scrollAmt, behavior: 'smooth' })
    );
    nextBtn.addEventListener('click', () =>
      carousel.scrollBy({ left:  scrollAmt, behavior: 'smooth' })
    );
  });