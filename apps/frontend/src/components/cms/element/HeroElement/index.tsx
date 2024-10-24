// Base Optimizely CMS Framework components
import { type CmsComponent } from "@remkoj/optimizely-cms-react"
import { type HeroElementDataFragment, HeroElementDataFragmentDoc } from "@/gql/graphql"
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'

// Image Element types and templates
import type { HeroElementLayoutProps } from './displayTemplates'
import DefaultHeroElement from "./_default-image"

export const HeroElementElement : CmsComponent<HeroElementDataFragment, HeroElementLayoutProps> = ({ data, layoutProps, contentLink }) =>
{
    
    return <CmsEditable as={ DefaultHeroElement } data={ data } layoutProps={layoutProps} cmsId={ contentLink.key } />
}
HeroElementElement.displayName = "Hero (Element/ImageElement)"
HeroElementElement.getDataFragment = () => ['HeroElementData', HeroElementDataFragmentDoc]

export default HeroElementElement