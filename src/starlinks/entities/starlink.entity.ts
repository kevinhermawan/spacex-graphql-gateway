import { Field, Float, ObjectType } from '@nestjs/graphql';

import { StarlinkSpaceTrack } from './starlink-spacetrack.entity';

@ObjectType()
export class Starlink {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  version?: string;

  @Field(() => String, { nullable: true })
  launch?: string;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  height_km?: number;

  @Field(() => Float, { nullable: true })
  velocity_kms?: number;

  @Field(() => StarlinkSpaceTrack, { nullable: true })
  spaceTrack?: StarlinkSpaceTrack;
}
