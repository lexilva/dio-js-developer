/**
 * Faça um programa que calcule e imprima o salário a ser transferido para um funcionário
 * para realizar o cálculo  receba o valor bruto do salário e o adicional dos benefícios
 * O salário a ser transferido é calculado da seguinte maneira
 * valor bruto do salário - percentual do imposto mediante faixa salarial + adição dos benefícios
 * 
 * Para calcular o percentual do imposto segue as  aliquotas
 * 
 *      De R$0,00 a R$11.000,00 - 5,00%
 *      De R$11.000,01 a R$25.000,00 - 10,00%
 *      Maior que R$25.000,01 - 15,00%
 * 
 */
const {gets,print} = require('./funcoes-auxiliares3')    
const salarioBruto = gets();
const adicionalDeBeneficios = gets();
let salarioLiquido = null;
function calcularSalarioLiquido(salarioBruto,adicionalDeBeneficios){
    if(salarioBruto < 0){
        print('Valor Inválido!!!');
    }else if (salarioBruto <= 1100){
        salarioLiquido = (salarioBruto * 0.95) + adicionalDeBeneficios;
    }else if(salarioBruto < 2500){
        salarioLiquido = (salarioBruto* 0.90)+ adicionalDeBeneficios;
    }else{
        salarioLiquido = (salarioBruto * 0.85) + adicionalDeBeneficios;
    }
}

calcularSalarioLiquido(salarioBruto, adicionalDeBeneficios);
print('Salário Bruto: R$ '+ salarioBruto.toFixed(2));
print('Salário Liquido: R$ '+salarioLiquido.toFixed(2));