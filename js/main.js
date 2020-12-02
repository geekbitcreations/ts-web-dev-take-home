var einput = document.getElementById("email").value;
var ninput = document.getElementById("name").value;
  
  function validateForm()
  {
    // Check if the input for email and name is empty.
    if (einput == "" || ninput == "") 
    {
      alert("Error: Please enter your name and email.");
      document.getElementById("submitBtn").disabled = true;
    }

    else 
    {
      document.getElementById("submitBtn").disabled = false;
    }
  }

  submitBtn.addEventListener("click", displayInfo())

  function displayInfo() 
  {
      document.getElementById("email").value = einput;
      document.getElementById("name").value = ninput;
    alert("Email: ${einput}\nName: ${ninput}");
  }
