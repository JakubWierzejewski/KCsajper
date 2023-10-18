el = document.getElementById("Form1")
console.log(el)
if(el){
    
    el.addEventListener("submit",(event)=>{
        alert("Nie można wysłać wiadomości")
        event.preventDefault()
    })
}