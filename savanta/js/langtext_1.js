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


QnsEng[0] = new Array(22);
QnsEng[0][0] = "YEAR";
QnsEng[0][1] = "Months";
QnsEng[0][2] = "Center";
QnsEng[0][3] = "UNIQUE RESPONDENT ID";
QnsEng[0][4] = "NAME:";
QnsEng[0][5] = "TELEPHONE NUMBER: ";
QnsEng[0][6] = "INTERVIEW DATE : ";
QnsEng[0][7] = "INTERVIEWER NAME & CODE :";
QnsEng[0][8] = "SUPERVISOR NAME & CODE :";
QnsEng[0][9] = "DP CODE";
QnsEng[0][10] = "Random";
QnsEng[0][11] = "Booster";
QnsEng[0][12] = "Months";
QnsEng[0][13] = "Years";
QnsEng[0][14] = "Weeks";
QnsEng[0][15] = "QUALITY CONTROL CHECKS";
QnsEng[0][16] = "Supervised Call";
QnsEng[0][17] = "Back Checks - Telephone";
QnsEng[0][18] = "Scrutiny";
QnsEng[0][19] = "Carried";
QnsEng[0][20] = "Fresh";
QnsEng[0][21] = "INTRODUCTION";

//Month List
QnsEng[1] = new Array(13);
QnsEng[1][0] = "Please select month";
QnsEng[1][1] = "January";
QnsEng[1][2] = "February";
QnsEng[1][3] = "March";
QnsEng[1][4] = "April";
QnsEng[1][5] = "May";
QnsEng[1][6] = "June";
QnsEng[1][7] = "July";
QnsEng[1][8] = "August";
QnsEng[1][9] = "September";
QnsEng[1][10] = "October";
QnsEng[1][11] = "November";
QnsEng[1][12] = "December";

//Cente List
QnsEng[2] = new Array(11);
QnsEng[2][0] = "Pleased select center";
QnsEng[2][1] = "TEHRAN";
QnsEng[2][2] = "RAZAVI KHORASAN";
QnsEng[2][3] = "ESFAHAN";
QnsEng[2][4] = "FARS";
QnsEng[2][5] = "EAST AZARBAIJAN";
QnsEng[2][6] = "KHUZESTAN";
QnsEng[2][7] = "MAZANDARAN";
QnsEng[2][8] = "KERMAN";
QnsEng[2][9] = "ALBORZ";
QnsEng[2][10] = "WEST AZARBAIJAN";


QnsEng[3] = new Array(2);
QnsEng[3][0] = "Hello! I am _________, calling from Quest Consulting, a Market Research Agency. We are currently conducting a survey on diabetes in Iran market.Therefore, we ask for your permission in order to acquire about your knowledge and experience with regards to diabetes topic. ";
QnsEng[3][1] = "We randomly select a certain number of people and we assure you that all data collected are used for statistical purposes and will not be viewed at an individual level. Could you please spare a few minutes to speak with us? This interview would take around XX minutes to answer.";


QnsEng[4] = new Array(4);
QnsEng[4][0] = "";
QnsEng[4][1] = "Yes, I can answer questions now ";
QnsEng[4][2] = "No, I can answer later";
QnsEng[4][3] = "I have no interest in interviewing";

QnsEng[5] = new Array(2);
QnsEng[5][0] = "Can you provide a convenient time, so that I can call you later?";
QnsEng[5][1] = "Time and Date";

//S1
QnsEng[6] = new Array(3);
QnsEng[6][0] = "S1. <font color='#faebd7'>DO NOT ASK. CHECK DATABASE. CODE. </font> Recruitment type.<font color='#faebd7'> SA. </font>";
QnsEng[6][1] = "Carried Forward, answered past survey";
QnsEng[6][2] = "Fresh Recruitment, answering survey for first time";

//S2
QnsEng[7] = new Array(4);
QnsEng[7][0] = "S2. Are you currently suffering from diabetes?<font color='#faebd7'>IF REQUIRED, READ OUT OPTIONS. SA. </font> ";
QnsEng[7][1] = "Yes, I currently have diabetes and I'm under treatment";
QnsEng[7][2] = "I was diagnosed with diabetes earlier, but I'm no longer under treatment";
QnsEng[7][3] = "No, I do not have diabetes";

//S3
QnsEng[8] = new Array(4);
QnsEng[8][0] = "S3. What kind of diabetes do you have?<font color='#faebd7'>IF REQUIRED, READ OUT OPTIONS. SA </font>";
QnsEng[8][1] = "Type 1";
QnsEng[8][2] = "Type 2";
QnsEng[8][3] = "Other (e.g. Gestational Diabetes Mellitus)";

//S4
QnsEng[9] = new Array(3);
QnsEng[9][0] = "S4. In the past 2 years, have you refered to a physician for your diabetes, medication and dosage? <font color='#faebd7'> SA. </font>";
QnsEng[9][1] = "Yes";
QnsEng[9][2] = "No";

//S5
QnsEng[10] = new Array(5);
QnsEng[10][0] = "S5. What kind of medication are you on currently for your diabetes treatment? <font color='#faebd7'>IF REQUIRED, READ OUT OPTIONS. SA.</font>";
QnsEng[10][1] = "Injections only";
QnsEng[10][2] = "Oral pills only";
QnsEng[10][3] = "Both injections and oral pills";
QnsEng[10][4] = "None, don't take any medication now";

//S6
QnsEng[11] = new Array(1);
QnsEng[11][0] = "S6. How long have you been diagnosed with diabetes? Please mention in number of years and months. <br><br><font color='#faebd7'>RECORD VERBATIM<br>IN CASE OF MORE THAN 2 YEARS, MONTHS IS OPTIONAL. </font>";

