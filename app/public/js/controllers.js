var controllers = [
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
];