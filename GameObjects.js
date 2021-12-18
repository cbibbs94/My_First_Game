class GameObject{
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "south";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "Assets\\Characters\\HeroBroke.png",
        
        });
    }
    update() {

    }
}