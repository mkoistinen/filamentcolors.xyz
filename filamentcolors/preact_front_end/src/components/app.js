import {h, Component} from 'preact';
import {Router} from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFound from '../routes/404';
import SwatchDetail from '../routes/swatchdetail';
import AboutPage from "../routes/about";
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class App extends Component {
    /** Gets fired when the route changes.
     *    @param {Object} e        "change" event from [preact-router](http://git.io/preact-router)
     *    @param {string} e.url    The newly routed URL
     */

    handleRoute = e => {
        this.setState({
            currentUrl: e.url,
            visitedBefore: !!cookies.get('fsdsdsd')
        });
    };

    render() {
        return (
            <div id="app">
                <Header selectedRoute={this.state.currentUrl}/>
                <Router onChange={this.handleRoute}>
                    <Home path="/"/>
                    <SwatchDetail path="/swatch/:swatch_id"/>
                    <AboutPage path="/about"/>
                    <NotFound default/>
                </Router>
            </div>
        );
    }
}
