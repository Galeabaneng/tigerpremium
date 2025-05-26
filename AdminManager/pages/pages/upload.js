

function uploadVideo(){


    var subject = document.getElementById("subject").value;
    var grade = document.getElementById("grade").value;
    var choose = document.getElementById("choose").value;
    var title = document.getElementById("title").value;
    var url = document.getElementById("url").value;




const secretKey = '$2a$10$pQOgIq2QOg86xvUJzMWNLedwaBnUP2a3qKA9ZWNZzJumuU5FdgABi';
const binName= 'myBin';

const data = {
Subject: subject,
Grade: grade,
Title: subject,
Url: url


};

fetch('https://api.jsonbin.io/v3/b', {
 method: 'POST',
 headers: {
   'Content-Type': 'application/json',
   "X-Master-Key": secretKey,
   "X-Bin-Private": true,
   'X-Bin-Name': "Upload Video"
 },
 body: JSON.stringify(data)
})
.then(response => response.json())
.then(jsonData => console.log(jsonData))
.catch(error => console.error(error));

alert("Video Upload initiated.It may take time for the video to show on website");

}




