document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('paymentForm').style.display = 'none';
    document.getElementById('completionMessage').style.display = 'block';
});