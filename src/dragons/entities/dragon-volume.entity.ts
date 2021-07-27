import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DragonVolume {
  @Field(() => Int, { nullable: true })
  cubic_meters?: number;

  @Field(() => Int, { nullable: true })
  cubic_feet?: number;
}
