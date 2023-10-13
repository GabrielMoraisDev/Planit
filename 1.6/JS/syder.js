var search1 = document.querySelector('.search_animated1');
var input1 = document.querySelector('.input_animated1');
var menu1 = document.querySelector('.open-h-menu');
var menu_content = document.querySelector('.menu-content');
var menu_link0 = document.querySelector('.menu-link0');
var menu_link1 = document.querySelector('.menu-link1');
var menu_link2 = document.querySelector('.menu-link2');
var menu_link3 = document.querySelector('.menu-link3');
var planit1 = document.querySelector('.planit-example');
var planit_element1 = document.querySelector('.planit-example-element');
var planit_element2 = document.querySelector('.planit-example-element2');
var planit_element3 = document.querySelector('.planit-example-element3');

  var nav1 = document.getElementById("nav1")
  var nav2 = document.getElementById("nav2")
  var nav3 = document.getElementById("nav3")
  var nav4 = document.getElementById("nav4")
  var nav5 = document.getElementById("nav5")
  var nav6 = document.getElementById("nav6")
  var nav7 = document.getElementById("nav7")
  var nav8 = document.getElementById("nav8")
  var nav9 = document.getElementById("nav9")
  var nav10 = document.getElementById("nav10")

  function menu_open_h(){

    if (menu_content.dataset.originalClass) {
      menu_content.classList.replace("h-14", menu_content.dataset.originalClass);
      delete menu_content.dataset.originalClass;
    } else {
      for (var i = 0; i <= 100; i++) {
        var className = 'h-' + i;
  
        if (menu_content.classList.contains(className)) {
          menu_content.dataset.originalClass = className;
          menu_content.classList.replace(className, "h-14");
          break;
        }
      }
    }

  }

  function planit(){

    planit1.classList.replace("op-1", "op-0")

    setTimeout(function() {
      setTimeout(function() {
        setTimeout(function() {
          setTimeout(function() {
            setTimeout(function() {
              setTimeout(function() {
                setTimeout(function() {
                  planit1.classList.replace("op-0", "op-1")
                }, 300)
                planit_element3.classList.replace("op-1", "op-0")
              }, 1000)
              planit_element3.classList.replace("op-0", "op-1")
            }, 300)
            planit_element2.classList.replace("op-1", "op-0")
          }, 1000)
          planit_element2.classList.replace("op-0", "op-1")
        }, 300)
        planit_element1.classList.replace("op-1", "op-0")
      }, 900)
      planit_element1.classList.replace("op-0", "op-1")
    }, 300)



  }

function focusInput() {
  input1.select();
  input1.focus();
}

function input_off() {
  input1.classList.replace("op-1", "op-0");
  focusInput();
}

function input_on() {
  input1.classList.replace("op-0", "op-1");
  focusInput();
}

function search_1() {

  if (search1.dataset.originalClass) {
    search1.classList.replace("right-1", search1.dataset.originalClass);
    search1.classList.replace("dark-blue", "white");
    delete search1.dataset.originalClass;
    input_off();
  } else {
    for (var i = 2; i <= 20; i++) {
      var className = 'right-' + i;

      if (search1.classList.contains(className)) {
        search1.dataset.originalClass = className;
        search1.classList.replace("white", "dark-blue");
        search1.classList.replace(className, "right-1");
        input_on();
        break;
      }
    }
  }
}

function alter1(){
  nav1.classList.replace("none", "block")

   nav2.classList.replace("op-1", "op-0")
   nav3.classList.replace("op-1", "op-0")
   nav4.classList.replace("op-1", "op-0")
   nav5.classList.replace("op-1", "op-0")
   nav6.classList.replace("op-1", "op-0")
   nav7.classList.replace("op-1", "op-0")
   nav8.classList.replace("op-1", "op-0")
   nav9.classList.replace("op-1", "op-0")
  nav10.classList.replace("op-1", "op-0")

  setTimeout(function() {
    nav2.classList.replace("block", "none")
    nav3.classList.replace("block", "none")
    nav4.classList.replace("block", "none")
    nav5.classList.replace("block", "none")
    nav6.classList.replace("block", "none")
    nav7.classList.replace("block", "none")
    nav8.classList.replace("block", "none")
    nav9.classList.replace("block", "none")
   nav10.classList.replace("block", "none")
  }, 300)

  setTimeout(function() {
    nav1.classList.replace("op-0", "op-1")
  }, 300)
}

