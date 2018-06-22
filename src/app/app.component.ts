import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  zoomLevel: number;

  @Input() map: ol.Map;

  constructor(private ref: ChangeDetectorRef) {
    const zoomOutEl: HTMLDivElement = document.querySelector('.ol-zoom-out');
    zoomOutEl.style.marginTop = '30px';
  }

  ngOnInit() {
    this.setZoom(this.map.getView().getZoom());

    this.map.on('moveend', () => {
      const zoom = this.map.getView().getZoom();

      if (this.zoomLevel !== zoom) { this.setZoom(zoom); }
    });
  }

  private setZoom(zoom: number) {
    this.zoomLevel = zoom;
    this.ref.detectChanges();
  }
}
