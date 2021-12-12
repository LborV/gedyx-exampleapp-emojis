var routes = {
    '/': {
        title: 'GEDYX Emoji Search',
        controllers: ['emojis'],
        template: '/views/template.html',
        metaData: [
            {
                name: 'description',
                content: 'GEDYX Emoji Search - it is a clone of https://ahfarmer.github.io/emoji-search/', 
            },
            {
                name: 'keywords',
                content: 'HTML, CSS, JavaScript, Gedyx'
            },
            {
                name: 'author',
                content: 'LborV(https://github.com/LborV/gedyx)', 
            }
        ]
    }
};