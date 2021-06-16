// Dada a URL 'https://api.github.com/orgs/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
const { test, expect } = require('@jest/globals');
const getRepos = require('./exercicio4');

test('teste que verifica se 2 respositorios estão contidos na resposta recebida', () => {
    expect.assertions(2);
    return getRepos('https://api.github.com/orgs/tryber/repos')
    .then((data) => {
        expect(data).toContain('sd-01-week4-5-project-todo-list');
        expect(data).toContain('sd-01-week4-5-project-meme-generator');
    });
})
    
