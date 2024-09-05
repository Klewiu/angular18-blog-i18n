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
      title: 'ANGULAR 15 + FIREBASE',
      subtitle: 'Udemy Course Intro',
      videoUrl: 'https://www.youtube.com/embed/HIuJI1u2ltk?si=i9m1Hjdh9FguEBTd',
      content: 'In this course, you will learn how to create an Angular application from scratch and then deploy it using Firebase. We will implement CRUD functionality and we will also cover the topic of user authentication.'
    },
    {
      title: 'API - ANGULAR + DJANGO REST FRAMEWORK',
      subtitle: 'Udemy Course Intro',
      videoUrl: 'https://www.youtube.com/embed/pgkSiXiESXE?si=v_ZhukOJKl5zm1_Y',
      content: 'In this application, using an API, we will create a full-stack application where Django Rest Framework will handle the backend, and the frontend will be built using Angular. We will go through all CRUD operations, test endpoints using Postman, and finally implement user authentication using tokens.'
    },
    {
      title: 'ANGULAR 15 + FIREBASE',
      subtitle: 'Create Login Functionality',
      videoUrl: 'https://www.youtube.com/embed/UddtyVrC9qQ?si=CMuQi_sfAcuxNxyS',
      content: 'Welcome to a quick auth setup in Angular and Firebase. Learn how to create quickly and easily login functionality.'
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
