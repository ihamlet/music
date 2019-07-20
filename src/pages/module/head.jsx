import { WingBlank } from 'antd-mobile'
import Styles from './head.less'

export const Head = ({title}) => {
    return(
        <WingBlank size='lg'>
            <div className={`flex flexCenter ${Styles.header}`}>
                <div className={`textColorPrimary ${Styles.title}`}>
                    {title}
                </div>
                <div className={Styles.search}>
                    <div className={`textColorMinor ${Styles.searchBar}`}>
                        搜索
                    </div>
                </div>
            </div>
        </WingBlank>
    )
}

export default Head