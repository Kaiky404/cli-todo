import notes from './notes.js';
import yargs from 'yargs';
import inquirer from 'inquirer';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
    .version('1.1.0')

    .command({
        command: 'create',
        describe: 'Create a note',
        builder: {
            title: { describe: 'Note title', type: 'string' },
            description: { describe: 'Note description', type: 'string' }
        },
        handler: async (argv) => {
            let { title, description } = argv;

            if (!title || !description) {
                const answer = await inquirer.prompt([
                    { type: 'input', name: 'title', message: 'Title: ' },
                    { type: 'input', name: 'description', message: 'Description:' }
                ]);
                title = answer.title;
                description = answer.description;
            }

            notes.createNotes(title, description);
        }
    })
    .command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: { describe: 'Note Title', type: 'string' }
        },
        handler: async (argv) => {
            let { title } = argv;

            const answer = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Title: ',
                    default: title
                }
            ]);
            title = answer.title;

            notes.readNote(title)
        }
    })

    .command({
        command: 'update',
        describe: 'Update a note',
        builder: {
            title: { describe: 'Note Title', type: 'string' },
            description: { describe: 'Note Description', type: 'string' }
        },
        // ...
        handler: async (argv) => {
            const answer = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Note Title to Update:',
                    default: argv.title
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'New Description:',
                    default: argv.description
                }
            ]);

            notes.updateNote(answer.title, answer.description);
        }
    })
    .command({
        command: 'delete',
        describe: 'Delete a note',
        builder: {
            title: { describe: 'Note Title', type: 'string' },
        },
        handler: async (argv) => {

            const answer = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Note Title to Delete:',
                    default: argv.title
                }
            ]);

            notes.deleteNote(answer.title);
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
