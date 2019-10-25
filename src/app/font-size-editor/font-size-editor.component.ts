import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {
  fontSize = 14;

  onChange(value) {
    this.fontSize = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
