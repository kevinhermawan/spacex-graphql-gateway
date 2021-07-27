import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { RocketThrust } from './rocket-thrust.entity';

@ObjectType()
export class RocketFirstStage {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => Int, { nullable: true })
  burn_time_sec?: number;

  @Field(() => Float, { nullable: true })
  fuel_amount_tons?: number;

  @Field(() => Int, { nullable: true })
  engines?: number;

  @Field(() => Boolean, { nullable: true })
  reusable?: boolean;

  @Field(() => RocketThrust, { nullable: true })
  thrust_vacuum?: RocketThrust;

  @Field(() => RocketThrust, { nullable: true })
  thrust_sea_level?: RocketThrust;
}
