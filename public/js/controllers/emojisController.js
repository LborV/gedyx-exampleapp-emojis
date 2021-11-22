import {emojisList} from "/src/emojisList.js";
import {Controller} from '/kernel/Controller.min.js';

export default class emojisController extends Controller{
    constructor(settings) {
        super(settings);

        this.randomLength = 20;
        this.maxResults = 20;
        this.cdnUrl = '//cdn.jsdelivr.net/emojione/assets/png/';
        this.emojisToShow = this.getRandomEmojis(this.randomLength);
    }

    getRandomEmojis(length = 5) {
        var result = [];

        for(let i = 0; i < length; i++) {
            result.push(emojisList[Math.floor(Math.random()*emojisList.length)]);
        }

        return result;
    }

    feelLucky() {
        this.emojisToShow = this.getRandomEmojis(this.randomLength);
        this.refresh();
    }

    copyClipboard(symbol) {
        navigator.clipboard.writeText(symbol);
    }

    find(search) {
        this.emojisToShow = emojisList
            .filter(emoji => {
                if (emoji.title.toLowerCase().includes(search.toLowerCase())) {
                    return true;
                }

                if (emoji.keywords.includes(search)) {
                    return true;
                }
                
                return false;
            })
            .slice(0, this.maxResults);

        this.refresh();
    }

    onShow() {
        
    }

    onLoad() {
        
    }

    onUpdate() {

    }


}