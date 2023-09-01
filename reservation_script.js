function submitData() {
  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const emailAdd = document.getElementById("emailAdd").value;
  const address = document.getElementById("address").value;
  const destiAdd = document.getElementById("destiAdd").value;
  const flightSched = document.getElementById("flightSched").value;
  const pay = document.getElementById("pay").value;


  console.log(`Name: ${fullName}`);
  console.log(`Phone: ${phoneNumber}`);
  console.log(`Email: ${emailAdd}`);
  console.log(`Address: ${address}`);
  console.log(`Destination Address: ${destiAdd}`);
  console.log(`Flight Schedule: ${flightSched}`);
  console.log(`Payment Method: ${pay}`);
  console.log("");
  alert("Registration Successfully");
}