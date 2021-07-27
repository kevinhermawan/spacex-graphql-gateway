import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RocketLandingLegs {
  @Field(() => Int, { nullable: true })
  number?: number;

  @Field(() => String, { nullable: true })
  material?: string;
}
