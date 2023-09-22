import VBreadcrumbs, { type VBreadcrumbItem } from '@morpheme/breadcrumbs';
import { __VLS_internalComponent } from './Breadcrumbs.vue';

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export const items = ref < VBreadcrumbItem[] > ([
{
title: 'Home',
to: '/'
},
{
title: 'Account',
to: '/account'
},
{
title: 'Profile',
to: '/account/profile'
},
]);
export const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});
const __VLS_componentsOption = {};
let __VLS_name!: 'Breadcrumbs';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'VBreadcrumbs', typeof __VLS_localComponents, "VBreadcrumbs", "VBreadcrumbs", "VBreadcrumbs"> &
__VLS_WithComponent<'VBreadcrumbsItem', typeof __VLS_localComponents, "VBreadcrumbsItem", "VBreadcrumbsItem", "VBreadcrumbsItem"> &
__VLS_WithComponent<'Home02Icon', typeof __VLS_localComponents, "Home02Icon", "Home02Icon", "Home02Icon"> &
__VLS_WithComponent<'VBreadcrumbsDivider', typeof __VLS_localComponents, "VBreadcrumbsDivider", "VBreadcrumbsDivider", "VBreadcrumbsDivider">;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
__VLS_components.VBreadcrumbs; __VLS_components.VBreadcrumbs;
// @ts-ignore
[VBreadcrumbs, VBreadcrumbs,];
__VLS_components.VBreadcrumbsItem; __VLS_components.VBreadcrumbsItem; __VLS_components.VBreadcrumbsItem; __VLS_components.VBreadcrumbsItem;
// @ts-ignore
[VBreadcrumbsItem, VBreadcrumbsItem, VBreadcrumbsItem, VBreadcrumbsItem,];
__VLS_components.Home02Icon;
// @ts-ignore
[Home02Icon,];
__VLS_components.VBreadcrumbsDivider; __VLS_components.VBreadcrumbsDivider;
// @ts-ignore
[VBreadcrumbsDivider, VBreadcrumbsDivider,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{ ...{}, class: ("container mx-auto px-4 pt-6"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
let __VLS_4!: 'VBreadcrumbs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBreadcrumbs : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBreadcrumbs'];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({ ...{}, }));
({} as { VBreadcrumbs: typeof __VLS_4; }).VBreadcrumbs;
({} as { VBreadcrumbs: typeof __VLS_4; }).VBreadcrumbs;
const __VLS_6 = __VLS_5({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
let __VLS_8!: 'VBreadcrumbsItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBreadcrumbsItem : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBreadcrumbsItem'];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{}, to: ("/"), }));
({} as { VBreadcrumbsItem: typeof __VLS_8; }).VBreadcrumbsItem;
({} as { VBreadcrumbsItem: typeof __VLS_8; }).VBreadcrumbsItem;
const __VLS_10 = __VLS_9({ ...{ ...{}, to: ("/"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
let __VLS_12!: 'Home02Icon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Home02Icon : (typeof __VLS_resolvedLocalAndGlobalComponents)['Home02Icon'];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{}, class: ("w-6 h-6 p-1"), }));
({} as { Home02Icon: typeof __VLS_12; }).Home02Icon;
const __VLS_14 = __VLS_13({ ...{ ...{}, class: ("w-6 h-6 p-1"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
}
(__VLS_11.slots!).default;
}
{
let __VLS_16!: 'VBreadcrumbsDivider' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBreadcrumbsDivider : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBreadcrumbsDivider'];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{}, }));
({} as { VBreadcrumbsDivider: typeof __VLS_16; }).VBreadcrumbsDivider;
const __VLS_18 = __VLS_17({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
}
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.items)!)) {
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_22 = __VLS_21({ ...{ ...{}, key: ((item.title)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
{
let __VLS_24!: 'VBreadcrumbsItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBreadcrumbsItem : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBreadcrumbsItem'];
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{}, to: ((item.to)), }));
({} as { VBreadcrumbsItem: typeof __VLS_24; }).VBreadcrumbsItem;
({} as { VBreadcrumbsItem: typeof __VLS_24; }).VBreadcrumbsItem;
const __VLS_26 = __VLS_25({ ...{ ...{}, to: ((item.to)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26)!;
(item.title);
(__VLS_27.slots!).default;
}
if (__VLS_ctx.items.length - 1 !== index) {
{
let __VLS_28!: 'VBreadcrumbsDivider' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBreadcrumbsDivider : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBreadcrumbsDivider'];
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{}, }));
({} as { VBreadcrumbsDivider: typeof __VLS_28; }).VBreadcrumbsDivider;
const __VLS_30 = __VLS_29({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_29));
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
}
// @ts-ignore
[items, items,];
}
(__VLS_23.slots!).default;
}
}
(__VLS_7.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
