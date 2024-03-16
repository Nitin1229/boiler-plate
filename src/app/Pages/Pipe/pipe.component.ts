import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  outputForUpper: string = '';
  outputForLower: string = '';
  outputForDecimal: any;
  outputForPercent: any;
  outputForTitle: any;
  outputForString: string = '';

  constructor() {}

  ngOnInit(): void {}

  textTransform(type: any) {
    if (type == 'upper') {
      let inputText = document.getElementById(
        'upperCaseInput'
      ) as HTMLInputElement;
      this.outputForUpper = inputText.value;
    }
    if (type == 'lower') {
      let inputText = document.getElementById(
        'lowerCaseInput'
      ) as HTMLInputElement;
      this.outputForLower = inputText.value;
    }
  }

  numberToDecimal() {
    let input = document.getElementById('inputNumber') as HTMLInputElement;
    this.outputForDecimal = input.value;
  }

  numberToPercent() {
    let input = document.getElementById('ipNumberForDec') as HTMLInputElement;
    this.outputForPercent = input.value;
  }

  titleCase() {
    let input = document.getElementById('inputForTitle') as HTMLInputElement;
    this.outputForTitle = input.value;
  }

  stringSlicing() {
    let input = document.getElementById('inputForString') as HTMLInputElement;
    this.outputForString = input.value;
  }
}
