const send = document.getElementById("envio")
const messages = []

function arrayNaTela(){
  let text = "<br>"
  for(let i = 0; i < messages.length; i++){
    text += messages[i] + "<br>"
  }
  document.getElementById("teste").innerHTML = text
}

function mensagemNoArray(){
  messages.push(document.getElementById("mensagem").value)
  arrayNaTela()
  document.getElementById("mensagem").value = ""
}

send.addEventListener("click", mensagemNoArray)





