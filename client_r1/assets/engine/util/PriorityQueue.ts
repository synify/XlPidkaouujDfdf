
export class PriorityQueue {
    compare: Function;
    array:any[];
    size: number
    constructor(comparator:Function){
        this.array = [];
        this.array.push(null); // index begin with 1 
        this.size = 0;
        this.compare = comparator;
    }
    Clone(): PriorityQueue {
        let pq = new PriorityQueue(this.compare);
        pq.size = this.size;
        for (let i = 1; i <= this.size; ++ i) {
            pq.array.push(this.array[i]);
        }
        return pq;
    };
    Push(val): void{
        this.array.push(val);
        ++ this.size;
        let i = this.size, p, val_p;
        while (i > 1) {
            p = i >> 1;
            val_p = this.array[p];
            if (this.compare(val_p, val)) {
                break;
            }
            this.array[i] = val_p;
            i = p;
        }
        this.array[i] = val;
    }
    Pop(): void{
        this.array[1] = this.array[this.size];
        let half = (this.size-1) >> 1;
        let i = 1;
        let val = this.array[1];
        let l, r, val_l, val_r;
        while (i <= half) {
            l = i << 1;
            r = l | 1;
            val_l = this.array[l];
            val_r = this.array[r];
            if (this.compare(val_r, val_l)) {
                l = r;
                val_l = val_r;
            }
            if (this.compare(val, val_l)) {
                break
            }
            this.array[i] = val_l;
            i = l;
        }
        this.array[i] = val;
        this.array.pop();
        -- this.size;
    }
    Top(): any {
        return this.array[1];
    }
    IsEmpty(): boolean {
        return this.size == 0;
    }
    Clear(): void {
        this.array = [];
        this.array.push(null); // index begin with 1
        this.size = 0;
    }
}
