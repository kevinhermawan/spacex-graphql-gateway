import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Ship {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  active?: boolean;

  @Field(() => String, { nullable: true })
  legacyId?: string;

  @Field(() => String, { nullable: true })
  model?: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => [String], { nullable: true })
  roles?: string[];

  @Field(() => Int, { nullable: true })
  imo?: number;

  @Field(() => Int, { nullable: true })
  mmsi?: number;

  @Field(() => Int, { nullable: true })
  abs?: number;

  @Field(() => Int, { nullable: true })
  class?: number;

  @Field(() => Float, { nullable: true })
  massKg?: number;

  @Field(() => Float, { nullable: true })
  massLbs?: number;

  @Field(() => Int, { nullable: true })
  yearBuilt?: number;

  @Field(() => String, { nullable: true })
  homePort?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Int, { nullable: true })
  speedKn?: number;

  @Field(() => Int, { nullable: true })
  courseDeg?: number;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => String, { nullable: true })
  lastAisUpdate?: string;

  @Field(() => String, { nullable: true })
  link?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => [String], { nullable: true })
  launches?: string[];
}
