import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { PlayersPage } from '../pages/players/players';
import { AddUserPage } from '../pages/add-user/add-user';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { UserDetailPageModule } from '../pages/user-detail/user-detail.module';
import { GamePage } from '../pages/game/game';
import { GamePageModule } from '../pages/game/game.module';
import { GroupsPage } from '../pages/groups/groups';
import { GroupsPageModule } from '../pages/groups/groups.module';
import { SideMenu } from '../pages/side-menu/side-menu';
import { SideMenuModule } from '../pages/side-menu/side-menu.module';
import { TokenProvider } from '../providers/token/token';
import { UsersProvider } from '../providers/users/users';
import { TournamentsProvider } from '../providers/tournaments/tournaments';
import { GamesProvider } from '../providers/games/games';
import { GroupsProvider } from '../providers/groups/groups';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddUserPage,
    TournamentsPage,
    PlayersPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GamePageModule,
    GroupsPageModule,
    UserDetailPageModule,
    SideMenuModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddUserPage,
    UserDetailPage,
    GamePage,
    GroupsPage,
    TournamentsPage,
    SideMenu,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TokenProvider,
    UsersProvider,
    GamesProvider,
    GroupsProvider,
    TournamentsProvider,
    GamesProvider
  ]
})
export class AppModule {}