//S7
QnsEng[12] = new Array(1);
QnsEng[12][0] = "S7. How long have you been using insulin injections? Please mention in number of years, months and weeks <br><br> <font color='#faebd7'>RECORD VERBATIM. WEEKS IS OPTIONAL. <br>IN CASE OF MORE THAN 2 YEARS, MONTHS & WEEKS IS OPTIONAL. <br>IN CASE MORE THAN 2 MONTHS, WEEKS IS OPTIONAL.</font>";

//S8
QnsEng[13] = new Array(3);
QnsEng[13][0] = "S8. <font color='#faebd7'>DO NOT ASK. CHECK S7CODE.</font> Type of patient. <font color='#faebd7'>SA. </font>";
QnsEng[13][1] = "Less than 12 months ";
QnsEng[13][2] = "More than or equal to 12 months / 1 year";
QnsEng[13][3] = "New";
QnsEng[13][4] = "Existing";

//S9
QnsEng[14] = new Array(3);
QnsEng[14][0] = "S9. <font color='#faebd7'>DO NOT ASK. RECORD GENDER.SA. </font>";
QnsEng[14][1] = "Male";
QnsEng[14][2] = "Female";

//S10
QnsEng[15] = new Array(6);
QnsEng[15][0] = "S10. <font color='#faebd7'>DO NOT ASK. CODE SEC HERE. SA</font>";
QnsEng[15][1] = "A";
QnsEng[15][2] = "B";
QnsEng[15][3] = "C";
QnsEng[15][4] = "D";
QnsEng[15][5] = "E";

//S11
QnsEng[16] = new Array(1);
QnsEng[16][0] = "S11. <font color='#faebd7'>DO NOT ASK. CHECK. CODE.</font> Type of panel.<font color='#faebd7'> SA. </font>";

//S12
QnsEng[17] = new Array(1);
QnsEng[17][0] = "S12. <font color='#faebd7'>DO NOT ASK. CHECK IN S11. CODE. </font> Quota Check.<font color='#faebd7'> SA. </font>";

//S13
QnsEng[18] = new Array(7);
QnsEng[18][0] = "S13. Which age group do you fit into? <font color='#faebd7'> SA. </font>";
QnsEng[18][1] = "Below 35 years";
QnsEng[18][2] = "35 to 55 years";
QnsEng[18][3] = "Above 55 years";
QnsEng[18][4] = "Young adult";
QnsEng[18][5] = "Mid Aged";
QnsEng[18][6] = "Senior";

//Brandlist
QnsEng[19] = new Array(7);
QnsEng[19][0] = "";
QnsEng[19][1] = "NPH";
QnsEng[19][2] = "Lantus";
QnsEng[19][3] = "Levemir";
QnsEng[19][4] = "Abasaglar";
QnsEng[19][5] = "Toujeo";
QnsEng[19][6] = "Tresiba";
QnsEng[19][7] = "Human Premix (Lansulin)";
QnsEng[19][8] = "Humalog Mix 50";
QnsEng[19][9] = "Humalog Mix 30";
QnsEng[19][10] = "NovoMix 30";
QnsEng[19][11] = "Regular";
QnsEng[19][12] = "Apidra";
QnsEng[19][13] = "Humalog";
QnsEng[19][14] = "Novorapid";
QnsEng[19][15] = "Victoza";
QnsEng[19][16] = "Local Liraglutide ";
QnsEng[19][17] = "Trulicity";
QnsEng[19][18] = "Other injections";

//C1
QnsEng[20] = new Array(1);
QnsEng[20][0] = "C1. Which of these products are you using currently for <font color='#faebd7'>MA. READ OUT OPTIONS FROM GRID 3. RECORD RESPONSES IN GRID 3.</font>";

//C2
QnsEng[21] = new Array(7);
QnsEng[21][0] = "C2. How often do you need to inject <font color='orange' > XXXXX </font> for your diabetes treatment? <font color='#faebd7'>SA PER BRAND. IF REQUIRED, READ OUT OPTIONS FROM GRID BELOW. RECORD RESPONSES IN GRID 3, USING THE GRID GIVEN HERE</font>";
QnsEng[21][1] = "More than three times daily";
QnsEng[21][2] = "Thrice daily";
QnsEng[21][3] = "Twice daily";
QnsEng[21][4] = "Once daily";
QnsEng[21][5] = "Less than once daily (e.g. every other day, once a week, etc.)";
QnsEng[21][6] = "As and when required";

//C3
QnsEng[22] = new Array(1);
QnsEng[22][0] = "C3. What is the current dosage for <font color='orange' > XXXXX </font> in international units? <font color='#faebd7'>RECORD VERBATIM PER BRAND. RECORD RESPONSES IN GRID 3.IN INTERNATIONAL UNIT (IU).</font>";

//C4
QnsEng[23] = new Array(7);
QnsEng[23][0] = "C4. Since how long have you been using <font color='orange' > XXXXX </font> for your treatment?<font color='#faebd7'> A PER BRAND. IF REQUIRED, READ OUT OPTIONS FROM GRID BELOW. RECORD RESPONSES IN GRID 3, USING THE GRID GIVEN HERE</font>";
QnsEng[23][1] = "Less than one month";
QnsEng[23][2] = "One to three months";
QnsEng[23][3] = "Three to six months";
QnsEng[23][4] = "Six months to one year";
QnsEng[23][5] = "One to two years";
QnsEng[23][6] = "More than two years";

//C5
QnsEng[24] = new Array(1);
QnsEng[24][0] = "C5. Out of all the dosages in a month, which you are supposed to inject, how many times roughly in a month do you forget to inject your dose of <font color='orange' > XXXXX </font> ? <font color='#faebd7'>RECORD VERBATIM IN WHOLE NUMBERS. IF NEVER, RECORD AS 0. <br> </br><font color='#faebd7'>REPEAT C2 TO C5 FOR NEXT BRAND CODED IN C1.</font>";

