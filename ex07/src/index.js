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
        object[id].artist = value;
        return object;
      }
      if (prop === "tracks" && !object[id].tracks) {
        var tracksOfArtist = [];
        object[id].tracks = [...tracksOfArtist, value];
        return object;
      }
      if (prop === "tracks" && value !== "") {
        object[id].tracks = [...object[id].tracks, value];
        return object;
      }
      if (value === "") {
        delete object[id].prop;
        return object;
      }
    // Only change code above this line
}

console.log(updateRecords(collection, 2548, "artist", "")); // Change this line
module.exports = updateRecords;