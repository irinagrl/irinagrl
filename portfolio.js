const about = document.querySelector('.skills')
const headerIcons = document.querySelector('.header__icons')
const span = document.querySelectorAll('span')
const projectsLink = document.querySelector('.project__link')


function highlightText(element) {
    const colors = ['#FCCB1A', '#C21460', '#66B032', '#A10E01', '#DC4538', '#740C39', '#DCB838', '#A68203', '#DC7138', '#9A3702', '#7CDC38', '#3D691E', '#9A0794']
    let color = colors[Math.floor(Math.random() * colors.length)]

    element.style.color = color;
}

function highlightHandler(event) {
    event.preventDefault();
    span.forEach(element => highlightText(element))
}

function removeHighlightHandler(event) {
    event.preventDefault();
    span.forEach(element => element.style.color = '#24576A')
}

function projectLinksHandler(event) {
    // event.preventDefault();
    if (event.target.classList.contains('project__link_container')) {
        // event.target.style.opacity = '0.7';
        let allContainers = document.querySelectorAll('.project__link_button')
        // console.log(allContainers)
        event.target.style.display = 'initial';
        // for (let container of allContainers) {
        //     container.style.display = 'flex'
        // }

        // let allOptions = parent.querySelectorAll(".option");

        // for (let option of allOptions) {
        //     if (option != event.target) {
        //         option.style.display = "none";
        //     }
        // }
        // span.forEach(element => highlightText(element))


        // span.forEach(element => highlightText(element))
        // document.querySelector('.project__link_container').style.display = 'flex'
    }
}

// function removeProjectLinksHandler(event) {
//     event.preventDefault();
//     document.querySelector('.project__link_container').style.display = 'none'

//     // span.forEach(element => element.style.color = '#24576A')
// }


about.addEventListener('mouseover', highlightHandler);
about.addEventListener('mouseout', removeHighlightHandler);
projectsLink.addEventListener('mouseover', projectLinksHandler);
// projectsLink.addEventListener('mouseout', removeProjectLinksHandler);