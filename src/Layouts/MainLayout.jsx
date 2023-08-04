import {Outlet} from "react-router-dom";
import {Menu} from "../components/Menu";
import {Navigation} from "../components/Navigation";
import {Bluetooth} from "../components/Bluetooth";

export const MainLayout = () => {
	return (
		<>
			<Menu/>
			<Outlet/>
			<Navigation/>
			<Bluetooth/>
		</>
	)
}