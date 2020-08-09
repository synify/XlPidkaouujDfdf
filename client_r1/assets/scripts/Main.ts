
import Engine from "../engine/Engine";
import {Init as StoryInit}  from "./stories/Init";

@Engine.CCAPI.ccclass('Main')
export class Main extends Engine.CCAPI.Component {
    start () {
        // Init Core
        Engine.Init();
        StoryInit();
        Engine.GetStory("switch_game")();
    }
}


