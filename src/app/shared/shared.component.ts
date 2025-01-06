import { NgModule } from '@angular/core';

import {
  HlmButtonDirective,
  HlmButtonModule,
} from '@spartan-ng/ui-button-helm';
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from '@spartan-ng/ui-avatar-helm';

import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import {
  lucideCopy,
  lucideImage,
  lucideImageUp,
  lucideLogOut,
  lucideMessageCircle,
  lucideMessageCirclePlus,
  lucideSearch,
  lucideSendHorizontal,
  lucideUser,
  lucideUserPlus,
  lucideUserSearch,
  lucideX,
} from '@ng-icons/lucide';
import {
  BrnDialogContentDirective,
  BrnDialogTriggerDirective,
} from '@spartan-ng/brain/dialog';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

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
  HlmSpinnerComponent,
];

@NgModule({
  imports: components,
  exports: components,
  providers: [
    provideIcons({
      lucideUser,
      lucideCopy,
      lucideSearch,
      lucideSendHorizontal,
      lucideImageUp,
      lucideLogOut,
      lucideX,
      lucideUserPlus,
      lucideUserSearch,
      lucideMessageCirclePlus,
      lucideMessageCircle,
      lucideImage,
    }),
  ],
})
export class SharedModule {}