//F1
QnsEng[25] = new Array(6);
QnsEng[25][0] = "F1. In the past 1 year, how many times has the brand of your injectable medications changed?We would like to know, if there was a change in the brand of injection.<font color='#faebd7'> SA </font>";
QnsEng[25][1] = "Never";
QnsEng[25][2] = "Changed before 1 year";
QnsEng[25][3] = "Once";
QnsEng[25][4] = "Twice";
QnsEng[25][5] = "Three or more times";

//F2
QnsEng[26] = new Array(14);
QnsEng[26][0] = "F2. When was the last change made? Please specify the exact month. <font color='#faebd7'>SA </font>";
QnsEng[26][1] = "Farvardin";
QnsEng[26][2] = "Ordibehesht";
QnsEng[26][3] = "Khordad";
QnsEng[26][4] = "Tir";
QnsEng[26][5] = "Mordad";
QnsEng[26][6] = "Shahrivar";
QnsEng[26][7] = "Mehr";
QnsEng[26][8] = "Abban";
QnsEng[26][9] = "Azzar";
QnsEng[26][10] = "Dey"
QnsEng[26][11] = "Bahman";
QnsEng[26][12] = "Esfand";
QnsEng[26][13] = "Do not recall / Not sure";

//F3
QnsEng[27] = new Array(1);
QnsEng[27][0] = "F3. So before your current medication started, which medication were you on for your treatment? <font color='#faebd7'><br><br> READ OUT OPTIONS. CODE IN GRID BELOW <br> IF RESPONDENT MENTIONS THAT THERE IS NO CHANGE IN BRAND, AND ONLY CHANGE IN DOSAGE, THEN CODE THE SAME BRAND AS BEING USED NOW IN C1.</font> ";

//F4
QnsEng[28] = new Array(5);
QnsEng[28][0] = "F4. What was the reason for this change in medication of injectable insulin? <font color='#faebd7'>MA. IF REQUIRED, READ OUT OPTIONS.</font> ";
QnsEng[28][1] = "Physician's decision";
QnsEng[28][2] = "Pharmacy's recommendation";
QnsEng[28][3] = "Personal Request";
QnsEng[28][4] = "None of the above";

//F5-F6
QnsEng[29] = new Array(13);
QnsEng[29][0] = "CHANGE IN REGIMEN ";
QnsEng[29][1] = "Basal only";
QnsEng[29][2] = "GLP-1 only";
QnsEng[29][3] = "Premix only";
QnsEng[29][4] = "Short acting only";
QnsEng[29][5] = "Basal + Premix";
QnsEng[29][6] = "Basal + Short acting";
QnsEng[29][7] = "Basal + GLP-1";
QnsEng[29][8] = "Premix + Short acting";
QnsEng[29][9] = "Premix + GLP-1";
QnsEng[29][10] = "Short acting + GLP-1";
QnsEng[29][11] = "Basal + Short acting + GLP-1";
QnsEng[29][12] = "Others";


//G1
QnsEng[30] = new Array(7);
QnsEng[30][0] = "G1. How many times did you measure HbA1C in the last year? <font color='#faebd7'> SA. IF REQUIRED, READ OUT OPTIONS FROM GRID BELOW.</font>";
QnsEng[30][1] = "Less than once a year";
QnsEng[30][2] = "Once";
QnsEng[30][3] = "Twice";
QnsEng[30][4] = "Thrice / 3 times";
QnsEng[30][5] = "Four times";
QnsEng[30][6] = "More than Four times";

//G2_intro
QnsEng[31] = new Array(10);
QnsEng[31][0] = 'With regards to <u>"Glucose in fasting" </u> and <u>"Glucose postprandial" </u>: Capture the last data from patient, considering last measurement that is available.If self-captured or obtained by a lab, record the last measured data. ';
QnsEng[31][1] = 'With regards to <u>"HbA1C": </u> If patient does not have access to this data:';
QnsEng[31][2] = "Ask for possibility to reconnect, in order to allow them sometime to obtain the test and provide us with the latest measured records.";
QnsEng[31][3] = "If so, ask for a suitable time to call back and record the same with your supervisor after the call is completed.";
QnsEng[31][4] = "Recorded available time";
QnsEng[31][5] = "Date";
QnsEng[31][6] = "In mg/dl";
QnsEng[31][7] = "In %";
QnsEng[31][8] = "In mg/dl";
QnsEng[31][9] = "We would like to know about your most recent reading.";
//C2-Heading
QnsEng[31][10] = "We would like to know how many times and how much dosage you use of these products.";
//G2
QnsEng[31][11] = "REPEAT G2 FOR ALL 3 MEASUREMENTS IN GRID 5. ONE MEASUREMENT AT A TIME.";
QnsEng[31][12] = "CONSIDER ONE MEASUREMENT. ASK G2. ";
QnsEng[31][13] = "THEN ASK FOR NEXT MEASUREMENT.";

//G2
QnsEng[32] = new Array(4);
QnsEng[32][0] = "G2. For ----- <font color='#faebd7'>(READ OUT OPTION) </font>,  what was the most recent reading? <font color='#faebd7'>RECORD VERBATIM. RECORD RESPONSES. </font>";
QnsEng[32][1] = "Glucose in fasting";
QnsEng[32][2] = "HbA1C Haemoglobin A1C ";
QnsEng[32][3] = "Glucose postprandial Glucose after eating(2 hours)";

//G3
QnsEng[33] = new Array(7);
QnsEng[33][0] = "G3. At the time of insulin injection initiation what was your HbA1C? <font color='#faebd7'>RECORD VERBATIM </font> ";
QnsEng[33][1] = "HbA1C Haemoglobin A1C "; 
QnsEng[33][2] = "I don't remember ";

