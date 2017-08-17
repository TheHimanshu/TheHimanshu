var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var divElementForCurrentMonth = d.getMonth() * 2; // because month has 2 div elements
window.onload = function(){
    var div = document.getElementsByTagName("div");
    var length = div.length;
    var daysInThisMonth, boxesNotUsed;
    var j = 0, k = 1, dateOneStartAfterDay = 6, daysOff = 3, threeDaysOff = true, curMonth = false, clas = '', totalBoxes = 42, daysAWeek = 7, workDays = 5;// already worked for 1 day
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
        if(i == 0 || i == 7){
            daysInThisMonth = 31;
        }else if(i == 1){
            daysInThisMonth = 28;
        }else if(i % 2 == 0){
            daysInThisMonth = 31;
        }else{
            daysInThisMonth = 30;
        }
        
        boxesNotUsed = totalBoxes - daysInThisMonth - dateOneStartAfterDay;
        
        dateOneStartAfterDay = daysAWeek - boxesNotUsed;
        
        if(dateOneStartAfterDay < 0)
        {
            dateOneStartAfterDay = daysAWeek + dateOneStartAfterDay;
        }
        
        while(k <= daysInThisMonth){
            if(workDays == 5){
                while(daysOff > 0 && k <=daysInThisMonth){
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
                                                            '<span style="font-size:18px">2017</span>' +
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