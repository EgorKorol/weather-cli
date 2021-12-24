import { printError, printSuccess } from './log.service.js';
import { saveKeyValue } from './storage.service.js';

export const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен');

    return;
  }

  try {
    await saveKeyValue('token', token);
    printSuccess('Токен сохранен');
  } catch (error) {
    printError(error.message);
  }
};

export const saveCity = async (city) => {
  if (!city.length) {
    printError('Не передан город');

    return;
  }

  try {
    await saveKeyValue('city', city);
    printSuccess('Город сохранен');
  } catch (error) {
    printError(error.message);
  }
};
