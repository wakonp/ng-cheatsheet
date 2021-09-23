import {
  Component,
  Inject,
  InjectionToken,
  OnInit,
  Optional,
} from '@angular/core';

export const CONSTRUCTION_TITLE: InjectionToken<string> =
  new InjectionToken<string>('title for the construction component');

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss'],
})
export class UnderConstructionComponent implements OnInit {
  constructor(
    @Optional()
    @Inject(CONSTRUCTION_TITLE)
    public constructionTitle: string | null
  ) {}

  ngOnInit(): void {}
}
