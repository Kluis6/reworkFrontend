
let animationArea = document.querySelector('.anime');
let aAc = document.querySelector('.contact');
let aAw = document.querySelector('.work');



    let animationObject = bodymovin.loadAnimation({
            container: animationArea,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            autoloadSegments: false,
            path:"https://assets7.lottiefiles.com/packages/lf20_isbiybfh.json"
    });



let aObject = bodymovin.loadAnimation({
        container: aAc,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        autoloadSegments: false,
        path:"https://assets4.lottiefiles.com/packages/lf20_9wjm14ni.json"
});


let aObjectw = bodymovin.loadAnimation({
        container: aAw,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        autoloadSegments: false,
        path:"https://assets10.lottiefiles.com/packages/lf20_7smeegra.json"
});







