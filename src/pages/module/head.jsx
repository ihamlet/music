import { WingBlank,Icon } from 'antd-mobile'
import Styles from './head.less'

export const Head = ({title}) => {
    return(
        <WingBlank size='lg'>
            <div className={`flex flexCenter ${Styles.header}`}>
                <div className={`textColorPrimary ${Styles.title}`}>
                    {title}
                </div>
                <div className={Styles.search}>
                    <div className={`flex flexCenter textColorMinor ${Styles.searchBar}`}>
                        <Icon type='search' size='xxs' /> <div className={Styles.searchBarText}>搜索</div> 
                    </div>
                </div>
            </div>
        </WingBlank>
    )
}

export default Head