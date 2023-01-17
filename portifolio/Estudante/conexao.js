
var nome = document.getElementById('nome');
var apelido=document.getElementById('apelido');
var idade=document.getElementById('idade');
var turma=document.getElementById('turma');
var sala=document.getElementById('sala');
var numero=document.getElementById('numero');
var sexo=document.getElementById('sexo');

// tentativa de conectar com base de dados usando o navegador

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"bdjs"
})


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO alunos (nome, apelido, idade, turma, sala, numero, sexo) VALUES ('nome', 'apelido', 'idade', 'turma', 'sala', 'numero', 'sexo')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Aluno Cadastrado Com Sucesso!");
  });
});