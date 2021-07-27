import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PayloadDragon {
  @Field(() => String, { nullable: true })
  capsule?: string;

  @Field(() => Int, { nullable: true })
  mass_returned_kg?: number;

  @Field(() => Int, { nullable: true })
  mass_returned_lbs?: number;

  @Field(() => Int, { nullable: true })
  flight_time_sec?: number;

  @Field(() => String, { nullable: true })
  manifest?: string;

  @Field(() => Boolean, { nullable: true })
  water_landing?: boolean;

  @Field(() => Boolean, { nullable: true })
  land_landing?: boolean;
}
