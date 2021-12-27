//This is the basis of which ALL general objects start from and get defined further to become a sprite or playable Character 

class GameObject{
    constructor(config) {
        this.id = null;
        this.isMounted = false;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "Down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "Assets\\Characters\\HeroBroke.png",
        
        });

        this.behaviorLoop = config.behaviorLoop || [];
        this.behaviorLoopIndex = 0;
    }


    mount(map) {
        console.log("Mounting")
        this.isMounted = true;
        map.addWall(this.x, this.y);

        //if there is a behavior , start after delay
        setTimeout(() => {
            this.doBehaviorEvent(map);
        },10);
    }

    update() {
    }

    async doBehaviorEvent(map) {
        //don't do anything if there is more improtant stuff going on or config is empty

        if(map.isCutScenePlaying || this.behaviorLoop.length === 0 || this.isStanding) {
            return;
        }


        //setting up event with relevant info
        let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
        eventConfig.who = this.id;

        //create an event instance out of our next event config
        const eventHandler = new OverworldEvent({map, event: eventConfig });
        await eventHandler.init();
        
        //setting the next event to fire
        this.behaviorLoopIndex += 1;
        if (this.behaviorLoopIndex === this.behaviorLoop.length) {
            this.behaviorLoopIndex = 0;
        }

        //run it back
        this.doBehaviorEvent(map)

    }

}