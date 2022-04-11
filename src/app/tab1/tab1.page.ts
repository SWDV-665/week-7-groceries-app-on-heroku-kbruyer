import {Component} from "@angular/core";
import {AlertController, ToastController} from "@ionic/angular";
import {GroceriesServiceService} from "../groceries-service.service";
import {InputDialogServiceService} from "../input-dialog-service.service";
import {SocialSharing} from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
    selector: "app-tab1",
    templateUrl: "tab1.page.html",
    styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
    title = "Grocery List";

    constructor(
        public toastController: ToastController,
        public alertController: AlertController,
        public dataService: GroceriesServiceService,
        public InputDialogService: InputDialogServiceService,
        public socialSharing: SocialSharing
    ) {
    }

    loadItem() {
        return this.dataService.getItems();
    }

    async editItem(item, index) {
        console.log("Editing Item - ", item, index);
        const toast = await this.toastController.create({
            message: "Editing Item - " + index + "...",
            duration: 2000,
        });
        await toast.present();

        await this.InputDialogService.showPrompt(item, index);
    }

    async shareItem(item, index) {
        console.log("Sharing Item - ", item, index);
        const toast = await this.toastController.create({
            message: "Sharing Item - " + index + "...",
            duration: 2000,
        });
        await toast.present();

        let message = "Grocery Item - Name: " + item.name + " - Quantity: " + item.quantity;
        let subject = "Shared via Groceries app";

        this.socialSharing.share(message, subject).then(() => {
            // Sharing via email is possible
            console.log("Shared successfully!")
        }).catch((error) => {
            // Sharing via email is not possible
            console.error("Error while sharing ", error);
        });

    }

    async removeItem(item, index) {
        console.log("Removing Item - ", item, index);
        const toast = await this.toastController.create({
            message: "Removing Item - " + index + "...",
            duration: 2000,
        });
        await toast.present();

        this.dataService.removeItem(index);
    }

    addItem() {
        console.log("Adding item");
        this.InputDialogService.showPrompt();
    }
}