//G4
QnsEng[34] = new Array(8);
QnsEng[34][0] = "G4. How often do you visit your physician <font color='#faebd7'>SA. IF REQUIRED, READ OUT OPTIONS. </font>";
QnsEng[34][1] = "Once a month or less than once a month";
QnsEng[34][2] = "Once in 2 months";
QnsEng[34][3] = "Once in 3 months";
QnsEng[34][4] = "Once in 4 to 6 months";
QnsEng[34][5] = "Once in 7 months to a year";
QnsEng[34][6] = "Whenever required, no fixed schedule";
QnsEng[34][7] = "Once my medication is over I go for a review";


//D1
QnsEng[35] = new Array(9);
QnsEng[35][0] = "D1. What type of insurance do you have?<font color='#faebd7'> MA. READ OUT OPTIONS </font>";
QnsEng[35][1] = "SSO";
QnsEng[35][2] = "IHIO (Khadamate Darmani)(Health insurance, rural insurance)";
QnsEng[35][3] = "Military";
QnsEng[35][4] = "Seda o Sima";
QnsEng[35][5] = "Naft";
QnsEng[35][6] = "Banks";
QnsEng[35][7] = "Others";
QnsEng[35][8] = "None";


//D2
QnsEng[36] = new Array(1);
QnsEng[36][0] = "D2. What is you height? (in centimetres ) <font color='#faebd7'>RECORD VERBATIM.IF MENTIONED IN FEET & INCHES, CONVERT 1 FEET = 12 INCHES, 1 INCH = 2.54 CMS. </font>";

//D3
QnsEng[37] = new Array(1);
QnsEng[37][0] = "D3. What is your weight? (in kilograms). <font color='#faebd7'> RECORD VERBATIM. </font>";

QnsEng[38] = new Array(5);
QnsEng[38][1] = "Height";
QnsEng[38][2] = "In cms";
QnsEng[38][3] = "Weight";
QnsEng[38][4] = "In kgs";

//S12 _QUOTA
QnsEng[39] = new Array(13);
QnsEng[39][0] = "";
QnsEng[39][1] = "Fresh, Type 1, New & Existing, Male";
QnsEng[39][2] = "Fresh, Type 1, New & Existing, Female";
QnsEng[39][3] = "Fresh, Type 2, New, Male";
QnsEng[39][4] = "Fresh, Type 2, New, Female";
QnsEng[39][5] = "Fresh, Type 2, Existing, Male";
QnsEng[39][6] = "Fresh, Type 2, Existing, Female";
QnsEng[39][7] = "Carried, Type 1, New & Existing, Male & Female";
QnsEng[39][8] = "Fresh, Type 1, New & Existing, Male & Female";
QnsEng[39][9] = "Carried, Type 2, New, Male & Female";
QnsEng[39][10] = "Fresh, Type 2, New, Male & Female";
QnsEng[39][11] = "Carried, Type 2, Existing, Male & Female";
QnsEng[39][12] = "Fresh, Type 2, Existing, Male & Female";

//S12-Column Name
QnsEng[40] = new Array(6);
QnsEng[40][0] = "";
QnsEng[40][1] = "MONTH";
QnsEng[40][2] = "CODES IN S11";
QnsEng[40][3] = "DEFINITION";
QnsEng[40][4] = "SAMPLE SIZE";
QnsEng[40][5] = "CODE";

//SEC-8
QnsEng[41] = new Array(8);
QnsEng[41][0] = "SEC8 - Total monthly household income";
QnsEng[41][1] = "Below 1,200,000 Tomans";
QnsEng[41][2] = "Between 1,200,001 and 2,000,000 Tomans";
QnsEng[41][3] = "Between 2,000,001 and 3,000,000 Tomans";
QnsEng[41][4] = "Between 3,000,001 and 4,000,000 Tomans";
QnsEng[41][5] = "Between 4,000,001 and 6,000,000 Tomans";
QnsEng[41][6] = "Between 6,000,001 and 12,000,000 Tomans";
QnsEng[41][7] = "Above 12,000,001 Tomans";

//Arab
QnsArab[0] = new Array(13);
QnsArab[0][0] = "سال";
QnsArab[0][1] = "ماه ها";
QnsArab[0][2] = "مراکز";
QnsArab[0][3] = "مشخصات  پاسخگو";
QnsArab[0][4] = "نام:";
QnsArab[0][5] = "شماره تلفن:";
QnsArab[0][6] = "تاریخ مصاحبه";
QnsArab[0][7] = "نام و کد  مصاحبه کننده";
QnsArab[0][8] = "نام و کد سرپرست";
QnsArab[0][9] = "کد کدگذار";
QnsArab[0][10] = "تصادفی";
QnsArab[0][11] = "تقویت کننده";
QnsArab[0][12] = "ماه ها";
QnsArab[0][13] = "سال ها";
QnsArab[0][14] = "هفته ها";
QnsArab[0][15] = "بازرسی های کنترل کیفیت";
QnsArab[0][16] = "نظارت بر تماس";
QnsArab[0][17] = "بررسی دوباره- تلفنی";
QnsArab[0][18] = "بازبینی منطقی";
QnsArab[0][19] = "پاسخگو پیشین";
QnsArab[0][20] = "پاسخگو جدید";
QnsArab[0][21] = "معرفی";

//Month List
QnsArab[1] = new Array(13);
QnsArab[1][0] = "Please select month";
QnsArab[1][1] = "January";
QnsArab[1][2] = "February";
QnsArab[1][3] = "March";
QnsArab[1][4] = "April";
QnsArab[1][5] = "May";
QnsArab[1][6] = "June";
QnsArab[1][7] = "July";
QnsArab[1][8] = "August";
QnsArab[1][9] = "September";
QnsArab[1][10] = "October";
QnsArab[1][11] = "November";
QnsArab[1][12] = "December";

