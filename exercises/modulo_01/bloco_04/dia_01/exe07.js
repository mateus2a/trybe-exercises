
function convertNoteToLetter(note) {
  if (note >= 90) {
    console.log('A');
  } else if (note >= 80) {
    console.log('B');
  } else if (note >= 70) {
    console.log('C');
  } else if (note >= 60) {
    console.log('D');
  } else if (note < 50) {
    console.log('F');
  } else if (note > 100 || note < 0) {
    console.log('Error');
  }
}


convertNoteToLetter(90);

