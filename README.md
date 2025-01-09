# Password Generator CLI

A command-line interface (CLI) application built with Node.js that generates customizable passwords based on user-specified criteria.

## Features

- Generate passwords with customizable length
- Option to include numbers in the password
- Option to include capital letters in the password
- Option to include symbols in the password
- Default password length of 8 if not specified
- Help command to display usage instructions

## Usage

You can use `npx` to run the password generator without installing it globally. Use the following command structure:

npx password-generator [options]

### Options

- `-h, --help`: Display help message
- `-l, --length <length>`: Set the length of the password (default is 8)
- `-n, --numbers`: Include numbers in the password
- `-c, --capitals`: Include capital letters in the password
- `-s, --symbols`: Include symbols in the password

### Examples

Generate a password with default settings (8 characters, lowercase letters only):
npx password-generator

Generate a 12-character password with numbers and capital letters:
npx password-generator --length 12 --numbers --capitals

Generate a 16-character password with all options enabled:
npx password-generator --length 16 --numbers --capitals --symbols

Display help message:
npx password-generator --help

## Development

To work on this project locally:

1. Clone the repository:
   git clone https://github.com/yourusername/password-generator-cli.git
2. Navigate to the project directory:
   cd password-generator-cli
3. Install dependencies (if any):
   npm install -g password-generator


The main script `index.js` contains three main functions:

1. `generatePassword(length, includeNumbers, includeCapitals, includeSymbols)`: Creates a random password based on the specified criteria.
2. `printHelpMessage()`: Prints the help message to the console.
3. `handleArguments(userArguments)`: Processes command-line arguments and generates the password.

To contribute to this project, please ensure your code follows the existing style and includes appropriate comments.

## License

This project is provided for **personal use only**. Redistribution, modification, or commercial use in any form is strictly prohibited without prior written permission from the author.

For detailed license terms, refer to the [LICENSE](./LICENSE.md) file.

## Author
- **[Stephen Crocker](https://github.com/SearchingSteve)** 


