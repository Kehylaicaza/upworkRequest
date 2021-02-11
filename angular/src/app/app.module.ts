import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DxAccordionModule, DxSwitchModule, DxCheckBoxModule, DxScrollViewModule, DxButtonGroupModule, DxRadioGroupModule, } from "devextreme-angular";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AvatarModule } from 'ngx-avatar';
import { BnNgIdleService } from 'bn-ng-idle'; 
import { TokenInterceptorService } from './services/token-interceptor.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';


import { VerifyAuthGuard } from './verify-auth.guard';
import { AngularImageViewerModule } from "@hreimer/angular-image-viewer";
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer'; // <-- Import PdfJsViewerModule module
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './views/login/login.component';
import { DxFileManagerModule } from 'devextreme-angular';

import { NgxDocViewerModule } from 'ngx-doc-viewer';

//Modulo para inicio de Sesion con redes sociales
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { DxLoadPanelModule, DxButtonModule, DxSelectBoxModule, DxAutocompleteModule, DxListModule, DxNumberBoxModule, DxTextBoxModule, DxDataGridModule, DxFileUploaderModule, DxPopupModule } from 'devextreme-angular';


import { PagePrincipalComponent } from './views/page-principal/page-principal.component';

import {
  PdfViewerModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService
} from '@syncfusion/ej2-angular-pdfviewer';

import { ReactiveFormsModule } from '@angular/forms';

import { InterpriseComponent } from './views/interprise/interprise.component';



//import { FileSelectDirective } from 'ng2-file-upload';


//configurar modulos google
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,



    provider: new GoogleLoginProvider("996668400788-teqmutq18rr5ajcu6k9bqngvmdnvqcrq.apps.googleusercontent.com")

    // provider: new GoogleLoginProvider("749947891764-cfman7ae9pn4tbuki88ak1dujk7nm9m5.apps.googleusercontent.com")//prueba en firebase
    //provider: new GoogleLoginProvider("749947891764-nomce42d3v0a15cr1j6tape3iqoklbbo.apps.googleusercontent.com")//prueba local
  }/*,
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }*/
]);

export function provideConfig() {
  return config;
}
const socketConfig: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    DxLoadPanelModule,
    AppHeaderModule,
    DxRadioGroupModule,
    AppSidebarModule,
    DxButtonModule,
    DxButtonGroupModule,
    DxFileUploaderModule,
    DxSelectBoxModule,
    AngularImageViewerModule,
    DxAutocompleteModule,
    DxSwitchModule,
    DxPopupModule,
    DxListModule,
    DxAccordionModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxFileManagerModule,
    DxDataGridModule,
    DxScrollViewModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule,
    NgxDocViewerModule,
    PdfViewerModule,
    ReactiveFormsModule,
    PdfJsViewerModule,
    AvatarModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    LoginComponent,
    PagePrincipalComponent,
  
    InterpriseComponent,


  ],
  providers: [
    VerifyAuthGuard,
   
    BnNgIdleService,
    LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
