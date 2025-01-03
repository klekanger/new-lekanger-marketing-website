import { groq } from "next-sanity";

export const frontpageFeatureQuery = groq`
  *[_type=="frontpage-feature"][0]{
    _id, 
    title, 
    showFeature, 
    subtitle, 
    bodytext,
    featureboxes[]{_key, title, moduleText}
  }
`;

export const frontpageServicesQuery = groq`
  *[_type=="frontpage-services"][0]{
    _id, 
    title,
    modules[]{_key, title,moduleText, moduleLink->{slug}, image, useAltLink}
  }
`;

export const frontpageTestimonialQuery = groq`
  *[_type=="frontpage-testimonial"][0]{
    _id, 
    _type,
    showQuote,
    author,
    quote   
  }
`;

export const frontpageInfoboxQuery = groq`
  *[_type=="infobox-collection"][0]{
    _id, 
    components[]{_key, body, image1, title, whereToShow}
  }
`;

export const settingsQuery = groq`
  *[_type=="settings"][0]{
    _id, 
    metaTitle,
    metaKeyWords,
    companyDescription,
    companyName,
    addressLine1,
    addressLine2,
    email,
    phone,
    organisationNumber,
    showContactButton,
    metaOgImage
  }
`;

export const frontpageHeroQuery = groq`
  *[_type=="frontpage-hero"][0]{
    _id, 
    title,
    subtitle,
  }
`;

export const pagesBySlugQuery = groq`
  *[_type=="page" && slug.current == $slug][0]{
    _id,
    _createdAt,
    _updatedAt,
    mainImage,
    title,
    subtitle,
    overview,
    body,
    "slug": slug.current
  }
`;
export const blogsBySlugQuery = groq`
  *[_type=="blog" && slug.current == $slug][0]{
    _id,
    _createdAt,
    _updatedAt,
    mainImage,
    title,
    overview,
    body,
    "slug": slug.current
  }
`;

export const projectsBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
    mainImage,  
    excerpt,
    slug,
    title,
    _createdAt,
    _updatedAt,
    _id,
    body,
  }
`;
