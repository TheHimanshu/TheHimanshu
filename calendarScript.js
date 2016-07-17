var month = ["July", "August", "September", "October", "November", "December"];//"January", "Febuary", "March", "April", "May", "June", 
var d = new Date();
var n = d.getMonth();
window.onload = function(){
    var div = document.getElementsByTagName("div");
    var length = div.length;
    var len;
    var j = 0, empty = 4, offThree = true, curMonth = false, clas = '', workDays = 1;// already worked for 1 day
    for(var i = 0; i < length; i++){
        if(i == n - 6)
        {
            curMonth = true;
        }
        var day = "";
        for(var x = 0; x < empty; x++){
            day += "<li></li>";
        }
        if(i == 0){
            len = 31;
            if(empty == 6){
                empty == 0;
            }else{
                empty += 3; 
            }
        }else if(i % 2 == 0){
            len = 30;
            if(empty == 6){
                empty == 0;
            }else{
                empty += 2; 
            }
        }else{
            len = 31;
            if(empty == 6){
                empty == 0;
            }else{
                empty += 3; 
            }
        }
        for(var k = 1; k <= len;){
            if(curMonth && k == d.getDate())
            {
                clas = " class = 'today'";
                curMonth = false;
            }else
            {
                clas = '';
            }
            if(workDays == 5){
                if(offThree){
                   day += "<li"+ clas +"><span class='active'>" + k++ + "</span></li>";
                   day += "<li"+ clas +"><span class='active'>" + k++ + "</span></li>";
                   day += "<li"+ clas +"><span class='active'>" + k++ + "</span></li>";                   
                   offThree = false;
                }else{
                   day += "<li><span class='active'>" + k++ + "</span></li>";
                   day += "<li><span class='active'>" + k++ + "</span></li>";
                   offThree = true;
                }
                workDays = 0;
            }else{
                day += "<li"+ clas +">" + k + "</li>";
                k++;
                workDays++;
            }
        }
        var monthDayDate = document.createTextNode('<div class="month">' + 
                                                    '<ul>' +
                                                        '<li style="text-align:center">' +
                                                            month[i] + '<br>' +
                                                            '<span style="font-size:18px">2016</span>' +
                                                        '</li>' +
                                                    '</ul>' +
                                                '</div>' +
                                                '<ul class="weekdays">' +
                                                  '<li>Mo</li>' +
                                                  '<li>Tu</li>' +
                                                  '<li>We</li>' +
                                                  '<li>Th</li>' +
                                                  '<li>Fr</li>' +
                                                  '<li>Sa</li>' +
                                                  '<li>Su</li>' +
                                                '</ul>' +
                                                '<ul class="days">' +
                                                  day +
                                                '</ul>');
                                               
        div[j].innerHTML = monthDayDate.textContent;  
        j = j + 2;        
    }
}