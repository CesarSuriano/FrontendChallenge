import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private _teamId!: Number
  private _imagePath: String = ''
  private _teamName: String = ''
  private _nameIsDefined: Boolean = false

  @ViewChild("inputName") inputName!: ElementRef<HTMLInputElement>;

  constructor () {}
  
  ngOnInit(): void {
  }

  public get teamId(): Number {
    return this._teamId
  }

  @Input()
  public set teamId(value: Number) {
    this._teamId = value
  }

  public get nameIsDefined() {
    return this._nameIsDefined
  }

  public set nameIsDefined(value: Boolean) {
    this._nameIsDefined = value
  }

  public get teamName() {
    return this._teamName
  }
  
  @Input()
  public set teamName(value: String) {
    this._teamName = value.trim()
  }

  public get imagePath(): String {
    return this._imagePath
  }

  @Input()
  public set imagePath(value: String) {
    this._imagePath = value
  }

  focusIntoInputName(): void {
    this.nameIsDefined = false
    setTimeout(() => {
      this.inputName.nativeElement.focus();
    }, 50);
  }

  onBlurInputName(): void {
    this.validateNameOfTeam()
  }

  private validateNameOfTeam(): void {
    if (this.teamName.trim()) {
      this.nameIsDefined = true
      return
    }
    this.nameIsDefined = false
  }
}
