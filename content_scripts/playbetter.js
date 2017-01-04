var wrap = document.getElementById('wrap');
var output = document.getElementById('output');
var textEdit = document.getElementById('code');

console.log(CodeMirror);

var mirror = CodeMirror(wrap, {
    value: "func main() {\nfmt.Println()\n};",
    mode:  "go",
    lineNumber: true
});

document.getElementById('run').onclick = function() {
    console.log("clicked");
};


//var div = document.createElement('div');
//div.id = 'editor';
//div.innerHTML = 'what';
//document.body.insertBefore(div, output);



//var myCodeMirror = CodeMirror.fromTextArea(textEdit,
//                                           {lineNumbers: true,
//                                            mode: "go"});
