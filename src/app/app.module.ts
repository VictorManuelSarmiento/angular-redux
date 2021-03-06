import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { CampaignComponent } from './resources/campaign/campaign.component';
import { CampaignCountComponent } from './resources/campaign/count.component';

import { CampaignService } from './_services/campaign.service';

import { campaigns } from './_reducers/campaign.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    CampaignCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SharedModule,
    StoreModule.provideStore({
      campaigns:campaigns
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [
    CampaignService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
