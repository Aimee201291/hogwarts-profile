import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

    transform(birthDateAsString: string): any {
      if (birthDateAsString) {
        const res = birthDateAsString.split("-");
        const birthDate: Date = new Date(+res[2], +res[1] - 1, +res[0]);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
          }
        return age;
      } else {
        return null;
      }
    }

}