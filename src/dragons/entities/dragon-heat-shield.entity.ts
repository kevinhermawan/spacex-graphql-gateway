import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DragonHeatShield {
  @Field(() => String, { nullable: true })
  material?: string;

  @Field(() => Float, { nullable: true })
  sizeMeters?: number;

  @Field(() => Int, { nullable: true })
  tempDegrees?: number;

  @Field(() => String, { nullable: true })
  devPartner?: string;
}