//Cente List
QnsArab[2] = new Array(11);
QnsArab[2][0] = "Pleased select center";
QnsArab[2][1] = "تهران";
QnsArab[2][2] = "خراسان رضوی";
QnsArab[2][3] = "اصفهان";
QnsArab[2][4] = "فارس";
QnsArab[2][5] = "آذربایجان شرقی";
QnsArab[2][6] = "خوزستان";
QnsArab[2][7] = "مازندران";
QnsArab[2][8] = "کرمان";
QnsArab[2][9] = "البرز";
QnsArab[2][10] = "آذربایجان غربی";


QnsArab[3] = new Array(2);
QnsArab[3][0] = "سلام من ............. هستم ، از شرکت مشاورین بازاریابی جستجو طلائی تماس میگیرم ، که یک آژانس تحقیقات بازار است، ما در حال حاضر درحال انجام  یک تحقیق در مورد دیابت در بازار ایران هستیم ،  و اگر اجازه بدهید می خواهیم از اطلاعات و تجربیات شما در مورد دیابت چند سوال بپرسیم. ";
QnsArab[3][1] = "ما به طور تصادفی تعدادی از افراد را انتخاب می کنیم و این اطمینان را به شما می دهیم که تمام اطلاعات جمع آوری شده برای اهداف آماری استفاده می شود و در سطح فردی مشاهده نخواهد شد . آیا می توانید چند دقیقه وقت بگذارید تا با ما صحبت کنید؟ این مصاحبه حدود XX دقیقه طول می کشد.  ";


QnsArab[4] = new Array(4);
QnsArab[4][0] = "";
QnsArab[4][1] = "بله،میتوانم الان به سؤالات پاسخ دهم";
QnsArab[4][2] = "نه، بعدا میتوانم پاسخگو باشم";
QnsArab[4][3] = "علاقه ای به انجام مصاحبه ندارم";

QnsArab[5] = new Array(2);
QnsArab[5][0] = "آیا می توانید یک زمان مناسب را مشخص کنید تا بتوانم بعدا تماس بگیرم؟";
QnsArab[5][1] = "روز و ساعت";

//S1
QnsArab[6] = new Array(3);
QnsArab[6][0] = "S1. <font color='#faebd7'>نبپرسید. با بانک اطلاعات بررسی کنید. </font>  نوع پاسخگو<font color='#faebd7'> تک پاسخی. </font>";
QnsArab[6][1] = "منتقل شده، در نظر سنجی گذشته پاسخ داده است";
QnsArab[6][2] = "پاسخگوی جدید، پاسخ دادن به نظرسنجی برای اولین بار ";

//S2
QnsArab[7] = new Array(4);
QnsArab[7][0] = "S2. آیا شما در حال حاضر مبتلا به دیابت هستید؟ <font color='#faebd7'> در صورت ضرورت، گزینه ها را بخوانید.تک پاسخی</font> ";
QnsArab[7][1] = "بله، من در حال حاضر دیابت دارم و تحت درمان هستم";
QnsArab[7][2] = "دیابت من تشخیص داده شده است، اما تحت درمان نیستم";
QnsArab[7][3] = "نه، من دیابت ندارم";

//S3
QnsArab[8] = new Array(4);
QnsArab[8][0] = "S3. چه نوع دیابتی دارید؟ <font color='#faebd7'>در صورت ضرورت،  گزینه ها را بخوانید. تک پاسخی </font>";
QnsArab[8][1] = "نوع 1";
QnsArab[8][2] = "نوع 2";
QnsArab[8][3] = "موارد دیگر (مانند دیابت بارداری)";

//S4
QnsArab[9] = new Array(3);
QnsArab[9][0] = "S4. در 2 سال گذشته، آیا در رابطه با دیابت خود، در مورد دارو و دوز آن به پزشک مراجعه کرده اید؟  <font color='#faebd7'> تک پاسخی</font>";
QnsArab[9][1] = "بله";
QnsArab[9][2] = "خیر";

//S5
QnsArab[10] = new Array(5);
QnsArab[10][0] = "S5. در حال حاضر تحت درمان چه نوع دارویی برای درمان دیابت هستید؟  <font color='#faebd7'> در صورت ضرورت، گزینه ها را بخوانید. تک پاسخی</font>";
QnsArab[10][1] = "فقط تزریقی";
QnsArab[10][2] = "فقط قرص های خوراکی";
QnsArab[10][3] = "هر دو، تزریقی و قرص های خوراکی";
QnsArab[10][4] = "هیچکدام، هیچکدام از داروها را در حال حاضر مصرف نمیکند";

//S6
QnsArab[11] = new Array(1);
QnsArab[11][0] = "S6. چه مدت است تشخیص داده شده است که شما دیابت دارید؟ لطفا به سال و ماه ذکر کنید <br><br><font color='#faebd7'> کلمه به کلمه ثبت شود. در موارد بیش از 2 سال، ماه ها اختیاری است. </font>";

//S7
QnsArab[12] = new Array(1);
QnsArab[12][0] = "S7. چه مدت زمانی است که از انسولین تزریقی استفاده میکنید؟ لطفا به سال، ماه و هفته ذکر کنید. <br><br> <font color='#faebd7'>کلمه به کلمه ثبت شود. <br>هفته ها اختیاری است <br>در موارد بیش از 2 سال، ماه و هفته ها  اختیاری است. <br > در موارد بیش از 2 ماه، هفته ها  اختیاری است.</font>";

//S8
QnsArab[13] = new Array(3);
QnsArab[13][0] = "S8.	نپرسید، کد S7 را بررسی کنید.   نوع بیمار <font color='#faebd7'> تک پاسخی. </font>";
QnsArab[13][1] = "کمتر از 12 ماه ";
QnsArab[13][2] = "بیش از یا برابر با 12 ماه / 1 سال";
QnsArab[13][3] = "بیمار جدید";
QnsArab[13][4] = "بیمار کنونی";

