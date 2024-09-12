# Password Generator CLI

A simple command-line interface (CLI) application built with Node.js that generates random passwords of lowercase letters.

## Features

- Generate passwords consisting of lowercase letters
- Customizable password length
- Default password length of 8 if not specified
- Help message to guide users on application usage

## Usage

You can use `npx` to run the password generator without installing it globally. Use the following command structure:

npx password-generator [options]

### Options

- `-h, --help`: Display help message
- `-l, --length <length>`: Set the length of the password (default is 8)

### Examples

Generate a password with default length (8 characters):
npx password-generator

Generate a 12-character password:
npx password-generator --length 12

Display help message:
npx password-generator --help

## Development

To work on this project locally:

1. Clone the repository:
   git clone https://github.com/yourusername/password-generator-cli.git
2. Navigate to the project directory:
   cd password-generator-cli
3. Install dependencies (if any):
   npm install

The main script `password-generator.js` contains three main functions:

1. `generatePassword(length)`: Creates a random password of lowercase letters with the specified length.
2. `printHelpMessage()`: Prints the help message to the console.
3. `handleArguments(userArguments)`: Processes command-line arguments and generates the password.

To contribute to this project, please ensure your code follows the existing style and includes appropriate comments.


## License

This project and all associated files are licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License. - see the LICENSE file for details.

## Author

Stephen Crocker

## Acknowledgments

- Node.js community for providing excellent documentation and resources.
- All contributors who have helped improve this project.
