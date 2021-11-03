import React, { useState } from "react";
import { TabBar } from 'zarm'
import s from './style.module.less'
import CustomIcon from '../CustomIcon'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'


const NavBar = ({ showNav }) => {
  const [ activeKey, setActiveKey ] = useState('/')
  const history = useHistory()

  const changeTab = (path) => {
    setActiveKey(path)
    history.push(path)
  }

  return (
    <TabBar className={s.tab} visible={showNav} activeKey={activeKey} onChange={changeTab}>
      <TabBar.Item 
        itemKey="/"
        title="账单"
        icon={<CustomIcon type="zhangdan" />}
      />
      <TabBar.Item
        itemKey="/data"
        title="统计"
        icon={<CustomIcon type="tongji" />}
      />
      <TabBar.Item
        itemKey="/user"
        title="我的"
        icon={<CustomIcon type="wode" />}
      />
    </TabBar>
  )
}

NavBar.propTypes = {
  showNav: PropTypes.bool
}

export default NavBar