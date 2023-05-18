let countries = [
  ["Andorra", [42.546245, 1.601554], "medium"],
  ["United Arab Emirates", [23.424076, 53.847818], "medium"],
  ["Afghanistan", [33.93911, 67.709953], "hard"],
  ["Antigua and Barbuda", [17.060816, -61.796428], "medium"],
  ["Anguilla", [18.220554, -63.068615], "medium"],
  ["Albania", [41.153332, 20.168331], "medium"],
  ["Armenia", [40.069099, 45.038189], "medium"],
  ["Netherlands Antilles", [12.226079, -69.060087], "hard"],
  ["Angola", [-11.202692, 17.873887], "medium"],
  ["Antarctica", [-75.250973, -0.071389], "hard"],
  ["Argentina", [-38.416097, -63.616672], "easy"],
  ["American Samoa", [-14.270972, -170.132217], "medium"],
  ["Austria", [47.516231, 14.550072], "easy"],
  ["Australia", [-25.274398, 133.775136], "easy"],
  ["Aruba", [12.52111, -69.968338], "medium"],
  ["Azerbaijan", [40.143105, 47.576927], "medium"],
  ["Bosnia and Herzegovina", [43.915886, 17.679076], "medium"],
  ["Barbados", [13.193887, -59.543198], "medium"],
  ["Bangladesh", [23.684994, 90.356331], "easy"],
  ["Belgium", [50.503887, 4.469936], "easy"],
  ["Burkina Faso", [12.238333, -1.561593], "medium"],
  ["Bulgaria", [42.733883, 25.48583], "medium"],
  ["Bahrain", [25.930414, 50.637772], "medium"],
  ["Burundi", [-3.373056, 29.918886], "medium"],
  ["Benin", [9.30769, 2.315834], "medium"],
  ["Bermuda", [32.321384, -64.75737], "medium"],
  ["Brunei", [4.535277, 114.727669], "medium"],
  ["Bolivia", [-16.290154, -63.588653], "easy"],
  ["Brazil", [-14.235004, -51.92528], "easy"],
  ["Bahamas", [25.03428, -77.39628], "medium"],
  ["Bhutan", [27.514162, 90.433601], "medium"],
  ["Bouvet Island", [-54.423199, 3.413194], "hard"],
  ["Botswana", [-22.328474, 24.684866], "medium"],
  ["Belarus", [53.709807, 27.953389], "medium"],
  ["Belize", [17.189877, -88.49765], "medium"],
  ["Canada", [56.130366, -106.346771], "easy"],
  ["Cocos Islands", [-12.164165, 96.870956], "medium"],
  ["Democratic Republic of Congo", [-4.038333, 21.758664], "medium"],
  ["Central African Republic", [6.611111, 20.939444], "medium"],
  ["Republic of the Congo", [-0.228021, 15.827659], "medium"],
  ["Switzerland", [46.818188, 8.227512], "easy"],
  ["Cote d'Ivoire", [7.539989, -5.54708], "medium"],
  ["Cook Islands", [-21.236736, -159.777671], "medium"],
  ["Chile", [-35.675147, -71.542969], "easy"],
  ["Cameroon", [7.369722, 12.354722], "medium"],
  ["China", [35.86166, 104.195397], "easy"],
  ["Colombia", [4.570868, -74.297333], "easy"],
  ["Costa Rica", [9.748917, -83.753428], "medium"],
  ["Cuba", [21.521757, -77.781167], "easy"],
  ["Cape Verde", [16.002082, -24.013197], "medium"],
  ["Christmas Island", [-10.447525, 105.690449], "medium"],
  ["Cyprus", [35.126413, 33.429859], "medium"],
  ["Czech Republic", [49.817492, 15.472962], "easy"],
  ["Germany", [51.165691, 10.451526], "easy"],
  ["Djibouti", [11.825138, 42.590275], "medium"],
  ["Denmark", [56.26392, 9.501785], "easy"],
  ["Dominica", [15.414999, -61.370976], "medium"],
  ["Dominican Republic", [18.735693, -70.162651], "easy"],
  ["Algeria", [28.033886, 1.659626], "medium"],
  ["Ecuador", [-1.831239, -78.183406], "easy"],
  ["Estonia", [58.595272, 25.013607], "medium"],
  ["Egypt", [26.820553, 30.802498], "easy"],
  ["Western Sahara", [24.215527, -12.885834], "medium"],
  ["Eritrea", [15.179384, 39.782334], "medium"],
  ["Spain", [40.463667, -3.74922], "easy"],
  ["Ethiopia", [9.145, 40.489673], "medium"],
  ["Finland", [61.92411, 25.748151], "easy"],
  ["Fiji", [-16.578193, 179.414413], "medium"],
  ["Falkland Islands", [-51.796253, -59.523613], "medium"],
  ["Micronesia", [7.425554, 150.550812], "medium"],
  ["Faroe Islands", [61.892635, -6.911806], "medium"],
  ["France", [46.227638, 2.213749], "easy"],
  ["Gabon", [-0.803689, 11.609444], "medium"],
  ["United Kingdom", [55.378051, -3.435973], "easy"],
  ["Grenada", [12.262776, -61.604171], "medium"],
  ["Georgia", [42.315407, 43.356892], "medium"],
  ["French Guiana", [3.933889, -53.125782], "medium"],
  ["Guernsey", [49.465691, -2.585278], "hard"],
  ["Ghana", [7.946527, -1.023194], "medium"],
  ["Gibraltar", [36.137741, -5.345374], "medium"],
  ["Greenland", [71.706936, -42.604303], "medium"],
  ["Gambia", [13.443182, -15.310139], "medium"],
  ["Guinea", [9.945587, -9.696645], "medium"],
  ["Guadeloupe", [16.995971, -62.067641], "hard"],
  ["Equatorial Guinea", [1.650801, 10.267895], "medium"],
  ["Greece", [39.074208, 21.824312], "easy"],
  ["South Georgia and the South Sandwich Islands", [-54.429579, -36.587909], "medium"],
  ["Guatemala", [15.783471, -90.230759], "medium"],
  ["Guam", [13.444304, 144.793731], "medium"],
  ["Guinea-Bissau", [11.803749, -15.180413], "medium"],
  ["Guyana", [4.860416, -58.93018], "medium"],
  ["Gaza Strip", [31.354676, 34.308825], "medium"],
  ["Hong Kong", [22.396428, 114.109497], "easy"],
  ["Heard Island and McDonald Islands", [-53.08181, 73.504158], "hard"],
  ["Honduras", [15.199999, -86.241905], "medium"],
  ["Croatia", [45.1, 15.2], "medium"],
  ["Haiti", [18.971187, -72.285215], "medium"],
  ["Hungary", [47.162494, 19.503304], "medium"],
  ["Indonesia", [-0.789275, 113.921327], "easy"],
  ["Ireland", [53.41291, -8.24389], "easy"],
  ["Israel", [31.046051, 34.851612], "easy"],
  ["Isle of Man", [54.236107, -4.548056], "medium"],
  ["India", [20.593684, 78.96288], "easy"],
  ["British Indian Ocean Territory", [-6.343194, 71.876519], "medium"],
  ["Iraq", [33.223191, 43.679291], "easy"],
  ["Iran", [32.427908, 53.688046], "easy"],
  ["Iceland", [64.963051, -19.020835], "medium"],
  ["Italy", [41.87194, 12.56738], "easy"],
  ["Jersey", [49.214439, -2.13125], "medium"],
  ["Jamaica", [18.109581, -77.297508], "medium"],
  ["Jordan", [30.585164, 36.238414], "medium"],
  ["Japan", [36.204824, 138.252924], "easy"],
  ["Kenya", [-0.023559, 37.906193], "easy"],
  ["Kyrgyzstan", [41.20438, 74.766098], "medium"],
  ["Cambodia", [12.565679, 104.990963], "medium"],
  ["Kiribati", [-3.370417, -168.734039], "medium"],
  ["Comoros", [-11.875001, 43.872219], "medium"],
  ["Saint Kitts and Nevis", [17.357822, -62.782998], "hard"],
  ["North Korea", [40.339852, 127.510093], "hard"],
  ["South Korea", [35.907757, 127.766922], "easy"],
  ["Kuwait", [29.31166, 47.481766], "medium"],
  ["Cayman Islands", [19.513469, -80.566956], "medium"],
  ["Kazakhstan", [48.019573, 66.923684], "medium"],
  ["Laos", [19.85627, 102.495496], "medium"],
  ["Lebanon", [33.854721, 35.862285], "medium"],
  ["Saint Lucia", [13.909444, -60.978893], "medium"],
  ["Liechtenstein", [47.166, 9.555373], "medium"],
  ["Sri Lanka", [7.873054, 80.771797], "medium"],
  ["Liberia", [6.428055, -9.429499], "medium"],
  ["Lesotho", [-29.609988, 28.233608], "medium"],
  ["Lithuania", [55.169438, 23.881275], "medium"],
  ["Luxembourg", [49.815273, 6.129583], "medium"],
  ["Latvia", [56.879635, 24.603189], "medium"],
  ["Libya", [26.3351, 17.228331], "medium"],
  ["Morocco", [31.791702, -7.09262], "medium"],
  ["Monaco", [43.750298, 7.412841], "medium"],
  ["Moldova", [47.411631, 28.369885], "medium"],
  ["Montenegro", [42.708678, 19.37439], "medium"],
  ["Madagascar", [-18.766947, 46.869107], "medium"],
  ["Marshall Islands", [7.131474, 171.184478], "medium"],
  ["Macedonia", [41.608635, 21.745275], "medium"],
  ["Mali", [17.570692, -3.996166], "medium"],
  ["Myanmar", [21.913965, 95.956223], "easy"],
  ["Mongolia", [46.862496, 103.846656], "medium"],
  ["Macau", [22.198745, 113.543873], "medium"],
  ["Northern Mariana Islands", [17.33083, 145.38469], "hard"],
  ["Martinique", [14.641528, -61.024174], "medium"],
  ["Mauritania", [21.00789, -10.940835], "hard"],
  ["Montserrat", [16.742498, -62.187366], "medium"],
  ["Malta", [35.937496, 14.375416], "medium"],
  ["Mauritius", [-20.348404, 57.552152], "medium"],
  ["Maldives", [3.202778, 73.22068], "medium"],
  ["Malawi", [-13.254308, 34.301525], "medium"],
  ["Mexico", [23.634501, -102.552784], "easy"],
  ["Malaysia", [4.210484, 101.975766], "easy"],
  ["Mozambique", [-18.665695, 35.529562], "medium"],
  ["Namibia", [-22.95764, 18.49041], "medium"],
  ["New Caledonia", [-20.904305, 165.618042], "medium"],
  ["Niger", [17.607789, 8.081666], "medium"],
  ["Norfolk Island", [-29.040835, 167.954712], "hard"],
  ["Nigeria", [9.081999, 8.675277], "easy"],
  ["Nicaragua", [12.865416, -85.207229], "medium"],
  ["Netherlands", [52.132633, 5.291266], "easy"],
  ["Norway", [60.472024, 8.468946], "easy"],
  ["Nepal", [28.394857, 84.124008], "easy"],
  ["Nauru", [-0.522778, 166.931503], "medium"],
  ["Niue", [-19.054445, -169.867233], "medium"],
  ["New Zealand", [-40.900557, 174.885971], "easy"],
  ["Oman", [21.512583, 55.923255], "medium"],
  ["Panama", [8.537981, -80.782127], "medium"],
  ["Peru", [-9.189967, -75.015152], "easy"],
  ["French Polynesia", [-17.679742, -149.406843], "medium"],
  ["Papua New Guinea", [-6.314993, 143.95555], "medium"],
  ["Philippines", [12.879721, 121.774017], "easy"],
  ["Pakistan", [30.375321, 69.345116], "easy"],
  ["Poland", [51.919438, 19.145136], "easy"],
  ["Saint Pierre and Miquelon", [46.941936, -56.27111], "medium"],
  ["Pitcairn Islands", [-24.703615, -127.439308], "medium"],
  ["Puerto Rico", [18.220833, -66.590149], "medium"],
  ["Palestine", [31.952162, 35.233154], "medium"],
  ["Portugal", [39.399872, -8.224454], "easy"],
  ["Palau", [7.51498, 134.58252], "medium"],
  ["Paraguay", [-23.442503, -58.443832], "easy"],
  ["Qatar", [25.354826, 51.183884], "medium"],
  ["Reunion", [-21.115141, 55.536384], "medium"],
  ["Romania", [45.943161, 24.96676], "easy"],
  ["Serbia", [44.016521, 21.005859], "medium"],
  ["Russia", [61.52401, 105.318756], "easy"],
  ["Rwanda", [-1.940278, 29.873888], "medium"],
  ["Saudi Arabia", [23.885942, 45.079162], "easy"],
  ["Solomon Islands", [-9.64571, 160.156194], "medium"],
  ["Seychelles", [-4.679574, 55.491977], "medium"],
  ["Sudan", [12.862807, 30.217636], "medium"],
  ["Sweden", [60.128161, 18.643501], "easy"],
  ["Singapore", [1.352083, 103.819836], "easy"],
  ["Saint Helena", [-24.143474, -10.030696], "medium"],
  ["Slovenia", [46.151241, 14.995463], "medium"],
  ["Svalbard and Jan Mayen", [77.553604, 23.670272], "medium"],
  ["Slovakia", [48.669026, 19.699024], "medium"],
  ["Sierra Leone", [8.460555, -11.779889], "hard"],
  ["San Marino", [43.94236, 12.457777], "hard"],
  ["Senegal", [14.497401, -14.452362], "medium"],
  ["Somalia", [5.152149, 46.199616], "medium"],
  ["Suriname", [3.919305, -56.027783], "medium"],
  ["South Sudan", [6.876991, 31.306978], "medium"],
  ["Sao Tome and Principe", [0.18636, 6.613081], "medium"],
  ["El Salvador", [13.794185, -88.89653], "medium"],
  ["Sint Maarten", [18.034718, -63.068106], "medium"],
  ["Syria", [34.802075, 38.996815], "medium"],
  ["Eswatini", [-26.522503, 31.465866], "medium"],
  ["Turks and Caicos Islands", [21.694025, -71.797928], "medium"],
  ["Chad", [15.454166, 18.732207], "medium"],
  ["French Southern and Antarctic Lands", [-49.280366, 69.348557], "medium"],
  ["Togo", [8.619543, 0.824782], "medium"],
  ["Thailand", [15.870032, 100.992541], "easy"],
  ["Tajikistan", [38.861034, 71.276093], "medium"],
  ["Tokelau", [-8.967363, -171.855881], "medium"],
  ["Timor-Leste", [-8.874217, 125.727539], "medium"],
  ["Turkmenistan", [38.969719, 59.556278], "medium"],
  ["Tunisia", [33.886917, 9.537499], "medium"],
  ["Tonga", [-21.178986, -175.198242], "medium"],
  ["Turkey", [38.963745, 35.243322], "easy"],
  ["Trinidad and Tobago", [10.691803, -61.222503], "hard"],
  ["Tuvalu", [-7.109535, 177.64933], "medium"],
  ["Taiwan", [23.69781, 120.960515], "easy"],
  ["Tanzania", [-6.369028, 34.888822], "easy"],
  ["Ukraine", [48.379433, 31.16558], "medium"],
  ["Uganda", [1.373333, 32.290275], "medium"],
  ["United States Minor Outlying Islands", [19.282319, 166.647047], "medium"],
  ["United States", [37.09024, -95.712891], "easy"],
  ["Uruguay", [-32.522779, -55.765835], "easy"],
  ["Uzbekistan", [41.377491, 64.585262], "medium"],
  ["Vatican City", [41.902916, 12.453389], "medium"],
  ["Saint Vincent and the Grenadines", [12.984305, -61.287228], "medium"],
  ["Venezuela", [6.42375, -66.58973], "medium"],
  ["British Virgin Islands", [18.420695, -64.639968], "medium"],
  ["U.S. Virgin Islands", [18.335765, -64.896335], "medium"],
  ["Vietnam", [14.058324, 108.277199], "easy"],
  ["Vanuatu", [-15.376706, 166.959158], "medium"],
  ["Wallis and Futuna", [-13.768752, -177.156097], "medium"],
  ["Samoa", [-13.759029, -172.104629], "medium"],
  ["Kosovo", [42.602636, 20.902977], "medium"],
  ["Yemen", [15.552727, 48.516388], "medium"],
  ["Mayotte", [-12.8275, 45.166244], "medium"],
  ["South Africa", [-30.559482, 22.937506], "easy"],
  ["Zambia", [-13.133897, 27.849332], "medium"],
  ["Zimbabwe", [-19.015438, 29.154857], "medium"]
];

