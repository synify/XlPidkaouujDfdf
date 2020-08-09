import Engine from "../../engine/Engine";

export function load_scene_snake(): void{
    Engine.LoadScene("snake");
    let handle = Engine.BindEvent(Engine.Const.SceneOnStart, function (data): void{
        if (data.name == "snake"){
            Engine.UnbindEvent(Engine.Const.SceneOnStart, handle);
            // Game.Init();
        }
    });
}

