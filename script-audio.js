var audioArray = [ 
    new Audio("/audio/navigation/nav-fortress.mp3"),
    new Audio("/audio/navigation/nav-information.mp3"),
    new Audio("/audio/navigation/nav-gallery.mp3"),
    new Audio("/audio/navigation/nav-map.mp3"),
    //First Section - Home
    new Audio("/audio/first-section-home/title-site.mp3"),
    new Audio("/audio/first-section-home/sub-title-first-section.mp3"),
    new Audio("/audio/first-section-home/button-first-section.mp3"),
    //Second Section
    new Audio("/audio/second-section/title-second-section.mp3"),
    new Audio("/audio/second-section/text-1-second-section.mp3"), //15
    new Audio("/audio/second-section/text-2-second-section.mp3"),
    //Third Section
    new Audio("/audio/third-section/title-third-section.mp3"),
    new Audio("/audio/third-section/third-section-1-element.mp3"),
    new Audio("/audio/third-section/third-section-2-element.mp3"),
    new Audio("/audio/third-section/third-section-3-element.mp3"), //20
    new Audio("/audio/third-section/third-section-4-element.mp3"),
    //Forth Section
    new Audio("/audio/forth-section/img-view-full-0.mp3"),
    new Audio("/audio/forth-section/img-view-full-1.mp3"),
    new Audio("/audio/forth-section/img-view-full-2.mp3"),
    new Audio("/audio/forth-section/img-view-full-3.mp3"),
    new Audio("/audio/forth-section/img-view-full-4.mp3"),
    new Audio("/audio/forth-section/img-view-full-5.mp3"),
    new Audio("/audio/forth-section/img-view-full-6.mp3"),
    //Fifth Section
    new Audio("/audio/fifth-section/title-fifth-section.mp3"),
    new Audio("/audio/fifth-section/text-fifth-section.mp3"), //25
    new Audio("/audio/fifth-section/map-instructions.mp3"),
    new Audio("audio/PorTHbrave.mp3"),
    new Audio("audio/PorTHbalk.mp3"),
    new Audio("audio/PorTHdrupal.mp3"),
    new Audio("audio/PorTHcat.mp3"), //30
    new Audio("audio/PorTHtran.mp3"),
    new Audio("audio/PorTHVS.mp3"),
    new Audio("audio/PorTHstore.mp3"),
    new Audio("audio/PorTHfigma.mp3"),
    new Audio("audio/PorTHlogo.mp3"), //35
    //Skills
    new Audio("audio/SkiCJ.mp3"),
    new Audio("audio/SkiPy.mp3"),
    new Audio("audio/SkiJS.mp3"),
    new Audio("audio/SkiPHP.mp3"),
    //Awards
    new Audio("audio/AwaQA.mp3"), //40
    new Audio("audio/AwaPHP.mp3"),
    new Audio("audio/AwaExcel.mp3"),
    new Audio("audio/AwaWord.mp3"),
    new Audio("audio/AwaFFW.mp3"),
    new Audio("audio/AwaInov.mp3"), //45
    //Contact
    new Audio("audio/Contact.mp3"),
    //Titles
    new Audio("audio/TitExp.mp3"),
    new Audio("audio/TitPor.mp3"),
    new Audio("audio/TitSki.mp3"),
    new Audio("audio/TitAwa.mp3"), //50
    //Projects modals
    new Audio("audio/PRedHat.mp3"),
    new Audio("audio/PRedHatVi.mp3"),
    new Audio("audio/PCV.mp3"),
    new Audio("audio/PCVVi.mp3"),
    new Audio("audio/PFCoin.mp3"),  //55
    new Audio("audio/PFClink.mp3"),
    new Audio("audio/PAD.mp3"),
    new Audio("audio/PADlink.mp3"),
    new Audio("audio/PBrave.mp3"),
    new Audio("audio/PBraveLink.mp3"),//60
    new Audio("audio/PWP1.mp3"), 
    new Audio("audio/PlinkWeb.mp3"),
    new Audio("audio/PDrupal.mp3"),
    new Audio("audio/PBCat.mp3"),
    new Audio("audio/PWP2.mp3"),//65
    new Audio("audio/PVCards.mp3"), 
    new Audio("audio/PStore.mp3"),
    new Audio("audio/Pfigma.mp3"),
    new Audio("audio/Plogo.mp3"),
    new Audio("audio/Pclose.mp3"),//70
    new Audio("audio/PCode.mp3")];  

  function playAudio(numAudio){
  audioArray[numAudio].play();
  }

  function pauseAudio(numAudio){
  audioArray[numAudio].pause();
  audioArray[numAudio].currentTime = 0;
  }
/////Navigation Audio//////////////////////////////////////////////////////////////////////////
 document.getElementById("nav-fortress").addEventListener("mouseover", ()=>{playAudio(0);});
 document.getElementById("nav-fortress").addEventListener("mouseout", ()=>{pauseAudio(0);});

 document.getElementById("nav-information").addEventListener("mouseover", ()=>{playAudio(1);});
 document.getElementById("nav-information").addEventListener("mouseout", ()=>{pauseAudio(1);});

 document.getElementById("nav-gallery").addEventListener("mouseover", ()=>{playAudio(2);});
 document.getElementById("nav-gallery").addEventListener("mouseout", ()=>{pauseAudio(2);});

 document.getElementById("nav-map").addEventListener("mouseover", ()=>{playAudio(3);});
 document.getElementById("nav-map").addEventListener("mouseout", ()=>{pauseAudio(3);});

