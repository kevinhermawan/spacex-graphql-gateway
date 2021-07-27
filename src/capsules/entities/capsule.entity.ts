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
  last_update: string;

  @Field(() => Int, { nullable: true })
  land_landings?: number;

  @Field(() => Int, { nullable: true })
  water_landings?: number;

  @Field(() => Int, { nullable: true })
  reuse_count?: number;
}
