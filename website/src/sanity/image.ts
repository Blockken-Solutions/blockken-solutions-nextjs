import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import { client } from "@/sanity/client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

type ImageUrlOptions = {
  width?: number;
  height?: number;
  quality?: number;
};

export function imageUrl(
  source: SanityImageSource,
  options: ImageUrlOptions = {},
) {
  let imageBuilder = urlFor(source).auto("format");

  if (options.width) {
    imageBuilder = imageBuilder.width(options.width);
  }

  if (options.height) {
    imageBuilder = imageBuilder.height(options.height);
  }

  return imageBuilder.quality(options.quality ?? 80).url();
}
