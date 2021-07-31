import { Field, Int, ObjectType } from '@nestjs/graphql';

import { DragonThrust } from './dragon-thrust.entity';

@ObjectType()
export class DragonThruster {
  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => Int, { nullable: true })
  amount?: number;

  @Field(() => Int, { nullable: true })
  pods?: number;

  @Field(() => Int, { nullable: true })
  isp?: number;

  @Field(() => String, { nullable: true })
  fuel1?: string;

  @Field(() => String, { nullable: true })
  fuel2?: string;

  @Field(() => DragonThrust, { nullable: true })
  thrust?: DragonThrust;
}
