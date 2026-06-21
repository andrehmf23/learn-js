function gerar_primos(limite = 2) {
    const primos = [2, 3];

    for (let i = 5; i < limite; i += 2) {
        let primo = true;

        for (const p of primos) {
            if (i % p === 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            primos.push(i);
        }
    }

    console.log(primos);
}
gerar_primos(100)