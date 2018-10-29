
 //var video = Popcorn(multiResVideo.element());



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
      "timeOut": "0"
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
        "pitch": -0.15
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
      "timeIn": "199",
      "timeOut": "300"
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
      "timeIn": "270",
      "timeOut": ""
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
      "timeIn": "302",
      "timeOut": ""
    },
    // {
    //   "id": "info07",
    //   "type": "tooltip",
    //   "class": "tooltip",
    //   "title": "Microscopic images",
    //   "tooltip_content": "Microscopic images",
    //   "position": {
    //     "yaw": 0.2,
    //     "pitch": -0.3
    //   },
    //   "imageUrl": "",
    //   "imageAlt" : "",
    //   "url": "",
    //   "urlText": "",
    //   "timeIn": "", //320
    //   "timeOut": ""
    // },
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
      "timeIn": "23",
      "timeOut": "60"
    },
    {
      "id": "info09",
      "type": "tooltip",
      "class": "tooltip",
      "title": "Colorectal Carcinoma Staging",
      "tooltip_content": "Colorectal Carcinoma Staging",
      "position": {
        "yaw": 0.3,
        "pitch": -0.2
      },
      "imageUrl": "",
      "imageAlt" : "",
      "url": "",
      "urlText": "",
      "timeIn": "330",
      "timeOut": ""
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
      "description": "This Netter illustration highlights the region of the ileocecal valve (ICV), which is located in the right lower quadrant of the abdomen. Note the labeled (terminal) ileum, ileal orifice (location of the ICV), cecum, and appendix, and their corresponding gross appearance in the surgical specimen.",
      "images" : [
          {
            "imageURL":"app-files/img/more/icv.png",
            "imageAlt":"icv",
            "text" : ""
          }
        ],
      // "imageUrl": "app-files/img/more/icv.png",
      // "imageAlt": "icv",
      "urlCallToAction": "",
      "urlText": callToAction,
      "embed":""
    },
    {
      "id": "info04",
      "type": "photo",
      "class": "textInfo",
      "title": "Histologic layers of the colon",
      "description": "Note in this histological photomicrograph - progressing from the luminal surface to external serosal surface - the mucosa (Muc), submucosa (SubM), and two layers of the muscularis propria (ME).",
      "images" : [
          {
            "imageURL":"app-files/img/more/colon_layers.png",
            "imageAlt":"colon layers",
            "text" : ""
          }
        ],
      // "imageUrl": "app-files/img/more/colon_layers.png",
      // "imageAlt": "colon layers",
      "urlCallToAction": "http://nyulangone.org",
      "urlText": callToAction,
      "embed":""
    },
    {
      "id": "info05",
      "type": "photo",
      "class": "textInfo",
      "title": "The staging of colorectal carcinoma - the T stages",
      "description": "Dr. Suarez cut into the polyp to examine whether there was any gross evidence of a tumor invading into the wall of the colon.  The 'T' stages of the TNM staging classification system, illustrated in this cartoon, describes local invasion.  As Dr. Suarez says, in this case, if there is evidence of carcinoma on histological examination, it likely would be Tis (in situ within the mucosa), or possibly T1. ",
      "images" : [
          {
            "imageURL":"app-files/img/more/staging_colorectal_tstages.png",
            "imageAlt":"icv",
            "text" : ""
          }
        ],
      // "imageUrl": "app-files/img/more/staging_colorectal_tstages.png",
      // "imageAlt": "icv",
      "urlCallToAction": "http://nyulangone.org",
      "urlText": callToAction,
      "embed":""
    },
    {
      "id": "info06",
      "type": "photo",
      "class": "textInfo",
      "title": "The staging of colorectal carcinoma - the N & M stages",
      "description": "This chart shows the 'N' (regional lymph Node) and 'M' (distant Metastasis) stages of the TNM staging classification system. The pathologist looks at histological sections of lymph nodes in the specimen (or submitted separately by the surgeon) to determine the number that contain metastatic carcinoma.  The M evaluation is usually done clinically with the aid of radiological imaging. (Occasionally, the surgeon will submit, for example, a wedge biopsy of a suspicious lesion in the liver, for pathological evaluation of metastasis). ",
      "images" : [
          {
            "imageURL":"app-files/img/more/staging_colorectal_nmstages.png",
            "imageAlt":"ICV",
            "text" : ""
          }
        ],
      // "imageUrl": "app-files/img/more/staging_colorectal_nmstages.png",
      // "imageAlt": "icv",
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
      "images" : [],
      // "imageUrl": "app-files/img/more/",
      // "imageAlt": "microscopic images",
      "urlCallToAction": "",
      "urlText": callToAction,
      "embed":""
    },
    {
      "id": "info08",
      "type": "photo",
      "class": "textInfo",
      "title": "Grades of Dysplasia",
      "description": "Compare in this composite slide, the normal colonic mucosa, increasing levels of dysplasia (low í high), and frankly malignant invasive carcinoma. The histological features distinguishing the different grades of dysplasia are listed.",
      "images" : [
          {
            "imageURL":"app-files/img/more/grades_of_dysplasia_01.jpg",
            "imageAlt":"grades of dysplasia 1",
            "text" : ""
          },
          {
            "imageURL":"app-files/img/more/grades_of_dysplasia_02.jpg",
            "imageAlt":"grades of dysplasia 2",
            "text" : ""
          }
        ],
      // "imageUrl": "app-files/img/more/grades_dysplasia.jpg",
      // "imageAlt": "grades of dysplasia",
      "urlCallToAction": "",
      "urlText": callToAction,
      "embed":""
    },
    {
      "id": "info09",
      "type": "photo",
      "class": "textInfo",
      "title": "Colorectal Carcinoma Staging",
      "description": "This is a more comprehensive list of staging criteria for colorectal carcinoma.  The TNM features are above, and the (simplified) composite Final Stage (0 - IV) is listed at the bottom.  The stage of a colorectal carcinoma - much of which is determined by pathological evaluation - is the most important determinant of management and prognosis.",
      "images" : [
          {
            "imageURL":"app-files/img/more/colorectal_carcinoma_staging.png",
            "imageAlt":"charts",
            "text" : ""
          }
        ],
      // "imageUrl": "app-files/img/more/colorectal_carcinoma_staging.png",
      // "imageAlt": "charts",
      "urlCallToAction": "",
      "urlText": callToAction,
      "embed":""
    }
  ]
};
