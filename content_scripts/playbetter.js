document.getElementById('run').onclick = function() {
    console.log("clicked");
};


var wrap = document.getElementById('wrap');
var textEdit = document.getElementById('code');

console.log(CodeMirror);

var mirror = CodeMirror(wrap, {
    value: "func main() {fmt.Println()\n};",
    mode:  "go"
});

//var myCodeMirror = CodeMirror.fromTextArea(document.getElementById('code'));
