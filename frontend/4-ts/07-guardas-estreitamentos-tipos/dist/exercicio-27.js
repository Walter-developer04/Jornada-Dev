"use strict";
// O que é?
// Truthiness checks podem causar problemas com type predicates inferidos.
// Para que serve?
// Entender que !!score não é o mesmo que score !== undefined.
// Problema:
// Se score pode ser 0, !!score remove tanto undefined quanto 0.
// Solução:
// Use !== undefined para manter valores 0 válidos.
function getClassroomAverage(students, allScores) {
    // ERRADO: !!score remove tanto undefined quanto 0
    const studentScoresWrong = students
        .map(student => allScores.get(student))
        .filter(score => !!score);
    // CORRETO: !== undefined mantém 0
    const studentScores = students
        .map(student => allScores.get(student))
        .filter(score => score !== undefined);
    // Agora funciona corretamente
    return studentScores.reduce((a, b) => a + b) / studentScores.length;
}
const scores = new Map();
scores.set("aluno1", 10);
scores.set("aluno2", 0); // Zero é válido!
scores.set("aluno3", 8);
const students = ["aluno1", "aluno2", "aluno3"];
console.log("Média:", getClassroomAverage(students, scores));
