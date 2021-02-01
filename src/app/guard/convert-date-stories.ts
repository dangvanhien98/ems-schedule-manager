import { Injectable } from '@angular/core';
import { parseISO } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class ConvertDateStories {
  _parseISO(date: Date, isStories: boolean) {
    return isStories ? date : parseISO(date?.toString());
  }
}
