import { PriorityQueue } from "../Engine";

export class TimerMgr {
    time: number;
    timer_mgr_uuid: number;
    time_map: {};
    pq_que;
    add_timer_temp_list: number[];
    Init(): void {
        this.time = 0;
        this.timer_mgr_uuid = 0;
        this.pq_que = new PriorityQueue(function(a, b){return a.time < b.time;});
        this.time_map = {};
        this.add_timer_temp_list = [];
    }
    GenUUID(): number {
        return ++ this.timer_mgr_uuid;
    }
    Update(dt: number): void {
        this.time += dt;
        for (let uuid of this.add_timer_temp_list){
            let item = this.time_map[uuid];
            if (!item) continue;
            this.pq_que.Push({time:this.time+item.time, uuid:uuid}) 
        }
        while (this.add_timer_temp_list.length > 0) {
            this.add_timer_temp_list.pop();
        }
        while (!this.pq_que.IsEmpty() && this.pq_que.Top().time <= this.time) {
            let uuid = this.pq_que.Top().uuid;
            this.pq_que.Pop();
            let item = this.time_map[uuid];
            if (!item) continue;
            item.callback();
            if (item.type == "once") {
                delete this.time_map[uuid]
            }
            else if (item.type == "loop") {
                this.add_timer_temp_list.push(uuid)
            }
            else if (item.type == "repeat") {
                if (this.time_map[uuid].count > 1) {
                    this.add_timer_temp_list.push(uuid)
                }
                this.time_map[uuid].count = this.time_map[uuid].count - 1;
            }
        }

    }
    callOnce(time: number, callback: Function): number {
        let uuid = this.GenUUID();
        this.time_map[uuid] = {type:"once", time:time, callback:callback};
        this.add_timer_temp_list.push(uuid)
        return uuid;
    }
    callLoop(time: number, callback: Function): number {
        let uuid = this.GenUUID();
        this.time_map[uuid] = {type:"loop", time:time, callback:callback};
        this.add_timer_temp_list.push(uuid)
        return uuid;
    }
    callRepeat(time: number, count:number, callback: Function): number {
        let uuid = this.GenUUID();
        this.time_map[uuid] = {type:"repeat", time:time, count:count, callback:callback};
        this.add_timer_temp_list.push(uuid)
        return uuid;
    }
}
