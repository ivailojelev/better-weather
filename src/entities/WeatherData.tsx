import { addDays } from "date-fns";

import { devLocation, Location } from "./Location";

type Condition = "cloudy" | "sunny" | "thunderstorm";

export interface DailyForecastData {
    maxTemperature: number;
    minTemperature: number;
    condition: Condition;
    date: Date;
}

export interface WeatherData {
    currentTemperature: number;
    location: Location;
    maxTemperature: number;
    minTemperature: number;
    condition: Condition;
    dailyForecastData: DailyForecastData[];
}

const today = new Date();

const devDailyForecastData: DailyForecastData[] = [
    {
        maxTemperature: 30,
        minTemperature: 21,
        condition: "sunny",
        date: addDays(today, 1),
    },
    {
        maxTemperature: 27,
        minTemperature: 18,
        condition: "cloudy",
        date: addDays(today, 2),
    },
    {
        maxTemperature: 24,
        minTemperature: 15,
        condition: "thunderstorm",
        date: addDays(today, 3),
    },
    {
        maxTemperature: 31,
        minTemperature: 22,
        condition: "sunny",
        date: addDays(today, 4),
    },
];

export const devWeatherData: WeatherData = {
    currentTemperature: 27,
    location: devLocation,
    maxTemperature: 30,
    minTemperature: 21,
    condition: "cloudy",
    dailyForecastData: devDailyForecastData,
};
