const promptSync = require('prompt-sync')();

export const prompt = (message: string): string => {
    return promptSync(message);
};
