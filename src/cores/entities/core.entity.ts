import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Core {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  serial?: string;

  @Field(() => Int, { nullable: true })
  block?: number;

  @Field(() => [String], { nullable: true })
  launches?: string[];

  @Field(() => String, { nullable: true })
  lastUpdate?: string;

  @Field(() => Int, { nullable: true })
  asdsLandings?: number;

  @Field(() => Int, { nullable: true })
  asdsAttempts?: number;

  @Field(() => Int, { nullable: true })
  rtlsLandings?: number;

  @Field(() => Int, { nullable: true })
  rtlsAttempts?: number;

  @Field(() => Int, { nullable: true })
  reuseCount?: number;
}
