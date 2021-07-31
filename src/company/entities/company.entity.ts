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

  @Field(() => String, { nullable: true })
  valuation?: string;

  @Field(() => String, { nullable: true })
  ctoPropulsion?: string;

  @Field(() => String, { nullable: true })
  cto?: string;

  @Field(() => String, { nullable: true })
  ceo?: string;

  @Field(() => String, { nullable: true })
  coo?: string;

  @Field(() => Int, { nullable: true })
  testSites?: number;

  @Field(() => Int, { nullable: true })
  launchSites?: number;

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
