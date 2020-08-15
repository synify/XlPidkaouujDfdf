
import { Engine, CCAPI } from "../engine/Engine";
import { Init as StoryInit }  from "./stories/Init";

@CCAPI.ccclass('Main')
export class Main extends CCAPI.Component {
    start () {
        // Init Core
        Engine.Init();
        StoryInit();
        Engine.GetStory("switch_game")();
    }
}


