import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength',
  standalone: true,
})
export class StrengthPipe implements PipeTransform {
  transform(value: number): string {
    if(value < 50) {
      return value + " (weak)";
    } else if(value >=50 && value < 100) {
      return value + " (important)";
    } else {
      return value + " (VIP)";
    }
  }
}
