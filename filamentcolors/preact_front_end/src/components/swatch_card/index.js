import {h, Component} from 'preact';
import {Card} from "preact-material-components";
import 'preact-material-components/Card/style.css';
import {route} from 'preact-router';
import style from './style.sass';

export class SwatchCard extends Component {

    goToDetail = id => () => {
        route(`swatch/${id}`);
    };

    render() {
        const {id, card_img, color_name, hex_color, manufacturer, date_added_date} = this.props.s;
        return (
            <Card id={id} className={style.swatchCard}>
                <div onClick={this.goToDetail(id)} className={style.clickable}>
                    <Card.Media className="card-header-image">
                        <img className={style.cardHeaderImg} src={card_img}
                             alt={"the thumbnail image for " + color_name}/>
                    </Card.Media>
                    <div className={style.addCardSpace}>
                        <div className="card-header">
                            <h3 className="mdc-typography--title">{hex_color}
                            </h3>
                            <h4
                                className="mdc-typography--caption">{color_name} - {manufacturer.name}
                            </h4>
                        </div>
                        <Card.Title>
                            {color_name} - {manufacturer.name}
                        </Card.Title>
                        <div className={style.cardFooter}>
                            <h3 className="mdc-typography--subtitle2">Posted {date_added_date}</h3>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}
