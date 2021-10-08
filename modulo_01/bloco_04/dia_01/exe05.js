
function verifyIfItIsATriangle(angleOne, angleTwo, angleThree) {
  const sumOfAngles = angleOne + angleTwo + angleThree;
  if (sumOfAngles == 180) {
    console.log(true);
  } else {
    console.log(false);
  }
}

verifyIfItIsATriangle(150, 20, 10);

