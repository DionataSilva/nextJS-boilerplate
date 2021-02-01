module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{dashCase name}}/{{camelCase name}}.stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{dashCase name}}/{{camelCase name}}.styles.ts',
        templateFile: 'templates/component/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{camelCase name}}.test.tsx',
        templateFile: 'templates/component/test.tsx.hbs'
      }
    ]
  })
  plop.setGenerator('page', {
    description: 'application page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{dashCase name}}/index.tsx',
        templateFile: 'templates/page/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{dashCase name}}/{{camelCase name}}.styles.ts',
        templateFile: 'templates/page/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{dashCase name}}/{{camelCase name}}.test.tsx',
        templateFile: 'templates/page/test.tsx.hbs'
      }
    ]
  })
}
