let submitButton = document.getElementById('submit-button');
let deletebutton = document.getElementById('delete')

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

    let response = await fetch('http://localhost:4000/create_fruit', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fruit)
    
    })
    let uploadStatusTag = document.getElementById('upload-status')

    if(response.status === 200){
        console.log(response);
        console.log("upload complete");
        uploadStatusTag.textContent = "Upload Completed"
        uploadStatusTag.style.color = 'green'
    } else{
        console.log(response);
        console.log("upload failed");
        uploadStatusTag.textContent = "Upload failed"
        uploadStatusTag.style.color = 'red'
    }
})

deletebutton.addEventListener('click', async () => {
    let response = await fetch ('http://localhost:4000/delete_nameless_data', {
        method : 'delete',
    })
    console.log(response);
})
