# 📝 CLI To-Do Application

A simple and intuitive command-line interface (CLI) application to manage your daily notes directly from your terminal. Add, view, update, and remove your notes efficiently.

## ✨ Features

* ➕ **Create Note:** Create new notes with a title and description.
* 📖 **View Note:** View a single saved note.
* 🪶 **Update Note:** Modify the description of an existing note.
* 🗑️ **Delete Note:** Delete completed or unwanted notes.
* 🗃️ **List Notes:** View all your notes.

## 🚀 How to Install

To clone and run this project locally, follow the steps below:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kaiky404/cli-todo.git
   cd cli-todo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 💡 How to Use

All operations are interactive, guided by prompts in the terminal.

### Create a New Note

To create a new note, run:

```bash
node app.js create
```

You will be prompted to enter the `Title` and `Description` for the new note.

### View a Note

To read a note, run:

```bash
node app.js read
```

### Update an Existing Note

To modify a note, run:

```bash
node app.js update
```

The application will ask for the `Note Title to Update` and the `New Description`.

### Delete a Note

To delete a note, run:

```bash
node app.js delete
```

You will be prompted to provide the `Note Title to Delete`.

### List All Notes

To see a complete list of your notes, run:

```bash
node app.js list
```

## 🛠️ Technologies Used

* **Node.js**: JavaScript runtime environment.
* **Yargs**: For parsing and building command-line commands.
* **Chalk**: To style console output.
* **Inquirer.js**: For creating interactive command-line prompts.

## 🤝 Contributing

Contributions are welcome! If you have any ideas, suggestions, or find a bug, feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## 📧 Contact

If you have any questions or suggestions, you can reach me through my GitHub profile: [Kaiky404](https://github.com/Kaiky404)