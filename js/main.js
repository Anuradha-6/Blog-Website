var elems = document.querySelectorAll('.list-item');

elems.forEach((elem)=> {
    elem.addEventListener("mouseover", () => {
        text = elem.querySelector('a');
        elem.classList.add('hover-bg');
        text.style.color = "aliceblue";
        
    })
    elem.addEventListener("mouseleave", () => {
        elem.classList.remove('hover-bg');
        text.style.color = "black";
    })
})

var boxes=document.querySelectorAll('.post-box');
boxes.forEach((box)=>{
    box.addEventListener("mouseover", () => {
        console.log(box.classList);
        // box.style.background = "rgba(32, 178, 170, 0.6";
        box.style.background = "aliceblue";
        box.style.color = "black";
        box.classList.add('box-select');
    })
    box.addEventListener("mouseleave", () =>{
        box.style.background = "lightseagreen";
        box.style.color = "white";
        box.classList.remove('box-select');
    })
})

// search = document.querySelector('.btn');
// search.addEventListener('mouseup', () => {
//     search.classList.add('hover-bg');
// })
// search.addEventListener('mousedown', () => {
//     search.classList.remove('hover-bg');
// })