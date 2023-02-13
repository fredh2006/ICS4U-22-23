const error = document.getElementById('error')

async function sendMessage() {
    let phone = document.getElementById('phone').value.toString()
    let message = document.getElementById('message').value
    let username = 'AC32ca9b77784224cc1dc062735b7f21a3';
    let password = '914f7c2ed7524d45fe3901e93ca48ca6';
    let auth = btoa(`${username}:${password}`);
    var urlencoded = new URLSearchParams();
    urlencoded.append("To", phone);
    urlencoded.append("From", "+12517664365");
    urlencoded.append("Body", message);
    try{
     const test = await fetch("https://api.twilio.com/2010-04-01/Accounts/AC32ca9b77784224cc1dc062735b7f21a3/Messages.json", {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${auth}`
            },
            method: "POST",
            body: urlencoded
        })
    const content = await test.json()
    let text;
    if(content.hasOwnProperty('code')){
        text = "Code: " + content.code + `<br>` + " Message: " + content.message 
    }else{
        text = "Message: " + content.body;
    }
    error.innerHTML = JSON.stringify(text);
    }catch(e){
        let text = e.error + e.message
        error.innerHTML = JSON.stringify(text);
        console.log(JSON.stringify(e));
    }
}

