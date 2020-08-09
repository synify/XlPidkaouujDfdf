import Engine from "../../engine/Engine";
import Game from "../Game";

export function story_load_scene_plane(): void{
    Engine.LoadScene("test_plane");
    let handle = Engine.BindEvent(Engine.Const.SceneOnStart, function (data): void{
        if (data.name == "test_plane"){
            Engine.UnbindEvent(Engine.Const.SceneOnStart, handle);
            Game.Init();
        }
    });
}

