import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import {
  CARD_DESCRIPTION_MAX_LENGTH,
  CARD_TITLE_MAX_LENGTH,
  CARD_TITLE_MIN_LENGTH,
  CARD_URL_PATTERN,
  emptyUserCard,
} from 'src/app/constants/constant';
import { IUserCard } from 'src/app/interfaces/search-item.model';
import { SetUserCards } from 'src/app/store/youtube.action';
import YoutubeState from 'src/app/store/youtube.state';
import { generateRandomId } from 'src/app/utilities/utils';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export default class AdminComponent {
  private userCards: IUserCard[] = [];

  private newUserCard: IUserCard = emptyUserCard;

  public cardForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(CARD_TITLE_MIN_LENGTH),
      Validators.maxLength(CARD_TITLE_MAX_LENGTH),
    ]),
    description: new FormControl('', [
      Validators.maxLength(CARD_DESCRIPTION_MAX_LENGTH),
    ]),
    imgLink: new FormControl('', [
      Validators.required,
      Validators.pattern(CARD_URL_PATTERN),
    ]),
    videoLink: new FormControl('', [
      Validators.required,
      Validators.pattern(CARD_URL_PATTERN),
    ]),
  });

  public isCardCreateVisibile: boolean = false;

  constructor(private store: Store, private router: Router) {
    this.userCards = JSON.parse(
      this.store.selectSnapshot(YoutubeState.userCards)
    );
  }

  public createCard(newUserCard: IUserCard): void {
    if (this.cardForm.valid) {
      this.newUserCard.title = newUserCard.title;
      this.newUserCard.description = newUserCard.description;
      this.newUserCard.imgLink = newUserCard.imgLink;
      this.newUserCard.videoLink = newUserCard.videoLink;
      this.newUserCard.creatingDate = Date.now().toString();
      this.newUserCard.id = generateRandomId();
      this.userCards.unshift(this.newUserCard);
      this.store.dispatch(new SetUserCards(JSON.stringify(this.userCards)));
      this.newUserCard = emptyUserCard;
      this.isCardCreateVisibile = true;
      this.cardForm.reset();
      this.router.navigate(['/']);
    }
  }

  public markAsTouched(): void {
    this.cardForm.get('title')?.markAsTouched();
    this.cardForm.get('description')?.markAsTouched();
    this.cardForm.get('img')?.markAsTouched();
    this.cardForm.get('videoLink')?.markAsTouched();
  }
}
