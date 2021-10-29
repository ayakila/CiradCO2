import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul-ges',
  templateUrl: './calcul-ges.component.html',
  styleUrls: ['./calcul-ges.component.scss']
})
export class CalculGesComponent implements OnInit {
  selectedDepart="Pradez-le-Lez";
  selectedArrive="Kourou";
  selectedSite="Lavalette";
  fruits: string[] = ['Lemon'];
  allParticipants: any= [{name:"Martin",site:"Lavalette"},
{name:"3 participants",site:"Baillarget"},{name:"2 participants", site:"Scheffer"}];
  selectable = true;
  removable = true;
  constructor() { }

  ngOnInit(): void {
  
  }
  remove(participant: string): void {
    const index = this.allParticipants.indexOf(participant);

    if (index >= 0) {
      this.allParticipants.splice(index, 1);
    }
  }

}
