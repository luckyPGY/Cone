let visits = ["Search anything", "Search anything",  "Search anything",  "Search anything"];

console.log(visits);
function loadIframe() {
    const url = document.getElementById('inputsearch').value;
    console.log(url);
    const iframe = document.getElementById('iframe');
        iframe.src = url;
        visits.push(url);
        console.log(visits);
        if (url == 'game:target'){
            iframe.src = 'file:///C:/Users/Marcelo/Documents/Internetadin/Htmls/Browser/stf12/target.html';
        }
      document.getElementById('btn1').textContent = visits[visits.length - 1];
      document.getElementById('btn2').textContent = visits[visits.length - 2];
      document.getElementById('btn3').textContent = visits[visits.length - 3];
      document.getElementById('btn4').textContent = visits[visits.length - 4];
      document.getElementById('btn1').name = visits[visits.length - 1];
      document.getElementById('btn2').name = visits[visits.length - 2];
      document.getElementById('btn3').name = visits[visits.length - 3];
      document.getElementById('btn4').name = visits[visits.length - 4];
}

function search1() {
    const url = document.getElementById('btn1').name;
    console.log(url)
    const iframes = document.getElementById('iframe');
    iframes.src = url;
    visits.push(url);
}
function search2() {
    const url = document.getElementById('btn2').name;
    console.log(url)
    const iframes = document.getElementById('iframe');
    iframes.src = url;
    visits.push(url);
}
function search3() {
    const url = document.getElementById('btn3').name;
    console.log(url)
    const iframes = document.getElementById('iframe');
    iframes.src = url;
    visits.push(url);
}
function search4() {
    const url = document.getElementById('btn4').name;
    console.log(url)
    const iframes = document.getElementById('iframe');
    iframes.src = url;
    visits.push(url);
}