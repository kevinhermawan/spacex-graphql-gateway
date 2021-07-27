import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LaunchFailure {
  @Field(() => Int, { nullable: true })
  time?: number;

  @Field(() => Int, { nullable: true })
  altitude?: number;

  @Field(() => String, { nullable: true })
  reason?: string;
}
