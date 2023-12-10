
function calculateDueDate() {
    const lmpInput = document.getElementById('lastMP');

    const resultParagraph = document.getElementById('result');

    const lmp = lmpInput.value;

    const dueDate = predictDueDate(lmp);

    resultParagraph.textContent = `The predicted due date is: ${dueDate}`;
}


function predictDueDate(lastMenstrualPeriod) {
    
    const lmpDate = new Date(lastMenstrualPeriod);

    if (isNaN(lmpDate.getTime())) {
        return " Nope! Invalid date. Please enter a valid date in the format MM-DD-YYYY.";
    }

    const gestationPeriodInDays = 280;

    
    const dueDate = new Date(lmpDate.getTime() + gestationPeriodInDays * 24 * 60 * 60 * 1000);

    const formattedDueDate = dueDate.toISOString().split('T')[0];

    return formattedDueDate;
}
