import fs from 'fs';
import chalk from 'chalk';

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {

        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}

const createNotes = (title, description) => {

    const notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title);

    if (!duplicateNotes) {

        notes.push({
            title: title,
            description: description
        })
        saveNotes(notes);
        console.log(chalk.green('New note added!'));
        return true;

    } else {
        console.log(chalk.red('No note title taken!'));
        return false;
    }
}

const readNote = (title) => {

    const notes = loadNotes();
    const findANote = notes.find((note) => note.title === title);

    if (findANote) {

        console.log(chalk.inverse(findANote.title));
        console.log(findANote.description);

    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const updateNote = (title, description) => {

    const notes = loadNotes();
    const findANote = notes.find((note) => note.title === title);

    if (findANote) {

        findANote.description = description;
        saveNotes(notes);
        console.log(chalk.green.inverse('Note updated!'));

    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const deleteNote = (title) => {

    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {

        console.log(chalk.green.inverse('Note deleted!'));
        saveNotes(notesToKeep);

    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const listNotes = () => {

    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));

    notes.forEach((note) => {
        console.log(note.title);
    })
}

export default {
    createNotes: createNotes,
    readNote: readNote,
    updateNote: updateNote,
    deleteNote: deleteNote,
    listNotes: listNotes
}