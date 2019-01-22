//Jquery listener for key presses while on the body.
//note that it calls SwimTeam.move with the keypress.
//also note the specific string (lowercase) required to get it to operate.
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

console.log('Client is running in the browser!');
