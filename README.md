# Go Playground Firefox extension

There is a super slick chrome extension which does way more than this, it's called [better go playground](https://github.com/dancannon/better-go-playground), but alas, I use Firefox, and this plugin is not that. This extension is a WIP and not suggested for general use. Indeed, I've looked at the source for **better go playground**, and this addon is nothing like it, it's super lame compared to that plugin. If you use chrome, use that plugin. This addon uses [codemirror](http://codemirror.net). Also super slick, and the only reason this webextension can hobble along.

This plugin is tailored for, well, me:

1. I use emacs keybindings. However, because firefox doesn't let me interrupt `Ctrl-N`, I use `Alt-N` for moving down a line instead. (and `Alt-P` for up whynot)
2. The About screen is broken. I could fix it. But I know what it says.
3. There is really only syntax highlighting for added functionality. Yup.

Functionality and milestones list:

- [x] fix format button
- [x] fix go-mode indentations
- [x] fix keybind breaking behavoir
- [ ] fancify theme     (v1)
- [ ] fix about toggle (v1)
- [ ] add keymap modes (v1)
- [ ] add theme modes (v1)
- [ ] add shortcut keys for run and format (v1)
- [x] automatically select imports

----

This application is licensed under MIT, 2017 Fenimore Love.

`THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.`
