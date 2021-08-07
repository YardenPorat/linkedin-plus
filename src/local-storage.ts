const LOCAL_STORAGE_KEY = 'linkedin-plus';

export const readFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '{}');
};

export const isOnMemory = (id: string): boolean => {
    return !!(id in readFromLocalStorage());
};

export const toggleFromStorage = (id: string): void => {
    const storage = readFromLocalStorage();
    if (!isOnMemory(id)) {
        storage[id] = 1;
        console.log(`'${id}' Added`);
    } else {
        delete storage[id];
        console.log(`'${id}' Removed`);
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storage));
};
