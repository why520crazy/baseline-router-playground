import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectStore {
  id = '';

  setId(id: string) {
    this.id = id;
  }

  constructor() {}
}
