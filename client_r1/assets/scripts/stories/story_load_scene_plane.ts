import Engine from "../engine/Engine";
import EngineConst from "../engine/EngineConst";
import Game from "../Game";

export function story_load_scene_plane(): void{
    Engine.LoadScene("test_plane");
    let handle = Engine.EventMgr.BindEvent(EngineConst.SceneOnStart, function (data): void{
        if (data.name == "test_plane"){
            Engine.EventMgr.UnbindEvent(EngineConst.SceneOnStart, handle);
            Game.Init();
        }
    });
}

