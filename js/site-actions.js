modules.siteEngine  = function(){
  let myNavbar;
  let navDemo;
  let parallax;
  let sections = {
    home : null,
    about: null,
    portfolio: null,
  };
  let modal;

  function init(){
    myNavbar = document.getElementById('myNavbar');
    navDemo  = document.getElementById('navDemo');
    parallax = document.querySelectorAll('.parallax');

    setSectionElements();
    setModalListener();
    window.addEventListener('scroll', navbarAdapter);
  }

  function setSectionElements(){
    for(let key in sections){
        sections[key] = document.getElementById(key);
    }   
  }

  function setModalListener(){
    let imgs = sections.portfolio.querySelectorAll('.modal');
    modal = document.getElementById('modalContainer');

    for(let img of imgs){
        img.addEventListener('click',  showModal, false)
    }
  }

  function showModal(e) {
    e.preventDefault();
    modal.querySelector('img').src = this.src;
    modal.style.display = "block";
    modal.querySelector('#caption').this.alt;
  }

  function navbarAdapter(e) {
      if (document.body.scrollTop > parallax[0].offsetHeight || document.documentElement.scrollTop > parallax[0].offsetHeight) {
          myNavbar.className = "w3-bar w3-card w3-animate-top w3-dark-gray";
          navDemo.classList.add("w3-dark-gray");
      } else {
          myNavbar.className = myNavbar.className.replace("w3-card w3-animate-top w3-dark-gray", "");
          navDemo.classList.remove("w3-dark-gray");
      }
  }

  function toggleFunction() {
      var x = document.getElementById("navDemo");
      x.classList.toggle('w3-hide')
  }

  return{
    init,
    toggleFunction
  };
}();