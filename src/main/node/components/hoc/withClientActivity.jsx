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

import DataContainer from './DataContainer';

export default function withClientActivity(WrappedComponent) {
  return class WithClientActivityContainer extends DataContainer {
    constructor(props) {
      super(props, WrappedComponent);
    }

    getApiEndpoint(props) {
      return `/api/clients/${props.match.params.name}/activity?tail=14`;
    }

    stateToProps(state) {
      return { activity: state.data };
    }
  }
}
