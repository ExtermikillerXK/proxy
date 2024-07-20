const { logger } = require("@vendetta");
const { registerCommand } = require("@vendetta/commands");
const Settings = require("./Settings");

const myCommandHandler = (args) => {
    // Placeholder for actual command logic
    const commandPrefix = "!";
    logger.log(`Command executed with prefix: ${commandPrefix}, arguments: ${args.join(", ")}`);
    return "Command executed successfully!";
};

let myCommand;

module.exports = {
    onLoad: () => {
        // Registering the command with the necessary options
        myCommand = registerCommand({
            name: "myCommand",
            displayName: "My Command",
            description: "This is a test command",
            displayDescription: "This command executes a test action.",
            options: [],  // Add options here if needed
            execute: myCommandHandler,
            applicationId: -1, // If needed; adjust as per your context
            inputType: 1,     // If needed; adjust as per your context
            type: 1,          // If needed; adjust as per your context
        });
        logger.log("Command registered!");
    },
    onUnload: () => {
        // Unregistering the command if needed
        // Note: If `unregisterCommand` is available, use it to unregister
        myCommand();
        logger.log("Command unregistered!");
    },
    settings: Settings,
};
