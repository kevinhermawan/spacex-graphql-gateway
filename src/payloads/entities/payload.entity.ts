import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { PayloadDragon } from './payload-dragon.entity';

@ObjectType()
export class Payload {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  launch?: string;

  @Field(() => String, { nullable: true })
  orbit?: string;

  @Field(() => Boolean, { nullable: true })
  reused?: boolean;

  @Field(() => Int, { nullable: true })
  mass_kg?: number;

  @Field(() => Int, { nullable: true })
  mass_lbs?: number;

  @Field(() => String, { nullable: true })
  regime?: string;

  @Field(() => String, { nullable: true })
  reference_system?: string;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => Float, { nullable: true })
  semi_major_axis_km?: number;

  @Field(() => Float, { nullable: true })
  eccentricity?: number;

  @Field(() => Float, { nullable: true })
  periapsis_km?: number;

  @Field(() => Float, { nullable: true })
  apoapsis_km?: number;

  @Field(() => Float, { nullable: true })
  inclination_deg?: number;

  @Field(() => Float, { nullable: true })
  period_min?: number;

  @Field(() => String, { nullable: true })
  lifespan_years?: string;

  @Field(() => String, { nullable: true })
  epoch?: string;

  @Field(() => Float, { nullable: true })
  mean_motion?: number;

  @Field(() => Float, { nullable: true })
  raan?: number;

  @Field(() => Float, { nullable: true })
  arg_of_pericenter?: number;

  @Field(() => Float, { nullable: true })
  mean_anomaly?: number;

  @Field(() => [String], { nullable: true })
  manufacturers?: string[];

  @Field(() => [String], { nullable: true })
  nationalities?: string[];

  @Field(() => [Int], { nullable: true })
  norad_ids?: number[];

  @Field(() => [String], { nullable: true })
  customers?: string[];

  @Field(() => PayloadDragon, { nullable: true })
  dragon?: PayloadDragon;
}
