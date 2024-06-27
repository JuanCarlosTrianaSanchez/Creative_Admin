
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';

import { AppRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(AppRoutes),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};
