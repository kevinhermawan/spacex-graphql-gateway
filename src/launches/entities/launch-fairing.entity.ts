import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LaunchFairings {
  @Field(() => Boolean, { nullable: true })
  reused?: boolean;

  @Field(() => Boolean, { nullable: true })
  recovered?: boolean;

  @Field(() => Boolean, { nullable: true })
  recovery_attempt?: boolean;

  @Field(() => [String], { nullable: true })
  ships?: string[];
}
