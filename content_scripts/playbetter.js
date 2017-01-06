(function() {
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
    // Select by default imports box
    var imports = document.getElementById('imports');
    imports.checked = true;
    // Fix about button
    var about = document.getElementById('aboutButton');

    // Clean up editor
    document.getElementsByClassName('lines')[0].style.display = 'none';
    wrap.style.background = 'none';
    // Fill new controls
    controls.insertBefore(fmtBtn, controls.firstChild);
    originalFmt.style.display = 'none';
    controls.insertBefore(runBtn, controls.firstChild);
    originalRun.style.display = 'none';

    // Create CodeMirror from the textarea provided
    var mirror = CodeMirror.fromTextArea(textEdit, {
        mode:  "go",
        autofocus: true,
        indentUnit: 4,
        indentWithTabs: true,
        keyMap: "emacs",
        lineNumbers: true
    });

    // save the new content to the textarea,
    // submit it for formatting
    // and reset the value of mirror
    fmtBtn.onclick = function () {
        mirror.save();
        originalFmt.click();
        // NOTE: this fmt depends on an ajax call resetting the textarea
        // this is kind of the only solution, I tried code injection:
        // see my stackoverflow question:
        // http://stackoverflow.com/questions/41489480/listen-in-content-script-for-when-ajax-response-changes-textarea-val
        setTimeout(function(){
            mirror.setValue(textEdit.value);
        }, 500);
    };

    about.onclick = function () {
        // TODO: toggle aboutButton
    };

    // click the run button wrapper
    runBtn.onclick = function () {
        mirror.save();
        originalRun.click();
    };
})();
