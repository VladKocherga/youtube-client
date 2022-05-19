import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import environment from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import ResponseInterceptor from './interceptors/response.interceptor';
import AppRoutingModule from './app-routing.module';
import YoutubeState from './store/youtube.state';

import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import MainComponent from './components/main/main.component';
import SearchItemComponent from './components/main/search-item/search-item.component';
import FilterCriteriaComponent from './components/header/filter-criteria/filter-criteria.component';
import KeywordFilterPipe from './pipes/keyword-filter/keyword-filter.pipe';
import DateFilterPipe from './pipes/criteria-filter/criteria-filter';
import UserComponent from './components/header/user/user.component';
import DetailsComponent from './components/details/details.component';
import AuthorizationComponent from './components/authorization/authorization.component';
import RegistrationComponent from './components/registration/registration.component';
import AdminComponent from './components/admin/admin.component';
import DataService from './services/data.service';
import UserItemComponent from './components/main/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AuthorizationComponent,
    SearchItemComponent,
    FilterCriteriaComponent,
    KeywordFilterPipe,
    DetailsComponent,
    DateFilterPipe,
    UserComponent,
    RegistrationComponent,
    AdminComponent,
    UserItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([YoutubeState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
    HttpClientModule,
    DataService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class AppModule {}
