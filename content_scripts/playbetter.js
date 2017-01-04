var wrap = document.getElementById('wrap');
var output = document.getElementById('output');
var textEdit = document.getElementById('code');
// Control is the banner bar with all them
// TODO: wrap format as well
var controls = document.getElementById('controls');
// The run button
var originalRun = document.getElementById('run');
var runBtn = document.createElement('input');
runBtn.setAttribute('type', 'button');
runBtn.setAttribute('value', 'Run');
runBtn.setAttribute('id', 'run-btn');
// format shinnaginas:
var originalFmt = document.getElementById('fmt');
var fmtBtn = document.createElement('input');
fmtBtn.setAttribute('type', 'button');
fmtBtn.setAttribute('value', 'Format');
fmtBtn.setAttribute('id', 'fmt-btn');

// Clean up editor
document.getElementsByClassName('lines')[0].style.display = 'none';
wrap.style.background = 'none';
// Fill new controls
//controls.appendChild(runBtn);
controls.insertBefore(fmtBtn, controls.firstChild);
originalFmt.style.display = 'none';
controls.insertBefore(runBtn, controls.firstChild);
originalRun.style.display = 'none';

// Create CodeMirror from the textarea provided
var mirror = CodeMirror.fromTextArea(textEdit, {
    mode:  "go",
    lineNumbers: true
});

// save the new content to the textarea,
// submit it for formatting
// and reset the value of mirror
fmtBtn.onclick = function () {
    console.log("formatting now");
    mirror.save();
    originalFmt.click();
    // FIXME: this dopesn't work because of ajax
    mirror.setValue(textEdit.value);
};

runBtn.onclick = function () {
    mirror.save();
    originalRun.click();
};
