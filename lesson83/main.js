const users = {
    egor: {
        age: 16,
        city: 'Kaluga',
        play: 'guitar'
    }

}
console.log(users.egor)

const Object = {

    welcome: function (Name) {

        return 'Hello ' + Name

    }

}

const greet = Object.welcome('Женя')

console.log(greet)

const user = {
    Сергей: {
        age: 20,
        city: 'Москва',
        work: 'Строитель',
        isAdmin: 'user'
    },
    Максим: {
        age: 28,
        city: 'Кишенев',
        work: 'программист',
        isAdmin: 'admin'
    },
    Виолета: {
        age: 18,
        city: 'Новосибирск',
        work: 'доктор',
        isAdmin: 'user'
    }



}

let number = 2

for (let i = 0; i <user.length; i++) {
    if (user[i] .isAdmin !== 'user') {
        
        number++
    }

}

console.log(number)