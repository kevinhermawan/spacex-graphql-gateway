import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CompanyHeadquarters {
  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  state?: string;
}
