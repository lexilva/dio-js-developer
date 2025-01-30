

const pessoa = {
    nome: 'Vitor J Gerra',
    idade: 25,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

}
/*
Acesso Direto aos atributos do objeto
pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`)
}
pessoa.descrever();*/
//Acesso dinâmico ao atributo idade do objeto
const atributo = 'idade';
console.log(pessoa[atributo]);

//Acesso dinâmico ao atributo nome do objeto
const atributo1 = 'nome';
console.log(pessoa[atributo1]);