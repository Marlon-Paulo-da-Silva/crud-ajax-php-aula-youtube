

// CREATE
function cadastrarEmpresa() {
  console.log("cadastrar");

  $.ajax({
    url: 'api_cadastrar_empresa.php',
    method: 'POST', 
    data: {
      nome: "Marlon",
      telefone: "289959595"
    },
    success: function (data) {
      console.log(data);
      console.log('SUCESSO');
    },
    dataType: 'json'
  });
}

// READ

// UPDATE

// DELETE

