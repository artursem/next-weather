const SearchButton = (props) => {
	return (
		<button
			type='submit'
			className='rounded-md ml-2 px-2 w-12
            bg-fog-100 text-white 
            hover:bg-fog-200 hover:text-fog-400
            active:bg-fog-200 active:text-fog-400
            ease-in duration-200'
			onClick={props.onClick}
		>
			ok
		</button>
	);
};
export default SearchButton;
