import { Field, Int, ObjectType } from '@nestjs/graphql';

import { CompanyHeadquarters } from './company-headquarter.entity';
import { CompanyLinks } from './company-links.entity';

@ObjectType()
export class Company {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  summary?: string;

  @Field(() => Int, { nullable: true })
  valuation?: number;

  @Field(() => String, { nullable: true })
  cto_propulsion?: string;

  @Field(() => String, { nullable: true })
  cto?: string;

  @Field(() => String, { nullable: true })
  ceo?: string;

  @Field(() => String, { nullable: true })
  coo?: string;

  @Field(() => Int, { nullable: true })
  test_sites?: number;

  @Field(() => Int, { nullable: true })
  launch_sites?: number;

  @Field(() => Int, { nullable: true })
  vehicles?: number;

  @Field(() => Int, { nullable: true })
  employees?: number;

  @Field(() => Int, { nullable: true })
  founded?: number;

  @Field(() => String, { nullable: true })
  founder?: string;

  @Field(() => CompanyLinks, { nullable: true })
  links?: CompanyLinks;

  @Field(() => CompanyHeadquarters, { nullable: true })
  headquarters?: CompanyHeadquarters;
}
