window.onload = function() {
  fetch("https://api.airtable.com/v0/appjNZtJgj7R7HXr5/ride", {
    headers: {
      Authorization: "Bearer patDAA5zDw3yhtns9.ad8dc5e17fc153a093f384e6bb431371ea6f18373f21c46ea4cf4a6ba21eb2b1"


    }

  }).then(res => {
    return res.json()

  }).then(records => {
    console.log(records)
    for (let record of records.records){
      let div = document.createElement("div")
      div.innerHTML = `
      <div class="center">
      <div class="data">
     <center> <p>${record.fields.Name}</p></center>
     <center> <p>${record.fields.phone}</p></center>
      <center><p>${record.fields.address}</p></center>
      <center><p>${record.fields.fee}</p></center>
      <center><p>${record.fields.date}</p></center>
      </div>
      <a class="request" href="sms:${record.fields.phone}&body=I need a ride">Request a Ride</a>
      </div>
      `
        
      
      document.getElementById("info").appendChild(div)
      
    }
  }).catch(err => {
    console.log(err)
  })
  
}




