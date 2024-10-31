import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { CustomHeadingDataFragmentDoc, type CustomHeadingDataFragment } from "@/gql/graphql";
import { extractSettings } from "@remkoj/optimizely-cms-react/components"

/**
 * Custom Heading
 * 
 */
export const CustomHeadingElement : CmsComponent<CustomHeadingDataFragment> = ({ data: {title}, layoutProps, className, children, ...containerProps }) => {
    const componentName = 'Custom Heading'
    const componentInfo = ''

    const { headingType, showAs, textAlign, transform } = extractSettings(layoutProps)
    const cssClasses : (string | undefined)[] = [ className, 'flex-initial' ]
    const Component = showAs == 'element' ? 'p' : !headingType || headingType == 'plain' ? 'p' : headingType

    switch (transform) {
        case 'uppercase':
            cssClasses.push('uppercase')
            break;
        case 'lowercase':
            cssClasses.push('lowercase')
            break;
        case 'capitalize':
            cssClasses.push('capitalize')
            break;
    }

    const cssClassName = cssClasses.filter(x => x).join(' ')

    
    return <Component className={ cssClassName } {...containerProps}>{ title }</Component>
    /* <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }}
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div> */
}
CustomHeadingElement.displayName = "Custom Heading (Element/CustomHeading)"
CustomHeadingElement.getDataFragment = () => ['CustomHeadingData', CustomHeadingDataFragmentDoc]

export default CustomHeadingElement