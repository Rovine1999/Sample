let y = document.getElementsByClassName('sampleClass');
y[0].innerHTML = 'abc'

let arr = ['Nairobi', 'Kisumu', 'Kisumu'];

for ( let index = 0; < arr.length; index++) {
    const element = arr[index];
    console.log('elemet' + element);

}
console.log("========")
arr.forEach(
    element => {
        console.log(`element ${element}`);
    }
)