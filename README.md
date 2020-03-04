# JavaScript: Additional events, timers, add attributes

### Exercise 1: click handler/text
Create a simple form with a single `checkbox` and the message `DON'T CLICK THIS CHECKBOX!`. When the User tries to click checkbox, change the label for the checkbox to say, `I TOLD YOU NOT TO CLICK THIS!!!`

#### CHALLENGE:
When user unchecks the box, reset the label text to original message

### Exercise 2: add/remove attributes
Create a simple form with a fieldset, legend of `Post Text`, textarea, a *hidden* `<h2>` message with the text `Start typing`, and a button that says `Allow Typing`. 

When the page initially displays, the textarea should be disabled, and the message hidden. When the User clicks the button, display the hidden message, change the text on the button to `Stop Typing`, and enable the textarea so you can type into it. Clicking the button a second time should hide the hidden message, change the text of the button back to `Start Typing`, and disable the textarea. Each press of the button should toggle this behavior.

### Exercise 3: timers
Create a button with the text `Start countdown!`. When the User clicks the button, display a countdown sequence in the browser as an `<h2>` from 10 to `LIFTOFF!!`. Display each number during the countdown for *1 second*, leading up to the word `LIFTOFF`.

### CHALLENGE:
Animate the included sprite images

### SUPER MARIO CHALLENGE
Animate Mario walking to the left and right by pressing the left and right arrow keys (HINT: implement event handler(s) for handling the key presses)
