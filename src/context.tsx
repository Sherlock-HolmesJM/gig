import { PureComponent, ReactNode, createContext } from "react";

interface Props {}

interface State {
	login: boolean;
}

const Context = createContext({
	login: false,
	setLogin: (login: boolean) => {}
});

class Provider extends PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			login: false
		};
	}

	fn = {
		setLogin: (login: boolean) => {
			this.setState({ login });
		}
	};

	render(): ReactNode {
		return (
			<Context.Provider value={{ ...this.state, ...this.fn }}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export { Context };

export default Provider;
