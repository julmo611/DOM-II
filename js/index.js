// Your code goes here

const stopD = document.querySelector("#stop-link"); 
    stopD.addEventListener("click", e => {
    console.log("Redirecting Stopped");
    e.preventDefault();
}); 




const workBtn = document.querySelector('#lets-go');
    workBtn.addEventListener('click', e => {

        TweenMax.to(e.currentTarget, 1, {
        width:200,
        ease:Bounce.easeOut
        });
});

const wbtn = document.querySelector('#welcome-h2');
    wbtn.addEventListener('click', e => {

        TweenMax.to(e.currentTarget, 1, {
            width: 1000,
            scale: 1.2,
           ease:Bounce.easeOut
        });
});

wbtn.addEventListener('click', e => {

    TweenMax.to(e.currentTarget, 1, {
        width: 1000,
        scale: 1.2,
       ease:Bounce.easeOut
    });
});



const bigPic = document.querySelector('#second-slide');
    bigPic.addEventListener('mouseover', e => {

        TweenMax.to(e.currentTarget, 1, {
            scale:1.2
        });
});

    bigPic.addEventListener('mouseleave', e => {
        TweenMax.to(e.currentTarget, 1, {
        scale:1
         });
    });

const flipping = document.querySelector('#flip-img');
    flipping.addEventListener('wheel', e => {

        TweenMax.to(e.currentTarget, 5, {
            
            rotation:6000
        });
});

    
const bigFont = document.querySelector('#btn-font');

bigFont.addEventListener('click', e => {
    e.currentTarget.setAttribute('style', 'background-color: #c1c1c1; border:none; color: white; border-radius: 10px;')
    TweenMax.to(e.currentTarget, 1, {
        x: 200,
        scale: 1.6
   });
    
});
 
bigFont.addEventListener('dblclick', x => {
    x.currentTarget.setAttribute('style', 'background-color: white;')
    TweenMax.to(x.currentTarget, 1, {
        x: 0,
        scale: 1
        
        });

});


const logoFont = document.querySelector('.logo-heading');
    logoFont.addEventListener('click', e => {

    TweenMax.to(e.currentTarget, 1, {
        scale: 1.5
    });
    
    e.stopPropagation();

    const clickOne = document.querySelector('.nav-container');
        clickOne.addEventListener('click', e => {
           e.currentTarget.setAttribute('style', 'background-color: orange;')
     });

});  



const mainImg = document.querySelector('#bus-img');
    mainImg.addEventListener('load', e => {

        TweenMax.from(e.currentTarget, 2, {
            x:600,
            opacity:0,
            scale:0.5
        });
});

const footback = document.querySelector('.footer');
    footback.addEventListener('mouseover', e => {
        e.currentTarget.setAttribute('style', 'background-color: green;')
        
});


const btns = document.querySelectorAll('.btn');
    btns[0].addEventListener('click', e => {
        TweenMax.to(e.currentTarget, 2, {
            x:-600,
            opacity:0,
            scale:0.5
        });
    });   
    btns[1].addEventListener('click', e => {
        TweenMax.to(e.currentTarget, 2, {
            y:600,
            opacity:0,
            scale:0.5
        });
    });
        btns[2].addEventListener('click', e => {
            TweenMax.to(e.currentTarget, 2, {
                x:600,
                opacity:0,
                scale:0.5
            });
    });


