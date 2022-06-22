import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from './types';

@Pipe({
    name: 'taskFilter',
    pure: false,
})

export class TaskFilterPipe implements PipeTransform {

    transform(items: ITask[], prop: keyof ITask): ITask[] {
        const filtered = items?.sort((a, b) => {
            const first = a[prop] ?? -1;
            const second = b[prop] ?? -1;
            
            return first >= second ? 1: -1;
        })

        return filtered;
    }

}
