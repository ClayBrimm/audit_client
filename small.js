function scrapeForm() {

    var employee_id = document.getElementById("employee_id").value;
    var employer_name = document.getElementById("employer_name").value;

    var range_start = document.getElementById("range_start").value;
    var start = new Date(range_start).getTime();
    var start_date = Math.floor(start / 1000);
    
    var range_end = document.getElementById("range_end").value; 
    var end = new Date(range_end).getTime();
    var end_date = Math.floor(end / 1000);
    
    //var rehire_checkbox = document.getElementById("rehire").checked
    var add_checkbox = document.getElementById("add").checked
    var delete_checkbox = document.getElementById("delete").checked
    var reactivate_checkbox = document.getElementById("reactivate").checked
    var change_checkbox = document.getElementById("change").checked
    
    var wildObj = new Object();
    var sendObj = new Object();
    
    sendObj.employee_identity = employee_id;
    sendObj.employer_name = employer_name;
    
    //check if start_date and end_date are defined and then add them to an object and turn that object into a json string
    
    //TODO: This will create a wildcards json string that uses key value pairs for each possible search parameter. This could be changed to a list of fields. The backend would need to be adjusted
    
    if(start_date && end_date){
        wildObj.start_range =  start_date.toString();
        wildObj.end_range = end_date.toString();
    }
    //if(rehire_checkbox){
    //    wildObj.rehire = true;
    //}
    if(add_checkbox){
        wildObj.add = true;
    }
    if(delete_checkbox){
        wildObj.delete = true;
    }
    if(reactivate_checkbox){
        wildObj.reactivate = true;
    }
    if(change_checkbox){
        wildObj.change = true;
    }
    
    /* EXAMPLE OF SENT JSON STRING 12.10.19
   {"start_range":"1388966400","end_range":"1575936000","rehire":true,"add":true,"delete":true,"reactivate":true,"change":true}
    */
    
    var jsonString = JSON.stringify(wildObj);
    console.log(jsonString);
    sendObj.wildcards = jsonString;
    
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
        var result = JSON.parse(response)
        writeJSON(result);
        document.getElementById("json").innerHTML = response;
    });
    
}//End of scrapeForm()

function writeJSON(data){
    for(var key in data){
        if(data.hasOwnProperty(key)){
            var value = data[key];
            console.log(value['first_name']);
        }
    }
}

