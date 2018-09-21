//var videoEnd = asset.video().videoElement().duration;

var APP_DATA = {
  "scenes": [
    {
      "id": "01",
      "name": "segment1",
      "levels": [
        {
          "tileSize": "",
          "size": "",
          "fallbackOnly": true
        },
        {
          "tileSize": "",
          "size": ""
        },
        {
          "tileSize": "",
          "size": ""
        }
      ],
      "faceSize": "",
      "initialViewParameters": {
        "yaw": -1.9254468534986806,
        "pitch": 0.2143478184175862,
        "fov": 3.3793455132008117
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -1.9254468534986806,
          "pitch": 0.2143478184175862,
          "title": "Title 01",
          "text": "How big can this text be. I am going to try to find out. This is my Valinor VR machine learning Rig. It is amazing."
        },
        {
          "yaw": 6,
          "pitch": 0,
          "title": "Title 02",
          "text": "Text"
        },
        {
          "yaw": 0.9254468534986806,
          "pitch": 2.2143478184175862,
          "title": "Title 03",
          "text": "Text"
        }

      ]
    }
  ],
  "name": "innovation room test",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};


var json = {
	    "hotspots": [
        {
        "id": "info01",
        "type": "textInfo",
        "class": "textInfo",
        "title": "title",
        "tooltip_content": "test text info.",
        "position": {
          "yaw": -0.5,
          "pitch": 0.13
        },
        "imageUrl": "",
        "url": "",
        "urlText": "",
        "timeIn": "0",
        "timeOut": "20"
      },
		  {
        "id": "info02",
        "type": "textInfo",
        "class": "textInfo",
        "title": "Yvelisse Saurez, MD, Pathology",
        "tooltip_content": "Yvelisse Saurez, MD, Pathology",
        "position": {
          "yaw": .9,
          "pitch": .1
        },
        "imageUrl": "",
        "url": "",
        "urlText": "",
        "timeIn": "3",
        "timeOut": "10"
      },
      {
        "id": "info03",
        "type": "tooltip",
        "class": "tooltip",
        "title": "Anatomy of the ICV",
        "tooltip_content": "Anatomy of the ICV.",
        "position": {
          "yaw": 0.1,
          "pitch": -0.45
        },
        "imageUrl": "",
        "imageAlt" : "",
        "url": "",
        "urlText": "",
        "timeIn": "48",
        "timeOut": "104"
      },
      {
      "id": "info04",
      "type": "tooltip",
      "class": "tooltip",
      "title": "Histologic layers of the colon",
      "tooltip_content": "Histologic layers of the colon",
      "position": {
        "yaw": 0.3,
        "pitch": 0
      },
      "imageUrl": "",
      "imageAlt" : "",
      "url": "",
      "urlText": "",
      "timeIn": "180",
      "timeOut": "265"
      },
      {
      "id": "info05",
      "type": "tooltip",
      "class": "tooltip",
      "title": "The staging of colorectal carcinoma - the T stages",
      "tooltip_content": "The staging of colorectal carcinoma - the T stages",
      "position": {
        "yaw": 0.3,
        "pitch": -0.5
      },
      "imageUrl": "",
      "imageAlt" : "",
      "url": "",
      "urlText": "",
      "timeIn": "196",
      "timeOut": "292"
    },
    {
    "id": "info06",
    "type": "tooltip",
    "class": "tooltip",
    "title": "The staging of colorectal carcinoma - the N & M stages",
    "tooltip_content": "The staging of colorectal carcinoma - the N & M stages",
    "position": {
      "yaw": 0.3,
      "pitch": -0.7
    },
    "imageUrl": "",
    "imageAlt" : "",
    "url": "",
    "urlText": "",
    "timeIn": "250",
    "timeOut": "292"
  },
  {
  "id": "info07",
  "type": "tooltip",
  "class": "tooltip",
  "title": "Microscopic images",
  "tooltip_content": "Microscopic images",
  "position": {
    "yaw": 0.2,
    "pitch": -0.3
  },
  "imageUrl": "",
  "imageAlt" : "",
  "url": "",
  "urlText": "",
  "timeIn": "0", //320
  "timeOut": "0"
},
{
"id": "info08",
"type": "tooltip",
"class": "tooltip",
"title": "Grades of dysplasia",
"tooltip_content": "Grades of dysplasia",
"position": {
  "yaw": 0.2,
  "pitch": -0.5
},
"imageUrl": "",
"imageAlt" : "",
"url": "",
"urlText": "",
"timeIn": "320",
"timeOut": ""
},
{
"id": "info09",
"type": "tooltip",
"class": "tooltip",
"title": "Colorectal Staging",
"tooltip_content": "Colorectal Staging",
"position": {
  "yaw": 0.3,
  "pitch": -0.2
},
"imageUrl": "",
"imageAlt" : "",
"url": "",
"urlText": "",
"timeIn": "196",
"timeOut": "320"
}
	  ]
  };

var callToAction = "Learn more";

var bonusMaterial = {
	    "info": [
        {
        "id": "info03",
        "type": "photo",
        "class": "textInfo",
        "title": "Anatomy of the ICV",
        "description": "More information",
        "imageUrl": "app-files/img/more/icv.png",
        "imageAlt": "icv",
        "urlCallToAction": "",
        "urlText": callToAction,
        "embed":""
      },
      {
        "id": "info04",
        "type": "photo",
        "class": "textInfo",
        "title": "Histologic layers of the colon",
        "description": "More info.",
        "imageUrl": "app-files/img/more/colon_layers.png",
        "imageAlt": "colon layers",
        "urlCallToAction": "http://nyulangone.org",
        "urlText": callToAction,
        "embed":""
      },
      {
      "id": "info05",
      "type": "photo",
      "class": "textInfo",
      "title": "The staging of colorectal carcinoma - the T stages",
      "description": "More info.",
      "imageUrl": "app-files/img/more/staging_colorectal_tstages.png",
      "imageAlt": "icv",
      "urlCallToAction": "http://nyulangone.org",
      "urlText": callToAction,
      "embed":""
    },
    {
    "id": "info06",
    "type": "photo",
    "class": "textInfo",
    "title": "The staging of colorectal carcinoma - the N & M stages",
    "description": "More information",
    "imageUrl": "app-files/img/more/staging_colorectal_nmstages.png",
    "imageAlt": "icv",
    "urlCallToAction": "",
    "urlText": callToAction,
    "embed":""
  },
  {
  "id": "info07",
  "type": "photo",
  "class": "textInfo",
  "title": "Microscopic images",
  "description": "More information",
  "imageUrl": "app-files/img/more/",
  "imageAlt": "microscopic images",
  "urlCallToAction": "",
  "urlText": callToAction,
  "embed":""
},
{
"id": "info08",
"type": "photo",
"class": "textInfo",
"title": "Grades of Dysplasia",
"description": "More information",
"imageUrl": "app-files/img/more/grades_dysplasia.jpg",
"imageAlt": "grades of dysplasia",
"urlCallToAction": "",
"urlText": callToAction,
"embed":""
},
{
"id": "info09",
"type": "photo",
"class": "textInfo",
"title": "Colorectal Staging",
"description": "More information",
"imageUrl": "app-files/img/more/colorectal_carcinoma_staging.png",
"imageAlt": "charts",
"urlCallToAction": "",
"urlText": callToAction,
"embed":""
},
    ]
};
