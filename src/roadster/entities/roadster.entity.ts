import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Roadster {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
