const fs = require('fs');
module.exports.checkNotes = (title, body) => {
    let notes = readNotes();
    let duplicateValue = notes.filter((note) => {
        return title === note.title;
    })
    if(duplicateValue.length == 0) {
        notes.push({
            title: title,
            body: body
        });
        addNotes(notes);
        console.log(notes);
    } else {
        console.log('duplicate title')
    }
}

const readNotes = () => {
    try {
        let notes = fs.readFileSync('./note.json').toString();
        return JSON.parse(notes);
    } catch(e) {
        return [];
    }
}

addNotes = (notes) => {
    fs.writeFileSync('note.json', JSON.stringify(notes))
}

module.exports.deleteNotes = (title) => {
    
    let notes = readNotes();
   filteredNotes = notes.filter((note) => {
        return title != note.title
    })
    addNotes(filteredNotes)
}
