import { logger, commands, settings } from "@vendetta";
import Settings from "./Settings";

const myCommandHandler = (args) => {
    const commandPrefix = settings.get("commandPrefix") || "!";
    logger.log(`Command executed with prefix: ${commandPrefix}, arguments: ${args.join(", ")}`);
    return "Command executed successfully!";
};

export default {
    onLoad: () => {
        logger.log("Hello world!");
        commands.registerCommand({
            name: "myCommand",
            description: "This is a test command",
            execute: myCommandHandler,
        });
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        commands.unregisterCommand("myCommand");
    },
    settings: Settings,
}
