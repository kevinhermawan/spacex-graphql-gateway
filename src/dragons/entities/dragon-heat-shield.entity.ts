import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DragonHeatShield {
  @Field(() => String, { nullable: true })
  material?: string;

  @Field(() => Float, { nullable: true })
  size_meters?: number;

  @Field(() => Int, { nullable: true })
  temp_degrees?: number;

  @Field(() => String, { nullable: true })
  dev_partner?: string;
}
