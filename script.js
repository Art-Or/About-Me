

let offset = 0;
const sliderLine = document.querySelector(".slider-line");
const traits = document.querySelectorAll(".traits");

function removeActive(){
    traits.forEach(trait => {
        trait.classList.remove("active");
    });
};

function setText(point) {
    switch (point) {
        case 0:
            removeActive ();
            traits[0].classList.add("active");
            break;
        case 256:
            removeActive ();
            traits[1].classList.add("active");
            break;
        case 512:
            removeActive ();
            traits[2].classList.add("active");
            break;
        case 768:
            removeActive ();
            traits[3].classList.add("active");
            break;
    }
}

document.querySelector(".slider-next").addEventListener("click", function(){
    offset += 256;
    if (offset > 768) {
        offset = 0;
    };
    setText(offset);
    sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function(){
    offset -= 256;
    if (offset < 0) {
        offset = 768;
    };
    setText(offset);
    sliderLine.style.left = -offset + "px";
});





let mouseX;
let mouseY;
let touchX;
let touchY;

const trigger1 = document.querySelector(".onHover1");
const flyImg1 = document.querySelector(".imgOnHover1");
const trigger2 = document.querySelector(".onHover2");
const flyImg2 = document.querySelector(".imgOnHover2");

trigger1.addEventListener("mouseover", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    flyImg1.style.display = "block";
    flyImg1.style.top = mouseY + "px";
    flyImg1.style.left = mouseX + "px"; 
});

trigger1.addEventListener("mouseout", function() {
    flyImg1.style.display = "none";
});

trigger2.addEventListener("mouseover", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    flyImg2.style.display = "block";
    flyImg2.style.top = mouseY + "px";
    flyImg2.style.left = mouseX + "px"; 
});

trigger2.addEventListener("mouseout", function() {
    flyImg2.style.display = "none";
});

trigger1.addEventListener("pointerover", function(e) {
    touchX = e.pageX;
    touchY = e.pageY;
    flyImg1.style.display = "block";
    flyImg1.style.top = touchY + "px";
    flyImg1.style.left = touchX - 100 + "px"; 
});

trigger1.addEventListener("pointerout", function() {
    flyImg1.style.display = "none";
});
trigger2.addEventListener("pointerover", function(e) {
    touchX = e.pageX;
    touchY = e.pageY;
    flyImg2.style.display = "block";
    flyImg2.style.top = touchY + "px";
    flyImg2.style.left = touchX + "px"; 
});

trigger2.addEventListener("pointerout", function() {
    flyImg2.style.display = "none";
});







const openEduButton = document.querySelector(".eduBtn");
const arrow1 = document.querySelector(".icon1");
const eduHidingBlock = document.querySelector(".eduHidingBlock");

openEduButton.addEventListener("click", function() {
    arrow1.classList.toggle("up");
    arrow1.classList.toggle("down");
    eduHidingBlock.classList.toggle("hideOn");
    eduHidingBlock.classList.toggle("hideOff");
})


const openWorkButton = document.querySelector(".workBtn");
const arrow2 = document.querySelector(".icon2");
const workHidingBlock = document.querySelector(".workHidingBlock");

openWorkButton.addEventListener("click", function() {
    arrow2.classList.toggle("up");
    arrow2.classList.toggle("down");
    workHidingBlock.classList.toggle("hideOn");
    workHidingBlock.classList.toggle("hideOff");
})