///////First Section Home////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("title-site").addEventListener("mouseover", ()=>{playAudio(4);});
document.getElementById("title-site").addEventListener("mouseout", ()=>{pauseAudio(4);});

document.getElementById("sub-title-first-section").addEventListener("mouseover", ()=>{playAudio(5);});
document.getElementById("sub-title-first-section").addEventListener("mouseout", ()=>{pauseAudio(5);});

document.getElementById("button-first-section").addEventListener("mouseover", ()=>{playAudio(6);});
document.getElementById("button-first-section").addEventListener("mouseout", ()=>{pauseAudio(6);});

///////Second Section////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("title-second-section").addEventListener("mouseover", ()=>{playAudio(7);});
document.getElementById("title-second-section").addEventListener("mouseout", ()=>{pauseAudio(7);});

document.getElementById("text-1-second-section").addEventListener("mouseover", ()=>{playAudio(8);});
document.getElementById("text-1-second-section").addEventListener("mouseout", ()=>{pauseAudio(8);});

document.getElementById("text-2-second-section").addEventListener("mouseover", ()=>{playAudio(9);});
document.getElementById("text-2-second-section").addEventListener("mouseout", ()=>{pauseAudio(9);});


///////Third Section////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("title-third-section").addEventListener("mouseover", ()=>{playAudio(10);});
document.getElementById("title-third-section").addEventListener("mouseout", ()=>{pauseAudio(10);});

document.getElementById("third-section-1-element").addEventListener("mouseover", ()=>{playAudio(11);});
document.getElementById("third-section-1-element").addEventListener("mouseout", ()=>{pauseAudio(11);});

document.getElementById("third-section-2-element").addEventListener("mouseover", ()=>{playAudio(12);});
document.getElementById("third-section-2-element").addEventListener("mouseout", ()=>{pauseAudio(12);});

document.getElementById("third-section-3-element").addEventListener("mouseover", ()=>{playAudio(13);});
document.getElementById("third-section-3-element").addEventListener("mouseout", ()=>{pauseAudio(13);});

document.getElementById("third-section-4-element").addEventListener("mouseover", ()=>{playAudio(14);});
document.getElementById("third-section-4-element").addEventListener("mouseout", ()=>{pauseAudio(14);});

///////Forth Section////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("img-view-full-0").addEventListener("mouseover", ()=>{playAudio(15);});
document.getElementById("img-view-full-0").addEventListener("mouseout", ()=>{pauseAudio(15);});

document.getElementById("img-view-full-1").addEventListener("mouseover", ()=>{playAudio(16);});
document.getElementById("img-view-full-1").addEventListener("mouseout", ()=>{pauseAudio(16);});

document.getElementById("img-view-full-2").addEventListener("mouseover", ()=>{playAudio(17);});
document.getElementById("img-view-full-2").addEventListener("mouseout", ()=>{pauseAudio(17);});

document.getElementById("img-view-full-3").addEventListener("mouseover", ()=>{playAudio(18);});
document.getElementById("img-view-full-3").addEventListener("mouseout", ()=>{pauseAudio(18);});

document.getElementById("img-view-full-4").addEventListener("mouseover", ()=>{playAudio(19);});
document.getElementById("img-view-full-4").addEventListener("mouseout", ()=>{pauseAudio(19);});

document.getElementById("img-view-full-5").addEventListener("mouseover", ()=>{playAudio(20);});
document.getElementById("img-view-full-5").addEventListener("mouseout", ()=>{pauseAudio(20);});

///////Fifth Section////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("title-fifth-section").addEventListener("mouseover", ()=>{playAudio(21);});
document.getElementById("title-fifth-section").addEventListener("mouseout", ()=>{pauseAudio(21);});

document.getElementById("text-fifth-section").addEventListener("mouseover", ()=>{playAudio(22);});
document.getElementById("text-fifth-section").addEventListener("mouseout", ()=>{pauseAudio(22);});

document.getElementById("map-instructions").addEventListener("mouseover", ()=>{playAudio(23);});
document.getElementById("map-instructions").addEventListener("mouseout", ()=>{pauseAudio(23);});




document.body.addEventListener('mouseover', function (evt) {
if (evt.target.className === 'btn btn-general btn-white') {
  playAudio(70)
  }
}, false);

document.body.addEventListener('mouseout', function (evt) {
if (evt.target.className === 'btn btn-general btn-white') {
  pauseAudio(70)
  }
}, false);

document.body.addEventListener('mouseover', function (evt) {
if (evt.target.className === 'close-modal') {
  playAudio(70)
  }
}, false);

document.body.addEventListener('mouseout', function (evt) {
if (evt.target.className === 'close-modal') {
  pauseAudio(70)
  }
}, false);
