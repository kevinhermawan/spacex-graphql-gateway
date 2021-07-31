import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CompanyLinks {
  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => String, { nullable: true })
  flickr?: string;

  @Field(() => String, { nullable: true })
  twitter?: string;

  @Field(() => String, { nullable: true })
  elonTwitter?: string;
}
