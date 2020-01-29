var anchors = document.querySelectorAll('a[href*="#"]');

for (var i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', function(event){
    event.preventDefault();
    var blockID = this.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};
