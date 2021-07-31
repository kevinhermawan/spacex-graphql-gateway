import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { LaunchCore } from './launch-core.entity';
import { LaunchFailure } from './launch-failure.entity';
import { LaunchFairings } from './launch-fairing.entity';
import { LaunchLinks } from './launch-links.entity';

@ObjectType()
export class Launch {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  details?: string;

  @Field(() => Int, { nullable: true })
  flightNumber?: number;

  @Field(() => Boolean, { nullable: true })
  upcoming?: boolean;

  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  @Field(() => Boolean, { nullable: true })
  tbd?: boolean;

  @Field(() => Boolean, { nullable: true })
  net?: boolean;

  @Field(() => Boolean, { nullable: true })
  autoUpdate?: boolean;

  @Field(() => [String], { nullable: true })
  ships?: string[];

  @Field(() => [String], { nullable: true })
  capsules?: string[];

  @Field(() => [String], { nullable: true })
  payloads?: string[];

  @Field(() => [LaunchCore], { nullable: true })
  cores?: LaunchCore[];

  @Field(() => [String], { nullable: true })
  crew?: string[];

  @Field(() => [LaunchFailure], { nullable: true })
  failures?: LaunchFailure[];

  @Field(() => String, { nullable: true })
  staticFireDateUtc?: string;

  @Field(() => Float, { nullable: true })
  staticFireDateUnix?: number;

  @Field(() => String, { nullable: true })
  dateUtc?: string;

  @Field(() => Float, { nullable: true })
  dateUnix?: number;

  @Field(() => String, { nullable: true })
  dateLocal?: string;

  @Field(() => String, { nullable: true })
  datePrecision?: string;

  @Field(() => LaunchLinks, { nullable: true })
  links?: LaunchLinks;

  @Field(() => LaunchFairings, { nullable: true })
  fairings?: LaunchFairings;

  @Field(() => Int, { nullable: true })
  window?: number;

  @Field(() => String, { nullable: true })
  rocket?: string;

  @Field(() => String, { nullable: true })
  launchpad?: string;

  @Field(() => String, { nullable: true })
  launchLibraryId?: string;
}
