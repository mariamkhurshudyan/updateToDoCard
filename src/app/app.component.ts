import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'updateToDoCard';

  items = [] as any;



  addItem(newItem: string) {
       this.items.push(newItem);
       if(this.items.length > 9){
         alert("Sorry,You are not able to add new cards your limit reached.")
       }
    }
  
  deleteItem() {
    if (this.items[this.items.length -1] !== ''){
      this.items.pop();
    }
  }
  resetItem() {
    this.items = [];
  }
}
