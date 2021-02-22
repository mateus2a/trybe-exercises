/**
 * A função de toLowerCase() foi pega do exemplo do John Topley,
 * segue o link do exemplo: https://stackoverflow.com/questions/154862/convert-javascript-string-to-be-all-lower-case
 */
let piece = 'Rook'.toLowerCase();

/**
 * As frases utilizadas no If/Else foram coletadas do Wikipedia, 
 * segue o link abaixo: https://en.wikipedia.org/wiki/Chess
 */
if (piece == 'pawn') {
  console.log('A pawn can move forward to the unoccupied square immediately in front of it on the same file');
} else if (piece == 'rook') {
  console.log('A rook can move any number of squares along a rank or file, but cannot leap over other pieces. ');
} else if (piece == 'bishop') {
  console.log('A bishop can move any number of squares diagonally, but cannot leap over other pieces.');
} else if (piece == 'knight') {
  console.log('A knight moves to any of the closest squares that are not on the same rank, file, or diagonal.');
} else if (piece == 'queen') {
  console.log('A queen combines the power of a rook and bishop.');
} else if (piece == 'king') {
  console.log('A king moves one square in any direction.');
} else {
  console.log('This piece does not exists');
}
