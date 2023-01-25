let container = document.getElementById('container')

const getData = async () =>{
    let data = await fetch('/veggies');
    data.json().then((parsedData) =>{
        console.log(parsedData);

        parsedData.forEach(element => {
            let pTag = document.createElement('p');
            pTag.textContent = element.name
            container.appendChild(pTag)
            pTag.id = element._id
            if (element.readyToEat){
                pTag.style.backgroundColor = "green"
            }else{
                pTag.style.backgroundColor = "red"
            }

            pTag.addEventListener('click', (event) =>{
                console.log(event.target);
                console.log(event.target.id);
                window.location.href = `../single_veggie?veggieId=${event.target.id}`
            })
        });
    })    
}
getData()