function alter2(){
  nav2.classList.replace("none", "block")

   nav1.classList.replace("op-1", "op-0")
   nav3.classList.replace("op-1", "op-0")
   nav4.classList.replace("op-1", "op-0")
   nav5.classList.replace("op-1", "op-0")
   nav6.classList.replace("op-1", "op-0")
   nav7.classList.replace("op-1", "op-0")
   nav8.classList.replace("op-1", "op-0")
   nav9.classList.replace("op-1", "op-0")
  nav10.classList.replace("op-1", "op-0")

  setTimeout(function() {
    nav1.classList.replace("block", "none")
    nav3.classList.replace("block", "none")
    nav4.classList.replace("block", "none")
    nav5.classList.replace("block", "none")
    nav6.classList.replace("block", "none")
    nav7.classList.replace("block", "none")
    nav8.classList.replace("block", "none")
    nav9.classList.replace("block", "none")
   nav10.classList.replace("block", "none")
  }, 300)


  setTimeout(function() {
    nav2.classList.replace("op-0", "op-1")
  }, 300)
}

function alter3(){
  nav3.classList.replace("none", "block")

   nav1.classList.replace("op-1", "op-0")
   nav2.classList.replace("op-1", "op-0")
   nav4.classList.replace("op-1", "op-0")
   nav5.classList.replace("op-1", "op-0")
   nav6.classList.replace("op-1", "op-0")
   nav7.classList.replace("op-1", "op-0")
   nav8.classList.replace("op-1", "op-0")
   nav9.classList.replace("op-1", "op-0")
  nav10.classList.replace("op-1", "op-0")

  setTimeout(function() {
    nav1.classList.replace("block", "none")
    nav2.classList.replace("block", "none")
    nav4.classList.replace("block", "none")
    nav5.classList.replace("block", "none")
    nav6.classList.replace("block", "none")
    nav7.classList.replace("block", "none")
    nav8.classList.replace("block", "none")
    nav9.classList.replace("block", "none")
   nav10.classList.replace("block", "none")
  }, 300)

  setTimeout(function() {
    nav3.classList.replace("op-0", "op-1")
  }, 300)
}

function alter4(){
  nav4.classList.replace("none", "block")

   nav1.classList.replace("op-1", "op-0")
   nav2.classList.replace("op-1", "op-0")
   nav3.classList.replace("op-1", "op-0")
   nav5.classList.replace("op-1", "op-0")
   nav6.classList.replace("op-1", "op-0")
   nav7.classList.replace("op-1", "op-0")
   nav8.classList.replace("op-1", "op-0")
   nav9.classList.replace("op-1", "op-0")
  nav10.classList.replace("op-1", "op-0")

  setTimeout(function() {
    nav1.classList.replace("block", "none")
    nav2.classList.replace("block", "none")
    nav3.classList.replace("block", "none")
    nav5.classList.replace("block", "none")
    nav6.classList.replace("block", "none")
    nav7.classList.replace("block", "none")
    nav8.classList.replace("block", "none")
    nav9.classList.replace("block", "none")
   nav10.classList.replace("block", "none")
  }, 300)

  setTimeout(function() {
    nav4.classList.replace("op-0", "op-1")
  }, 300)
}

