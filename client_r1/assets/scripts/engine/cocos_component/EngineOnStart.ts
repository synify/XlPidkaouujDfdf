import Engine from "../Engine";

import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('EngineOnStart')
export class EngineOnStart extends Component {
    start () {
        Engine.OnStart();
    }
}
