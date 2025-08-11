const person = {
    name : "Nishant",
    sname : "kumar",
    address: {
        street: "subhash palli",
        city: "Kne",
        state: "Br"
    }
}

const prersondetail = {
    ...person,
    personaddress:{
        ...person.address
    }
}

console.log(prersondetail.personaddress)

