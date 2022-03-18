import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'checkmark', pure: true })
export class CheckmarkPipe implements PipeTransform {
  transform(input: boolean) {
    return input ? '\u2713' : '\u2718';
  }
}
