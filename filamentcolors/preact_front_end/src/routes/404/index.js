import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import style from './style.css';

export default class NotFound extends Component {
	render() {
		return (
			<div className={`${style.home} page`}>
				<Card>
					<div className={style.cardHeader}>
						<h2 className="mdc-typography--title">404! Page not found.</h2>
					</div>
					<div className={style.cardBody}>
						Looks like the page you are trying to access, doesn't exist.
					</div>
				</Card>
			</div>
		);
	}
}
