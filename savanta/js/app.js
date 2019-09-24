$(document).ready(function(){
  //$('html').prop('lang',"ar");
  /*$('html').prop('dir',"rtl");
  $('tr td:first-child').css('text-align', 'right');
  $('link[href="css/bootstrap.min.css"]').prop('href', 'css/bootstrap-rtl.min.css');
  GetLang(2);*/


       $('body').on('keydown',".textonly",function (e) {
     
         var key = e.keyCode;
              if (!((key == 8 || key == 9 ) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                  e.preventDefault();
              }
       });

       $('body').on('keypress',".remspecchar",function (e) {
     
          if (e.which == 39 ) {
            e.preventDefault();
          }
          
       });

        $('body').on('keypress',".numberonly",function (e) {
     
          if (e.which != 46 && e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            e.preventDefault();
          }
          if(e.target.value.indexOf('.') > -1 && e.which == 46)
            e.preventDefault();
       });

});


var CenterArr=[
["","",""],
["1","1","2"],
["2","3","4"],
["3","5","6"],
["4","7","8"],
["5","9","10"],
["6","11","12"],
["7","13","14"],
["8","15","16"],
["9","17","18"],
["10","19","20"],
];

var QutaArr=[
["S1","S3","S8","S9","Code"] ,
['1',"19","1","1","1","1"] ,
['1',"19","1","1","2","2"] ,
['1',"19","1","2","1","3"] ,
['1',"19","1","2","2","4"] ,
['2',"20","1","1","1","5"] ,
['2',"20","1","1","2","6"] ,
['2',"20","1","2","1","7"] ,
['2',"20","1","2","2","8"] ,
['1',"19","2","1","1","9"] ,
['1',"19","2","1","2","10"] ,
['1',"19","2","2","1","11"] ,
['1',"19","2","2","2","12"] ,
['2',"20","2","1","1","13"] ,
['2',"20","2","1","2","14"] ,
['2',"20","2","2","1","15"] ,
['2',"20","2","2","2","16"] ,

];
var QutaArr12=[
["1",[5, 7],"1","25","1"] ,
["1",[6, 8],"2","25","2"] ,
["1",[13],"3","33","3"] ,
["1",[14],"4","32","4"] ,
["1",[15],"5","135","5"] ,
["1",[16],"6","136","6"] ,
["2-12",[1, 2, 3, 4],"7","10","7"] ,
["2-12",[5, 6, 7, 8],"8","40","8"] ,
["2-12",[9, 10],"9","13","9"] ,
["2-12",[13, 14],"10","52","10"] ,
["2-12",[11, 12],"11","54","11"] ,
["2-12",[15, 16],"12","217","12"] ,
];
var F5Arr=[
["","",""],
["NPH","1","1","Basal"],
["Lantus","2","1","Basal"],
["Levemir","3","1","Basal"],
["Abasaglar","4","1","Basal"],
["Toujeo","5","1","Basal"],
["Tresiba","6","1","Basal"],
["Human Premix (Lansulin)","7","3","Premixes"],
["Humalog Mix 50","8","3","Premixes"],
["Humalog Mix 30","9","3","Premixes"],
["NovoMix 30","10","3","Premixes"],
["Regular","11","4","Short acting"],
["Apidra","12","4","Short acting"],
["Humalog","13","4","Short acting"],
["Novorapid","14","4","Short acting"],
["Victoza","15","2","GLP-1"],
["Local Liraglutide ","16","2","GLP-1"],
["Trulicity","17","2","GLP-1"],
["Other injections","96","5","Others"],
];

var F5arr2=[
["1","1"],
["2","2"],
["3","3"],
["4","4"],
["1,3","5"],
["1,4","6"],
["1,2","7"],
["3,4","8"],
["2,3","9"],
["2,4","10"],
["1,2,4","11"],
["","12"],
];



function createElement(Qpos,Qtype,Qval,appele,classname,min,max)
{
    var ele = '<div class="Ques-box" id="'+Qpos+'">'+
              '<h4 class="bg-success">'+Qval[0]+'</h4>'+
              '<div class="Ans-Box">';

    if(Qtype == "text" || Qtype == "number"){
        ele=ele+'<div class="Ans-list col-md-4">'+
                    ' <input class="form-control '+classname+'" min="" max="" type="'+Qtype+'" name="'+(Qpos)+'"  id="'+(Qpos)+'">'+
                    ' </div>';
    }
    else{
        for(var i=1;i < (Qval.length);i++){
            if(Qtype== "radio"){
                ele=ele+'<div class="Ans-list">'+
                    ' <input class="'+classname+'" type="'+Qtype+'" name="'+(Qpos)+'" id="'+(Qpos)+'_'+i+'" value="'+(i)+'">'+
                    ' <label for="'+(Qpos)+'_'+i+'">'+Qval[i]+'</label>'+
                    ' </div>';
            }
            else if(Qtype== "checkbox"){
                ele=ele+'<div class="Ans-list">'+
                    ' <input class="'+classname+'" type="'+Qtype+'" name="'+(Qpos)+'"  id="'+(Qpos)+'_'+i+'" value="'+(i)+'">'+  //onclick="doClick(this.value)"
                    ' <label for="'+(Qpos)+'_'+i+'">'+Qval[i]+'</label>'+
                    ' </div>';
            }
        }
    }
    
  ele=ele+'</div></div>';
  $(appele).append(ele);
}

function createElement2(Qpos,Qtype,Qval,appele,classname)
{
    var ele = '';

    for(var i=1;i < (Qval.length);i++){
      if(Qtype== "radio"){
          ele=ele+'<div class="Ans-list">'+
              ' <input class="'+classname+'" type="'+Qtype+'" name="'+(Qpos)+'" id="'+(Qpos)+'_'+i+'" value="'+zeroPad(i,3)+'">'+
              ' <label for="'+(Qpos)+'_'+i+'">'+Qval[i]+'</label>'+
              ' </div>';
      }
      else if(Qtype== "checkbox"){
          ele=ele+'<div class="Ans-list">'+
              ' <input class="'+classname+'" type="'+Qtype+'" name="'+(Qpos)+'" onclick="doClick(this.value)" id="'+(Qpos)+'_'+i+'" value="'+zeroPad(i,3)+'">'+
              ' <label for="'+(Qpos)+'_'+i+'">'+Qval[i]+'</label>'+
              ' </div>';
      }

    }
  
  $(appele).append(ele);
}

function createElement1(Qpos,Qtype,Qval,appele,classname) {
      var ele = '<div class="Ques-box table-responsive" id="Q3">'+
              '<h4 class="bg-success">'+Qval[0]+'</h4>'+
              '<table class="table-bordered col-md-8 mt-4"><tbody><tr>'+
              '<td></td>'+
              '<td>Hospital overall</td>'+
              '<td>That you encounter</td></tr>';

    for(var i=1;i < (Qval.length);i++){
          
          ele=ele+'<tr id="row-'+i+'">'+
              ' <td width="60%"><label for="'+(Qpos)+'_'+i+'">'+Qval[i]+'</label></td>'+
              ' <td><input class="'+classname+'" onclick="showOthers("1_'+(i)+')" type="'+Qtype+'"  name="Q5_1" id="Q51_'+(i)+'" value="'+(i)+'"><label for="Q51_'+(i)+'"></label></td>'+
              ' <td><input class="'+classname+'" onclick="showOthers("2_'+(i)+')" type="'+Qtype+'"  name="Q5_2" id="Q52_'+(i)+'" value="'+(i)+'"><label for="Q52_'+(i)+'"></label></td>'+
              ' </tr>'; 
     

    }
  ele=ele+'</tbody></table></div>';
  $(appele).append(ele);
}