// Lord knows how this works
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371.0072;
  var dLat = deg2rad(lat2-lat1);
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
};

function deg2rad(deg) {
  return deg * (Math.PI/180);
};

var clicked = false;
search = document.getElementById("search");
check = document.getElementById("check");
output = document.getElementById("output");

easy = document.getElementById("easy");
easy.addEventListener("click", easydif);
function easydif() {
  clicked = true;
  list = [];
  for (i=0; i<countries.length; i++) {
    if (countries[i][2] == "easy") {
      list.push(countries[i]);
    }
  }
  var help = Math.floor(Math.random()*(list.length-1));
  target = list[help];
  console.log(target);
  counter = 0;
  output.innerHTML = "Difficulty: Easy";
  document.body.style.backgroundColor = 'cornflowerblue';
}

medium = document.getElementById("medium");
medium.addEventListener("click", mediumdif);
function mediumdif() {
  clicked = true;
  list = [];
  for (i=0; i<countries.length; i++) {
    if (countries[i][2] == "medium") {
      list.push(countries[i]);
    }
  }
  var help = Math.floor(Math.random()*(list.length-1));
  target = list[help];
  console.log(target);
  counter = 0;
  output.innerHTML = "Difficulty: Medium";
  document.body.style.backgroundColor = 'cornflowerblue';
}

