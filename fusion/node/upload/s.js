var socket=io('http://localhost:1000/')

document.getElementById("s").onclick=()=>{
    socket.emit("message","bye")
    fetch('http://127.0.0.1:8990/api').then(response=>{
        return response.json()
    }).then(result=>{
        result.map(e=>{
            var list=document.createElement('li')
            list.innerHTML=e.name
            document.getElementById("t").append(list)
        })
    })     
}
socket.on('data',data=>{
    document.body.append(JSON.stringify(data))
})

