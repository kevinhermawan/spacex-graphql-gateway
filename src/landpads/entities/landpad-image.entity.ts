import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LandpadImage {
  @Field(() => [String], { nullable: true })
  large?: string[];
}
