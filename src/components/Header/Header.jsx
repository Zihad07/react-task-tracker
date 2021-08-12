import Button from "../Button/Button";

const Header = ({ title }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button color="green" text="Add"></Button>
			<Button></Button>
		</header>
	);
};

// default value use
Header.defaultProps = {
	title: "Task Tracker",
};
export default Header;
