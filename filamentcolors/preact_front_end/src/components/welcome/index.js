import {h, Component} from 'preact';
import Dialog from 'preact-material-components/Dialog';
import Button from 'preact-material-components/Button';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Dialog/style.css';
import style from './style.scss';
import {MDCDialog} from '@material/dialog';
import Lightbox from "react-image-lightbox";


export default class WelcomeExperience extends Component {

    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            '//placekitten.com/1500/500',
            '//placekitten.com/4000/3000',
            '//placekitten.com/800/1200',
            '//placekitten.com/1500/1500',
        ]
    };

    componentDidMount(props) {
        // const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
        // console.log(dialog);
        // dialog.open()
        // this.Dlg.MDComponent.show()
    }
}
