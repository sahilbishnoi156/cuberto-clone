const cursor = new MouseFollower();
document.addEventListener("mousemove",()=>{
    cursor.setSkew(3)
})
gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });

  
//   let sections = document.querySelectorAll(".fleftelm");
//   Shery.imageEffect(".images", {
//     style: 4,
//     config: { onMouse: { value: 1 } },
//     slideStyle: (setScroll) => {
//       sections.forEach(function (section, index) {
//         ScrollTrigger.create({
//           trigger: section,
//           start: "top top",
//           scrub: 1,
//           onUpdate: function (prog) {
//             setScroll(prog.progress + index);
//           },
//         });
//       });
//     },
//   });