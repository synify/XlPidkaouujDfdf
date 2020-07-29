import Engine from "../Engine";

const {ccclass} = cc._decorator;

@ccclass
export default class EngineOnStart extends cc.Component {
    start () {
        Engine.OnStart();
    }
}
