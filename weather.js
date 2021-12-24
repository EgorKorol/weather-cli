#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getIcon, getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess, printWeather } from './services/log.service.js';
import { saveCity, saveToken } from './services/saver.service.js';
import { getKeyValue } from './services/storage.service.js';

const getForecast = async () => {
  try {
    const city = await getKeyValue('city');
    const weather = await getWeather(city);

    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (error) {
    if (error?.response?.status === 404) {
      printError('Не верно указан город');
    } else if (error?.response?.status === 401) {
      printError('Не верно указан токен');
    } else {
      printError(error.message);
    }
  }
};

const initCLI = () => {
  const { argv } = yargs(hideBin(process.argv));

  if (argv.h) {
    return printHelp();
  }

  if (argv.t) {
    return saveToken(argv.t);
  }

  if (argv.c) {
    return saveCity(argv.c);
  }

  getForecast();
};

initCLI();
