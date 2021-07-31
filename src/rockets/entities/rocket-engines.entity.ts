import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

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

  @Field(() => Float, { nullable: true })
  thrustToWeight?: number;

  @Field(() => Int, { nullable: true })
  engineLossMax?: number;

  @Field(() => String, { nullable: true })
  propellant1?: string;

  @Field(() => String, { nullable: true })
  propellant2?: string;

  @Field(() => RocketThrust, { nullable: true })
  thrustSeaLevel?: RocketThrust;

  @Field(() => RocketThrust, { nullable: true })
  thrustVacuum?: RocketThrust;

  @Field(() => RocketISP, { nullable: true })
  isp?: RocketISP;
}
