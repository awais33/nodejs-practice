const yargs = require('yargs');
const notes = require('./note');
yargs.command({
    command: 'add',
    describe: 'add note',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
        },
        body: {
            describe: 'body',
            demandOption: true,
        },
    },
    handler: (argv) => {
        notes.checkNotes(argv.title, argv.body)
    }
});

yargs.command({
    command: 'delete',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
        },
    },
    handler: (argv) => {
        notes.deleteNotes(argv.title)
    }
});
yargs.parse();
