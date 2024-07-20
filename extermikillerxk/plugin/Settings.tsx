const { useState } = require("react");

const Settings = ({ updateSettings, settings }) => {
    const [commandPrefix, setCommandPrefix] = useState(settings.commandPrefix || "!");

    const handlePrefixChange = (event) => {
        const newPrefix = event.target.value;
        setCommandPrefix(newPrefix);
        updateSettings({ commandPrefix: newPrefix });
    };

    return (
        <div>
            <label>
                Command Prefix:
                <input type="text" value={commandPrefix} onChange={handlePrefixChange} />
            </label>
        </div>
    );
};

module.exports = Settings;
