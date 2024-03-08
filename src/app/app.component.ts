import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PrimeNGConfig } from 'primeng/api';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet, NgxSpinnerModule],
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
   private primengConfig = inject(PrimeNGConfig);

   ngOnInit(): void {
      this.configurarPrimeNg();
   }

   private configurarPrimeNg(): void {
      // Habilitar o efeito de ripple
      this.primengConfig.ripple = true;

      // Configurar zIndex padroes
      this.primengConfig.zIndex = {
         modal: 1100, // dialog, sidebar
         overlay: 1000, // dropdown, overlaypanel
         menu: 1000, // overlay menus
         tooltip: 1100, // tooltip
      };
   }
}
