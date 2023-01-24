const getData = async () =>{
    let data = await fetch('/get_food_data');
    data.json().then((parsedData) =>{
        console.log(parsedData);
    })
}
getData()