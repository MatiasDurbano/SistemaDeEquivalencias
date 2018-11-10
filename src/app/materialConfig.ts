import { NgModule } from '@angular/core';

import {MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatMenuModule, MatCardModule,
    MatProgressSpinnerModule} from '@angular/material/';

@NgModule({
    imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatMenuModule, MatCardModule,
        MatProgressSpinnerModule],
    exports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatMenuModule, MatCardModule,
        MatProgressSpinnerModule],
})
export class MaterialModule {}
