function scrapeForm() {

    var employee_id = document.getElementById("employee_id").value;
    var employer_name = document.getElementById("employer_name").value;

    var range_start = document.getElementById("range_start").value;
    var start = new Date(range_start).getTime();
    var start_date = Math.floor(start / 1000);
    
    var range_end = document.getElementById("range_end").value; 
    var end = new Date(range_end).getTime();
    var end_date = Math.floor(end / 1000);
    
    var rehire_checkbox = document.getElementById("rehire").checked
    
    var wildObj = new Object();
    var sendObj = new Object();
    
    sendObj.employee_identity = employee_id;
    sendObj.employer_name = employer_name;
    
    //check if start_date and end_date are defined and then add them to an object
    //and turn that object into a json string
    if(typeof start_date !== 'undefined' && typeof end_date !== 'undefined' || rehire_checkbox){
        if(typeof start_date !== 'undefined' && typeof end_date !== 'undefined'){
            wildObj.start_range =  start_date.toString();
            wildObj.end_range = end_date.toString();
        }
        if(rehire_checkbox){
            wildObj.rehire = true;
        }
        var jsonString = JSON.stringify(wildObj);
        console.log(jsonString);
        sendObj.wildcards = jsonString;
    }

    
    var scrapedData = JSON.stringify(sendObj);
        
    var scrapeJson = JSON.parse(scrapedData); 
    var sendJson = JSON.stringify(scrapeJson);
    
    console.log(sendJson);
    
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://127.0.0.1:5000/audit",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
        "Postman-Token": "af122563-5311-4d3e-9a55-c28c1ab9c41c"
      },
      "processData": false,
      "data": sendJson
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        alert(JSON.stringify(response));
        document.getElementById("json").innerHTML = response;
    });
    
}//End of scrapeForm()

