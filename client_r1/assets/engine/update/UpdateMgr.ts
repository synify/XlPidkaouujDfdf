
export default class UpdateMgr {
    updates: Set<Function>;
    add_update_list: Function[];
    del_update_list: Function[];
    Init() {
        this.updates = new Set<Function>();
        this.add_update_list = [];
        this.del_update_list = [];
    }
    AddUpdate(callback: Function): void {
        this.add_update_list.push(callback);
    }
    DelUpdate(callback: Function): void {
        this.del_update_list.push(callback);
    }
    Update(dt: number): void {
        for(let callback of this.del_update_list){
            this.updates.delete(callback);
        }
        for(let callback of this.add_update_list){
            this.updates.add(callback);
        }
        while(this.add_update_list.length > 0) {
            this.add_update_list.pop();
        }
        while(this.del_update_list.length > 0) {
            this.del_update_list.pop();
        }
        this.updates.forEach(function(callback){
            callback(dt);
        })
    }
}
