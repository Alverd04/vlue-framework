function vlueToHtml({ code }) {
  // child from code
  const { child } = code

  // element to be returned
  let element = document.createElement(child.tag)

  // some logit to treat element
  child.content && (element.innerText = child.content)
  child.className && (element.className = child.className)
  child.id && (element.id = child.id)
  child.child && element.appendChild(vlueToHtml({ code: child }))

  // apply styles
  child.styles &&
    (element = setStyles({ element: element, styles: child.styles }))

  // element to be returned
  return element
}

function setStyles({ element, styles }) {
  const newElement = element
  for (const [key, value] of Object.entries(styles)) {
    newElement.style[key] = value
  }
  return newElement
}

export { vlueToHtml }
