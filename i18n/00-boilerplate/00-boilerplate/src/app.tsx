import React from "react";
import { useTranslation } from 'react-i18next'
import { namespaces } from "./i18n/i18n.constants";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { languages } from './i18n/i18n.constants';


export const App = () => {
  const { t, i18n } = useTranslation(namespaces.pages.hello) 
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }
  const menu = () => {
    return (
      <Menu>
        {
          Object
            .keys(languages)
            .map(language => <Menu.Item key={language}>{language}</Menu.Item>) 
        }
      </Menu>
    )
  }
  return (
    <>
      <h1>{t('welcome')}</h1>
      <button>{t("buttons.ok", { ns: namespaces.common })}</button>
      <button onClick={changeLanguage.bind(null, 'en')}>English</button>
      <button onClick={changeLanguage.bind(null, 'cn')}>China</button>
      <button onClick={changeLanguage.bind(null, 'es')}>Espanol</button>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Cascading menu <DownOutlined />
        </a>
      </Dropdown>
    </>
  )
};