import { Fragment } from 'react';
import Card from '../components/layout/Card';
import LocatonInput from '../components/weather/LocationInput';
import WeatherNow from '../components/weather/WeatherNow';
import WeatherWeek from '../components/weather/WeatherWeek';

export default function Home() {
	const getLocation = (location) => {
		console.log(location.method, location.city, location.lon, location.lat);
	};

	return (
		<div className='flex flex-col items-stretch w-full max-w-2xl '>
			<Card>
				<LocatonInput onSearch={getLocation} />
			</Card>
			<Card classes='p-2'>
				<WeatherNow />
			</Card>
			<Card classes='p-2'>
				<WeatherWeek />
			</Card>
			<Card classes='h-48 p-2'>MAPA</Card>
		</div>
	);
}
