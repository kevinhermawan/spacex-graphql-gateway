import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LaunchCore {
  @Field(() => String, { nullable: true })
  id?: string;

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
  landingAttempt?: boolean;

  @Field(() => Boolean, { nullable: true })
  landingSuccess?: boolean;

  @Field(() => String, { nullable: true })
  landingType?: string;
}
