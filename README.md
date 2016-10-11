# promptMsg - prompt dialogs for mobile web apps

## Options

 * @parma   msg         {String}, the message
 * @parma   duration    {Number}，the duration time. Can be null

## Usage

Javascript files along without jQuery or Zepto.
```
<script src="path/promptMsg.js"></script>
<script>
    var promptMsg = new PromptMsg();
    promptMsg.alert('the prompt message!', 5000);
</script>
```
or
```
var PromptMsg=requrie('./promptMsg');

var promptMsg = new PromptMsg();
    promptMsg.alert('the prompt message!', 5000);
```