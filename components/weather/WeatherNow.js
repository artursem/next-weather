import { SunLight } from 'iconoir-react';
const WeatherNow = (props) => {
	return (
		<section className='w-full flex flex-col items-center'>
			<h3 className='font-bold text-4xl my-2'>Wrocław</h3>
			<SunLight width={120} height={120} className='my-6' />
			<h1 className='font-bold text-4xl my-2'>1&deg;C</h1>
			<p className='mb-2'>Partly cloudy</p>
		</section>
	);
};

export default WeatherNow;
