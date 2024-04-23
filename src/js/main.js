// const coderRiwi = {
//     name: "Simón",
//     lastName: "Arias",
//     bithDate: new Date("1992-05-03 9:15:00"),
//     rh: "A-",
//     address: "calle 53",
//     phone:3116112981,
//     email: "sariass077@gmail.com"
// }


// console.groupCollapsed("programación sin objetos")

// const fullName = "Simón Arias Saldarriaga"
// const email = "sariass077@gmail.com"

// function saludar() {
//     console.log("hola mundo soy", fullName, "y mi correo es", email)
// }

// console.log(fullName)
// console.log(email)
// saludar()

// console.groupEnd

const coderRiwi = {
    name: "Simón",
    lastName: "Arias",
    bithDate: new Date("1992-05-03 9:15:00"),
    rh: "A-",
    location: {
        country: "Colombia",
        state: "Antioquia",
        city: "Medellín",
        addrees: "calle 53b",
    },
    phone: 3116112981,
    email: "sariass077@gmail.com",
    saludar: function () {
        console.log("hola mundo soy", this.name, this.lastName, "este es mi correo", email)
    }
}

// console.log(coderRiwi.name)
// console.log(coderRiwi['name'])
// console.log(coderRiwi.location.addrees)
// coderRiwi.saludar()

const coderRiwi = {}
coderRiwi.clan = "linux"

// Definir una propiedad 
Object.defineProperty(coderRiwi, "clan", {
    value: "linux",
    writable: false, // permite modificar la propiedad
    enumerable: true, // permite que la propiedad aparesca
    configurable: true // permite que la propiedad sea eliminada
})

// Se pueden ambas formas pero es mas práctico para trrabajar con Objetos (segundo caso, similar a diccionario)
coderRiwi.contactName = "Simón Arias"
coderRiwi.phoneNumber = "311611293"
coderRiwi.optionalPhoneNumber = "3247644"

coderRiwi.emergencyCOntact = {
    contactName: " Simón Arias",
    phoneNumber: "311611293",
    optionalPhoneNumber: "3247644"
}


// Otra forma, sería la tercera forma para agregar propiedades a  objetos 

Object.assign(coderRiwi, {
    contactName: " Simón Arias",
    phoneNumber: "311611293",
    optionalPhoneNumber: "3247644"

})

// Agregar objetos

console.group("sum objects")

const obj1 = {
    a: "uno",
}
const obj2 = {
    b: "dos",
}
const obj3 = {
    a: "uno",
}
const obj4 = {
    b: "dos",
}

const sumaObjetos = Object.assign(obj1, obj2)

console.log("obj1", obj1)
console.log("obj2", obj2)
console.log("suma", sumaObjetos)

console.error("line break")
const sumaObjetos2 = { ...obj3, ...obj4 } // esos tres puntos quieren decir que se tomará todo el contenido de cada objeto mencionado

console.log("obj3", obj3)
console.log("obj4", obj4)
console.log("suma", sumaObjetos2)

console.groupEnd()


// Desestructuración de objetos

console.groupCollapsed("desestructuración de objetos")

const objectExampleONe = {
    userName: " Simón Arias",
    userEmail: "sariass077@gmai.com",
    userPassword: "sariass7908",
    userRole: "administrador"
}

// forma manual

// let userName = objectExampleONe.userName
// let userEmail = objectExampleONe.userEmail
// let userPassword = objectExampleONe.userPassword


console.log(userName)
console.log(userEmail)
console.log(userPassword)

//forma automamtica

let {
    userName,
    userEmail,
    userPassword
} = objectExampleONe

console.log(userName)
console.log(userEmail)
console.log(userPassword)

// sacar información con nombre diferente

let {
    userName: user,
    userEmail: emailExtraido,
    userPassword: password
} = objectExampleONe

console.log(user)
console.log(emailExtraido)
console.log(password)

// Podemos renombrar variables. Desestructuración de objetos

const coderRiwiDeestructuracion = {
    name: "Simón",
    lastName: "Arias",
    bithDate: new Date("1992-05-03 9:15:00"),
    rh: "A-",
    location: {
        country: "Colombia",
        state: "Antioquia",
        city: "Medellín",
        addrees: "calle 53b",
    },
    phone: 3116112981,
    email: "sariass077@gmail.com",
    saludar: function () {
        console.log("hola mundo soy", this.name, this.lastName, "este es mi correo", email)
    }
}

let {
    name: nameCoder,
    lastName,
    location: {
        addrees
    },
    email: emailCoder
} = coderRiwiDeestructuracion

console.log("nombre", nameCoder)
console.log("apellido", lastName)
console.log("dirección", addrees)
console.log("correo", emailCoder)