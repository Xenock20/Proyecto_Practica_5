const form = document.querySelector('form')

form.addEventListener('click', evento =>{
  evento.preventDefault()

  const edad = document.getElementById('edad').value

  if(evento.target.matches(["input[name=calcula]"])){
    if(!isNaN(parseInt(edad))){
      if(parseInt(edad) < 15){
        document.querySelector('h1').innerText = "Infantil"
      }else if(parseInt(edad) < 20){
        document.querySelector('h1').innerText = "Cadete"
      }else if(parseInt(edad) < 30){
        document.querySelector('h1').innerText = "Juvenil"
      }else{
        document.querySelector('h1').innerText = "Veterano"
      }
      document.querySelector('h1').className = "verde"
    }else{
      document.querySelector('h1').innerText = "Valor Incorrecto!"
      document.querySelector('h1').className = "rojo"
    }
  }
})