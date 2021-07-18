import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input() goal: any;
  @Output() isComplete = new EventEmitter<boolean>()
  
  goalComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
    constructor() { }

  ngOnInit(): void {
  }

}
