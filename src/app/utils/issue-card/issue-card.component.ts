import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AvatarComponent } from '../avatar/avatar.component';
import { MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, AvatarComponent, MatTooltipModule, MatIconModule]
})

export class IssueCardComponent {
    
  constructor(private router: Router) {
    
  }

  text_truncate = function(str: string, length: number, ending: string | any[] | null) { 
       
    if (ending == null) { 
      ending = '...'; 
    } 
       
    if (str.length > length) { 
      return str.substring(0, length - ending.length) + ending; 
    } else { 
      return str; 
    } 
  }; 

  @Input() id!: any;
  @Input() issueDescription!: string;
  @Input() issueName!: string;
  @Input() issueCreator!: string;
  @Input() busName!:string;
  @Input() issueDescriptionShort!:string;

  readmore(){

    console.log(this.id);
    
    this.router.navigateByUrl("/post/"+ this.id)
  }

  ngOnInit(){
    console.log(this.issueDescription);
    this.issueDescriptionShort = this.text_truncate(this.issueDescription, 150, "...")
  }

}
