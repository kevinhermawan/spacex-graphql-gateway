import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Capsule {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  serial?: string;

  @Field(() => [String], { nullable: true })
  launches?: string[];

  @Field(() => String, { nullable: true })
  lastUpdate?: string;

  @Field(() => Int, { nullable: true })
  landLandings?: number;

  @Field(() => Int, { nullable: true })
  waterLandings?: number;

  @Field(() => Int, { nullable: true })
  reuseCount?: number;
}
