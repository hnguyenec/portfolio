import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Post } from '@portfolio/data/models';

@Component({
  selector: 'portfolio-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent {
  @HostBinding('class.portfolio-post-card') on = true;

  /** Blog post to render. */
  @Input() post: Post;
  /** Routerlink override. */
  @Input() url: string;

  getUrl(): string {
    if (this.url) {
      return this.url;
    }
    return this.post.url;
  }
}
