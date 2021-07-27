import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Crew {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  agency?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  wikipedia?: string;

  @Field(() => [String], { nullable: true })
  launches?: string[];

  @Field(() => String, { nullable: true })
  status?: string;
}
