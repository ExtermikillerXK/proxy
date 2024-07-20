const { logger, registerCommand } = require("@vendetta/commands");
const Settings = require("./Settings");

const myCommandHandler = (args) => {
    // Placeholder for actual command logic
    const commandPrefix = "!";
    logger.log(`Command executed with prefix: ${commandPrefix}, arguments: ${args.join(", ")}`);
    return "Command executed successfully!";
};

module.exports = {
    onLoad: () => {
        // Registering the command with the necessary options
        registerCommand({
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
        logger.log("Command unregistered!");
    },
    settings: Settings,
};
