var injection =`
console.log('injection!!!');
$(document).ajaxComplete(function(event, jqxhr, options) {
  if(options.url === "/fmt") {
    console.log("fmtted");
    console.log($('#code').html());
    document.getElementById('code').onchange();
    //$('#code').change();
  }
});
`;

console.log("what");
chrome.tabs.executeScript(null, {
    code: 'alert("whatwhat");console.log("itworks");'
});
