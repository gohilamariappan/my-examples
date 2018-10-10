import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';
import { EmployeeallgoalsComponent } from './employeeallgoals/employeeallgoals.component';
import { ViewComponent } from './view/view.component';
import { ViewsubComponent } from './viewsub/viewsub.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { HiscomComponent } from './hiscom/hiscom.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { OrganizationalGoalsComponent } from './organizational-goals/organizational-goals.component';
import { OrganizationalGoalsFeedbackComponent } from './organizational-goals-feedback/organizational-goals-feedback.component';
import { ProjectGoalsFeedbackComponent } from './project-goals-feedback/project-goals-feedback.component';
import { TechnicalGoalsFeedbackComponent } from './technical-goals-feedback/technical-goals-feedback.component';
import { IndividualGoalsFeedbackComponent } from './individual-goals-feedback/individual-goals-feedback.component';
import { AllGoalsFeedbackComponent } from './all-goals-feedback/all-goals-feedback.component';
import { ProjectGoalsComponent } from './project-goals/project-goals.component';
import { TechnicalGoalsComponent } from './technical-goals/technical-goals.component';
import { IndividualGoalsComponent } from './individual-goals/individual-goals.component';
import { ReleaseGoalsComponent } from './release-goals/release-goals.component';
import { ReportSelfComponent } from './report-self/report-self.component'
import { ReportsComponent } from './reports/reports.component'
import { USER_DETAILS } from './models/user';
import { HistoryPerformanceComponent } from './history-performance/history-performance.component';
import { HistoryEmployeeComponent } from './history-employee/history-employee.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { HomeEmployeeListtComponent } from './home-employee-listt/home-employee-listt.component';
import { GoalsMidYearComponent } from './goals-mid-year/goals-mid-year.component';

const appRoutes: Routes = [
  { path: 'home-employee-listt', component: HomeEmployeeListtComponent},
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'organizational-goals', component: OrganizationalGoalsComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'employeeallgoals', component: EmployeeallgoalsComponent },
  { path: 'view', component: ViewComponent },
  { path: 'viewsub', component: ViewsubComponent },
  { path: 'empadd', component: EmpaddComponent },
  { path: 'release-goals', component: ReleaseGoalsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'report-self', component: ReportSelfComponent },
  { path: 'appraisal', component: AppraisalComponent },
  { path: 'project-goals-feedback', component: ProjectGoalsFeedbackComponent },
  { path: 'project-goals', component: ProjectGoalsComponent },
  { path: 'technical-goals', component: TechnicalGoalsComponent },
  { path: 'technical-goals-feedback', component: TechnicalGoalsFeedbackComponent },
  { path: 'individual-goals-feedback', component: IndividualGoalsFeedbackComponent },
  { path: 'all-goals-feedback', component: AllGoalsFeedbackComponent },
  { path: 'organizational-goals-feedback', component: OrganizationalGoalsFeedbackComponent },
  { path: 'hiscom', component: HiscomComponent },
  { path: 'individual-goals', component: IndividualGoalsComponent },
  { path: 'history-performance', component: HistoryPerformanceComponent },
  { path: 'history-employee', component: HistoryEmployeeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'notification', component: NotificationComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrganizationalGoalsComponent,
    ProjectGoalsComponent,
    EmpComponent,
    EmployeeallgoalsComponent,
    ViewComponent,
    ViewsubComponent,
    EmpaddComponent,
    HiscomComponent,
    AppraisalComponent,
    OrganizationalGoalsComponent,
    OrganizationalGoalsFeedbackComponent,
    ProjectGoalsFeedbackComponent,
    TechnicalGoalsFeedbackComponent,
    IndividualGoalsFeedbackComponent,
    AllGoalsFeedbackComponent,
    TechnicalGoalsComponent,
    IndividualGoalsComponent,
    ReleaseGoalsComponent,
    ReportsComponent,
    ReportSelfComponent,
    HistoryPerformanceComponent,
    HistoryEmployeeComponent,
    HomeComponent,
    NotificationComponent,
    HomeEmployeeListtComponent,
    GoalsMidYearComponent

  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
