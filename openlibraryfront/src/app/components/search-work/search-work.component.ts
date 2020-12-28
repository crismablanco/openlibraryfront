import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-work',
  templateUrl: './search-work.component.html',
  styleUrls: ['./search-work.component.css']
})
export class SearchWorkComponent implements OnInit {

  @Output() searchWork: EventEmitter<any> = new EventEmitter();

  work_id:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.searchWork.emit(this.work_id);
  }
}
