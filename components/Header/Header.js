import React, { Component } from 'react';
import { Select } from 'antd';
import { FormattedMessage, injectIntl } from 'react-intl';
import Cookie from 'js-cookie';

import messages from './messages';

const { Option } = Select;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: Cookie.get('locale') || 'vi',
    };
  }

  handleChange = (locale) => {
    Cookie.set('locale', locale);
    window.location.reload(true);
    this.setState({ locale });
  }

  render() {
    const { locale } = this.state;
    return (
      <div>
        <Select value={locale} style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="vi"><FormattedMessage {...messages.vi} /></Option>
          <Option value="en"><FormattedMessage {...messages.en} /></Option>
        </Select>
      </div>
    );
  }
}

export default (injectIntl(Header));
