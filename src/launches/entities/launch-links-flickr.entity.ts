import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LaunchLinksFlickr {
  @Field(() => [String], { nullable: true })
  small?: string[];

  @Field(() => [String], { nullable: true })
  original?: string[];
}
