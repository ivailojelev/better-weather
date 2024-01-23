import { format } from "date-fns";

import { DailyForecastData } from "@/entities/WeatherData";
import { formatTemperature } from "@/utils/formatting";

export interface DailyForecastProps {
    dailyForecast: DailyForecastData[];
}

export function DailyForecast({ dailyForecast }: DailyForecastProps) {
    return (
        <div className="flex items-start justify-center">
            {dailyForecast.map((forecast, index) => {
                return (
                    <div
                        key={format(forecast.date, "yyyy-MM-dd")}
                        className="flex flex-col items-center px-2"
                    >
                        <div className="text-sm">{forecast.condition}</div>
                        <div>
                            {formatTemperature(forecast.maxTemperature)}/
                            {formatTemperature(forecast.minTemperature)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
