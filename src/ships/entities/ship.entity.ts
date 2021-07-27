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
  legacy_id?: string;

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

  @Field(() => Int, { nullable: true })
  mass_kg?: number;

  @Field(() => Int, { nullable: true })
  mass_lbs?: number;

  @Field(() => Int, { nullable: true })
  year_built?: number;

  @Field(() => String, { nullable: true })
  home_port?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Int, { nullable: true })
  speed_kn?: number;

  @Field(() => Int, { nullable: true })
  course_deg?: number;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => String, { nullable: true })
  last_ais_update?: string;

  @Field(() => String, { nullable: true })
  link?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => [String], { nullable: true })
  launches?: string[];
}
