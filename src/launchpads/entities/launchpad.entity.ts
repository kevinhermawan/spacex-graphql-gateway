import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { LaunchpadImage } from './launchpad-image.entity';

@ObjectType()
export class Launchpad {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  fullName?: string;

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
  landingAttempts?: number;

  @Field(() => Int, { nullable: true })
  landingSuccesses?: number;

  @Field(() => String, { nullable: true })
  wikipedia?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => [String], { nullable: true })
  launches?: string[];

  @Field(() => LaunchpadImage, { nullable: true })
  images?: LaunchpadImage;
}
