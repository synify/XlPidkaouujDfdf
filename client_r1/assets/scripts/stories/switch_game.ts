import Engine from "../../engine/Engine";

export function switch_game(): void{
    Engine.LoadScene("switch_game");
    let handle = Engine.BindEvent(Engine.Const.SceneOnStart, function (data): void{
        if (data.name == "switch_game"){
            Engine.UnbindEvent(Engine.Const.SceneOnStart, handle);

            let Button_1 = Engine.CCAPI.FindNode("Canvas/Button_1");
            Button_1.on(Engine.CCAPI.SystemEventType.TOUCH_END, (event)=>{
                Engine.GetStory("load_scene_snake")();
            })

            let Button_2 = Engine.CCAPI.FindNode("Canvas/Button_2");
            Button_2.on(Engine.CCAPI.SystemEventType.TOUCH_END, (event)=>{
                Engine.GetStory("story_load_scene_plane")();
            })
        }
    });
}

