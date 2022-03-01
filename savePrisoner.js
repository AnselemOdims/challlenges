function saveThePrisoner(n, m, s) {
    let finalSeat = 0
    finalSeat = (m+s-1) % n
    return finalSeat === 0 ? n : finalSeat
}
