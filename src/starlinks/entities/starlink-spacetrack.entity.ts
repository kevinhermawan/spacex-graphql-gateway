import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StarlinkSpaceTrack {
  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  heightKm?: number;

  @Field(() => Float, { nullable: true })
  velocityKms?: number;

  @Field(() => String, { nullable: true })
  CCSDS_OMM_VERS?: string;

  @Field(() => String, { nullable: true })
  COMMENT?: string;

  @Field(() => String, { nullable: true })
  CREATION_DATE?: string;

  @Field(() => String, { nullable: true })
  ORIGINATOR?: string;

  @Field(() => String, { nullable: true })
  OBJECT_NAME?: string;

  @Field(() => String, { nullable: true })
  OBJECT_ID?: string;

  @Field(() => String, { nullable: true })
  CENTER_NAME?: string;

  @Field(() => String, { nullable: true })
  REF_FRAME?: string;

  @Field(() => String, { nullable: true })
  TIME_SYSTEM?: string;

  @Field(() => String, { nullable: true })
  MEAN_ELEMENT_THEORY?: string;

  @Field(() => String, { nullable: true })
  EPOCH?: string;

  @Field(() => Float, { nullable: true })
  MEAN_MOTION?: number;

  @Field(() => Float, { nullable: true })
  ECCENTRICITY?: number;

  @Field(() => Float, { nullable: true })
  INCLINATION?: number;

  @Field(() => Float, { nullable: true })
  RA_OF_ASC_NODE?: number;

  @Field(() => Float, { nullable: true })
  ARG_OF_PERICENTER?: number;

  @Field(() => Float, { nullable: true })
  MEAN_ANOMALY?: number;

  @Field(() => Int, { nullable: true })
  EPHEMERIS_TYPE?: number;

  @Field(() => String, { nullable: true })
  CLASSIFICATION_TYPE?: string;

  @Field(() => Int, { nullable: true })
  NORAD_CAT_ID?: number;

  @Field(() => Int, { nullable: true })
  ELEMENT_SET_NO?: number;

  @Field(() => Int, { nullable: true })
  REV_AT_EPOCH?: number;

  @Field(() => Float, { nullable: true })
  BSTAR?: number;

  @Field(() => Float, { nullable: true })
  MEAN_MOTION_DOT?: number;

  @Field(() => Float, { nullable: true })
  MEAN_MOTION_DDOT?: number;

  @Field(() => Float, { nullable: true })
  SEMIMAJOR_AXIS?: number;

  @Field(() => Float, { nullable: true })
  PERIOD?: number;

  @Field(() => Float, { nullable: true })
  APOAPSIS?: number;

  @Field(() => Float, { nullable: true })
  PERIAPSIS?: number;

  @Field(() => String, { nullable: true })
  OBJECT_TYPE?: string;

  @Field(() => String, { nullable: true })
  RCS_SIZE?: string;

  @Field(() => String, { nullable: true })
  COUNTRY_CODE?: string;

  @Field(() => String, { nullable: true })
  LAUNCH_DATE?: string;

  @Field(() => String, { nullable: true })
  SITE?: string;

  @Field(() => String, { nullable: true })
  DECAY_DATE?: string;

  @Field(() => Int, { nullable: true })
  DECAYED?: number;

  @Field(() => Int, { nullable: true })
  FILE?: number;

  @Field(() => Int, { nullable: true })
  GP_ID?: number;

  @Field(() => String, { nullable: true })
  TLE_LINE0?: string;

  @Field(() => String, { nullable: true })
  TLE_LINE1?: string;

  @Field(() => String, { nullable: true })
  TLE_LINE2?: string;
}
