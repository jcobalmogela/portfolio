TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay span", 2, {
    delay: .3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay", 2, {
    delay: 0,
    top: "-150%",
    ease: Expo.easeInOut
  })

   TweenMax.from(".scrolldown", 1, {
     delay: 2,
     opacity: 0,
     y: 100,
     ease: Expo.easeInOut
   })
  TweenMax.from(".visit-container", 1, {
    delay: 2,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
  })





// // //   visit counter

// const countEl = document.getElementById('count');

//  updateVisiCount();

//  function updateVisiCount() {
//       fetch('https://api.countapi.xyz/update/Jalmogela/portfolio/?amount=1')
//       .then(res => res.json())
//       .then(res =>{
//           countEl.innerHTML = res.value;
//       });
//   }


//scroll reveal

ScrollReveal().reveal('.skilist', {interval: 250});
ScrollReveal().reveal('.about-sent', {interval: 300}, {delay:500});
