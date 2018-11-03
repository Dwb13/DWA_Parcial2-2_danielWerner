import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'multiplicarPor' })

export class MultiplicarPorPipe implements PipeTransform {
    
    transform(value, por, otro){
        let value_one = parseInt(value);
        let value_two = parseInt(por);
        let value_three = parseInt(otro);

        let result = "Pipe result --> " + value_one + " x " + value_two + " x " + value_three + " = " + (value_one * value_two * value_three);

        return result;
    }

}