//S9
QnsArab[14] = new Array(3);
QnsArab[14][0] = "S9. 	نپرسید . جنسیت را ثبت کنید. تک پاسخی";
QnsArab[14][1] = "مرد";
QnsArab[14][2] = "زن";

//S10
QnsArab[15] = new Array(6);
QnsArab[15][0] = "S10. نپرسید. طبقه اجتماعی را در اینجا کد کنید. تک پاسخی";
QnsArab[15][1] = "A";
QnsArab[15][2] = "B";
QnsArab[15][3] = "C";
QnsArab[15][4] = "D";
QnsArab[15][5] = "E";

//S11
QnsArab[16] = new Array(1);
QnsArab[16][0] = "S11. <font color='#faebd7'>نپرسید. بررسی کنید. کد کنید. </font>  نوع پنل .<font color='#faebd7'> تک پاسخی. </font>";

//S12
QnsArab[17] = new Array(1);
QnsArab[17][0] = "S12. <font color='#faebd7'>نپرسید. در S11 بررسی کنید. کد کنید.  </font> سهمیه را بررسی کنید<font color='#faebd7'>.  تک پاسخی. </font>";

//S13
QnsArab[18] = new Array(7);
QnsArab[18][0] = "S13.  شما در کدام گروه سنی هستید؟   <font color='#faebd7'>   تک پاسخی . تعداد سهمیه  </font>";
QnsArab[18][1] = "زیر 35 سال";
QnsArab[18][2] = "35 تا 55 سال";
QnsArab[18][3] = "بالای 55 سال";
QnsArab[18][4] = "جوان بالغ";
QnsArab[18][5] = "میانسال";
QnsArab[18][6] = "مسن";

//Brandlist
QnsArab[19] = new Array(7);
QnsArab[19][0] = "";
QnsArab[19][1] = "NPH";
QnsArab[19][2] = "Lantus";
QnsArab[19][3] = "Levemir";
QnsArab[19][4] = "Abasaglar";
QnsArab[19][5] = "Toujeo";
QnsArab[19][6] = "Tresiba";
QnsArab[19][7] = "Human Premix (Lansulin)";
QnsArab[19][8] = "Humalog Mix 50";
QnsArab[19][9] = "Humalog Mix 30";
QnsArab[19][10] = "NovoMix 30";
QnsArab[19][11] = "Regular";
QnsArab[19][12] = "Apidra";
QnsArab[19][13] = "Humalog";
QnsArab[19][14] = "Novorapid";
QnsArab[19][15] = "Victoza";
QnsArab[19][16] = "Local Liraglutide ";
QnsArab[19][17] = "Trulicity";
QnsArab[19][18] = "Other injections";

//C1
QnsArab[20] = new Array(1);
QnsArab[20][0] = "C1.	کدام یک از این محصولات را در حال حاضر استفاده میکنید؟  <font color='#faebd7'>چند پاسخی. گزینه ها را از جدول 3 بخوانید. پاسخ ها را در جدول 3 ثبت کنید.</font>";

//C2
QnsArab[21] = new Array(7);
QnsArab[21][0] = "C2.	چندبار به تزریق <font color='orange' > XXXXX </font> برای درمان دیابت خود نیاز دارید؟ <font color='#faebd7'>تک پاسخی برای هر برند. در صورت ضرورت، گزینه ها را از جدول زیر بخوانید. پاسخ هارا در جدول3 ثبت کنید، از جدول ارائه شده در اینجا استفاده کنید.</font>";
QnsArab[21][1] = "بیش از سه بار در روز";
QnsArab[21][2] = "سه بار در روز";
QnsArab[21][3] = "دو بار در روز";
QnsArab[21][4] = "یک بار در روز";
QnsArab[21][5] = "کمتر از یکبار در روز  (به عنوان مثال: یک روز در میان، یکبار در هفته، ...)";
QnsArab[21][6] = "در صورت و زمان لازم";

//C3
QnsArab[22] = new Array(1);
QnsArab[22][0] = "C3. دوز مصرفی کنونی شما برای <font color='orange' > XXXXX </font> چند واحد است؟ <font color='#faebd7'>ببرای هر برند ثبت کنید. پاسخ را در جدول 3 ثبت کنید. در مقیاس واحد بین المللی (IU)</font>";

//C4
QnsArab[23] = new Array(7);
QnsArab[23][0] = "C4.	چه مدتی است که از <font color='orange' > XXXXX </font> برای درمانتان استفاده میکنید؟<font color='#faebd7'> برای هر برند، در صورت ضرورت، گزینه های جدول زیر را بخوانید. پاسخ ها را در جدول 3 ثبت کنید . از جدول ارائه شده در اینجا استفاده کنید.</font>";
QnsArab[23][1] = "کمتر از یک ماه";
QnsArab[23][2] = "یک تا سه ماه";
QnsArab[23][3] = "سه ماه تا شش ماه";
QnsArab[23][4] = "شش ماه تا یک سال";
QnsArab[23][5] = "یک تا دو سال";
QnsArab[23][6] = "بیشتر از دو سال";

//C5
QnsArab[24] = new Array(1);
QnsArab[24][0] = "C5.به صورت میانگین در یک ماه چند دوز از تزریق <font color='orange' > XXXXX </font> را فراموش کرده اید؟  <font color='#faebd7'> <br><br> تمام ارقام را کلمه به کلمه ثبت کنید.اگر هیچ وقت ذکر شد 0 را ثبت کنید.</font>";

