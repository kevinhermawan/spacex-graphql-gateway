import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RocketISP {
  @Field(() => Int, { nullable: true })
  seaLevel?: number;

  @Field(() => Int, { nullable: true })
  vacuum?: number;
}
