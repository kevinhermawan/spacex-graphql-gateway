import { Field, ObjectType } from '@nestjs/graphql';

import { DragonVolume } from './dragon-volume.entity';

@ObjectType()
export class DragonPressurizedCapsule {
  @Field(() => DragonVolume, { nullable: true })
  payload_volume?: DragonVolume;
}
