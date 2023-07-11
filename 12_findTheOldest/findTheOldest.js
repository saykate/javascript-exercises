const findTheOldest = (people) => {
    people.forEach(person => {
    if (person.hasOwnProperty('yearOfDeath') === false) {
        return person.age = ((new Date()).getFullYear()) - person.yearOfBirth
    }  else {
        return person.age = person.yearOfDeath - person.yearOfBirth
    }
});  
console.log(people)
    let oldest = people[0]
    people.filter((person) => {
        if (person.age > oldest.age) {
            oldest = person
        }
    }); return oldest
};



// Do not edit below this line
module.exports = findTheOldest;
