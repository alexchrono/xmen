function zanyZip(arr1, arr2) {

    if (arr1.length > arr2.length) { let max =arr1.length; let limit = (arr1.length - (arr1.length - arr2.length))

        //for big loop
        for (let i = 0; i < arr1.length; i++) {

           a = arr1.shift();
               console.log(a)
            newArr1.push(a)
        }
        for (let j = 0; j < max; j++) {
            if (j <= limit) {
                b = arr2.shift();
                newArr2.push(b)
            }
            else if (j > limit) {
                newArr2.push(null)
            }
        }
    } }
