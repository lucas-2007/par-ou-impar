let nomeUsuario = prompt("Qual é seu nome");

function verSaldo() {
    alert(" Ola " + nomeUsuario + "!");
    //alert("Seu saldo é de: R$ 69.000,00: ");
    //alert("Obrigado por usar nossos serviços");
    document.getElementById("resposta").innerText= nomeUsuario + ", Seu saldo é de:R$ 69.000,00" ;
    imagem.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCY3lz9ljPi9F1LqMFnUcOUwWhZwXsVh_t0g&s  " style= "width:200px">';


}

function depositar() {
   // alert(" Ola " + nomeUsuario + "!");
    //let deposito = prompt("digite o valor desejado: R$ ");
   // alert("confirme o valor do saque: R$" + deposito + "?");
    //alert("Obrigado por usar nossos serviços");
    let inputValor = document.getElementById("input").value;
    let resposta = document.getElementById("resposta");

    if (inputValor === "") {
        resposta.innerText = nomeUsuario + ", digite o valor que deseja depositar R$ ";
        return;
    }
    resposta.innerText = nomeUsuario + ", deposito de R$ " + inputValor + " realizado com sucesso";
    document.getElementById("input").value = "";

    
   }

function sacar() {
    //alert(" Ola " + nomeUsuario + "!");
   // let saque = prompt("Digite o valor desejado: R$ ");
  //  alert("confirme o valor do saque: R$ " + saque + "?");
   // alert("obrigado por usar nossos serviços");
    let inputSacar = document.getElementById("input").value;
    let respostas = document.getElementById("resposta");

    if (inputSacar === "") {
        respostas.innerText = nomeUsuario + ", digite o valor que deseja sacar R$ ";
        return;
    }
    resposta.innerText = nomeUsuario + ", Saque de R$ " + inputSacar + " realizado com sucesso";
    document.getElementById("input").value = "";

}

function pix() {
  //  alert(" Ola " + nomeUsuario + "!");s  
   // let chave = prompt("Digite sua chave pix do destinatario:");
   // let valor = prompt("digite o valor desejado: R$ ");
   // alert("Confirme as informações. Chave pix: " + chave + ". Valor: R$ " +valor);
   // alert("Obrigado por usar nossos serviços");
    //document.getElementById("resposta").innerText= "Digite o valor desejado: R$ " ;
    let inputPix = document.getElementById("input").value;
    let respostax = document.getElementById("resposta");
    let valor = document.getElementById("inputx").value;

    if (inputPix === "") {
        respostax.innerText = nomeUsuario + ", digite a sua chave pix ";
        return;
    }
   
    resposta.innerText = nomeUsuario + ", valor de R$ " + valor + " realizado com sucesso";
    document.getElementById("input").value = "";

}

