let veggiesTab = document.getElementById('veggies-tab')
let fruitsTab = document.getElementById('fruits-tab')
let submitButton = document.getElementById('submit-button');
let displayVeggie = document.getElementById('display-veggies')


fruitsTab.addEventListener('click', async () =>{
    window.location.href = '../index.html'
})

submitButton.addEventListener('click', async () => {
    

    let nameString = document.getElementById('name-input').value;
    let colorString = document.getElementById('color-input').value;
    let ageNumber = +document.getElementById('age-input').value;
    let readyBool = document.getElementById('ready-bool').value === "true" ? true : false;
    let image = document.getElementById('image-input').value;



    const veggie = {
        nameString,
        colorString,
        ageNumber,
        readyBool,
        image
    }
    console.log(JSON.stringify(veggie));

    let response = await fetch('http://localhost:4000/create_veggie', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(veggie)
    
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

displayVeggie.addEventListener('click', async () =>{
    window.location.href = './display_veggie'
})