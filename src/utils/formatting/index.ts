type TemperatureUnit = 'celcius' | 'fahrenheit';

export const formatTemperature = (temperature: number, unit: TemperatureUnit = 'celcius') => {
    if (unit === 'celcius') {
        return `${temperature}°C`;
    } else {
        // TODO: Add other units
    }
}

