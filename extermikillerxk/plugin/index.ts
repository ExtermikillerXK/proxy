import { logger } from "@vendetta";
import { registerCommand } from "@vendetta/commands";
import Settings from "./Settings";

const myCommandHandler = (args: string[]): string => {
    const commandPrefix = "!";
    logger.log(`Command executed with prefix: ${commandPrefix}, arguments: ${args.join(", ")}`);
    return "Command executed successfully!";
};

let myCommand: Function;

export default {
    onLoad: () => {
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
        if (myCommand) {
            myCommand();
            logger.log("Command unregistered!");
        }
    },
    settings: Settings,
};
