import React, { Fragment } from 'react'
import Flickity from 'react-flickity-component';
import "./../../Styles/flikity.scss";

const GroupCell = ({ propsData }) => {
    var flickityOptions = {
        initialIndex: 4,
        cellSelector: '.sliderBoxes',
        accessibility: true,
        pageDots: true,
        wrapAround: true,
        autoPlay: false
    }


    return (
        <Flickity
            className={'carousel-group-cell'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
        >
            {propsData}
        </Flickity>
    )
}

export default GroupCell