window.addEventListener('load', () => {
    class MyApp extends Application {
        onStartApp() {
            
        }

        onSocketConnected() {
            
        }

        onSocketConnectionError() {
            this.socket.io.opts.transports = ['polling'];
            this.socket.io.opts.path= '/polling/';
        }

        show404() {
            document.body.innerHTML = '<h1 id="notFound">404</h1>';
        }
    }

    globalThis.app = new MyApp({
        useSockets: false,
        useLocalStorage: false,
        socketConfigs: {
            transports: ['websocket'],
            path: '/socket/'
        },
        socketsURL: '',
        useSession: true,
        routing: {
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
        },
        controllers: [
            {
                name: 'emojis', 
                url: '/js/controllers/emojisController.min.js', 
                settings: {
                    id: 'emojisList',
                    url: '/views_compiled/list.json',
                    onError: '<div style="color: red">Error</div>',
                    showOnLoad: true,
                    parent: 'list'
                }

            }
        ]
    });
});