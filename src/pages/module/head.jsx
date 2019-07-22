import { WingBlank,Icon } from 'antd-mobile'
import Styles from './head.less'

export const Head = ({title}) => {
    return(
        <div className={Styles.header}>
            <WingBlank className={`flex flexHCenter autoHeight`} size='md'>
                    <div className={`textColorPrimary ${Styles.title}`}>
                        {title}
                    </div>
                    <div className={Styles.search}>
                        <div className={`flex flexCenter textColorMinor ${Styles.searchBar}`}>
                            <Icon type='search' size='xxs' /> <div className={Styles.searchBarText}>搜索</div> 
                        </div>
                    </div>
            </WingBlank>
        </div>
    )
}

export default Head