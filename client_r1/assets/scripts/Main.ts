
import Engine from "./engine/Engine";
import {Init as StoryInit}  from "./stories/Init";

import { _decorator, Component } from 'cc';

const { ccclass } = _decorator;

@ccclass('Main')
export class Main extends Component {
    start () {
        // Init Core
        Engine.Init();
        StoryInit();
        Engine.StoryMgr.Get("switch_game")();
    }
}
