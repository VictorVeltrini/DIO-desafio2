let heroi = {
    nome: 'Teste',
    xp: 0
}

function attlvl(xp) {
    if (xp < 1000) {
        return 'Ferro'
    } else if (xp >= 1001 && xp <= 2000) {
        return 'Bronze'
    } else if (xp >= 2001 && xp <= 5000) {
        return 'Prata'
    } else if (xp >= 5001 && xp <= 7000) {
        return 'Ouro'
    } else if (xp >= 7001 && xp <= 8000) {
        return 'Platina'
    } else if (xp >= 8001 && xp <= 9000) {
        return 'Ascendente'
    } else if (xp >= 9001 && xp <= 10000) {
        return 'Imortal'
    } else {
        return 'Radiante'
    }
}

while (heroi.xp < 10001) {
    heroi.xp += 1000
    console.log("Após o treinamento o heroi " + heroi.nome + " ganhou 1000 pontos de XP ficando com " + heroi.xp + " pontos de XP e está no nivel " + attlvl(heroi.xp))
}

console.log("O Herói de nome " + heroi.nome + " está no nível final de " + attlvl(heroi.xp))