let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', async () => {
    

    let nameString = document.getElementById('name-input').value;
    let colorString = document.getElementById('color-input').value;
    let ageNumber = +document.getElementById('age-input').value;
    let readyBool = document.getElementById('ready-bool').value === "true" ? true : false;



    const fruit = {
        nameString,
        colorString,
        ageNumber,
        readyBool
    }
    console.log(JSON.stringify(fruit));

    fetch('http://localhost:5000/create_fruit', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fruit)
    
    })

})

