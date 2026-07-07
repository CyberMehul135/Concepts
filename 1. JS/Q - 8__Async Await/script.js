// Ex - 1 : 'async' keyword always return a promise
// const example = async () => {

// }

// example()


// Ex - 2 : 
// const whatever = async () => {
//     const p1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5)
//         }, 3000)
//     })

//     return p1
// }

// whatever()
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// Ex - 3 :
const fetchData = async () => {
    try {
        const res = await fetch('https://dummyjson.com/products?delay=1000');
        const data = await res.json()        
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
}

fetchData()