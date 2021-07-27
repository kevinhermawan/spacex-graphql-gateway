import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RocketPayloadWeight {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  kg?: number;

  @Field(() => Int, { nullable: true })
  lb?: number;
}
