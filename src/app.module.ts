import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { NODE_ENV } from './_utils/constants/env-keys';
import { validateEnvVars } from './_utils/env.validation';
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
    ConfigModule.forRoot({
      cache: true,
      validate: validateEnvVars,
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        debug: configService.get(NODE_ENV) === 'development',
        autoSchemaFile: true,
      }),
      inject: [ConfigService],
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
  ],
})
export class AppModule {}
