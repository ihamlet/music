
import React, { Component } from 'react'
import { TabBar, WingBlank } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.less'
import Styles from './index.less'

import Head from '../pages/module/head'

class BasicLayout extends Component {
  state = {
    tab: [{
      title: '音乐馆'
    }, {
      title: '发现'
    }],
    tabActive: 0
  }

  setTabActice(index){
    this.setState({
      tabActive: index
    })
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {

    let pageTitle = this.props.route.routes[this.state.tabActive].title
    let nodeDom = this.props.children.props.children[this.state.tabActive]

    return (
      <>
        <Head title={pageTitle} />
        <TabBar barTintColor="white" prerenderingSiblingsNumber={0}>
          {
            this.state.tab.map((e, index) => {
              return <TabBar.Item key={index} title={e.title} onPress={() => this.setTabActice(index)}>
                <div className={Styles.container}>
                  <WingBlank size='md'>
                    {
                      nodeDom
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
