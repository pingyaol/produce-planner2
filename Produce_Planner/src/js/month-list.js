import { Preferences } from "@capacitor/preferences";
import { STORAGE_KEY } from "./main";
import { Share } from "@capacitor/share";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { IonicSelectableModule } from 'ionic-selectable';
import { menuController } from '@ionic/core';

window.customElements.define(
    "month-list",
    class extends HTMLElement {
      constructor() {
        super();
  
        const root = this.attachShadow({ mode: "open" });
  
        // Basic HTML
        root.innerHTML = `
        <ion-list>
            <ion-item>
            <ion-select placeholder="Select a Month">
                <div slot="label">Favorite Fruit <ion-text color="danger">(Required)</ion-text></div>
                <ion-select-option value="jan">January</ion-select-option>
                <ion-select-option value="feb">February</ion-select-option>
                <ion-select-option value="mar">March</ion-select-option>
                <ion-select-option value="apr">April</ion-select-option>
                <ion-select-option value="may">May</ion-select-option>
                <ion-select-option value="jun">June</ion-select-option>
                <ion-select-option value="jul">July</ion-select-option>
                <ion-select-option value="aug">August</ion-select-option>
                <ion-select-option value="sep">September</ion-select-option>
                <ion-select-option value="oct">October</ion-select-option>
                <ion-select-option value="nov">November</ion-select-option>
                <ion-select-option value="dec">December</ion-select-option>
                </ion-select>
            </ion-item>
        </ion-list>
      `;
      }

    }

); 

