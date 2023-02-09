import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Selector = ({ values,
  title,
  value,
  setValue }) => {
  // const { t } = useI18n({
  //   inheritLocale: true,
  //   useScope: 'local',
  // });
  const { t } = useTranslation();
  return (
    <li>
      <Link to="javascript:;">{t(title)}</Link>
      <ul>
        {values?.map(value => <li key={value}><Link to="javascript:;" onClick={() => setValue(value)} >
          {t(value)}
        </Link></li>)}
      </ul>
    </li>
  )
}

export default Selector