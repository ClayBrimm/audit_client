<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="small.js"></script>
  </head>
  <body>

    <h2>Audit Trail</h2>

    <form>
      <h2>Person</h2>
      Employee ID:
      <input type="text" name="employee id" id="employee_id" value="01014212">
      <br>
      Employer Name:
      <input type="text" name="employer name" id="employer_name">
      <br><br>
      <h2>Range</h2>
      Range Start:
      <input type="text" name="range start" id="range_start">
      <br>
      Range End:
      <input type="text" name="range end" id="range_end">
      <br><br>
      <button name="post" type="button" onclick="scrapeForm()">Submit</button>
    </form>
    <div id="results">

    </div>

  </body>
</html>
