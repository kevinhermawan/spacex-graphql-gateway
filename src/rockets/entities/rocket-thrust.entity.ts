import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RocketThrust {
  @Field(() => Int, { nullable: true })
  kN?: number;

  @Field(() => Int, { nullable: true })
  lbf?: number;
}