function alter5(){
  nav5.classList.replace("none", "block")

   nav1.classList.replace("op-1", "op-0")
   nav2.classList.replace("op-1", "op-0")
   nav3.classList.replace("op-1", "op-0")
   nav4.classList.replace("op-1", "op-0")
   nav6.classList.replace("op-1", "op-0")
   nav7.classList.replace("op-1", "op-0")
   nav8.classList.replace("op-1", "op-0")
   nav9.classList.replace("op-1", "op-0")
  nav10.classList.replace("op-1", "op-0")

  setTimeout(function() {
    nav1.classList.replace("block", "none")
    nav2.classList.replace("block", "none")
    nav3.classList.replace("block", "none")
    nav4.classList.replace("block", "none")
    nav6.classList.replace("block", "none")
    nav7.classList.replace("block", "none")
    nav8.classList.replace("block", "none")
    nav9.classList.replace("block", "none")
   nav10.classList.replace("block", "none")
  }, 300)

  setTimeout(function() {
    nav5.classList.replace("op-0", "op-1")
  }, 300)
}


function alter6(){
  nav6.classList.replace("none", "block")

   nav1.classList.replace("op-1", "op-0")
   nav2.classList.replace("op-1", "op-0")
   nav3.classList.replace("op-1", "op-0")
   nav4.classList.replace("op-1", "op-0")
   nav5.classList.replace("op-1", "op-0")
   nav7.classList.replace("op-1", "op-0")
   nav8.classList.replace("op-1", "op-0")
   nav9.classList.replace("op-1", "op-0")
  nav10.classList.replace("op-1", "op-0")

  setTimeout(function() {
    nav1.classList.replace("block", "none")
    nav2.classList.replace("block", "none")
    nav3.classList.replace("block", "none")
    nav4.classList.replace("block", "none")
    nav5.classList.replace("block", "none")
    nav7.classList.replace("block", "none")
    nav8.classList.replace("block", "none")
    nav9.classList.replace("block", "none")
   nav10.classList.replace("block", "none")
  }, 300)

  setTimeout(function() {
    nav6.classList.replace("op-0", "op-1")
  }, 300)
}

function alter7(){
  nav7.classList.replace("none", "block")

   nav1.classList.replace("op-1", "op-0")
   nav2.classList.replace("op-1", "op-0")
   nav3.classList.replace("op-1", "op-0")
   nav4.classList.replace("op-1", "op-0")
   nav5.classList.replace("op-1", "op-0")
   nav6.classList.replace("op-1", "op-0")
   nav8.classList.replace("op-1", "op-0")
   nav9.classList.replace("op-1", "op-0")
  nav10.classList.replace("op-1", "op-0")

  setTimeout(function() {
    nav1.classList.replace("block", "none")
    nav2.classList.replace("block", "none")
    nav3.classList.replace("block", "none")
    nav4.classList.replace("block", "none")
    nav5.classList.replace("block", "none")
    nav6.classList.replace("block", "none")
    nav8.classList.replace("block", "none")
    nav9.classList.replace("block", "none")
   nav10.classList.replace("block", "none")
  }, 300)

  setTimeout(function() {
    nav7.classList.replace("op-0", "op-1")
  }, 300)
}

function alter8(){
  nav8.classList.replace("none", "block")

   nav1.classList.replace("op-1", "op-0")
   nav2.classList.replace("op-1", "op-0")
   nav3.classList.replace("op-1", "op-0")
   nav4.classList.replace("op-1", "op-0")
   nav5.classList.replace("op-1", "op-0")
   nav6.classList.replace("op-1", "op-0")
   nav7.classList.replace("op-1", "op-0")
   nav9.classList.replace("op-1", "op-0")
  nav10.classList.replace("op-1", "op-0")

  setTimeout(function() {
    nav1.classList.replace("block", "none")
    nav2.classList.replace("block", "none")
    nav3.classList.replace("block", "none")
    nav4.classList.replace("block", "none")
    nav5.classList.replace("block", "none")
    nav6.classList.replace("block", "none")
    nav7.classList.replace("block", "none")
    nav9.classList.replace("block", "none")
   nav10.classList.replace("block", "none")
  }, 300)

  setTimeout(function() {
    nav8.classList.replace("op-0", "op-1")
  }, 300)
}

