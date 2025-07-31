import notes from './notes.js';
import yargs from 'yargs';
import inquirer from 'inquirer';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
    //Customize your yargs version
    .version('1.1.0')
    .command({
        command: 'create',
        describe: 'Create a note',
        builder: {
            title: {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            },
            description: {
                describe: 'Note Description',
                demandOption: true,
                type: 'string',

            },
        },
        handler(argv) {
            notes.createNotes(argv.title, argv.description);
        }
    })
    .command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.readNote(argv.title)
        }
    })

    .command({
        command: 'update',
        describe: 'Update a note',
        builder: {
            title: {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            },
            description: {
                describe: 'Note Description',
                demandOption: true,
                type: 'string',
            },
        },
        handler(argv) {
            notes.updateNote(argv.title, argv.description);
        }
    })
    .command({
        command: 'delete',
        describe: 'Delete a note',
        builder: {
            title: {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.deleteNote(argv.title);
        }
    })
    .command({
        command: 'list',
        describe: 'List all notes',
        handler() {
            notes.listNotes();
        }
    })

    .argv;
