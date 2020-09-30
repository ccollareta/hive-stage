// MailWidgetWrapper.js
import React from 'react';

import MailWidget from './mailwidget';

const MailWidgetWrapper = ({ children }) => (
  <>
    {children}
    <MailWidget />
  </>
);

export default MailWidgetWrapper;