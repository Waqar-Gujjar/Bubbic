

const splide = new Splide('.splide', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage: checkForImgSlider(),
  autoScroll: {
    speed: 1,
  },
  arrows: false,
  pagination: false,
  pauseOnHover: true,
});

splide.mount(window.splide.Extensions);

function checkForImgSlider(){
  if (window.innerWidth < 1400) {
      if (window.innerWidth < 1180) {
          if (window.innerWidth < 660) {
              if (window.innerWidth < 530) {
                  if (window.innerWidth < 400) {
                      return 1;
                  } else {
                      return 1.5;
                  }
              } else {
                  return 2;
              }
          } else {
              return 2.5;
          }
      } else {
          return 3;
      }
  } else {
      return 3.5;
  }
}