import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { RocketPayload } from './rocket-payload.entity';
import { RocketThrust } from './rocket-thrust.entity';

@ObjectType()
export class RocketSecondStage {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Int, { nullable: true })
  burnTimeSec?: number;

  @Field(() => Float, { nullable: true })
  fuelAmountTons?: number;

  @Field(() => Int, { nullable: true })
  engines?: number;

  @Field(() => Boolean, { nullable: true })
  reusable?: boolean;

  @Field(() => RocketThrust, { nullable: true })
  thrust?: RocketThrust;

  @Field(() => RocketPayload, { nullable: true })
  payloads?: RocketPayload;
}
