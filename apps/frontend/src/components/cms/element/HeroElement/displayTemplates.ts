import type { LayoutProps } from "@remkoj/optimizely-cms-react/components"
import type { ReactNode } from "react"
import type DefaultHeroElementStyles from "./DefaultHeroElement.opti-style.json"

export type DefaultHeroElementProps = LayoutProps<typeof DefaultHeroElementStyles>
export type DefaultHeroElementComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: DefaultHeroElementProps | undefined
} & JSX.IntrinsicElements['div']
export type DefaultHeroElementComponent<DT extends Record<string, any> = Record<string, any>> = (props: DefaultHeroElementComponentProps<DT>) => ReactNode

export type HeroElementLayoutProps = DefaultHeroElementProps
export type HeroElementComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends HeroElementLayoutProps = HeroElementLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type HeroElementComponent<DT extends Record<string, any> = Record<string, any>, LP extends HeroElementLayoutProps = HeroElementLayoutProps> = (props: HeroElementComponentProps<DT,LP>) => ReactNode