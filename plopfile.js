module.exports = (plop) => {
    plop.setGenerator('react-component', {
        description: 'Generate a React component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/{{name}}/{{name}}.tsx',
                templateFile: 'templates/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/{{name}}/{{name}}.module.css',
                templateFile: 'templates/Component.module.css.hbs',
            },
            {
                type: 'add',
                path: 'src/{{name}}/{{name}}.types.ts',
                templateFile: 'templates/Component.types.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/{{name}}/{{name}}.test.tsx',
                templateFile: 'templates/Component.test.tsx.hbs',
            },
        ],
    });
};
