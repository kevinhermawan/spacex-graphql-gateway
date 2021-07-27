import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LaunchCore {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  core?: string;

  @Field(() => Int, { nullable: true })
  flight?: number;

  @Field(() => Boolean, { nullable: true })
  gridfins?: boolean;

  @Field(() => Boolean, { nullable: true })
  legs?: boolean;

  @Field(() => Boolean, { nullable: true })
  reused?: boolean;

  @Field(() => String, { nullable: true })
  landpad?: string;

  @Field(() => Boolean, { nullable: true })
  landing_attempt?: boolean;

  @Field(() => Boolean, { nullable: true })
  landing_success?: boolean;

  @Field(() => String, { nullable: true })
  landing_type?: string;
}