function alter9(){
  nav9.classList.replace("none", "block")

   nav1.classList.replace("op-1", "op-0")
   nav2.classList.replace("op-1", "op-0")
   nav3.classList.replace("op-1", "op-0")
   nav4.classList.replace("op-1", "op-0")
   nav5.classList.replace("op-1", "op-0")
   nav6.classList.replace("op-1", "op-0")
   nav7.classList.replace("op-1", "op-0")
   nav8.classList.replace("op-1", "op-0")
  nav10.classList.replace("op-1", "op-0")

  setTimeout(function() {
    nav1.classList.replace("block", "none")
    nav2.classList.replace("block", "none")
    nav3.classList.replace("block", "none")
    nav4.classList.replace("block", "none")
    nav5.classList.replace("block", "none")
    nav6.classList.replace("block", "none")
    nav7.classList.replace("block", "none")
    nav8.classList.replace("block", "none")
   nav10.classList.replace("block", "none")
  }, 300)

  setTimeout(function() {
    nav9.classList.replace("op-0", "op-1")
  }, 300)
}

function alter10(){
  nav10.classList.replace("none", "block")

   nav1.classList.replace("op-1", "op-0")
   nav2.classList.replace("op-1", "op-0")
   nav3.classList.replace("op-1", "op-0")
   nav4.classList.replace("op-1", "op-0")
   nav5.classList.replace("op-1", "op-0")
   nav6.classList.replace("op-1", "op-0")
   nav7.classList.replace("op-1", "op-0")
   nav8.classList.replace("op-1", "op-0")
  nav9.classList.replace("op-1", "op-0")

  setTimeout(function() {
    nav1.classList.replace("block", "none")
    nav2.classList.replace("block", "none")
    nav3.classList.replace("block", "none")
    nav4.classList.replace("block", "none")
    nav5.classList.replace("block", "none")
    nav6.classList.replace("block", "none")
    nav7.classList.replace("block", "none")
    nav8.classList.replace("block", "none")
   nav9.classList.replace("block", "none")
  }, 300)

  setTimeout(function() {
    nav10.classList.replace("op-0", "op-1")
  }, 300)
}


function fpg1(){
  pg1.classList.replace("bg-blue4", "bg-custom-blue")
  pg2.classList.replace("bg-custom-blue", "bg-blue4")
  pg3.classList.replace("bg-custom-blue", "bg-blue4")
  pg4.classList.replace("bg-custom-blue", "bg-blue4")
  pg5.classList.replace("bg-custom-blue", "bg-blue4")
  pg6.classList.replace("bg-custom-blue", "bg-blue4")
  pg7.classList.replace("bg-custom-blue", "bg-blue4")
  pg8.classList.replace("bg-custom-blue", "bg-blue4")
  pg9.classList.replace("bg-custom-blue", "bg-blue4")
  pg10.classList.replace("bg-custom-blue", "bg-blue4")
  alter1();
}

function fpg2(){
  pg2.classList.replace("bg-blue4", "bg-custom-blue")
  pg1.classList.replace("bg-custom-blue", "bg-blue4")
  pg3.classList.replace("bg-custom-blue", "bg-blue4")
  pg4.classList.replace("bg-custom-blue", "bg-blue4")
  pg5.classList.replace("bg-custom-blue", "bg-blue4")
  pg6.classList.replace("bg-custom-blue", "bg-blue4")
  pg7.classList.replace("bg-custom-blue", "bg-blue4")
  pg8.classList.replace("bg-custom-blue", "bg-blue4")
  pg9.classList.replace("bg-custom-blue", "bg-blue4")
  pg10.classList.replace("bg-custom-blue", "bg-blue4")
  alter2();
}

