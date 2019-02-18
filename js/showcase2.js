var lastI = 0;

window.onload = function () {

    function changeImage() {
        var BackgroundImg = [
            "./img/showcase-werkenmetons/1.jpg",
            "./img/showcase-werkenmetons/2.jpg",
            "./img/showcase-werkenmetons/3.jpg",
            "./img/showcase-werkenmetons/4.jpg",
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
          document.getElementById("showcase2").style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
          console.log(i)
        }
    }
    window.setInterval(changeImage, 15000);
}
