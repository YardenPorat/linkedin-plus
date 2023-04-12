const app = 'linkedin-plus';
const sep = ' | ';
const debug = true;
export const getLogger = (scopes: string[]) => {
    // eslint-disable-next-line no-console, @typescript-eslint/no-empty-function
    const log = debug ? console.log : () => {};
    return log.bind(log, [app, ...scopes].join(sep));
};
