import Engine from "../engine/Engine";
import EngineConst from "../engine/EngineConst";

export function story_load_scene_plane(): void{
    Engine.LoadScene("plane");
    let handle = Engine.EventMgr.BindEvent(EngineConst.SceneOnStart, function (data): void{
        if (data.name == "plane"){
            Engine.EventMgr.UnbindEvent(EngineConst.SceneOnStart, handle);
            Engine.StoryMgr.Get("story_scene_plane_start")();
        }
    });
}

