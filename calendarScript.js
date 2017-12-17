var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysInThisMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
var d = new Date();
var divElementForCurrentMonth = d.getMonth() * 2; // because month has 2 div elements
window.onload = function(){
    var div = document.getElementsByTagName("div");
    var length = div.length;
    var boxesNotUsed;
    var j = 0, k = 1, 
    //*************Edit*******************
    dateOneStartAfterDay = 0, // Jan 1 start on Monday then set it to 0 else calculate accordingly
    //************************************
    
    //*************Edit*******************
    daysOff = 2, threeDaysOff = false, // Number of days off first time in january
    //************************************
    
    curMonth = false, clas = '', totalBoxes = 42, daysAWeek = 7, 
    
    //*************Edit*******************
    workDays = 2;// Number of days already worked in december last year
    //************************************
    for(var i = 0; i < length; i++){ // for each month
        k = 1;
        var day = "";
        for(var x = 0; x < dateOneStartAfterDay; x++){
            day += "<li></li>";
        }
        while(workDays < 0)
            { // set extra initial days as off else workdays should start positively or 0
                day += "<li><span class='active'>" + k++ + "</span></li>";
                workDays++;
            }
        
        boxesNotUsed = totalBoxes - daysInThisMonth[i] - dateOneStartAfterDay;
        
        dateOneStartAfterDay = daysAWeek - boxesNotUsed;
        
        if(dateOneStartAfterDay < 0)
        {
            dateOneStartAfterDay = daysAWeek + dateOneStartAfterDay;
        }
        
        while(k <= daysInThisMonth[i]){
            if(workDays == 5){
                while(daysOff > 0 && k <=daysInThisMonth[i]){
                   day += "<li><span class='active'>" + k++ + "</span></li>";
                   daysOff--;
                }
                workDays = 0 - daysOff;
                if(threeDaysOff)
                {
                    daysOff = 2;
                    threeDaysOff = false;
                }
                else
                {
                    daysOff = 3;
                    threeDaysOff = true;
                }
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
                                                            '<span style="font-size:18px">2018</span>' +
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
        j = j + 2;  // since we add another div in "monthDayDate"      
    }
    var currentDateNotFound = true;
    j = 0;
    var liItem;
    while(currentDateNotFound)
    {
        liItem = div[divElementForCurrentMonth].getElementsByClassName("days")[0].getElementsByTagName("li"); 
        if(liItem[j].textContent == "")
        {
            j++;
        }
        else
        {
            liItem[j + d.getDate() - 1].className = "today";
            currentDateNotFound = false;
        }
    }
}                                                                                        