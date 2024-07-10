import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormatter',
  standalone: true
})
export class PhoneFormatterPipe implements PipeTransform {

  transform(value: string, arg?: string): string {
    let number: string = value.replace(/\D/g, '');
    let formatted: string = ''
    let index = 0;
    const template = arg ? arg : '+ (###) ###-##-##'

    if(template.includes('+')) {
      number = number.substring(1)
    } else {
      number = number.replace(/^./, '8')
    }

    for (let i = 0; i < template.length; i++) {
      if (template[i] === '#') {
          formatted += number[index];
          index++;
      }
      else if(template[i] === '+') {
        formatted += '+7'
      }
      else {
          formatted += template[i];
      }
  }

    return formatted
  }

}
