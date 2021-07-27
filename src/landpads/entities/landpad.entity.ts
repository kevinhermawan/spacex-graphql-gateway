import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { LandpadImage } from './landpad-image.entity';

@ObjectType()
export class Landpad {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  full_name?: string;

  @Field(() => String, { nullable: true })
  details?: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  locality?: string;

  @Field(() => String, { nullable: true })
  region?: string;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => Int, { nullable: true })
  landing_attempts?: number;

  @Field(() => Int, { nullable: true })
  landing_successes?: number;

  @Field(() => String, { nullable: true })
  wikipedia?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => [String], { nullable: true })
  launches?: string[];

  @Field(() => LandpadImage, { nullable: true })
  images?: LandpadImage;
}
