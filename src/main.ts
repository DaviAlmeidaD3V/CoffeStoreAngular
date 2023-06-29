import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as $ from 'jquery';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


$(window).on('beforeunload', function() {
    document.documentElement.scrollTop = 0
});