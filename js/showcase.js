var lastI = 0;

window.onload = function () {

    function changeImage() {
        var BackgroundImg = ["./img/showcase.jpg",
            "./img/showcase1.jpg",
            "./img/showcase2.jpg",
            "./img/showcase.jpg",
            
        ];

        var i = Math.floor((Math.random() * BackgroundImg.length));
        if(i == lastI)
        {
          changeImage();
        }
        else
        {
          var a = 1;
          lastI = i;
          document.getElementById("showcase").style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
          console.log(i)
        }
    }
    window.setInterval(changeImage, 5000);
}

function open_werk () {
  window.open("werkenmetons.html","_self")
}

function open_vacatures () {
  window.open("vacatures.html","_self")
}
