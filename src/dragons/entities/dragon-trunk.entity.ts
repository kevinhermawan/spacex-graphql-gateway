import { Field, ObjectType } from '@nestjs/graphql';

import { DragonCargo } from './dragon-cargo.entity';
import { DragonVolume } from './dragon-volume.entity';

@ObjectType()
export class DragonTrunk {
  @Field(() => DragonVolume, { nullable: true })
  trunkVolume?: DragonVolume;

  @Field(() => DragonCargo, { nullable: true })
  cargo?: DragonCargo;
}
