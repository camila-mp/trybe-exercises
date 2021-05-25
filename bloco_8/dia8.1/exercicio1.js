const employeeData = (fullName) => {
    let nomeEmail = fullName.split(" ").join("")
    const obj = {
        Nome: fullName,
        Email: `${nomeEmail}@trybe.com`.toLowerCase()
    }
    return obj;
};

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Pinheiro'),
        id2: callback('Fulano'),
        id3: callback('Carla Paiva'),
    }
    return employees
}

console.log(newEmployees(employeeData))