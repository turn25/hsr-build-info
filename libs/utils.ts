import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const createQueryString = ({
  query,
  name,
  value,
}: {
  query;
  name: string;
  value: string;
}) => {
  const params = new URLSearchParams(query);
  params.set(name, value);

  return params.toString();
};

export const removeQueryString = ({ query, name }: { query; name: string }) => {
  const params = new URLSearchParams(query);
  params.delete(name);

  return params.toString();
};

export const mergeArray = <T>(arr1: T[] = [], arr2: T[] = [], key: keyof T) =>
  arr1
    .filter((arr1Row) => !arr2.find((arr2Row) => arr2Row[key] === arr1Row[key]))
    .concat(arr2);

export const formatAttributeValue = (value: number, percent: boolean) =>
  percent
    ? value.toLocaleString('en-US', {
        style: 'percent',
        maximumFractionDigits: 1,
      })
    : Math.floor(value);

export const isValidEnum = (value: string, iEnum: any): boolean => {
  const options: string[] = Object.values(iEnum);
  return options.includes(value);
};
