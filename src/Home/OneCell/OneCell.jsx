import React from 'react'
import Flickity from 'react-flickity-component';

const OneCell = ({ propsData }) => {
    var flickityOptions = {
        initialIndex: 0,
        cellSelector: '.sliderBoxes-one',
        accessibility: true,
        pageDots: true,
        wrapAround: true,
        autoPlay: true
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

export default OneCell