function fpg3(){
  pg3.classList.replace("bg-blue4", "bg-custom-blue")
  pg2.classList.replace("bg-custom-blue", "bg-blue4")
  pg1.classList.replace("bg-custom-blue", "bg-blue4")
  pg4.classList.replace("bg-custom-blue", "bg-blue4")
  pg5.classList.replace("bg-custom-blue", "bg-blue4")
  pg6.classList.replace("bg-custom-blue", "bg-blue4")
  pg7.classList.replace("bg-custom-blue", "bg-blue4")
  pg8.classList.replace("bg-custom-blue", "bg-blue4")
  pg9.classList.replace("bg-custom-blue", "bg-blue4")
  pg10.classList.replace("bg-custom-blue", "bg-blue4")
  alter3();
}

function fpg4(){
  pg4.classList.replace("bg-blue4", "bg-custom-blue")
  pg2.classList.replace("bg-custom-blue", "bg-blue4")
  pg3.classList.replace("bg-custom-blue", "bg-blue4")
  pg1.classList.replace("bg-custom-blue", "bg-blue4")
  pg5.classList.replace("bg-custom-blue", "bg-blue4")
  pg6.classList.replace("bg-custom-blue", "bg-blue4")
  pg7.classList.replace("bg-custom-blue", "bg-blue4")
  pg8.classList.replace("bg-custom-blue", "bg-blue4")
  pg9.classList.replace("bg-custom-blue", "bg-blue4")
  pg10.classList.replace("bg-custom-blue", "bg-blue4")
  alter4();
}

function fpg5(){
  pg5.classList.replace("bg-blue4", "bg-custom-blue")
  pg2.classList.replace("bg-custom-blue", "bg-blue4")
  pg3.classList.replace("bg-custom-blue", "bg-blue4")
  pg4.classList.replace("bg-custom-blue", "bg-blue4")
  pg1.classList.replace("bg-custom-blue", "bg-blue4")
  pg6.classList.replace("bg-custom-blue", "bg-blue4")
  pg7.classList.replace("bg-custom-blue", "bg-blue4")
  pg8.classList.replace("bg-custom-blue", "bg-blue4")
  pg9.classList.replace("bg-custom-blue", "bg-blue4")
  pg10.classList.replace("bg-custom-blue", "bg-blue4")
  alter5();
}

function fpg6(){
  pg6.classList.replace("bg-blue4", "bg-custom-blue")
  pg2.classList.replace("bg-custom-blue", "bg-blue4")
  pg3.classList.replace("bg-custom-blue", "bg-blue4")
  pg4.classList.replace("bg-custom-blue", "bg-blue4")
  pg5.classList.replace("bg-custom-blue", "bg-blue4")
  pg1.classList.replace("bg-custom-blue", "bg-blue4")
  pg7.classList.replace("bg-custom-blue", "bg-blue4")
  pg8.classList.replace("bg-custom-blue", "bg-blue4")
  pg9.classList.replace("bg-custom-blue", "bg-blue4")
  pg10.classList.replace("bg-custom-blue", "bg-blue4")
  alter6();
}

function fpg7(){
  pg7.classList.replace("bg-blue4", "bg-custom-blue")
  pg2.classList.replace("bg-custom-blue", "bg-blue4")
  pg3.classList.replace("bg-custom-blue", "bg-blue4")
  pg4.classList.replace("bg-custom-blue", "bg-blue4")
  pg5.classList.replace("bg-custom-blue", "bg-blue4")
  pg6.classList.replace("bg-custom-blue", "bg-blue4")
  pg1.classList.replace("bg-custom-blue", "bg-blue4")
  pg8.classList.replace("bg-custom-blue", "bg-blue4")
  pg9.classList.replace("bg-custom-blue", "bg-blue4")
  pg10.classList.replace("bg-custom-blue", "bg-blue4")
  alter7();
}

