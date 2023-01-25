let container = document.getElementById('container')

const getData = async () =>{
    let data = await fetch('/veggies');
    data.json().then((parsedData) =>{
        console.log(parsedData);

        parsedData.forEach(element => {
            let pTag = document.createElement('p');
            pTag.textContent = element.name
            container.appendChild(pTag)
            if (element.readyToEat){
                pTag.style.backgroundColor = "green"
            }else{
                pTag.style.backgroundColor = "red"
            }
        });
    })
}
getData()