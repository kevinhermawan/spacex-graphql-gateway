import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LaunchLinksPatch {
  @Field(() => String, { nullable: true })
  small?: string;

  @Field(() => String, { nullable: true })
  large?: string;
}
