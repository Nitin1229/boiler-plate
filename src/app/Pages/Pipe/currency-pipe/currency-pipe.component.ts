import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.css'],
})
export class CurrencyPipeComponent implements OnInit {
  currencies: any = [];
  currencyPipeForm = new FormGroup({
    amount: new FormControl(),
    currencyFormats: new FormControl(),
    output: new FormControl(),
  });

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    this.currencies = ['INR', 'USD', 'EUR', 'JPY', 'AUD', 'CAD', 'GBP'];
  }
  currencyTransform() {
    let amount = this.currencyPipeForm.get('amount')?.value;
    let currencyFormats = this.currencyPipeForm.get('currencyFormats')?.value;
    let output = this.currencyPipe.transform(amount, currencyFormats);
    console.log('AA', output);
    this.currencyPipeForm.get('output')?.setValue(output);
  }
}
