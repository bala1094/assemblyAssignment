import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { CustomTimeLoneComponent } from './custom-time-lone/custom-time-lone.component';
import { RestApiService} from './services/rest-api.service';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterUniqueElementsPipe } from './pipes/filter-unique-elements.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimeLineComponent,
    CustomTimeLoneComponent,
    LoggedInComponent,
    FilterPipe,
    FilterUniqueElementsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
