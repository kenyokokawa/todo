export enum LocalStorageKeys {
  TASKS = "tasks",
}

export const saveToLocalStorage = <T>(items: T[], key: string) => {
  localStorage.setItem(key, JSON.stringify(items));
};

export const getFromLocalStorage = <T>(key: string): T[] => {
  const storedItems = localStorage.getItem(key);
  return storedItems ? JSON.parse(storedItems) : [];
};
