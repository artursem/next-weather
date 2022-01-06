const Layout = (props) => {
	return (
		<main
			className='flex flex-col justify-start items-stretch min-h-screen
			bg-main-background bg-cover'
		>
			{props.children}
		</main>
	);
};

export default Layout;
