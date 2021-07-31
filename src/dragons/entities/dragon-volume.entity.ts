import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DragonVolume {
  @Field(() => Int, { nullable: true })
  cubicMeters?: number;

  @Field(() => Int, { nullable: true })
  cubicFeet?: number;
}
