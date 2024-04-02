window.addEventListener("load", function () {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");

  const colors = [
    "#965b34",
    "#df1e10",
    "#e6f511",
    "#24b9c4",
    "#641646",
    "#091075",
  ];

  // Lets play around with sounds
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });

  //   Lets create bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;

    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
