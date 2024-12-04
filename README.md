# https://snazzy-taffy-e644ae.netlify.app/
# Undoable counter Requirements
- The count should begin at 0
- Clicking the +1, +10, +100 buttons should add 1, 10, and 100 to the count, respectively
- Clicking the -1, -10, -100 buttons should subtract 1, 10, and 100 from the count, respectively
- Clicking any + or - button should show a new entry in the history, in the format: ACTION (BEFORE -> AFTER) (e.g. +1 (0 -> 1))
- Clicking the 'Undo' button should undo the last action. For example, if the user just clicked '+10', clicking undo should subtract 10 from the count
- The user should be able to undo up to the last 50 actions
- The 'Redo' button should be greyed out until the user clicks 'Undo'
- Clicking the 'Redo' button should redo the last action the user undid. For example, if the user clicked '+10', clicking undo would subtract 10, then clicking redo would add 10 again
- Clicking undo/redo should remove and re-add entries to the history respectively

# Memory Game Requirement 
- Cards should be laid out on a 6x6 grid, all face down initially (i.e. numbers not showing)
- There should be a total of 36 cards with the numbers 1-18 (two of each), placed randomly on the grid
- Clicking a card should 'reveal' it - showing the hidden number of the card
- Clicking a second card should reveal that card
- If the second card has the same number as the first card, both cards should be removed from the board after 3 seconds
- If the second card has a different number to the first card, both cards should be 'hidden' again after 3 seconds (i.e. turned face down)
- The user shouldn't be able to turn over any more cards until the 3 second timer completes and the two revealed cards are either removed (if they matched), or hidden again (if they didn't)
- Once all cards are removed from the board, the game is over and the 'Play again' button should be shown
- Clicking 'Play again' should generate a new, random set of cards on the grid

# Digital Clock
- Create a widget that renders the current time in HH:MM:SS format using a 7-segment digital display. You are free to choose to use 12-hour or a 24-hour display.
![image](https://github.com/user-attachments/assets/f24d3dfe-4a82-4983-bb15-f1ea0da51275)


# Countdown timer Requirements
- Create a countdown timer that allows the user to enter hours, minutes, and seconds.
- Once the timer has started, the input fields should be replaced with plain text that updates every second. The 'Start' button should be replaced with 'Pause' and 'Reset' buttons.
- Once the timer completes, it should alert the user with an alert.
- The 'Hours', 'Minutes', and 'Seconds' fields should not have visible labels, but they should be accessible and clearly labelled to a screen reader
- The input fields should use placeholder text as shown in the screenshot above
- Pressing 'Start' should start the timer, replace the input fields with plain text for the hours/minutes/seconds, and replace 'Start' with 'Pause' and 'Reset' buttons
- Pressing 'Pause' should pause the timer, and replace the 'Pause' button with a 'Start' button
- Pressing 'Reset' should revert the app back to the initial state
- While the timer is counting down, the numbers should be zero-padded (e.g. 01 vs 1)
- When the timer reaches zero, if the app has appropriate permissions, it should display a Notification that the timer is complete
- If the app doesn't have appropriate permissions, it should show an alert when the timer reaches zero
