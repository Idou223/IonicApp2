import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: true, 
  imports: [ IonicModule,CommonModule],
})
export class PostComponent  implements OnInit {

  posts: any[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}
  loadPosts() {
  this.loading = true;
  this.error = '';

  this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
    .subscribe({
      next: (data) => {
        this.posts = data.slice(0, 10);
        this.loading = false;
      },
      error: () => {
        this.error = "Erreur lors du chargement";
        this.loading = false;
      }
    });
}

ngOnInit() {
  this.loadPosts();
}

deletePost(id: number) {
  this.posts = this.posts.filter(p => p.id !== id);
}

editPost(post: any) {
  const title = prompt('Nouveau titre', post.title);
  const body = prompt('Nouveau contenu', post.body);

  if (title) post.title = title;
  if (body) post.body = body;
}
}
