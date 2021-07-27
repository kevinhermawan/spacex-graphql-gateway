import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DragonThrust {
  @Field(() => Float, { nullable: true })
  kN?: number;

  @Field(() => Int, { nullable: true })
  lbf?: number;
}
