import { Field, ObjectType } from '@nestjs/graphql';

import { LaunchLinksFlickr } from './launch-links-flickr.entity';
import { LaunchLinksPatch } from './launch-links-patch.entity';
import { LaunchLinksReddit } from './launch-links-reddit.entity';

@ObjectType()
export class LaunchLinks {
  @Field(() => LaunchLinksPatch, { nullable: true })
  patch?: LaunchLinksPatch;

  @Field(() => LaunchLinksReddit, { nullable: true })
  reddit?: LaunchLinksReddit;

  @Field(() => LaunchLinksFlickr, { nullable: true })
  flickr?: LaunchLinksFlickr;

  @Field(() => String, { nullable: true })
  presskit?: string;

  @Field(() => String, { nullable: true })
  webcast?: string;

  @Field(() => String, { nullable: true })
  youtube_id?: string;

  @Field(() => String, { nullable: true })
  article?: string;

  @Field(() => String, { nullable: true })
  wikipedia?: string;
}
