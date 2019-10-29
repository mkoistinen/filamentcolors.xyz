import {Component} from 'preact';
import {LayoutGrid} from "preact-material-components";
import Elevation from 'preact-material-components/Elevation';
import axios from 'axios';

import {SwatchCard} from "../../components/swatch_card";
import LoadingGif from '../../components/loading_gif';

import style from './style.sass';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Elevation/style.css';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/style.css';

export default class Home extends Component {

    state = {
        error: null,
        isLoaded: false,
        items: []
    };

    componentWillMount() {
        axios.get('http://localhost:8000/api/swatch/')
            .then(response => {
                this.setState({
                    isLoaded: true,
                    items: response.data.results
                });
            })
            .catch(function (error) {
                this.setState({
                    isLoaded: true,
                    error
                });
                console.log(error);
            })
    };

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div className={`${style.home} page`}>
                <h2 className="mdc-typography--title">Error: {error.message}</h2>
            </div>;
        } else if (!isLoaded) {
            return <div className={`${style.home} page`}>
                <LoadingGif/>
            </div>;
        } else {
            return (
                <div className={`${style.home} page`}>
                    <LayoutGrid container className={style.maxTableWidth}>
                        <LayoutGrid.Inner>
                            {items.map(item => (
                                <LayoutGrid.Cell cols="4">
                                    <Elevation z={3}>
                                    <SwatchCard s={item}/>
                                    </Elevation>
                                </LayoutGrid.Cell>
                            ))}
                        </LayoutGrid.Inner>
                    </LayoutGrid>
                </div>
            );
        }
    }
}

// export default class Home extends Component {
// 	render() {
// 		return (
// 			<div class={`${style.home} page`}>
// 				<h1>Home route</h1>
// 				<Card>
// 					<div class={style.cardHeader}>
// 						<h2 class=" mdc-typography--title">Home card</h2>
// 						<div class=" mdc-typography--caption">Welcome to home route</div>
// 					</div>
// 					<div class={style.cardBody}>
// 						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
// 					</div>
// 					<Card.Actions>
// 						<Card.ActionButton>OKAY</Card.ActionButton>
// 					</Card.Actions>
// 				</Card>
// 			</div>
// 		);
// 	}
// }
