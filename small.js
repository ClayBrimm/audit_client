
function scrapeForm() {

    var employee_id = document.getElementById("employee_id").value;
    var employer_name = document.getElementById("employer_name").value;
    var results = document.getElementById("results").value;

    var scrapedData
    

    var scrapedData = '{"employee_identity":"'+employee_id+'","employer_name":"'+employer_name+'"}'; 
    
    console.log(scrapedData);
    
    var scrapeJson = JSON.parse(scrapedData); 
    
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
      "data": `{\n\t\"\employee_identity\":\"${employee_id}\",\n\t\"employer_name\" : \"${employer_name}\"\n}`
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        alert(JSON.stringify(response));
    });
    
/*    const poster = {
        method: 'post',
        url: 'http://127.0.0.1:5000/audit',
        scrapeJson
    };

    //'/etl/api/v1.0/audit',   'http://f6491d6f-0616-4f80-8f94-6bad66c0ca26.mock.pstmn.io/audit',

    console.log(poster);

    axios(poster).then(response => { 
        console.log(response)
        
    }).catch(error => {
        console.log(error.response)
    });


*/
}//End of scrapeForm()

