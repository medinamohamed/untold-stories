// const text = document.querySelector(".title");
// const strText = text.textContent;

// const splitText = strText.split("");
// text.textContent = ""


// for (let i = 0; i<splitText.length; i++){
//     text.innerHTML += "<span>" + splitText[i] + "</span>";
// }

// let char= 0;
// let timer = setInterval(onTick,50);

// function onTick(){
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++
//     if(char === splitText.length) {
//         complete();
//         return;
//     }
// }

// function complete(){
//     clearInterval(timer);
//     timer = null;
// }

// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".slide");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: () => "+=" + document.querySelector(".container").offsetWidth
//   }
// });

