import { logger, registerCommand } from "@vendetta/commands";
import Settings from "./Settings";

const myCommandHandler = (args) => {
    // Placeholder for actual command logic
    const commandPrefix = "!";
    logger.log(`Command executed with prefix: ${commandPrefix}, arguments: ${args.join(", ")}`);
    return "Command executed successfully!";
};

export default {
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
        // Note: If `unregisterCommand` is available, use it to unregister
        logger.log("Command unregistered!");
    },
    settings: Settings,
};
