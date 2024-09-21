import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { SafeUrlPipe } from './safe-url.pipe';

interface Tile {
  title: string;
  subtitle: string;
  videoUrl: string;
  content: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, MatPaginatorModule, SafeUrlPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor() {}

  tiles: Tile[] = [
    {
      title: $localize `ANGULAR 15 + FIREBASE`,
      subtitle: $localize `Intro Kursu Udemy`,
      videoUrl: 'https://www.youtube.com/embed/HIuJI1u2ltk?si=i9m1Hjdh9FguEBTd',
      content: $localize `W tym kursie nauczysz się, jak stworzyć aplikację Angular od podstaw i wdrożyć ją za pomocą Firebase. Zaimplementujemy funkcjonalność CRUD, a także omówimy temat uwierzytelniania użytkowników.`
    },
    {
      title: $localize `API - ANGULAR + DJANGO REST FRAMEWORK`,
      subtitle: $localize `Intro Kursu Udemy`,
      videoUrl: 'https://www.youtube.com/embed/pgkSiXiESXE?si=v_ZhukOJKl5zm1_Y',
      content: $localize `W tej aplikacji, korzystając z API, stworzymy pełną aplikację full-stack, gdzie Django Rest Framework będzie obsługiwał backend, a frontend zostanie zbudowany przy użyciu Angulara. Przejdziemy przez wszystkie operacje CRUD, przetestujemy endpointy za pomocą Postmana, a na koniec zaimplementujemy uwierzytelnianie użytkowników przy użyciu tokenów.`
    },
    {
      title: $localize `ANGULAR 15 + FIREBASE`,
      subtitle: $localize `Tworzenie Logowania`,
      videoUrl: 'https://www.youtube.com/embed/UddtyVrC9qQ?si=CMuQi_sfAcuxNxyS',
      content: $localize `Witamy w szybkim konfiguratorze uwierzytelniania w Angularze i Firebase. Naucz się, jak szybko i łatwo stworzyć funkcjonalność logowania.`
    },
  ];

    paginatedTiles:Tile[] = []
    pageSize = 4;
    currentPage = 0;

    ngOnInit(): void {
      this.updatePaginatedTiles();
    }

    redirectToUdemy() {
      window.open('https://www.udemy.com/user/tomasz-klewicki/');
    }

    handlePageEvent(event: PageEvent) {
      this.pageSize = event.pageSize;
      this.currentPage = event.pageIndex;
      this.updatePaginatedTiles();
    }
  
    updatePaginatedTiles() {
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.paginatedTiles = this.tiles.slice(startIndex, endIndex);
    }
}
