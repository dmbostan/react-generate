module.exports = (plop) => {
    plop.setGenerator('react-component', {
        description: 'Generate a React component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name:',
            },
            {
                type: 'input',
                name: 'path',
                message: 'Path:',
                default: 'src/'
            },
        ],
        actions: [
            {
                type: 'add',
                path: '{{path}}/{{name}}/{{name}}.tsx',
                templateFile: 'templates/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: '{{path}}/{{name}}/{{name}}.module.css',
                templateFile: 'templates/Component.module.css.hbs',
            },
            {
                type: 'add',
                path: '{{path}}/{{name}}/{{name}}.types.ts',
                templateFile: 'templates/Component.types.ts.hbs',
            },
            {
                type: 'add',
                path: '{{path}}/{{name}}/{{name}}.test.tsx',
                templateFile: 'templates/Component.test.tsx.hbs',
            },
            {
                type: 'add',
                path: '{{path}}/{{name}}/{{name}}.stories.tsx',
                templateFile: 'templates/Component.stories.tsx.hbs',
            },
        ],
    });
};
