/*
 * PDD is a platform for privacy-preserving Web searches collection.
 * Copyright (C) 2016-2018 Vincent Primault <v.primault@ucl.ac.uk>
 *
 * PDD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * PDD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with PDD.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import autobind from 'autobind-decorator';
import { NonIdealState, Spinner } from '@blueprintjs/core';

import xhr from '../../util/xhr';

export default class DataContainer extends React.Component {
  constructor(props, WrappedComponent) {
    super(props);
    this.WrappedComponent = WrappedComponent;
    this.state = {
      isLoading: false,
      isLoaded: false,
      data: null,
    };
  }

  @autobind
  onSuccess(resp) {
    this.setState({ isLoading: false, isLoaded: true, data: resp });
  }

  @autobind
  onError(resp) {
    console.log('Unexpected error while loading the resource', resp);
    this.setState({ isLoading: false, isLoaded: true });
  }

  load(props) {
    xhr(this.getApiEndpoint(props)).then(this.onSuccess, this.onError);
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.load(nextProps);
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner/>;
    } else if (this.state.isLoaded && null !== this.state.data) {
      const props = { ...this.props, ...this.stateToProps(this.state) };
      return React.createElement(this.WrappedComponent, props);
    } else if (this.state.isLoaded) {
      return <NonIdealState visual="error" title="An error occurred while loading the resource."/>;
    }
    return null;
  }
}
