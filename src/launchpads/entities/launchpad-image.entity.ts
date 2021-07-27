import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LaunchpadImage {
  @Field(() => [String], { nullable: true })
  large?: string[];
}
