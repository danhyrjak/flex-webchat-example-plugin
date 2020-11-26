console.log("start");
setTimeout(() => {
  alert(`the account SID picked up from env was: ${process.env.TWILIO_ACCOUNT_SID}`);
}, 200);
console.log("done");