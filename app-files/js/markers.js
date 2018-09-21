/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
// types: hintspot, tooltip, info, rotate-hotspot, reveal, textInfo, expand




var pop, videoLength;
var marker_data = window.json;
var bonus_material = window.bonusMaterial;

emitter.addEventListener('change', function() {
       // console.log('change', asset.video() && asset.video().videoElement());
        pop = Popcorn(multiResVideo.element());
        videoLength = pop.duration();

        createMarkers();

});

//iterate through and create objects from json from each hotspot, create new hotspot container per hotspot types
function createMarkers() {


for (var i = 0; i < marker_data.hotspots.length; i++) {

    var hotspotID = marker_data.hotspots[i].id;
    var hotspotContent = marker_data.hotspots[i].tooltip_content;
    var hotspotYaw = marker_data.hotspots[i].position.yaw;
    var hotspotPitch =  marker_data.hotspots[i].position.pitch;
    var hotspotType=  marker_data.hotspots[i].type;
    var hotspotTimeIn =  marker_data.hotspots[i].timeIn;
    var hotspotTimeOut=  marker_data.hotspots[i].timeOut;

   switch(hotspotType) {
    case 'textInfo':
        textInfo(hotspotID, hotspotContent, hotspotYaw, hotspotPitch, hotspotTimeIn, hotspotTimeOut);
        break;
    case 'info':
        //info();
        break;
    case 'tooltip':
       var hotspotImage =  marker_data.hotspots[i].imageUrl,
           hotspotImageAlt =  marker_data.hotspots[i].imageAlt;

       tooltip(hotspotID, hotspotContent, hotspotImage, hotspotImageAlt, hotspotYaw, hotspotPitch, hotspotTimeIn, hotspotTimeOut);

       //addInfoToImageModal(hotspotID);
        break;
    case 'rotate-hotspot':
        //rotateHotspot();
        break;
     case 'reveal':
        //reveal();
        break;
     case 'expand':
        //expand();
        break;
     case 'hintspot':
        //hintspot();
        break;
    default:
        console.log("This marker is missing a type");
        break;
    }
  }
}

// create textinfo type
function textInfo(id, content, yaw, pitch, timeIn, timeOut) {
    var hotspot = document.createElement('div');
    hotspot.setAttribute("id" , id);
    hotspot.setAttribute("class" , "hotspot textInfo hidden");


    var innerHotspot = '<div class="hotspot"><div class="out"></div><div class="in"></div></div><div class="tooltip-content"><p>'+ content +'</p></div>'
    hotspot.insertAdjacentHTML("afterbegin" , innerHotspot);

    document.body.appendChild(hotspot);
    scene.hotspotContainer().createHotspot(document.querySelector("#"+id), { yaw: yaw, pitch: pitch });

    popTextInfo(timeIn, timeOut, id);


}

function tooltip(id, content, image, imageAlt, yaw, pitch, timeIn, timeOut) {

//create div element
  var hotspot = document.createElement('div');
  hotspot.setAttribute("id" , id);
  hotspot.setAttribute("class" , "hotspot tooltip hidden");

  var innerHotspot =   '<div class="out"><div class="in"><div class="image"></div></div></div><div class="tip">';
      innerHotspot+=  '<p>'+ content +'</p>';
      innerHotspot+=  '<img src="'+ image +'" alt="'+ imageAlt +'"></a></div></div>';

  var el = "#"+id;
  hotspot.insertAdjacentHTML("afterbegin" , innerHotspot);

  //var hotspotActive = document.getElementById(el);

  hotspot.addEventListener('click', function() {

    var _id = id
    var modal = document.querySelector("#modal");

    modal.classList.add("showing");
    modal.classList.remove("hidden");

    addInfoToImageModal(_id);

  });

  hotspot.addEventListener('touchstart', function() {
    var _id = id
    var modal = document.querySelector("#modal");

    modal.classList.add("showing");
    modal.classList.remove("hidden");

    addInfoToImageModal(_id);

  });

  // document.getElementById(el).addEventListener('click', function() {
  //
  //   var _id = id
  //   var modal = document.querySelector("#modal");
  //
  //   modal.classList.add("showing");
  //   modal.classList.remove("hidden");
  //
  //   addInfoToImageModal(_id);
  //
  // });
  //
  // hotspotActive.addEventListener('touchstart', function() {
  //   var _id = id
  //   var modal = document.querySelector("#modal");
  //
  //   modal.classList.add("showing");
  //   modal.classList.remove("hidden");
  //
  //   addInfoToImageModal(_id);
  //
  // });

  scene.hotspotContainer().createHotspot(hotspot, { yaw: yaw, pitch: pitch });

//register pop event
  popTooltip(timeIn, timeOut, id);


}

