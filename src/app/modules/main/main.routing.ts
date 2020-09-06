import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // children: [
    //   {
    //     path: '',
    //     component: LandingPageComponent,
    //   },
    //   {
    //     path: 'blogs',
    //     component: BlogComponent,
    //     children: [
    //       {
    //         path: '',
    //         component: BlogHomeComponent,
    //       },
    //       {
    //         path: 'detail/:id',
    //         component: BlogDetailComponent,
    //       },
    //       {
    //         path: 'search/:key',
    //         component: BlogSearchComponent,
    //       },
    //     ],
    //   },
    //   {
    //     path: 'privacy-policy',
    //     component: UserPoliciesComponent,
    //     data: {
    //       policyType: PolicyType.PrivacyPolicy,
    //     },
    //   },
    //   {
    //     path: 'terms-and-conditions',
    //     component: UserPoliciesComponent,
    //     data: {
    //       policyType: PolicyType.TermsAndConditions,
    //     },
    //   },
    //   {
    //     path: 'contact',
    //     component: ContactUsComponent,
    //   },
    //   {
    //     path: 'faq',
    //     component: FaqComponent,
    //   },
    // ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
