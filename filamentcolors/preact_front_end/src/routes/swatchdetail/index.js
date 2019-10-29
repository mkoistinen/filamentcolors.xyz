import {Component} from "preact";
import {LayoutGrid} from 'preact-material-components';
import Card from 'preact-material-components/Card';

import Lightbox from 'react-image-lightbox';
import axios from 'axios';

import LoadingGif from "../../components/loading_gif";

import style from "./style.sass";
import 'preact-material-components/Card/style.css';
import 'preact-material-components/LayoutGrid/style.css';
import 'react-image-lightbox/style.css';


export default class SwatchDetail extends Component {
    state = {
        error: null,
        isLoaded: false,
        swatch: {}
    };

    componentWillMount() {
        axios.get(`http://localhost:8000/api/swatch/${this.props.swatch_id}`)
            .then(response => {
                this.setState({
                    isLoaded: true,
                    swatch: response.data
                });
                console.log(response.data)
            })
            .catch(function (error) {
                this.setState({
                    isLoaded: true,
                    error
                });
                console.log(error);
            })
    };

    render(swatch_id) {
        const {error, isLoaded, swatch} = this.state;
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
                            <LayoutGrid.Cell cols="6" tabletCols="8">
                                <SwatchDetailPhotoView s={swatch}/>
                            </LayoutGrid.Cell>
                            <LayoutGrid.Cell cols="6" tabletCols="8">
                                <div className={style.detailView}>
                                    <SwatchDetailInfoView s={swatch}/>
                                </div>
                            </LayoutGrid.Cell>
                        </LayoutGrid.Inner>
                    </LayoutGrid>
                </div>
            )
        }
    }
}

export class SwatchDetailPhotoView extends Component {

    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            this.props.s.image_front,
            this.props.s.image_back,
            this.props.s.image_other
        ]
    };

    render() {
        const {photoIndex, isOpen, images} = this.state;

        const heroImageStyle = {
            backgroundImage: `url(${images[0]})`,
            display: "flex",
        };
        const backImageStyle = {
            backgroundImage: `url(${images[1]})`,
            display: "flex",
        };
        const otherImageStyle = {
            backgroundImage: `url(${images[2]})`,
            display: "flex",
        };

        let smallerImages;

        if (images[2] !== null) {
            smallerImages = (
                <LayoutGrid>
                    <LayoutGrid.Inner>
                        <LayoutGrid.Cell desktopCols="3" tabletCols="0" phoneCols="0">
                        </LayoutGrid.Cell>
                        <LayoutGrid.Cell desktopCols="3" tabletCols="8" phoneCols="6">
                            <Card>
                                <div className={`mdc-card__media mdc-card__media--16-9 ${style.clickable}`}
                                     style={backImageStyle}
                                     onClick={() => this.setState({isOpen: true, photoIndex: 1})}/>
                            </Card>
                        </LayoutGrid.Cell>
                        <LayoutGrid.Cell desktopCols="3" tabletCols="8" phoneCols="6">
                            <Card>
                                <div className={`mdc-card__media mdc-card__media--16-9 ${style.clickable}`}
                                     style={otherImageStyle}
                                     onClick={() => this.setState({isOpen: true, photoIndex: 2})}/>
                            </Card>
                        </LayoutGrid.Cell>
                        <LayoutGrid.Cell desktopCols="3" tabletCols="0" phoneCols="0">
                        </LayoutGrid.Cell>
                    </LayoutGrid.Inner>
                </LayoutGrid>
            );
        } else {
            smallerImages = (
                <LayoutGrid>
                    <LayoutGrid.Inner>
                        <LayoutGrid.Cell desktopCols="4" tabletCols="0" phoneCols="0"/>
                        <LayoutGrid.Cell desktopCols="4" tabletCols="8" phoneCols="6">
                            <Card>
                                <div className={`mdc-card__media mdc-card__media--16-9 ${style.clickable}`}
                                     style={backImageStyle}
                                     onClick={() => this.setState({isOpen: true, photoIndex: 1})}/>
                            </Card>
                        </LayoutGrid.Cell>
                        <LayoutGrid.Cell desktopCols="4" tabletCols="0" phoneCols="0"/>
                    </LayoutGrid.Inner>
                </LayoutGrid>
            );
        }

        return (
            <div className={style.adjustVerticalPosition}>
                <Card>
                    <div className={`mdc-card__media mdc-card__media--16-9 ${style.clickable}`} style={heroImageStyle}
                         onClick={() => this.setState({isOpen: true, photoIndex: 0})}/>
                </Card>

                {smallerImages}

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({isOpen: false})}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

function SwatchDetailInfoView(props) {
    const {color_name, manufacturer, filament_type, hex_color, date_added_date} = props.s;
    const colorCubeStyle = {
        backgroundColor: `#${hex_color}`
    };
    const tableData = [
        [
            'Hot end temp',
            filament_type.hot_end_temp,
        ],
        [
            'Bed temp',
            filament_type.bed_temp,
        ],
        [
            'Filament type',
            filament_type.name,
        ],
        [
            'Date added',
            date_added_date
        ]
    ];
    return (
        <div>
            <h1 className={`mdc-typography--title ${style.centerText}`}>{manufacturer.name} - {color_name} {filament_type.name}</h1>
            <div className={style.bigColorCube} style={colorCubeStyle}/>
            <span className={style.centerAllTheThings}>
                <h2 className={`${style.hexColorStyle} ${style.centerText}`}>#{hex_color}</h2>
            </span>
            <div className={style.infoBlock}>
                <div className={style.tableContainer}>
                    <table className={style.tableShit}>
                        <thead>
                        <tr>
                            <th colSpan="2"><h3>General Info</h3></th>
                        </tr>
                        </thead>
                        {tableData.map(item => (
                            <tr className={style.tableRow}>
                                <th className={style.tableElement}>
                                    {item[0]}
                                </th>
                                <th className={style.tableElement}>
                                    {item[1]}
                                </th>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}
