import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Core {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  serial?: string;

  @Field(() => [String], { nullable: true })
  launches?: string[];

  @Field(() => String, { nullable: true })
  last_update?: string;

  @Field(() => Int, { nullable: true })
  asds_landings?: number;

  @Field(() => Int, { nullable: true })
  asds_attempts?: number;

  @Field(() => Int, { nullable: true })
  rtls_landings?: number;

  @Field(() => Int, { nullable: true })
  rtls_attempts?: number;

  @Field(() => Int, { nullable: true })
  reuse_count?: number;

  @Field(() => Int, { nullable: true })
  block?: number;
}