//F1
QnsArab[25] = new Array(6);
QnsArab[25][0] = "F1.	در یک سال گذشته، چند بار برند داروهای تزریقی شما عوض شده است؟ ما میخواهیم بدانیم که آیا برند داروی تزریقی شما تغییر کرده است؟<font color='#faebd7'>  تک پاسخی. </font>";
QnsArab[25][1] = "هرگز";
QnsArab[25][2] = "پیش از یک سال تغییر کرده است";
QnsArab[25][3] = "یکبار";
QnsArab[25][4] = "دوبار";
QnsArab[25][5] = "سه بار یا بیشتر";

//F2
QnsArab[26] = new Array(14);
QnsArab[26][0] = "F2.	زمان آخرین تغییری که انجام شده است کی بوده؟ لطفا ماه دقیق را مشخص کنید.  <font color='#faebd7'> تک پاسخی.</font>";
QnsArab[26][1] = "فروردین";
QnsArab[26][2] = "اردیبهشت";
QnsArab[26][3] = "خرداد";
QnsArab[26][4] = "تیر";
QnsArab[26][5] = "مرداد";
QnsArab[26][6] = "شهریور";
QnsArab[26][7] = "مهر";
QnsArab[26][8] = "آبان";
QnsArab[26][9] = "آذر";
QnsArab[26][10] = "دی"
QnsArab[26][11] = "بهمن";
QnsArab[26][12] = "اسفند";
QnsArab[26][13] = "به یاد ندارد / اطمینان ندارد";

//F3
QnsArab[27] = new Array(1);
QnsArab[27][0] = "F3.	بنابراین قبل از اینکه شروع به داروهای فعلی خود کنید، چه داروهایی در درمان شما بوده است؟ <font color='#faebd7'><br><br> چند پاسخی. گزینه ها را بخوانید. در جدول زیر کد کنید.<br> اگر پاسخگو اشاره کرد که هیچ تغییری در برند وجود نداشته است و تنها دوز دارو تغییر کرده است، سپس کد مشابه در C1 را برای این سوال نیز استفاده کنید.</font> ";

//F4
QnsArab[28] = new Array(5);
QnsArab[28][0] = "F4.	علت این تغییر در داروی انسولین تزریقی چیست؟  <font color='#faebd7'>چند پاسخی. در صورت ضرورت، گزینه ها را بخوانید.</font> ";
QnsArab[28][1] = "تصمیم پزشک";
QnsArab[28][2] = "توصیه داروساز";
QnsArab[28][3] = "درخواست شخصی";
QnsArab[28][4] = "هیچکدام از موارد بالا";

//F5-F6
QnsArab[29] = new Array(13);
QnsArab[29][0] = "تغییر در رژیم";
QnsArab[29][1] = "انسولین پایه به تنهایی";
QnsArab[29][2] = "اینکرتین ها به تنهایی";
QnsArab[29][3] = "انسولین میکس به تنهایی";
QnsArab[29][4] = "انسولین هنگام غذا به تنهایی";
QnsArab[29][5] = "انسولین پایه + انسولین  میکس";
QnsArab[29][6] = "انسولین پایه + انسولین هنگام غذا";
QnsArab[29][7] = "انسولین پایه + اینکرتین ";
QnsArab[29][8] = "انسولین میکس+ انسولین هنگام غذا";
QnsArab[29][9] = "انسولین میکس + اینکرتین";
QnsArab[29][10] = "انسولین هنگام غذا + اینکرتین";
QnsArab[29][11] = "انسولین پایه + انسولین هنگام غذا + اینکرتین";
QnsArab[29][12] = "موارد دیگر";


//G1
QnsArab[30] = new Array(7);
QnsArab[30][0] = "G1.	در یک سال اخیر چند بار HbA1C (قند خون سه ماهه) را اندازه گیری کرده اید؟  <font color='#faebd7'> تک پاسخی .در صورت ضرورت، گزینه ها را از جدول زیر بخوانید.</font>";
QnsArab[30][1] = "بیشتر از یکسال است اندازه گیری نکرده ام";
QnsArab[30][2] = "یکبار";
QnsArab[30][3] = "دو بار";
QnsArab[30][4] = "سه بار";
QnsArab[30][5] = "چهار بار";
QnsArab[30][6] = "بیش از چهار بار";

//G2_intro
QnsArab[31] = new Array(11);
QnsArab[31][0] = 'در مورد <u>"قند ناشتا"</u> و <u>"قند پس از غذا"</u>، اگر بیمار خودش قند خون را اندازه گیری کرده و آزمایش خون از اندازه گیری ها که جدیدتر بود همان ثبت شود.';
QnsArab[31][1] = 'برای<u> HbA1C </u>اگر بیمار به این داده دسترسی نداشت: ';
QnsArab[31][2] = "	از وی خواسته شود که جواب آزمایش را آماده کند ";
QnsArab[31][3] = "	پرسشگر مجددا تماس بگیرد و این داده را ثبت کند.";
QnsArab[31][4] = "	قرار مجدد را ثبت کنید: تاریخ";
QnsArab[31][5] = "ساعت";
QnsArab[31][6] = "به mg/dl";
QnsArab[31][7] = "به %";
QnsArab[31][8] = "به mg/dl";
QnsArab[31][9] = "ما میخواهیم در مورد آخرین اندازه گیری قند خون شما بدانیم.";
//C2-Heading
QnsArab[31][10] = "ما مایلیم تا بدانیم که شما چند بار و چند دوز از این محصولات را استفاده می کنید.";
//G2
QnsArab[31][11] = "G2 را برای هر 3 اندازه گیری در جدول 5 تکرار کنید. هر اندازه گیری را تک به تک ثبت کنید.";
QnsArab[31][12] = "یک اندازه گیری را در نظر بگیرید. G2 را بپرسید.";
QnsArab[31][13] = "سپس برای اندازه گیری بعدی بپرسید";

