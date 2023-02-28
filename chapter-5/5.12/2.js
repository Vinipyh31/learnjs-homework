const room = {
    number: 23
};

const meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

const json = JSON.stringify(meetup, replacer = (key, value) => (key != "" && value == meetup) ? undefined : value);
console.log(json);