/* eslint-disable @typescript-eslint/no-explicit-any */
export const checkArray = (arr: any[]) => {
    return Array.isArray(arr) && arr.length > 0 ? true : false;
}