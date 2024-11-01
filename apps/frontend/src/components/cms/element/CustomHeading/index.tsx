import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { CustomHeadingDataFragmentDoc, type CustomHeadingDataFragment } from "@/gql/graphql";
import { extractSettings } from "@remkoj/optimizely-cms-react/components"

/**
 * Custom Heading
 * 
 */
export const CustomHeadingElement : CmsComponent<CustomHeadingDataFragment> = ({ data: {title}, layoutProps, children }) => {
    const componentName = 'Custom Heading'
    const componentInfo = ''
   
    return <div>{ title }</div>
   
}
CustomHeadingElement.displayName = "Custom Heading (Element/CustomHeading)"
CustomHeadingElement.getDataFragment = () => ['CustomHeadingData', CustomHeadingDataFragmentDoc]

export default CustomHeadingElement