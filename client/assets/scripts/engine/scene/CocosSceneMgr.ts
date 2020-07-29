import Engine from "../Engine";
import EngineConst from "../EngineConst";

export default class CocosSceneMgr {
    scene_name: string;
    scene_start: boolean;
    Init(): void {
        this.scene_name = "Main"
        this.scene_start = false;
    }

    GetSceneName(): string{
        return this.scene_name;
    }
    IsSceneStart(): boolean{
        return this.scene_start;
    }
    LoadScene(name: string): boolean{
        if (cc.director.loadScene(name)) {
            this.scene_start = false;
            this.scene_name = name;
            Engine.LogInfo("load scene "+name+" success");
            return true;
        }
        Engine.LogInfo("load scene "+name+" failed");
        return false;
    }

    SceneOnStart(): void{
        this.scene_start = true;
        Engine.EventMgr.Emit(EngineConst.SceneOnStart, {name:this.scene_name});
    }
}
