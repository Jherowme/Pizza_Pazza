import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  { path: 'start', loadChildren: () => import('./start/start.module').then(m => m.StartPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule) },
  { path: 'order/:pizza', loadChildren: () => import('./order/order.module').then(m => m.OrderPageModule) },
  { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutPageModule) },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule) },
  { path: 'order-success', loadChildren: () => import('./order-success/order-success.module').then(m => m.OrderSuccessPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
