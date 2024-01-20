const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: false
});

// page3 fixedImgAnimation
function fixedImgAnimation(){
    let fixed = document.querySelector('#fixed-image')
    featureC.addEventListener('mouseenter', function(e){
        fixed.style.display = 'block';
    })
    featureC.addEventListener('mouseleave', function(){
        fixed.style.display = 'none';
    })
    
    let elems = document.querySelectorAll('.elem')
    elems.forEach(function(element){
        element.addEventListener('mouseenter', function(){
            let imgLink = element.getAttribute('data-image');
            console.log(imgLink);
            fixed.style.backgroundImage = `url(${imgLink})`
        })
    })
}
let featureC = document.querySelector('#feature-container')

// page4Animation
let page4Container = document.querySelector('#page4-container');
page4Container.style.opacity = 1;
let titles = document.querySelectorAll('.t-name')
console.log(titles);
let rImg = document.querySelector('#rightImg');
// console.log(rImg);
let paraChange = document.querySelector('#leftBox').lastElementChild;
function onChange(){
    titles.forEach(function(title){
        title.addEventListener('click', function(){
            page4Container.style.opacity = 0;
            setTimeout(()=>{
                page4Container.style.opacity = 1;
                page4Container.style.transition = `opacity 0.8s ease`;
                let imgLink = title.getAttribute('data-image')
                let para = title.getAttribute('data-text')
                console.log(imgLink);
                rImg.src = `${imgLink}`;
                paraChange.innerHTML = `${para}`;
            },400);
        })
    })
}

// nav menuAnimation
function menuAnimation(){
    let full = document.querySelector('#full-scr');
    let menu = document.querySelector('#nav h3');
    let navImg = document.querySelector('#nav img')
    let flag = 0
    menu.addEventListener('click', function(){
        if(flag === 0){
            menu.style.opacity = 0;
            setTimeout(function(){
                menu.innerHTML = "Close";
                menu.style.opacity = 1;            
            }, 400)
            full.style.top = 0;
            navImg.style.opacity = 0;
            flag = 1;
        }
        else{
            menu.style.opacity = 0;
            setTimeout(function(){
                menu.innerHTML = "Menu";
                menu.style.opacity = 1;            
            }, 400)
            full.style.top = '-100%';
            navImg.style.opacity = 1;
            flag = 0;
        }
    })
}

// loadingAnimation
function loadingAnimation(){
    let loader = document.querySelector('#loader');
    setTimeout(function(){
        loader.style.top = "-100%";
    }, 4000)
}

loadingAnimation()
fixedImgAnimation()
menuAnimation()