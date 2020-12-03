// TODO: add more actions here as a union and update type checks
export type ActionItem = OptionsActionItem|ResetActionItem;
export const isActionItem = (item: unknown): item is ActionItem =>
    isOptionsActionItem(item) || isResetActionItem(item)

export type OptionsActionItem = {
    action: 'CHOICE';
    options: object;
}

export type ResetActionItem = {
    action: 'RESET';
}

export const isOptionsActionItem = (item: unknown): item is OptionsActionItem =>
    typeof (item) === "object" && (item as any).action === "CHOICE" && typeof ((item as any).options) === "object";

export const isResetActionItem = (item: unknown): item is ResetActionItem =>
    typeof (item) === "object" && (item as any).action === "RESET";
