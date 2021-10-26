/**
 * @jest-environment jsdom
 */

import { vlueToHtml } from '../../vlueCodeToHtml.js'
import { EXAMPLES } from './config.js'

test('should return a text node when passing child', () => {
  // given
  const text = EXAMPLES.simpleExampleElement.child.content
  const example = EXAMPLES.simpleExampleElement

  // then
  const element = vlueToHtml({ code: example })

  //expect
  expect(element.innerText).toEqual(text)
})

test('should return a text with styles when passing child with styles', () => {
  // given
  const text = EXAMPLES.simpleExampleElementWithStyles.child.content
  const color = EXAMPLES.simpleExampleElementWithStyles.child.styles.color
  const example = EXAMPLES.simpleExampleElementWithStyles

  // then
  const element = vlueToHtml({ code: example })

  //expect
  expect(element.innerText).toEqual(text)
  expect(element.style.color).toEqual(color)
})

test('should return a text with styles when passing child with styles', () => {
  // given
  const color = EXAMPLES.completeExampleElement.child.styles.color
  const numberOfChilds = 1
  const example = EXAMPLES.completeExampleElement

  // then
  const element = vlueToHtml({ code: example })

  //expect
  expect(element.innerText).toEqual(undefined)
  expect(element.style.color).toEqual(color)
  expect(element.childNodes.length).toEqual(numberOfChilds)
})

test('should return a text with styles when passing children with styles', () => {
  // given
  const example = EXAMPLES.completeExampleElementWithChildren
  const numberOfChilds = 3
  const firstChildText =
    EXAMPLES.completeExampleElementWithChildren.child.children[0].content
  const firstChildColor =
    EXAMPLES.completeExampleElementWithChildren.child.children[0].styles.color
  // then
  const element = vlueToHtml({ code: example })

  //expect

  expect(element.childNodes.length).toEqual(numberOfChilds)
  expect(element.firstChild.innerText).toEqual(firstChildText)
  expect(element.firstChild.style.color).toEqual(firstChildColor)
})
