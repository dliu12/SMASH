$(document).ready(function(){
   $("#eggname01").toggle();
   $("#eggname02").toggle();
   $("#egg1").toggle();
   $("#egg2").toggle();
   $("#eggCP").toggle();
   $("#winpic").toggle();
   $("#egg11").toggle();
   $("#egg12").toggle();
   $("#egg13").toggle();
   $("#egg21").toggle();
   $("#egg22").toggle();
   $("#egg23").toggle();
   $("#eggCP1").toggle();
   $("#eggCP2").toggle();
   $("#eggCP3").toggle();
   $("#resultwin").toggle();
   $("#buttonSelect").toggle();
   $("#hp").toggle();
   $("#result1").toggle();
   $("#result2").toggle();
   $("#hpegg1").toggle();
   $("#hpegg2").toggle();
   $("#hpeggcp").toggle();
   $("#hpnamecp").toggle();
   $("#hpname1").toggle();
   $("#hpname2").toggle();
   $("#setting").toggle();
   
  
  var startButton = document.createElement("button");
  startButton.innerHTML = "Start";
  $("#button").append(startButton);
 
  $("button").click(function(){
    console.log ("started");
    $("#button").remove();
   
    $("#buttonSelect").delay(50).fadeIn(500); // selecting play mode
        var startButton1 = document.createElement("button");
        startButton1.innerHTML = "Single Player";
        $("#button1").append(startButton1); // single player

        var startButton2 = document.createElement("button");
        startButton2.innerHTML = "Double Player";
        $("#button2").append(startButton2); // double player
      
        //single player mode
        $("#button1").click(function(){
          $("#buttonSelect").remove();
          $("#eggname01").delay(150).fadeIn(1500);

             $("#eggname01").keypress(function(){
             var text = document.getElementById("name").value; 
             if (event.key == 'Enter'){
                 console.log (text);
                 document.getElementById("eggname01").remove();
                 $("#setting").fadeIn(1500);
                 
               
                 $("#setting").keypress(function(){
                   var diff = document.getElementById("difficulty").value;     
                   var pause = 150; 
                   if (diff > -1 && diff < 101){
                        pause = 200 - diff
                        
                    }// check diffulty value
                    else {
                      pause = 150;
                    }  
                //    console.log(pause);
                    if (event.key == 'Enter'){
                         document.getElementById("setting").remove();
                         var userinput1 = document.createTextNode (text); // retrieve user input1 
                         $("#hpname1").append(text +" HP");  
                         $("#egg1").fadeIn(100);
                         $("#egg11").fadeIn(100);
                         $("#eggname1").append(text);
                         $("#eggCP").fadeIn(100);
                         $("#eggCP1").fadeIn(100);
                         $("#hp").fadeIn(500);
                         $("#hpegg1").fadeIn(500);
                         $("#hpeggcp").fadeIn(500);
                         $("#hpnamecp").fadeIn(500);
                         $("#hpname1").fadeIn(500);

                         var hpegg1_val = 100;
                         var hpeggCP_val = 100;
                         $("#remainhp12").fadeIn(100);
                         $("#remainhp1").fadeIn(100);
                         $("#remainhpcp").fadeIn(100);
                         document.getElementById("remainhpcp").style.width = "100%";
                         var current1_val = setInterval(function(){
                            hpegg1_val--;
                            var current1 = hpegg1_val;
                            document.getElementById("remainhp1").style.width = 100-current1 + "%";
                            
                            if (current1 < 66 && current1 >33){
                                $("#egg11").remove();
                                $("#egg12").fadeIn(500);
                              }
                              else if (current1 < 33 && current1 > 1 ){
                                $("#egg12").remove();
                                $("#egg13").fadeIn(500); 
                              }
                             
                              else if (current1 < 1 ){
                                console.log("closed");
                                clearInterval(current1_val);
                                $("#gamespace2").remove();
                                $("#result1").fadeIn(500);
                                $("#result1").html("<h1> AW.You lost. Try harder next time</h1>" );
                            }  // close on count down
                            
                          },pause);//close on auto computer attack

                         document.addEventListener("keyup",function(event){
                        //  console.log("something is being pressed"); 
                         if (event.key == 'w'){ // egg1 attacking
                           // console.log("eggCP is being attacked!");
                           var currentcp = hpeggCP_val--;
                           document.getElementById("remainhpcp").style.width = currentcp+"%";
                           console.log (currentcp);
                            if (currentcp < 66){
                              $("#eggCP1").remove();
                              $("#eggCP2").fadeIn(500);
                            }
                            if (currentcp < 33 ){
                              $("#eggCP2").remove();
                              $("#eggCP3").fadeIn(500);
                            }
                           
    
                           if (currentcp == 0){
                             $("#gamespace2").remove();
                             clearInterval(current1_val);
                             $("#result1").fadeIn(500);
                             $("#result1").html("<h1>"+ text + " WINS!! </h1>" );
                             $("#resultwin").fadeIn(100);
                             $("#winpic").fadeIn(500);
                             
                           }  
                         }
                       }); //close on keyup event 
                     }// close on difficulty selecting 
                 });// keypress for difficulty
                
                 
             }//close on if
           }); // close on eggname keypress
      
        }); //close on button1 click

    
    
        // Double player mode
        $("#button2").click(function(){
          $("#buttonSelect").remove();
          $("#eggname01").delay(150).fadeIn(1500);
          
           $("#eggname01").keypress(function(){
             var text = document.getElementById("name").value; 
             if (event.key == 'Enter'){
                 console.log (text);
                 document.getElementById("eggname01").remove();
                 var userinput1 = document.createTextNode (text); // retrieve user input1
                 $("#eggname02").delay(150).fadeIn(1500);
           
                 $("#eggname02").keypress(function(){
                   var text2 = document.getElementById("name2").value;
                   if (event.key == 'Enter'){
                     console.log(text2);
                     document.getElementById("eggname02").remove();
                     var userinput2 = document.createTextNode(text2); // retrieve user input2
                     $(".userlog").html("<br>"+userinput2);
                     $("#egg1").fadeIn(100);
                     $("#egg11").fadeIn(100);
                     $("#eggname1").append(text);
                     $("#egg2").fadeIn(100);
                     $("#egg21").fadeIn(100);
                     $("#eggname2").append(text2);
                     $("#hp").fadeIn(500);
                     $("#hpname1").append(text + " HP"); 
                     $("#hpname2").append(text2+ " HP"); 
                     $("#hpname1").fadeIn(500); 
                     $("#hpname2").fadeIn(500);  
                     
                     $("#hpegg1").fadeIn(500);
                     $("#hpegg2").fadeIn(500);
                     $("#remainhp12").fadeIn(100);
                     $("#remainhp1").fadeIn(100);
                     $("#remainhp2").fadeIn(100);
                     $("#remainhp22").fadeIn(100);
                     document.getElementById("remainhp2").style.width = "100%";
                     var hpegg1_val = 100;
                     var hpegg2_val = 100;
                     document.addEventListener("keyup",function(event){
                       console.log("Another thing is being pressed!");
                       if (event.key == 'w'){
                         console.log("egg2 is being attacked!");
                         var current2 = hpegg2_val--;
                         document.getElementById("remainhp2").style.width = current2 + "%";
                         console.log(current2);
                          if (current2 < 66){
                                  $("#egg21").remove();
                                  $("#egg22").fadeIn(500);
                                }
                          if (current2 < 33 ){
                              $("#egg22").remove();
                              $("#egg23").fadeIn(500);
                            }
                           
                          if (current2 == 0){
                            $("#gamespace2").remove();
                            $("#result1").fadeIn(500);
                            $("#result1").html("<h1>"+ text + " WINS!! </h1>" );
                            $("#resultwin").fadeIn(100);
                            $("#winpic").fadeIn(500);
                           }
                       }
                       else if (event.key == '8'){
                          console.log("egg1 is being attacked!");
                          var current1 = hpegg1_val--;
                          document.getElementById("remainhp1").style.width = 100-current1 + "%";
                          console.log(current1);
                          if (current1 < 66){
                              $("#egg11").remove();
                              $("#egg12").fadeIn(500);
                            }
                          if (current1 < 33 ){
                              $("#egg12").remove();
                              $("#egg13").fadeIn(500);
                            }
                           
                          if (current1 == 0){
                            $("#gamespace2").remove();
                            $("#winpic").fadeIn(500);
                            $("#result2").fadeIn(500);
                            $("#result2").html("<h1>"+ text2 + " WINS!! </h1>" );
                            $("#resultwin").fadeIn(100);
                            $("#winpic").fadeIn(500);
                        }
                       }
                     });
                   } //close on if for eggname2
                 });
                
             }//close on if for eggname1
           }); // close on eggname keypress

        }); // close on button2 click
    
  });//close on start button click

  
});
