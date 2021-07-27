import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RocketMass {
  @Field(() => Int, { nullable: true })
  kg?: number;

  @Field(() => Int, { nullable: true })
  lb?: number;
}
