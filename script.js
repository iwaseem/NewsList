var http = new XMLHttpRequest();
http.onreadystatechange = function() {
   if (http.readyState == XMLHttpRequest.DONE) {
//	alert(http.responseText);
  var info = JSON.parse(http.responseText)
  info = info.articles
  for (let i = 0; i < 5; i++) {
  let item = info[i]
  let element = document.createElement('li')
    element.innerHTML = `
    <h1>${item.title}</h1>
    <p>
    ${item.description}
    </p>
      `;
    document.getElementById('news_list').appendChild(element)
    }

   }
}
var url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-27&sortBy=publishedAt&apiKey=3b6cb414cf5e44b4a30aeef1c882a535'
http.open('GET', url, true);
http.send(null);


function createUserName(){
  let user = document.getElementById("text_field").value;
  if (user!= null) {

    document.getElementById("welcome").innerHTML = "Hello " + user + "! How are you today?";
  } else {"Please enter username in the required field"}
}
