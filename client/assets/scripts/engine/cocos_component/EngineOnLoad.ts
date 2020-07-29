import Engine from "../Engine";

const {ccclass} = cc._decorator;

@ccclass
export default class EngineOnLoad extends cc.Component {
    onLoad () {
        Engine.OnLoad();
    }
}
