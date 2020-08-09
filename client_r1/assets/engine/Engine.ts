import CCAPI from "./CCAPI";
import LogMgr from "./log/LogMgr";
import EngineSetting from "./setting/EngineSetting";
import CocosSetting from "./setting/CocosSetting";
import UpdateMgr from "./update/UpdateMgr";
import TimeSystem from "./time/TimeSystem";
import TimerMgr from "./time/TimerMgr";
import EventMgr from "./event/EventMgr";
import StoryMgr from "./story/StoryMgr";
import InputMgr from "./input/InputMgr";
import CocosSceneMgr from "./scene/CocosSceneMgr";
import Const from "./Const";
import { PriorityQueue } from "./util/PriorityQueue";
import Vector2 from "./util/Vector2";
import Vector3 from "./util/Vector3";

export default class Engine {
    ////////////////////////////////////////////////////////////////////////////// outside api
    static CCAPI = CCAPI;
    static LogMgr;
    static EngineSetting;
    static CocosSetting;
    static UpdateMgr;
    static TimeSystem;
    static TimerMgr;
    static EventMgr;
    static StoryMgr;
    static InputMgr;
    static CocosSceneMgr;
    static Const;
    static PriorityQueue;
    static Vector2;
    static Vector3;
    ////////////////////////////////////////////////////////////////////////////// outside api end
    static engine_init_flag = false;
    static root_node;
    static log_mgr;
    static engine_setting;
    static cocos_setting;
    static update_mgr;
    static time_sys;
    static timer_mgr;
    static event_mgr;
    static story_mgr;
    static input_mgr;
    static cocos_scene_mgr;
    static Init(): void {
        ////////////////////////////////////////////////////////////////////////////// outside api
        Engine.CCAPI = CCAPI;
        Engine.LogMgr = LogMgr;
        Engine.EngineSetting = EngineSetting;
        Engine.CocosSetting = CocosSetting;
        Engine.UpdateMgr = UpdateMgr;
        Engine.TimeSystem = TimeSystem;
        Engine.TimerMgr = TimerMgr;
        Engine.EventMgr = EventMgr;
        Engine.StoryMgr = StoryMgr;
        Engine.InputMgr = InputMgr;
        Engine.CocosSceneMgr = CocosSceneMgr;
        Engine.Const = Const;
        Engine.PriorityQueue = PriorityQueue;
        Engine.Vector2 = Vector2;
        Engine.Vector3 = Vector3;
        ////////////////////////////////////////////////////////////////////////////// outside api end
        // 添加常驻根节点
        Engine.root_node = CCAPI.FindNode("Engine");
        if(!Engine.root_node)
        {
            Engine.root_node = new CCAPI.Node();
            Engine.root_node.name = "Engine";
        }
        CCAPI.DontDestroyNode(Engine.root_node);
        Engine.root_node.addComponent("EngineOnUpdate");

        // logMgr
        Engine.log_mgr = new LogMgr();
        Engine.log_mgr.Init();

        // 添加Setting模块
        Engine.engine_setting = new EngineSetting();
        Engine.engine_setting.Init();
        Engine.cocos_setting = new CocosSetting();
        Engine.cocos_setting.Init();

        // UpdateMgr
        Engine.update_mgr = new UpdateMgr();
        Engine.update_mgr.Init();
        
        //timeSystem
        Engine.time_sys = new TimeSystem();
        Engine.time_sys.Init();

        //timerMgr
        Engine.timer_mgr = new TimerMgr();
        Engine.timer_mgr.Init();

        //eventMgr
        Engine.event_mgr = new EventMgr();
        Engine.event_mgr.Init();

        //storyMgr
        Engine.story_mgr = new StoryMgr();
        Engine.story_mgr.Init();

        // inputMgr
        Engine.input_mgr = new InputMgr();
        Engine.input_mgr.Init();

        //cocosSceneMgr
        Engine.cocos_scene_mgr = new CocosSceneMgr();
        Engine.cocos_scene_mgr.Init();

        //engineInitFlag
        Engine.engine_init_flag = true;
    }
    static OnLoad (): void {
        if (!Engine.engine_init_flag) return;
        Engine.LogInfo("Engine onLoad ...");
    }

    static OnStart (): void {
        if (!Engine.engine_init_flag) return;
        Engine.LogInfo("Engine start ...");
        Engine.cocos_scene_mgr.SceneOnStart();
    }
    static OnUpdate(dt: number): void {
        if (!Engine.engine_init_flag) return;
        Engine.time_sys.Update(dt);
        Engine.timer_mgr.Update(dt);
        Engine.update_mgr.Update(dt);
    }
    // logMgr
    static Log(info: string): void {Engine.log_mgr.LogInfo(info);}
    static LogInfo(info: string): void {Engine.log_mgr.LogInfo(info);}
    static LogDebug(info: string): void {Engine.log_mgr.LogDebug(info);}
    static LogWarn(info: string): void {Engine.log_mgr.LogWarn(info);}
    static LogError(info: string): void {Engine.log_mgr.LogError(info);}
    //CCAPI
    // static DecoratorClass(name){return CCAPI.ccclass(name);}
    // update
    static AddUpdate(obj: any): void {Engine.update_mgr.AddUpdate(obj);}
    static DelUpdate(obj: any): void {Engine.update_mgr.DelUpdate(obj);}
    //timeSystem
    static GetEngineTime(): number {return Engine.time_sys.GetTime();}
    // eventMgr
    static EmitEvent(event: any, data: any): void {Engine.event_mgr.Emit(event, data);}
    static BindEvent(event: any, callback: Function): number {return Engine.event_mgr.BindEvent(event, callback);}
    static UnbindEvent(event: any, handle: number): void {Engine.event_mgr.UnbindEvent(event, handle);}
    // storyMgr
    static GetStory(name: string): Function {return Engine.story_mgr.Get(name);}
    static RegisterStory(name: string, callback: Function): void {Engine.story_mgr.Register(name, callback);}
    static UnregisterStory(name: string): void {Engine.story_mgr.Unregister(name);}
    // cocosSceneMgr
    static LoadScene(name: string): boolean {return Engine.cocos_scene_mgr.LoadScene(name);}
    
}
