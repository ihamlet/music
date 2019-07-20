import React from 'react'
import { Carousel } from 'antd-mobile'
import Styles from './banner.less'

export const Banner = (props) => {
    const bannerData = {
        data:[1,2,3]
    }

    return(
        <div className={Styles.warpBanner}>
            <Carousel autoplay infinite>
                {
                    bannerData.data.map((val,index)=>{
                        return <div className={Styles.banner} key={index}>
                            {val}    
                        </div>
                    })
                }
            </Carousel>
        </div>
    )
}

export default Banner