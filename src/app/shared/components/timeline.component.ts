import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,

  template: `
  <ul class="timeline" [ngClass]="{'timeline-vertical': isVertical}">
  @for (item of items; track $index) {

  
    
      <li>
        @if($index != 0){<hr />}
        <div class="timeline-start">{{item.start}}</div>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="timeline-end timeline-box">{{item.end}}</div>
        @if($index != (items.length - 1)){<hr />}
      </li>

      <!-- <li>
    <div class="timeline-start">1984</div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end timeline-box">First Macintosh computer</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div class="timeline-start">2007</div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end timeline-box">iPhone</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div class="timeline-start">2015</div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end timeline-box">Apple Watch</div>
  </li>
</ul> -->
    
  }
  </ul>
  `,
  styles: ``,
})
export class TimelineComponent {
  @Input() isVertical: boolean = false
  @Input() items:{start: string, end: string | undefined}[]= []
}
