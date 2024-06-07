// utils/validation.ts

export const validateString = (str: string, maxLength: number): boolean => {
    if (typeof str !== 'string') return false;
    if (str.length > maxLength) return false;
    return true;
};