function popTextInfo(timeIn, timeOut, id) {
  var hotspot = document.querySelector("#"+id);

  hotspot.addEventListener("click", function() {
    pop.pause();

  });

  pop.code({
      start: timeIn,
      end: timeOut,
      onStart: function( options ) {
        //create div element

      hotspot.setAttribute("class" , "hotspot textInfo showing");
     },
       onEnd: function( options ) {

       hotspot.setAttribute("class" , "hotspot textInfo hidden");


     }
  });
}

function popTooltip (timeIn, timeOut, id) {
    var hotspot = document.querySelector("#"+id);

    hotspot.addEventListener("click", function() {
      pop.pause();

    });

  pop.code({
      start: timeIn,
      end: timeOut,
      onStart: function( options ) {
          //create div element

      hotspot.setAttribute("class" , "hotspot tooltip showing");

      },
       onEnd: function( options ) {
       // scene.hotspotContainer().destroyHotspot(hotspot);
       hotspot.setAttribute("class" , "hotspot tooltip hidden");
      }
  });
}


function addInfoToImageModal(id) { //find corresponding image, details etc with id

  var hotSpotid, hotspotType, hotspotClass, infoTitle, infoDesc, infoImageUrl, infoImageAlt, infoUrlAction, infoUrlText, infoEmbed;


  for (var i = 0; i <bonusMaterial.info.length; i++) {
     if  (bonusMaterial.info[i].id == id) {
      //console.log("match found.");
        hotSpotid =  bonusMaterial.info[i].id;
        hotspotType = bonusMaterial.info[i].type;
        hotspotClass = bonusMaterial.info[i].class;
        infoTitle =  bonusMaterial.info[i].title;
        infoDesc= bonusMaterial.info[i].description;
        infoImageUrl = bonusMaterial.info[i].imageUrl;
        infoImageAlt =  bonusMaterial.info[i].imageAlt;
        infoUrlAction =  bonusMaterial.info[i].urlCallToAction;
        infoUrlText =  bonusMaterial.info[i].urlText;
        infoEmbed = bonusMaterial.info[i].embed;

         //format and add data to modal
  var modalTitle = document.querySelector("#modal .title h3");
  var modalDesc = document.querySelector("#modal .info p");
  var modalImage = document.querySelector("#modal .image img");

  modalTitle.innerHTML = infoTitle;
  modalDesc.innerHTML = infoDesc;

  modalImage.src = infoImageUrl;
  modalImage.alt = infoImageAlt;

       break

      } else {
        //console.log("no match.");

      }
}
}

    (function() {
        //close button on info panel modal
        var closeButton = document.getElementById('close');
         var bottomCloseBtn = document.getElementById('closeBtn');


        closeButton.addEventListener('click', function(evt) {
            //console.log("x is clicked.", evt);
            this.parentNode.className = 'hidden';
            return false;
        });

        bottomCloseBtn.addEventListener('click', function(evt) {
            //console.log("x is clicked.", evt);
            this.parentNode.className = 'hidden';
            return false;
        });

        // info modal close
        var welcomeModal = document.querySelector(".welcome");
        var hideWelcome = function() {

          welcomeModal.classList.remove('visible');
          pop.play();
        };

        // Hide welcome content modal when close icon is clicked. and play video
        document.querySelector('.welcome .info-hotspot-close-wrapper').addEventListener('click', hideWelcome);
        multiResVideo.addEventListenerVideo('play', hideWelcome);
        document.getElementById('playBtn').addEventListener('click', hideWelcome);





    })();


// function info(id, content, yaw, pitch, timeIn, timeOut) {}
// function hintspot(id, content, yaw, pitch, timeIn, timeOut) {}
// function reveal(id, content, yaw, pitch, timeIn, timeOut) {}
// function expand(id, content, yaw, pitch, timeIn, timeOut) {}
// function rotateHotspot(id, content, yaw, pitch, timeIn, timeOut) {}
