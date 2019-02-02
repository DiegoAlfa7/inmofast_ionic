import { Component } from "@angular/core";

/**
 * Generated class for the ListingCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "listing-card",
  templateUrl: "listing-card.html"
})
export class ListingCardComponent {

  text: string;

  constructor() {
    console.log("Hello ListingCardComponent Component");
    this.text = "Hello World";
  }

}
