var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]        
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    const osoba = contacts.filter(osoba => osoba["firstName"] === name);
    if(osoba.length === 0) {
        return "No such contact"
    }
    if(osoba[0][prop] === undefined) {
        return "No such property"
    }
    return osoba[0][prop];
    // Only change code above this line
}

console.log(lookUpProfile("Jane", "lastName")); //Change this line
module.exports = lookUpProfile;