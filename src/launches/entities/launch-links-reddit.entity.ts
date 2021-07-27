import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LaunchLinksReddit {
  @Field(() => String, { nullable: true })
  campaign?: string;

  @Field(() => String, { nullable: true })
  launch?: string;

  @Field(() => String, { nullable: true })
  media?: string;

  @Field(() => String, { nullable: true })
  recovery?: string;
}
