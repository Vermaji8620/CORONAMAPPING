updatemap=()=>{
    fetch('./data.json').then((response)=>{
        return  response.json()
    }).then((rsp)=>{
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude=element.latitude
            longitude=element.longitude
            //mark on the map
        });
    })
}
updatemap()