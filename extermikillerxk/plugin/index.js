import { registerCommand } from "@vendetta/commands";
import Settings from "./Settings";

// Command handler function
const myCommandHandler = (args) => {
    const commandPrefix = "!";
    console.log(`Command executed with prefix: ${commandPrefix}, arguments: ${args.join(", ")}`);
    return "Command executed successfully!";
};

export default {
    onLoad: () => {
        registerCommand({
            name: "myCommand",
            displayName: "My Command",
            description: "This is a test command",
            displayDescription: "This command executes a test action.",
            options: [], // Add command options if needed
            execute: myCommandHandler,
            applicationId: -1, // Adjust as needed
            inputType: 1,     // Adjust as needed
            type: 1,          // Adjust as needed
        });
        console.log("Command registered!");
    },
    onUnload: () => {
        // Add unregister logic if applicable
        console.log("Command unregistered!");
    },
    settings: Settings,
};
