/*-- Code Track mouse --*/

const pointer = document.querySelector('.pointer');
if (pointer != null) {
    document.body.onpointermove = event => {
        const { clientX, clientY } = event;
    
        pointer.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        
        }, {duration: 500, fill: "forwards"})
    
    }
}

/*-- Fin Code Track mouse --*/

const main = document.querySelector('main');
const containerNav = document.querySelector('.bgNav');
const footer = document.querySelector('footer');
const modalConteneur = document.querySelector('.modalConteneur');


const checkbox = document.querySelector('.checkbox');
const slider = document.querySelector('.toggle__slider');
slider.style.alignSelf = 'start';

if (sessionStorage.getItem('ifCheckedTrue') != null || sessionStorage.getItem('ifCheckedFalse')) {
    if (sessionStorage.getItem('ifCheckedTrue')) {
        checkbox.checked = true;
        slider.style.alignSelf = 'end';
        main.classList.add('darkBlue');
        containerNav.classList.add('darkBlue');
        footer.classList.add('darkBlue');
        if (modalConteneur != null) {
            modalConteneur.classList.add('darkBlue');
        }
    } else {
        checkbox.checked = false;
        slider.style.alignSelf = 'start';
        main.classList.remove('darkBlue');
        containerNav.classList.remove('darkBlue');
        footer.classList.remove('darkBlue');
        if (modalConteneur != null) {
            modalConteneur.classList.remove('darkBlue');
        }
    }
    
}

function toggleCheckBox() {
    console.log('hello');
    if (checkbox.checked == true) {
        sessionStorage.removeItem('ifCheckedFalse');
        sessionStorage.setItem('ifCheckedTrue', 'true');
        slider.style.alignSelf = 'end';
        main.classList.add('darkBlue');
        containerNav.classList.add('darkBlue');
        footer.classList.add('darkBlue');
        if (modalConteneur != null) {
            modalConteneur.classList.add('darkBlue');
        }
    } else {
        sessionStorage.removeItem('ifCheckedTrue');
        sessionStorage.setItem('ifCheckedFalse', 'false');
        slider.style.alignSelf = 'start';
        main.classList.remove('darkBlue');
        containerNav.classList.remove('darkBlue');
        footer.classList.remove('darkBlue');
        if (modalConteneur != null) {
            modalConteneur.classList.remove('darkBlue');
        }
        
    }
}

checkbox.addEventListener('click', toggleCheckBox);
