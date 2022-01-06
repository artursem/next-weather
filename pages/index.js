import { Fragment } from 'react';
import Card from '../components/layout/Card';
import LocatonInput from '../components/layout/LocationInput';

export default function Home() {
	return (
		<Fragment>
			<Card>
				<LocatonInput />
			</Card>
			<Card classes='p-2'>test 1</Card>
			<Card classes='h-72 p-2'>test 2</Card>
			<Card classes='h-96 p-2'>test 3</Card>
		</Fragment>
	);
}
