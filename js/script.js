/*-- Code Track mouse --*/

const pointer = document.querySelector('.pointer');

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    pointer.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    
    }, {duration: 500, fill: "forwards"})

}