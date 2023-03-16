import CreateAccount from './CreateAccount';
import { myStore } from '../zustandstore/myStore';
import Dashboard from './Dashboard';

const Home = () => {

	const {pvk, pub} = myStore((state) => ({pvk: state.pvk, pub: state.pub}));

	return (
		<div>
			<h1>..::Mr.Kobold::.. Home</h1>
			{pvk !== "" && <Dashboard/>}
			{pvk === "" && <CreateAccount/>}
		</div>
	);
};

export default Home;