import { NgModule } from "@angular/core";

import { HlmButtonDirective, HlmButtonModule } from "@spartan-ng/ui-button-helm";
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from "@spartan-ng/ui-avatar-helm";

import { HlmFormFieldModule } from "@spartan-ng/ui-formfield-helm";
import { HlmInputDirective } from "@spartan-ng/ui-input-helm";
import { HlmIconComponent } from "@spartan-ng/ui-icon-helm";
import { provideIcons } from "@ng-icons/core";
import { lucideCopy, lucideImageUp, lucideLogOut, lucideMessageCirclePlus, lucideSearch, lucideSendHorizontal, lucideUser, lucideUserPlus, lucideUserSearch, lucideX } from "@ng-icons/lucide";
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';


const components = [
  HlmButtonModule,
  HlmAvatarImageDirective,
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmFormFieldModule,
  HlmInputDirective,
  HlmIconComponent,
  BrnDialogTriggerDirective,
  BrnDialogContentDirective,
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogHeaderComponent,
  HlmDialogFooterComponent,
  HlmDialogTitleDirective,
  HlmDialogDescriptionDirective,
  HlmLabelDirective,
  HlmInputDirective,
  HlmButtonDirective,
];

@NgModule({
  imports: components,
  exports: components,
  providers: [
    provideIcons(
      {
        lucideUser,
        lucideCopy,
        lucideSearch,
        lucideSendHorizontal,
        lucideImageUp,
        lucideLogOut,
        lucideX,
        lucideUserPlus,
        lucideUserSearch,
        lucideMessageCirclePlus
      }
    )
  ],
})
export class SharedModule {}
