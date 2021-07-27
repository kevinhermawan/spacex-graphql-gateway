import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { RocketPayload } from './rocket-payload.entity';
import { RocketThrust } from './rocket-thrust.entity';

@ObjectType()
export class RocketSecondStage {
  @Field(() => String)
  id: string;

  @Field(() => Int, { nullable: true })
  burn_time_sec?: number;

  @Field(() => Float, { nullable: true })
  fuel_amount_tons?: number;

  @Field(() => Int, { nullable: true })
  engines?: number;

  @Field(() => Boolean, { nullable: true })
  reusable?: boolean;

  @Field(() => RocketThrust, { nullable: true })
  thrust?: RocketThrust;

  @Field(() => RocketPayload, { nullable: true })
  payloads?: RocketPayload;
}
