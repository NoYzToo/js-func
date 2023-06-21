console.group(1)

let c = 'first'
let e = 'second'
console.log(c, e)


function replaceValue(a, b) {
    // [a, b] = [b, a]
    e = [c, c = e][0]
}

replaceValue(c, e)
console.log(c, e)

console.groupEnd(1)
//////////////////////////////////////////////////////////////////////////////
console.group(2)

function Max_Name(name1, name2, name3) {

    let arrNames = []
    arrNames = arrNames.concat(name1, name2, name3,);
    let arr = []
    arr = arr.concat(name1.length, name2.length, name3.length,);

    return arrNames[arr.indexOf(Math.max.apply(null, arr))];

}



console.log(Max_Name("Alex", "George", "Michael"));

console.groupEnd(2)
///////////////////////////////////////////////////////////////////////////////
console.group(3)

function getEmail(name = example, surName = sur) {
    rand = Math.floor(1 + Math.random() * 100)
    console.log(rand)

    name = name.toLowerCase().trim()
    surName = surName.toLowerCase().trim()

    if (rand < 50) {
        return `${name}${surName}@gmail.com`
    }
    else if (rand > 50) {
        return `${surName}${name}@gmail.com`
    }
}

// let email = getEmail(prompt("Введите имя"), prompt("Введите фамилию"))

// console.log(`ваш имэйл ${email}`)
// console.log(email)

console.groupEnd(3)

console.group(4)



let successful = []

let unSuccessful = []

let taxes

let taxesMax = {}

let taxesMin = {}


let bank = [

    {

        name: 'Apple',

        budget: 1000000,

        tax: 28,

        expensesPerYear: [

            { title: 'Salaries', total: 125000 },

            { title: 'Utilites', total: 18000, },

            { title: 'Rent', total: 258000 }

        ]

    },

    {

        name: 'Microsoft',

        budget: 988000,

        tax: 21,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 148000

            },

            {

                title: 'Utilites',

                total: 124000,

            },

            {

                title: 'Rent',

                total: 314000

            }

        ]

    },

    {

        name: 'HP',

        budget: 609000,

        tax: 14,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 414000

            },

            {

                title: 'Utilites',

                total: 19000,

            },

            {

                title: 'Rent',

                total: 114400

            }

        ]

    },

    {

        name: 'Xiomi',

        budget: 889500,

        tax: 17,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 318000

            },

            {

                title: 'Utilites',

                total: 14000,

            },

            {

                title: 'Rent',

                total: 169000

            }

        ]

    },

    {

        name: 'Samsung',

        budget: 889500,

        tax: 12,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 650400

            },

            {

                title: 'Utilites',

                total: 29000,

            },

            {

                title: 'Rent',

                total: 212000

            }

        ]

    },

]


///////////////////////////

// for (let item of bank) {



//     let expensesPerMonth

//     // item.expensesPerYear.reduce((acc, item) => {
//     //     acc = acc + item.total
//     //     expensesPerMonth = acc
//     //     return acc
//     // }, 0)
    
//     // console.log(expensesPerMonth)
//     item.expensesPerMonth = []

//     for (let i of item.expensesPerYear) {
//         item.expensesPerMonth.push(Object.assign({}, i))
//     }
    
//     for (let elem of item.expensesPerMonth) {
//         elem.total = elem.total / 12
//     }
//     console.log(bank)


// console.log(item.budget / 100 * item.tax)


// }






//////////////////////////

function setup(array) {

    for (item of array) {
        item.expensesPerMonth = []
        
        for (let i of item.expensesPerYear) {
            item.expensesPerMonth.push(Object.assign({}, i))
        }
        
        for (let elem of item.expensesPerMonth) {
            elem.total = elem.total / 12
            elem.total = +elem.total.toFixed()
        }

        let procent 

        item.expensesPerMonth.reduce((acc, item) => {
            acc = acc + item.total
            procent = acc
            return acc
        }, 0)


        procent = procent / (item.budget / 12 / 100 * 1)

        item.procent = procent.toFixed(2)+ "%"

    }
    
}

setup(bank)
console.log(bank)

console.groupEnd(4)