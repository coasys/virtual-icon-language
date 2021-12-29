import type { Address, Interaction, Agent, Language, LanguageContext } from "@perspect3vism/ad4m";
import Adapter from './adapter'
import { VirtualIconExpressionUI } from './VirtualIconExpressionUI'

function interactions(expression: Address): Interaction[] {
    return []
}
export const name: string = 'virtual-icons'

export default function create(context: LanguageContext): Language {
    const expressionAdapter = new Adapter(context)
    const expressionUI = new VirtualIconExpressionUI()

    return {
        name,
        expressionAdapter,
        expressionUI,
        interactions,
    } as Language
}

