// Select elements
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', function () {
  // Get input values
  const marksObtained = parseFloat(document.getElementById('marksObtained').value);
  const totalMarks = parseFloat(document.getElementById('totalMarks').value);

  // Validate input
  if (isNaN(marksObtained) || isNaN(totalMarks) || marksObtained < 0 || totalMarks <= 0) {
    resultDiv.innerHTML = `<p style="color: red;">Please enter valid marks!</p>`;
    return;
  }

  // Calculate percentage
  const percentage = (marksObtained / totalMarks) * 100;

  // Determine grade
  let grade = '';
  if (percentage >= 90) grade = 'A+';
  else if (percentage >= 80) grade = 'A';
  else if (percentage >= 70) grade = 'B';
  else if (percentage >= 60) grade = 'C';
  else grade = 'Fail';

  // Display result
  resultDiv.innerHTML = `
    <p>Percentage: <strong>${percentage.toFixed(2)}%</strong></p>
    <p>Grade: <strong>${grade}</strong></p>
  `;
});


