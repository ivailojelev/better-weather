import Card from "@/components/Card/Card";
import { WeatherData } from "@/entities/WeatherData";
import { formatTemperature } from "@/utils/formatting";

export interface WeatherDataCardProps {
    weatherData: WeatherData;
}

export default function WeatherDataCard({ weatherData }: WeatherDataCardProps) {
    const { location } = weatherData;
    return (
        <Card className="flex h-32 w-32 flex-col items-center">
            <div className="text-xl">
                {formatTemperature(weatherData.currentTemperature)}
            </div>
            <div>{location.name}</div>
            <div className="text-sm">{weatherData.condition}</div>
            <div>
                {formatTemperature(weatherData.maxTemperature)}/
                {formatTemperature(weatherData.minTemperature)}
            </div>
        </Card>
    );
}
