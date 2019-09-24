//Language Text Array
var QnsMain = [];
var QnsEng = [];
var QnsArab = [];
var pathID = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

//Change to Two-Dimensional Array
for(var x = 0; x < 51; x++)
{
    QnsMain[x] = [];    
    QnsEng[x] = [];
    QnsArab[x] = [];
}


QnsEng[0] = new Array(2);
QnsEng[0][0] = "INFO TEXT";
QnsEng[0][1] = "Thank you for agreeing to participate in this study, doctor. We’d like to start by asking you a few questions about your role and practice";




QnsEng[1] = new Array(6);
QnsEng[1][0] = "Where do you live?";
QnsEng[1][1] = "Italy";
QnsEng[1][2] = "Spain";
QnsEng[1][3] = "France";
QnsEng[1][4] = "Germany";
QnsEng[1][5] = "UK";


//Cente List
QnsEng[2] = new Array(4);
QnsEng[2][0] = "Which of these best describes your primary role?";
QnsEng[2][1] = "Infectious Disease Specialist OR FOR SPAIN Internal  Medicine with Specialism in Infectious Disease";
QnsEng[2][2] = "Intensivist OR FOR UK Intensivist/ITU Specialist";
QnsEng[2][3] = "Haematologist Oncologist";


QnsEng[3] = new Array(3);
QnsEng[3][0] = "Which of the following best describes your hospital type?";
QnsEng[3][1] = "University/Academic Hospital";
QnsEng[3][2] = "Community Hospital";


QnsEng[4] = new Array(7);
QnsEng[4][0] = "Thinking in terms of carbapenem resistance, which of the following pathogens is the most frequent in your hospital? Which is the most frequent that you encounter (in your specific ward/s)";
QnsEng[4][1] = "Klebsiella pneumoniae";
QnsEng[4][2] = "Acinetobacter baumannii";
QnsEng[4][3] = "Pseudomonas aeruginosa";
QnsEng[4][4] = "Escherichia coli";
QnsEng[4][5] = "Stenotrophomonas maltophilia";
QnsEng[4][6] = "Other";


QnsEng[5] = new Array(6);
QnsEng[5][0] = "PCR (e.g. Gene Xpert)";
QnsEng[5][1] = "MALDI-TOF";
QnsEng[5][2] = "Immunochromatography/Lateral flow Immunoassays (e.g. RESIST-4 O.K.N.V.)";
QnsEng[5][3] = "Phenotypic assays (e.g. RAPIDEC Carba-NP)";
QnsEng[5][4] = "Automated antimicrobial susceptibility testing (e.g.VITEK 2, MicroScan)";
QnsEng[5][5] = "None";


QnsEng[6] = new Array(7);
QnsEng[6][0] = "How is pathogen identification and susceptibility testing carried out when the microbiology lab is not accessible (e.g. during closing hours)?";
QnsEng[6][1] = "Wait until the lab is open/accessible";
QnsEng[6][2] = "Initiate a broad spectrum treatment ";
QnsEng[6][3] = "I’m always able to get information from a 24h service";
QnsEng[6][4] = "Make a judgement call and choose the most appropriate antibiotic with information";
QnsEng[6][5] = "Contact the ‘on call’ microbiologist ";
QnsEng[6][6] = "We are able to do some testing without the lab";
QnsEng[6][7] = "Other (please specify)";


QnsMain = QnsEng;

function GetLang(SlLang)
{
    if (SlLang ==1)
    {
        QnsMain = QnsEng;
    }
    else
    {
        QnsMain = QnsArab;
    }
}
function lettersOnly(evt)
{                         
       evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
          ((evt.which) ? evt.which : 0));
        if (charCode == 32)
            return true;
        if (charCode > 31 && (charCode < 65 || charCode > 90) &&
          (charCode < 97 || charCode > 122)) {
            evt.target.value="";
            //return false;
        }
        else
            return true;
}

function alphaOnly(event) {
  var key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8);
};
function zeroPad(num, places) 
    {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
function isNumberKey(evt)
{
     var charCode = (evt.which) ? evt.which : event.keyCode;
     if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

     return true;
}
function trimAdd(str) 
{
    return str.replace(/^\s+|\s+$/g,"");
}
function RotateArray(Source, pos)
{
        // find out how may postions to rotate
        pos = pos % Source.length;		
        // if no (or negative) rotation is required leave the array untouched
        if (pos <= 0) return;				
        // get length of array minus 1 
        var len = Source.length - 1;	
        // set temp to last element of array
        var temp = Source[len];			
        // iterate backwards though array and move the previous
        // element into the current position 
        for (var i = len; i > 0; i--)	
        {
                Source[i] = Source[i - 1];
        }				
        // set the first element to 'temp'
        Source[0] = temp;		
        // decrement postions to be rotated
        pos--;		
        // if no rotations left, return to caller
        if (pos == 0) return;				
        // rotate the array another position
        RotateArray(Source, pos);
}
function validatedate(inputText)
{
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // Match the date format through regular expression
    if(inputText.value.match(dateformat))
    {
    //document.form1.text1.focus();
    //Test which seperator is used '/' or '-'
    var opera1 = inputText.value.split('/');
    var opera2 = inputText.value.split('-');
    lopera1 = opera1.length;
    lopera2 = opera2.length;
    // Extract the string into month, date and year
    if (lopera1>1)
    {
    var pdate = inputText.value.split('/');
    }
    else if (lopera2>1)
    {
    var pdate = inputText.value.split('-');
    }
    var dd = parseInt(pdate[0]);
    var mm  = parseInt(pdate[1]);
    var yy = parseInt(pdate[2]);
    // Create list of days of a month [assume there is no leap year by default]
    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    if (mm==1 || mm>2)
    {
    if (dd>ListofDays[mm-1])
    {
    //alert('Invalid date format!');
    return 0;
    }
    }
    if (mm==2)
    {
    var lyear = false;
    if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
    {
    lyear = true;
    }
    if ((lyear==false) && (dd>=29))
    {
    //alert('Invalid date format!');
    return 0;
    }
    if ((lyear==true) && (dd>29))
    {
    //alert('Invalid date format!');
    return 0;
    }
    }
    }
    else
    {
    //alert("Invalid date format!");
    //document.form1.text1.focus();
    return 0;
    }
}
function validateEmail(sEmail) 
{
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail))
        return true;
    else 
        return false;
}

function prgBarWidth(pgid) {
	if (pgid != 1)
	{
	 var elem = document.getElementById("myBar");   
	 elem.style.width = parseInt(((pgid - 1)  * 10) / 2) + '%'; 
		elem.innerHTML = ((pgid - 1) * 10)  + '%';
	}
  }
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}