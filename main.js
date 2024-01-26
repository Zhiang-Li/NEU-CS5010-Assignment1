import PromptsManager from "./PromptsManager.js";

// main.js is for testing
const test = new PromptsManager();

// add one simple interaction
test.addInteraction("this is a question", "this is an answer");

// add one dalle interaction
test.addDalleInteraction("help me draw a pic of the sun", "sure here is the sun!", "this is the url of the sun");

// expected output will have two interactions
test.showAllInteractions();
// expected to see total of two interactions
test.countInteractions();
// expected to remove the first simple interaction added
test.removeAction(0);
// expected to see only dalle interaction left
test.showAllInteractions();
// expected to only one interaction
test.countInteractions();
// expected to not remove anything but receive a warning
test.removeAction(2);