hard = document.getElementById("hard");
hard.addEventListener("click", harddif);
function harddif() {
  clicked = true;
  list = [];
  for (i=0; i<countries.length; i++) {
    if (countries[i][2] == "hard") {
      list.push(countries[i]);
    }
  }
  var help = Math.floor(Math.random()*(list.length-1));
  target = list[help];
  console.log(target);
  counter = 0;
  output.innerHTML = "Difficulty: Hard";
  document.body.style.backgroundColor = 'cornflowerblue';
}

random = document.getElementById("random");
random.addEventListener("click", randomdif);
function randomdif() {
  clicked = true;
  var help = Math.floor(Math.random()*245);
  target = countries[help];
  console.log(target);
  counter = 0;
  output.innerHTML = "Difficulty: Random";
  document.body.style.backgroundColor = 'cornflowerblue';
}


let counter = 0;

check.addEventListener("click", input);
function input() {	
  val = search.value;
  search.innerHTML = "Search Country...";
  let isCountry = false;
  counter++;
  console.log(counter);
  for (i=0; i<countries.length; i++) {
    if (val.toUpperCase().trim() == countries[i][0].toUpperCase().trim()) {
      isCountry = true;
      guess = countries[i];
      search.value = "";
      disKm = getDistanceFromLatLonInKm(guess[1][0], guess[1][1], target[1][0], target[1][1]);
      disMi = disKm * 0.621371
      output.innerHTML = countries[i][0] + " is " + Math.round(disKm) + " km/" + Math.round(disMi) + " miles away";

      let mapped = ((100-(disKm/19955.401886614403)*100)/100)*255;
      background = "rgb("+mapped+",20,"+(255-mapped)+")";
      console.log(background);
      document.body.style.backgroundColor = background;
      if (val.toUpperCase().trim() == target[0].toUpperCase().trim()) {
        if (counter == 1) {
          output.innerHTML = "You got it in 1 try!";
        } else {
          output.innerHTML = "You got it in " + counter + " tries!";
        }
        document.body.style.backgroundColor = 'white';
        counter = 0;
      };
    };
  }
  if (isCountry == false) {
    output.innerHTML = "Not a real country. Try again.";
    search.value = "";
  };
  if (clicked == false) {
    output.innerHTML = "Click a difficulty below."
    counter = 0;
  }
};
// scale 0 - 19955.401886614403 to 0 - 255//