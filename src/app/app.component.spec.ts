import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  const map = {
    getView() {
      return {
        getZoom() { return 2.8; }
      };
    },
    on() {},
    un() {}
   };

  createZoomOut();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    component.map = <any>map;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should change the top margin of the zoom out control', () => {
    const zoomOutEl: HTMLElement = document.querySelector('.ol-zoom-out');
    expect(zoomOutEl.style.marginTop).toBe('30px');
  });

  it('should update the zoom level', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.ol-control').textContent).toBe('3');
  });

  it('should listen for moveend events', () => {
    const spy = spyOn(component.map, 'on');
    fixture.detectChanges();
    expect(spy.calls.first().args[0]).toBe('moveend');
  });

  it('should not listen for moveend events', () => {
    const spy = spyOn(component.map, 'un');
    component.ngOnDestroy();
    expect(spy.calls.first().args[0]).toBe('moveend');
  });
});

function createZoomOut() {
  const zoomOut = document.createElement('div');
  zoomOut.classList.add('ol-zoom-out');
  document.body.appendChild(zoomOut);
}
