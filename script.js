
nomeAdd = document.getElementById('nomeAdd');
emailAdd = document.getElementById('emailAdd');
enderecoAdd = document.getElementById('enderecoAdd');
telefoneAdd = document.getElementById('telefoneAdd');


// CREATE
function cadastrarEmpresa() {
  console.log("cadastrar");

  $.ajax({
    url: 'api_cadastrar_empresa.php',
    method: 'POST', 
    data: {
      nome: nomeAdd.value,
      endereco: emailAdd.value,
      email: enderecoAdd.value,
      telefone: telefoneAdd.value,
    },
    success: function (data) {
      console.log(data);
      console.log('SUCESSO');
    },
    dataType: 'json'
  });
  console.log("fim cadastrar");
}

// READ

// UPDATE

// DELETE

