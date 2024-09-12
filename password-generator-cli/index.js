#!/usr/bin/env node

const { argv } = require('process');

/**
 * Creates a random password of lowercase letters with a specified length.
 * 
 * @param {number} length Length of the password
 * @returns {string} Generated password
 */
function generatePassword(length) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomLetter = lowercase[Math.floor(Math.random() * lowercase.length)];
        password += randomLetter;
    }
    return password;
}

/**
 * Print help message to the console
 */
function printHelpMessage() {
    console.log(`
Usage: password-generator [options]

Options:
    -h, --help                    Display help message
    -l, --length <length>         Set the length of the password (default is 8)

Example:
  password-generator --length 12
    `);
}

/**
 * Handle user arguments
 * 
 * @param {string[]} userArguments Arguments passed in by the user
 */
function handleArguments(userArguments) {
    let length = 8; // Default password length

    for (let i = 0; i < userArguments.length; i++) {
        switch (userArguments[i]) {
            case '-h':
            case '--help':
                printHelpMessage();
                return;
            case '-l':
            case '--length':
                length = parseInt(userArguments[++i], 10);
                if (isNaN(length) || length <= 0) {
                    console.error('Invalid length. Please provide a positive integer.');
                    return;
                }
                break;
        }
    }

    // Generate and display password
    const password = generatePassword(length);
    console.log(password);
}

handleArguments(argv.slice(2));
