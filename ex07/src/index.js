var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};
// Keep a copy of collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
    // Only change code below this line
    if (prop !== "tracks" && value !== "") {
        object[id][prop] = value;
    } else if (prop === "tracks" && !object[id].tracks) {
        object[id].tracks = [];
        object[id].tracks.push(value);
    } else if (prop === "tracks" && value !== "") {
        object[id].tracks.push(value);
    } else if (value === "") {
        delete object[id][prop];
    }
    return object;
    // Only change code above this line
}

console.log(updateRecords(collection, 2548, "artist", "")); // Change this line
module.exports = updateRecords;