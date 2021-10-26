export const EXAMPLES = {
  completeExampleElement: {
    child: {
      tag: 'div',
      className: 'initial-div',
      id: 'id',
      content: '',
      styles: {
        color: 'red',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
      },
      child: {
        tag: 'h2',
        content: 'Hola soy un hijo',
      },
    },
  },
  completeExampleElementWithChildren: {
    child: {
      tag: 'div',
      className: 'initial-div',
      id: 'id',
      content: '',
      styles: {
        color: 'red',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
      },
      children: [
        {
          tag: 'h2',
          content: 'Hola soy un hijo',
          styles: {
            color: 'blue',
          },
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
  },
  simpleExampleElement: {
    child: {
      tag: 'h1',
      className: 'initial-div',
      id: 'id',
      content: 'Simple Example Element',
    },
  },
  simpleExampleElementWithStyles: {
    child: {
      tag: 'h1',
      className: 'initial-div',
      id: 'id',
      content: 'Simple Example Element',
      styles: {
        color: 'red',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
      },
    },
  },
}
