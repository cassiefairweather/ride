let loginForm = document.getElementById("loginForm");
let webhook = "https://hooks.airtable.com/workflows/v1/genericWebhook/appjNZtJgj7R7HXr5/wfl5V0hryrH8faqL8/wtr1GAkuJbltYMNe3"
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
console.log("hi")
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let kname = document.getElementById("kname").value;
  let wname = document.getElementById("wname").value;
  let description = document.getElementById("description").value;



  fetch(webhook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      fname, lname, kname, wname, description
    })
  })
  .then (response => response.json())
  .catch (function() {
window.location = "redirect.html"

    
  })
});