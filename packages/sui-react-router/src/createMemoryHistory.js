/* eslint-disable react-hooks/rules-of-hooks */

// from: https://github.com/ReactTraining/react-router/blob/v3/modules/createMemoryHistory.js

import {createMemoryHistory as baseCreateMemoryHistory} from 'history'
import useHistoryLocationQuery from './internal/useHistoryLocationQuery'

export default function createMemoryHistory(initialEntry) {
  const options = initialEntry ? {initialEntries: [initialEntry]} : undefined
  const history = baseCreateMemoryHistory(options)
  return useHistoryLocationQuery(history)
}
