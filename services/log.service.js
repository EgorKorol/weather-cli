import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
  console.log(`${chalk.bgRed('ERROR')} ${error}`);
};

export const printSuccess = (message) => {
  console.log(`${chalk.bgGreen('SUCCESS')} ${message}`);
};

export const printHelp = () => {
  console.log(
    dedent`
    ${chalk.bgGreen('SUCCESS')}
    Без параметров - вывод погоды
    -c [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `
  );
};

export const printWeather = ({ name, weather, main, wind }, icon) => {
  const { feels_like, temp, humidity } = main;
  const [{ description }] = weather;
  const { speed } = wind;

  console.log(
    dedent`
    ${chalk.bgYellowBright('WEATHER')} Погода в городе ${name}
    ${icon}  ${description}
    Температура: ${temp} (ощущается как ${feels_like})
    Влажность: ${humidity}%
    Скорость ветра: ${speed}м/c
    `
  );
};