//G2
QnsArab[32] = new Array(4);
QnsArab[32][0] = "G2. برای ______ <font color='#faebd7'>(گزینه را بخوانید)،  </font> آخرین میزان اندازه گیری چقدر بوده است؟  <font color='#faebd7'> کلمه به کلمه ثبت کنید. پاسخ ها را در جدول </font>";
QnsArab[32][1] = "قند خون ناشتا";
QnsArab[32][2] = "HbA1C (قند خون سه ماهه) Haemoglobin A1C";
QnsArab[32][3] = "قند خون بعد از غذا (2 ساعته)";

//G3
QnsArab[33] = new Array(7);
QnsArab[33][0] = "G3. 	در زمان شروع تزریق انسولین میزان HbA1C (قند خون سه ماهه) شما چقدر بوده است؟  <font color='#faebd7'>کلمه به کلمه ثبت شود.</font> ";
QnsArab[33][1] = "HbA1C Haemoglobin A1C "; 
QnsArab[33][2] = "به یاد ندارم ";

//G4
QnsArab[34] = new Array(8);
QnsArab[34][0] = "G4. هرچند وقت یکبار شما پزشک خود را ملاقات میکنید؟ <font color='#faebd7'> تک پاسخی. در صورت نیاز، گزینه ها را بخوانید. </font>";
QnsArab[34][1] = "یکبار در ماه یا زودتر از یکبار در ماه";
QnsArab[34][2] = "2 ماه یکبار";
QnsArab[34][3] = "3 ماه یکبار";
QnsArab[34][4] = "4 تا 6 ماه یکبار";
QnsArab[34][5] = "1 بار در 7 ماه تا 1 سال";
QnsArab[34][6] = "هر وقت که ضرورت داشته باشد / برنامه ثابتی ندارد";
QnsArab[34][7] = "زمانی که داروی تجویز شده من تمام میشود من دوباره مراجعه میکنم";


//D1
QnsArab[35] = new Array(9);
QnsArab[35][0] = "D1. 	چه نوع بیمه ای دارید؟ <font color='#faebd7'> چند پاسخی. گزینه ها را بخوانید. </font>";
QnsArab[35][1] = "تامین اجتماعی";
QnsArab[35][2] = "خدمات درمانی (بیمه سلامت، بیمه روستایی)";
QnsArab[35][3] = "نیروهای مسلح";
QnsArab[35][4] = "صدا و سیما";
QnsArab[35][5] = " نفت";
QnsArab[35][6] = "بانک ها";
QnsArab[35][7] = " موارد دیگر";
QnsArab[35][8] = "هیچکدام";


//D2
QnsArab[36] = new Array(1);
QnsArab[36][0] = "D2.	قد شما چقدر است؟ (به سانتی متر) <font color='#faebd7'>کلمه به کلمه ثبت کنید. اگر به فوت یا اینچ ذکر شد، هر 1 فوت = 12 اینچ، هر 1 اینچ = 2.54 سانتی متر تبدیل کنید.</font>";

//D3
QnsArab[37] = new Array(1);
QnsArab[37][0] = "D3.	وزن شما چقدر است؟ (به کیلوگرم).  <font color='#faebd7'> کلمه به کلمه ثبت کنید. </font>";

QnsArab[38] = new Array(5);
QnsArab[38][1] = "قد";
QnsArab[38][2] = "به سانتی متر";
QnsArab[38][3] = "وزن";
QnsArab[38][4] = "به کیلوگرم";

//S12 _QUOTA
QnsArab[39] = new Array(13);
QnsArab[39][0] = "";
QnsArab[39][1] = "پاسخگو جدید، نوع 1، بیمار جدید و کنونی، مرد";
QnsArab[39][2] = "پاسخگو جدید، نوع 1، بیمار جدید و کنونی ، زن";
QnsArab[39][3] = "پاسخگو جدید، نوع 2، بیمار جدید، مرد";
QnsArab[39][4] = "پاسخگو جدید، نوع 2، بیمار جدید، زن";
QnsArab[39][5] = "پاسخگو جدید، نوع 2، بیمار کنونی، مرد";
QnsArab[39][6] = "پاسخگو جدید، نوع 2، بیمار کنونی ، زن";
QnsArab[39][7] = "پاسخگو پیشین، نوع 1، بیمار جدید و کنونی ، مرد و زن";
QnsArab[39][8] = "پاسخگو جدید، نوع 1، بیمار جدید و کنونی، مرد و زن";
QnsArab[39][9] = "پاسخگو پیشین، نوع 2، بیمار جدید، مرد و زن";
QnsArab[39][10] = "پاسخگو جدید، نوع 2، بیمار جدید، مرد و زن";
QnsArab[39][11] = "پاسخگو پیشین، نوع 2، بیمار کنونی ، مرد و زن";
QnsArab[39][12] = "پاسخگو جدید، نوع 2، بیمار کنونی ، مرد و زن";

//S11-Column Name
QnsArab[40] = new Array(6);
QnsArab[40][0] = "";
QnsArab[40][1] = "ماه";
QnsArab[40][2] = "کدهای S11";
QnsArab[40][3] = "تعریف";
QnsArab[40][4] = "اندازه ی سهمیه";
QnsArab[40][5] = "کد";

//SEC-8
QnsArab[41] = new Array(8);
QnsArab[41][0] = "SEC 8: میزان درآمد ماھیانھ خانوار شما چقدراست؟ ";
QnsArab[41][1] = "زیر 1،200،000 تومان";
QnsArab[41][2] = "بین 1،200،001 تا 2،000،000 تومان";
QnsArab[41][3] = "بین 2،000،001 تا 3،000،0000 تومان";
QnsArab[41][4] = "بین 3،000،001 تا 4،000،000 تومان";
QnsArab[41][5] = "بین 4،000،001 تا 6،000،000 تومان";
QnsArab[41][6] = "بین 6،000،001 تا 12،000،000 تومان";
QnsArab[41][7] = "بالای 12،000،001 تومان";


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