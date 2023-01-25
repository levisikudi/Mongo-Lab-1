//get id from url

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})
 let id = params.veggieId
 
console.log(id);
// use id to get info from collection

const getSingleVeggie = async () =>{
    let response = await fetch(`http://localhost:4000/veggie/${id}`)

    let finalData = await response.json()

    console.log(finalData);
}
getSingleVeggie()