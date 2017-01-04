var wrap = document.getElementById('wrap');
var output = document.getElementById('output');
var textEdit = document.getElementById('code');
var runBtn = document.createElement('input');
var controls = document.getElementById('controls');
runBtn.setAttribute('type', 'button');
runBtn.setAttribute('value', 'Run');
runBtn.setAttribute('id', 'run-btn');

controls.appendChild(runBtn);

console.log(CodeMirror);

// var mirror = CodeMirror(wrap, {
//     value: "func main() {\n        fmt.Println()\n};",
//     mode:  "go",
//     lineNumbers: true
// });


var mirror = CodeMirror.fromTextArea(textEdit, {
    mode:  "go",
    lineNumbers: true
});

runBtn.onclick = function () {
    mirror.save();
    document.getElementById('run').click();
}
