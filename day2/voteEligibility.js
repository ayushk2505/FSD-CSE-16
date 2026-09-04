 function checkVoteEligibility() {
            const age = document.getElementById('age').value;
            const resultDiv = document.getElementById('result');
            
            if (age === '') {
                resultDiv.textContent = 'Please enter your age';
                resultDiv.style.color = 'red';
            } else if (age >= 18) {
                resultDiv.textContent = '✓ You are eligible to vote!';
                resultDiv.style.color = 'green';
            } else {
                resultDiv.textContent = '✗ You are not eligible to vote yet. Come back in ' + (18 - age) + ' year(s).';
                resultDiv.style.color = 'red';
            }
        }