function fpg8(){
  pg8.classList.replace("bg-blue4", "bg-custom-blue")
  pg2.classList.replace("bg-custom-blue", "bg-blue4")
  pg3.classList.replace("bg-custom-blue", "bg-blue4")
  pg4.classList.replace("bg-custom-blue", "bg-blue4")
  pg5.classList.replace("bg-custom-blue", "bg-blue4")
  pg6.classList.replace("bg-custom-blue", "bg-blue4")
  pg7.classList.replace("bg-custom-blue", "bg-blue4")
  pg1.classList.replace("bg-custom-blue", "bg-blue4")
  pg9.classList.replace("bg-custom-blue", "bg-blue4")
  pg10.classList.replace("bg-custom-blue", "bg-blue4")
  alter8();
}

function fpg9(){
  pg9.classList.replace("bg-blue4", "bg-custom-blue")
  pg2.classList.replace("bg-custom-blue", "bg-blue4")
  pg3.classList.replace("bg-custom-blue", "bg-blue4")
  pg4.classList.replace("bg-custom-blue", "bg-blue4")
  pg5.classList.replace("bg-custom-blue", "bg-blue4")
  pg6.classList.replace("bg-custom-blue", "bg-blue4")
  pg7.classList.replace("bg-custom-blue", "bg-blue4")
  pg8.classList.replace("bg-custom-blue", "bg-blue4")
  pg1.classList.replace("bg-custom-blue", "bg-blue4")
  pg10.classList.replace("bg-custom-blue", "bg-blue4")
  alter9();
}

function fpg10(){
  pg10.classList.replace("bg-blue4", "bg-custom-blue")
  pg2.classList.replace("bg-custom-blue", "bg-blue4")
  pg3.classList.replace("bg-custom-blue", "bg-blue4")
  pg4.classList.replace("bg-custom-blue", "bg-blue4")
  pg5.classList.replace("bg-custom-blue", "bg-blue4")
  pg6.classList.replace("bg-custom-blue", "bg-blue4")
  pg7.classList.replace("bg-custom-blue", "bg-blue4")
  pg8.classList.replace("bg-custom-blue", "bg-blue4")
  pg9.classList.replace("bg-custom-blue", "bg-blue4")
  pg1.classList.replace("bg-custom-blue", "bg-blue4")
  alter10();
}

function preview(){
  if (pg1.classList.contains("bg-custom-blue")) {
    fpg1()
  }else
  if (pg2.classList.contains("bg-custom-blue")) {
    fpg1()
  }else
  if (pg3.classList.contains("bg-custom-blue")) {
    fpg2()
  }else
  if (pg4.classList.contains("bg-custom-blue")) {
    fpg3()
  }else
  if (pg5.classList.contains("bg-custom-blue")) {
    fpg4()
  }else
  if (pg6.classList.contains("bg-custom-blue")) {
    fpg5()
  }else
  if (pg7.classList.contains("bg-custom-blue")) {
    fpg6()
  }else
  if (pg8.classList.contains("bg-custom-blue")) {
    fpg7()
  }else
  if (pg9.classList.contains("bg-custom-blue")) {
    fpg8()
  }else
  if (pg10.classList.contains("bg-custom-blue")) {
    fpg9()
  }
}


function next(){
  if (pg1.classList.contains("bg-custom-blue")) {
    fpg2()
  }else
  if (pg2.classList.contains("bg-custom-blue")) {
    fpg3()
  }else
  if (pg3.classList.contains("bg-custom-blue")) {
    fpg4()
  }else
  if (pg4.classList.contains("bg-custom-blue")) {
    fpg5()
  }else
  if (pg5.classList.contains("bg-custom-blue")) {
    fpg6()
  }else
  if (pg6.classList.contains("bg-custom-blue")) {
    fpg7()
  }else
  if (pg7.classList.contains("bg-custom-blue")) {
    fpg8()
  }else
  if (pg8.classList.contains("bg-custom-blue")) {
    fpg9()
  }else
  if (pg9.classList.contains("bg-custom-blue")) {
    fpg10()
  }else
  if (pg10.classList.contains("bg-custom-blue")) {
    fpg10()
  }
}

menu1.addEventListener('click', menu_open_h);
search1.addEventListener('click', search_1);
// menu1.addEventListener('click', menu_h);
planit1.addEventListener('click', planit);
