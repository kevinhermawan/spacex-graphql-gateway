import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class Roadster {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  details?: string;

  @Field(() => String, { nullable: true })
  video?: string;

  @Field(() => String, { nullable: true })
  wikipedia?: string;

  @Field(() => String, { nullable: true })
  orbitType?: string;

  @Field(() => Float, { nullable: true })
  marsDistanceMi?: number;

  @Field(() => Float, { nullable: true })
  marsDistanceKm?: number;

  @Field(() => Float, { nullable: true })
  earthDistanceMi?: number;

  @Field(() => Float, { nullable: true })
  earthDistanceKm?: number;

  @Field(() => Float, { nullable: true })
  speedMph?: number;

  @Field(() => Float, { nullable: true })
  speedKph?: number;

  @Field(() => Float, { nullable: true })
  periodDays?: number;

  @Field(() => Float, { nullable: true })
  periapsisArg?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => Float, { nullable: true })
  inclination?: number;

  @Field(() => Float, { nullable: true })
  eccentricity?: number;

  @Field(() => Float, { nullable: true })
  semiMajorAxisAu?: number;

  @Field(() => Float, { nullable: true })
  periapsisAu?: number;

  @Field(() => Float, { nullable: true })
  apoapsisAu?: number;

  @Field(() => Float, { nullable: true })
  epochJd?: number;

  @Field(() => Float, { nullable: true })
  noradId?: number;

  @Field(() => Float, { nullable: true })
  launchMassLbs?: number;

  @Field(() => Float, { nullable: true })
  launchMassKg?: number;

  @Field(() => String, { nullable: true })
  launchDateUtc?: string;

  @Field(() => Float, { nullable: true })
  launchDateUnix?: number;

  @Field(() => [String], { nullable: true })
  flickrImages?: string[];
}
