import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { UserInputComponent } from './user-input/user-input.component';

import { InvestmentService } from './investment-result/investment.service';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { GalleryComponent } from "./gallery/gallery.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { TabsContentComponent } from "./tabs-content/tabs-content.component";
import { TableListComponent } from "./table-list/table-list.component";
import { StepFormComponent } from './step-form/step-form.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, InvestmentResultComponent,
    UserInputComponent, PostCreateComponent, PostListComponent, TabsContentComponent,
    GalleryComponent, GraphicsComponent, NavBarComponent, NavBarComponent, TabsContentComponent, TableListComponent,
    StepFormComponent, ExperienceComponent, FooterComponent]
})

export class AppComponent {
    investment?: InvestmentService;

    onCalculateInvestment(investment: InvestmentService){
        this.investment = investment;
        this.investment.calculateInvestmentResults();
        console.log(`Recibiendo Inversión en el padre: ${JSON.stringify(investment)}`);
    }

}
