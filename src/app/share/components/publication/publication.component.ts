import { Component } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent {

  publication = [
    {img: './assets/ship1.svg', date: new Date(), title: 'Nibh lacinia venenatis bibendum eget fermentum semper amet. Sed eu quis sed erat aliquam elementum nec. Pellentesque fringilla nunc.',link: 'Et blandit volutpat sed ullamcorper massa.'},
    {img: './assets/ship2.svg', date: new Date(), title: 'Mattis sem habitant non vitae scelerisque. Sagittis eleifend id convallis posuere feugiat nibh sed risus et. Id aliquam enim ut ac nunc porttitor.',link: 'Sollicitudin aliquet lorem sed varius a eget quis.'},
    {img: './assets/ship3.svg', date: new Date(), title: 'Sit quis non facilisis posuere. Nec sit auctor nibh integer lacus. Posuere vel amet quam egestas pulvinar dictum nunc tellus vitae. Non amet lacus.',link: 'In nulla non mattis facilisi sapien. In sodales.'},
    {img: './assets/ship4.svg', date: new Date(), title: 'Lobortis vitae in tellus ac fames amet. Magna et in nunc suspendisse eget. Massa ultrices velit turpis orci non gravida praesent in nibh quis.',link: 'Sagittis consequat placerat egestas nunc.'},
  ]
}
