import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { GroceriesServiceService } from "./groceries-service.service";

@Injectable({
  providedIn: "root",
})
export class InputDialogServiceService {
  constructor(
    public alertController: AlertController,
    public dataService: GroceriesServiceService
  ) {}

  async showPrompt(item?, index?) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: item ? "Edit Item" : "Add Item",
      message: item ? "Please edit item..." : "Please enter item...",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "Name",
          value: item ? item.name : null,
        },
        {
          name: "quantity",
          type: "text",
          placeholder: "Quantity",
          value: item ? item.quality : null,
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (item) => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Save",
          handler: (item) => {
            console.log("Confirm Save", item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            } else {
              this.dataService.addItem(item);
            }
          },
        },
      ],
    });

    await alert.present();
  }
}
