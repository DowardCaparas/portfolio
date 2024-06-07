// utils/validation.ts

export const validateString = (str: string, maxLength: number): boolean => {
    return typeof str === 'string' && str.length > 0 && str.length <= maxLength;
};
