import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BlueComponentList } from './blue/blue.component-list';
import { GreenComponentList } from './green/green.component-list';
import { RedComponentList } from './red/red.component-list';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        routing
      ],
      declarations: [
        AppComponent,
        ...RedComponentList,
        ...GreenComponentList,
        ...BlueComponentList
      ],
      providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
      ]
    }).compileComponents();
  }));
  it(`should have some tests`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // test here
  }));
});
