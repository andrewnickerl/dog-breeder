const dogBreeder = (name, age, ...rest) => {
    var arguments = [name, age, ...rest]
    
    var dog = {}

    name = arguments[0] || 'Steve'
    age = arguments[1] || 0

    if (typeof arguments[0] === 'number') 
    {
        age = arguments[0]
        name = 'Steve'
    }

    dog.name = `${name}`
    dog.age = age
    return dog;
}


console.log(dogBreeder('Snoopy', 3))