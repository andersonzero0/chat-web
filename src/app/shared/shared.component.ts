import { NgModule } from "@angular/core";

import { HlmButtonModule } from "@spartan-ng/ui-button-helm";
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from "@spartan-ng/ui-avatar-helm";

import { HlmFormFieldModule } from "@spartan-ng/ui-formfield-helm";
import { HlmInputDirective } from "@spartan-ng/ui-input-helm";
import { HlmIconComponent } from "@spartan-ng/ui-icon-helm";
import { provideIcons } from "@ng-icons/core";
import { lucideCopy, lucideSearch, lucideUser } from "@ng-icons/lucide";

const components = [
  HlmButtonModule,
  HlmAvatarImageDirective,
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmFormFieldModule,
  HlmInputDirective,
  HlmIconComponent,
];

@NgModule({
  imports: components,
  exports: components,
  providers: [provideIcons({ lucideUser, lucideCopy, lucideSearch })],
})
export class SharedModule {}
