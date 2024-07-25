import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform 
{
    transform(value: any, ...args: any[]): any 
    {
        if(value != parseInt(value))
            return "";

        const hours = Math.floor(value / 60);
        const minutes = value % 60;

        return (hours < 10 ? "0" : "") + hours + ":" 
            + (minutes < 10 ? "0" : "") + minutes
            + (hours > 1 ? " hours" : " hour");
      }    
}
