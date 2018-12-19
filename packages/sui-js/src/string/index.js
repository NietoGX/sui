import {parse} from 'qs'
export const parseQueryString = query => parse(query, {ignoreQueryPrefix: true})
export {stringify as toQueryString} from 'qs'
export {fromSnakeToCamelCase, fromCamelToSnakeCase} from './snake-case'
export {default as toCamelCase} from 'lodash.camelcase'
export {default as toCapitalCase} from 'lodash.capitalize'
export {has as hasAccents, remove as removeAccents} from 'remove-accents'
export toKebabCase from 'lodash.kebabcase'
