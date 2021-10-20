import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { of } from 'rxjs';

import { KanyeService } from '../../services/kanye.service';
import { KanyeQuoteComponent } from './kanye-quote.component';

describe('KanyeQuoteComponent', () => {
  let component: KanyeQuoteComponent;
  let fixture: ComponentFixture<KanyeQuoteComponent>;

  let service: KanyeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanyeQuoteComponent ],
      providers: [
        {
          provide: KanyeService,
          useValue: {
            getQuote: () => of({ quote: 'test' }),
          },
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanyeQuoteComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(KanyeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch quote on init', () => {
    jest.spyOn(service, 'getQuote'); // Arrange

    component.ngOnInit(); // Action

    expect(service.getQuote).toHaveBeenCalled(); // Assert
  });

  it('should show loading div when #loading is true', () => {
    component.loading = true;
    fixture.detectChanges();

    const loadingDiv = fixture.debugElement.query(By.css('#loading'));
    expect(loadingDiv).toBeTruthy();
  });

  it('should show content div when #loading is false', () => {
    component.loading = false;
    fixture.detectChanges();

    const contentDiv = fixture.debugElement.query(By.css('#content'));
    expect(contentDiv).toBeTruthy();
  });

  it('should show expected quote on h1', () => {
    const h1 = fixture.debugElement.query(By.css('#content > h1'));
    expect((h1.nativeElement as Element).textContent).toContain('test');
  });

  it('should call fetch quote on button click', () => {
    jest.spyOn(service, 'getQuote');

    const btn = fixture.debugElement.query(By.css('#content > button'));
    btn.triggerEventHandler('click', null);

    expect(service.getQuote).toHaveBeenCalled();
  });
});

