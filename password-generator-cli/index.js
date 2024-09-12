#!/usr/bin/env node

const { argv } = require('process');

/**
 * Creates a random password with a specified length and optional numbers.
 * 
 * @param {number} length Length of the password
 * @param {boolean} includeNumbers Whether to include numbers in the password
 * @returns {string} Generated password
 */
function generatePassword(length, includeNumbers) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const characters = includeNumbers ? lowercase + numbers : lowercase;
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        password += randomChar;
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
    -n, --numbers                 Include numbers in the password

Example:
  password-generator --length 12 --numbers
    `);
}

/**
 * Handle user arguments
 * 
 * @param {string[]} userArguments Arguments passed in by the user
 */
function handleArguments(userArguments) {
    let length = 8; // Default password length
    let includeNumbers = false;

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
            case '-n':
            case '--numbers':
                includeNumbers = true;
                break;
        }
    }

    // Generate and display password
    const password = generatePassword(length, includeNumbers);
    console.log(password);
}

handleArguments(argv.slice(2));