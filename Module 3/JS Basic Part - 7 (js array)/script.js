var arr = [
    'nasim',
    'rahaman',
    25,
    55.55
]

console.log(arr);
console.log(arr[1]);

arr.push('dusty', 'cube');

for(var i = 0; i <= arr.length; i++)
{
    console.log(arr[i]);
}

arr.shift()

for(var i = 0; i <= arr.length; i++)
{
    console.log(arr[i]);
}

arr.pop()

for(var i = 0; i <= arr.length; i++)
{
    console.log(arr[i]);
}

console.log(arr.indexOf(25));

arr.splice(1,2);

console.log(arr);