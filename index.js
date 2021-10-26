import { vlueToHtml } from './vlueCodeToHtml.js'

// 2. Como renderizamos???
// 3. Como re renderizamos

function startVlueApp({ selector, content }) {
  return selector.appendChild(content)
}

const selector = document.getElementById('vlue-app')
const exampleElement = {
  child: {
    tag: 'div',
    className: 'initial-div',
    id: 'id',
    content: '',
    styles: {
      color: 'red',
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
    },
    children: [
      {
        tag: 'h2',
        content: 'Hola soy un hijo',
      },
      {
        tag: 'h2',
        content: 'Hola soy un hijo',
      },
      {
        tag: 'h2',
        content: 'Hola soy un hijo',
      },
    ],
  },
}

const content = vlueToHtml({ code: exampleElement })
console.log(content)
startVlueApp({
  selector: selector,
  content: content,
})
