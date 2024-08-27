import IMenu from "../../types/menu-types";

const MenuItem = (props: IMenu) => (
	<a href={props.path} className={`text-xl text-gray-600 font-bold`}>{props.name}</a>
)

const HomeMenu = () => {

	const menu: IMenu[] = [
		{ name : "Home", path : "/" },
		{ name : "Login", path : "/login" },
		{ name : "Register", path : "/register" }
	]

	return (
		<div className={`w-full h-20 bg-gray-300 py-10 px-5 flex flex-row items-center justify-center gap-10`}>
			{
				menu.map((item, index) => (
					<MenuItem key={index} name={item.name} path={item.path} />
				))
			}
		</div>
	)
}

export default HomeMenu;