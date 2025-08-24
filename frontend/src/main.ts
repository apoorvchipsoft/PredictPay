import "zone.js";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { importProvidersFrom } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app/app.component";

// Angular 20 uses standalone components by default, no routing needed
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ),
  ],
}).catch((err) => console.error(err));
