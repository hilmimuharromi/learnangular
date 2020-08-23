import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClickMe() {
    console.log('tes klik');
  }
  gambar = [
    {
      url: 'https://i.imgur.com/PFCE6Zi.jpg',
      title: 'gambar 1',
    },
    {
      url: 'https://i.imgur.com/ZiKbwjf.jpg',
      title: 'gambar 2',
    },
    {
      url: 'https://i.imgur.com/5dAvg23.jpg',
      title: 'gambar 3',
    },
    // {
    //   url: 'https://i.imgur.com/PFCE6Zi.jpg',
    //   title: 'gambar 1',
    // },
    // {
    //   url: 'https://i.imgur.com/5dAvg23.jpg',
    //   title: 'gambar 3',
    // },
    // {
    //   url: 'https://i.imgur.com/PFCE6Zi.jpg',
    //   title: 'gambar 1',
    // },
  ];
}
