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
//text info hotspot
scene.hotspotContainer().createHotspot(document.querySelector("#info01"), { yaw: -0.5, pitch: 0.13 });
scene.hotspotContainer().createHotspot(document.querySelector("#info02"), { yaw: -0.2, pitch: 0.23 });

//info hotspot
scene.hotspotContainer().createHotspot(document.querySelector("#info03"), { yaw: 0.2, pitch: -.53  });

document.querySelector("#info03 .icon_wrapper").addEventListener('click', function() {
  document.querySelector("#info03").classList.toggle('expanded');
  document.querySelector("#inner_icon").classList.toggle('closeIcon');
});

document.querySelector("#info03 .close").addEventListener('click', function() {
  document.querySelector("#info03").classList.remove('expanded');
  document.querySelector("#inner_icon").classList.remove('closeIcon');
});

//
document.querySelector("#info03 .icon_wrapper").addEventListener('touchstart', function() {
  document.querySelector("#info03").classList.toggle('expanded');
  document.querySelector("#inner_icon").classList.toggle('closeIcon');
});

document.querySelector("#info03 .close").addEventListener('touchstart', function() {
  document.querySelector("#info03").classList.remove('expanded');
  document.querySelector("#inner_icon").classList.remove('closeIcon');
});


// document.querySelector('#info input[type="text"]').addEventListener('keydown', function(evt) {
//   evt.stopPropagation();
// });

//tooltip hotspot
scene.hotspotContainer().createHotspot(document.querySelector("#info04"), { yaw: 0.5, pitch: .45 });

// rotate hotspot
scene.hotspotContainer().createHotspot(document.querySelector("#info05"), { yaw: 0.7, pitch: 0.2 });

// reveal hotspot
scene.hotspotContainer().createHotspot(document.querySelector("#info06"), { yaw: -0.92, pitch: -0.1 });

// expand hotspot
scene.hotspotContainer().createHotspot(document.querySelector("#info07"), { yaw: 0.92, pitch: -.4 });
