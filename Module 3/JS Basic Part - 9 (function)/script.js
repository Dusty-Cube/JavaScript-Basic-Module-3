function primeNumbers(a, b){
    var i = a;
    var numbers = []; var count = 0;

    for(i; i <= b; i++){
        var trigger = 0;
        if(i != 1){
            for(var j = 2; j <= i/2; j++){
                if(i % j == 0){
                    trigger = 1;
                    break;
                }
                else trigger = 0;
            }
            if(trigger == 0){
                numbers[count] = i; count++;
            }
        }
    }
    return numbers;
}

console.log(primeNumbers(1, 20));