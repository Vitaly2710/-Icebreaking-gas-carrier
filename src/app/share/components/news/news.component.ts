import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  news = [
    {time: Date(), headline: 'Elementum ipsum eget venenatis at rutrum aenean. Neque gravida nunc dolor tellus ac tellus. Turpis.', text: 'Euismod nunc vel sit orci odio eget semper pharetra risus. Nibh pharetra neque amet enim egestas tincidunt. Eu.', img: './../../assets/cruiser 1.svg'},
    {time: Date(), headline: 'Volutpat vehicula scelerisque consectetur nullam nunc vel. Sagittis enim feugiat maecenas.', text: 'Facilisis aliquam in velit nibh ipsum quis. Diam nulla fringilla etiam id et egestas dui odio. Lectus nam gravida.', img: './../../assets/cruiser 1.svg'},
    {time: Date(), headline: 'Etiam donec fames sed nunc senectus ut eget. Nibh felis eget.', text: 'Volutpat egestas porttitor duis purus quam est quam. Tempor aliquam vel arcu euismod. Mattis ullamcorper.', img: './../../assets/cruiser 1.svg'},
    {time: Date(), headline: 'Amet volutpat urna vitae vitae. Varius accumsan mattis egestas sagittis arcu libero. Sit at.', text: 'Vestibulum ut justo sagittis eu. Tincidunt viverra odio mauris ut nec tellus ante. Sit ac etiam sed vestibulum.', img: './../../assets/cruiser 1.svg'},
  ]
}
