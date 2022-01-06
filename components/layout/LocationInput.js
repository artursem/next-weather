import { Fragment, useRef, useState } from 'react';
import GPSButton from './GPSButton';
import SearchButton from './SearchButton';
const LocatonInput = (props) => {
	const [inputCity, setInputCity] = useState('');
	const locationRef = useRef();

	const handleInputChange = () => {
		setInputCity(locationRef.current.value);
	};

	const handleSearch = (event) => {
		event.preventDefault();
		console.log(inputCity);
	};

	return (
		<Fragment>
			<form className='flex-1 flex flex-row'>
				<input
					type='search'
					id={props.id}
					value={inputCity}
					ref={locationRef}
					onChange={handleInputChange}
					className='border-none bg-opacity-0 bg-transparent 
								h-12 p-1 w-full'
				/>
				<SearchButton onClick={handleSearch} />
			</form>
			<GPSButton />
		</Fragment>
	);
};
export default LocatonInput;
