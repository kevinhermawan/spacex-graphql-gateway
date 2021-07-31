import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { RocketThrust } from './rocket-thrust.entity';

@ObjectType()
export class RocketFirstStage {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => Int, { nullable: true })
  burnTimeSec?: number;

  @Field(() => Float, { nullable: true })
  fuelAmountTons?: number;

  @Field(() => Int, { nullable: true })
  engines?: number;

  @Field(() => Boolean, { nullable: true })
  reusable?: boolean;

  @Field(() => RocketThrust, { nullable: true })
  thrustVacuum?: RocketThrust;

  @Field(() => RocketThrust, { nullable: true })
  thrustSeaLevel?: RocketThrust;
}
