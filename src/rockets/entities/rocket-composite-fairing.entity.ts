import { Field, ObjectType } from '@nestjs/graphql';

import { RocketDiameter } from './rocket-diameter.entity';

@ObjectType()
export class RocketCompositeFairing {
  @Field(() => RocketDiameter, { nullable: true })
  height?: RocketDiameter;

  @Field(() => RocketDiameter, { nullable: true })
  diameter?: RocketDiameter;
}
