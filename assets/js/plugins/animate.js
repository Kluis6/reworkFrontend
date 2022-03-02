
let animationArea = document.querySelector('.anime');


    let animationObject = bodymovin.loadAnimation({
            container: animationArea,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            autoloadSegments: false,
            path:"https://assets7.lottiefiles.com/packages/lf20_isbiybfh.json"
    });