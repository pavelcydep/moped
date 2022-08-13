$(document).ready(function() {
   
   var mySwiper = new Swiper(".swiper-container", {
     
      slidesPerView: 1,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
     
      loopAdditionalSlides: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        el: '.swiper-pagination',
      }
    });
    var mySwiper2 = new Swiper(".categories-container", {
      spaceBetween: 10,
      slidesPerView:'auto',
      loop: true,
    
      navigation: {
        nextEl: ".swiper-button-next",
        
      },
      breakpoints: {
        100: {
     slidesPerView: '2.5',
          spaceBetween: 17,
        },
        500: {
          slidesPerView: '3',
               spaceBetween: 17,
             },
        800: {
          slidesPerView: '4',
          spaceBetween: 23,
        },
        1200: {
          slidesPerView: '5',
          spaceBetween: 10,
        },
        1440: {
          slidesPerView: '7',
          spaceBetween: 10,
        },
      }
    });
   
    var mySwiper3 = new Swiper(".categories-container-2", {
      spaceBetween: 10,
      slidesPerView:'5',
      centeredSlides: false,
      roundLengths: false,
      loop: true,
     
      navigation: {
        nextEl: ".swiper-button-next",
        },
        breakpoints: {
          100: {
       slidesPerView: '1.5',
            spaceBetween: 17,
          },
          500: {
            slidesPerView: '3',
                 spaceBetween: 17,
               },
          800: {
            slidesPerView: '4',
            spaceBetween: 23,
          },
          1200: {
            slidesPerView: '5',
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: '5',
            spaceBetween: 10,
          },
        }
    });
    var mySwiper4 = new Swiper(".surveillance__container", {
      spaceBetween: 0,
      slidesPerView: 2.5,
      centeredSlides: false,
      roundLengths: false,
      loop: true,
      loopAdditionalSlides: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        },
        breakpoints: {
          100: {
            slidesPerView: '1.5',
               
               },
          500: {
       slidesPerView: '1.5',
          
          },
          800: {
            slidesPerView: '1.5',
           
          },
          1200: {
            slidesPerView: '2.5',
           
          },
          1440: {
            slidesPerView: '2.5',
            
          },
        }
    });
    var mySwiper5 = new Swiper(".news__container", {
     
      slidesPerView: 3,
      centeredSlides: false,
      roundLengths: false,
      loop: true,
      //loopAdditionalSlides:3,
     
      navigation: {
        nextEl: ".swiper-button-next",
       
        
      },
      breakpoints: {
        
        500: {
     slidesPerView: '1.5',
         
        },
        800: {
          slidesPerView: '1.5',
         
        },
        1200: {
          slidesPerView: '3',
        
        },
        1440: {
          slidesPerView: '3',
        
        },
      }
    });

  });


     

