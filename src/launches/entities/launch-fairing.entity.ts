import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LaunchFairings {
  @Field(() => Boolean, { nullable: true })
  reused?: boolean;

  @Field(() => Boolean, { nullable: true })
  recovered?: boolean;

  @Field(() => Boolean, { nullable: true })
  recoveryAttempt?: boolean;

  @Field(() => [String], { nullable: true })
  ships?: string[];
}
