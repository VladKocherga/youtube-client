import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import AppRoutingModule from './app-routing.module';

import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import MainComponent from './components/main/main.component';
import SearchItemComponent from './components/main/search-item/search-item.component';
import FilterCriteriaComponent from './components/header/filter-criteria/filter-criteria.component';
import KeywordFilterPipe from './pipes/keyword-filter/keyword-filter.pipe';
import DateFilterPipe from './pipes/criteria-filter/criteria-filter';
import UserComponent from './components/header/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SearchItemComponent,
    FilterCriteriaComponent,
    KeywordFilterPipe,
    DateFilterPipe,
    UserComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class AppModule {}
