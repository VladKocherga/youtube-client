import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CARD_DESCRIPTION_MAX_LENGTH,
  CARD_TITLE_MAX_LENGTH,
  CARD_TITLE_MIN_LENGTH,
  CARD_URL_PATTERN,
} from 'src/app/constants/constant';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export default class AdminComponent {
  public cardForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(CARD_TITLE_MIN_LENGTH),
      Validators.maxLength(CARD_TITLE_MAX_LENGTH),
    ]),
    description: new FormControl('', [
      Validators.maxLength(CARD_DESCRIPTION_MAX_LENGTH),
    ]),
    img: new FormControl('', [
      Validators.required,
      Validators.pattern(CARD_URL_PATTERN),
    ]),
    videoLink: new FormControl('', [
      Validators.required,
      Validators.pattern(CARD_URL_PATTERN),
    ]),
  });

  public isCardCreateVisibile: boolean = false;

  public createCard(): void {
    if (this.cardForm.valid) {
      this.cardForm.reset();
      this.isCardCreateVisibile = true;
    }
  }

  public markAsTouched(): void {
    this.cardForm.get('title')?.markAsTouched();
    this.cardForm.get('description')?.markAsTouched();
    this.cardForm.get('img')?.markAsTouched();
    this.cardForm.get('videoLink')?.markAsTouched();
  }
}
