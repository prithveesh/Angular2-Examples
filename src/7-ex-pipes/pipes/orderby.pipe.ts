import { Pipe } from "@angular/core";

@Pipe({
    name: "orderby"
})
export class OrderByPipe {
    transform(array: Array<string>, args: string): Array<string> {
        array.sort((a: any, b: any) => {
            let order:number = args.length === 2 ? parseInt(args[1]) : 1;
            if (a[args[0]] < b[args[0]]) {
                return -1 * order;
            } else if (a[args[0]] > b[args[0]]) {
                return 1 * order;
            } else {
                return 0;
            }
        });
        return array;
    }
}
