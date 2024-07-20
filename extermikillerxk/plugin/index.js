import { logger } from "@vendetta/logger"; // Adjust if necessary
import { registerCommand } from "@vendetta/commands";
import Settings from "./Settings";

const myCommandHandler = (args) => {
    const commandPrefix = "!";
    logger.log(`Command executed with prefix: ${commandPrefix}, arguments: ${args.join(", ")}`);
    return "Command executed successfully!";
};

export default {
    onLoad: () => {
        registerCommand({
            name: "myCommand",
            displayName: "My Command",
            description: "This is a test command",
            displayDescription: "This command executes a test action.",
            options: [], // Define options if needed
            execute: myCommandHandler,
            applicationId: -1, // Adjust as needed
            inputType: 1,     // Adjust as needed
            type: 1,          // Adjust as needed
        });
        logger.log("Command registered!");
    },
    onUnload: () => {
        // Add unregister logic if applicable
        logger.log("Command unregistered!");
    },
    settings: Settings,
};
