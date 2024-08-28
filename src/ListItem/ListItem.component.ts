import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:"ListItem",
    templateUrl:"./ListItem.component.html",
    standalone:true
})
export class ListItem{
    @Input() task: string = "";

    @Output() deleteTaskPressed = new EventEmitter<void>()

    deleteTask(){
        this.deleteTaskPressed.emit()
    }
}