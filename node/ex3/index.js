const lodash = require('lodash')

const alunos = [
    {
        nome: 'Nathan',
        nota: 9.7
    },
    {
        nome: 'Bruno',
        nota: 5.6
    },   
    {
        nome: 'Tales',
        nota: 7.4
    }
]

/*
let notas = 0
alunos.forEach((aluno)=>{
    notas += aluno.nota
})
const media = notas / alunos.length
*/

const media = lodash.sumBy(alunos, 'nota') / alunos.length
console.log(media)

