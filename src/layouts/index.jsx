
import React, { Component } from 'react'
import { NavBar, TabBar, WingBlank } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.less'
import Styles from './index.less'

import Head from '../pages/module/head'

class BasicLayout extends Component {
  state = {
    tab: [{
      title: '标题1'
    }, {
      title: '标题2'
    }],
    tabActive: 0
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {

    let pageTitle = this.props.route.routes[this.state.tabActive].title

    return (
      <>
        {
          this.state.tabActive === 0
            ? <Head title={pageTitle}/>
            : <NavBar className={Styles.bar}>
              {pageTitle}
            </NavBar>
        }

        <TabBar barTintColor="white" prerenderingSiblingsNumber={0}>
          {
            this.state.tab.map((e, index) => {
              return <TabBar.Item key={index} title={e.title}>
                <div className={Styles.container}>
                  <WingBlank size='md'>
                    {
                      this.props.children
                    }
                  </WingBlank>
                </div>
              </TabBar.Item>
            })
          }
        </TabBar>
      </>
    )
  }
}

export default BasicLayout
