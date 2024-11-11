import { gql, type GraphQLClient } from 'graphql-request'
import type * as Types from './graphql'


export function getContentType(client: GraphQLClient, variables: Types.getContentTypeQueryVariables) : Promise<Types.getContentTypeQuery>
{
  const query = gql`query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: _Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { _metadata { types } } } }`
  return client.request<Types.getContentTypeQuery, Types.getContentTypeQueryVariables>(query, variables)
}
export function getContentByPath(client: GraphQLClient, variables: Types.getContentByPathQueryVariables) : Promise<Types.getContentByPathQuery>
{
  const query = gql`query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) { content: _Content( where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}} locale: $locale ) { total items { ...PageData } } } fragment PageData on _IContent { ...IContentData ...BlankExperienceData ...ArticleGroupPageData ...ArticlePageData } fragment IContentData on _IContent { _metadata { ...IContentInfo } _type: __typename } fragment BlankExperienceData on BlankExperience { ...ExperienceData } fragment ArticleGroupPageData on ArticleGroupPage { articleGroupTitle articleGroupIntro { json } MainContent { ...BlockData } } fragment ArticlePageData on ArticlePage { metadata: _metadata { published } articleHeroImage { ...ReferenceData } articleAuthors articleTitle articleBody { json } } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } } fragment LinkData on ContentUrl { base hierarchical default } fragment ExperienceData on _IExperience { composition { ...CompositionData } } fragment CompositionData on ICompositionNode { name: displayName layoutType: nodeType type key template: displayTemplateKey settings: displaySettings { key value } ... on ICompositionStructureNode { nodes @recursive(depth: 10) { name: displayName } } ... on ICompositionElementNode { element { ...ElementData } } } fragment ElementData on _IElement { ...IElementData ...ArticleListElementData ...FeaturedTileData ...CTAElementData ...HeadingElementData ...ImageElementData ...ParagraphElementData ...TestimonialElementData } fragment IElementData on _IElement { _metadata { ...IContentInfo } _type: __typename } fragment ArticleListElementData on ArticleListElement { articleListCount } fragment FeaturedTileData on FeaturedTile { title: Title variant: Variant description: Description { json } image: Image { ...ReferenceData } cta1: CTA1 { ...LinkData } cta2: CTA2 { ...LinkData } } fragment CTAElementData on CTAElement { text: Text link: Link { ...LinkData } } fragment HeadingElementData on HeadingElement { headingText } fragment ImageElementData on ImageElement { altText imageLink { ...ReferenceData } } fragment ParagraphElementData on ParagraphElement { paragraph: text { json } } fragment TestimonialElementData on TestimonialElement { referenceTitle referenceText { json } customerName customerLocation customerImage { ...ReferenceData } } fragment ReferenceData on ContentReference { key url { ...LinkData } } fragment BlockData on _IContent { ...IContentData ...CardBlockData ...FooterData ...SocialIconFooter ...ImageBannerData ...JWHeaderData ...OfficeLocationData ...ButtonBlockData ...MegaMenuGroupBlockData ...NavigationMenuBlockData } fragment CardBlockData on CardBlock { heading: CardHeading subheading: CardSubheading description: CardDescription { json } icon: CardIcon { ...ReferenceData } image: CardImage { ...ReferenceData } link: CardButton { ...ButtonBlockPropertyData } color: CardColor layout: CardImageLayout } fragment FooterData on Footer { copyrighttext: CopyrightText footertext: FooterText { json } links: FooterLinks { ...LinkItemData } icons: Icons { ...SocialIconFooter } columns: FooterColumns { ... on FooterColumn { Title Icon { ...ReferenceData } ColumnItems { ...LinkItemData } } } Logo { ...ReferenceData } } fragment SocialIconFooter on JWSocialIcon { ... on JWSocialIcon { IconName IconValue { ...ReferenceData } Link { ...LinkData } } } fragment ImageBannerData on ImageBanner { title: Title variant: Variant description: Description { json } image: Image { ...ReferenceData } cta1: CTA1 { ...ButtonBlockPropertyData } cta2: CTA2 { ...ButtonBlockPropertyData } } fragment JWHeaderData on JWHeader { logo: HeaderLogo { ...ReferenceData } bannerr: HeaderBanner { ...ReferenceData } topbar: HeaderTopBar { ... on JWHeaderTopBar { LeftNavigationLinks { ...LinkItemData } SearchIcon { ...ReferenceData } FindAStore { ...ReferenceData } } } mainNav: HeaderMainNavigation { ... on JWMainNavigation { Title IsTabLayout HeaderColumns { ... on JWHeaderColumn { HeaderColumnTitle HeaderColumnLinks { ...LinkItemData } } } } } } fragment OfficeLocationData on OfficeLocation { title: OfficeTitle street1: OfficeAddressStreet1 street2: OfficeAddressStreet2 postalcode: OfficeAddressPostalCode city: OfficeAddressCity country: OfficeAddressCountry phone: OfficePhone email: OfficeEmail } fragment ButtonBlockData on ButtonBlock { text link { ...LinkData } className buttonType variant } fragment MegaMenuGroupBlockData on MegaMenuGroupBlock { menuName: MenuMenuHeading menuLink: MegaMenuUrl { ...LinkData } menuData: MegaMenuContentArea { __typename ...IContentData ...NavigationMenuBlockData ...CardBlockData } } fragment NavigationMenuBlockData on NavigationMenuBlock { title: MenuNavigationHeading items: NavigationLinks { ...LinkItemData } } fragment ButtonBlockPropertyData on ButtonBlockProperty { text link { ...LinkData } className buttonType variant } fragment LinkItemData on Link { title text target url { ...LinkData } }`
  return client.request<Types.getContentByPathQuery, Types.getContentByPathQueryVariables>(query, variables)
}
export function getContentById(client: GraphQLClient, variables: Types.getContentByIdQueryVariables) : Promise<Types.getContentByIdQuery>
{
  const query = gql`query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: _Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { ...BlockData ...PageData } } } fragment PageData on _IContent { ...IContentData ...BlankExperienceData ...ArticleGroupPageData ...ArticlePageData } fragment BlockData on _IContent { ...IContentData ...CardBlockData ...FooterData ...SocialIconFooter ...ImageBannerData ...JWHeaderData ...OfficeLocationData ...ButtonBlockData ...MegaMenuGroupBlockData ...NavigationMenuBlockData } fragment IContentData on _IContent { _metadata { ...IContentInfo } _type: __typename } fragment BlankExperienceData on BlankExperience { ...ExperienceData } fragment ArticleGroupPageData on ArticleGroupPage { articleGroupTitle articleGroupIntro { json } MainContent { ...BlockData } } fragment ArticlePageData on ArticlePage { metadata: _metadata { published } articleHeroImage { ...ReferenceData } articleAuthors articleTitle articleBody { json } } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } } fragment LinkData on ContentUrl { base hierarchical default } fragment ExperienceData on _IExperience { composition { ...CompositionData } } fragment CompositionData on ICompositionNode { name: displayName layoutType: nodeType type key template: displayTemplateKey settings: displaySettings { key value } ... on ICompositionStructureNode { nodes @recursive(depth: 10) { name: displayName } } ... on ICompositionElementNode { element { ...ElementData } } } fragment ElementData on _IElement { ...IElementData ...ArticleListElementData ...FeaturedTileData ...CTAElementData ...HeadingElementData ...ImageElementData ...ParagraphElementData ...TestimonialElementData } fragment IElementData on _IElement { _metadata { ...IContentInfo } _type: __typename } fragment ArticleListElementData on ArticleListElement { articleListCount } fragment FeaturedTileData on FeaturedTile { title: Title variant: Variant description: Description { json } image: Image { ...ReferenceData } cta1: CTA1 { ...LinkData } cta2: CTA2 { ...LinkData } } fragment CTAElementData on CTAElement { text: Text link: Link { ...LinkData } } fragment HeadingElementData on HeadingElement { headingText } fragment ImageElementData on ImageElement { altText imageLink { ...ReferenceData } } fragment ParagraphElementData on ParagraphElement { paragraph: text { json } } fragment TestimonialElementData on TestimonialElement { referenceTitle referenceText { json } customerName customerLocation customerImage { ...ReferenceData } } fragment ReferenceData on ContentReference { key url { ...LinkData } } fragment CardBlockData on CardBlock { heading: CardHeading subheading: CardSubheading description: CardDescription { json } icon: CardIcon { ...ReferenceData } image: CardImage { ...ReferenceData } link: CardButton { ...ButtonBlockPropertyData } color: CardColor layout: CardImageLayout } fragment FooterData on Footer { copyrighttext: CopyrightText footertext: FooterText { json } links: FooterLinks { ...LinkItemData } icons: Icons { ...SocialIconFooter } columns: FooterColumns { ... on FooterColumn { Title Icon { ...ReferenceData } ColumnItems { ...LinkItemData } } } Logo { ...ReferenceData } } fragment SocialIconFooter on JWSocialIcon { ... on JWSocialIcon { IconName IconValue { ...ReferenceData } Link { ...LinkData } } } fragment ImageBannerData on ImageBanner { title: Title variant: Variant description: Description { json } image: Image { ...ReferenceData } cta1: CTA1 { ...ButtonBlockPropertyData } cta2: CTA2 { ...ButtonBlockPropertyData } } fragment JWHeaderData on JWHeader { logo: HeaderLogo { ...ReferenceData } bannerr: HeaderBanner { ...ReferenceData } topbar: HeaderTopBar { ... on JWHeaderTopBar { LeftNavigationLinks { ...LinkItemData } SearchIcon { ...ReferenceData } FindAStore { ...ReferenceData } } } mainNav: HeaderMainNavigation { ... on JWMainNavigation { Title IsTabLayout HeaderColumns { ... on JWHeaderColumn { HeaderColumnTitle HeaderColumnLinks { ...LinkItemData } } } } } } fragment OfficeLocationData on OfficeLocation { title: OfficeTitle street1: OfficeAddressStreet1 street2: OfficeAddressStreet2 postalcode: OfficeAddressPostalCode city: OfficeAddressCity country: OfficeAddressCountry phone: OfficePhone email: OfficeEmail } fragment ButtonBlockData on ButtonBlock { text link { ...LinkData } className buttonType variant } fragment MegaMenuGroupBlockData on MegaMenuGroupBlock { menuName: MenuMenuHeading menuLink: MegaMenuUrl { ...LinkData } menuData: MegaMenuContentArea { __typename ...IContentData ...NavigationMenuBlockData ...CardBlockData } } fragment NavigationMenuBlockData on NavigationMenuBlock { title: MenuNavigationHeading items: NavigationLinks { ...LinkItemData } } fragment ButtonBlockPropertyData on ButtonBlockProperty { text link { ...LinkData } className buttonType variant } fragment LinkItemData on Link { title text target url { ...LinkData } }`
  return client.request<Types.getContentByIdQuery, Types.getContentByIdQueryVariables>(query, variables)
}

