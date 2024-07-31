import { Component, Renderer2 } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { BluetoothSerial } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private renderer: Renderer2) {}

  sendData(data: string) {
    console.log('Sending data:', data);
    // Aquí iría tu lógica para enviar datos por Bluetooth
  }

  handleMove(event: TouchEvent) {
    const touch = event.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (element && element.tagName === 'ION-BUTTON') {
      const buttonId = element.getAttribute('id');
      switch (buttonId) {
        case 'button-8':
          this.sendData('8');
          break;
        case 'button-4':
          this.sendData('4');
          break;
        case 'button-6':
          this.sendData('6');
          break;
        case 'button-2':
          this.sendData('2');
          break;
        default:
          break;
      }
    }
  }

}
