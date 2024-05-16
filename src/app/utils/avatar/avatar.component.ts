import { Component, Input } from '@angular/core';


@Component({
  selector: 'img-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
  standalone: true
})
export class AvatarComponent {
  @Input()
  imgSrc !: string;
}
