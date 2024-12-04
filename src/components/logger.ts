const app = 'linkedin-plus';
const sep = ' | ';
const debug = true;

const filterList = ['eval', 'Object.message', 'chrome-extension'];

export const log = {
    message: (text: string) => {
        if (!debug) return;

        const functionName =
            new Error().stack
                ?.split('\n')[2]
                .trim()
                .split(' ')
                .filter((str) => !filterList.some((filter) => str.includes(filter)))[1] + '()';

        // eslint-disable-next-line no-console
        return console.log([app, functionName, text].join(sep));
    },
    // eslint-disable-next-line no-console
    error: (text: string) => console.error(app, '\n', text),
};
