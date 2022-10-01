import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinbaseComponent } from './coinbase/coinbase.component';
import { CryptoRoutingModule } from './crypto-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from "@angular/material/table";




@NgModule({
  imports: [
    CommonModule,
    CryptoRoutingModule,
    HttpClientModule,
    MatTableModule

    // A11yModule,
    // CdkAccordionModule,
    // ClipboardModule,
    // CdkMenuModule,
    // CdkStepperModule,
    // CdkTableModule,
    // CdkTreeModule,
    // DragDropModule,
    // MatAutocompleteModule,
    // MatBadgeModule,
    // MatBottomSheetModule,
    // MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatStepperModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatIconModule,
    // MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatNativeDateModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    // MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule,
    // OverlayModule,
    // PortalModule,
    // ScrollingModule,
    // DialogModule,

    // BrowserAnimationsModule,
    // // BrowserModule,
    // FormsModule,
    // HttpClientModule,
    // MatNativeDateModule,
    // ReactiveFormsModule,
  ],
  declarations: [
    CoinbaseComponent
  ]
})
export class CryptoModule { }
