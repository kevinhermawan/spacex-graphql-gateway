import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PayloadDragon {
  @Field(() => String, { nullable: true })
  capsule?: string;

  @Field(() => Float, { nullable: true })
  massReturnedKg?: number;

  @Field(() => Float, { nullable: true })
  massReturnedLbs?: number;

  @Field(() => Int, { nullable: true })
  flightTimeSec?: number;

  @Field(() => String, { nullable: true })
  manifest?: string;

  @Field(() => Boolean, { nullable: true })
  waterLanding?: boolean;

  @Field(() => Boolean, { nullable: true })
  landLanding?: boolean;
}
