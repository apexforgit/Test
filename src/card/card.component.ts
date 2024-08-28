import { Component, Input } from "@angular/core";

@Component({
    standalone:true,
    selector:"my-card",
    templateUrl:"./card.component.html",
    styleUrl:"./card.component.css"
})
export class Card{
    @Input() name="Adil"
}