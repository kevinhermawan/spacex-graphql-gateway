import { Field, Int, ObjectType } from '@nestjs/graphql';

import { RocketISP } from './rocket-isp.entity';
import { RocketThrust } from './rocket-thrust.entity';

@ObjectType()
export class RocketEngines {
  @Field(() => Int, { nullable: true })
  number?: number;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  layout?: string;

  @Field(() => String, { nullable: true })
  version?: string;

  @Field(() => Int, { nullable: true })
  thrust_to_weight?: number;

  @Field(() => Int, { nullable: true })
  engine_loss_max?: number;

  @Field(() => String, { nullable: true })
  propellant_1?: string;

  @Field(() => String, { nullable: true })
  propellant_2?: string;

  @Field(() => RocketThrust, { nullable: true })
  thrust_sea_level?: RocketThrust;

  @Field(() => RocketThrust, { nullable: true })
  thrust_vacuum?: RocketThrust;

  @Field(() => RocketISP, { nullable: true })
  isp?: RocketISP;
}
