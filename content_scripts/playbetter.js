var wrap = document.getElementById('wrap');
var textEdit = document.getElementById('code');

console.log(CodeMirror);

var mirror = CodeMirror(wrap, {
    value: "func main() {\nfmt.Println()\n};",
    mode:  "go",
    lineNumber: true
});

document.getElementById('run').onclick = function() {
    console.log("clicked");
    textEdit.innerHTML = "package main";
};

mirror.focus();


//var myCodeMirror = CodeMirror.fromTextArea(textEdit,
//                                           {lineNumbers: true,
//                                            mode: "go"});
