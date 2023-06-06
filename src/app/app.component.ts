import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div class="ol-control" title="Zoom level">{{zoomLevel}}</div>',
  styles: [`
    div {
      top: 48px;
      left: 18px;
      width: 1.375em;
      height: 1.375em;
      text-align: center;
      color: rgba(0,60,136,.5);
      background-color: transparent !important;
      font-size: 1.14em;
      font-weight: 700;
      display: block;
      margin: 1px;
      padding: 0;
    }
  `]
})
export class AppComponent implements OnDestroy, OnInit {
  @Input() map: ol.Map | undefined;
  zoomLevel = '2';

  private currentZoom = 2;

  constructor(private ref: ChangeDetectorRef, @Inject(DOCUMENT) private document: Document) {}

  ngOnDestroy() {
    this.map?.un('moveend', this.moveEndComplete);
  }

  ngOnInit() {
    // we change the style of the zoom out button when component is initialized
    // because the button exists outside the component scope
    const zoomOutEl: HTMLElement | null = this.document.querySelector('.ol-zoom-out');
    zoomOutEl!.style.marginTop = '30px';

    this.map?.on('moveend', this.moveEndComplete);
  }

  private moveEndComplete = () => {
    const zoom = this.map?.getView().getZoom();

    if (zoom && this.currentZoom !== zoom) {
      this.currentZoom = zoom;
      this.zoomLevel = zoom.toFixed(0);
      this.ref.detectChanges();
    }
  }
}
