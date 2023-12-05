 // Chat Gpt
document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.bemutat');

    function showOnScroll() {
      elements.forEach(function(element, index) {
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position - windowHeight <= 0) {
          element.style.transition = 'opacity 2s ease-out, transform 2s ease-out, background-color 2s ease-out';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.style.transitionDelay = (index * 1) + 's';
        }
      });
    }

    window.addEventListener('scroll', showOnScroll);
    showOnScroll();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.rovid');

    function showOnScroll() {
      elements.forEach(function(element, index) {
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position - windowHeight <= 100) {
          element.style.transition = 'opacity 2s ease-out, transform 2s ease-out, background-color 2s ease-out'; // Lassabb animáció
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.style.transitionDelay = (index * 1) + 's';
        }
      });
    }

    window.addEventListener('scroll', showOnScroll);
    showOnScroll();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.bemutat3');

    function showOnScroll() {
      elements.forEach(function(element, index) {
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position - windowHeight <= 100) {
          element.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out, background-color 1.5s ease-out'; // Lassabb animáció
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.style.transitionDelay = (index * 1) + 's';
        }
      });
    }

    window.addEventListener('scroll', showOnScroll);
    showOnScroll();
  });


 // Saját

document.getElementById("kosar").addEventListener("click", total1);

function total1()
{

let sdb = Number(document.getElementById("sdb").value);
let bdb = Number(document.getElementById("bdb").value);
let ddb = Number(document.getElementById("ddb").value);
let ldb = Number(document.getElementById("ldb").value);
let sidb = Number(document.getElementById("sidb").value);
let cdb = Number(document.getElementById("cdb").value);
let ndb = Number(document.getElementById("ndb").value);


let vegleges = 0;
vegleges = (42*sdb+43*bdb+42*ddb+50*ldb+43*sidb+48*cdb+47*ndb);

document.getElementById("vegosszeg").innerText = "Total: "+String(vegleges)+" €";

}
function calcTotal() {
  let kontinensKoltseg = Number(document.getElementById("valasztas").value);
  total1();

  let vegleges = Number(document.getElementById("vegosszeg").innerText.split(" ")[1]); 

  vegleges += kontinensKoltseg; 

  document.getElementById("vegosszeg").innerText = "Total: " + String(vegleges) + " €";
}


