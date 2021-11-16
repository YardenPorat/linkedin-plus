const LOCAL_STORAGE_KEY = 'linkedin-plus';

export const readFromLocalStorage = () => {
    return new Set<string>(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '[]')
    );
};

export const toggleFromStorage = (id: string) => {
    const storage = readFromLocalStorage();

    if (!storage.has(id)) {
        storage.add(id);
        console.log(`'${id}' Added`);
    } else {
        storage.delete(id);
        console.log(`'${id}' Removed`);
    }

    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(Array.from(storage))
    );
};
