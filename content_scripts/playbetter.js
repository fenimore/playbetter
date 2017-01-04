var wrap = document.getElementById('wrap');
var output = document.getElementById('output');
var textEdit = document.getElementById('code');

console.log(CodeMirror);

var mirror = CodeMirror(wrap, {
    value: "func main() {\n        fmt.Println()\n};",
    mode:  "go",
    lineNumbers: true
});

document.getElementById('run').onclick = function() {
    console.log("clicked");
};

//var myCodeMirror = CodeMirror.fromTextArea(textEdit,
//                                           {lineNumbers: true,
//                                            mode: "go"});
