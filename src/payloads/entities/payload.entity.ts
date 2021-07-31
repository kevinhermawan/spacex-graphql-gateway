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

  @Field(() => Float, { nullable: true })
  massKg?: number;

  @Field(() => Float, { nullable: true })
  massLbs?: number;

  @Field(() => String, { nullable: true })
  regime?: string;

  @Field(() => String, { nullable: true })
  referenceSystem?: string;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => Float, { nullable: true })
  semiMajorAxisKm?: number;

  @Field(() => Float, { nullable: true })
  eccentricity?: number;

  @Field(() => Float, { nullable: true })
  periapsisKm?: number;

  @Field(() => Float, { nullable: true })
  apoapsisKm?: number;

  @Field(() => Float, { nullable: true })
  inclinationDeg?: number;

  @Field(() => Float, { nullable: true })
  periodMin?: number;

  @Field(() => String, { nullable: true })
  lifespanYears?: string;

  @Field(() => String, { nullable: true })
  epoch?: string;

  @Field(() => Float, { nullable: true })
  meanMotion?: number;

  @Field(() => Float, { nullable: true })
  raan?: number;

  @Field(() => Float, { nullable: true })
  argOfPericenter?: number;

  @Field(() => Float, { nullable: true })
  meanAnomaly?: number;

  @Field(() => [String], { nullable: true })
  manufacturers?: string[];

  @Field(() => [String], { nullable: true })
  nationalities?: string[];

  @Field(() => [Int], { nullable: true })
  noradIds?: number[];

  @Field(() => [String], { nullable: true })
  customers?: string[];

  @Field(() => PayloadDragon, { nullable: true })
  dragon?: PayloadDragon;
}
