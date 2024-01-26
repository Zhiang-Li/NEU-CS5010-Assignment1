# Project Title

NEU-CS5010-Assignment1

## Description

This is a simple application to better understand how class inheritance works in JavaScript. The program is basically a prompt manager where it stores all interactions that "user" have with an "AI chatter". There are two interaction type: simple and DALL-E. Whereas a simple interaction only has a prompt and its response, DALL-E interaction has an extra image url attribute. 

The program allows user to:

1. add an interaction - addInteraction() and addDalleInteraction()
2. remove an existing interaction with its index position in the current interaction list- removeInteraction(index)
3. show all currently stored interactions - showAllInteractions()
4. count the number of total interactions, simple interactions, and DALL-E interactions stored - countInteractions()

## How to Run the Program

Caution: DO NOT MODIFY OTHER FILES EXCEPT Main.js

To run the program, first edit or add codes in main.js. Run node main.js to test the code in the Terminal. Current code in main.js should be sufficient to test all functionalities of the program.

The program should perform and return output:

1. addInteraction() and addDalleInteraction() - add an interaction to the end of the interaction list.
2. removeInteraction(index) - remove an interaction with the provided index. A successful removal will print the deleted interaction. A failed removal will print the index has no corresponding interaction.
3. showAllInteractions() - print all interactions with their indexes.
4. countInteractions() - print the number of total, simple, and DALLE interactions.

## Author

Zhiang Li
li.zhian@northeastern.edu

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details.