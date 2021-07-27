import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { CapsulesModule } from './capsules/capsules.module';
import { CompanyModule } from './company/company.module';
import { CoresModule } from './cores/cores.module';
import { CrewsModule } from './crews/crews.module';
import { DragonsModule } from './dragons/dragons.module';
import { LandpadsModule } from './landpads/landpads.module';
import { LaunchesModule } from './launches/launches.module';
import { LaunchpadsModule } from './launchpads/launchpads.module';
import { PayloadsModule } from './payloads/payloads.module';
import { RoadsterModule } from './roadster/roadster.module';
import { RocketsModule } from './rockets/rockets.module';
import { ShipsModule } from './ships/ships.module';
import { StarlinksModule } from './starlinks/starlinks.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      autoSchemaFile: true,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    }),
    CapsulesModule,
    CompanyModule,
    CoresModule,
    CrewsModule,
    DragonsModule,
    LandpadsModule,
    LaunchesModule,
    LaunchpadsModule,
    PayloadsModule,
    RoadsterModule,
    RocketsModule,
    ShipsModule,
    StarlinksModule,
    RoadsterModule,
  ],
})
export class AppModule {}
