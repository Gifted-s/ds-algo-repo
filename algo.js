const NByNMatrix = [[1, 2, 3], [4, 0, 6]]

for (const i of NByNMatrix) {
    for (const j of i) {
        if (j === 0) {
            setToZero()
            break
        }
    }
}

function setToZero() {
    for (const i of NByNMatrix) {
        for (let j in i) {
            i[j] = 0
        }
    }
    console.log(NByNMatrix)
}