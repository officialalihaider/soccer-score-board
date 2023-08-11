function increaseScore(team, value) {
    // Get the current number based on the team
    let numberElement;
    if (team === 'home') {
        numberElement = document.getElementById('homeNumber');
    } else if (team === 'guest') {
        numberElement = document.getElementById('guestNumber');
    }

    // Increase the number by the given value
    const currentNumber = parseInt(numberElement.innerText);
    const newNumber = currentNumber + value;

    // Update the number element with the new value
    numberElement.innerText = newNumber;
}
