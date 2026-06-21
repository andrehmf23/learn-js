function fibonacci(limit = Infinity){

    let last = 1;
    let now = 1;

    console.log(now)

    while (now <= limit) {
        now += last;
        last = now - last;
        console.log(now);
    }


}

fibonacci()