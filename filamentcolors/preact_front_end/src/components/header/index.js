import {h, Component} from 'preact';
import {route} from 'preact-router';
import TopAppBar from 'preact-material-components/TopAppBar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Dialog from 'preact-material-components/Dialog';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TopAppBar/style.css';
import WelcomeExperience from "../welcome";
import style from './style.scss';

export default class Header extends Component {
    closeDrawer() {
        this.drawer.MDComponent.open = false;
    }

    openDrawer = () => (this.drawer.MDComponent.open = true);

    openSettings = () => this.dialog.MDComponent.show();

    drawerRef = drawer => (this.drawer = drawer);
    dialogRef = dialog => (this.dialog = dialog);

    linkTo = path => () => {
        route(path);
        this.closeDrawer();
    };

    linkOutside = path => () => {
        window.open(path, "_blank");
        this.closeDrawer()
    };

    goHome = this.linkTo('/');
    goToMyProfile = this.linkTo('/profile');
    goToAbout = this.linkTo('/about');

    goToGithub = this.linkOutside("https://github.com/itsthejoker/filamentcolors.xyz");
    goToTwitter = this.linkOutside("https://twitter.com/filamentcolors");

    render(props) {
        console.log(props.selectedRoute);
        let welcome;
        if (!props.visitedBefore && props.selectedRoute) {
            welcome = <WelcomeExperience/>
        } else {
            welcome = <div/>
        }
        console.log(welcome);
        return (
            <div>
                <TopAppBar className={style.blackText}>
                    <TopAppBar.Row>
                        <TopAppBar.Section align-start>
                            <TopAppBar.Icon menu onClick={this.openDrawer}>
                                menu
                            </TopAppBar.Icon>
                            <TopAppBar.Title onClick={this.goHome}>FilamentColors.xyz</TopAppBar.Title>
                        </TopAppBar.Section>
                    </TopAppBar.Row>
                </TopAppBar>
                <Drawer modal ref={this.drawerRef}>
                    <Drawer.DrawerContent>
                        <Drawer.DrawerItem selected={props.selectedRoute === '/'} onClick={this.goHome}>
                            <List.ItemGraphic>home</List.ItemGraphic>
                            Library
                        </Drawer.DrawerItem>
                        <Drawer.DrawerItem onClick={this.goToTwitter}>
                            <List.ItemGraphic>favorite</List.ItemGraphic>
                           Twitter
                        </Drawer.DrawerItem>
                        <Drawer.DrawerItem onClick={this.goToGithub}>
                            <List.ItemGraphic>star</List.ItemGraphic>
                            Github
                        </Drawer.DrawerItem>
                        <Drawer.DrawerItem selected={props.selectedRoute === '/about'} onClick={this.goToAbout}>
                            <List.ItemGraphic>info</List.ItemGraphic>
                            About
                        </Drawer.DrawerItem>
                    </Drawer.DrawerContent>
                </Drawer>
            </div>
        );
    }
}
